import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { AnimatedText } from "@/components/atoms/AnimatedText";
import { Reveal } from "@/components/atoms/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  accentWords?: string[];
  intro?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * SectionHeader — En-tête unifié pour toutes les sections.
 * Garantit cohérence verticale, typographique et d'animation.
 */
export function SectionHeader({
  eyebrow,
  title,
  accentWords = [],
  intro,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div
      className={cn(
        "max-w-3xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <AnimatedText
        as="h2"
        text={title}
        accentWords={accentWords}
        className="mt-6 font-display text-display-section text-wh"
      />
      {intro && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "mt-6 text-body text-gr",
              isCenter && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
