import "../css/SelectParent.css"

function SelectParent () {
    return (
        <div id="selectParentContainer">
            <input type="radio" name="SelectPAL" id="parent1" />
            <label htmlFor="parent1" className="greyTemplate"> Select Parent</label>
            <span className="orange"> + </span>
            <input type="radio"  name="SelectPAL" id="parent2"/>
            <label htmlFor="parent2" className="greyTemplate">Select Parent</label>
            <span className="orange"> = </span>
            <label htmlFor="result" className="greyTemplate">Result</label>
        </div>
    )
}

export default SelectParent