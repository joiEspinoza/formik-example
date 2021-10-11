import { useFormik } from 'formik'
import React from 'react'

const useFormikExample = () => 
{
  
  const formik = useFormik({

    initialValues : 
    {
      name : "",
      lastName : "",
      email : ""
    },

    validate : ( values ) => 
    {
      const errors = {};

      if( !values.name )
      {
        errors.name = "Requerido";
      }
      else if( values.name.length < 5 )
      {
        errors.name = "nombre debe contener 5 caracteres o más"
      }

      if( !values.lastName )
      {
        errors.lastName = "Requerido";
      }
      else if( values.lastName.length < 5 )
      {
        errors.lastName = "apellido debe contener 5 caracteres o más"
      }

      if( !values.email )
      {
        errors.email = "Requerido";
      }

    
      return errors;
    },

    onSubmit : ( values ) => console.log( values )

  });


  return (
    
    <form onSubmit={ formik.handleSubmit } >

      <label>Nombre : </label>
      <input { ...formik.getFieldProps( "name" ) } />
      { ( formik.touched.name && formik.errors.name ) && <span>{ formik.errors.name }</span> }
      <br/>
      <label>Last Name : </label>
      <input { ...formik.getFieldProps( "lastName" ) } />
      { ( formik.touched.lastName && formik.errors.lastName ) && <span>{ formik.errors.lastName }</span> }
      <br/>
      <label>Email : </label>
      <input type="email" { ...formik.getFieldProps( "email" ) } />
      { ( formik.touched.email && formik.errors.email ) && <span>{ formik.errors.email }</span> }
      <br/>
      <button type="submit">Enviar</button>

    </form>
  )

}

export default useFormikExample
