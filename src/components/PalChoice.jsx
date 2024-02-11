/* eslint-disable react/prop-types */
import { useState } from "react"
import "../css/PalChoice.css"
import SearchButton from "./SearchButton"

function PalChoice ({ Pals, selectParent }) {

    const [searchInput, setSearchInput] = useState("")

    const handleInputChange = (e) => {
        setSearchInput(e.target.value)
    }
    const filteredPals = Pals.filter((Pal) =>
    Pal.name.toLowerCase().includes(searchInput.toLowerCase())
  );

    return (
        <>
            <SearchButton handleInputChange={handleInputChange}/>
            <div id="palChoiceContainer">
                {filteredPals.map((Pal, index) => (
                <div className="greyTemplate palContainer" key={index} onClick={() => selectParent(Pal)}>
                <img src={Pal.imgSrc} alt={Pal.name} />
                <p>{Pal.name}</p>
            </div>
                ))}

            </div>
        </>
    )
}

export default PalChoice