<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:%2334d399&height=170&section=header&text=Offline%20Flashcards&fontSize=40&fontColor=ffffff" alt="Offline Flashcards banner"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Inter&weight=600&size=22&pause=1000&color=34d399&center=true&vCenter=true&width=650&lines=Practice%20with%20a%20simple%20spaced-repetition%20deck" alt="Typing title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/offline-flashcards"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/offline-flashcards"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/offline-flashcards"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/offline-flashcards"/></p>
<p align="center"><img src="assets/overview.svg" alt="Offline Flashcards illustration" width="92%"/></p>

## 🧭 Overview
Offline Flashcards is a small study tool served locally by Node.js. Cards stay in browser localStorage, and a simple Leitner schedule brings due cards back for review. There is no account, analytics, or remote database.

## ✨ Features
- 🗃️ Create, edit, and delete question/answer cards.
- 🧠 Review due cards with Again, Good, and Easy ratings.
- 📦 Import and export a portable JSON deck.
- 🔒 Stores cards only in the current browser profile.

## 🎬 Demo
```text
Create a card → review it → choose Good → it moves to the next Leitner interval.
Export your deck as JSON to keep a backup.
```
The example is local and uses no hosted backend.

## 🚀 Quick Start
```bash
npm install
npm start
```
Open http://127.0.0.1:4174. Browser storage is local to that browser; use Export JSON for backups.

## 🧰 Tech Stack
- Node.js 18+ static server
- Vanilla HTML, CSS, and JavaScript
- localStorage and Node's built-in test runner

## 🗂️ Folder Structure
```text
server.js
public/index.html
public/app.js
public/scheduler.js
public/styles.css
tests/scheduler.test.js
package.json
assets/overview.svg
```

## 🗺️ Roadmap
- [x] Core workflow
- [x] Local-first operation
- [ ] More import/export options
- [ ] Additional regression coverage

## 🤝 Contributing
Issues and focused pull requests are welcome. Add tests for behavior changes and avoid introducing unnecessary dependencies.

## 📄 License
Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:101827,100:%2334d399&height=110&section=footer" alt="Animated footer"/></p>
