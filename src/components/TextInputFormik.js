import { useField } from 'formik'
import React from 'react'


const TextInputFormik = ({ label, ...rest }) => 
{
    const [ field, meta ] = useField( rest );

    return (
        
      <>
        <label>{label}</label>
        <input { ...field }/>  
        { ( meta.touched && meta.error ) && <span>{meta.error}</span> }
      </>
    )
}

export default TextInputFormik
