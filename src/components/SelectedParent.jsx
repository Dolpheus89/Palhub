import "../css/SelectedParent.css"
import { useState } from "react"

function SelectedParent () {

    const [parent, setParent] = useState(null)
    const handleParent = (parentID) => {
        setParent(parentID)
    }
    console.log(parent);


    return (
        <div id="selectedParentContainer">
            <input type="radio" name="SelectPAL" id="parent1" onClick={() => handleParent('parent1')} />
            <label htmlFor="parent1" className="greyTemplate"> Select Parent</label>
            <span className="orange"> + </span>
            <input type="radio"  name="SelectPAL" id="parent2" onClick={() => handleParent('parent2')}/>
            <label htmlFor="parent2" className="greyTemplate">Select Parent</label>
            <span className="orange"> = </span>
            <label htmlFor="result" className="greyTemplate" id="result">Result</label>
        </div>
    )
}

export default SelectedParent