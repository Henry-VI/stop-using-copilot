<script>
	import './layout.css';
	
	let { children } = $props();
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectSpeedInsights();
  injectAnalytics();
</script>

<svelte:head>
</svelte:head>

{@render children()}
