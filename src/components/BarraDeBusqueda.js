import React from 'react'
import { useGlobalContext } from '../context'

const BarraDeBusqueda = _ => {
    const { setTerminoDeBusqueda } = useGlobalContext()
    const searchValue = React.useRef('')

    React.useEffect(() => {
        searchValue.current.focus()
    }, [])

    const searchPkm = () => {
        setTerminoDeBusqueda(searchValue.current.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>                
                    <label htmlFor="poke">Busca tu pokemon favorito! por nombre o numero</label>
                    <br/>
                    <input type="text" id="poke" ref={searchValue} onChange={searchPkm} />
            </form>
        </section>
    )
}

export default BarraDeBusqueda