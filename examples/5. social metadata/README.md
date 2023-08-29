## MEM social metadata layer

A generic composable contract layer for metadata like bio, profile picture, social links and website address. 👥

With this example, metadata can be attached to any Arweave address, and pulled into any dApp that uses Arweave identity.

## Profile Object structure
```json
    {
      "address": "vZY2XY1RD9HIfWi8ift-1_DnHLDadZMWrufSh-_rKF0",
      "nickname": "darwin",
      "bio": "i do codes",
      "avatar": "Db1tw8vBVBwXalQL2qrqHI-ikxpzACQvDAC6p5GgMf4",
      "banner": "",
      "websites": ["https://decent.land", "https://ans.gg"],
      "socials": [
        { "platform": "github", "url": "https://github.com/charmful0x" }
      ]
    }
```
## Deploying and testing

While MEM is in beta, we recommend using the [online MEM IDE](https://mem.tech/ide) to test and expand upon these examples -- no need to deploy! Copy the contract and state into a new project and use the interaction objects below to test.

For mainnet, MEM contracts are deployed via the [MEM CLI](https://docs.mem.tech/mem-cli/function-deployment).

For example:

```mem deploy --src ./contract.js --init-state '{ "profiles": [], "sig_message": "so-ans-profile-metadata", "admin": "vZY2XY1RD9HIfWi8ift-1_DnHLDadZMWrufSh-_rKF0", "ar_molecule": "https://molecules-exm.herokuapp.com/ar-ota", "signatures": [], "supported_socials": ["twitter", "github", "telegram", "instagram", "discord"] }'```

(In your deployment, swap the `admin` wallet with an Arweave wallet address you control.)

To interact with MEM mainnet contracts while MEM is in beta, you must first get the contract whitelisted via [this form](https://docs.google.com/forms/u/1/d/e/1FAIpQLSfRB95cZzGyy3IRmsMwjHx7gweywmybptBU0XbUb2GZumwaKA/viewform?usp=send_form).

## Read and write to the MEM contract

### Write Methods

To invoke `write` operations on the contract, you need to create a signature (sign data) of the contract's `sig_message` property then encode it in base64.

`jwk_n` is your wallet's public key used to create the signture. Check out the [MEM docs](https://docs.mem.tech/) to learn more about [interacting with MEM contracts](https://docs.mem.tech/mem-api/write-operations).

#### Create a new profile or update and existing one

##### MEM interaction object

```json
{
  "function": "updateWalletMetadata",
  "nickname": "darwin_new",
  "bio": "my new bio",
  "websites": ["https://ark.decent.land"],
  "jwk_n": "xGx07uNnjitWsOSfKZC-ic74oXs9qDXU5QOsAis4V3tXk0krk5zUlGYu7SlZ-4xfNVA1QsHa_pOvlgE-0xGKJvMZRZYzlYcBDsnDJgLYQc5D2B2Ng4HQjLON-Gqsxl25Uj7-VSEeUgk5b2Q4SrAoVTKLWKEtuGDqwy5qKKCvNHYShYJHbmAsjQzwCwvfn2bqKv_zFUD4QeukihfDJbVyZaiev7GoE1NzTsqJ_V_eZ9tKV_5YVy-ZVU8a9dEeTnGJm2rT6z9aCcQwd9EqVYi7h8QCbKOn2r5K2NbD6V8xjQGHvODHMO0iHk2hLzcLbfDfyn_Ej-xZsHU6LBJCTeDBy_5kWtOVlYL_RH34UA1j_IYEMVDYnQBKo5laassByvkn7nODZiXesvw6TsXPYdrqrgIL7x4Td5QVK8UHXCGXOrtAlhxfzNWyjP0z5ezAsQpzGPgGI9OKgjmPIk4K6K88BoxNmJ_XFPV1DN8qZGsPSVz2N7XN9wFetDs4CMOGyDToTDEea77TsP1ykKMcXf2h-JCZlvzFEpxS_zMaRMcwV502zXN01oCR2QpUEISf_IzxQYXsjR_F75VPpUvfmDtPYf4ftQN1cZYiH68zxn74uO7DLqIa3nUXq_IrUP7SmEnbMgjzjElp0a_u62XtmgT3GQv7SBrQdzym3yhhM-3kcok",
  "sig": "Mm1ZkTUJYsRG/YIXY2o64ndkjSX35N/yE08yG2zxejEvTRLlLOp6XG8gVhnyPUUQky2Q1wpeHfhZpQ77REVg9QcZHAFWPvzpF2MC82ItfWk8NrbQzBwSdhdV1G8tq0JROdlVHZakN4+3ikOGOT309Z5kESTbEXiqOBEoU9Cg4IcX+SFB+Pu8SNO2LSF47x/4IUrbaXIZKygMqPT1zObTfQLe3SdVIyEfq5dB4YQ7vf7VjLg5D7bhgYH1g5KAxN3sR2n2DYajDixNWjVsLVevfMPlUJ4VNF1phP6f2u83Z/PQ2e5At2Dj/ZhtNbgMFu+YG8QMW48frQ6PdtcRCMGjyh7FwizOUdih9h0xEFgtQCriolHu824Ug0FfFEmBbt9WWEeEAZgiF8QDrTaSGnTuOFZxsZKkwH4oxRm7/WFEQOD3c2+hNA052MJS95eF2CadnMiVUdugJwBCwXzd1RvzgBmzL5QzsSzCrl9Wth5pGM97bOvx3QN+kovy+WQ4HW4AaNm4GnGwt00kxTND36+pUcOYz4CYBFL2w4fsQsLMBdbxelR3C02CcRAgAa+5XdG5uQxO9M1dtiiZZIL4utWChWiVDmRonimyGYZOc9lzZhZLLjC+O1lOUtwub/EjaNl5ib7kxeNuaYUOp/l1avNNP1Nvp9eH6oeXd4wLuNBn4YQ="
}

```

#### Remove a `socials` property from your profile

##### MEM interaction object

```json
{
  "function": "removeSoWebArrayValue",
  "type": "socials",
  "key": "github", // === platform @ updateWalletMetadata.socials
  "value": "https://github.com/charmful0x", // === url @ updateWalletMetadata.socials
  "jwk_n": "xGx07uNnjitWsOSfKZC-ic74oXs9qDXU5QOsAis4V3tXk0krk5zUlGYu7SlZ-4xfNVA1QsHa_pOvlgE-0xGKJvMZRZYzlYcBDsnDJgLYQc5D2B2Ng4HQjLON-Gqsxl25Uj7-VSEeUgk5b2Q4SrAoVTKLWKEtuGDqwy5qKKCvNHYShYJHbmAsjQzwCwvfn2bqKv_zFUD4QeukihfDJbVyZaiev7GoE1NzTsqJ_V_eZ9tKV_5YVy-ZVU8a9dEeTnGJm2rT6z9aCcQwd9EqVYi7h8QCbKOn2r5K2NbD6V8xjQGHvODHMO0iHk2hLzcLbfDfyn_Ej-xZsHU6LBJCTeDBy_5kWtOVlYL_RH34UA1j_IYEMVDYnQBKo5laassByvkn7nODZiXesvw6TsXPYdrqrgIL7x4Td5QVK8UHXCGXOrtAlhxfzNWyjP0z5ezAsQpzGPgGI9OKgjmPIk4K6K88BoxNmJ_XFPV1DN8qZGsPSVz2N7XN9wFetDs4CMOGyDToTDEea77TsP1ykKMcXf2h-JCZlvzFEpxS_zMaRMcwV502zXN01oCR2QpUEISf_IzxQYXsjR_F75VPpUvfmDtPYf4ftQN1cZYiH68zxn74uO7DLqIa3nUXq_IrUP7SmEnbMgjzjElp0a_u62XtmgT3GQv7SBrQdzym3yhhM-3kcok",
  "sig": "Mm1ZkTUJYsRG/YIXY2o64ndkjSX35N/yE08yG2zxejEvTRLlLOp6XG8gVhnyPUUQky2Q1wpeHfhZpQ77REVg9QcZHAFWPvzpF2MC82ItfWk8NrbQzBwSdhdV1G8tq0JROdlVHZakN4+3ikOGOT309Z5kESTbEXiqOBEoU9Cg4IcX+SFB+Pu8SNO2LSF47x/4IUrbaXIZKygMqPT1zObTfQLe3SdVIyEfq5dB4YQ7vf7VjLg5D7bhgYH1g5KAxN3sR2n2DYajDixNWjVsLVevfMPlUJ4VNF1phP6f2u83Z/PQ2e5At2Dj/ZhtNbgMFu+YG8QMW48frQ6PdtcRCMGjyh7FwizOUdih9h0xEFgtQCriolHu824Ug0FfFEmBbt9WWEeEAZgiF8QDrTaSGnTuOFZxsZKkwH4oxRm7/WFEQOD3c2+hNA052MJS95eF2CadnMiVUdugJwBCwXzd1RvzgBmzL5QzsSzCrl9Wth5pGM97bOvx3QN+kovy+WQ4HW4AaNm4GnGwt00kxTND36+pUcOYz4CYBFL2w4fsQsLMBdbxelR3C02CcRAgAa+5XdG5uQxO9M1dtiiZZIL4utWChWiVDmRonimyGYZOc9lzZhZLLjC+O1lOUtwub/EjaNl5ib7kxeNuaYUOp/l1avNNP1Nvp9eH6oeXd4wLuNBn4YQ="
}

```

#### Remove a `websites` array element from your profile

##### MEM interaction object

```json
{
  "function": "removeSoWebArrayValue",
  "type": "websites",
  // key: "github", // not required
  "value": "https://decent.land", // from the websites array @ updateWalletMetadata
  "jwk_n": "xGx07uNnjitWsOSfKZC-ic74oXs9qDXU5QOsAis4V3tXk0krk5zUlGYu7SlZ-4xfNVA1QsHa_pOvlgE-0xGKJvMZRZYzlYcBDsnDJgLYQc5D2B2Ng4HQjLON-Gqsxl25Uj7-VSEeUgk5b2Q4SrAoVTKLWKEtuGDqwy5qKKCvNHYShYJHbmAsjQzwCwvfn2bqKv_zFUD4QeukihfDJbVyZaiev7GoE1NzTsqJ_V_eZ9tKV_5YVy-ZVU8a9dEeTnGJm2rT6z9aCcQwd9EqVYi7h8QCbKOn2r5K2NbD6V8xjQGHvODHMO0iHk2hLzcLbfDfyn_Ej-xZsHU6LBJCTeDBy_5kWtOVlYL_RH34UA1j_IYEMVDYnQBKo5laassByvkn7nODZiXesvw6TsXPYdrqrgIL7x4Td5QVK8UHXCGXOrtAlhxfzNWyjP0z5ezAsQpzGPgGI9OKgjmPIk4K6K88BoxNmJ_XFPV1DN8qZGsPSVz2N7XN9wFetDs4CMOGyDToTDEea77TsP1ykKMcXf2h-JCZlvzFEpxS_zMaRMcwV502zXN01oCR2QpUEISf_IzxQYXsjR_F75VPpUvfmDtPYf4ftQN1cZYiH68zxn74uO7DLqIa3nUXq_IrUP7SmEnbMgjzjElp0a_u62XtmgT3GQv7SBrQdzym3yhhM-3kcok",
  "sig": "Mm1ZkTUJYsRG/YIXY2o64ndkjSX35N/yE08yG2zxejEvTRLlLOp6XG8gVhnyPUUQky2Q1wpeHfhZpQ77REVg9QcZHAFWPvzpF2MC82ItfWk8NrbQzBwSdhdV1G8tq0JROdlVHZakN4+3ikOGOT309Z5kESTbEXiqOBEoU9Cg4IcX+SFB+Pu8SNO2LSF47x/4IUrbaXIZKygMqPT1zObTfQLe3SdVIyEfq5dB4YQ7vf7VjLg5D7bhgYH1g5KAxN3sR2n2DYajDixNWjVsLVevfMPlUJ4VNF1phP6f2u83Z/PQ2e5At2Dj/ZhtNbgMFu+YG8QMW48frQ6PdtcRCMGjyh7FwizOUdih9h0xEFgtQCriolHu824Ug0FfFEmBbt9WWEeEAZgiF8QDrTaSGnTuOFZxsZKkwH4oxRm7/WFEQOD3c2+hNA052MJS95eF2CadnMiVUdugJwBCwXzd1RvzgBmzL5QzsSzCrl9Wth5pGM97bOvx3QN+kovy+WQ4HW4AaNm4GnGwt00kxTND36+pUcOYz4CYBFL2w4fsQsLMBdbxelR3C02CcRAgAa+5XdG5uQxO9M1dtiiZZIL4utWChWiVDmRonimyGYZOc9lzZhZLLjC+O1lOUtwub/EjaNl5ib7kxeNuaYUOp/l1avNNP1Nvp9eH6oeXd4wLuNBn4YQ="
}


```

#### Follow or unfollow a PASoM wallet address

##### MEM interaction object

```js
const action = "follow" || "unfollow";
const address = "...";

const inputs = {
  function: action,
  address: address,
  jwk_n:
    "xGx07uNnjitWsOSfKZC-ic74oXs9qDXU5QOsAis4V3tXk0krk5zUlGYu7SlZ-4xfNVA1QsHa_pOvlgE-0xGKJvMZRZYzlYcBDsnDJgLYQc5D2B2Ng4HQjLON-Gqsxl25Uj7-VSEeUgk5b2Q4SrAoVTKLWKEtuGDqwy5qKKCvNHYShYJHbmAsjQzwCwvfn2bqKv_zFUD4QeukihfDJbVyZaiev7GoE1NzTsqJ_V_eZ9tKV_5YVy-ZVU8a9dEeTnGJm2rT6z9aCcQwd9EqVYi7h8QCbKOn2r5K2NbD6V8xjQGHvODHMO0iHk2hLzcLbfDfyn_Ej-xZsHU6LBJCTeDBy_5kWtOVlYL_RH34UA1j_IYEMVDYnQBKo5laassByvkn7nODZiXesvw6TsXPYdrqrgIL7x4Td5QVK8UHXCGXOrtAlhxfzNWyjP0z5ezAsQpzGPgGI9OKgjmPIk4K6K88BoxNmJ_XFPV1DN8qZGsPSVz2N7XN9wFetDs4CMOGyDToTDEea77TsP1ykKMcXf2h-JCZlvzFEpxS_zMaRMcwV502zXN01oCR2QpUEISf_IzxQYXsjR_F75VPpUvfmDtPYf4ftQN1cZYiH68zxn74uO7DLqIa3nUXq_IrUP7SmEnbMgjzjElp0a_u62XtmgT3GQv7SBrQdzym3yhhM-3kcok",
  sig: "Mm1ZkTUJYsRG/YIXY2o64ndkjSX35N/yE08yG2zxejEvTRLlLOp6XG8gVhnyPUUQky2Q1wpeHfhZpQ77REVg9QcZHAFWPvzpF2MC82ItfWk8NrbQzBwSdhdV1G8tq0JROdlVHZakN4+3ikOGOT309Z5kESTbEXiqOBEoU9Cg4IcX+SFB+Pu8SNO2LSF47x/4IUrbaXIZKygMqPT1zObTfQLe3SdVIyEfq5dB4YQ7vf7VjLg5D7bhgYH1g5KAxN3sR2n2DYajDixNWjVsLVevfMPlUJ4VNF1phP6f2u83Z/PQ2e5At2Dj/ZhtNbgMFu+YG8QMW48frQ6PdtcRCMGjyh7FwizOUdih9h0xEFgtQCriolHu824Ug0FfFEmBbt9WWEeEAZgiF8QDrTaSGnTuOFZxsZKkwH4oxRm7/WFEQOD3c2+hNA052MJS95eF2CadnMiVUdugJwBCwXzd1RvzgBmzL5QzsSzCrl9Wth5pGM97bOvx3QN+kovy+WQ4HW4AaNm4GnGwt00kxTND36+pUcOYz4CYBFL2w4fsQsLMBdbxelR3C02CcRAgAa+5XdG5uQxO9M1dtiiZZIL4utWChWiVDmRonimyGYZOc9lzZhZLLjC+O1lOUtwub/EjaNl5ib7kxeNuaYUOp/l1avNNP1Nvp9eH6oeXd4wLuNBn4YQ=",
};

```

### Read Method

To read the contract state, you can simply `GET` is state using [MEM's REST API](https://docs.mem.tech/mem-api/read-operations).

