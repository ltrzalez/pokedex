import React from 'react'
import { useGlobalContext } from '../context'

const BarraDeBusqueda = _ => {
    const { setTerminoDeBusqueda, allNames } = useGlobalContext()
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
                    <input list="pokes" name="poke" id="poke" ref={searchValue} onChange={searchPkm} />
                    <datalist id="pokes" >
                        {allNames.map((value, index)=>
                            { return <option key={index} value={value} />}
                        )}
                        {/* TODO: fix to show multiple option not one with all names */}
                    </datalist>
            </form>
        </section>
    )
}

export default BarraDeBusqueda