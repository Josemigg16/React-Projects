import React from 'react'

const Filters = ({ filters, setFilters }) => {
    return (
        <div className='contenedor filtros sombra'>
            <form>
                <div className='campo'>
                    <label htmlFor="filter">Filter Expenses</label>
                    <select id="filter"
                        value={filters}
                        onChange={e => setFilters(e.target.value)}
                    >
                        <option value="">-- Select --</option>
                        <option value="saving"> Ahorro </option>
                        <option value="food"> Food </option>
                        <option value="home"> Home </option>
                        <option value="miscelaneus"> Miscelaneus </option>
                        <option value="leisure"> Ocio </option>
                        <option value="health"> Health </option>
                        <option value="suscriptions"> Suscriptions </option>
                    </select>
                </div>

            </form>

        </div>
    )
}

export default Filters