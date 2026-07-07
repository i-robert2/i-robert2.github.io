<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects, moreProjects } from '$lib/data/projects';
	import { skills } from '$lib/data/skills';

	const roles = ['Cloud/DevOps Engineer', 'Platform Engineer', 'SRE'];
</script>

<!-- Hero -->
<section class="hero">
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
	<div class="jump-links">
		<a href="#skills">Skills</a>
		<a href="#projects">Featured Projects</a>
		<a href="#more">More Projects</a>
	</div>
	<div class="hero-links">
		<a class="btn-primary" href="https://github.com/i-robert2" target="_blank" rel="noopener noreferrer">GitHub</a>
		<a class="btn" href="https://www.linkedin.com/in/robert-mihai-ionita/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
	</div>
</section>

<!-- Skills -->
<section id="skills" class="section">
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
<section id="projects" class="section">
	<h2 class="section-title">Featured Projects</h2>
	<div class="project-grid">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<!-- More Projects -->
<section id="more" class="section">
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

	.roles {
		margin-top: 1.75rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
	}

	.roles-label {
		font-size: 0.9rem;
		color: var(--color-accent-hover);
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
		padding: 0.55rem 1.1rem;
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

	.section {
		padding: 2.5rem 0;
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
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
		gap: 1.25rem;
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

	@media (max-width: 640px) {
		.hero h1 {
			font-size: 2rem;
		}
	}
</style>
