<div align="center">

# 🚌 मालवा एक्सप्रेस — Malwa Express
### *The Bus Driver's Cassette*

**Board the night bus. Press play. Let the highway do the rest.**

An atmospheric web experience that recreates the specific, unglamorous magic of a Central Indian overnight bus ride — dhaba chai stops, a driver's curated cassette of 90s Bollywood hits, a conductor calling out the next stop, and the slow drift from golden afternoon into dusk.

[**🎧 Board the Bus →**](https://malwa-express.vercel.app)

![Made with HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Made with CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Supabase Realtime](https://img.shields.io/badge/Realtime-Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![No Framework](https://img.shields.io/badge/Framework-None%20needed-orange?style=flat-square)

</div>

---

## 🪟 What is this, actually

If you've ever taken a night bus across small-town India, you know the drill: the seats are worn teal vinyl, someone's got a garland strung across the windshield, and the driver has *one* cassette on rotation for the entire route — Kumar Sanu, Alka Yagnik, the works. Nobody asks him to change it. Nobody wants him to.

**Malwa Express** turns that specific, oddly wholesome experience into a website you can leave open and just... exist inside of. No login, no algorithm, no skip-ads-in-5-seconds. Just the bus, the road, and the cassette.

---

## ✨ Features

| | |
|---|---|
| 🎞️ **Retro Cassette Player** | Spinning vinyl-style disc, 50 handpicked classic Bollywood tracks, real tape-motor scrub SFX when you drag the seek bar |
| 📢 **Conductor Voice Calls** | Authentic Hindi conductor announcements — music automatically ducks to 25% volume and ramps back when he's done talking |
| 🗺️ **7-Stop Interactive Route** | The actual Indore → Dewas highway, stop by stop. Tap any stop to hear it called out |
| 👥 **"Share This Ride"** | Real-time co-listening over Supabase — send a link, someone joins, playback stays perfectly in sync between you |
| 🌧️ **Multi-View Ambience** | Switch between outside-highway, inside-bus, and rain-on-the-glass views, each with its own procedural Web Audio soundscape |
| 🌇 **Living Golden Hour** | The lighting quietly drifts from bright afternoon → warm gold → dusk orange → twilight as your journey (playlist) progresses |
| 🎟️ **Vintage Bus Ticket** | A clickable ticket stub with your name, seat, fare, and a co-passenger stub when you're riding with someone |
| 😴 **Auto-Hide Screensaver** | UI fades away after 4 seconds of stillness — this is a "leave it on and chill" site, not a dashboard |
| 📱 **Lockscreen Controls** | Full MediaSession integration — play/pause/skip from your phone's lockscreen, smartwatch, or Bluetooth headphones |
| 🌆 **"देवास आ गया"** | A proper journey-completion screen when you reach the end of the line, not just silence |

---

## 🛠️ Tech Stack

No React, no build step, no `node_modules` black hole — just a fast, framework-free SPA.

- **Frontend:** HTML5 · Vanilla JavaScript (ES6+) · Vanilla CSS3 (custom properties, Grid, Flexbox, keyframes)
- **Design language:** Dark liquid glassmorphism (`backdrop-filter: blur() saturate()`), Baloo 2 for Devanagari, Space Mono for the retro-digital bits
- **Audio:** HTML5 Audio API for playback + MediaSession, Web Audio API for procedural rain ambience and mechanical tape-click SFX
- **Realtime:** [Supabase](https://supabase.com) Broadcast + Presence channels, lazy-loaded only when someone actually shares a ride
- **Rendering:** HTML5 Canvas 2D for the raindrop particle system
- **Hosting:** Vercel, with immutable caching on static assets and `no-cache` on `index.html` for instant updates

---

## 🚏 Getting Started

This is a static site — no build tooling required.

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/malwa-express.git
cd malwa-express

# 2. Serve it locally (any static server works)
npx serve .
# or
python3 -m http.server 8000
```

Open `http://localhost:3000` (or whichever port your server prints) and you're on the bus.

### Setting up "Share This Ride" (optional)

The shared-listening feature needs a Supabase project:

1. Create a free project at [supabase.com](https://supabase.com).
2. Grab your **Project URL** and **anon public key** from *Project Settings → API*.
3. Copy `.env.example` to `.env` and fill them in:

   ```ini
   SUPABASE_URL=your-project-url-here
   SUPABASE_ANON_KEY=your-anon-key-here
   ```
4. Confirm Realtime is enabled under *Database → Replication* (on by default for new projects).

Without this, everything works fine — you just won't be able to share a ride with someone else.

---

## 📁 Project Structure

```
malwa-express/
├── index.html                  # The entire app — structure, styles, and engines
├── scratch_tracks.js/.json     # 50-track playlist metadata
├── vercel.json                 # Routing + static asset caching config
├── .env.example                # Supabase config reference
├── assets/
│   ├── malwa.png                # Logo
│   ├── bg-inside.jpg            # Inside-bus backdrop
│   ├── bg-outside.jpg           # Highway backdrop
│   ├── rain-bg-image.jpg        # Rain-view backdrop
│   └── covers/                  # 50 album cover images
├── conductor audios/            # Hindi conductor voice clips
├── fx/                          # Tape-motor scrub SFX
└── new songs/                   # 50 Hindi MP3 tracks
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` | Play / Pause |
| `F` | Toggle fullscreen |
| `Esc` | Exit fullscreen / close ticket |
| Media keys | Play, pause, next, previous (via lockscreen / headset) |

---

## 🛣️ Coming down the highway

A few stops not yet built:

- 🔊 WAV → compressed audio pass for faster loads
- 📲 PWA support — add it to your home screen like a real app

---

## 🙏 Credits

Built with a genuine love for 90s Bollywood, dusty highways, and the specific chaos of Indian public transport.

**Made with ❤️ by Lakshya** — [`@chasing.lakshyaa`](https://instagram.com/chasing.lakshyaa)

---

<div align="center">

*यात्रा शुरू करें · [Board the bus →](https://malwa-express.vercel.app)*

</div>
