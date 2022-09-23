import {useState, useEffect } from 'react'
import axios from 'axios'
import Elements from './components/Elements'
import NameSearch from './components/NameSearch'
import NumberSearch from './components/NumberSearch'
import ElementsByNumber from './components/ElementsByNumber'
import './index.css'

const App = () =>  {
const [elements, setElements] = useState([])
const [newSearch, setNewSearch] = useState('')
const [newNumberSearch, setNewNumberSearch] = useState('')

const searchedElements = 
elements.filter(e => e.name.toLowerCase().includes(newSearch.toLowerCase()))

const searchedNumberElements =
elements.filter(e => e.atomicNumber == newNumberSearch)

const handleClick = (e) => {
 setElements([e])
  }
  
  useEffect(() => 
  {axios.get(`https://neelpatel05.pythonanywhere.com`)
  .then(response => {
    setElements(response.data)
  }).catch(error => {
    console.log(error);
})}, [])


  return (
    <div className="App">
      <div className="container min-w-full">
        <div className="flex h-screen bg-background bg-no-repeat bg-cover bg-center-left">
        <div className="m-auto">
       <h1 className="text-8xl text-white">Element Reference App</h1>
       </div>
       </div>
       <div className="flex items-center justify-around container h-96 bg-gradient-to-r from-green-800 min-w-full to-blue-900">
        
          <div className="text-center">
<NameSearch setNewSearch={setNewSearch} />
    </div>
    <div class="text-center">
<NumberSearch setNewNumberSearch={setNewNumberSearch} />
</div>
</div>
<Elements elements={elements} searchedElements={searchedElements} handleClick={handleClick} />
<ElementsByNumber searchedNumberElements={searchedNumberElements} handleClick={handleClick} />
</div>
    </div>
  );
}

export default App;
