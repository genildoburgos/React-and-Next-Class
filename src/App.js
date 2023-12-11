import React from 'react';
import Componentes from './Componentes/Component/Componentes.jsx';
import Count from './Componentes/Component/Count.jsx';
import NewCount from './Componentes/Component/new.jsx';
import IndexCss from './Componentes/Component/index.jsx';
import Form from './Componentes/form/index.jsx';
import { useState } from 'react';
import FormDataDisplay from './Componentes/formDataDisplay.jsx';

function App() {

  const [submittedData, setSubmittedData]= useState();

  const handleFormSubmit = (formData) =>{
    setSubmittedData(formData)
  }

  return (
    <div className="App">
        <Componentes />
        <Count valorInicial = {1} valor = {1}/>
        <NewCount  valorInicial = {10} valor = {10}/>
        <IndexCss />
        <Form onSubimit={handleFormSubmit}/>
        {submittedData && <FormDataDisplay formData={submittedData} /> }
        
    </div>
    
  );
}

export default App;
