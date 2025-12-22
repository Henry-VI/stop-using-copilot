<script>
	import './layout.css';
	
	let { children } = $props();
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectSpeedInsights();
  injectAnalytics();

  import { Discord, Mastodon } from "svelte-bootstrap-icons";
</script>

<svelte:head>
  <title>Page Not Found | Stop Microsoft Copilot!</title>
</svelte:head>
<nav>
  <a href="/">
    <img src="/favicon.png" width="32px" alt="Microsoft 365 Copilot logo with a red X over it.">
  </a>
  <b id="title-nav">Stop Microsoft Copilot!</b>
  <span id="items">
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
  </span>
  <div>
    <a href="https://socialbc.ca/@vsb_copilot" target="_blank"><Discord class="inline text-neutral-500"/></a>
    <a href="https://discord.gg/vqnSCvPn" target="_blank"><Mastodon class="inline text-neutral-500"/></a>
  </div>
</nav>
{@render children()}
<footer>
  Email Us! - <a href="mailto:stopcopilot@henryvaniersel.ca">stopcopilot@henryvaniersel.ca</a>
  <div>
    <a href="https://socialbc.ca/@vsb_copilot" target="_blank"><Discord class="inline text-neutral-500"/></a>
    <a href="https://discord.gg/vqnSCvPn" target="_blank"><Mastodon class="inline text-neutral-500"/></a>
  </div>
  <div class="mt-4 text-neutral-500"><em>This website was inspired by <a href="https://fightchatcontrol.eu" target="_blank">fightchatcontrol.eu</a> (just a bit more scuffed)</em></div>
  <div class="text-neutral-500 italic">This work is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>. If sourcing this page, please credit us!</div>
  <div class="text-neutral-500 italic">Source code licensed under the MIT license. <a href="https://github.com/Henry-VI/stop-microsoft-copilot">View it here.</a></div>
</footer>
