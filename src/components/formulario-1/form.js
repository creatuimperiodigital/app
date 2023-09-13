import React, { useState } from 'react';

function Formulario() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    pregunta1: '',
    pregunta2: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { nombre, email, pregunta1, pregunta2 } = formData;

  const form = (
    <div className="App">
      <h1>Formulario de Varios Pasos</h1>
      {step === 1 && (
        <div>
          <h2>Paso 1</h2>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={nombre} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleChange} />
          <button onClick={handleNextStep}>Siguiente</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Paso 2</h2>
          <label>Pregunta 1:</label>
          <input type="text" name="pregunta1" value={pregunta1} onChange={handleChange} />
          <label>Pregunta 2:</label>
          <input type="text" name="pregunta2" value={pregunta2} onChange={handleChange} />
          <button onClick={handlePrevStep}>Anterior</button>
          <button onClick={handleNextStep}>Siguiente</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Confirmación</h2>
          <p>Nombre: {nombre}</p>
          <p>Email: {email}</p>
          <p>Pregunta 1: {pregunta1}</p>
          <p>Pregunta 2: {pregunta2}</p>
          <button onClick={handlePrevStep}>Anterior</button>
          <button>Enviar</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="App">
      {form}
    </div>
  );
}

export default Formulario;