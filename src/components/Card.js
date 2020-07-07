import React,{useEffect, useState, StyleSheet, Image} from 'react'
import './styles/Card.css' 
import {Link} from 'react-router-dom'

let Card = (props) =>{
    const {Proyects, ProyectsType} = props;
    const [proyects, setProyects]=useState([])
    const [image, setImage]=useState('')
    useEffect(()=>{
        if (ProyectsType === undefined){
            setProyects(Proyects)
        }else{
            let proyectsFiltred = Proyects.filter( x=> 
                x.proyectType === ProyectsType
            )
            setProyects(proyectsFiltred)
        }
    },[props])
    return(
        <div 
            className="row center "  
            //className=""
            style={{justifyContent:'center', borderRadius:'50%'}}
            //onDrag={console.log('Wenassss')}
            onClick={console.log('Wenassss')}
        >
            {
                proyects.map((x,i)=>{
                    return(
                        
                        <Link to="/proyects/info"  params={{Val:'Holaa'}} key={i} /* className="" */  >
                            <div className="zoom" style={Styles.card} key={i} >
                                <div  
                                    className="card"  
                                    key={i} 
                                    style={Styles.card}
                                    
                                >
                                    <div 
                                        style={Styles.divCard}
                                        
                                    >
                                        <div>
                                            <div style={{flex:1, marginTop:10, alignItems:'center' }} >
                                                <h1 style={Styles.cardTitle} >
                                                    {x.title}
                                                    
                                                </h1>
                                                <p style={Styles.cardSubTitle} >
                                                    {x.description}
                                                </p>
                                            </div>
                                            <div className="Images-Container"   >
                                                <img   src={ require(`../util/images/${x.im}.png`)  /* map */}  style={Styles.image} /* width={90} */ />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

const Styles= {
    cardTitle:{
        flex:1, 
        marginTop:10, 
        fontSize:30, 
        color:'#582070', 
        textAlign:'center'
        
    },
    cardSubTitle:{
        flex:1, 
        marginTop:10, 
        fontSize:13, 
        color:'#340F3A', 
        textAlign:'center' 
    },
    card:{
        //backgroundColor:'rgba(100,100,100,0.5)',
        flex:1, 
        alignSelf:'center',
        width:280,
        height:360,
        marginTop:0,
        marginLeft:5,
/*         maxHeight:220,
        maxWidth:190, */
    },
    divCard:{
        marginLeft: 10,
        marginRight:10,
    },
    image:{
        width:'50%',
        height:'30%',
        borderRadius:'4%'
    }

}

export default Card