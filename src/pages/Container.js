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
            <div className="Container"  >
                <div className="Header">
                    <h1 style={{textAlign:'center', marginTop:'2%'}} >Portafolio de proyectos.</h1>
                    <p style={{textAlign:'center', fontSize:30}}>Kevin Guzmán</p>
                    <p style={{textAlign:'center', fontSize:15}}>kevinskate.kg@gmail.com <br></br> +57 305 720 6777 </p>
                    <img className="Header_Photo" src={Photo}  />
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
                    <a href="https://api.whatsapp.com/send?phone=573057206777">
                        <img className="Social-Icon" src={Phone}/>
                    </a>
                </div>
                <div className="Container-Cards">
                    <Proyects
                        proyectType={proyectType}
                    />
                </div>
            </div>
            <div>
                <p>
                            .
                </p>
            </div> 
        </div>  
    )
}

const Styles={
    textButton:{
        color:'#DCDAEF',
        fontSize:40
    }
}

export default Container;