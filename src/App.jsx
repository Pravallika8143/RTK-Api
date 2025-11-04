import React from 'react'
import { Recipes } from './features/recipes/Recipes.jsx';


function App() {
  return (
    <div className='border border-2 border-dark p-2 m-4'>
      <h1>RTK-Recipes</h1>
      <Recipes></Recipes>
    </div>
  )
}

export default App;