import React from 'react'
import SingleNumberElement from './SingleNumberElement'

const ElementsByNumber = ({searchedNumberElements, handleClick}) => {
    
    if (searchedNumberElements === undefined) {
        return null
      }
      
      if (searchedNumberElements.length === 0) {
        return null
      }
      
      if (searchedNumberElements.length === 1) {
      return (
        <div>
          <SingleNumberElement searchedNumberElements={searchedNumberElements} />
        </div>
      )
      }
      

      
      return (
        <ul>{searchedNumberElements.map(e => <li key={e.atomicNumber}>{e.name}<button onClick={() => handleClick(e)} >Show</button></li>)}</ul>
      )
      
      }


export default ElementsByNumber