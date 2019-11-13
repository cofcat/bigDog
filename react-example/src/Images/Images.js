import React from 'react';

// var ImagesCss = require('./Images.css');

export default class Images extends React.Component{
    render(){
        return(
            <div>
                <p>用户名：<input type="text" onChange={this.props.headerNameChage}  /></p>
                <input type='button' value="登陆"/>
            </div>
        );
    }
}