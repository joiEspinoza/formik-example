import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react'
import CheckBoxFormik from './components/CheckBoxFormik';
import RadioFormik from './components/RadioFormik';
import SelectFormik from './components/SelectFormik';
import TextInputFormik from './components/TextInputFormik';


const FormikCustomisado = () => 
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


      if( !values.radioTest )
      {
        errors.radioTest = "Requerido";
      }
    
      return errors;
    
    };

    const handleSubmit = ( values ) => console.log( values )
 


    return (
        
        <Formik 
            
            initialValues={{ name : "", lastName : "", email : "", sel : "", politica : false, radioTest : "" }}
            validate={ formValidator }
            onSubmit={ handleSubmit }
        >
            
            <Form>

                <TextInputFormik name={ "name" } label={ "Nombre : " }  />
                
                <br/>

                <TextInputFormik name={ "lastName" } label={ "Apellido : " }  />
                
                <br/>
                
                <TextInputFormik type="email" name={ "email" } label={ "Email : " }  />
                
                <br/>

                <SelectFormik name={ "sel" }  label={ "Seleccion : " }>
                    <option></option>
                    <option>uno</option>
                    <option>dos</option>
                    <option>tres</option>
                </SelectFormik>

                <br/>

                <CheckBoxFormik name="politica">
                    Aceeptar usos y condiciones
                </CheckBoxFormik>

                <br/>

                <RadioFormik name={ "radioTest" } label={ "Uno : " } value={ "opcionUno" } />
                <RadioFormik name={ "radioTest" } label={ "Dos : " } value={ "opcionDos" } />
                <RadioFormik name={ "radioTest" } label={ "Tres : " } value={ "opcionTres" } />
                <ErrorMessage name={ "radioTest"  }/>

                <br/>
                
                <button type="submit">Enviar</button>

            </Form>
     

        </Formik>
    )
}

export default FormikCustomisado
