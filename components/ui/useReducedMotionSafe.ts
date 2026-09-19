'use client';

import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * `useReducedMotion`, but identical on the server and the first client render.
 *
 * The server cannot know the visitor's motion preference, so framer's hook
 * answers null there and true on a reduced-motion client. Anything rendered
 * from that answer (a style, a starting number) then differs between the two
 * passes and React throws a hydration error. This reports "no preference"
 * until the component has mounted, then the real value.
 */
export function useReducedMotionSafe(): boolean {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return mounted && !!reduce;
}
