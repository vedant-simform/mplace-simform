/* eslint-disable no-undef */
const TimelessNFT = artifacts.require("TimelessNFT");

module.exports = async (deployer) => {
  const accounts = await web3.eth.getAccounts();

  await deployer.deploy(
    TimelessNFT,
    "Timeless NFTs",
    "TNT",
    10,
    "0x9b6391F135afF3bB7dF2F406fA3eC091D0242541"
  );
};
