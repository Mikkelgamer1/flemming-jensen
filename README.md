# Flemming Jensen – hjemmeside

Statisk site for travtræner Flemming Jensen (licens 5149), Hjallerup. Ingen afhængigheder – kræver kun Node 20+.

```
node build.mjs            byg til dist/ med de gemte data
node build.mjs --hent     hent friske data fra Dansk Hestevæddeløb først
node build.mjs --serve    byg og vis på http://localhost:4173 (PORT=… for en anden port)
node build.mjs --test     selvtjek
```

## Det opdaterer sig selv

- **Heste i træning, resultater, kommende starter og statistik** hentes fra Dansk Hestevæddeløbs åbne data (samme kilde som travinfo.dk) og gemmes i `data/travinfo.json`.
- `.github/workflows/opdater.yml` henter data hver morgen og ved hvert push til `main` og gemmer dem i repoet – så bygger Vercel en ny udgave. Fejler hentningen, bygges der videre med de gemte data.
- På Vercel bygges sitet med `vercel.json` og får projektets adresse automatisk. En `vercel.app`- eller `github.io`-adresse holdes ude af søgemaskinerne.

## Facebook

Flemming Jensen har ingen Facebook-side. Får han en, sættes adressen i `SITE.facebook`, så kommer opslagsboksen (og cookie-banneret) automatisk.

## Ret indhold

Alt indhold står i `templates.mjs`: kontaktoplysninger i `SITE` øverst. Design i `assets/css/site.css` (farverne øverst: flaskegrøn, elfenben, dragtens grøn-hvide tern og is-blå). Skrifter: Unbounded og Manrope (SIL Open Font License).

## Kilder

| Oplysning | Kilde |
| --- | --- |
| Født 1961, A1M-licens, hjemmebane Spar Nord Arena Aalborg, adresse Frederikshvilevej 9, telefon, løbsfarver (hvid/grøn/logo), træningsliste, resultater, statistik | Dansk Hestevæddeløb (licens 5149) |
| Født 17. august 1961, træner siden 1. maj 1994 | tf1909.dk (Dansk Travtrænerforening af 1909) |
| »Ismanden«, amatør med Enjoy Engholm, DM for amatører 1986, start i Skive, Sleipner (Jydsk 4-årings GP 1994), Sverige 1999–2007 (Axevalla, Åby), Årets Travtræner 2009, 2010, 2013–2015, Årets Travkusk 2010, store heste, Okay Bee-hattrick | travservice.dk, 17. august 2021 |
| Erik Nielsen i Lemb, Takter-familien, Derby 2001 (Esterel Sunset) og 2010 (Okay Bee), Tøjeksperten, »på hestens præmisser«, stalde og træningsbaner ved Hjallerup | kmfoto.dk, 2. februar 2022 |
| 10.289.726 kr. i 2013 (første over 10 mio.), Sun Esterel på Åby, 11.123.781 kr. i 2014, citatet om 10-millionersæsonen | travet.dk, 3. november 2025 (nævner også Årets Travtræner 2012) |
| Dansk Hoppe Derby, god kollega | travet.dk, 17. august 2025 |
| DM i monté 2024 med Eros Zola, citatet om at ride | danskhv.dk, 19. juni 2024 |
| Mesterskab for Danmark 2026 med Just Hans; Ina Crown; Ninjago; Team Jensen og Frederikshvilevej | travet.dk, 11. og 10. oktober, august og 10. september 2026 |
| Spar Nord Arena – Aalborg Væddeløbsbane, Skydebanevej 25 | aav.dk |
| Fotos | KM Foto (Kjeld Mikkelsen), Burt Seeger, Hesselberg Foto, Martin Timm Holmstav (via travet.dk), Dansk Hestevæddeløb, TV2 Nord |
