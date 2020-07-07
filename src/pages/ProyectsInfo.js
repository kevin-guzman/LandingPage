import React ,{useState, useEffect} from 'react'
import '../styles/Container.css'

let ProyecstInfo = (props) => {
    /* const {data}= props.location
    const images = data.im
    const {imageFormat} = images */
    const [data, setData]= useState(props.location.data)
    const [images, setIma]= useState(props.location.data.im)
    const [imageFormat, setImageFormat]= useState(props.location.data.imageFormat)
    return(
        <div className="Container" style={{alignSelf:'center'}}  >
                <h1 style={{textAlign:'center', fontSize:40}} >
                    {data.title}
                </h1>
                <p>
                    {data.longDescription}
                </p>
                {
                    images.map((x,i)=>{
                        return(
                            <div key={i} style={{flexDirection:'row'}} >
                                <img   src={ require(`../util/images/${x}${imageFormat}`)} width={80} />
                            </div>
                            
                        )
                    })
                }
        </div>
    )
}

export default ProyecstInfo

