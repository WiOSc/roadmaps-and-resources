# <img src="assets/icon-projects.svg" alt="" width="28" height="28" /> Projects

> Two small contracts while you learn. Then real repositories to read and run.

Stay on Sepolia, chain id `11155111`. The stage pages already contain the click-by-click exercises. This page only says what to build, and where to look after that.

## While you are on the path

### Notebook

The contract in [stage 6](06-first-contract.md).

Done when it is deployed on Sepolia and `note` shows your sentence on [Sepolia Etherscan](https://sepolia.etherscan.io/).

### Tip jar

The contract in [stage 7](07-tokens-and-apps.md).

Done when a second account has tipped, the `TipReceived` log is visible, and the owner has withdrawn.

## Read next: blockchain-projects

[blockchain-projects](https://github.com/0xPixelNinja/blockchain-projects) is a set of Solidity apps on Sepolia. Contracts are Foundry. The site is Next.js, wagmi, and viem. Start here after the tip jar, and after you have picked Foundry in [stage 8](08-where-next.md).

Read them in this order. Each one adds one idea the tip jar does not have.

| Order | Project | What it adds |
| --- | --- | --- |
| 1 | Charity Donation Tracker | Campaigns, deposits, and an owner withdraw. The closest cousin of the tip jar |
| 2 | Certificate Registry | Issuing a record and checking it later, with a file stored on IPFS |
| 3 | Voting System | A factory that deploys many polls, plus who is allowed to vote |
| 4 | LogiTrack | A shipment log: status updates and a history |
| 5 | LedgeLand Registry | Ownership that moves from one address to another |
| 6 | Token Factory | A contract that deploys ERC-20 tokens. Read it. Do not deploy a token for strangers on mainnet |

Clone the repo, run `forge test` inside `contracts/`, and connect the frontend only after the charity tests pass. Use a practice wallet and Sepolia ETH. The README in that repo has the deployed addresses.

Docs for each app live in that repository under `docs/`.

## Later: ShaderMesh

[ShaderMesh](https://github.com/0xPixelNinja/ShaderMesh) is a research prototype, not a beginner exercise. Ethereum holds escrow, provider collateral, settlement, and reputation. The GPU work, inference, and files stay off chain. Contracts are Hardhat, deployed and verified on Sepolia. A local stack runs with Docker Compose.

Read it when you can already follow `blockchain-projects`.

- Start with the README trust table: what is on chain, and what a provider does off chain
- Then open `RentalMarket` and `InferenceMarket` and find where funds sit before they are released
- Run `docker compose up` only if you already use Docker. The stack is a full app, not a Remix file

## Leave these for later

- A mainnet token sale
- A bridge or a pool that holds other people's funds
- A bot that signs from a hot wallet holding real ETH

[← Where to go next](08-where-next.md) · [Hub](README.md) · [Glossary →](glossary.md)
