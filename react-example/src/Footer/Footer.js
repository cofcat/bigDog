import React from 'react';

var FooterCss =require('./Footer.css');

export default class Footer extends React.Component{
    render(){
        return(
            <div className={FooterCss.footer}>
                <p>脚底版权</p>
            </div>
        );
    }
}