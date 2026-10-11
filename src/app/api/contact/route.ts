import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "manishbisht12390@gmail.com";

    console.log("[Contact Inquiry Received]:", {
      timestamp: new Date().toISOString(),
      ...validatedData,
    });

    let emailSent = false;
    let emailId = null;

    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: "Portfolio Inquiry <onboarding@resend.dev>",
          to: [recipientEmail],
          replyTo: validatedData.email,
          subject: `New Freelance Inquiry: ${validatedData.name} (${validatedData.budget || "INR"})`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff; color: #171717;">
              <div style="border-bottom: 2px solid #78866B; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #171717; font-size: 22px;">New Project Inquiry</h2>
                <p style="margin: 4px 0 0 0; color: #737373; font-size: 14px;">Received via manishbisht.dev portfolio</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #737373; width: 140px;"><strong>Client Name:</strong></td>
                  <td style="padding: 8px 0; color: #171717;">${validatedData.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #737373;"><strong>Client Email:</strong></td>
                  <td style="padding: 8px 0; color: #171717;"><a href="mailto:${validatedData.email}" style="color: #78866B; text-decoration: underline;">${validatedData.email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #737373;"><strong>Service:</strong></td>
                  <td style="padding: 8px 0; color: #171717;">${validatedData.projectType}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #737373;"><strong>Budget:</strong></td>
                  <td style="padding: 8px 0; color: #171717; font-weight: 600;">${validatedData.budget || "Not specified"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #737373;"><strong>Timeline:</strong></td>
                  <td style="padding: 8px 0; color: #171717;">${validatedData.timeline || "Not specified"}</td>
                </tr>
              </table>

              <div style="background-color: #F8F8F6; padding: 18px; border-radius: 8px; border-left: 4px solid #78866B; margin-bottom: 24px;">
                <h4 style="margin: 0 0 8px 0; color: #171717; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Project Overview:</h4>
                <p style="margin: 0; color: #333333; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${validatedData.message}</p>
              </div>

              <div style="border-top: 1px solid #eaeaea; padding-top: 16px; font-size: 12px; color: #a3a3a3; text-align: center;">
                Click "Reply" to directly email ${validatedData.name} (${validatedData.email})
              </div>
            </div>
          `,
        });

        if (error) {
          console.error("[Resend Error]:", error);
        } else {
          emailSent = true;
          emailId = data?.id;
          console.log("[Resend Success] Delivered Email ID:", emailId);
        }
      } catch (sendErr) {
        console.error("[Resend Exception]:", sendErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out, Manish will review your inquiry and get back to you within 24 hours.",
        data: {
          name: validatedData.name,
          receivedAt: new Date().toISOString(),
          emailDelivered: emailSent,
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
