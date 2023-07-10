const express = require('express');
const bodyParser = require('body-parser');
const { execSync } = require('child_process');
const { loadModel, preprocessData, predict } = require('./predictionUtils'); // Replace './predictionUtils' with the correct file path

const app = express();
const port = 3000;

// Load the model
const modelFilePath = './trained_model.sav';
const serializedModel = loadModel(modelFilePath);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route for the root path '/'
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html'); // Send the dashboard.html file
});

// Endpoint to handle the form submission
app.post('/predict', (req, res) => {
  // Get the user input data from the request body
  const data = req.body;

  // Preprocess the data
  const preprocessedData = preprocessData(data);

  // Deserialize the model
  const model = deserializeModel(serializedModel);

  // Make predictions using the model
  const prediction = predict(model, preprocessedData);

  // Log the prediction result to the console
  console.log('Prediction:', prediction);

  // Send a response back to the frontend
  res.json({ prediction: prediction });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Placeholder function to load the model
function loadModel(modelFilePath) {
  // Execute the Python script to load the model and get the serialized model as a string
  const command = `python -c "import pickle; model = pickle.load(open('${modelFilePath}', 'rb')); import json; import base64; serialized_model = base64.b64encode(pickle.dumps(model)).decode('utf-8'); print(serialized_model)"`;
  const stdout = execSync(command);

  // Get the serialized model as a string
  const serializedModel = stdout.toString().trim();

  return serializedModel;
}

// Placeholder function to preprocess the data
function preprocessData(data) {
  // Implement data preprocessing logic here
  // Perform any necessary transformations on the data
  // For example, convert categorical variables to numeric representations, handle missing values, scale the data, etc.
  // Return the preprocessed data

  // Sample placeholder logic to preprocess data (Replace with your own logic)
  const preprocessedData = {
    age: data.age,
    sex: data.sex === 'male' ? 1 : 0,
    cp: data.cp,
    restbps: data.restbps,
    chol: data.chol,
    fbs: data.fbs === 'true' ? 1 : 0,
    restecg: data.restecg,
    thalach: data.thalach,
    exang: data.exang === 'true' ? 1 : 0,
    oldpeak: data.oldpeak,
    slope: data.slope,
    ca: data.ca,
    thal: data.thal
  };

  return preprocessedData;
}

// Placeholder function to deserialize the model
function deserializeModel(serializedModel) {
  // Implement deserialization logic here based on the format of the serialized model
  // Deserialize the model and return it

  // Sample placeholder logic to deserialize model (Replace with your own logic)
  const deserializedModel = JSON.parse(Buffer.from(serializedModel, 'base64').toString('utf-8'));

  return deserializedModel;
}

// Placeholder function to make predictions
function predict(model, data) {
  // Implement prediction logic here using the deserialized model
  // Use the loaded model to make predictions on the preprocessed data
  // Return the prediction result

  // Sample placeholder logic to make predictions (Replace with your own logic)
  // Assuming the model is a Logistic Regression model with 'predict' function
  const prediction = model.predict([Object.values(data)]);

  return prediction;
}

// Load the model
const modelFilePath = './trained_model.sav';
const serializedModel = loadModel(modelFilePath);
const model = pickle.loads(Buffer.from(serializedModel, 'base64'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route for the root path '/'
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dashboard.html'); // Send the dashboard.html file
});

// Endpoint to handle the form submission
app.post('/predict', (req, res) => {
  // Get the user input data from the request body
  const data = req.body;

  // Preprocess the data
  const preprocessedData = preprocessData(data);

  // Make the prediction using the loaded model
  const prediction = predict(model, preprocessedData);

  // Log the prediction result to the console
  console.log('Prediction:', prediction);

  // Send the prediction result back to the frontend
  res.json({ prediction });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});