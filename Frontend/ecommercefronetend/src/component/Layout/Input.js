import React from 'react'

/**
* @author
* @function 
**/

const Input = (props) => {
    return (
        <>
            <div className="form-group">
                <label >{props.label}</label>
                <input 
                type={props.text} 
                class="form-control" 
                 placeholder={props.placeholder}
                 value={props.value}
                 onChange={props.onChange} />
                
            </div>
        </>
    )

}

export default Input;