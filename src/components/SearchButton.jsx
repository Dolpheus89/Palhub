/* eslint-disable react/prop-types */
import "../css/SearchButton.css"

function SearchButton ({ handleInputChange }) {
    
    return (
        <div id="searchContainer">
            <label htmlFor="search">Search for Pal :</label>
            <input type="text" className="greyTemplate" id="search" placeholder="enter name" onChange={handleInputChange}/>
        </div>
    )
}

export default SearchButton