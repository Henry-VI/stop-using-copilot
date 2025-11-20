function generateemail() {
  // Generate email
  const name = document.getElementById("name").value;
  const school = document.getElementById("school").value;
  const email = `Dear Vancouver School Board,\n\nI am a student at ${school}, and it has been brought to my attention that our school board uses Microsoft's office suite product known as "Microsoft 365 Copilot" (previously "Microsoft Office 365"). Recently, I have realized that the program is problematic: it has multiple problems which means I do not believe it should be used in our schools, and I will discuss these problems now.\n\nMicrosoft is an American multi-trillion dollar company with a history of security vulnerabilities and bugs (see Microsoft SharePoint Zero-Day, CrowdStrike BSOD issues, ...) which is all incredibly concerning when entrusting someone with information that can link your full legal name, age, and the school you go to, all of which is enough information to follow someone home if leaked. That is the kind of information that can make a problem online escalate into something much more dangerous, which should be avoided as much as possible.\n\nQuite recently, Microsoft has initiated the process of  introducing "Copilot AI" into their office suite as a part of the recent AI craze, which I believe is antithetical to the mission of schooling: it doesn't support our learning if I have a button, now built into Word, that I can use to cheat on my entire assignment. Even if I don't use it that way, these tools are distracting; I don't believe anyone appreciates a large and colourful button perched atop their ribbon menu that moves everything around just enough to rid everyone of their muscle memory. Perhaps if not an academic concern for most students, then it may be an issue of climate impact: AI data-centers can grow to be the size of university campuses and have destroyed and will continue to destroy ecosystems in third world countries. The impact of AI towards people can also not be understated: people in Africa are forced to train models for cents a day whilst looking at the most disturbing images one could think of to "align" models for safety. Needless to say, none of this is good, and you can not fault anyone for preferring to stay away from AI for these reasons. If by any chance the VSB is not willing to switch away from Microsoft Copilot 365, I strongly advise that the plan which does not include Copilot AI is enabled as a middle ground.\n\nThere are plenty of available replacements for Microsoft's suite of products, and in particular I'd like to highlight LibreOffice, an alternative office suite which is already used in the Vancouver Public Library and can adequately provide tools for typing documents, creating presentations, designing spreadsheets, and so on. Replacing Teams and Outlook is more challenging, but apps such as Element.io for Teams and Thunderbird for Outlook are strong choices. All the options listed here are privacy respecting and open source, meaning the code is available for public audit and contribution, but other solutions exist. In general, students are also fully capable of using whatever website they choose for these tasks, such as Google Docs.
You can learn more at https://stopcopilot.henryvaniersel.ca
Sincerely,

${name}`;
  document.getElementById("email").innerText = email;

  // show copy button
  document.getElementById("emailbuttons").style.display = "block";
}

function copyemail() {
  navigator.clipboard.writeText(document.getElementById("email").innerText)
}
