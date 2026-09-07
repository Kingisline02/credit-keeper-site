# Premium motion redesign

## What will change
- Restyle the existing site with a near-black/deep navy foundation, electric blue and cyan accents, high-contrast typography, and translucent glass cards.
- Add a lightweight global animated backdrop: slow aurora mesh, fading technical grid, and a small set of pointer-reactive geometric particles.
- Upgrade the existing reveal system to Framer Motion with short staggered fade, rise, and scale transitions across heroes, headings, cards, images, experience content, and the footer.
- Add subtle lift, glow, and restrained 3D tilt to card surfaces; add scale/glow feedback to calls to action and animated navigation underlines.
- Preserve all existing routes, navigation, page structure, text, images, and form behavior.

## Performance and accessibility
- Animate only transforms and opacity where practical and throttle pointer response through animation frames.
- Disable atmospheric movement, parallax, smooth scrolling, tilt, and reveal movement when reduced motion is requested.
- Keep background effects low-opacity and non-interactive so content remains readable and usable.
- Verify the result on desktop and mobile, including scrolling, navigation, overflow, contrast, and runtime errors.

## Technical details
- Add the lightweight Motion for React package and use its viewport animation APIs for reusable reveals.
- Keep visual colors, glows, shadows, and gradients in the global semantic token system.
- Mount one shared ambient-background layer at the app root so all current pages receive the same treatment.
