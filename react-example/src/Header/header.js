import React from 'react'
import Images from './../Images/Images'
var HeaderCss = require('./header.css')
// var userName=""
export default class Defaultheader extends React.Component{
    // constructor(){
    //     super();//调用基类的所有初始化的值
    //     this.state={
    //         userName : ""
    //     };
    // }

    // Names(){

    // }

    // headerNameChage(event){
    //     this.setState({userName : event.target.value});
    // }

    render(){
        var userName =""
        return(
            <div>
                {/* <p>{this.props.userName}</p> */}
                 <div className={HeaderCss.logo}>
                    <p>
                        {
                            userName ==='' ? '用户没有登陆' : '用户：'+userName+'欢迎你'
                        }
                    </p>
                </div>
                <div className={HeaderCss.header}>
                    <label htmlFor="title">欢迎页面</label>
                </div>
                {/* <Images headerNameChage ={this.headerNameChage.bind(this)}/> */}
            </div>
        )
    }
}