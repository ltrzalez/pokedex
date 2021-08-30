import React, { useState, useEffect, useContext} from 'react'

const url = 'https://pokeapi.co/api/v2/pokemon/'
const AppContext = React.createContext()

const AppProvider= ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [terminoDeBusqueda, setTerminoDeBusqueda] = useState('150')
    const [pkm, setPkm] = useState({})

    const fetchPkm = async () => {
        setLoading(true)
        const urlResponse = await fetch(`${url}${terminoDeBusqueda}`)
        const data = await urlResponse.json()
        console.log(data)
        if(data){
            setPkm(data)
            setLoading(false)
        }else{
            console.log('no hay polkemon')
        }

    }

    useEffect(() => {
        fetchPkm()
    }, [terminoDeBusqueda])


    return <AppContext.Provider value={{
        loading, setTerminoDeBusqueda, pkm
    }}>{ children } </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}