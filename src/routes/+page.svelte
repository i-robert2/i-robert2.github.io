<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects, moreProjects } from '$lib/data/projects';
	import { skills } from '$lib/data/skills';
	import { reveal } from '$lib/actions/reveal';

	const roles = ['Cloud/DevOps Engineer', 'Platform Engineer', 'SRE'];
</script>

<!-- Hero -->
<section class="hero" use:reveal>
	<h1>Hi, I'm <span class="accent">Robert</span> <span class="handle">(i-robert2)</span></h1>
	<p class="subtitle">
		Focused on cloud, infrastructure and automation, with hands-on DevOps experience built through
		self-directed projects. Comfortable working across Kubernetes on Azure, Terraform, CI/CD, GitOps,
		observability and cloud security — from initial provisioning to a running production deployment.
	</p>
	<p class="credibility">
		This is my portfolio of 13 Azure projects spanning AKS, multi-region disaster recovery, GitOps,
		progressive delivery, observability, CI/CD, supply-chain security and landing-zone governance —
		each built with Terraform, deployed, and verified end-to-end.
	</p>
	<div class="roles">
		<span class="roles-label">Looking for roles such as:</span>
		<div class="role-chips">
			{#each roles as role}
				<span class="role-chip">{role}</span>
			{/each}
		</div>
	</div>
	<div class="roles current-role">
		<span class="roles-label">Current role: SharePoint Online &amp; OneDrive Support Engineer</span>
	</div>
	<div class="jump-links">
		<a href="#skills">Skills</a>
		<a href="#projects">Featured Projects</a>
		<a href="#more">More Projects</a>
	</div>
	<div class="hero-links">
		<a class="btn-primary social" href="https://github.com/i-robert2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
			<svg class="social-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
				<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
			</svg>
			<span class="social-label">GitHub</span>
		</a>
		<a class="btn social" href="https://www.linkedin.com/in/robert-mihai-ionita/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
			<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
			</svg>
			<span class="social-label">LinkedIn</span>
		</a>
	</div>
</section>

<!-- Skills -->
<section id="skills" class="section" use:reveal>
	<h2 class="section-title">Skills</h2>
	<div class="skills-grid">
		{#each skills as group}
			<div class="skill-group">
				<h3 class="skill-label">{group.label}</h3>
				<div class="skill-items">
					{#each group.items as item}
						<span class="tag">{item}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Featured Projects -->
<section id="projects" class="section" use:reveal>
	<h2 class="section-title">Featured Projects</h2>
	<div class="project-grid">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<!-- More Projects -->
<section id="more" class="section" use:reveal>
	<h2 class="section-title">More Projects</h2>
	<p class="section-note">
		Breadth across CI systems, configuration management, and on-prem IaC. Everything is on
		<a href="https://github.com/i-robert2?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>.
	</p>
	<div class="project-grid">
		{#each moreProjects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	.hero {
		padding: 2rem 0 3rem;
	}

	/* Hero intro / re-reveal: direct children fade + slide in with a stagger */
	.hero > * {
		opacity: 0;
		transform: translateY(20px);
		transition:
			opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
		will-change: opacity, transform;
	}

	.hero:global(.is-visible) > * {
		opacity: 1;
		transform: none;
	}

	.hero:global(.is-visible) > *:nth-child(2) {
		transition-delay: 0.05s;
	}
	.hero:global(.is-visible) > *:nth-child(3) {
		transition-delay: 0.1s;
	}
	.hero:global(.is-visible) > *:nth-child(4) {
		transition-delay: 0.15s;
	}
	.hero:global(.is-visible) > *:nth-child(5) {
		transition-delay: 0.2s;
	}
	.hero:global(.is-visible) > *:nth-child(6) {
		transition-delay: 0.25s;
	}

	@media (prefers-reduced-motion: reduce) {
		.hero > * {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}

	.roles {
		margin-top: 1.75rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
	}

	.roles.current-role {
		margin-top: 0.85rem;
	}

	.roles-label {
		font-size: 0.9rem;
		color: var(--color-accent-hover);
		text-align: center;
	}

	.role-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.role-chip {
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.02em;
		padding: 0.3rem 0.75rem;
		border-radius: 999px;
		color: var(--color-accent-hover);
		background: rgba(96, 165, 250, 0.1);
		border: 1px solid rgba(96, 165, 250, 0.3);
	}

	.hero h1 {
		font-size: 2.6rem;
		font-weight: 700;
		line-height: 1.15;
	}

	.accent {
		color: var(--color-accent);
	}

	.handle {
		color: var(--color-text-muted);
		font-weight: 600;
	}

	.subtitle {
		margin-top: 1.1rem;
		font-size: 1.15rem;
		color: var(--color-text);
		line-height: 1.7;
		text-align: justify;
		text-wrap: pretty;
	}

	.credibility {
		margin-top: 0.9rem;
		font-size: 0.98rem;
		color: var(--color-text-muted);
		line-height: 1.6;
		text-align: justify;
		text-wrap: pretty;
	}

	.jump-links {
		margin-top: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	.hero-links {
		margin-top: 0.75rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.jump-links a {
		position: relative;
		padding: 0.55rem 1.5rem 0.55rem 1.1rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		color: var(--color-text);
		font-size: 0.92rem;
		font-weight: 500;
		background: var(--color-surface);
		transition:
			border-color 0.2s,
			color 0.2s,
			background 0.2s;
	}

	.jump-links a::after {
		content: '↗';
		position: absolute;
		top: 3px;
		right: 6px;
		font-size: 0.7rem;
		line-height: 1;
		color: var(--color-accent);
		transition: transform 0.15s ease;
	}

	.jump-links a:hover::after {
		transform: translate(1px, -1px);
	}

	.jump-links a:hover {
		border-color: var(--color-accent);
		color: var(--color-accent-hover);
	}

	.btn,
	.btn-primary {
		padding: 0.4rem 0.95rem;
		border-radius: var(--radius);
		font-weight: 600;
		font-size: 0.82rem;
		border: 1px solid var(--color-accent);
		transition:
			background 0.2s,
			color 0.2s,
			transform 0.1s;
	}

	.btn-primary {
		background: var(--color-accent);
		color: var(--color-bg);
	}

	.btn:hover,
	.btn-primary:hover {
		transform: translateY(-1px);
	}

	.btn:hover {
		background: var(--color-accent);
		color: var(--color-bg);
	}

	.social {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.social-icon {
		width: 1.05rem;
		height: 1.05rem;
		flex-shrink: 0;
	}

	.section {
		padding: 2.5rem 0;
	}

	/* Scroll-reveal: children start hidden, ease in with a stagger when the section enters view */
	.section :global(.section-title),
	.section :global(.section-note),
	.section :global(.skills-grid > *),
	.section :global(.project-grid > *) {
		opacity: 0;
		transform: translateY(26px);
		transition:
			opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
		will-change: opacity, transform;
	}

	.section:global(.is-visible) :global(.section-title),
	.section:global(.is-visible) :global(.section-note),
	.section:global(.is-visible) :global(.skills-grid > *),
	.section:global(.is-visible) :global(.project-grid > *) {
		opacity: 1;
		transform: none;
	}

	.section:global(.is-visible) :global(.skills-grid > *:nth-child(2)),
	.section:global(.is-visible) :global(.project-grid > *:nth-child(2)) {
		transition-delay: 0.06s;
	}
	.section:global(.is-visible) :global(.skills-grid > *:nth-child(3)),
	.section:global(.is-visible) :global(.project-grid > *:nth-child(3)) {
		transition-delay: 0.12s;
	}
	.section:global(.is-visible) :global(.skills-grid > *:nth-child(4)),
	.section:global(.is-visible) :global(.project-grid > *:nth-child(4)) {
		transition-delay: 0.18s;
	}
	.section:global(.is-visible) :global(.skills-grid > *:nth-child(5)),
	.section:global(.is-visible) :global(.project-grid > *:nth-child(5)) {
		transition-delay: 0.24s;
	}
	.section:global(.is-visible) :global(.skills-grid > *:nth-child(6)),
	.section:global(.is-visible) :global(.project-grid > *:nth-child(6)) {
		transition-delay: 0.3s;
	}
	.section:global(.is-visible) :global(.skills-grid > *:nth-child(7)) {
		transition-delay: 0.36s;
	}
	.section:global(.is-visible) :global(.skills-grid > *:nth-child(8)) {
		transition-delay: 0.42s;
	}

	@media (prefers-reduced-motion: reduce) {
		.section :global(.section-title),
		.section :global(.section-note),
		.section :global(.skills-grid > *),
		.section :global(.project-grid > *) {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}

	.section-title {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 1.25rem;
	}

	.section-note {
		color: var(--color-text-muted);
		font-size: 0.95rem;
		margin: -0.5rem 0 1.5rem;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
	}

	.skill-group {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1.1rem 1.25rem;
	}

	.skill-label {
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-accent-hover);
		margin-bottom: 0.75rem;
	}

	.skill-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}

	.tag {
		background: var(--color-border);
		color: var(--color-text);
		font-size: 0.78rem;
		padding: 0.2rem 0.6rem;
		border-radius: 999px;
		font-weight: 500;
	}

	.project-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
		gap: 1.25rem;
	}

	@media (max-width: 900px) {
		.skills-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.hero {
			padding: 0.9rem 0;
		}

		.hero h1 {
			font-size: 1.45rem;
		}

		.handle {
			white-space: nowrap;
		}

		.subtitle {
			font-size: 0.97rem;
			line-height: 1.56;
			margin-top: 0.72rem;
			text-align: justify;
		}

		.credibility {
			font-size: 0.89rem;
			line-height: 1.54;
			margin-top: 0.7rem;
			text-align: justify;
		}

		.roles {
			margin-top: 0.82rem;
		}

		.roles-label {
			font-size: 0.87rem;
		}

		.roles.current-role {
			margin-top: 0.55rem;
		}

		.jump-links {
			margin-top: 1rem;
			gap: 0.3rem;
		}

		.jump-links a {
			padding: 0.5rem 0.78rem 0.5rem 0.55rem;
			font-size: 0.75rem;
		}

		.jump-links a::after {
			top: 4px;
			right: 6px;
			font-size: 0.6rem;
		}

		.hero-links {
			margin-top: 0.65rem;
			gap: 0.6rem;
		}

		.social-label {
			display: none;
		}

		.social {
			padding: 0.3rem 0.5rem;
		}

		.social-icon {
			width: 1rem;
			height: 1rem;
		}

		.role-chips {
			flex-wrap: nowrap;
			gap: 0.35rem;
		}

		.role-chip {
			font-size: 0.66rem;
			padding: 0.25rem 0.5rem;
			white-space: nowrap;
		}

		.skills-grid {
			grid-template-columns: 1fr;
		}

		.section {
			padding: 2rem 0;
		}
	}
</style>
