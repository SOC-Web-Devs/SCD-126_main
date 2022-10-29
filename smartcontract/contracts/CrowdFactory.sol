// // SPDX-License-Identifier: Unlicensed
// pragma solidity ^0.8.15;

// import './';

    
//     // mapping(address => mapping(uint256 => uint256)) userDonations;
//     // mapping(uint256 => mapping(address => uint256)) projectDonations;


// //contract to record all crowdfunding projects
// contract CrowdFactory {
//     address[] public publishedProjs;

// 	//trigger the front end when new project is created
//     event Projectcreated(
//         string projTitle,
//         uint256 goalAmount,
//         address indexed ownerWallet,
//         address projAddress,
//         uint256 indexed timestamp
//     );
	
// 	//returns the number of total published projects
//     function totalPublishedProjs() public view returns (uint256) {
//         return publishedProjs.length;
//     }

// 	// return the published projects
//     function getProjectDonations() public view returns (address [] memory){
//         return publishedProjs;
//     }
 

//     //This function makes new projects
//     function createProject(
//         string memory projectTitle,
//         uint256 projgoalAmount,
//         string memory projDescript,
//         address ownerWallet
//     ) public returns(address) {
//         //initializing CrowdfundingProject contract
//         CrowdfundingProject newproj = new CrowdfundingProject(
//             //passing arguments from constructor function
//             projectTitle,
//             projgoalAmount,
//             projDescript,
//             ownerWallet
//         );
 
//         //pushing project address
//         publishedProjs.push(address(newproj));
 
//         //calling Projectcreated (event above)
//         emit Projectcreated(
//             projectTitle,
//             projgoalAmount,
//             msg.sender,
//             address(newproj),
//             block.timestamp
//         );
// 		return address(newproj);

//     }
// }