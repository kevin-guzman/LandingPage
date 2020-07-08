import React ,{useState, useEffect} from 'react'
import '../styles/Container.css'

let ProyecstInfo = (props) => {
    const [data, setData]= useState(JSON.parse(window.localStorage.getItem('data')))
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
            <div className="Container-phProyects" style={Styles.card} >
                {
                    images.map((x,i)=>{
                        return(
                            <div className="zoom" key={i} style={Styles.card} >
                                <img style={Styles.card}  src={ require(`../util/images/${x}${imageFormat}`)} /* width={200} */  />
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )    

}
const Styles = {
    card:{
        //backgroundColor:'rgba(100,100,100,0.5)',
        flex:1, 
        alignSelf:'center',
        width:230,
        height:400,
        marginTop:5,
        marginLeft:20,
/*         maxHeight:220,
        maxWidth:190, */
    },
}

export default ProyecstInfo

