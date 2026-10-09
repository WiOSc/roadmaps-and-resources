# <img src="assets/icon-resources.svg" alt="" width="28" height="28" /> Resource library

The links behind the roadmap, grouped by the job they do. Prefer one official page over three blog posts that retell it. All of the core links were checked in October 2026. Faucets and course outlines still move. If a link rots, the [networks page](https://ethereum.org/developers/docs/networks/) and the [developer hub](https://ethereum.org/developers/) are the stable doors.

This list prefers free docs, free courses, and primary sources. It skips paid bootcamps, affiliate roundups, and the 2022 long video courses whose install steps no longer match current Solidity.

## Start here

| Resource | Use it for | When |
| --- | --- | --- |
| [What is Ethereum?](https://ethereum.org/what-is-ethereum/) | A clean overview of the network you will build on | [Stage 1](01-foundations.md) and [stage 4](04-ethereum.md) |
| [ethereum.org Learn](https://ethereum.org/learn/) | The official education index, including quizzes and guides | Any time you want a second explanation |
| [Blockchain Basics](https://updraft.cyfrin.io/courses/blockchain-basics) | A free video course, about 6 hours, friendly to non-developers | Beside stages 1, 2, and 4 |
| [Blockchain demo](https://andersbrownworth.com/blockchain/blockchain) | Click a hash and break a chain on purpose | [Stage 1](01-foundations.md) exercise |
| [But how does bitcoin actually work?](https://www.youtube.com/watch?v=bBC-nXj3Ng4) | One careful visual story of hashes, signatures, and blocks | After stage 1, again after stage 3 |
| [Quizzes](https://ethereum.org/quizzes/) | A score, if you want one, after you can already explain the idea | End of stage 4 |

## Bitcoin

| Resource | Use it for | When |
| --- | --- | --- |
| [How bitcoin works](https://bitcoin.org/en/how-it-works) | The short official picture | [Stage 3](03-bitcoin.md) |
| [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf) | The original design, abstract through the transactions section | First pass, then a second pass later |
| [Annotated whitepaper](https://nakamotoinstitute.org/library/bitcoin/) | The same text with more room to read | If the PDF feels cramped |
| [mempool.space](https://mempool.space/) | Live blocks, transactions, and fees | Stage 3 exercise |
| [Bitcoin developer guide: block chain](https://developer.bitcoin.org/devguide/block_chain.html) | A deeper pass on blocks | After the explorer visit |
| [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook) | The free book on transactions, scripts, and blocks | When the stage 3 page feels too short |

## Ethereum concepts

| Resource | Use it for | When |
| --- | --- | --- |
| [Intro to Ethereum](https://ethereum.org/developers/docs/intro-to-ethereum/) | The developer-facing overview | Stage 4 |
| [Accounts](https://ethereum.org/developers/docs/accounts/) | Keys, addresses, and the two account types | Stages 2 and 4 |
| [Transactions](https://ethereum.org/developers/docs/transactions/) | Nonce, to, value, data, signature | Stage 4 |
| [Blocks](https://ethereum.org/developers/docs/blocks/) | What a produced block contains | Stage 4 |
| [What is ether?](https://ethereum.org/what-is-ether/) | What ETH is for | Stage 4 |
| [Gas](https://ethereum.org/gas/) | The plain-language fee page | Stage 4 |
| [Gas and fees](https://ethereum.org/developers/docs/gas/) | The developer detail behind that page | When a fee confuses you |
| [Proof of stake](https://ethereum.org/developers/docs/consensus-mechanisms/pos/) | How Ethereum picks the next block now | Stage 4 |
| [Networks](https://ethereum.org/developers/docs/networks/) | Mainnet, Sepolia, Hoodi, and faucet pointers | Stages 4 and 5 |
| [Ethereum whitepaper](https://ethereum.org/whitepaper/) | The 2013 design argument | Optional, after stage 4 |
| [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) | A free book on accounts, transactions, and contracts | Useful, and partly historical. Proof-of-work chapters describe Ethereum before the 2022 Merge |
| [Ethereum roadmap](https://ethereum.org/roadmap/) | What protocol developers are changing | [Stage 8](08-where-next.md), one calm read |
| [Glossary](https://ethereum.org/glossary/) | The long official word list | Whenever this folder's glossary is too short |

## Wallets and safety

| Resource | Use it for | When |
| --- | --- | --- |
| [Start with Ethereum](https://ethereum.org/start/) | First steps as a user | Before you install anything |
| [Wallets](https://ethereum.org/wallets/) | What a wallet does | Stage 2 and stage 5 |
| [Find a wallet](https://ethereum.org/wallets/find-wallet/) | A catalog if you do not want the MetaMask default | Stage 5 |
| [MetaMask download](https://metamask.io/download) | The publisher's install page | Stage 5. Bookmark it. Ignore ads |
| [Security and scam prevention](https://ethereum.org/security/) | Seed phrases, fake support, and signing habits | Before the first faucet |
| [Sepolia on Chainlist](https://chainlist.org/chain/11155111) | Add Sepolia only if the wallet does not already know it. Check chain id `11155111` | Stage 5 |
| [Sepolia Etherscan](https://sepolia.etherscan.io/) | Your practice transactions and contracts | Stages 5 to 7 |
| [Alchemy Sepolia faucet](https://www.alchemy.com/faucets/ethereum-sepolia) | Practice ETH | Stage 5. A faucet may ask for an address. It must not ask for a seed |
| [Google Cloud Sepolia faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) | A second faucet when the first is empty | Stage 5 |

## Contracts and Solidity

| Resource | Use it for | When |
| --- | --- | --- |
| [Smart contracts](https://ethereum.org/smart-contracts/) | A non-technical introduction | Stage 7, or the end of stage 4 |
| [Smart contract docs](https://ethereum.org/developers/docs/smart-contracts/) | How contracts actually run | Stage 6 |
| [Hello World smart contract](https://ethereum.org/developers/tutorials/hello-world-smart-contract/) | The official first deploy | Beside stage 6 |
| [Remix](https://remix.ethereum.org/) | Compile and deploy in the browser | Stages 6 and 7 |
| [Solidity docs](https://docs.soliditylang.org/en/latest/) | The language reference | Keep this open while you write |
| [Intro to smart contracts](https://docs.soliditylang.org/en/latest/introduction-to-smart-contracts.html) | The Solidity team's own overview | Stage 6 |
| [Cyfrin Solidity course](https://updraft.cyfrin.io/courses/solidity) | The free course to take after your first deploy | Stage 6 onward |
| [Solidity by Example](https://solidity-by-example.org/) | Short snippets once you know what you are looking up | After the course, not instead of it |
| [CryptoZombies](https://cryptozombies.io/) | A game-shaped second pass | Optional. Trust current compiler docs if a lesson looks old |
| [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/5.x/) | Reviewed implementations of tokens and access control | Stage 7, read before you invent a token |
| [OpenZeppelin Wizard](https://wizard.openzeppelin.com/) | Generated drafts you should be able to explain | Later, not on day one |
| [EIP-20](https://eips.ethereum.org/EIPS/eip-20) | The token standard, primary source | Stage 7 |
| [EIP-721](https://eips.ethereum.org/EIPS/eip-721) | The non-fungible token standard | Stage 7 |
| [ERC-20 docs](https://ethereum.org/developers/docs/standards/tokens/erc-20/) | A shorter reading than the EIP | Stage 7 |
| [ERC-721 docs](https://ethereum.org/developers/docs/standards/tokens/erc-721/) | The matching NFT page | Stage 7 |
| [WETH on Etherscan](https://etherscan.io/token/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2) | A famous ERC-20 to read. Do not send a mainnet transaction from that page | Stage 7 |

## Apps, tools, and other networks

| Resource | Use it for | When |
| --- | --- | --- |
| [Ethereum stack](https://ethereum.org/developers/docs/ethereum-stack/) | Where the website, wallet, node, and contract sit | Stage 7 |
| [JavaScript](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting) | The language of most dapp frontends | Before you build the status page |
| [viem](https://viem.sh/) | A modern JavaScript library for reads and wallet calls | Intermediate projects |
| [ethers v6](https://docs.ethers.org/v6/) | The other common JavaScript library | When a tutorial uses it |
| [Hardhat tutorial](https://hardhat.org/tutorial) | A JavaScript local environment | The app-first path in stage 8 |
| [Hardhat docs](https://hardhat.org/docs) | Reference once the tutorial is familiar | As needed |
| [Foundry book](https://book.getfoundry.sh/) | A Solidity-native local environment | The Solidity-first path in stage 8 |
| [Cyfrin Foundry course](https://updraft.cyfrin.io/courses/foundry) | Foundry taught as a course | After the Solidity course |
| [Alchemy University](https://www.alchemy.com/university) | A free bootcamp-style path into apps | The app-first path |
| [Speedrun Ethereum](https://speedrunethereum.com/) | Small product challenges with a frontend | After one framework feels familiar |
| [Developer hub](https://ethereum.org/developers/) | The index of official build docs | Whenever you are choosing a tool |
| [Layer 2](https://ethereum.org/layer-2/) | What an L2 is | Stage 8, after Sepolia feels dull |
| [L2BEAT](https://l2beat.com/scaling/summary) | How specific L2s are built and what risks they publish | Before you trust an L2 with anything you care about |
| [Bridges](https://ethereum.org/bridges/) | How assets move between networks, and why that is delicate | Read only, until you have a reason |
| [DeFi](https://ethereum.org/defi/), [NFTs](https://ethereum.org/nft/), [DAOs](https://ethereum.org/dao/) | Maps of use, not assignments | When you want context |
| [Web3](https://ethereum.org/web3/) | The word, defined by ethereum.org | When a job post uses it and you want the sober meaning |

## Security, after you can read your own code

| Resource | Use it for | When |
| --- | --- | --- |
| [Smart contract security](https://ethereum.org/developers/docs/smart-contracts/security/) | The official overview and its links | The day the tip jar works |
| [Consensys best practices](https://consensysdiligence.github.io/smart-contract-best-practices/) | A checklist used by working developers | Stage 8 |
| [Ethernaut](https://ethernaut.openzeppelin.com/) | Small contracts with a flaw you are allowed to study | After stage 7 |
| [Building Secure Contracts](https://github.com/crytic/building-secure-contracts) | Trail of Bits' guides and checklists | When you want a professional bar |
| [Damn Vulnerable DeFi](https://www.damnvulnerabledefi.xyz/) | Harder labs about composed finance contracts | Much later |
| [Cyfrin Updraft catalog](https://updraft.cyfrin.io/courses) | The same school as the beginner course, including the later security courses | After Solidity feels readable |

Practice on Ethernaut and on your own testnet code. Testing those ideas against a contract someone else relies on is not a learning project.

## If a tutorial fights a doc

Trust, in this order:

1. The protocol docs on [ethereum.org/developers/docs](https://ethereum.org/developers/docs/)
2. The language docs on [docs.soliditylang.org](https://docs.soliditylang.org/en/latest/)
3. The framework book, Foundry or Hardhat, for that tool's commands
4. A dated blog post or video

A course recorded against an old compiler can still teach the idea of storage. Its install commands and its "miners" may be leftovers. When that happens, keep the idea and take the commands from the current doc.

[← Glossary](glossary.md) · [Hub](README.md)
