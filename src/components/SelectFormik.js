import { useField } from 'formik';
import React from 'react'

const SelectFormik = ({ label, ...rest }) => 
{
    const [ field, meta ] = useField( rest );


    return (
        
        <div>
           
           <label>{ label }</label>
           <select { ...field } { ...rest } />
           { ( meta.touched && meta.error ) && meta.error  } 
    
        </div>

           
    )
}

export default SelectFormik
