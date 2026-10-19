import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// User input is interpolated into an HTML email, so escape it to prevent HTML injection.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      const rawBody = await request.text();
      if (new TextEncoder().encode(rawBody).byteLength > 16_000) {
        return NextResponse.json(
          { success: false, message: "The inquiry is too large." },
          { status: 413 }
        );
      }
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: parsed.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }
    const validatedData = parsed.data;
    const safe = {
      email: escapeHtml(validatedData.email),
      message: escapeHtml(validatedData.message),
    };
    const submittedAt = new Date().toISOString();

    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || "manishbisht12390@gmail.com";

    let emailAccepted = false;

    if (resend) {
      try {
        const { error } = await resend.emails.send({
          from: "Portfolio Inquiry <onboarding@resend.dev>",
          to: [recipientEmail],
          replyTo: validatedData.email,
          subject: "New portfolio inquiry",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 12px; background-color: #ffffff; color: #171717;">
              <div style="border-bottom: 2px solid #556B49; padding-bottom: 16px; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #171717; font-size: 22px;">New portfolio inquiry</h2>
                <p style="margin: 4px 0 0 0; color: #666666; font-size: 14px;">Received via manishbisht.dev</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #666666; width: 140px;"><strong>Email address:</strong></td>
                  <td style="padding: 8px 0; color: #171717;"><a href="mailto:${safe.email}" style="color: #405b35; text-decoration: underline;">${safe.email}</a></td>
                </tr>
              </table>

              <div style="background-color: #F8F8F6; padding: 18px; border-radius: 8px; border-left: 4px solid #556B49; margin-bottom: 24px;">
                <h4 style="margin: 0 0 8px 0; color: #171717; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message:</h4>
                <p style="margin: 0; color: #333333; line-height: 1.6; font-size: 14px; white-space: pre-wrap;">${safe.message}</p>
              </div>

              <div style="border-top: 1px solid #eaeaea; padding-top: 16px; font-size: 12px; color: #666666; text-align: center;">
                Consent recorded: “I agree that Manish Bisht may use my email address and message, including sharing them with email service providers, to respond to this inquiry.” Submitted at ${submittedAt} UTC.
              </div>
            </div>
          `,
        });

        if (error) {
          console.error("[Contact email delivery failed]");
        } else {
          emailAccepted = true;
        }
      } catch {
        console.error("[Contact email delivery failed]");
      }
    }

    if (!emailAccepted) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your message could not be delivered right now. Please email me directly at manishbisht12390@gmail.com.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry was submitted for email delivery.",
        data: {
          receivedAt: submittedAt,
          emailAccepted,
        },
      },
      { status: 200 }
    );
  } catch {
    console.error("[Contact API Error]");
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
