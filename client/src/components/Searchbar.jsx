/* eslint-disable react/prop-types */
import "../styles/Searchbar.css";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar = ( {searchText, setSearchText} ) => {
    return (
    <div className="search-bar">
        <div className="search-icon-container">
            <IoSearchOutline size={28} color="b6b6b6"/>
        </div>
        <input 
            className="search-input"
            type="text"
            placeholder="Search Article"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
    </div>
    )
};

export default Searchbar;