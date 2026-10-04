import type { ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  accentWords?: string[];
  updatedAt: string;
  children: ReactNode;
  seoTitle?: string;
  seoDescription?: string;
  path?: string;
}

/**
 * Layout commun aux pages légales : hero court + prose centrée.
 */
export function LegalLayout({
  eyebrow,
  title,
  accentWords = [],
  updatedAt,
  children,
  seoTitle,
  seoDescription,
  path,
}: LegalLayoutProps) {
  useLenis();

  return (
    <div className="min-h-screen bg-bg text-wh">
      {seoTitle && seoDescription && (
        <SEO title={seoTitle} description={seoDescription} path={path} />
      )}
      <Header />
      <main>
        {/* Hero court */}
        <section className="relative flex min-h-[40vh] items-center pt-32 pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, hsl(var(--or) / 0.08), transparent 70%)",
            }}
          />
          <Container size="narrow">
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <AnimatedText
              as="h1"
              trigger="mount"
              text={title}
              accentWords={accentWords}
              className="mt-6 font-display text-display-section text-wh"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 font-mono text-xs uppercase tracking-widest text-gr2">
                {updatedAt}
              </p>
            </Reveal>
          </Container>
        </section>

        {/* Prose */}
        <section className="bg-bg pb-32">
          <Container size="narrow">
            <Reveal>
              <div className="legal-prose space-y-8">{children}</div>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
