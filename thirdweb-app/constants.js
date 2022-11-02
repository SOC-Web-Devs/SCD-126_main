CROWD_CONTRACT_ADDRESS= "0x8D4a95089C5b3ef4621B979f1Aee7bbaEBE2CCF6";
CROWD_CONTRACT_ABI= [
	{
	  "type": "fallback",
	  "name": "",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "createProject",
	  "inputs": [
		{
		  "type": "address",
		  "name": "_owner",
		  "internalType": "address"
		},
		{
		  "type": "string",
		  "name": "_pName",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "_pdescription",
		  "internalType": "string"
		},
		{
		  "type": "uint256",
		  "name": "_target",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "_deadline",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "donateOnProject",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_projectIndex",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "_donator",
		  "internalType": "address payable"
		},
		{
		  "type": "uint256",
		  "name": "_amount",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "payable"
	},
	{
	  "type": "function",
	  "name": "getNumProjects",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getProject",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "id",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "",
		  "internalType": "address"
		},
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "",
		  "internalType": "string"
		},
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "numProjects",
	  "inputs": [],
	  "outputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "projects",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "type": "address",
		  "name": "owner",
		  "internalType": "address"
		},
		{
		  "type": "string",
		  "name": "pName",
		  "internalType": "string"
		},
		{
		  "type": "string",
		  "name": "pdescription",
		  "internalType": "string"
		},
		{
		  "type": "uint256",
		  "name": "target",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "timeCreated",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "deadline",
		  "internalType": "uint256"
		},
		{
		  "type": "uint256",
		  "name": "amountCollected",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "withdrawFunding",
	  "inputs": [
		{
		  "type": "uint256",
		  "name": "_projectIndex",
		  "internalType": "uint256"
		},
		{
		  "type": "address",
		  "name": "_pOwner",
		  "internalType": "address payable"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "receive",
	  "name": "",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "payable"
	}
  ]