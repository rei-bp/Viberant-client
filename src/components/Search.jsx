import { useState } from 'react'
import styled, { } from 'styled-components'

const Search = () => {
    // const [search, setSearch] = useState(')
    // const [location, setLocation] = useState('')




    return (
        <div>
            <form>
                <input
                    id='search-input'
                    type='search'
                    placeholder='Search'
                />
                <input
                    id='location-input'
                    type='location'
                    placeholder='Location'
                />
            </form>
        </div>
    )
    

}

export default Search