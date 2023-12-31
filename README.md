<p align="center">
  <a href="https://decent.land">
    <img src="https://mem-home.vercel.app/icons/mem/mem-logo-v2.svg" height="180">
  </a>
  <h3 align="center"><code>@decentldotland/mem-examples</code></h3>
</p>

# MEM examples

[Molecular Execution Machine](https://mem.tech) is a web3-ready serverless functions platform. Build and deploy trustless dApps in record time ⚡️

## MEM features

- Near-instant finality
- Multichain auth - EVM, Solana, Arweave, TON, ICP, and more
- Multilingual - JS/TS, Rust, C/++, Python, WASM-compiled languages
- Trustless and verifiable
- REST-like: interact with MEM like an API
- Web2 UX with walletless function interactions
- Call and compute with any data source, on of off-chain

## Examples list

1. [Guestbook](https://github.com/decentldotland/mem-examples/tree/main/examples/1.%20guestbook)
2. [Counter](https://github.com/decentldotland/mem-examples/tree/main/examples/2.%20counter)
3. [Ethereum authentication](https://github.com/decentldotland/mem-examples/tree/main/examples/3.%20ethereum%20authentication)
4. [Haiku generator](https://github.com/decentldotland/mem-examples/tree/main/examples/4.%20haiku%20generator)
5. [CRUD](https://github.com/decentldotland/mem-examples/tree/main/examples/5.%20CRUD)

## Run the examples

### MEM IDE (recommended)

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the function and state into a new project and use the interaction objects in each example's README to test.

### Local testnet

The [mem-testnet](https://github.com/decentldotland/mem-testnet) repo provides instructions on how to simulate MEM functions locally. Paste function code and state into the script and write your test cases. 

### Mainnet (permissioned in beta)

For mainnet, MEM functions are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./function.js --init-state '{ "logs": [] }'```

To interact with MEM mainnet functions while MEM is in beta, you must first get the function whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).
