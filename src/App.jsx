import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import SelectedParent from './components/SelectedParent'
import PalChoice from "./components/PalChoice"
import PalsTab from "../data.json"

function App() {
  const Pals = PalsTab.Pals
  const [parent1, setParent1] = useState(null)
  const [parent2, setParent2] = useState(null)
  const [selectedParent, setSelectedParent] = useState('parent1')
  
  
  const handleParent = (parentID) => {
      setSelectedParent(parentID)
  }


  const handleSelectParent = (pal) => {
    if (selectedParent === 'parent1') {
      setParent1(pal.name);
    } else if (selectedParent === 'parent2') {
      setParent2(pal.name);
    }
  };



  return (
    <>
      < Header />
      <main>
        <SelectedParent Pals={Pals} parent1={parent1} parent2={parent2} handleParent={handleParent}/>
        <PalChoice Pals={Pals} selectParent={handleSelectParent}/>
      </main>
    </>
  )
}

export default App
