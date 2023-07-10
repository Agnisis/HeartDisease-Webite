document.addEventListener('DOMContentLoaded', function() {
  const dataForm = document.getElementById('dataForm');
  dataForm.addEventListener('submit', handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    // Get the user input values
    const age = parseInt(document.getElementById('age').value);
    const sex = document.getElementById('sex').value;
    const cp = parseInt(document.getElementById('cp').value);
    const restbps = parseInt(document.getElementById('restbps').value);
    const chol = parseInt(document.getElementById('chol').value);
    const fbs = parseInt(document.getElementById('fbs').value);
    const restecg = parseInt(document.getElementById('restecg').value);
    const thalach = parseInt(document.getElementById('thalach').value);
    const exang = parseInt(document.getElementById('exang').value);
    const oldpeak = parseFloat(document.getElementById('oldpeak').value);
    const slope = parseInt(document.getElementById('slope').value);
    const ca = parseInt(document.getElementById('ca').value);
    const thal = parseInt(document.getElementById('thal').value);

    const data = {
      age,
      sex,
      cp,
      restbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal
    };

    // Send the data to the server
    fetch('/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Log the prediction result to the console
        console.log('Prediction:', result.prediction);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});
