import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host : 'player0',
      test : '',
    }
  }

  // componentDidMount() {
  //   this._getHost();
  // }

  // _getHost = async() => {
  //   const res = await axios.get('/api/host');
  //   this.setState({ host : res.data.host })
  // }
  
  // DB접속 테스트용------------------------------
  componentDidMount() {
    this._dbTest();
  }
  _dbTest = async() => {
    const res = await axios.get('/api/test');
    console.log(res.data)
  }
  // DB접속 테스트용------------------------------

  render() {
    return(
      <div className='App'>
        <h3> Welcome to <u> {this.state.host} </u>  </h3>
      </div>
    )
  }
}

export default App;
