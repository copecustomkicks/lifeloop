import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg py-24 px-4">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-extrabold text-heading mb-3">
            Privacy Policy
          </h1>
          <p className="text-soft text-sm mb-10">Last updated: January 1, 2025</p>

          <div className="prose prose-purple dark:prose-invert max-w-none space-y-8 text-mid leading-relaxed">
            <section>
              <h2 className="font-display text-xl font-bold text-heading mb-3">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, such as your email address when you
                sign up for a waitlist or create an account. We also collect usage data to improve
                the product.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-heading mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use your information to provide and improve the service, send you important
                updates, and respond to your support requests. We never sell your data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-heading mb-3">
                3. Data Security
              </h2>
              <p>
                We take reasonable measures to protect your information from unauthorized access,
                disclosure, or destruction. Your task data is stored securely and never shared
                with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-heading mb-3">
                4. Contact
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:privacy@lifeloop.app"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  privacy@lifeloop.app
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
