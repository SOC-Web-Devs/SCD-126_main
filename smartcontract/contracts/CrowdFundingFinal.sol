// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.15;

contract CrowdFundingFinal{


    struct Project{
        address  owner;
        string pName;
        string pdescription;
        uint256 target;
        uint256 timeCreated;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        address[] donators;
        uint256[] donations;

        // mapping(address => uint256) donations;
    }

    mapping(uint256 => Project) public projects;

    uint256 public numProjects = 0;
    

    // CREATE PROJECT
    function createProject(
        address _owner, 
        string memory _pName,
        string memory _pdescription,
        uint256 _target ,
        uint256 _deadline,
        string memory _image) 
        
    public returns (uint256) {
        
        Project storage project = projects[numProjects];
        require(project.deadline<block.timestamp,"The deadline should be other than today");
        
        project.owner = _owner;
        project.pName = _pName;
        project.pdescription = _pdescription;
        project.target = _target * 10**18;
        project.timeCreated = block.timestamp / 60 / 60 / 24;
        project.deadline = _deadline / 60 / 60 / 24;
        project.amountCollected = 0 ;
        project.image = _image;

        numProjects++;


        return numProjects - 1;

    }

    modifier activeProjectsOnly(uint256 _projectIndex) {
        // require(projects[_projectIndex].deadline > block.timestamp, "Deadline_exceed");
        require(projects[_projectIndex].amountCollected < projects[_projectIndex].target,"The deadline has exceeded");
      _;  
    }

    //GET NUM OF PROJECTS
    function getNumProjects() public view returns ( uint256 ){
        return numProjects;
    }


    // DONATE ON PROJECT
    function donateOnProject(uint256 _projectIndex, address payable _donator, uint256 _amount) 
    public payable activeProjectsOnly(_projectIndex) {

        // require(msg.value >= _amount,"You have insufficient funds"); 
        Project storage project = projects[_projectIndex];
        // project.donations[_donator] = _amount;
        project.donators.push (_donator);
        project.donations.push(_amount);

       (bool sent,) = project.owner.call{value: _amount * 10**18}("");

       if(sent){
            project.amountCollected = project.amountCollected + _amount;

       }
        
        // payable(project.owner).transfer(_amount);

    }

    modifier projectOwner(uint256 _projectIndex, address _pOwner){
        Project storage project = projects[_projectIndex];
        require(projects[_projectIndex].owner == _pOwner,"Sorry, only the owner of the project can withdraw the funds.");
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

    function numOfDonators(uint256 id)view public returns(uint256){
        return(projects[id].donations.length );
    }

    function getDonators(uint256 id, uint256 donatorNum) view public returns(address, uint256){
        require(projects[id].donations.length>0,"No donation have been made");
        return(projects[id].donators[donatorNum] , projects[id].donations[donatorNum]);
    }

    function getProject(uint256 id) view public 
    returns (
        address , 
        string memory, 
        string memory, 
        uint256, 
        // uint256, 
        uint256, 
        uint256,
        string memory){
        return (
        projects[id].owner,  
        projects[id].pName, 
        projects[id].pdescription, 
        projects[id].target, 
        // projects[id].tim/eCreated,
        projects[id].deadline, 
        projects[id].amountCollected / 10**18 ,
        projects[id].image);
    }

    fallback() external payable {}

    receive() external payable {}
}


//   function withdraw() public onlyOwner returns (bool){
//         require(address(this).balance > 0, "Owner has not balance to withdraw");

//         (bool sent,) = msg.sender.call{value: address(this).balance}("");
//         require(sent, "Failed to send user balance back to the owner");
//         return sent;
//     }


