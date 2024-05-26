import React from 'react'

const Search = () => {
  return (
    <div className='Search'>
      <input type="text" name='search' placeholder='Search...' autoComplete='off'/>
      <button>
        <img src="./images/search.svg" alt="" />
      </button>
    </div>
  )
}

export default Search
