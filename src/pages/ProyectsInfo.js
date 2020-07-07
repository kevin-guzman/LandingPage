import React ,{useState} from 'react'

let ProyecstInfo = (props) => {
    let er = (props)=>{
        console.log("",props.location.data)
    }
    const [data, setData]= useState(props.location.data)
    
    return(
        <div>
            <p>
                {data.title}
            </p>
            <p>
                {data.longDescription}
            </p>
            <p>
                
            </p>
        </div>
    )
}

export default ProyecstInfo