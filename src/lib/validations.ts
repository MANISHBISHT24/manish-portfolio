import { z } from "zod";

export const contactSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .max(254, "Email address is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  consent: z.literal(true, {
    error: "Please consent to use your email and message to respond.",
  }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
