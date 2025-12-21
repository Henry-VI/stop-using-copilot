<script>
  import "@giscus/svelte";
    import Giscus from "@giscus/svelte";
</script>
<svelte:head>
  <title>We Got a Reponse! Let's Unpack It. | Stop Microsoft Copilot!</title>
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
</nav>

<div class="blog">
<h1 class="w-5/6">We Got a Response! Let's Unpack It.</h1>
<div class="authour">
  By Evan Yelizarov Makogon
  <div class="text-neutral-400">
    Grade 10, Eric Hamber Secondary
  </div>
</div>
<img src="email.png" alt="The email sent to Henry Van Iersel.">
<blockquote>
  If you'd like to read the original email in full, <a href="https://stopcopilot.henryvaniersel.ca/email-zhi-su.txt">click here</a>. 
</blockquote>
My reply to a recent email from the district principle of “Learning and Information Technology” Zhi Su, initially addressed to Henry Van Iersel's younger brother specifically. In the original email (available <a href="https://stopcopilot.henryvaniersel.ca/email.txt" target="_blank">here</a>) which this email is responding to, many points about AI’s flaws were brought up, almost none of which were countered or argued against in the body of this response. Understanding that this email was written to get people to shut up, rather than engage in discourse, let’s systematically go through every claim made and understand what’s incorrect.

<blockquote>
“We want to assure you that Microsoft is a trusted partner in education, and its solutions are widely recommended by the Ministry of Education and Child Care. In fact, every school district in the province and most independent school use Microsoft services. Microsoft 365 Copilot is designed with enterprise-grade security and compliance standards, including encryption of data at rest and in transit, adherence to GDPR, and strict privacy controls. Importantly, Copilot does not use school or student data to train AI models, and all data remains within the district’s secure Microsoft 365 environment.” <em>-Zhi Su</em>
</blockquote>
In contrast to the ”enterprise grade security” claim, Microsoft has had multiple serious security incidents and privacy violations in recent years. For instance, in march of 2025 Microsoft was fined 20 million dollars by the FTC for <a href="https://www.ftc.gov/news-events/news/press-releases/2023/06/ftc-will-require-microsoft-pay-20-million-over-charges-it-illegally-collected-personal-information" target="_blank">illegally collecting and retaining data</a> of children with Xbox accounts without their parents’ consent, this shows that Microsoft does not respect the privacy of consumers even when violating federal laws. Additionally, in July of this year, it was reported that state-backed hackers infiltrated over 400 organizations worldwide through a <a href="https://techcrunch.com/2025/07/23/hundreds-of-organizations-breached-by-sharepoint-mass-hacks/" target="_blank">vulnerability on their Sharepoint servers</a>. Finally, there are several serious issues and <a href="https://www.pcworld.com/article/2961752/this-8-year-old-windows-security-flaw-is-still-being-exploited-by-hackers.html" target="_blank">vulnerabilities in Windows</a> that Microsoft has either ignored or failed to patch. Overall, I am highly skeptical of Microsoft’s security and privacy practices, and I wouldn’t trust them with potentially sensitive AI chat logs. <a href="https://www.zdnet.com/article/openai-user-data-breach-changing-passwords/" target="_blank">OpenAI has already had a data breach</a> recently due to a faulty analytics tool, exposing names, email addresses and “approximate locations” of some API users.

<blockquote>
“It's also important to note that the Vancouver School Board is not leading this area. In fact, some districts such as Coquitlam, West Vancouver, Abbotsford, Surrey, and Richmond have already deployed Microsoft 365 Copilot for students or other platforms of AI. We are following the same timeline as Langley, Burnaby, and Sea to Sky school districts and we regularly liaise with their respective departments.” <em>-Zhi Su</em>
</blockquote>
Just because other school districts are implementing copilot doesn’t mean that the VSB should jump on the bandwagon. <a href="https://pivot-to-ai.com/2025/12/08/la-unified-school-district-forces-unfiltered-ai-on-kids/" target="_blank">Several school districts, such as the Los Angeles Unified School District, have already seen the consequences of AI deployment in educational environments</a>. I am also concerned by the fact that AI features are opt-in by default.
<blockquote>
“Finally, while we respect individual choices, it is worth noting that many universities—including UBC—are integrating AI into their programs, and numerous industries rely on AI to remain competitive. Our goal is to prepare students for a future where these tools are becoming commonplace, while ensuring equity, safety, and responsible use. I have two children at UBC and both are using AI supported by their professors and leveraging it to study. There are also cutting edge research supporting the use of AI in their respective fields of study and eventual career paths.” <em>-Zhi Su</em>
</blockquote>
An MIT report has shown that over 95% of AI projects fail (<a href="https://www.forbes.com/sites/garydrenik/2025/10/15/why-95-of-ai-projects-fail-and-how-better-data-can-change-that/" target="_blank">Forbes</a>). This shows that corporations are in fact not “rely[ing] on AI to remain competitive”, In many cases AI actually ends up reducing productivity. This is yet another reason why I’m skeptical about the use of LLMs in schools, <em>statistically speaking</em>, there’s only a 5% chance of Copilot succeeding at making students and teachers more productive. 

<blockquote>
“I also note that you are using an iOS device. All Apple devices within the past two years have chatGPT integrated, and all cellphones have AI features and function baked into their devices and operating systems.” <em>-Zhi Su</em>
</blockquote>
Using Apple Intelligence on iOS as an argument for AI is quite ironic since, whilst anecdotal, the vast majority of Apple users I know despise it. They find it intrusive, annoying, and useless. In fact, a few of my friends refuse to update their iPhones because they don’t want Apple Intelligence on their devices. 

<blockquote>
“We have taken more time than other districts to meet with a working group, solicited feedback from parents, teachers, and students, and feel good about providing students with a safer alternative to consumer level platforms” <em>-Zhi Su</em>
</blockquote>
I feel as though this statement is disingenuous. Firstly, the VSB did not conduct enough surveys and board meetings for such a dramatic policy change. And though there were a few forums that volunteers could participate in, they were overwhelmingly filled with people who were either uninformed about AI or had conflicting interests (if you use AI to cheat on your homework and know nothing else about it, you’re going to find yourself for AI). 	Secondly, “Copilot for Education” is most likely not significantly safer than the standard consumer version of Copilot (which itself is a modified version of ChatGPT). Instead of training the model on a separate dataset (very time consuming and expensive) Microsoft has most likely put up some “guardrails” for the model which are supposed to keep it from outputting certain content. The problem is AI guardrails are incredibly weak and can be easily circumvented. (In fact, there’s entire <a href="https://www.reddit.com/r/ChatGPTJailbreak/new" target="_blank">online spaces</a> dedicated to “jailbreaking” AI!) When a model is trained on inappropriate content it will always have the potential to output inappropriate content with the right prompting. 

<blockquote>
“More than half of the student forum group were for the use of AI and are using AI” <em>-Zhi Su</em>
</blockquote>
As previously mentioned, many of the people in these forums had either a conflict of interest (Using AI to cheat on assignments for instance) or were uninformed on the issue. I don’t think you can expect someone who hardly knows anything about a topic to have an informed opinion on it. The surveyed group is also not representative of the student population since it’s a few students out of the over 50,000 total students in the school district who attended these forums <em>voluntarily</em>.
</div>

<div class="md:w-1/2 m-auto">
<Giscus
  repo="henry-vi/stop-using-copilot"
  repoId="R_kgDOQmWG8g"
  category="General"
  categoryId="DIC_kwDOQmWG8s4Cz41U"
  mapping="title"
  strict="0"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme="preferred_color_scheme"
  lang="en"
  loading="lazy"
/>
</div>
