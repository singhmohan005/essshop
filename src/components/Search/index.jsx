import { useState } from "react";
import { SearchIcon } from "../Icons";
import Dropdown from "../DropDown/indx";


const Search = () => {
    const [inputValue, setInputValue] = useState();

    const handleInput = (value) => {
        setInputValue(value)
    }

    const optionsList = ["watches", "dress", "electronics"]
    

    return(
        <div className="border border-gray-300 rounded-lg shadow-sm flex justify-start h-12 items-stretch">
            <input 
            value={inputValue}
            onChange={(e) => {handleInput(e.target.value)}}
            type="text"
            placeholder="Search"
            className="w-full p-2 focus:outline-none placeholder-gray-400 rounded-lg"
            />
            <Dropdown title="options" list={optionsList}/>
            <div className="bg-blue-400 w-9 h-full p-2 rounded-tr-lg rounded-br-lg">
                <SearchIcon />  
            </div>
        </div>
    )
}

export default Search;