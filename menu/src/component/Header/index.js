import React, { Component } from 'react';
import './css/header.css';
import {withRouter} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <i className='iconfont jiantou' onClick={()=>this.back()}></i>
                <h2>锅sir时尚火锅</h2>
            </div>
        );
    }
    back(){
        this.props.history.go(-1)
    }
}

export default withRouter(Header);