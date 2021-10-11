import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'

const FormikComponents = () => 
{

  const formValidator =
  ( values ) => 
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


    if( !values.sel )
    {
      errors.sel = "Requerido";
    }



  
    return errors;
  
  };

  const handleSubmit = ( values ) => console.log( values )



  return (
      
    <Formik 
        
      initialValues={{ name : "", lastName : "", email : "", sel : "" }}
      validate={ formValidator }
      onSubmit={ handleSubmit }
    >
        
      <Form>

        <label>Nombre : </label>
        <Field name="name"/>
        <ErrorMessage name="name"/>
        
        <br/>
        
        <label>Last Name : </label>
        <Field name="lastName"/>
        <ErrorMessage name="lastName"/>
        
        <br/>
        
        <label>Email : </label>
        <Field type="email" name="email"/>
        <ErrorMessage name="email"/>

        <br/>

        <label>Seleccion : </label>
        <Field  name="sel" as="select">
          <option></option>
          <option>uno</option>
          <option>dos</option>
          <option>tres</option>
        </Field>
        <ErrorMessage name="sel"/>

        <br/>
        
        <button type="submit">Enviar</button>

      </Form>
  

    </Formik>
  )
}

export default FormikComponents
