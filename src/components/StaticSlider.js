import React from "react";

function StaticSlider(props) {
    const handleChange = (event) => {
        if (props.onChange) {
            props.onChange(event);
        }
    };

    return (
        <div>
            <input 
                type="range" 
                min="1" 
                max="10" 
                step="1" 
                id="volume" 
                onChange={handleChange} 
                value={props.current}
            />
            <label htmlFor="volume">Volume</label>
        </div>
    );
}

export default StaticSlider;
