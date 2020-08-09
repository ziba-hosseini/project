import React, { useState } from 'react';

const useDropdown = (label:string, defaultstate:any, options:string[]) => {
    const [dropItem, setDropItem] = useState(defaultstate);
     
    const Dropdownmaker = () => (
      <label htmlFor={label}>
        {label}
          <select
          id={label}
          value={dropItem}
          onChange={e=>setDropItem(e.target.value)}
          onBlur={e=>setDropItem(e.target.value)}
          disabled={!options.length}
            >
            <option>All</option>
            {options.map(item=>
            <option key={item} value={item}>{item}</option>)}
          </select>
    </label>
    );

    return [dropItem, Dropdownmaker, setDropItem]
    }        
    export {useDropdown}



