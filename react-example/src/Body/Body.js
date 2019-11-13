import React from 'react'

var BodyCss =require('./Body.css');

export default class Body extends React.Component{
   
    render(){
        return(
            <div className={BodyCss.Body}>

                <div className={BodyCss.guanggao1}>
                    <p>广告1</p>
                </div>

                <div className={BodyCss.guanggao2}>
                    <p>广告2</p>
                </div>
                <div className={BodyCss.no}>
                    <div className={BodyCss.gundong}>
                        <div className={BodyCss.fennei1}>
                            <p>第1个产品分类的右拉菜单</p>
                        </div>
                        <div className={BodyCss.fennei2}>
                            <p>第2个产品分类的右拉菜单</p>
                        </div>
                        <div className={BodyCss.fennei1}>
                            <p>第3个产品分类的右拉菜单</p>
                        </div>
                        <div className={BodyCss.fennei2}>
                            <p>第4个产品分类的右拉菜单</p>
                        </div>
                        <div className={BodyCss.fennei1}>
                            <p>第5个产品分类的右拉菜单</p>
                        </div>
                    </div>
                    <div>
                        {/* {
                            setTimeout(() => {
                            
                            }, 1000)
                        } */}
                        <p>随机推送已有产品照片+跳转链接（滚动）</p>
                    </div>
                </div>
                

            </div>
        );
    }
}