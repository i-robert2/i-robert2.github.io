import type { Action } from 'svelte/action';

/**
 * Adds an `is-visible` class the first time the element scrolls into view,
 * letting CSS drive a fade/slide-in transition. Respects reduced-motion.
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
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.unobserve(node);
				}
			}
		},
		{
			threshold: options?.threshold ?? 0.15,
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
