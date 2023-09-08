import React, { Component } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import "./styles.css";
// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
// 0x728B8B8518B674F7E73428C14fa2D68b5E1e8801

// 0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: "",
      hash: "",
      miner: "",
      timestamp: "",
      parenthash: "",
      nonce: "",
      number: "",
      isAvailable: false,
    };
    this.response = Object;
    this.apiData = Object;
  }

  
  changeHandle = (e) => {
    this.setState({
      userAddress: e.target.value,
    });
  };

  searchAddress = async (e) => {
    const btn = document.getElementById('btn');
    e.preventDefault();
    if (this.state.userAddress.length < 40) {
      btn.disabled = true;
      btn.style.color = 'red'
    } else if (this.state.userAddress.length === 42) {
      alert('wallet');
      const settings = {
        apiKey: "Ur2--N_XqaWFa1Pdocx_41rWk0uThvZ_",
        network: Network.ETH_MAINNET,
      };
      const alchemy = new Alchemy(settings);
      let hash = this.state.userAddress;
      this.response = await alchemy.core.getBlockWithTransactions(hash);
     
      console.log(this.response);
      this.setState({
        miner: this.response.miner,
        hash: this.response.hash,
        nonce: this.response.nonce,
        number: this.response.number,
        timestamp: this.response.timestamp,
        parenthash: this.response.parentHash,
      });
    }
    else if (this.state.userAddress.length > 42){
     
      const settings = {
        apiKey: "Ur2--N_XqaWFa1Pdocx_41rWk0uThvZ_",
        network: Network.ETH_MAINNET,
      };
      const alchemy = new Alchemy(settings);
      let hash = this.state.userAddress;
      this.response = await alchemy.core.getBlockWithTransactions(hash);
      console.log(this.response);
      this.setState({
        isAvailable: true,
        miner: this.response.miner,
        hash: this.response.hash,
        nonce: this.response.nonce,
        number: this.response.number,
        timestamp: this.response.timestamp,
        parenthash: this.response.parentHash,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="landing__page">
          <h1>The 0x3Devoid Team Block Explorer</h1>
          <form>
            <input
              type="text"
              onChange={this.changeHandle}
              id="address__input"
              placeholder="TNX hash"
            />
            <button id="btn" onClick={this.searchAddress}>
              Search
            </button>
          </form>
        </div>

        <div className="live__details">
          <div id="items">
            <div id="log">
              <span>Price</span>
              <h4>100$</h4>
            </div>
            <div id="log">
              <span>Opened</span>
              <h4>100$</h4>
            </div>
            <div id="log">
              <span>NetworkHash</span>
              <h4>100$</h4>
            </div>
          </div>

          <div id="items">
            <div id="log">
              <span>MarketCap</span>
              <h4>100$</h4>
            </div>
            <div id="log">
              <span>Unconfirmed</span>
              <h4>100$</h4>
            </div>
            <div id="log">
              <span>Difficulty</span>
              <h4>100$</h4>
            </div>
          </div>
        </div>

        <div className="transaction__board">
          <h2>Transaction Details</h2>

          <div className="live__board">
          {this.state.isAvailable ? 


          <div>
            <p>Hash: {this.state.hash} </p>
            <p>Miner: {this.state.miner}</p>
            <p>Nonce: {this.state.nonce}</p>
            <p>Number: {this.state.number}</p>
            <p>Timestamp: {this.state.timestamp}</p>
            <p>ParentHash: {this.state.parenthash}</p>
          </div> :
          
          
          <p id="center">Your Transaction Will Show Here</p>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Transaction;
