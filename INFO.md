# 🚌 Malwa Express (मालवा एक्सप्रेस) — Project Documentation & Information

**Malwa Express — The Bus Driver's Cassette** is an interactive, atmospheric Web application that recreates the nostalgia of traveling on an overnight bus across the dusty highways of Malwa (Indore to Dewas, Madhya Pradesh, India). It combines classic 90s/2000s Bollywood cassette music, real conductor voice announcements, procedural Web Audio ambience, liquid glassmorphism UI, interactive route tracking, real-time shared co-listening via Supabase, and dynamic golden-hour-to-dusk environment shifts.

---

## 📑 Table of Contents
1. [Overview & Concept](#overview--concept)
2. [Tech Stack & Architecture](#tech-stack--architecture)
3. [Key Features](#key-features)
4. [Core Logic, Algorithms & Methods](#core-logic-algorithms--methods)
   - [1. Cassette Audio Engine & Player Logic](#1-cassette-audio-engine--player-logic)
   - [2. Procedural Web Audio Engine (Rain & Tape Clicks)](#2-procedural-web-audio-engine-rain--tape-clicks)
   - [3. Dynamic Audio Ducking Engine](#3-dynamic-audio-ducking-engine)
   - [4. Real-time Co-Listening Sync (Supabase WebSockets)](#4-real-time-co-listening-sync-supabase-websockets)
   - [5. Interactive 7-Stop Bus Route Engine](#5-interactive-7-stop-bus-route-engine)
   - [6. Progress-Based Lighting Shift Engine](#6-progress-based-lighting-shift-engine)
   - [7. Canvas Raindrop Particle Renderer](#7-canvas-raindrop-particle-renderer)
   - [8. Auto-Hide Screensaver Engine](#8-auto-hide-screensaver-engine)
5. [Complete Method & Function Reference](#complete-method--function-reference)
6. [Project File & Directory Structure](#project-file--directory-structure)
7. [Environment Variables & Configuration](#environment-variables--configuration)
8. [Keyboard Shortcuts & Accessibility](#keyboard-shortcuts--accessibility)
9. [Deployment](#deployment)

---

## 🎭 Overview & Concept

Malwa Express takes inspiration from long-distance highway bus journeys across Central India, where bus drivers played curated cassettes filled with timeless Hindi romantic melodies. 

The application is built to deliver an immersive sensory experience:
- **Visuals**: Ambient background scenes (inside bus view, outside highway view, rain glass view) with subtle Ken Burns motion.
- **Audio**: 50 handpicked classic Bollywood tracks, mechanical tape deck click SFX, tape motor scrub audio when seeking, procedural rain sound, and authentic Hindi bus conductor voice calls.
- **Social**: Real-time room syncing enabling two or more passengers ("Yatri" & "Saathi") to board the same virtual bus, sync music playback, and share a vintage digital bus ticket.

---

## 🛠️ Tech Stack & Architecture

- **Architecture**: Monolithic Single Page Application (SPA) with no heavy frameworks for instant loading and high performance.
- **Frontend Core**: HTML5 Semantic Markup, Vanilla JavaScript (ES6+), Vanilla CSS3 with CSS Custom Properties (`:root`), Flexbox, Grid, CSS Keyframe Animations.
- **Design System**: Dark Liquid Glassmorphism (`backdrop-filter: blur() saturate()`), Baloo 2 typography for Hindi/Devanagari, Space Mono for retro digital elements.
- **Audio Systems**:
  - **HTML5 Audio API**: Track playback, volume control, time updates, and MediaSession lockscreen media controls integration.
  - **Web Audio API**: Procedural Pink/White noise generator for rain ambience, Biquad lowpass filtering, and Oscillator nodes for tape click SFX.
- **Realtime Infrastructure**:
  - **Supabase Realtime WebSockets (`@supabase/supabase-js`)**: Lazy-loaded CDN integration utilizing Broadcast & Presence channels (`ride:<room_id>`) for real-time play/pause, seek, track switching, and passenger presence synchronization.
- **Canvas Rendering**: HTML5 2D Canvas particle animation system for glass raindrop simulation using `requestAnimationFrame`.
- **Deployment Platform**: Vercel Static Hosting with custom caching headers and clean URL routing.

---

## 🌟 Key Features

### 1. Retro Liquid Glass Cassette Player
- Rotating cassette vinyl disc displaying cover artwork matching the current track.
- Controls: Play/Pause, Next Track, Previous Track, Time Progress Bar with scrub functionality.
- Cassette motor tape scrub sound effect (`fx/freesound_community-sfx-cassette-tape-motor-30698.mp3`) triggered during progress bar clicks/seeks.
- 50 pre-configured classic Bollywood tracks (`TRACKS` dataset).

### 2. Conductor Voice Announcements & Audio Ducking
- Floating conductor audio switch triggering authentic Hindi bus conductor calls (e.g., *"Bhawarkua wale taiyar rhena"*, *"Ticket ticket"*, *"Indore piche chuth gya"*).
- Intelligent volume ducking smoothly lowers background song volume to 25% during announcements and restores to 100% upon completion.

### 3. Interactive 7-Stop Route Map
- Bus route progress bar featuring 7 real stops along the Indore–Dewas route:
  1. **Indore (इंदौर)**
  2. **Bhanwarkuan (भावरकुआं)**
  3. **Geeta Bhawan (गीता भवन)**
  4. **Lasudia (लसूडिया)**
  5. **Mangliya (मांगलिया)**
  6. **Dewas Bypass (देवास Bypass)**
  7. **Dewas Bus Stand (देवास बस स्टैंड)**
- Dynamic route fill bar based on overall track progress.
- Direct click interaction on any stop to hear the conductor announce that specific destination.

### 4. Real-Time Co-Listening ("Share This Ride")
- Generates a shareable URL (`?ride=<room_id>&host=<name>`).
- Name modal prompt for custom passenger names ("Yatri" and "Saathi").
- Supabase WebSockets broadcast channels keep audio playback, track choice, seek location, and pause/play state frame-synced across devices.
- Dynamic passenger count updates in the top bar.

### 5. Multi-View Ambience & Procedural Rain Engine
- 4-way floating side dock switcher with a sliding pill indicator:
  - **Outside View**: Highway backdrop with slow Ken Burns zoom.
  - **Inside View**: Inside bus passenger view.
  - **Rain Ambience Mode**: Custom rain backdrop combined with Web Audio procedurally synthesized rain sound and HTML5 2D Canvas raindrop simulation.
  - **Fullscreen Toggle**: Native full-screen mode with dynamic SVG icon switching.

### 6. Dynamic Lighting Shift (Golden Hour / Dusk Drift)
- Shifting overlay lighting transition across 4 journey stages based on progress through the 50-track playlist:
  - **Stage 1 (0–25%)**: Bright afternoon look.
  - **Stage 2 (25–60%)**: Warm golden hour tone.
  - **Stage 3 (60–85%)**: Dusk orange glow.
  - **Stage 4 (85–100%)**: Twilight / evening shadows.

### 7. Interactive Vintage Bus Ticket
- Clickable retro bus ticket card displaying Passenger Name, Ticket ID (`FA-4178`), Route (`Indore → Dewas`), Seat Number, Fare status, and Co-Passenger stub when riding in sync.

### 8. Auto-Hide Screensaver Mode
- Fades out UI controls after 4 seconds of inactivity.
- Hides cursor in Fullscreen mode.
- Wakes up automatically on mouse move, touch, scroll, or keypress.

### 9. MediaSession & Hardware Controls Integration
- Integrates with mobile lockscreen media notifications, smartwatches, and Bluetooth headphones (Play, Pause, Next, Previous, Album Art).

### 10. Journey Completion Overlay ("देवास आ गया")
- Automatically triggers smooth 1.5s audio fade-out when reaching the end of the final track.
- Shows journey complete screen with Replay or Stay choices.

---

## 🧮 Core Logic, Algorithms & Methods

### 1. Cassette Audio Engine & Player Logic
- **Playlist Array (`TRACKS`)**: Array of objects containing `title`, `artist`, `src`, and `cover`.
- **`loadTrack(index, autoplay, withFadeIn)`**: Calculates wrapped index using `(i + TRACKS.length) % TRACKS.length`, sets `audioEl.src`, updates song titles/artwork, resets progress bar width, triggers `updateRouteProgress()`, updates `MediaSession` metadata, and broadcasts remote `track-change` event via Supabase.
- **`setPlaying(playingState)`**: Manages `isPlaying` flag, toggles `.playing` CSS class on vinyl disc to run/pause 12s CSS rotation animation, updates Play/Pause SVG icon, and broadcasts `play`/`pause` socket events.

### 2. Procedural Web Audio Engine (Rain & Tape Clicks)
- **`getAudioContext()`**: Initializes or resumes a singleton `AudioContext` instance.
- **Mechanical Tape Click (`playTapeClick()`)**:
  - Creates a sine wave oscillator at 160 Hz, ramping down exponentially to 30 Hz over 0.05s.
  - Connects to GainNode starting at 0.25 gain and fading to 0.001 gain over 50ms.
- **Procedural Highway Rain Ambience (`initRainAudio()`)**:
  - Generates 2 seconds of pink noise in an AudioBuffer using Paul Kellet's filter algorithm (7 poles with coefficients `b0` to `b6`).
  - Loops the noise buffer source continuously through a Lowpass BiquadFilter set to `1100 Hz`.
  - Controls overall rain volume via `rainGainNode` linear ramps (`0.18` target volume).

### 3. Dynamic Audio Ducking Engine
- **`duckMusic()`**: Smoothly ramps down background music volume from `1.0` to `0.25` over `300ms` using `setInterval` linear interpolation when conductor announcements start.
- **`restoreMusic()`**: Smoothly ramps song volume back from current level to `1.0` over `450ms` when conductor audio ends or errors out.

### 4. Real-time Co-Listening Sync (Supabase WebSockets)
- **`loadSupabase(callback)`**: Lazy-loads `@supabase/supabase-js@2` from CDN on-demand when user clicks "Share this ride" or opens a URL with `?ride=<room_id>`.
- **Realtime Broadcast Channel (`ride:<room_id>`)**:
  - **`sync-request`**: Sent by joining guest; host responds with current `trackIndex`, `currentTime`, `isPlaying`, and `hostName`.
  - **`sync-response`**: Guest applies host's playback position and track info via `applyRemoteSync()`.
  - **`play` / `pause` / `seek` / `track-change`**: Transmits player actions instantly to peers.
- **Presence Sync**: Tracks active socket connections in room and updates "Aboard" counter and co-passenger ticket stubs.

### 5. Interactive 7-Stop Bus Route Engine
- **`updateRouteProgress(trackIndex)`**: Maps the current track index `(0 to TRACKS.length - 1)` to the 7 bus stop nodes `(0 to 6)` using linear interpolation `stopIdx = Math.floor((tIndex / (TRACKS.length - 1)) * (BUS_STOPS.length - 1))`.
- Sets active CSS classes on current node and updates route line fill percentage.

### 6. Progress-Based Lighting Shift Engine
- **`updateLightingShift()`**: Calculates normalized overall journey progress:
  $$\text{totalProgress} = \frac{\text{trackIndex} + \frac{\text{currentTime}}{\text{duration}}}{\text{TRACKS.length}}$$
- Blends radial gradient background colors and opacity across 4 lighting stages (0–25% default, 25–60% warm golden hour, 60–85% dusk orange, 85–100% twilight).

### 7. Canvas Raindrop Particle Renderer
- **Raindrops Array**: Array of 90 particle objects with `x`, `y`, `length`, `speed`, and `opacity`.
- **Render Loop (`draw()`)**: Clears Canvas 2D context each frame, draws angled lines (`moveTo(x, y)` to `lineTo(x-2, y+length)`), updates drop positions (`y += speed`, `x -= 0.5`), and recycles drops back to top when passing screen height.

### 8. Auto-Hide Screensaver Engine
- **`resetIdleTimer()`**: Clears existing timer and starts a 4-second timeout to `goIdle()`.
- **`goIdle()`**: Adds `.idle-fade` CSS class (opacity 0) to topbar, route bar, floating side switches, ticket, and creator badge. Dims player pill to 45% opacity and hides mouse cursor in fullscreen mode.
- **`wakeUI()`**: Restores full UI visibility on user interaction (`mousemove`, `keydown`, `touchstart`, `scroll`).

---

## 📋 Complete Method & Function Reference

| Function Name | Description |
|---|---|
| `formatTime(sec)` | Formats raw seconds into `M:SS` string (e.g. `185` -> `"3:05"`). |
| `loadTrack(i, autoplay, withFadeIn)` | Loads track at index `i`, updates UI metadata, MediaSession, and triggers remote socket broadcast. |
| `setPlaying(playing)` | Updates playback state, starts/stops vinyl spin animation, and toggles play icon. |
| `initPlayer()` | Initializes player UI with first track metadata on app launch. |
| `tickClock()` | Updates topbar 12-hour clock formatted with AM/PM. |
| `updateAboard()` | Simulates fluctuating passenger count (random additions/subtractions between 1 and 40). |
| `getAudioContext()` | Returns or resumes Web Audio API singleton context. |
| `playTapeClick()` | Plays synthetic high-frequency mechanical tape click. |
| `playTapeScrub()` | Plays a 0.75s slice of real cassette tape motor audio when progress bar is clicked/dragged. |
| `initRainAudio()` | Builds Web Audio pink noise buffer node and lowpass filter for rain ambience. |
| `startRainCanvas()` / `stopRainCanvas()` | Manages requestAnimationFrame rendering loop for glass raindrops. |
| `enableRain()` / `disableRain()` | Toggles rain audio gain and rain canvas visibility. |
| `updateRouteProgress(tIndex)` | Updates active stop highlight and route line fill width. |
| `duckMusic()` / `restoreMusic()` | Smoothly lowers and restores song audio volume during conductor voice calls. |
| `toggleTicket()` | Toggles centered modal zoom state of the vintage bus ticket. |
| `moveViewIndicator(btn)` | Smoothly translates sliding active pill indicator inside the floating view dock. |
| `setActiveDockButton(btn)` | Updates active state and moves view indicator to target dock button. |
| `toggleFullscreen()` | Requests or exits browser fullscreen mode. |
| `updateFullscreenIcon()` | Updates fullscreen button SVG icon based on active fullscreen state. |
| `resetIdleTimer()` / `goIdle()` / `wakeUI()` | Manages 4-second screensaver UI auto-fade system. |
| `updateLightingShift()` | Computes journey progress and shifts lighting overlay gradient. |
| `triggerJourneyEnd()` | Triggers 1.5s audio fade-out and displays "देवास आ गया" completion screen. |
| `showToast(msg)` | Displays animated floating pill toast notification. |
| `promptName(title, sub, default, callback)` | Opens custom passenger name prompt modal. |
| `updateTicketUI()` | Re-renders vintage ticket passenger names, seat numbers, and co-passenger stub. |
| `loadSupabase(callback)` | Dynamically injects Supabase JS library script tag into DOM. |
| `initRealtimeRoom(roomId, isHost)` | Initializes Supabase Realtime broadcast channel and presence tracking. |
| `broadcastEvent(event, payload)` | Transmits real-time WebSockets event to room peers. |

---

## 📁 Project File & Directory Structure

```
malwa-express/
├── index.html                  # Single Page Application (HTML structure, CSS3, JS Engines)
├── scratch_tracks.js           # 50-track JavaScript array metadata
├── scratch_tracks.json         # 50-track JSON dataset
├── vercel.json                 # Vercel routing & static asset caching configuration
├── .env.example                # Environment variable reference (Supabase URL & Key)
├── .agents/
│   └── AGENTS.md               # Workspace rules and Git push policy
├── assets/
│   ├── malwa.png               # Main Malwa Express logo
│   ├── bg-inside.jpg           # Inside bus background image
│   ├── bg-outside.jpg          # Highway outside background image
│   ├── rain-bg-image.jpg       # Rain ambience background image
│   └── covers/                 # Album artwork images (cover_01.jpg - cover_50.jpg)
├── conductor audios/           # 15 authentic Hindi bus conductor voice MP3 recordings (192kbps)
│   ├── agla stop aane wala he.mp3
│   ├── bhawarkua wale taiyar rhena.mp3
│   ├── chalo chalo bus nikal rhi he.mp3
│   ├── dewas aane wala he indore piche chuth gya.mp3
│   └── ...
├── fx/
│   └── freesound_community-sfx-cassette-tape-motor-30698.mp3 # Tape deck scrub SFX
└── new songs/                  # 50 Hindi MP3 audio track files
    ├── Mujhse Mohabbat Ka.mp3
    ├── Chand Se Parda.mp3
    ├── Tumsa Koi Pyaara.mp3
    └── ...
```

---

## 🔑 Environment Variables & Configuration

Configured on Vercel Dashboard or local `.env` file:

```ini
# Supabase Realtime Connection
SUPABASE_URL=https://gygabtjqyvlscjwtfqco.supabase.co
SUPABASE_ANON_KEY=sb_publishable_VTUaSSoOpVm1m3FkK3sgkg_MWn3A2Mb
```

---

## ⌨️ Keyboard Shortcuts & Accessibility

- **`Spacebar`**: Toggle Play / Pause music track.
- **`F` Key**: Toggle Fullscreen mode.
- **`Esc`**: Exit Fullscreen / Close ticket modal.
- **Hardware / Media Keys**: Next Track, Previous Track, Play, Pause.

---

## 🚀 Deployment

The project is optimized for high-performance static hosting on **Vercel**.
`vercel.json` applies immutable caching for asset folders (`assets/`, `fx/`) with `max-age=31536000`, while enforcing `no-cache` on `index.html` to guarantee instant updates.

---
*Made with ❤️ by Lakshya (`@chasing.lakshyaa`)*
