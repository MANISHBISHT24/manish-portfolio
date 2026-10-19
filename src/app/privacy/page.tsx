import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Manish Bisht",
  description: "How Manish Bisht handles contact inquiry information on this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information this portfolio receives, why it is used, and how you can contact Manish Bisht about it."
    >
      <section>
        <h2>Who operates this site</h2>
        <p>
          This site is operated by Manish Bisht, an independent freelance web developer in
          Uttarakhand, India. For privacy questions or requests, email{" "}
          <a href="mailto:manishbisht12390@gmail.com">manishbisht12390@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Information collected and why</h2>
        <p>
          If you use the contact form, it asks only for your email address and message. It also
          records that you checked the consent box and the submission time so the inquiry and its
          consent can be handled together. The form does not ask for your name, phone number,
          budget, or project timeline. Please do not send passwords, payment-card data, health
          information, or other sensitive information.
        </p>
        <ul>
          <li>Use your email address to reply to your inquiry.</li>
          <li>Use your message to understand and respond to the request you sent.</li>
          <li>Use the consent value and submission time to document that you asked us to handle the inquiry.</li>
        </ul>
        <p>
          The site does not ask for information for advertising, profiling, or a mailing list.
          Sending an email directly is also your choice; the information in that email will be used
          to respond to it.
        </p>
      </section>

      <section>
        <h2>How the inquiry is handled</h2>
        <p>
          The website does not store contact submissions in a site database. The form sends the
          email address and message through Resend, an email delivery service, to the contact
          mailbox. Resend and the mailbox provider handle that information to deliver and hold the
          message under their own service terms and privacy practices. The hosting provider may
          also process technical request information, such as IP address, request time, and browser
          details, to operate and protect the site. The hosting provider depends on where the site
          is deployed.
        </p>
        <p>
          No analytics, advertising pixels, or third-party content embeds are configured in the
          supplied site code. Outbound links to GitHub and LinkedIn load those services only if you
          choose to open them.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          If an inquiry does not become a project, the target is to delete it from the contact
          mailbox and administrative copies within 90 days of receipt. If a project proceeds,
          relevant correspondence may be kept for the engagement and for any longer period required
          for legal, accounting, or dispute-resolution purposes. Copies retained in service-provider
          backups are subject to those providers’ retention practices.
        </p>
      </section>

      <section>
        <h2>Your choices and requests</h2>
        <p>
          You may ask for access to, correction of, or deletion of an inquiry, or withdraw consent
          for further handling, by emailing{" "}
          <a href="mailto:manishbisht12390@gmail.com">manishbisht12390@gmail.com</a>. If consent is
          withdrawn while an inquiry is being handled, further follow-up will stop; information may
          still be retained where necessary for a legal, security, or contract-related purpose.
          Requests will be handled under applicable law, including any DPDP Act rights when those
          provisions apply.
        </p>
      </section>

      <section>
        <h2>Children and changes</h2>
        <p>
          This portfolio and its services are not directed to children, and the contact form should
          not be used to send children’s personal information. This policy may be updated when the
          site’s data practices change. The current version will show its update date at the top.
        </p>
      </section>
    </LegalPage>
  );
}
