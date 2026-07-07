<script lang="ts">
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Robert Ioniță (i-robert2) — Cloud DevOps Engineer</title>
	<meta
		name="description"
		content="Cloud DevOps engineer — Kubernetes on Azure, Terraform, CI/CD, GitOps, observability and cloud security. Portfolio of hands-on, verified infrastructure projects."
	/>
	<meta
		name="keywords"
		content="DevOps, Cloud, Azure, Kubernetes, AKS, Terraform, CI/CD, GitOps, Argo CD, Prometheus, SRE, Platform Engineering"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Robert Ioniță (i-robert2) — Cloud DevOps Engineer" />
	<meta
		property="og:description"
		content="Kubernetes on Azure, Terraform, CI/CD, GitOps, observability and cloud security — a portfolio of hands-on, verified infrastructure projects."
	/>
	<meta property="og:url" content="https://i-robert2.github.io/" />
	<meta name="twitter:card" content="summary" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<nav class="nav">
	<a class="nav-brand" href="#top" aria-label="Home">
		<img class="avatar" src="https://github.com/i-robert2.png" alt="Robert Ioniță" width="40" height="40" />
	</a>
</nav>

<main id="top">
	{@render children()}
</main>

<footer class="footer">
	<p>
		Built with SvelteKit · Hosted on GitHub Pages ·
		<a href="https://github.com/i-robert2" target="_blank" rel="noopener noreferrer">github.com/i-robert2</a>
	</p>
	<p class="copyright">© {new Date().getFullYear()} Robert Ioniță</p>
</footer>

<style>
	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 1.25rem 1.5rem;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.nav-brand {
		display: inline-flex;
		align-items: center;
		border-radius: 999px;
	}

	.avatar {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--color-border);
		transition: border-color 0.2s;
	}

	.nav-brand:hover .avatar {
		border-color: var(--color-accent);
	}

	main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1.5rem;
	}

	.footer {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 3rem 1.5rem 2rem;
		text-align: center;
		color: var(--color-text-muted);
		font-size: 0.85rem;
		border-top: 1px solid var(--color-border);
		margin-top: 2rem;
	}

	.copyright {
		margin-top: 0.4rem;
		opacity: 0.75;
	}
</style>
