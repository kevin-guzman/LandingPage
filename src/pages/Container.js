import React,{useState}  from 'react';
import '../styles/Container.css'
import Photo from '../util/images/photoProfile.jpeg'
import Linkend from '../util/icons/linkedin.svg'
import Instagram from '../util/icons/instagram.svg'
import Facebook from '../util/icons/facebook.svg'
import Twitter from '../util/icons/twitter.svg'
import Phone from '../util/icons/phone.svg'
import Proyects from './Proyects'
import { Link } from 'react-router-dom';
//import '../styles/BackGround/css/style.css'

function Container() {
    const [proyectType, setProyectType]= useState('movil')
    return (
        <div className="Container">
            <div className="Container-Header">
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
            <div className="Container-Body">
                <div className="Container-Social">
                    <a>
                        <img className="Social-Icon" src={Linkend}/>
                    </a>
                    <a href="https://www.instagram.com/guzman__kevin?r=nametag">
                        <img className="Social-Icon" src={Instagram}/>
                    </a>
                    <a href="https://www.facebook.com/kevin.guzman.1000">
                        <img className="Social-Icon" src={Facebook}/>
                    </a>
                    <a href="https://twitter.com/keeee_vin">
                        <img className="Social-Icon" src={Twitter}/>
                    </a>
                    <a href="api.whatsapp.com/send?phone=573057206777">
                        <img className="Social-Icon" src={Phone}/>
                    </a>
                </div>
                <div className="Container-Cards">
                    <Proyects
                        proyectType={proyectType}
                    />
                </div>    
            </div>
        </div>   
    )
}

const Styles={
    textButton:{
        color:'#DCDAEF',
        fontSize:'100%'
    }
}

export default Container;