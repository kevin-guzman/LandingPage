import React, { useState, useEffect } from 'react'
import Cards from '../components/Card'
import ProyectsList from '../data/Proyects.json' 
import Loading from '../pages/Loading'
import useInterval from '../useInterval'

let Proyects = (props) => {
    const [isLoading, setIsLoading]= useState(true)
    /* useEffect (()=>{
        setIsLoading(false)
    },[]) */
    useInterval(()=>{
        setIsLoading(false)
    },100)
    
    if(isLoading){
        return <Loading></Loading>
    }else{
        return (
            <Cards
                Proyects={ProyectsList}
                //ProyectsType='movil'
            />
        )
    }
}

export default Proyects