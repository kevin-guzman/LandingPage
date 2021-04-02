import React,{useEffect, useState}  from 'react';
import '../styles/Container.css'
import '../styles/SkillProgress.css'
import '../styles/ProyectCard.css'
import Photo from '../util/images/photoProfile.jpg'
import Linkend from '../util/icons/linkedin.svg'
import Instagram from '../util/icons/instagram.svg'
import Facebook from '../util/icons/facebook.svg'
import Twitter from '../util/icons/twitter.svg'
import Phone from '../util/icons/phone.svg'
import Proyects from '../data/Proyects.json'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Loading from './Loading'
import {Carousel} from 'react-bootstrap'
import {getJSON} from '../functions/getJSON'
import {isMobile} from 'react-device-detect';

const skills = [
    {name:'Node JS', value:56},
    {name:'React JS', value:60},
    {name:'React Native', value:80},
    {name:'Python', value:40},
    {name:'IoT', value:25},
    {name:'Firebase', value:60},
    // {name:'', value:0},
]

const social_networks = [
    {icon:Linkend, href:''},
    {icon:Instagram, href:'https://www.instagram.com/guzman__kevin?r=nametag'},
    {icon:Facebook, href:'https://www.facebook.com/kevin.guzman.1000'},
    {icon:Twitter, href:'https://twitter.com/keeee_vin'},
    {icon:Phone, href:'https://api.whatsapp.com/send?phone=573057206777'},
]

const Home = () => {
    const [proyectsFilter, setProyectsFilter] = useState('React Native') //React Native
    const [proyects, setProyects]=useState([])
    const [isLoading, setIsLoading]= useState(true)
    const [currentProyect, setCurrentProyect] = useState('SmartHouse')
    const [shouldResize, setShouldResize] = useState(false)
    useEffect(() => { 

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
    }, [])
    const updateDimensions = () => {
        const width = window.innerWidth
        console.log('Width-->', width);
        setShouldResize(width < 930 || isMobile)
    }
    console.log('Width->', shouldResize);
    useEffect(()=>{
        setIsLoading(true)
        setInterval(()=>{
            setIsLoading(false)
        }, 990)
        if (proyectsFilter === undefined){
            // setProyects(Proyects)
        }else{
            const proyectsFiltred = Proyects.filter( x => x.tags.includes(proyectsFilter) )
            setCurrentProyect(getJSON(proyectsFiltred[0], ['title'], ''))
            setProyects(proyectsFiltred)
        }
    },[proyectsFilter])
    const SkillProgress = ({name='', color='', percent=0}) => {
        return(
            <button autoFocus={proyectsFilter === name} onClick={()=>setProyectsFilter(name)} className={!shouldResize ? 'SkillContainer' : 'SkillContainerResized'} >
                <div className='TextContainer' >
                    <p className='SkillText' >{name}</p>
                    <p className='SkillText' >{percent}%</p>
                </div>
                <ProgressBar variant='success' className='ProgressBar' animated now={percent} />
            </button>
        )
    }
    const ProyectCard = ({name='SmartHouse', images=[], description='Description', longDescription='', urlVid, index}) => {
        return(
            <>
            <button onClick={()=>setCurrentProyect(currentProyect === name ? '' : name)} className='CardContainer' >
                <div className='InfoContainer' >
                    <p className='CardTittle' >{name}</p> 
                </div>
                <div className='IconCard' >
                    <img  className={currentProyect === name ? 'ChevronIconRotated' : 'ChevronIcon'} src='https://image.flaticon.com/icons/png/512/59/59065.png'/* 'https://image.flaticon.com/icons/png/512/25/25629.png' */ />
                </div>
            </button>
            {currentProyect === name && (
                <>
                <div className='AditionalInfoContainer' >
                    <div className='LongDescriptionContainer' >
                        <p className='LongDescription' >{longDescription}</p>
                    </div>
                    <div className='CardImages' >
                    <Carousel>
                        {images.map((value, index)=>{
                            return (
                                <Carousel.Item interval={1000} >
                                    <img key={value} className='CardImage' src={ `https://drive.google.com/uc?export=view&id=${value}`} />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    </div>
                </div>
                {urlVid && <div className='VideoContainer' >
                    <iframe className='Video' allowFullScreen={true} width="520" height="260" src={`https://www.youtube.com/embed/${urlVid}`} style={{marginTop: '2%'}} ></iframe>
                </div>}
                </>
                )}
            </>
        )
    }
    return (
            <body className="Container"  >
                <div className={!shouldResize ? 'Header' : 'HeaderResized'}>
                    <div className="HeaderLeft"  >
                        <h1 className="Header-tittle" >Portafolio de proyectos</h1>
                        {/* <p className="Header-name">Kevin Guzmán</p> */}
                        <div className='ContactInfo' >
                            <div>
                                <p className='PersonalDescription' >
                                    Mi nombre es Kevin Guzmán, soy desarrollador de 
                                    aplicaciones web y móviles y estudiante de tecnología 
                                    en electrónica de la Universidad Distrital FJDC cursando el 
                                    noveno semestre.<p></p>
                                    Mi experiencia con las tecnolgías es de media de 1 año, tengo 
                                    un nivel de inglés de B2 aproximadamente, me considero una persona
                                    proactiva y que aporta muchas ideas.<p></p>
                                    Mail: kevinskate.kg@gmail.com<p></p>
                                </p>
                                <a className='PersonalDescription' href='https://api.whatsapp.com/send?phone=573057206777'>
                                    Teléfono: +57 3057206777
                                </a>
                                <p></p>
                                <a className='PersonalDescription' href='https://drive.google.com/drive/folders/16DTgBFXzQl6oOfBg2gxUDMyyB-XRj_QH?usp=sharing'>
                                    Click aquí para descargar las Aplicaciones.
                                </a>
                            </div>
                            <img className="Header_Photo" src={Photo}  />
                        </div>
                    </div>
                    <div className={!shouldResize ? "HeaderRight" : 'HeaderRightResized'} >
                        <title className='HeaderRightTittle' >Habilidades</title>
                        {skills.map((value, index)=>(
                            <SkillProgress name={value.name} percent={value.value} key={index.toString()} />
                        ))}
                    </div>
                </div>
            
            <div className="Container-Body">
                {!isLoading? proyects.map((value, index)=>{
                    return <ProyectCard
                            index={index}
                            key={index.toString()}
                            images={value.urlImg}
                            longDescription={value.longDescription}
                            imageFromat={value.imageFormat}
                            urlVid={value.urlVid}
                            description={value.description}
                            name={value.title} />
                })
                :<Loading/>}
            </div>
            {/* <div>
            <p style={{textAlign:'center', fontSize:15,color:'#DCDAEF', marginTop:10}}>kevinskate.kg@gmail.com <br></br> +57 305 720 6777 </p>
            </div>  */}
        </body>  
    )
}

export default Home;