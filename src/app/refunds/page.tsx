import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | Manish Bisht",
  description: "Refund and cancellation information for inquiries and freelance projects.",
  alternates: { canonical: "/refunds" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="This website is a portfolio and inquiry form. It does not sell services through a checkout or collect payment."
    >
      <section>
        <h2>No website purchases</h2>
        <p>
          No purchase or payment can currently be made on this website, so there is no website
          checkout payment to refund.
        </p>
      </section>

      <section>
        <h2>Freelance project payments</h2>
        <p>
          If a project is accepted, its written proposal or contract will set the fees, payment
          schedule, milestones, cancellation process, and any refund terms before payment is due.
          Those agreed terms will be considered alongside applicable consumer-protection law.
          No blanket “no refunds” rule is created by this page.
        </p>
        <p>
          If an agreement does not explain a cancellation or refund situation, contact Manish at{" "}
          <a href="mailto:manishbisht12390@gmail.com">manishbisht12390@gmail.com</a> with the
          project and payment details. The request will be reviewed against the written scope,
          work completed, costs already committed, and applicable law.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For a refund or cancellation question, email{" "}
          <a href="mailto:manishbisht12390@gmail.com">manishbisht12390@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
