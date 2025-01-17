---
description: The personal webpages of ~perplexedtheta, a full-stack developer based in the UK
title: /about/
view: page.html
---

[% USE relative_url %]
[% USE gravatar_url %]

<div class="about-header">
    <div class="row">
        <div class="col-12 col-lg-4 text-center text-lg-end my-4 px-3 px-lg-0 order-0">
            <img class="about-mugshot" src="[% 'jahdobble@llownd.net' | $gravatar_url size => 587 %]" />
        </div>
        <div class="col-12 col-lg-8 text-end align-content-center my-4 mt-lg-0 order-1">
            <h2>Jake Deery</h2>
            <p class="text-end">Systems Administrator, PTFS Europe Ltd</p>
        </div>
    </div>
</div>
<div class="about-contact">
    <div class="row">
        <div class="col-12">
            <h4>Contacts</h4>
            <p>
                <a href="jahdobble&#64;llownd&#46;net">jahdobble&#64;llownd&#46;net</a>&nbsp;📨<br />
                <a href="https://maps.app.goo.gl/32suBNKoKqi1PCCt7" target="_blank"><span class="devon">〓〓</span>🇪🇺 Devon, UK</a>&nbsp;📍<br />
                <a href="https://github.com/perplexedtheta" target="_blank">github.com/perplexedtheta</a>&nbsp;👨🏼‍💻<br />
                <a href="https://chat.koha-community.org/koha-community/messages/@perplexedtheta" target="_blank">chat.koha-community.org/@perplexedtheta&nbsp;💬</a>
            </p>
        </div>
    </div>
</div>
<div class="about-work">
    <div class="row">
        <div class="col-12">
            <h4>Work</h4>
            <p>Most recently, I've been working remotely for PTFS Europe. We are a UK-based organisation that
                primarily provides open-source software solutions. I mainly work with Koha and Aspen Discovery,
                written in Perl (Koha), Java, and PHP (Aspen).</p>
            <p>Koha was my gateway into Perl whilst working at City College Plymouth, so being able to work with it
                full-time has been great, and I've also enjoyed learning a bit of Java and PHP (both languages I
                previously thought lowly of) when working with Aspen Discovery. 😎</p>
        </div>
    </div>
</div>
<div class="about-background">
    <div class="row">
        <div class="col-12">
            <h4>Background</h4>
            <p>Originally from Devon, I now live on the Cornish border, by the sea, with my partner and my pet
                blackbird (not really my pet, but he does sit in my window while I work).</p>
            <p>My interest in technology goes back to 2001, when my family bought our first desktop PC. It had a
                533MHz Pentium III, 512 MB of memory, and a 20 GB hard disk. Pitiful by today's standard, but we
                were the only family amongst my peers that had 1Mbps cable broadband.</p>
            <p>This beige box opened up a line to family members both in the UK, and Ireland. It also allowed me to
                tinker with the machine, install new software, and discover all the Internet had to offer.</p>
            <p>Since 2021, I've been working in this industry I've spent my whole life aspiring towards. Initially
                this was as a technician, but since 2024 I've been working full-time as a developer, love every
                moment of my work.</p>
        </div>
    </div>
</div>
<div class="about-edu">
    <div class="row">
        <div class="col-12">
            <h4>Education</h4>
            <div class="about-edu-entry row">
                <div class="col-12">
                    <h5>Applied Computer Science</h5>
                    <img src="[% 'assets/vectors/uop-logo.svg' | $relative_url %]" />
                    <p>
                        University of Plymouth<br />
                        September 2019 &ndash; May 2020<br />
                        First class with honours
                    </p>
                </div>
            </div>
            <div class="about-edu-entry row">
                <div class="col-12">
                    <img src="[% 'assets/vectors/ccp-logo.svg' | $relative_url %]" />
                    <h5>Software Development</h5>
                    <p>
                        City College Plymouth<br />
                        September 2016 &ndash; May 2018<br />
                        First class
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="about-tech">
    <div class="row">
        <div class="col-12">
            <h4>Technology</h4>
            <p><strong>Mac</strong> machines are my current tool of choice. I've fallen in and out of love with
                Apple over the years, but the current line-up of Mac laptops are irrefutably the best on the market
                for basically everyone, except from gamers. I currently have the pleasure and fortune of being the
                owner of an <strong>M1 Pro MacBook Pro</strong>, and two years later, it still gives me enormous
                pleasure to use.</p>
            <p>Just because I'm a Mac user, that doesn't preclude me from using other operating systems. I tend to
                prefer <strong>Debian</strong> on headless systems, and either <strong>Pop!_OS</strong> or
                <strong>Fedora</strong> on PCs.
            </p>
            <p>I'm currently experimenting with <strong>neovim</strong>, but for now my daily code editor is
                <strong>VS Code</strong>. It is a very dependable editor, and the plugin market is quite mature by
                now. I do want to get into neovim &ndash; I've been a vimmer for a year or so now, and the
                keystrokes are second nature to me (I used command-line editors a lot whilst I was a technician).
            </p>
            <p>I cut my teeth on <strong>C/C++</strong> (I know, right…), but I wouldn't consider myself fluent
                these days. I mainly write in <strong>Perl</strong> &amp; <strong>HTML/SASS/JS</strong> now, though
                I'm getting familiar with <strong>Java</strong> &amp; <strong>PHP</strong> as well. I'm also a fan
                of a well-constructed <strong>bash</strong> script. 🙂</p>
            <p>I'm about to learn <strong>Vue.js</strong> as my first proper framework. Wish me luck! I have dabbled
                with pseudo-frameworks, like <strong>Jekyll</strong> &amp; <strong>Bootstrap</strong> (which this
                site uses), and Koha makes use of <strong>JQuery</strong>, but Vue.js feels like a move into the
                major leagues.</p>
            <p>My only serious foray into the world of databases is with <strong>MySQL</strong> &
                <strong>Postgres</strong>. I'd love to do stuff with nosql and MongoDB, so if anyone has any
                interesting pet project ideas, get in touch!
            </p>
            <p>I'm a shameless <strong>/bin/zsh</strong> user, and have a fairly minimal but useful oh-my-zsh setup.
                Maybe one day, I'll publish my config!</p>
        </div>
    </div>
</div>
