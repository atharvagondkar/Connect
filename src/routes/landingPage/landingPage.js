import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './landingPage.scss';
import logo from '../../assets/1.jpg';

import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      pass:'',
      hide_ele: true,
    };
  }

  toggleMeet = () => this.setState({hide_ele: !this.state.hide_ele})

  handleUserChange = (e) => this.setState({ url: e.target.value });
  handlePassChange = (e) => this.setState({ pass: e.target.value });

  join = () => {
    var passcheck = this.state.url.charCodeAt(0).toString()+this.state.url.charCodeAt(1).toString()+this.state.url.charCodeAt(2).toString()

    if (passcheck === this.state.pass){
      // var url = this.state.url.split('/');
        this.props.history.push(`/room`,{meet:this.state.url,jurl:window.location.href+"web/"+this.state.url+"/"+this.state.pass });
      // window.location.href = `/${url[url.length - 1]}`;
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='filter'></div>
        <div className='c-body'>
          <h4 className='logo-name'>connect</h4>
          <img alt='...' src={logo} className='img-logo' />
          <div className={`i-div ${this.state.hide_ele ? 'hidden' : ''}`}>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder='Meeting ID'
                aria-label='Username'
                aria-describedby='basic-addon1'
                onChange={this.handleUserChange}
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <FormControl
                placeholder='Password'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                onChange={this.handlePassChange}
              />
              <InputGroup.Append>
                <InputGroup.Text id='basic-addon2'>#</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Button className='b-ui' variant='info' onClick={this.join}>
              Join
            </Button>
            <Button className='b-ui' variant='secondary' onClick={this.toggleMeet}>
              Back
            </Button>
          </div>
          <div className={`i-div ${this.state.hide_ele ? '' : 'hidden'}`}>
            <Button
              className='b-ui'
              variant='outline-primary'
              onClick={this.toggleMeet}
            >
              Join Meet
            </Button>
            <Button
              className='b-ui'
              variant='outline-info'
              onClick={this.join}
            >
              Create Meet
            </Button>
          </div>
        <IconButton style={{color: "black"}} onClick={() => window.location.href="https://github.com/RayanGandhi/Connect"}>
                  <GitHubIcon />
        </IconButton>
        </div>
        {/* <div className="container2">
          <div style={{fontSize: "14px", background: "white", width: "10%", textAlign: "center", margin: "auto", marginBottom: "10px"}}>
              Source code: 
              <IconButton style={{color: "black"}} onClick={() => window.location.href="https://github.com/0x5eba/Video-Meeting"}>
                  <GitHubIcon />
              </IconButton>
          </div>
          
          <div>
              <h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
              <p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends.</p>
          </div>

          <div style={{
              background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
              textAlign: "center", margin: "auto", marginTop: "100px"
          }}>
              <p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
              <Input placeholder="URL" onChange={e => this.handleChange(e)} />
              <Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
          </div>
      </div> */}
      </div>
    );
  }
}

export default LandingPage;
