## MEM Ethereum authentication contract

A contract which resolves an Ethereum signature to its signer's wallet address. This contract demonstrates how MEM can be used with any wallet supported by [molecules](https://mem.tech/features/molecules). Since MEM contracts are walletless by default, this pattern makes it possible to require an Ethereum wallet for execution, and cryptographically verify the contract caller address.

## Signer Object structure
```json
    {
      {"caller":"0x197f818c1313dc58b32d88078ecdfb40ea822614","signature":"0xfb69a13dfec65b403838f6972fbdbdefdc87b3e0dff494ec1e27743d07ca52db601551d48710babad59d078ff57fdf0886e8847db30edf23f1998d9669e4f51d1c"}
    }
```
## Deploying and testing

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the contract and state into a new project and use the interaction objects below to test.

For mainnet, MEM contracts are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./contract.js --init-state '{ "results": [], "evm_molecule_endpoint": "http://evm.molecule.sh" }'```

To interact with MEM mainnet contracts while MEM is in beta, you must first get the contract whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).

## Read and write to the MEM contract

### Write Methods

To invoke `write` operations on the contract, you need to create a signature (sign data) of the contract's `message` property ("hello world") then encode it in base64. Use [this utility](https://etherscan.io/verifiedSignatures) to sign on Etherscan. Copy the base64-encoded signed message for the MEM interaction's `signature` input. In production, it would be the front end's job to automate this via a wallet the user connects.

Check out the [MEM docs](https://docs.mem.tech/) to learn more about [interacting with MEM contracts](https://docs.mem.tech/mem-api/write-operations).

#### Sign the MEM contract with Ethereum

##### MEM interaction object

```json
{
  "function": "register",
  "caller":"0x197f818c1313dc58b32d88078ecdfb40ea822614",
  "signature":"0xfb69a13dfec65b403838f6972fbdbdefdc87b3e0dff494ec1e27743d07ca52db601551d48710babad59d078ff57fdf0886e8847db30edf23f1998d9669e4f51d1c"
}
```

### Read Method

To read the contract state, you can simply `GET` is state using [MEM's REST API](https://docs.mem.tech/mem-api/read-operations).

