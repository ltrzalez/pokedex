import React from 'react'
import BarraDeBusqueda from '../components/BarraDeBusqueda'
import PkmOrLoading from '../containers/PkmOrLoading'


const Home = _ => {
    return (
        <main>
            <BarraDeBusqueda />
            <PkmOrLoading />
        </main>
    )
}

export default Home