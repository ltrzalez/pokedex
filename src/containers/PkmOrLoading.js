import React from 'react'
import Pokemon from '../components/Pokemon'
// import Loading from '../components/Loading'
import { useGlobalContext } from '../context'

const PkmOrLoading = () => {
    const { loading } = useGlobalContext()

    return (<>
        <Pokemon />
    </>)
}

export default PkmOrLoading