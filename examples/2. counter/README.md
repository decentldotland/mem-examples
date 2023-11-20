## MEM counter

A simple counter example.

## Log Object structure
```json
    {
      "count": "22"
    }
```
## Deploying and testing

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the function and state into a new project and use the interaction objects below to test.

For mainnet, MEM functions are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./function.js --init-state '{ "count": 0 }'```

To interact with MEM mainnet functions while MEM is in beta, you must first get the function whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).

## Read and write to the MEM function

### Write Methods

Check out the [MEM docs](https://docs.mem.tech/) to learn more about [interacting with MEM functions](https://docs.mem.tech/mem-api/write-operations).

#### Write a change to the counter

##### MEM interaction object
```json
    {
      "function": "increment"
    }
```

### Read Method

To read the function state, you can simply `GET` is state using [MEM's REST API](https://docs.mem.tech/mem-api/read-operations).

### UI integration

Refer to [the docs](https://docs.mem.tech/examples/simple-pastebin-clone#ui-writing-a-paste) for an example UI integration using the MEM API.
