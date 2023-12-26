import react from 'react'
import { useState } from 'react'
import ImageSearch from './componants/Image-search'
import ImageList from './componants/ImageList'

import './App.css'

function App() {
  const [img , setImg] = useState([]);
 

  return (
    <div>
        <ImageSearch setImg ={setImg}/>
        <ImageList img={img}/>
    </div>
  )
}

export default App


