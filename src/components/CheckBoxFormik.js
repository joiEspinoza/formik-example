import { useField } from 'formik';
import React from 'react'

const CheckBoxFormik = ({ children, ...rest }) => 
{

    const [ field, meta ] = useField( { ...rest, type : "checkbox" } );


    return (
        
        <div>
            <label>
                <input type="checkbox" { ...field } { ...rest }/>
                { children }
            </label>

            <div>
               
               { ( meta.touched && meta.error ) && meta.error  } 
            
            </div>
            
        </div>
    )
}

export default CheckBoxFormik
