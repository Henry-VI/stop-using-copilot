<script>
  /*import * as m from "$lib/paraglide/messages"
  import { setLocale, getLocale } from "$lib/paraglide/runtime";
  function changeLanguage() {
    if (getLocale() == "en-ca") {
      setLocale("fr-ca")
    } else {
      setLocale("en-ca")
    }
  }*/
console.log("nerd v2")
function generateemail() {
  // Generate email
  const name = document.getElementById("name").value;
  const school = document.getElementById("school").value;
  const position = document.getElementById("position").value;
  let grammarWord = "at"
  if (position == "parent") {
    grammarWord = "of my child at"
  }
  const email = `Dear Vancouver School Board,\n\nI am a ${position} ${grammarWord} ${school}, and it has been brought to my attention that our school board uses Microsoft's office suite product known as "Microsoft 365 Copilot" (previously "Microsoft Office 365"). Recently, I have realized that the program is problematic: it has multiple problems which means I do not believe it should be used in our schools, and I will discuss these problems now.\n\nMicrosoft is an American multi-trillion dollar company with a history of security vulnerabilities and bugs (see Microsoft SharePoint Zero-Day, CrowdStrike BSOD issues, ...) which is all incredibly concerning when entrusting someone with information that can link your full legal name, age, and the school you go to, all of which is enough information to follow someone home if leaked. That is the kind of information that can make a problem online escalate into something much more dangerous, which should be avoided as much as possible.\n\nQuite recently, Microsoft has initiated the process of  introducing "Copilot AI" into their office suite as a part of the recent AI craze, which I believe is antithetical to the mission of schooling: it doesn't support our learning if I have a button, now built into Word, that I can use to cheat on my entire assignment. Even if I don't use it that way, these tools are distracting; I don't believe anyone appreciates a large and colourful button perched atop their ribbon menu that moves everything around just enough to rid everyone of their muscle memory. Perhaps if not an academic concern for most students, then it may be an issue of climate impact: AI data-centers can grow to be the size of university campuses and have destroyed and will continue to destroy ecosystems in third world countries. The impact of AI towards people can also not be understated: people in Africa are forced to train models for cents a day whilst looking at the most disturbing images one could think of to "align" models for safety. Needless to say, none of this is good, and you can not fault anyone for preferring to stay away from AI for these reasons. If by any chance the VSB is not willing to switch away from Microsoft Copilot 365, I strongly advise that the plan which does not include Copilot AI is enabled as a middle ground.\n\nThere are plenty of available replacements for Microsoft's suite of products, and in particular I'd like to highlight LibreOffice, an alternative office suite which is already used in the Vancouver Public Library and can adequately provide tools for typing documents, creating presentations, designing spreadsheets, and so on. Replacing Teams and Outlook is more challenging, but apps such as Element.io for Teams and Thunderbird for Outlook are strong choices. All the options listed here are privacy respecting and open source, meaning the code is available for public audit and contribution, but other solutions exist. In general, students are also fully capable of using whatever website they choose for these tasks, such as Google Docs.
You can learn more at https://stopcopilot.henryvaniersel.ca
Sincerely,

${name}`;
  if (school) {
    document.getElementById("school").style.borderColor = "#66c6f9"
  } else {
    document.getElementById("school").style.borderColor = "indianred"
    if (!name) {
      document.getElementById("name").style.borderColor = "indianred"
    }
    return
  }
  if (!name) {
    document.getElementById("name").style.borderColor = "indianred"
    if (!school) {
      document.getElementById("school").style.borderColor = "indianred"
    }
    return
  } else {
    document.getElementById("name").style.borderColor = "#66c6f9"
  }
  document.getElementById("email").innerText = email;

  // show copy button
  document.getElementById("emailbuttons").style.display = "block";
}

function copyemail() {
  navigator.clipboard.writeText(document.getElementById("email").innerText)
}
</script>
<svelte:head>
  <title>Stop Microsoft Copilot!</title>
</svelte:head>
<nav>
      <img src="favicon.png" width="32px" alt="Microsoft 365 Copilot logo with a red X over it.">
      <b id="title-nav">Stop Microsoft Copilot!</b>
      <span id="items">
        <a href="#">Start</a>
        <a href="#cards">Why?</a>
        <a href="#emailsection">Take Action</a>
        <a href="#timeline">Timeline</a>
      </span>
    </nav>
    <div id="banner-update"><a href="https://forms.office.com/r/zqX4NMaUqE" target="_blank">The VSB has published a draft AI policy that allows feedback. Click here to participate.</a></div>
    <div id="progress"></div>
    <div id="opening">
    <h1 id="title">Dear VSB,</h1>
    <div style="text-align: center; margin-bottom: 2em;">
      <b>Please stop using Microsoft Copilot in schools</b>.
      <div>(Open Petition)</div>
      <img src="favicon.png" width="33%" alt="Microsoft 365 Copilot logo with a red X over it.">
    </div>
    </div>
    <h1 style="text-align: center; margin: 0; color: white; background-color: #155dfc; padding-bottom: 1em;">Why?</h1>
    <div id="cards">
      <div class="card">
        <h1 style="margin: 0; text-align: center;">🌎</h1>
        <div class="card-title">1. AI is Destroying the Environment.</div>
        <div class="card-description">AI data-centers in developing areas are destroying communities, ecosystems, and resource supplies in developing nations, creating damages too vast to recount here. Further reading in <em>Empire of AI</em> by Karen Hao if you'd like to hear more on the subject.</div>
      </div>
      <div class="card">
        <h1 style="margin: 0; text-align: center;">🏫</h1>
        <div class="card-title">2. AI isn't Beneficial to Learning</div>
        <div class="card-description">Copilot AI (Microsoft's rebranding of ChatGPT) will be implemented inside of software like Microsoft Word next year, meaning soon you'll be able to cheat on your homework and never need to open a new tab. It goes without saying, but that isn't amazing for our ability to learn.</div>
      </div>
      <div class="card">
        <h1 style="margin: 0; text-align: center;">🪟</h1>
        <div class="card-title">3. Microsoft Just Sucks</div>
        <div class="card-description">Can you think of a single month that's gone by without having any problems with Microsoft's products? Glitches aside, this is an American multi-trillion dollar company with a history of major security vulnerabilities in its closed-source software, all of which is a recipe for student data being leaked.</div>
      </div>
    </div>
    <div id="emailsection">
      <h1 style="text-align: center; margin-top: 0;">How Do We Stop Them?</h1>
      <p style="text-align: center; width: 50%; margin: auto; margin-bottom: 2em;">There are two ways. The first way is <b>by filling out <a href="https://forms.office.com/r/zqX4NMaUqE" target="_blank">this</a> form.</b> It's for submitting feedback on their AI policy, and you can use it until the form is closed. The other way is <b>by sending an e-mail to <u>info@vsb.bc.ca</u> using the e-mail generator below!</b></p>
      <form>
        <label for="school">School</label>
        <input type="text" placeholder="Kitsilano Secondary" id="school" required="">
        <label for="position">I am a...</label>
        <select name="position" id="position">
          <option value="student">Student</option>
          <option value="parent">Parent</option>
          <option value="teacher">Teacher</option>
          <!--<option value="citizen">Citizen</option>-->
        </select>
        <label for="name">Full Name (Name known by school)</label>
        <input type="text" placeholder="Jack Khatsahlano" id="name" required="">
        <input type="button" value="Submit" onclick={generateemail}>
        <h3>SEND E-MAIL TO <u>info@vsb.bc.ca</u></h3>
      </form>
      <div class="emailbuttons" style="display: none;" id="emailbuttons">
        <b>E-Mail Generated! ✨</b><br>
        <a onclick={copyemail}>Copy</a>
        <h1 style="margin: 0;">PREVIEW E-MAIL:</h1>
        <div id="email"></div>
      </div>
      <noscript>
        <h1>You've got Javascript Disabled!</h1>
        <div>That's fine though, here's a template for you to manually fill out:</div>
        <div>
          Dear Vancouver School Board, 
I am a [Your Position Here] at [Your School Here], and it has been brought to my attention that our school board uses Microsoft's office suite product known as "Microsoft 365 Copilot" (previously "Microsoft Office 365"). Recently, I have realized that the program is problematic: it has multiple problems which means I do not believe it should be used in our schools, and I will discuss these problems now.
Microsoft is an American multi-trillion dollar company with a history of security vulnerabilities and bugs (see Microsoft SharePoint Zero-Day, CrowdStrike BSOD issues, ...) which is all incredibly concerning when entrusting someone with information that can link your full legal name, age, and the school you go to, all of which is enough information to follow someone home if leaked. That is the kind of information that can make a problem online escalate into something much more dangerous, which should be avoided as much as possible.
Quite recently, Microsoft has initiated the process of  introducing "Copilot AI" into their office suite as a part of the recent AI craze, which I believe is antithetical to the mission of schooling: it doesn't support our learning if I have a button, now built into Word, that I can use to cheat on my entire assignment. Even if I don't use it that way, these tools are distracting; I don't believe anyone appreciates a large and colourful button perched atop their ribbon menu that moves everything around just enough to rid everyone of their muscle memory. Perhaps if not an academic concern for most students, then it may be an issue of climate impact: AI data-centers can grow to be the size of university campuses and have destroyed and will continue to destroy ecosystems in third world countries. The impact of AI towards people can also not be understated: people in Africa are forced to train models for cents a day whilst looking at the most disturbing images one could think of to "align" models for safety. Needless to say, none of this is good, and you can not fault anyone for preferring to stay away from AI for these reasons. If by any chance the VSB is not willing to switch away from Microsoft Copilot 365, I strongly advise that the plan which does not include Copilot AI is enabled as a middle ground.
There are plenty of available replacements for Microsoft's suite of products, and in particular I'd like to highlight LibreOffice, an alternative office suite which is already used in the Vancouver Public Library and can adequately provide tools for typing documents, creating presentations, designing spreadsheets, and so on. Replacing Teams and Outlook is more challenging, but apps such as Element.io for Teams and Thunderbird for Outlook are strong choices. All the options listed here are privacy respecting and open source, meaning the code is available for public audit and contribution, but other solutions exist. In general, students are also fully capable of using whatever website they choose for these tasks, such as Google Docs.
You can learn more at https://stopcopilot.henryvaniersel.ca
Sincerely,
[Your Name Here]
        </div>
      </noscript>
    </div>
    <div id="timeline">
      <h1>Timeline</h1>
      <div>Information about the latest happenings in relation to the VSB &amp; AI.</div>
      <div class="timeline-item">
        <h2>VSB Creates AI Policy Draft</h2>
        <div><em>December 1st, 2025</em></div>
        <div>The VSB releases a rough draft of their planned AI policy open to feedback, accessible <a target="_blank" href="https://forms.office.com/r/zqX4NMaUqE">here</a>. The policy would create a school system heavily involving AI, specifying use of "school-approved platforms", which likely means exclusively Copilot. A static version of the policy is listed <a href="https://gist.github.com/Henry-VI/c267ed0f16770560962cf9efaa132cd8" target="_blank">here</a> for archival purposes.</div>
      </div>
      <svg width="32" id="mobile-timeline-line-1">
        <path
       style="fill:#00aaff;fill-opacity:1;stroke:#00aaff;stroke-width:4;stroke-linecap:round;stroke-dasharray: 8px;stroke-opacity: 0.5;"
       d="m 16,16 0,128"
       id="path1" />
      </svg>
      <div class="timeline-item timeline-item-2">
        <h2>Student Forum Held</h2>
        <div><em>November 25th, 2025</em></div>
        <div>
          The VSB holds a student forum, initially on personal digital devices that transforms into a debate about AI part way through. Throughout this debate held by two pro-AI members of staff at the board, it's let slip that, among other opinions, that AI "music" is something they consider art, that all things invented by humans are good and therefore so is AI (these people are supposed to be in charge of our education), and boredom was expressed when environmental damages of AI was mentioned. These events immediately outlined this website's requirement and created a larger push for this project.
        </div>
      </div>
      <!-- I hate svgs so much -->
      <svg width="32" id="mobile-timeline-line-2">
        <path
       style="fill:#00aaff;fill-opacity:1;stroke:#00aaff;stroke-width:4;stroke-linecap:round;stroke-dasharray: 8px;stroke-opacity: 0.5;"
       d="m 16,16 0,128"
       id="path1" />
      </svg>
      <svg width="32" id="desktop-timeline-line" height="512">
        <path
       style="fill:#00aaff;fill-opacity:1;stroke:#00aaff;stroke-width:4;stroke-linecap:round;stroke-opacity:0.5;stroke-dasharray: 8px;"
       d="m 16,16 0,448"
       id="path1" />
      </svg>
      <div class="timeline-item">
        <h2>Website is Created</h2>
        <div><em>November 19th, 2025</em></div>
        <div>Website is created out of frustration towards the VSB's handling of AI.</div>
      </div>
    </div>

    <footer>
      E-mail Me! - <a href="mailto:stopcopilot@henryvaniersel.ca">stopcopilot@henryvaniersel.ca</a>
      <div style="margin-top: 1em; color: gray;"><em>This website was inspired by <a href="https://fightchatcontrol.eu" target="_blank">fightchatcontrol.eu</a> (just a bit more scuffed)</em></div>
    </footer>
    <!-- Default Statcounter code for Stop Copilot!
https://stopcopilot.henryvaniersel.ca
<script type="text/javascript">
var sc_project=13187765; 
var sc_invisible=1; 
var sc_security="01f1429b"; 
</script>
<script type="text/javascript" src="https://www.statcounter.com/counter/counter.js" async=""></script>
 End of Statcounter Code -->
<!--<h1>{m.hello_world({"name": "World"})}</h1>
<button onclick={changeLanguage()}>change lang</button>-->
