import React, { useState, useEffect, useContext} from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon/'
const AppContext = React.createContext()

const AppProvider= ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('')
    const [pkm, setPkm] = useState({})
    const [allNames, setAllNames] = useState([])

    const getNames = async () => {
        const urlResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898`)
        const data = await urlResponse.json()
        var arrayNames = data.results.map(el => { return el.name })
        setAllNames([arrayNames])
        console.log(allNames)
    }
    
    const fetchPkm = async () => {
        setLoading(true)
        try {
            const urlResponse = await fetch(`${url}${terminoDeBusqueda}`)
            const data = await urlResponse.json()
            console.log(data)
            if (data.hasOwnProperty('count')){
                setLoading(true)
            } else if (data) {
                const { name, sprites, types } = data                
                setPkm({
                    name,
                    img: sprites.other["official-artwork"].front_default,
                    types
                })
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {        
        fetchPkm()
    }, [terminoDeBusqueda])

    useEffect(() => {
        getNames()
    }, [])
        
    return <AppContext.Provider value={{
        loading, setTerminoDeBusqueda, pkm, allNames
    }}>{ children } </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}