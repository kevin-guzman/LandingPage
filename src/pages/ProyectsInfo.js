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
            <div className="Container-phProyects">
                {
                    images.map((x,i)=>{
                        return(
                            <div key={i} >
                                <img   src={ require(`../util/images/${x}${imageFormat}`)} style={{margin:5}} width={200}  />
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )    

}

export default ProyecstInfo

