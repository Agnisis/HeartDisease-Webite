// Get a reference to the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form input values
  const age = document.querySelector('#age').value;
  const sex = document.querySelector('#sex').value;
  const cp = document.querySelector('#cp').value;
  const restbps = document.querySelector('#restbps').value;
  const chol = document.querySelector('#chol').value;
  const fbs = document.querySelector('#fbs').value;
  const restecg = document.querySelector('#restecg').value;
  const thalach = document.querySelector('#thalach').value;
  const exang = document.querySelector('#exang').value;
  const oldpeak = document.querySelector('#oldpeak').value;
  const slope = document.querySelector('#slope').value;
  const ca = document.querySelector('#ca').value;
  const thal = document.querySelector('#thal').value;

  // Create an object with the form data
  const formData = {
    age: parseInt(age),
    sex: parseInt(sex),
    cp: parseInt(cp),
    restbps: parseInt(restbps),
    chol: parseInt(chol),
    fbs: parseInt(fbs),
    restecg: parseInt(restecg),
    thalach: parseInt(thalach),
    exang: parseInt(exang),
    oldpeak: parseFloat(oldpeak),
    slope: parseInt(slope),
    ca: parseInt(ca),
    thal: parseInt(thal),
  };

  // Send the form data to the server using an HTTP POST request
  fetch('/prediction.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the server
      // You can display the prediction result or perform any other action here
      console.log(data);
      // Display the prediction result on the page
      const predictionResult = document.querySelector('#prediction_result');
      predictionResult.textContent = data.prediction_result;
    })
    .catch(error => {
      // Handle any error that occurred during the request
      console.error('Error:', error);
    });
});
