## MEM guestbook

A simple contract any user can write messages to.

## Log Object structure
```json
    {
      "username": "MEM Enjoyooor",
      "data": "Hello, MEM" 
    }
```
## Deploying and testing

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the contract and state into a new project and use the interaction objects below to test.

For mainnet, MEM contracts are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./contract.js --init-state '{ "logs": [] }'```

To interact with MEM mainnet contracts while MEM is in beta, you must first get the contract whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).

## Read and write to the MEM contract

### Write Methods

Check out the [MEM docs](https://docs.mem.tech/) to learn more about [interacting with MEM contracts](https://docs.mem.tech/mem-api/write-operations).

#### Write a message to the logs

##### MEM interaction object
```json
    {
      "username": "MEM Enjoyooor",
      "data": "Hello, MEM" 
    }
```

### Read Method

To read the contract state, you can simply `GET` is state using [MEM's REST API](https://docs.mem.tech/mem-api/read-operations).

### UI integration

Refer to [the docs](https://docs.mem.tech/examples/simple-pastebin-clone#ui-writing-a-paste) for an example UI integration using the MEM API.
