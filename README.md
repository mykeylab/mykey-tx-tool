# mykey-tx-tool

EOS Transaction
```
➜  mykey-tx-tool git:(master) node ViewEosTx.js
action_traces
    mykeylogica1::sendexternal,{"data":"3015a45941933194000000572d3ccdcd3044c08952a6d45d273044c08952a6d45d80afda5ccd5eab49801d2c040
       mykeymanager::passaction,{"act":"mdfkeydata","bin_data":"3044c08952a6d45d0100000000000000000368eabcde23992b588a0cdeb98c2fb0e0
          mykeymanager::mdfkeydata,{"index":1,"new_key":{"nonce":224,"pubkey":"EOS7dSVXJTiD8QPYm4YAQyefQWMVeMXL5jCHeiYmPGrSv21oF8nNy","
       mykeymanager::forward,{"act":"transfer","data":"3044c08952a6d45d80afda5ccd5eab49801d2c0400000000044b4559000000000632383030
          mkstaketoken::transfer,{"from":"freegoods123","memo":"280056","quantity":"7000.0000 KEY","to":"dappxnewvers"}
          mkstaketoken::transfer,{"from":"freegoods123","memo":"280056","quantity":"7000.0000 KEY","to":"dappxnewvers"}
          mkstaketoken::transfer,{"from":"freegoods123","memo":"280056","quantity":"7000.0000 KEY","to":"dappxnewvers"}

```


ETH Transaction
```
➜  mykey-tx-tool git:(master) ✗ node ViewEthTx.js
tx 0x290d975cf6f041c3dafdee984ea45783ae135050065d144657fa2358e0d8368f
from:  0x6c55AB75C93384F36557E7585eC5d5FdcE699737
to:  0xC29349361e65f23F5d917A1B5922C03727deDB64
token: eth
amount:  0.01

tx 0xc0d445a1dbe4a59ca78a94a529c0212eeec8b8396ed92ab9b3b245225040d34e
from:  0x6c55AB75C93384F36557E7585eC5d5FdcE699737
to:  0xC29349361e65f23F5d917A1B5922C03727deDB64
token:  0x1914caA9F41468CCDFaA8fc72294A4A51a3bB379
amount:  10
```
