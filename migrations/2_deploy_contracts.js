const Contract = artifacts.require("./TronRegister.sol");

module.exports = function(deployer) {
  deployer.deploy(Contract);
};
