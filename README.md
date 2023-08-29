# MEM examples

Molecular Execution Machine is a web3-ready serverless functions platform. Build and deploy trustless dApps in record time ⚡️

## MEM features

- Near-instant finality
- Multichain auth - EVM, Solana, Arweave, TON, ICP, and more
- Multilingual - JS/TS, Rust, C/++, Python, WASM-compiled languages
- Trustless and verifiable
- REST-like: interact with MEM like an API
- Web2 UX with walletless contract interactions
- Call and compute with any data source, on of off-chain

## Examples list

1. [Guestbook](https://github.com/decentldotland/mem-examples/tree/main/examples/1.%20guestbook)
2. [Counter](https://github.com/decentldotland/mem-examples/tree/main/examples/2.%counter)
3. [Ethereum authentication](https://github.com/decentldotland/mem-examples/tree/main/examples/3.%20ethereum%20authentication)
4. [Haiku generator](https://github.com/decentldotland/mem-examples/tree/main/examples/4.%20haiku%20generator)
5. [Social metadata (Linktree clone)](https://github.com/decentldotland/mem-examples/tree/main/examples/5.%20social%20metadata)

## Run the examples

### MEM IDE (recommended)

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the contract and state into a new project and use the interaction objects in each example's README to test.

### Local testnet

The [mem-testnet](https://github.com/decentldotland/mem-testnet) repo provides instructions on how to simulate MEM contracts locally. Paste contract code and state into the script and write your test cases. 

### Mainnet (permissioned in beta)

For mainnet, MEM contracts are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./contract.js --init-state '{ "logs": [] }'```

To interact with MEM mainnet contracts while MEM is in beta, you must first get the contract whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).
