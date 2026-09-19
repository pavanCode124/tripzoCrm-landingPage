'use client';

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  type MotionValue,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

import {
  ArrowPathIcon,
  BanknotesIcon,
  BellIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
  PauseIcon,
  PhoneIcon,
  PlayIcon,
  TagIcon,
  WhatsAppIcon,
} from '@/components/ui/icons';
import { EASE_OUT } from '@/components/ui/Reveal';
import { useReducedMotionSafe } from '@/components/ui/useReducedMotionSafe';
import { FLOW, type FlowStage } from '@/lib/content';

const STAGES = FLOW.stages;
const N = STAGES.length;
/* The route is drawn in this coordinate space and scaled to fit. */
const VB_W = 1200;
const VB_H = 180;
const MIN_ROUTE_W = 880;

const POINTS = STAGES.map((_, i) => ({
  x: 70 + i * ((VB_W - 140) / (N - 1)),
  y: i % 2 === 0 ? 130 : 52,
}));

function pathThrough(count: number) {
  let d = `M ${POINTS[0].x} ${POINTS[0].y}`;
  for (let i = 1; i < count; i++) {
    const a = POINTS[i - 1];
    const b = POINTS[i];
    const dx = (b.x - a.x) / 2;
    d += ` C ${a.x + dx} ${a.y} ${b.x - dx} ${b.y} ${b.x} ${b.y}`;
  }
  return d;
}

const ROUTE = pathThrough(N);

const ICONS: Record<string, ReactNode> = {
  whatsapp: <WhatsAppIcon size={18} />,
  call: <PhoneIcon className="size-[18px]" />,
  tags: <TagIcon className="size-[18px]" />,
  quote: <DocumentTextIcon className="size-[18px]" />,
  reminder: <BellIcon className="size-[18px]" />,
  revise: <ArrowPathIcon className="size-[18px]" />,
  payment: <BanknotesIcon className="size-[18px]" />,
  booked: <CheckIcon className="size-[18px]" />,
};

/**
 * The pipeline, as a journey.
 *
 * A travel CRM's pipeline drawn as a flight route: eight stops, one per stage,
 * joined by a dashed path. A plane carries the lead from stop to stop, the
 * route inks in behind it, and each stop lights up in the product's own status
 * colour. Beside it, the lead card updates: the status chip changes and the
 * activity log gains the entry TripzoCRM just made.
 *
 * The page scrolls normally past it. While the section is on screen it plays
 * through the stages by itself, and any stop can be clicked to jump there,
 * which pauses the tour so the reader can take that stage in. Prev / play /
 * next controls sit under the stage text; the stops are real buttons.
 */
const DWELL_MS = 2600;
const DWELL_LAST_MS = 4200;

export function LeadFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reduce = useReducedMotionSafe();
  const inView = useInView(sectionRef, { amount: 0.35 });

  const t = useMotionValue(0);
  const tSmooth = useSpring(t, { stiffness: 90, damping: 20, mass: 0.8 });

  const show = useCallback(
    (i: number) => {
      if (i === 0 && t.get() > 0) {
        // Back to the start: no flight backward across the whole route.
        t.jump(0);
        tSmooth.jump(0);
      } else {
        t.set(i);
      }
      setIndex(i);
    },
    [t, tSmooth],
  );

  useEffect(() => {
    if (!playing || !inView) return;
    const id = window.setTimeout(
      () => show(index === N - 1 ? 0 : index + 1),
      index === N - 1 ? DWELL_LAST_MS : DWELL_MS,
    );
    return () => window.clearTimeout(id);
  }, [index, playing, inView, show]);

  function pick(i: number) {
    setPlaying(false);
    if (i < index) {
      t.set(i);
      setIndex(i);
    } else {
      show(i);
    }
  }

  const stage = STAGES[index];

  return (
    <section id="pipeline" ref={sectionRef} className="section-edge relative overflow-hidden py-24 sm:py-28">
      {/* Colour grade: lavender band, with the current stage's hue blooming in */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f7f3fe_0%,#fbfaff_55%,#ffffff_100%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[28%] left-1/2 h-[55%] w-[80%] -translate-x-1/2 rounded-full opacity-80 blur-[120px] transition-colors duration-700"
        style={{ backgroundColor: stage.wash }}
      />

      <div className="shell relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-section font-semibold text-balance text-ink">
            {FLOW.title} <span className="text-brand sm:whitespace-nowrap">{FLOW.accent}</span>
          </h2>
          <p className="text-lede mx-auto mt-4 max-w-2xl text-pretty text-ink-muted">{FLOW.sub}</p>
        </div>

        <Route t={reduce ? t : tSmooth} index={index} onPick={pick} />

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-12">
          <div>
            <StageDetail stage={stage} index={index} />

            <div className="mt-6 flex items-center gap-2">
              <ControlButton label="Previous stage" onClick={() => pick(Math.max(0, index - 1))} disabled={index === 0}>
                <ChevronLeftIcon className="size-4" />
              </ControlButton>
              <ControlButton label={playing ? 'Pause the tour' : 'Play the tour'} onClick={() => setPlaying((v) => !v)} primary>
                {playing ? <PauseIcon className="size-4" /> : <PlayIcon className="size-4" />}
              </ControlButton>
              <ControlButton label="Next stage" onClick={() => pick(Math.min(N - 1, index + 1))} disabled={index === N - 1}>
                <ChevronRightIcon className="size-4" />
              </ControlButton>
              <span className="ml-2 text-[0.8125rem] text-ink-faint">{playing ? 'Playing' : 'Paused'}. Click any stop to jump.</span>
            </div>

            <p className="mt-5 text-[0.8125rem] text-ink-faint">{FLOW.aside}</p>
          </div>
          <LeadCard index={index} />
        </div>
      </div>
    </section>
  );
}

function ControlButton({
  label,
  onClick,
  disabled = false,
  primary = false,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`btn-press grid size-10 place-items-center rounded-full transition-[background-color,opacity] duration-200 disabled:opacity-40 ${
        primary
          ? 'btn-primary'
          : 'border border-line-strong bg-white text-ink hover:bg-canvas-2'
      }`}>
      {children}
    </button>
  );
}

function Route({ t, index, onPick }: { t: MotionValue<number>; index: number; onPick: (i: number) => void }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const routeRef = useRef<SVGPathElement>(null);
  const inkRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const lens = useRef<number[]>([]);
  const total = useRef(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Length of the route up to each stop, so t = 3 lands exactly on stop 3.
  useEffect(() => {
    const probe = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    lens.current = STAGES.map((_, i) => {
      if (i === 0) return 0;
      probe.setAttribute('d', pathThrough(i + 1));
      return probe.getTotalLength();
    });
    total.current = routeRef.current?.getTotalLength() ?? lens.current[N - 1];
    if (inkRef.current) {
      inkRef.current.style.strokeDasharray = String(total.current);
      inkRef.current.style.strokeDashoffset = String(total.current);
    }
  }, []);

  const trackW = Math.max(width, MIN_ROUTE_W);
  const scale = trackW / VB_W;

  const place = useCallback(
    (v: number) => {
      const route = routeRef.current;
      if (!route || !lens.current.length || !width) return;
      const seg = Math.min(N - 2, Math.max(0, Math.floor(v)));
      const f = v - seg;
      const L = lens.current[seg] + f * (lens.current[seg + 1] - lens.current[seg]);
      const p = route.getPointAtLength(L);
      const ahead = route.getPointAtLength(Math.min(total.current, L + 2));
      const back = route.getPointAtLength(Math.max(0, L - 2));
      const angle = (Math.atan2(ahead.y - back.y, ahead.x - back.x) * 180) / Math.PI;

      if (planeRef.current) {
        planeRef.current.style.transform = `translate(${p.x * scale - 22}px, ${p.y * scale - 22}px)`;
        const icon = planeRef.current.querySelector<SVGElement>('svg');
        if (icon) icon.style.transform = `rotate(${angle}deg)`;
      }
      if (inkRef.current) {
        inkRef.current.style.strokeDashoffset = String(total.current - L);
      }
      // Narrow screens: pan the route so the plane stays in view.
      if (trackRef.current) {
        const pan = trackW > width ? Math.min(0, Math.max(width - trackW, width / 2 - p.x * scale)) : 0;
        trackRef.current.style.transform = `translateX(${pan}px)`;
      }
    },
    [scale, trackW, width],
  );

  useMotionValueEvent(t, 'change', place);
  useEffect(() => place(t.get()), [place, t]);

  return (
    <div ref={viewportRef} className="relative mt-8 overflow-hidden py-9">
      <div
        ref={trackRef}
        className="relative transition-transform duration-500 ease-out"
        style={{ width: trackW || '100%', height: VB_H * (scale || 1) }}>
        <svg aria-hidden="true" viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 size-full overflow-visible">
          <defs>
            <linearGradient id="route-ink" gradientUnits="userSpaceOnUse" x1="70" x2={VB_W - 70} y1="0" y2="0">
              {STAGES.map((s, i) => (
                <stop key={s.key} offset={`${(i / (N - 1)) * 100}%`} stopColor={s.color} />
              ))}
            </linearGradient>
          </defs>
          <path
            ref={routeRef}
            d={ROUTE}
            fill="none"
            stroke="#cfc8de"
            strokeWidth={2}
            strokeDasharray="1 9"
            strokeLinecap="round"
          />
          <path ref={inkRef} d={ROUTE} fill="none" stroke="url(#route-ink)" strokeWidth={3.5} strokeLinecap="round" />
        </svg>

        {STAGES.map((s, i) => (
          <Stop key={s.key} stage={s} i={i} index={index} onPick={onPick} />
        ))}

        {/* The plane */}
        <div ref={planeRef} aria-hidden="true" className="pointer-events-none absolute top-0 left-0 z-10 size-11 will-change-transform">
          <span className="grid size-11 place-items-center rounded-full bg-white shadow-[0_2px_4px_rgba(18,15,28,0.08),0_12px_26px_-8px_rgba(63,29,107,0.5)] ring-1 ring-line">
            <PaperAirplaneIcon className="size-5 text-brand" />
          </span>
        </div>
      </div>
    </div>
  );
}

function Stop({ stage, i, index, onPick }: { stage: FlowStage; i: number; index: number; onPick: (i: number) => void }) {
  const pt = POINTS[i];
  const done = i < index;
  const active = i === index;
  const labelAbove = pt.y < VB_H / 2;

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(pt.x / VB_W) * 100}%`, top: `${(pt.y / VB_H) * 100}%` }}>
      <button
        type="button"
        onClick={() => onPick(i)}
        aria-label={`${stage.name}, stage ${i + 1} of ${N}`}
        aria-pressed={active}
        className="relative grid size-12 place-items-center rounded-full transition-[background-color,color,box-shadow,transform] duration-500 ease-out"
        style={{
          backgroundColor: active ? stage.color : done ? stage.wash : '#ffffff',
          color: active ? '#ffffff' : done ? stage.ink : 'var(--color-ink-faint)',
          boxShadow: active
            ? `0 0 0 6px ${stage.wash}, 0 12px 28px -10px ${stage.color}`
            : done
              ? `inset 0 0 0 1px ${stage.color}55`
              : 'inset 0 0 0 1px var(--color-line-strong), 0 1px 2px rgba(18,15,28,0.05)',
          transform: active ? 'scale(1.08)' : 'scale(1)',
        }}>
        {active ? <span className="animate-ping-soft absolute inset-0 rounded-full" style={{ backgroundColor: stage.color }} /> : null}
        <span className="relative">{done ? <CheckIcon className="size-[18px]" /> : ICONS[stage.event.kind]}</span>
      </button>

      <p
        className={`absolute left-1/2 -translate-x-1/2 text-center text-[0.8125rem] font-semibold whitespace-nowrap transition-colors duration-300 ${
          labelAbove ? 'bottom-[calc(100%+10px)]' : 'top-[calc(100%+10px)]'
        }`}
        style={{ color: active ? stage.ink : done ? 'var(--color-ink-muted)' : 'var(--color-ink-faint)' }}>
        {stage.name}
      </p>
    </div>
  );
}

function StageDetail({ stage, index }: { stage: FlowStage; index: number }) {
  return (
    <div className="relative min-h-[190px] lg:pt-2">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={stage.key}
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(4px)', transition: { duration: 0.14 } }}
          transition={{ duration: 0.4, ease: EASE_OUT }}>
          <p className="text-[0.875rem] font-medium text-ink-faint">
            Stage {index + 1} of {N}
          </p>
          <h3 className="font-display mt-1 text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight font-semibold tracking-[-0.025em] text-ink">
            {stage.name}
          </h3>
          <p className="text-body-lg mt-2 max-w-[52ch] text-pretty text-ink-muted">{stage.body}</p>

          <div className="mt-5 hidden max-w-full items-center gap-3 rounded-[14px] lg:inline-flex border border-line bg-white px-4 py-3 shadow-[0_1px_2px_rgba(18,15,28,0.04)]">
            <span
              className="grid size-9 shrink-0 place-items-center rounded-[10px]"
              style={{ color: stage.ink, backgroundColor: stage.wash }}>
              {ICONS[stage.event.kind]}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[0.9375rem] font-semibold text-ink">{stage.event.title}</p>
              <p className="truncate text-[0.8125rem] text-ink-faint">{stage.event.meta}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** The lead, as the CRM shows it: a status chip and an activity log that grows. */
function LeadCard({ index }: { index: number }) {
  const stage = STAGES[index];
  const log = STAGES.slice(0, index + 1).reverse().slice(0, 3);

  return (
    <div className="card overflow-hidden">
      <div className="flex items-start gap-3 p-5 pb-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-wash text-[0.8125rem] font-bold text-brand">
          {FLOW.lead.initials}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[1rem] font-semibold text-ink">{FLOW.lead.name}</p>
          <p className="text-[0.8125rem] whitespace-nowrap text-ink-faint">+91 90000 00101</p>
        </div>
        <div className="relative h-7 w-[132px] shrink-0 sm:w-[150px]">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={stage.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
              className="absolute top-0 right-0 inline-flex h-7 items-center gap-1 rounded-[8px] px-2.5 text-[0.75rem] font-bold whitespace-nowrap"
              style={{ color: stage.ink, backgroundColor: stage.wash }}>
              {index === N - 1 ? <CheckIcon className="size-3.5" /> : null}
              {stage.name}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 px-5">
        <span className="rounded-[6px] bg-accent-wash px-2 py-0.5 text-[0.6875rem] font-bold tracking-[0.04em] text-accent uppercase">
          {FLOW.lead.tag}
        </span>
        <span className="inline-flex items-center gap-1 rounded-[6px] bg-[#e7f8ee] px-2 py-0.5 text-[0.6875rem] font-bold tracking-[0.04em] text-wa uppercase">
          <WhatsAppIcon size={11} />
          WhatsApp
        </span>
        <span className="flex min-w-0 items-center gap-2 rounded-[8px] border border-line py-1 pr-2.5 pl-1">
          {/* The package photo, taken straight from the real leads screenshot. */}
          <span
            className="size-6 shrink-0 rounded-[5px] bg-no-repeat"
            style={{ backgroundImage: 'url(/shots/2.png)', backgroundSize: '1470px 703px', backgroundPosition: '-482px -430px' }}
          />
          <span className="truncate text-[0.75rem] font-medium text-ink-muted">{FLOW.lead.package}</span>
        </span>
      </div>

      <div className="mt-4 border-t border-line bg-canvas-2/60 px-5 pt-3 pb-4">
        <p className="text-[0.75rem] font-semibold text-ink-faint">Activity</p>
        <ul className="mt-2 space-y-1">
          <AnimatePresence initial={false}>
            {log.map((s) => (
              <motion.li
                key={s.key}
                layout
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.12 } }}
                transition={{ duration: 0.35, ease: EASE_OUT }}
                className="flex items-center gap-3 py-1.5">
                <span
                  className="grid size-7 shrink-0 place-items-center rounded-[8px] [&_svg]:!size-3.5"
                  style={{ color: s.ink, backgroundColor: s.wash }}>
                  {ICONS[s.event.kind]}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.8125rem] font-semibold text-ink">{s.event.title}</span>
                  <span className="block truncate text-[0.75rem] text-ink-faint">{s.event.meta}</span>
                </span>
                <span className="shrink-0 text-[0.6875rem] font-medium text-ink-faint">{s.name}</span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
