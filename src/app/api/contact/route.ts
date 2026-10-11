import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // In a production deployment, credentials can be set via env vars:
    // E.g., RESEND_API_KEY, SMTP_HOST, etc.
    // If not provided, we store or log gracefully and acknowledge receipt.
    console.log("[Contact Inquiry Received]:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out, Manish will review your inquiry and get back to you within 24 hours.",
        data: {
          name: validatedData.name,
          receivedAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    if (error?.errors) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors.map((e: any) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
