import React from 'react'
import { Alchemy, Network } from "alchemy-sdk";

function SearchAddress(props) {
   const settings = {
        apiKey: "Ur2--N_XqaWFa1Pdocx_41rWk0uThvZ_",
        network: Network.ETH_MAINNET,
      };
    const alchemy = new Alchemy(settings);

   const searchAdd = () => {
        const userAddress = props.address;
        console.log(userAddress);
    }

  return (
    <div>
    {searchAdd()}
    </div>
  )
}

export default SearchAddress
