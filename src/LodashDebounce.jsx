import React, { useState } from 'react';
import {debounce} from 'lodash';

function LodashDebounce() {
    const [suggestions, setSuggestions] = useState("");

    const handleChange = debounce((value) => {
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
            .then(res => res.json())
            .then(data => setSuggestions(data.data.items))
    }, 500);

    return (
        <>
            <h2 style={{ textAlign: "center", color: 'whitesmoke' }}>Debouncing in React JS Lodash libraray</h2>
            <input
                type="text"
                className="search"
                placeholder="Enter something here..."
                onChange={(e) => handleChange(e.target.value)}
            />
            {
                suggestions.length > 0 && (
                <div className="autocomplete">
                    {
                        suggestions.map((el, i) => (
                            <div key={i} className="autocompleteItems">
                                <span>{el.name}</span>
                            </div>
                        ))
                    }
                </div>
            )
        }
        </>
    )
}

export default LodashDebounce;