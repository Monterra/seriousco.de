+++
date = "2016-11-02T12:18:48+01:00"
draft = false
title = "Rising Farms Online"
description = "A multiplayer farmsimulation <br/> written in typescript - my baby."
image = "rfo_titel.png"
tags = ["typescript","nodejs","pixijs","angular2"]
background = "white"
color = "black"
+++

<p>
    {{< img src="images/rfo_titel.png" class="center" >}}
</p>

[Rising Farms Online](http://rising.farm/play) is the biggest project I’ve been working on. It started in late 2009 / early 2010 and lasts until now. Starting with a Visual Basic 6 application I’ve done several rewritings of the codebase where I’ve learned so many things like different programming languages and design patterns. It was my playground where I could do what I want - and I wanted to build an extraordinary game experience. That’s why i put so much effort into <span class="tooltip" title="Rising Farms Online">RFO</span>. This project contributes a major part to my coding experience and is the reason why I’m the software engineer I am today. 

<p style="text-align:center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aB1j0G4NdMg?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</p>

## What is it about?  {#about}
---

Do you know Harvest Moon? It is a farmsimulation with RPG elements, first released in 1996 for the SNES. I loved playing “HM: Friends of Mineral Town” on my Gameboy Advance. Early 2010 I’ve searched the web for an online version of this type of game, but there was no “Harvest Moon Online” out there. That’s when it came to my mind: why not creating your own <span class="tooltip" title="Harvest Moon">HM</span> Online?

<a class="image-link" href="../../images/risingfarms_1.png" title="Login Screen">
    {{< img src="images/risingfarms_1.png" class="right round-rectangle" width="300" >}}
</a>
Rising Farms Online is a multiplayer farmsimulation where you can interact with other players and npcs. Every player has his own farm where he can plant seeds, care for his animals and do a lot of other fun stuff. I didn't want to create just another Farmville clone where you just click around and don’t really interact with others. In RFO the players can leave their farm and interact with each other in “Colona”. 

Colona is a nice town with many possibilities and nice dwellers. Do you want to go mining? Test your new fishing rod? Or just want to sell your harvest at the auction house? No problem! Go out and have a nice chat with the npcs, they might have an exciting quest for you. :wink: 

## What was the challenge? {#challenge}
---

Create an online game they said. It will be easy they said. Ha! I know it would be quite a challenge, but it really was so much fun to see my idea growing up to a game worth playing. 2013 I’ve rebuilt RFO from scratch with web technologies. Everything is written in JavaScript and the users don’t have to install a client on their pc. 

> This project contributes a major part to my coding experience and is the reason why I’m the software engineer I am today.

---

<a class="image-link" href="/images/risingfarms_2.png" title="Map Editor">
    {{< img src="/images/risingfarms_2.png" class="left round-rectangle" width="300" >}}
</a>
RFO basically consists of three components: The game client, the server and the editor. On the client side, informations from the server get rendered onto a html5 canvas element with WebGL. The server is built with nodejs and all the data is stored in a mongodb. The editor is for creating game content: from creating maps to adding items and whole game events - it’s a powerful tool built with angular in the frontend and nodejs in the backend. 

RFO also improved my skills in team leading. A lot of people helped me with this project and sometimes it was a challenge coordinating them. Building a community and serving them well was also a nice experience, but as I said - I had some people helping me with this type of work. :slight_smile:  I am very thankful for them, they volunteered to help me and I will mention them in a separate blog post. 

## Conclusion
---

I am really proud of what I’ve achieved since 2010. I’ve gained so much coding experience and all the codebase refactorings and experiments were so helpful for me to become the software engineer I am today. Since I am working as a full time developer, I don't have much time for RFO in my spare time, but I plan to move forward with this project as good as possible. 

What I’ve told so far is only a little part of what happened behind the scenes, that’s why I’m gonna release a detailed blog entry soon.

Rising Farms Online on [<i class="fa fa-facebook"></i> Facebook](https://www.facebook.com/risingfarmsonline/), [<i class="fa fa-youtube"></i> YouTube](https://www.youtube.com/risingfarmsonline/) and the [<i class="fa fa-globe"></i> Official Website](http://www.risingfarms-online.com/).