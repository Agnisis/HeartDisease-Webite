import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import ChartComponent from './ChartComponent';

const FormComponent = () => {
  const initialFormData = {
    age: '',
    sex: '',
    cp: '',
    restbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: '',
  };

  const fields = [
    { label: 'Age', id: 'age', name: 'age', type: 'number', required: true },
    { label: 'Sex', id: 'sex', name: 'sex', type: 'text', required: true },
    { label: 'Chest Pain Type', id: 'cp', name: 'cp', type: 'number', required: true },
    { label: 'Resting Blood Pressure', id: 'restbps', name: 'restbps', type: 'number', required: true },
    { label: 'Cholesterol', id: 'chol', name: 'chol', type: 'number', required: true },
    { label: 'Fasting Blood Sugar', id: 'fbs', name: 'fbs', type: 'number', required: true },
    { label: 'Resting Electrocardiographic Results', id: 'restecg', name: 'restecg', type: 'number', required: true },
    { label: 'Maximum Heart Rate Achieved', id: 'thalach', name: 'thalach', type: 'number', required: true },
    { label: 'Exercise Induced Angina', id: 'exang', name: 'exang', type: 'number', required: true },
    { label: 'ST Depression Induced by Exercise', id: 'oldpeak', name: 'oldpeak', type: 'number', required: true },
    { label: 'Slope of the Peak Exercise ST Segment', id: 'slope', name: 'slope', type: 'number', required: true },
    { label: 'Number of Major Vessels (0-3) Colored by Fluoroscopy', id: 'ca', name: 'ca', type: 'number', required: true },
    { label: 'Thalassemia', id: 'thal', name: 'thal', type: 'number', required: true },
  ];
  

  const [formData, setFormData] = useState(initialFormData);
  const [prediction, setPrediction] = useState('');
  const [chartData, setChartData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await axios.post('/api/save-to-mongodb', formData);
      // console.log('Data saved successfully');

      // const response = await axios.post('/api/predict', formData);
      // setPrediction(response.data.prediction);

      // Set chartData to the form data
      setChartData(formData);
    } catch (error) {
      console.error('Error saving data or making prediction:', error);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        {/* Render form fields */}
        {fields.map((field) => (
          <div key={field.id} className="mb-4">
            <label className="block mb-2">{field.label}:</label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              required={field.required}
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Chart
        </button>
      </form>
      {chartData && <ChartComponent data={chartData} />}
      {/* {prediction && (
        <div className="mt-4">
          <p>Prediction Result: {prediction}</p>
        </div>
      )} */}
    </div>
  );
};

export default FormComponent;