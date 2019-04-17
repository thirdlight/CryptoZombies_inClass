const Migrations = artifacts.require("Migrations");
const ZombieFactory = artifacts.require("ZombieFactory")
const ZombieFeeding = artifacts.require("ZombieFeeding")

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ZombieFactory);
  deployer.deploy(ZombieFeeding);
};
