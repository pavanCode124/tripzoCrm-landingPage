import { Reveal } from '@/components/ui/Reveal';

/**
 * Every section opens the same way: a small-caps eyebrow, a heading whose last
 * clause is set in the serif, and an optional standfirst.
 *
 * Centralised because the rhythm only works if it is identical each time — a
 * section that sets its own margins is the one that makes the page feel
 * assembled rather than designed.
 *
 * `tone="dark"` is for the two inverted sections. It swaps the text ramp and the
 * gradient rather than relying on opacity, because grey-on-near-black set with
 * alpha goes muddy at small sizes.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  align = 'center',
  tone = 'light',
  onPhoto = false,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  sub?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
  /** Sitting over a photograph — uses the darker copy colour. */
  onPhoto?: boolean;
}) {
  const centered = align === 'center';
  const onDark = tone === 'dark';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow ? (
        <Reveal>
          <p className={`eyebrow ${onDark ? 'text-brand-lift' : ''}`}>{eyebrow}</p>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2
          className={`text-section mt-4 font-bold text-balance ${
            onDark ? 'text-chalk' : 'text-ink'
          }`}>
          {title}{' '}
          {accent ? (
            <span
              className={`font-display italic ${onDark ? 'gradient-text-dark' : 'gradient-text'}`}>
              {accent}
            </span>
          ) : null}
        </h2>
      </Reveal>

      {sub ? (
        <Reveal delay={0.12}>
          <p
            className={`text-lede mt-5 text-pretty ${onDark ? 'text-chalk-muted' : onPhoto ? 'text-ink-photo' : 'text-ink-muted'} ${
              centered ? 'mx-auto max-w-2xl' : ''
            }`}>
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
