/**
 * Every image on the page, as a static import.
 *
 * Static imports give next/image the intrinsic width and height at build time
 * (no layout shift, no hand-maintained sizes) and a tiny blurred placeholder
 * that shows while the real file loads. The files stay in public/shots so
 * `npm run import-shots` keeps working; replacing one there is all it takes.
 */
import dashboard from '@/public/shots/1.png';
import leads from '@/public/shots/2.png';
import whatsapp from '@/public/shots/3.png';
import instagram from '@/public/shots/4.png';
import itinerary from '@/public/shots/5.png';
import invoice from '@/public/shots/6.png';
import hotels from '@/public/shots/7.png';
import sunset from '@/public/shots/Home_background.jpg';
import ladakhThumb from '@/public/shots/ladakh-thumb.jpg';
import reef from '@/public/shots/why_tripzo.jpg';

export const IMAGES = {
  dashboard,
  leads,
  whatsapp,
  instagram,
  itinerary,
  invoice,
  hotels,
  sunset,
  reef,
  ladakhThumb,
};
