import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"


class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: '',
			hide_ele: true
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div className='container'>
        <div className='filter'></div>
        <div className='c-body'>
        <h4 className='logo-name'>connect</h4>
        <img alt="..." src={logo} className='img-logo'/>
        <div className={`i-div ${dhide ? 'hidden' : ''}`}>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Meeting ID"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                placeholder="Password"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">#</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
            <Button className='b-ui' variant="info" onClick={joinMeet}>Join</Button>
            <Button className='b-ui' variant="secondary" onClick={toggleMeet}>Back</Button>
        </div>
        <div className={`i-div ${dhide ? '' : 'hidden'}`}>
            <Button className='b-ui' variant="outline-primary" onClick={toggleMeet}>Join Meet</Button>
            <Button className='b-ui' variant="outline-info" onClick={createMeet}>Create Meet</Button>
        </div>
        </div>
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
		)
	}
}

export default Home;