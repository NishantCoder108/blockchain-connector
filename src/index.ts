import "dotenv/config";
import { JsonRpcProvider, id } from "ethers";

const provider = new JsonRpcProvider(process.env.RPC_URL);

console.log("provider test ", { provider });
async function pollBlock(blockNumber: number) {
    const logs = await provider.getLogs({
        address: "0x98663ee9dbc23e5921ec9455d3be21bf821489c2", //contract address
        fromBlock: blockNumber,
        toBlock: blockNumber + 2,
        // topics: [id("Transfer(address,address,uint256)")],
    });

    console.log("logs", logs);
}

pollBlock(7290801); //block number

console.log("testing");
