// https://bloks.io/transaction/a5608f18aa0485d0446b418656c388a9d352940e272a0f265253f7e2ba2619b8?tab=traces

global.fetch = require("node-fetch");
global.WebSocket = require("ws");

const { createDfuseClient } = require("@dfuse/client")
const client = createDfuseClient({ apiKey: "", network: "mainnet" })

function log(message) {
    console.log(
      ' '.repeat(new Error().stack.match(/\n/g).length) + message.account + "::" + message.name + "," + JSON.stringify(message.data).slice(0,100)
    );
}


function recurPrintActTraces(action, n) {
    log(action.act)

    let in_acts = action.inline_traces
    if(in_acts){
        in_acts.forEach(a => {
            recurPrintActTraces(a)
        });
        
    }
}

async function main() {
    const eosTxId = 'a5608f18aa0485d0446b418656c388a9d352940e272a0f265253f7e2ba2619b8'
    const response = await client.apiRequest("/v0/transactions/" + eosTxId, "GET")


    action_traces = response.execution_trace.action_traces

    console.log("action_traces")
    recurPrintActTraces(action_traces[0])
    
}

main().then(() => {
    client.release()
}).catch((error) => {
    console.log("An error occurred", error)
    process.exit(1)
})


