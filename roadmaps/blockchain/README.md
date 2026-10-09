# <img src="assets/icon-start.svg" alt="" width="28" height="28" /> Blockchain Roadmap

<img src="assets/hero.svg" alt="Blockchain from zero. Three stages: shared history, your keys, and a first contract on a testnet." width="960" />

> A beginner path from "I have heard the word blockchain" to reading a real transaction and deploying a small contract on a test network.

You do not need to buy anything to finish this guide. You do not need a computer science degree. You need a browser, a notebook, and the patience to explain each idea in your own words before you open the next page.

This is a learning guide for builders. It is not investment advice, and it will not tell you what to buy.

Checked against official docs in October 2026. If a tutorial and an official doc disagree, trust the official doc. Tooling changes. The ideas below change more slowly.

## How to use these pages

1. Follow the stages in order. Each one uses the words from the page before it.
2. On each page, read the picture, do the exercise, then open the hidden check.
3. Tick the checklist at the bottom when that exercise is done.

## Who this is for

You are in the right place if you can use a browser and you want to understand how a public blockchain works before you trust one with money or code.

Programming starts in [stage 6](06-first-contract.md). Stages 1 to 5 are readable with no coding background. When code arrives, the guide uses [Solidity](https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html) in the browser, then points you to JavaScript only if you want a web page in front of the contract.

## Prerequisites

- A computer and a modern browser
- A notes file, paper or digital
- About 30 to 40 hours for the first full pass, split however you like
- Willingness to ignore price charts until the last page

Helpful later, and fine to learn alongside stage 6:

- Basic JavaScript: variables, functions, and objects. Mozilla's [JavaScript guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) is enough.
- Comfort with a terminal, only if you choose a local toolkit in [stage 8](08-where-next.md)

## The map

```mermaid
flowchart TD
  A["1 Foundations"] --> B["2 Keys and signatures"]
  B --> C["3 Bitcoin"]
  C --> D["4 Ethereum"]
  D --> E["5 Wallets and safety"]
  E --> F["6 First contract"]
  F --> G["7 Tokens and apps"]
  G --> H["8 Where to go next"]
```

Safety sits before code on purpose. A wallet is a key holder. You want the rules before the software asks you to save twelve words.

## Learning path

| | Stage | You will be able to | Guide time |
| --- | --- | --- | --- |
| <img src="assets/icon-blocks.svg" alt="" width="28" height="28" /> | [1. Foundations](01-foundations.md) | Explain a block, a hash link, and what a shared ledger is for | 3–4 hours |
| <img src="assets/icon-key.svg" alt="" width="28" height="28" /> | [2. Keys and signatures](02-keys-and-signatures.md) | Separate a seed phrase, a private key, a public key, and an address | 3 hours |
| <img src="assets/icon-bitcoin.svg" alt="" width="28" height="28" /> | [3. Bitcoin](03-bitcoin.md) | Read a Bitcoin transaction as coins moving between outputs | 4–6 hours |
| <img src="assets/icon-ethereum.svg" alt="" width="28" height="28" /> | [4. Ethereum](04-ethereum.md) | Describe accounts, gas, and a transaction's path into a block | 4–5 hours |
| <img src="assets/icon-shield.svg" alt="" width="28" height="28" /> | [5. Wallets and safety](05-wallets-and-safety.md) | Create a practice wallet and move test ETH without exposing a seed | 3 hours |
| <img src="assets/icon-contract.svg" alt="" width="28" height="28" /> | [6. First contract](06-first-contract.md) | Write, deploy, and read a storage contract on Sepolia | 5–8 hours |
| <img src="assets/icon-dapp.svg" alt="" width="28" height="28" /> | [7. Tokens and apps](07-tokens-and-apps.md) | Build a tip jar and explain what a token contract records | 6–10 hours |
| <img src="assets/icon-next.svg" alt="" width="28" height="28" /> | [8. Where to go next](08-where-next.md) | Choose one toolkit and a 30-day or 90-day practice plan | 2 hours, then months |

Companion pages:

| | Page | Use it when |
| --- | --- | --- |
| <img src="assets/icon-projects.svg" alt="" width="28" height="28" /> | [Projects](projects.md) | The two builds, then larger repos to read and run |
| <img src="assets/icon-glossary.svg" alt="" width="28" height="28" /> | [Glossary](glossary.md) | A word shows up and you want one calm definition |
| <img src="assets/icon-resources.svg" alt="" width="28" height="28" /> | [Resource library](resources.md) | You want the full link list in one place |

## Completion checklist

Tick a line when that stage's exercise is done. The hidden questions on each page are the quiz. This list is only the finish line.

- [ ] [Foundations](01-foundations.md): change a block in the demo and watch the next hash break
- [ ] [Keys](02-keys-and-signatures.md): write seed phrase, private key, public key, and address, and mark which one you can share
- [ ] [Bitcoin](03-bitcoin.md): open one live block and name an input and an output
- [ ] [Ethereum](04-ethereum.md): open one transaction and find the recipient and the amount
- [ ] [Wallet](05-wallets-and-safety.md): send Sepolia ETH between two of your own accounts
- [ ] [First contract](06-first-contract.md): deploy the notebook and read it on Sepolia Etherscan
- [ ] [Tip jar](07-tokens-and-apps.md): tip from a second account, then withdraw as the owner
- [ ] [Next](projects.md): read the charity project in [blockchain-projects](https://github.com/0xPixelNinja/blockchain-projects)

## Contributing

Found a stale link, a clearer picture, or a better beginner exercise?

See the repository [CONTRIBUTING.md](../../CONTRIBUTING.md). Add your name to the contributors table in the repository README when your pull request is ready.

[Start with foundations →](01-foundations.md)
