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
        <div className="Container">
            <div className="TextProyect">
                
                    {data.title}
                
            </div>
            <div className="Description">
                <p>
                    {data.longDescription}
                </p>
            </div>
            <div className="Container-phProyects">
                {
                    images.map((x,i)=>{
                        return(
                            <div key={i} >
                                <img   src={ require(`../util/images/${x}${imageFormat}`)} width={200}  />
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProyecstInfo

