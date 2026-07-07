import type { Action } from 'svelte/action';

/**
 * Toggles an `is-visible` class as the element enters/leaves the viewport,
 * letting CSS drive a fade/slide-in transition. Re-animates every time the
 * element scrolls back into view (both directions). Respects reduced-motion.
 */
export const reveal: Action<HTMLElement, { threshold?: number; rootMargin?: string } | undefined> = (
	node,
	options
) => {
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduceMotion) {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				node.classList.toggle('is-visible', entry.isIntersecting);
			}
		},
		{
			threshold: options?.threshold ?? 0.12,
			rootMargin: options?.rootMargin ?? '0px 0px -10% 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
