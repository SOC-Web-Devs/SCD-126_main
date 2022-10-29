// // SPDX-License-Identifier: Unlicensed

// import './';

// contract CrowdfundingProject {
//     //defining state variables  
//     string public projTitle;
//     string public projDescription;
//     uint256 public goalAmount;
//     uint256 public raisedAmount;
//     address ownerWallet;
    
//     mapping(address => mapping(uint256 => uint256)) userDonations;
//     mapping(uint256 => mapping(address => uint256)) projectDonations;


//     event Funded(
//         address indexed donar,
//         uint256 indexed amount,
//         uint256 indexed timestamp
//     );
 
//     constructor(
//         string memory projectTitle,
//         uint256 projgoalAmount,
//         string memory projDescript,
//         address ownerWallet_
//     ) {
//         projTitle = projectTitle;
//         goalAmount = projgoalAmount;
//         projDescription = projDescript;
//         ownerWallet = ownerWallet_;
//     }

 
//     //donation function
//     function makeDonation(uint256 pId) public payable {
//         //if goal amount is achieved, close the proj
//         require(goalAmount > raisedAmount, "GOAL ACHIEVED");
 
//         //record walletaddress of donor
//         (bool success, ) = payable(ownerWallet).call{value: msg.value}("");
//         require(success, "VALUE NOT TRANSFERRED");
 
//         //calculate total amount raised
//         raisedAmount += msg.value;

//         //saving the donation made by the user
//         userDonations[msg.sender][pId] = msg.value;

//         //saving the donation on a project by a user
//         projectDonations[pId][msg.sender] = msg.value;

//         emit Funded(msg.sender, msg.value, block.timestamp);
//     }
// }