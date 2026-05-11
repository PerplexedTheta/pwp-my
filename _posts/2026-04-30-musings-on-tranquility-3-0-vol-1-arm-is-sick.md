---
layout: ramble
title: "Commentaries on TQ 3.0, Vol. 1: arm64 is sick"
description: the arm64 hype is true, its fast bwoiiii!
category: monthly-ramble
tags: arm-nerd,macos,raspberry-pi,fuckin-sick,hardware,goodies-from-the-sack
location: Cornwall, UK <span class="kernow">〓〓</span>&#127466;&#127482;
---

This should, provided my motivation doesn't wane, be the first in a series of ramblings regarding my new homelab &mdash; Tranquility (TQ) 3.0 and Singularity (SiSi) 2.0. We'll see, eh?

TQ 2.0 is dead, and ultimately, good riddance to it. The new server has an ARM chip in it, which is barely worth noting nowadays. Except it still should be. I'm a Mac man, and so I'm familiar with how nutty ARM chips are, but having one in a server always felt both risky and just odd &mdash; I'm not sure why, I guess headless work just felt like the preserve of a grunty x86 chip. idk, man.

Anyway, the new server is more computationally powerful than the old one (~60% faster). That's cool, and ultimately, predictable. But is also uses exactly 90% less power when running my usual workflow (~2.4W vs ~24W) &mdash; now that's utterly incredible, makes my bank account happy, and is pretty much impossible with an architecture like x86!

### TQ? SiSi? tf?

Thieved from the nomenclature CCP Games give to their servers, Tranquility is the hypervisor I run here at home. TQ 1.0 was a shit Optiplex 9020 I got in 2018 from Gumtree for a tenner, whilst TQ 2.0 was an evolution on the "throw crap hardware at a problem and hope it doesn't expire before it has paid for itself" concept &mdash; specs&ndash;wise, an HP Elitedesk 405 or something (I've already forgotten) with a Ryzen 5 3400G and 64 gigs o' RAM. This box was considerably more than a tenner, but it was still cheap by modern standards.

Singularity, meanwhile, is my gateway ~~drug~~ node - SiSi 1.0 was specced alike to TQ 2.0 (sans a Ryzen 5 3200), in case I needed a drop&ndash;in replacement. TQ 2.0 was junk from day one, so I also just needed a separate, less highly strung box to run SSH, VPN, and all the afk goodies required to not get locked out of my own estate. Though I trust TQ 3.0 infinitely more than I did TQ 2.0 (more on that in a sec), I still want a low&ndash;power gateway solution for if / when TQ 3.0 has a sit-down. Turns out low&ndash;power computing is mad&ndash;fun.

### Whats the new lab, 'en?

It's a Mac Mini. M4. 24GB of RAM. Fuck all storage (256GB), but tonnes of storage (thanks, USB 4.0, and that job lot of 1TB disks I had lying about).

I know what you're thinking, but let me explain, because this was a fat ole fucking risk, and it has absolutely paid off. The holy quartet of a homelab is ultimately (for me, and most) to be affordable to operate, rippin' fast, safe enough to FAFO in, and freeing of the cold grips of capitalism.

[![Macmon output showing sweeeet CPU numbers]({{- 'assets/bitmaps/blog/2026-04-30-macmon.png' | relative_url }})]({{ 'assets/bitmaps/blog/2026-04-30-macmon.png' | relative_url }})

The Mac Mini was cheap &mdash; under 800 quid in 2026. It sips power, about 2.5&ndash;3W with all my Docker junk up. It's rippin' fast (something I'll cover in depth in another ramble). I've Dockerised ~~everything~~ most things (something else I'll cover in another ramble), so breaking shit isn't really a thing for me anymore. I can run everything myself without causing an x86 chip to stop, drop and roll off a cliff. I think the holy quartet has been met, right?

Oh yeah, Singularity 2.0. That's a Raspberry Pi 5. Not really much to say, in this regard. Its hooked up to an NVMe-in-a-case via USB, and has an active cooler. I did discover the hard way about the stupid RasPi PSU nonsense. Fuck you Raspberry. But, other than that, Sisi 2.0 is pretty borning, now. And, pretty reliable! I'll still _probably_ find some way to ramble about her, another time.
