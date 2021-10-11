import { useField } from 'formik';
import React from 'react'

const RadioFormik = ({ label, ...rest }) => 
{

    const [ field ] = useField( { ...rest, type : "radio" } );


    return (
        
        <div>
            <label>{label}</label>
            <input type="radio" { ...field } { ...rest }/>
        </div>
    )
}

export default RadioFormik
