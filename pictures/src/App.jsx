import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from 'components/ImageList'
import SearchImage from './api'
import './App.css'

function App() {
  const [Image, setImages] = useState([])

  const handleSubmit = async(term) => {
    console.log('Usted está buscando con :' , term)
  }
  return (
    <div><h1>App</h1>
    <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
} 
export default App
