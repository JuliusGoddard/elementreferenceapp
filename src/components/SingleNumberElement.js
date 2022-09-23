import React from 'react'

const SingleNumberElement = ({searchedNumberElements}) => {
    const onBack = () => {
      window.location.reload()
    }


    if (searchedNumberElements === undefined) {
        return null
    }
      return (

        <div className="flex flex-col h-screen px-6 bg-pic01 bg-no-repeat bg-cover py-6">
          <div className="m-auto">
          <h2 className="text-5xl text-white py-6">{searchedNumberElements[0].name}&nbsp;&#40;{searchedNumberElements[0].symbol}&#41;</h2>
          </div>
          <div className="flex h-screen items-center justify-items-stretch">
          <table className="table-auto w-full uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-gray-700 px-6 py-6">
      <thead>
        <tr>
          <th className="py-3 px-6 text-2xl">Property</th>
          <th className="py-3 px-6 text-2xl">Value</th>
         
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">Atomic Number</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].atomicNumber}</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <td className="text-xl px-2 py-2">Atomic Mass</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].atomicMass}</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">Boiling Point in Celsius</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].boilingPoint - 273} </td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <td className="text-xl px-2 py-2">Density</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].density}</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">Bonding Type</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].bondingType}</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <td className="text-xl px-2 py-2">Electron Affinity</td>
          <td className="text-xl px-2 py-2" >{searchedNumberElements[0].electronAffinity}</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">Electronegativity</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].electronegativity}</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <td className="text-xl px-2 py-2">Group</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].groupBlock}</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">Ionization Energy</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].ionizationEnergy}</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <td className="text-xl px-2 py-2">Melting Point in Celsius</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].meltingPoint - 273}</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">State at Room Temperature</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].standardState}</td>
        </tr>
        <tr class="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <td className="text-xl px-2 py-2">van De Waal's Radius</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].vanDelWaalsRadius}</td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="text-xl px-2 py-2">Year Discovered</td>
          <td className="text-xl px-2 py-2">{searchedNumberElements[0].yearDiscovered}</td>
        </tr>
      </tbody>
    </table>
   
    </div>
    <button className="block text-white text-5xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2" onClick={onBack}>Go back</button>
        </div>
      )
    }

export default SingleNumberElement