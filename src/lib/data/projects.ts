export interface Project {
	title: string;
	description: string;
	tags: string[];
	github?: string;
	live?: string;
	aiAssisted?: boolean;
}

// Featured — the senior/mid cloud work shown first.
export const projects: Project[] = [
	{
		title: 'Multi-Region DR + FinOps',
		description:
			'Active-passive disaster recovery across two Azure regions. Azure Front Door health-probed failover (measured RTO 17.2s, near-zero RPO), a cross-region Postgres replica with a promotion drill, and a quantified FinOps cost report.',
		tags: ['Azure', 'AKS', 'Front Door', 'Terraform', 'PostgreSQL', 'DR', 'FinOps'],
		github: 'https://github.com/i-robert2/azure-s3-dr-finops'
	},
	{
		title: 'Hub-Spoke Landing Zone',
		description:
			'Enterprise Azure landing zone: management-group hierarchy, hub-spoke network with Azure Firewall forced-tunnel egress, deny/audit Azure Policy guardrails, and Entra ID governance with break-glass and PIM.',
		tags: ['Azure', 'Terraform', 'Azure Policy', 'Azure Firewall', 'Entra ID', 'Governance'],
		github: 'https://github.com/i-robert2/azure-s2-landing-zone'
	},
	{
		title: 'GitOps with Argo CD',
		description:
			'Pull-based GitOps on AKS. App-of-Apps bootstrap, OCI Helm charts served from ACR, Entra OIDC single sign-on with RBAC, and verified self-healing and drift correction.',
		tags: ['Kubernetes', 'Argo CD', 'GitOps', 'Helm', 'AKS', 'Entra ID'],
		github: 'https://github.com/i-robert2/azure-s1-argocd-gitops'
	},
	{
		title: 'Progressive Delivery',
		description:
			'Metrics-gated canary releases on AKS with Argo Rollouts and Prometheus. Auto-promotes on SLO success and rolls back automatically on breach (measured 83s) — no human in the loop.',
		tags: ['Kubernetes', 'Argo Rollouts', 'Prometheus', 'Canary', 'AKS'],
		github: 'https://github.com/i-robert2/azure-argo-rollouts'
	},
	{
		title: 'Observability Stack',
		description:
			'Three-pillar observability on AKS: Prometheus, Grafana, Loki and Tempo wired through OpenTelemetry, with SLO dashboards and alerting that fired on a simulated outage.',
		tags: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'OpenTelemetry', 'SRE'],
		github: 'https://github.com/i-robert2/azure-m3-observability-stack'
	},
	{
		title: 'CI/CD + Supply-Chain Security',
		description:
			'GitHub Actions pipeline to AKS with keyless OIDC. Trivy scanning, Cosign image signing, Kyverno admission enforcement, and a SonarCloud quality gate.',
		tags: ['GitHub Actions', 'CI/CD', 'Trivy', 'Cosign', 'Kyverno', 'Security'],
		github: 'https://github.com/i-robert2/azure-m2-ghactions-aks'
	}
];

// Secondary — breadth across CI systems, config management, and on-prem IaC.
export const moreProjects: Project[] = [
	{
		title: 'AKS Three-Tier Platform',
		description:
			'React/Node/Postgres on AKS: ingress-nginx, cert-manager TLS, a private Postgres Flexible Server, and Key Vault CSI secrets.',
		tags: ['AKS', 'Helm', 'PostgreSQL', 'cert-manager'],
		github: 'https://github.com/i-robert2/azure-m1-aks-3t'
	},
	{
		title: 'Jenkins on AKS',
		description:
			'Jenkins on Kubernetes via JCasC with ephemeral agents, GitHub OAuth, workload identity, and Cosign signing.',
		tags: ['Jenkins', 'Kubernetes', 'JCasC', 'CI/CD'],
		github: 'https://github.com/i-robert2/azure-m4-jenkins-aks'
	},
	{
		title: 'Azure DevOps Pipelines',
		description:
			'CD to AKS with Azure DevOps: a workload-identity service connection, Trivy, Cosign, and a manual approval gate.',
		tags: ['Azure DevOps', 'CI/CD', 'AKS', 'Cosign'],
		github: 'https://github.com/i-robert2/azure-m2.5-azure-devops'
	},
	{
		title: 'Ansible VM Fleet',
		description:
			'Configuration management for an Azure VM fleet: dynamic inventory, Bastion-tunnel CI, roles, and ansible-vault secrets.',
		tags: ['Ansible', 'Azure', 'Automation', 'CI'],
		github: 'https://github.com/i-robert2/azure-j4-ansible-vm'
	},
	{
		title: 'Container Apps CI/CD',
		description:
			'Serverless containers on Azure Container Apps with a GitHub Actions OIDC pipeline and Terraform.',
		tags: ['Azure Container Apps', 'GitHub Actions', 'Terraform'],
		github: 'https://github.com/i-robert2/azure-j2-container-apps'
	},
	{
		title: 'On-Prem IaC Pipeline',
		description:
			'End-to-end IaC on Proxmox VE: Terraform provisions VMs, Ansible configures them, Sentinel enforces policy, and GitLab CI orchestrates it all.',
		tags: ['Terraform', 'Ansible', 'GitLab CI', 'Sentinel', 'Proxmox VE'],
		github: 'https://github.com/i-robert2/DevOps-Gitlab-Infra'
	},
	{
		title: 'Policy-as-Code',
		description:
			'Sentinel policy-as-code enforcing governance guardrails on Terraform-managed infrastructure.',
		tags: ['Sentinel', 'Terraform', 'Policy-as-Code', 'HCL'],
		github: 'https://github.com/i-robert2/terraform-sentinel-policies'
	}
];
