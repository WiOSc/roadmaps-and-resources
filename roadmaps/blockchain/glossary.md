# <img src="assets/icon-glossary.svg" alt="" width="28" height="28" /> Glossary

Short meanings for this guide. The long official list is the [Ethereum glossary](https://ethereum.org/glossary/).

| Term | Meaning |
| --- | --- |
| ABI | The description of a contract's functions. Wallets use it to build transaction data. The EVM runs bytecode, not the ABI. [Stage 6](06-first-contract.md) |
| Address | The short public name of an account. Safe to share. Derived from a public key. [Stage 2](02-keys-and-signatures.md) |
| Block | A batch of transactions, plus the hash of the previous block. [Stage 1](01-foundations.md) |
| Blockchain | A shared history of blocks. Many nodes store it. Consensus decides the next block. [Stage 1](01-foundations.md) |
| Bytecode | The compiled form of a contract. This is what a deploy transaction publishes. [Stage 6](06-first-contract.md) |
| Call | A read, or a message between contracts, that does not by itself get mined as your signed transaction. Reading `note` is a call. [Stage 6](06-first-contract.md) |
| Chain id | The number that identifies a network. Sepolia is `11155111`. [Stage 5](05-wallets-and-safety.md) |
| Confirmation | A later block built on top of the block that included your transaction. More confirmations mean a deeper history. [Stage 3](03-bitcoin.md) |
| Consensus | The rule nodes use to agree on the next block. Bitcoin uses proof of work. Ethereum uses proof of stake. [Stage 3](03-bitcoin.md), [Stage 4](04-ethereum.md) |
| Contract | An account that holds code and storage. People say "smart contract." [Stage 4](04-ethereum.md) |
| Dapp | A website or app that prepares transactions for a contract. The contract remains on the network if the website disappears. [Stage 7](07-tokens-and-apps.md) |
| EOA | Externally owned account. An account controlled by a private key, with no contract code. [Stage 4](04-ethereum.md) |
| ERC-20 | A standard interface for interchangeable token balances stored in a contract. [Stage 7](07-tokens-and-apps.md) |
| ERC-721 | A standard interface for unique token ids, the usual shape of an NFT. [Stage 7](07-tokens-and-apps.md) |
| ETH | Ether, the asset that pays for Ethereum computation and is transferred between accounts. [Stage 4](04-ethereum.md) |
| EVM | The Ethereum Virtual Machine. The shared computer that executes contract bytecode. Other chains that run the same bytecode are called EVM chains. [Stage 4](04-ethereum.md) |
| Event | A log written during a transaction. Explorers and apps search events because they are easier to filter than raw storage. [Stage 7](07-tokens-and-apps.md) |
| Faucet | A service that sends practice ETH on a testnet. It never needs a seed phrase. [Stage 5](05-wallets-and-safety.md) |
| Gas | The unit that meters EVM work. The fee is gas used, priced in ETH. [Stage 4](04-ethereum.md) |
| Hash | A short fingerprint of data. Same data, same hash. A small edit produces a different hash. [Stage 1](01-foundations.md) |
| L1 | Layer 1. The base chain. In this guide, Ethereum mainnet is the L1 that L2s anchor to. [Stage 8](08-where-next.md) |
| L2 | Layer 2. A network that processes transactions and posts results or proofs back to Ethereum. [Stage 8](08-where-next.md) |
| Mainnet | The Ethereum network where ETH has market value. Not the target of the projects in this guide. [Stage 4](04-ethereum.md) |
| Mempool | A node's waiting room for transactions that are signed and not yet in a block. [Stage 4](04-ethereum.md) |
| Node | A computer running a chain's software and checking blocks. [Stage 1](01-foundations.md) |
| Nonce | For an Ethereum account, a counter that orders outgoing transactions. It also stops a signed transaction from being replayed as a fresh one. [Stage 4](04-ethereum.md) |
| Private key | The secret number that creates signatures. Anyone who has it can spend. [Stage 2](02-keys-and-signatures.md) |
| Proof of stake | Ethereum's consensus: validators lock ETH and take turns proposing and voting on blocks. [Stage 4](04-ethereum.md) |
| Proof of work | Bitcoin's consensus: miners search for a block hash below a target. [Stage 3](03-bitcoin.md) |
| Public key | The number derived from the private key. Nodes use it to check signatures. [Stage 2](02-keys-and-signatures.md) |
| Rollup | An L2 that executes transactions away from L1 and anchors data or a proof on Ethereum. [Stage 8](08-where-next.md) |
| Seed phrase | A list of words that recreates a wallet's keys. Treat it as the master secret. [Stage 2](02-keys-and-signatures.md) |
| Sepolia | Ethereum's public testnet for application developers, chain id `11155111`. [Stage 5](05-wallets-and-safety.md) |
| Signature | Proof that the holder of a private key approved an exact message. It does not reveal the key. [Stage 2](02-keys-and-signatures.md) |
| Solidity | The language used in this guide to write contracts. [Stage 6](06-first-contract.md) |
| Testnet | A public rehearsal network. Practice ETH has no market price. The seed phrase is still a real secret. [Stage 5](05-wallets-and-safety.md) |
| Transaction | A signed request to change state: a transfer, a contract call, or a contract creation. [Stage 4](04-ethereum.md) |
| UTXO | Unspent transaction output. Bitcoin's way of recording spendable chunks of bitcoin. [Stage 3](03-bitcoin.md) |
| Validator | On Ethereum, a participant who proposes or attests to blocks under proof of stake. [Stage 4](04-ethereum.md) |
| Wallet | Software or hardware that stores keys, shows you what you are signing, and submits the signature. It does not "contain" the coins. [Stage 2](02-keys-and-signatures.md) |

[← Projects](projects.md) · [Hub](README.md) · [Resource library →](resources.md)
