## MEM haiku generator

Calls an API to generate a random haiku, and saves it to state alongside a randomly-generated username.

## Haiku Object structure
```json
  {
    "user": "anon#380",
    "haiku": "astronomical have power when in with a their moral about"
  }
```
## Deploying and testing

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the function and state into a new project and use the interaction objects below to test.

For mainnet, MEM functions are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./function.js --init-state '{ "endpoint": "https://haiku.kremer.dev/?keyword=science", "haikus": [] }'```

To interact with MEM mainnet functions while MEM is in beta, you must first get the function whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).

## Read and write to the MEM function

### Write Methods

This function's only public function, `generate`, does not take any arguments. 

```json
{"function":"generate"}
```

Check out the [MEM docs](https://docs.mem.tech/) to learn more about [interacting with MEM functions](https://docs.mem.tech/mem-api/write-operations).

### Read Method

To read the function state, you can simply `GET` it using [MEM's REST API](https://docs.mem.tech/mem-api/read-operations).

### Interactive version

This function is hosted as an example on the [deterministicFetch() feature page](https://www.mem.tech/features/deterministic-fetch).
