import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Manish Bisht",
  description: "Cookie and tracking information for the Manish Bisht portfolio website.",
  alternates: { canonical: "/cookies" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="The supplied website code does not configure analytics, advertising, or preference cookies. This page describes what was found in that code."
    >
      <section>
        <h2>Cookies and browser storage</h2>
        <p>
          The current site code does not intentionally set cookies or use local storage or session
          storage. It does not load an analytics tool, advertising pixel, social-media widget, or
          embedded third-party player. Next.js fonts are bundled with the site for visitors rather
          than loaded from Google in the browser.
        </p>
        <p>
          Because no non-essential cookie or tracking tool is configured in the supplied code,
          this version does not display a cookie-consent banner. The hosting or security provider
          may use strictly operational technologies depending on deployment settings; check the
          production configuration and provider terms before launch.
        </p>
      </section>

      <section>
        <h2>External services and links</h2>
        <p>
          The contact form sends an inquiry to Resend on the server so it can be delivered by email;
          it does not load a Resend widget into your browser. Links to GitHub and LinkedIn are
          ordinary outbound links. If you follow one, that service may use its own cookies and
          privacy practices.
        </p>
      </section>

      <section>
        <h2>If the site changes</h2>
        <p>
          If analytics, advertising, chat, maps, video, social embeds, or other non-essential storage
          is added, this policy and the consent approach will be reviewed before enabling it. You
          can ask questions at{" "}
          <a href="mailto:manishbisht12390@gmail.com">manishbisht12390@gmail.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
