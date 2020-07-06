import React from 'react';
import '../styles/Container.css'
import Photo from '../util/images/photoProfile.jpeg'
import Proyects from './Proyects'
function Container() {
    return (
        <div className="Container">
            <div className="Header">
                <h1>Kevin Guzman</h1>
                <img className="Header_Photo" src={Photo}/>
                <div className="Header_Link">
                    <a>Educacion</a>
                    <a>Desarrolo movil</a>
                    <a>Hardware</a>
                </div>
            </div>
            <div className="Body">
                <Proyects/>
            </div>
        </div>
    )
}
export default Container;