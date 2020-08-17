import React,{ Component } from 'react';

import { Redirect } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.css';
// import './permission.scss';
// import logo from '../../assets/1.jpg';

class Permission extends Component{

    constructor(props){
        super(props)
        this.state={
            url:props.match.params.meet,
            pwd : props.match.params.pwd,
            jurl: window.location.href
        };
    }

    check = () => {
        var passcheck = this.state.url.charCodeAt(0).toString()+this.state.url.charCodeAt(1).toString()+this.state.url.charCodeAt(2).toString();
        if (passcheck === this.state.pwd){
            return true           
            // window.location.href = `/${url[url.length - 1]}`;
        }
    }

    render(){
        const redirect  = this.check
         if (redirect) {
               return <Redirect to={{
                pathname: '/room',
                state: { meet: this.state.url, jurl: this.state.jurl }
               }}
        />;
        }
    }
}

export default Permission;