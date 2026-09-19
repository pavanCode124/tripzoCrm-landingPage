import { Reveal } from '@/components/ui/Reveal';

/**
 * Every section opens the same way: a heading whose last clause carries the
 * brand colour, and an optional standfirst stacked underneath.
 *
 * No eyebrow label above it. The heading names the section on its own, and a
 * small caps label on every section is the rhythm of a template.
 */
export function SectionHeading({
  title,
  accent,
  sub,
  align = 'center',
  as: Tag = 'h2',
}: {
  title: string;
  accent?: string;
  sub?: string;
  align?: 'center' | 'left';
  as?: 'h2' | 'h3';
}) {
  const centered = align === 'center';

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-xl'}>
      <Reveal>
        <Tag className="font-display text-section font-semibold text-balance text-ink">
          {title}{' '}
          {accent ? <span className="text-brand sm:whitespace-nowrap">{accent}</span> : null}
        </Tag>
      </Reveal>

      {sub ? (
        <Reveal delay={0.08}>
          <p
            className={`text-lede mt-5 text-pretty text-ink-muted ${centered ? 'mx-auto max-w-2xl' : ''}`}>
            {sub}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
