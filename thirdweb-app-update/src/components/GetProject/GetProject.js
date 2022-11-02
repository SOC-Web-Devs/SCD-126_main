import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function GetProject() {
  const { contract } = useContract("0x9b517CFdb6505b2ce56A637457C5aB3ebC340c5c");
  const { data, isLoading } = useContractRead(contract, "numProjects")
}