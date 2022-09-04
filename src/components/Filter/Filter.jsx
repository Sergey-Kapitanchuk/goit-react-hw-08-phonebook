import React from "react";
import CSS from "./Filter.module.css";


const Filter = ({ setFilter }) => {
    const onChange = e => {
        setFilter(e.target.value.trim());
    }

    return (<label htmlFor="" className={CSS.filter}>
        Find contacts by name
        <input type="text" onChange={onChange} />
    </label>)
};

export default Filter;
