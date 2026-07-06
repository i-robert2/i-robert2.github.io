export interface SkillGroup {
	label: string;
	items: string[];
}

export const skills: SkillGroup[] = [
	{
		label: 'Cloud & Platform',
		items: ['Azure', 'AKS', 'Azure Front Door', 'Key Vault', 'Entra ID', 'AWS (learning)']
	},
	{
		label: 'Kubernetes',
		items: ['Helm', 'Argo CD', 'Argo Rollouts', 'Kyverno', 'ingress-nginx', 'cert-manager']
	},
	{
		label: 'Infrastructure as Code',
		items: ['Terraform', 'Ansible', 'Sentinel']
	},
	{
		label: 'CI/CD',
		items: ['GitHub Actions', 'Azure DevOps', 'Jenkins', 'GitLab CI']
	},
	{
		label: 'Observability',
		items: ['Prometheus', 'Grafana', 'Loki', 'Tempo', 'OpenTelemetry']
	},
	{
		label: 'Security & Governance',
		items: ['Trivy', 'Cosign', 'SBOM', 'Azure Policy', 'OIDC / Workload Identity', 'PIM']
	},
	{
		label: 'Practices',
		items: ['GitOps', 'Progressive Delivery', 'DR (RTO/RPO)', 'FinOps', 'Landing Zones', 'SRE / SLOs']
	}
];
