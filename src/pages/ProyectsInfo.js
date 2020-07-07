import React ,{useState} from 'react'
import '../styles/Container.css'

let ProyecstInfo = (props) => {
    let er = (props)=>{
        console.log("",props.location.data)
    }
    const [data, setData]= useState(props.location.data)
    
    return(
        <div className="Container" >
            <div className="Header" >
                <h1>
                    {data.title}
                </h1>
                <p>
                    {data.longDescription}
                </p>
                <p>
                </p>
            </div>
            
        </div>
    )
}

export default ProyecstInfo