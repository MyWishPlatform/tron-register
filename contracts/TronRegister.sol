pragma solidity ^0.4.23;


contract TronRegister {
    event RegisterAdd(address indexed tronAddress);

    mapping(address => bool) private register;

    function put() external {
        address tronAddress = msg.sender;
        require(!register[tronAddress], "address already bound");
        register[tronAddress] = true;
        emit RegisterAdd(tronAddress);
    }

    function isRegistered(address _tronAddress) public view returns (bool) {
        return register[_tronAddress];
    }
}
