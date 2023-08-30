## MEM CRUD

A create, read, update and delete example to demonstrate how MEM could be used as the back end for a content publishing platform.

## Post Object structure
```json
  {
    "pid": "f1d44e8a-7dd3-1976-a294-bacf9685b950",
    "author": "0x0000000000000000000000000000000000000000",
    "title": "Title 1",
    "description": "Description 1",
    "content": "# My First Post",
    "categories": [
      "mem",
      "crud"
    ]
  }
```
## Deploying and testing

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the contract and state into a new project and use the interaction objects below to test.

For mainnet, MEM contracts are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./contract.js --init-state '{ "posts": [] }'```

To interact with MEM mainnet contracts while MEM is in beta, you must first get the contract whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).

## Read and write to the MEM contract

### Write Methods

Check out the [MEM docs](https://docs.mem.tech/) to learn more about [interacting with MEM contracts](https://docs.mem.tech/mem-api/write-operations).

If using the [IDE](https://mem.tech/ide), omit the `function` key-value pair in the objects below.

#### Create a post

##### MEM interaction object
```json
    {
      "function":"createPost",
      "data": {
        "author": "0x0000000000000000000000000000000000000000",
        "title": "Title 1",
        "description": "Description 1",
        "content": "# My First Post",
        "categories": [
          "mem",
          "crud"
        ]
      }
    }
```
#### Update a post

##### MEM interaction object
```json
    {
      "function":"updatePost",
      "pid": "f1d44e8a-7dd3-1976-a294-bacf9685b950",
      "data": {
        "author": "0x0000000000000000000000000000000000000000",
        "title": "My Edited Title" 
      }
    }
```

#### Remove a post

##### MEM interaction object
```json
    {
      "function": "removePost",
      "data": {
        "author": "0x0000000000000000000000000000000000000000",
        "pid": "f1d44e8a-7dd3-1976-a294-bacf9685b950"
      }
    }
```

### Read Method

To read the contract state, you can simply `GET` is state using [MEM's REST API](https://docs.mem.tech/mem-api/read-operations).

### UI integration

Refer to [the docs](https://docs.mem.tech/examples/simple-pastebin-clone#ui-writing-a-paste) for an example UI integration using the MEM API.
