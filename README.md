# anoma-intent-Anoma Intent Refill Demo 🚀

A prototype showcasing how Intent-Centric Design in Anoma can solve the “empty wallet on a new chain” problem.

⸻

🔮 Idea

One of the most frustrating Web3 experiences is arriving on a new chain with an empty wallet — no gas to move, no way to start. Normally users have to:
 • Beg a friend for gas,
 • Withdraw from a CEX,
 • Or deal with bridges and multiple transactions.

With Anoma intents, a user just declares:

“Send 0.01 ETH to my Arbitrum wallet so I can start using it.”

Behind the scenes, the solver:
 • Checks what assets the user has (e.g. USDC on Ethereum),
 • Finds the optimal path to swap + bridge,
 • Delivers ETH into the Arbitrum wallet.

From the user’s perspective it’s simply: Intent → Action → Done.

⸻

🖥️ Demo

This repo contains a simple frontend demo:
 • Enter an intent via form input,
 • See the solver simulate a route,
 • Click Settle to complete the flow.

👉 Live Demo on Vercel (replace with real link after deployment)

⸻

⚡ Run locally

Clone the repo and open index.html directly in your browser:
git clone https://github.com/tada2k/anoma-intent-refill-demo
cd anoma-intent-refill-demo
open index.html   # or double click

📌 Notes
 • This is not a production app, just a prototype illustrating the intent → solver → settlement flow.
 • Built with plain HTML, CSS, and JS.
 • 100% client-side, no backend required.

⸻

👤 Author
 • GitHub: tada2k
 • X/Twitter: @QuocTin92322
 • Discord: tada2k
refill-demo-final
Demo app for Anoma intent-centric gas refill prototype final!!!
