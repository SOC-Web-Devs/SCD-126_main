// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.15;

contract CrowdFundingFinal{

    struct Project{
        address owner;
        string pName;
        string pdescription;
        uint256 target;
        uint256 timeCreated;
        uint256 deadline;
        uint256 amountCollected;
        mapping(address => uint256) donations;
    }

    mapping(uint256 => Project) public projects;

    uint256 public numProjects = 0;
    

    // CREATE PROJECT
    function createProject(
        address _owner, 
        string memory _pName,
        string memory _pdescription,
        uint256 _target,
        uint256 _deadline) 
        
    public returns (uint256) {
        
        Project storage project = projects[numProjects];
        require(project.deadline<block.timestamp);
        
        project.owner = _owner;
        project.pName = _pName;
        project.pdescription = _pdescription;
        project.target = _target;
        project.timeCreated = block.timestamp;
        project.deadline = _deadline;
        project.amountCollected = 0;

        numProjects++;


        return numProjects - 1;

    }

    modifier activeProjectsOnly(uint256 _projectIndex) {
        // require(projects[_projectIndex].deadline > block.timestamp, "Deadline_exceed");
        require(projects[_projectIndex].amountCollected < projects[_projectIndex].target);
      _;  
    }

    //GET NUM OF PROJECTS
    function getNumProjects() public view returns ( uint256 ){
        return numProjects;
    }


    // DONATE ON PROJECT
    function donateOnProject(uint256 _projectIndex, address _donator, uint256 _amount) 
    public activeProjectsOnly(_projectIndex) {
        Project storage project = projects[_projectIndex];

        project.donations[_donator] = _amount;
        project.amountCollected = project.amountCollected + _amount;

    }

    modifier projectOwner(uint256 _projectIndex, address _pOwner){
        Project storage project = projects[_projectIndex];
        require(projects[_projectIndex].owner == _pOwner);
         _;
    }

    //withdrawFunding
    function withdrawFunding(uint256 _projectIndex, address payable _pOwner) 
    public
    projectOwner(_projectIndex, _pOwner){

        (bool sent,) = _pOwner.call{value: projects[_projectIndex].amountCollected}("");
        if (sent){
            projects[_projectIndex].amountCollected = 0;
        }
        // Project storage project = projects[_projectIndex];
     
        // payable(_pOwner).transfer(project.amountCollected);

    
    }

    function getProject(uint256 id) view public 
    returns (
        address , 
        string memory, 
        string memory, 
        uint256, 
        uint256, 
        uint256, 
        uint256){
        return (projects[id].owner,  
        projects[id].pName, 
        projects[id].pdescription, 
        projects[id].target, 
        projects[id].timeCreated,
         projects[id].deadline, 
         projects[id].amountCollected);
    }

}


//   function withdraw() public onlyOwner returns (bool){
//         require(address(this).balance > 0, "Owner has not balance to withdraw");

//         (bool sent,) = msg.sender.call{value: address(this).balance}("");
//         require(sent, "Failed to send user balance back to the owner");
//         return sent;
//     }


