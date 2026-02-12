<script>
	import './layout.css';
	
	let { children } = $props();
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectSpeedInsights();
  injectAnalytics();

  import { Mastodon, Bluesky } from "svelte-bootstrap-icons";
</script>

<svelte:head>
  <meta property="twitter:card" content="summary_large_image">
  <meta property="og:image" content="favicon.png">
  <meta property="twitter:image" content="favicon.png">
  <meta property="og:title" content="Stop Microsoft Copilot!">
  <meta property="twitter:title" content="Stop Microsoft Copilot!">
  <meta property="description" content="Dear VSB: Please stop using Microsoft Copilot AI in schools." />
  <meta property="og:description" content="Dear VSB: Please stop using Microsoft Copilot AI in schools." />
  <meta property="twitter:description" content="Dear VSB: Please stop using Microsoft Copilot AI in schools." />
  <meta property="og:site_name" content="Stop Microsoft Copilot!">
  <meta property="og:url" content="https://stopcopilot.henryvaniersel.ca">
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
    <a href="/faq">FAQ</a>
  </span>
  <div class="w-14 md:w-auto">
    <a href="https://socialbc.ca/@vsb_copilot" target="_blank"><Mastodon class="inline text-neutral-500" width={20} height={20}/></a>
    <a href="https://bsky.app/profile/vsb-copilot.socialbc.ca.ap.brid.gy" target="_blank"><Bluesky class="inline text-neutral-500" width={20} height={20}/></a>
  </div>
</nav>
<div id="progress"></div>
{@render children()}
<footer>
  Email Us! - <a href="mailto:stopcopilot@henryvaniersel.ca">stopcopilot@henryvaniersel.ca</a>
  <div>
    <a href="https://socialbc.ca/@vsb_copilot" target="_blank"><Mastodon class="inline text-neutral-500"/></a>
    <a href="https://bsky.app/profile/vsb-copilot.socialbc.ca.ap.brid.gy" target="_blank"><Bluesky class="inline text-neutral-500"/></a>
  </div>
  <div class="mt-4 text-neutral-500"><em>This website was inspired by <a href="https://fightchatcontrol.eu" target="_blank">fightchatcontrol.eu</a> (just a bit more scuffed)</em></div>
  <div class="text-neutral-500 italic">This work is licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>. If sourcing this page, please credit us!</div>
  <div class="text-neutral-500 italic">Source code licensed under the MIT license. <a href="https://github.com/Henry-VI/stop-using-copilot">View it here.</a></div>
</footer>
