import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {


    const onSearchValueChanged = (event) => {
        setSearchValue(event.target.value)
    }
    return (
        <>
            <input
                className="TodoSearch"
                placeholder="Cebolla"
                value={searchValue}
                onChange={onSearchValueChanged} />
        </>
    )
}

export { TodoSearch } 