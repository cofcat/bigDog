import React from 'react';//import  导入
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import HomePage from './HomePage/homePage'

class IndexPage extends React.Component{
    componentWillMount(){
        console.log('IndexPage - componentWillMount');
    }
    componentDidMount(){
        console.log('IndexPage - componentDidMount');
    }
    render(){

        return(
            <div>
                <HomePage/>
            </div>
        )
    }
}
ReactDOM.render(<IndexPage/>,document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();