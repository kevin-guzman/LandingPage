import React,{useState}  from 'react';
import '../styles/Container.css'
import Photo from '../util/images/photoProfile.jpeg'
import Proyects from './Proyects'
import { Link } from 'react-router-dom';

function Container() {
    const [proyectType, setProyectType]= useState('movil')
    return (
        <div className="Container">
            <div className="Header">
                <h1>Kevin Guzmán</h1>
                <img className="Header_Photo" src={Photo}/>
                <div className="Header_Link">
                    <button 
                        className="btn" 
                        onClick={()=>setProyectType('educacion')} 
                    >
                        <a style={Styles.textButton}>Educacion</a>
                    </button>
                    <button 
                        className="btn" 
                        onClick={()=>setProyectType('movil')} 
                    >
                        <a style={Styles.textButton}>Desarrollo Movil</a>
                    </button>
                    <button 
                        className="btn" 
                        onClick={()=>setProyectType('hardware')} 
                    >
                        <a style={Styles.textButton}>Hardware</a>
                    </button>
                </div>
            </div>
            <div className="Body">
                <Proyects
                    proyectType={proyectType}
                />
            </div>
        </div>
    )
}

const Styles={
    textButton:{
        color:'white',
        fontSize:'100%'
    }
}

export default Container;