import React from 'react'
import { useGlobalContext } from '../context'

const Pokemon = () => {
    const { pkm } = useGlobalContext()
    
    return (<section>
        <h1>{pkm.name}</h1>
        {pkm.types.map((el, index) => {
            return <p key={index} >{el.type.name}</p>
        })}
        <img src={pkm.img} alt="imagen not found" />
    </section>)
    

    
}

export default Pokemon