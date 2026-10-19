import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions | Manish Bisht",
  description: "Terms for using the Manish Bisht portfolio website and making an inquiry.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="These terms cover use of this portfolio website. A project inquiry is not an offer acceptance or a service contract."
    >
      <section>
        <h2>About this website</h2>
        <p>
          The site is operated by Manish Bisht, an independent freelance web developer in
          Uttarakhand, India. It provides portfolio information and a way to make contact. The site
          does not accept orders or payments.
        </p>
      </section>

      <section>
        <h2>Project inquiries and agreements</h2>
        <p>
          Service descriptions and portfolio entries are general information. A contact form
          submission does not reserve availability, set a price, guarantee a delivery date, or
          create a client relationship. Before work or payment begins, the project scope, fees,
          milestones, responsibilities, delivery terms, cancellation, and any refund terms must be
          agreed in a separate written proposal or contract.
        </p>
      </section>

      <section>
        <h2>Portfolio content and third-party rights</h2>
        <p>
          Do not copy or reuse portfolio text, designs, or images without permission or another
          applicable licence. Third-party names, marks, software, and materials remain subject to
          their owners’ rights. Links to external services are provided for convenience; their
          content and terms are controlled by those services. A link does not mean that a third
          party endorses this site or its operator.
        </p>
      </section>

      <section>
        <h2>Use and availability</h2>
        <p>
          Please use the site lawfully and do not attempt to disrupt it, submit malicious content,
          or access systems without permission. The site and its external links may change or become
          unavailable. Nothing on this page excludes or limits rights that cannot be excluded under
          applicable law.
        </p>
      </section>

      <section>
        <h2>Governing law and contact</h2>
        <p>
          These terms are subject to applicable laws of India. Contact Manish Bisht at{" "}
          <a href="mailto:manishbisht12390@gmail.com">manishbisht12390@gmail.com</a> with a
          question about these terms.
        </p>
      </section>
    </LegalPage>
  );
}
