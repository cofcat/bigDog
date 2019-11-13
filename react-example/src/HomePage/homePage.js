import React from 'react';
import Defaultheader from './../Header/header';

import Defaultfooter from './../Footer/Footer';

import Defaultbody from './../Body/Body';

import Defaultimages from './../Images/Images';

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Defaultheader/>
                <Defaultbody/>   
                <Defaultfooter/>
            </div>
        )
    }
}