import React from 'react';
import './linkForm.css'

const LinkForm = () => {
    return (
 
         <form className="form">
         <input type="text" name="link" placeholder="shorten a link here..."/>
         <button className="formButton">shorten it!</button>
        </form>
    )
}

export default LinkForm;