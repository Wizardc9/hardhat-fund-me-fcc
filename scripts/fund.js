const { ethers, getNamedAccounts } = require("hardhat")

async function main() {
    const deployer = (await getNamedAccounts()).deployer
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log(`Got constract FundMe at ${fundMe.address}`)
    console.log("Funding contract ...")
    const transactionResponse = await fundMe.fund({
        value: ethers.parseEther("0.1"),
    })
    await transactionResponse.wait(1)
    console.log("Funded!")
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
