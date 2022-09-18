import React, { useCallback, useState } from "react";

function Debounc() {
    const [suggestions, setSuggestions] = useState("");

    const handleChange = (value) => {
        // const url = `https://demo.dataverse.org/api/search?q=${value}`;
        // axios.get(url).then(res => setSuggestions(res.data.items))
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
            .then(res => res.json())
            .then(data => setSuggestions(data.data.items))
    }

    // console.log(suggestions);

    const debounce = (func) => {
        let timer;
        return function(...args) {
            const context = this;
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500)
        }
    }

    const optimseFn = useCallback(debounce(handleChange));

    return (
        <>
        <h2 style={{ textAlign: "center", color: 'whitesmoke' }}>Debouncing in React JS</h2>
        <input
            type="text"
            className="search"
            placeholder="Enter something here..."
            onChange={(e) => optimseFn(e.target.value)}
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
    );
}

export default Debounc;
