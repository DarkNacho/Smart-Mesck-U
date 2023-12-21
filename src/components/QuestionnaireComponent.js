import React, { useEffect, useRef } from 'react';

const QuestionnaireComponent = ({ formDef, formId }) => {
  const formContainerRef = useRef(null);

  useEffect(() => {
    const formContainer = formContainerRef.current;
    const formOptions = {
      addCancelButton: false,
      addBackButton: false,
      formStatus: 'preview'
    };
    LForms.Util.addFormToPage(formDef, formContainer, formOptions);
  }, [formDef]);

  const showQR = () => {
    const formContainer = formContainerRef.current;
    const qr = LForms.Util.getFormFHIRData('QuestionnaireResponse', 'R4', formContainer)
    console.log(JSON.stringify(qr, null, 2));
    //TODO: Agregar el subject , es decir referencia al paciente correspondiente al formulario.
    //const qr = LForms.Util.getFormData(formContainer);
    //console.log(qr);
  };

  return (
    <div>
      <div ref={formContainerRef}></div>
      <button onClick={showQR}>Mostrar Respuestas</button>
    </div>
  );
};

export default QuestionnaireComponent;