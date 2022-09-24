import React from 'react'
import SingleElement from './SingleElement'

const Elements = ({searchedElements, elements, setElements, handleClick}) => {

    if (searchedElements === undefined) {
      return null
    }
    
    if (searchedElements.length === 0) {
      return <div className="h-48 flex min-w-full bg-pic01 bg-no-repeat bg-cover">
        <div className="m-auto">
        <p className="text-2xl font-bold text-white">There are no elements of that name</p>
        </div>
      </div>
    }
    
    if (searchedElements.length === 1) {
    return (
      <div>
        <SingleElement searchedElements={searchedElements} />
      </div>
    )
    }
    
    if (searchedElements.length >= 25) {
      return (
              <div>
              </div>
      )
    }
    
    return (
      <div className="h-screen flex min-w-full bg-pic01 bg-no-repeat bg-cover overflow-scroll">
        
      <div className="m-auto"><h2 className="text-5xl text-white text-center py-6">Results</h2><ul className="m-auto">{searchedElements.map(e => <li className="text-xl text-white" key={e.atomicNumber}>{e.name}<button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mx-4" onClick={() => handleClick(e)} >Show</button></li>)}</ul></div>
      </div>
    )
    
    }


export default Elements