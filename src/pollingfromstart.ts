import "dotenv/config";
import { Contract, JsonRpcProvider, formatUnits, id } from "ethers";

const provider = new JsonRpcProvider(process.env.MAINNET_RPC_URL);

// USDT Contract Details
const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const usdtAbi = ["function balanceOf(address owner) view returns (uint256)"];

// Address to monitor
const monitoredAddress = "0x587EFaEe4f308aB2795ca35A27Dff8c1dfAF9e3f";

// Create Contract Instance
const usdtContract = new Contract(usdtContractAddress, usdtAbi, provider);

// Function to Fetch Balance
async function fetchBalance() {
    try {
        const balance = await usdtContract.balanceOf(monitoredAddress);
        console.log(
            `USDT Balance of ${monitoredAddress}: ${formatUnits(
                balance,
                6
            )} USDT`
        );
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

// Polling Function
function startPolling(interval = 10000) {
    console.log(`Starting to poll USDT balance for ${monitoredAddress}`);
    setInterval(fetchBalance, interval);
}

// Start Polling
startPolling();

// Run below command:
// ts-node src/pollingfromstart.ts
