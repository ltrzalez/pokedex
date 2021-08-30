import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading'

const Pokemon = () => {
    const { pkm, loading } = useGlobalContext()
    console.log(pkm.img)

    if(loading){
        return <Loading />
    }else {
        return (<section>
            <img src={pkm.img} alt="cargando imagen" />
            <p>{pkm.name}</p>
        </section>)
    }

    
}

export default Pokemon