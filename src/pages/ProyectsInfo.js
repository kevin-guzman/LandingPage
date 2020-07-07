import React ,{useState, useEffect} from 'react'
import '../styles/Container.css'

let ProyecstInfo = (props) => {
    /* const {data}= props.location
    const {im} = data */
    const [data, setData]= useState(props.location.data)
    const [ima, setIma]= useState(props.location.data.im)
    /* useEffect(()=>{
        setData(data)
    },[]) */
    let er = (ima)=>{
        //let images = Object.values(ima)
        //let images = Object.entries(ima)
        let images = ima
        images.map((x,i)=>{
            return(
                <div key={i} >
                    <img   src={ require(`../util/images/${x}.png`)} width={80} />

                </div>
                
            )
            //console.log(`../util/images/${x}.png`)
        })

        //images[0].map((x)=>{console.log("Values:"+x)})
        //ima.map()
    }
    
    
    return(
        <div className="Container" style={{alignSelf:'center'}}  >
                <h1 style={{textAlign:'center', fontSize:40}} >
                    {data.title}
                </h1>
                <p>
                    {data.longDescription}
                </p>
                {
                    ima.map((x,i)=>{
                        return(
                            <div key={i} className="Container-Body" >
                                <img   src={ require(`../util/images/${x}`)} width={80} />
                            </div>
                            
                        )
                        //console.log(`../util/images/${x}.png`)
                    })
                }
        </div>
    )
}

export default ProyecstInfo

