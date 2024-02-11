/* eslint-disable react/prop-types */
import "../css/SelectedParent.css"
import rows from "../../Pals.json"

function SelectedParent ( { Pals, parent1,parent2, handleParent}) {

    let selectedPal1 =  Pals.find(pal => pal.name === parent1)
    let selectedPal2 =  Pals.find(pal => pal.name === parent2)

    let entry = rows.rows.find(x => x.search === parent1);
    let parent2Value = entry ? entry[(parent2 || "").replace(" ","_")] : null;

    let selectedPal3 = Pals.find(pal => pal.name === parent2Value)


    console.log(parent2Value);



    return (
        <div id="selectedParentContainer">
            <input type="radio" name="SelectPAL" id="parent1" onClick={() => handleParent('parent1')} defaultChecked />
            <label htmlFor="parent1" className="greyTemplate">
                {parent1 === null ?
                <p>Click Here & <br/> Select Parent</p> : 
                <>
                <img src={selectedPal1.imgSrc} alt={selectedPal1.name} />
                <p>{selectedPal1.name}</p>
                </>}
            </label>
            <span className="orange"> + </span>
            <input type="radio"  name="SelectPAL" id="parent2" onClick={() => handleParent('parent2')}/>
            <label htmlFor="parent2" className="greyTemplate">
                {parent2 === null ?
                <p>Click Here & <br/> Select Parent</p> : 
                <>
                <img src={selectedPal2.imgSrc} alt={selectedPal2.name} />
                <p>{selectedPal2.name}</p>
                </>}
                
            </label>
            <span className="orange"> = </span>
            <label htmlFor="result" className="greyTemplate" id="result">
            {parent2Value !== null && selectedPal1 && selectedPal2 && selectedPal3 ?
        <>
            <img src={selectedPal3.imgSrc} alt={selectedPal3.name} />
            <p>{selectedPal3.name}</p>
        </>
        :
        "Result"
    }
            </label>
        </div>
    )
}

export default SelectedParent