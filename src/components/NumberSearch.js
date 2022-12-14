import React from 'react'

const NumberSearch = ({setNewNumberSearch}) => {
     
const handleChange = (event) => {
    setNewNumberSearch(event.target.value)
    }

return (
<div>
    <h2 className="text-white text-3xl py-6">Search Elements by Atomic Number</h2>
<input onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search element by atomic number"></input>
</div>
    )
}
export default NumberSearch