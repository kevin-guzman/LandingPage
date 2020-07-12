import React ,{useState, useEffect} from 'react'
import '../styles/Container.css'
import { Link, Redirect } from 'react-router-dom'


let ProyecstInfo = (props) => {
    const [data, setData]= useState(JSON.parse(window.localStorage.getItem('data'))) //JSON.parse(window.localStorage.getItem('data'))
    //const [index, setIndex] = useState(parseInt(window.localStorage.getItem('index')))
    

    if (data === undefined || data === null || data === '' ){
        return  <Redirect push to="/LandingPage" ></Redirect>  
    }else{
        const images = data.im
        const imageFormat = data.imageFormat
        return(
            <div className="Container">
                <div className="TextProyect">
                    
                        {data.title}
                    
                </div>
                <div className="Description">
                    <p>
                        {data.longDescription}
                    </p>
                </div>
                <div className="Container-phProyects"  style={{marginInlineStart:'2%', alignSelf:'center'}} >
                    {
                        images.map((x,i)=>{
                            return(
                                <div className="zoom" key={i} style={{...Styles.card}} >
                                    <img style={Styles.card}  src={ require(`../util/images/${x}${imageFormat}`)} /* width={200} */  />
                                </div>
                                
                            )
                        })
                    }
                </div>
                {
                    data.urlVid != undefined?
                        <div className="Container-videoProyect" style={{marginTop: '3%'}} >
                            !Video demostrativo de la App!
                            <iframe  allowFullScreen={true} width="560" height="315" src={`https://www.youtube.com/embed/${data.urlVid}`} style={{marginTop: '2%'}} ></iframe>
                        </div>
                    :
                    null
                }
                
                <div>
                    <p>
                        .
                    </p>
                </div>
                
            </div>
        )
    }

}
const Styles = {
    card:{
        flex:1, 
        alignSelf:'center',
        width:230,
        height:400,
        marginTop:15,
        marginLeft:16,
    },
}

export default ProyecstInfo

