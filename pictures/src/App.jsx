import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImage from './api'
import './App.css'

function App() {
  const [image, setImages] = useState([])

  const handleSubmit = async(term) => {
  console.log('Usted está buscando con :' , term)
  const result = await searchImage(term)
  setImages(result)}
  return (
    <div><h1>App</h1>
    <SearchBar onSubmit={handleSubmit}/>
    <ImageList images={image} />
    </div>
  )
} 
export default App
