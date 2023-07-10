import pickle
import numpy as np
from flask import Flask, render_template, request

app = Flask(__name__)
app.template_folder = 'templates'

# Load the pre-trained model from the pickle file
with open('trained_model.sav', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/profile.html')
def profile():
    return render_template('profile.html')

@app.route('/dashboard.html')
def dashboard():
    return render_template('dashboard.html')

@app.route('/prediction.html', methods=['GET', 'POST'])
def prediction():
    if request.method == 'POST':
        # Process the data received from the frontend
        age = int(request.form['age'])
        sex = int(request.form['sex'])
        cp = int(request.form['cp'])
        restbps = int(request.form['restbps'])
        chol = int(request.form['chol'])
        fbs = int(request.form['fbs'])
        restecg = int(request.form['restecg'])
        thalach = int(request.form['thalach'])
        exang = int(request.form['exang'])
        oldpeak = float(request.form['oldpeak'])
        slope = int(request.form['slope'])
        ca = int(request.form['ca'])
        thal = int(request.form['thal'])

        # Create an object with the form data
        formData = {
            'age': age,
            'sex': sex,
            'cp': cp,
            'restbps': restbps,
            'chol': chol,
            'fbs': fbs,
            'restecg': restecg,
            'thalach': thalach,
            'exang': exang,
            'oldpeak': oldpeak,
            'slope': slope,
            'ca': ca,
            'thal': thal
        }

        # Call the pre-trained model to make predictions
        prediction_result = make_prediction(formData)

        # Pass the prediction result to the frontend
        return render_template('prediction.html', prediction_result=prediction_result)

    # Render the prediction form page for GET requests
    return render_template('prediction.html')


@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/contact.html')
def contact():
    return render_template('contact.html')

# Function to make the prediction using your pre-trained model
def make_prediction(input_data):
    # Extract the input data fields
    age = int(input_data['age'])
    sex = int(input_data['sex'])
    cp = int(input_data['cp'])
    restbps = int(input_data['restbps'])
    chol = int(input_data['chol'])
    fbs = int(input_data['fbs'])
    restecg = int(input_data['restecg'])
    thalach = int(input_data['thalach'])
    exang = int(input_data['exang'])
    oldpeak = float(input_data['oldpeak'])
    slope = int(input_data['slope'])
    ca = int(input_data['ca'])
    thal = int(input_data['thal'])

    # Create an object with the form data
    formData = {
        'age': age,
        'sex': sex,
        'cp': cp,
        'restbps': restbps,
        'chol': chol,
        'fbs': fbs,
        'restecg': restecg,
        'thalach': thalach,
        'exang': exang,
        'oldpeak': oldpeak,
        'slope': slope,
        'ca': ca,
        'thal': thal
    }

    # Preprocess the input data if necessary
    processed_data = preprocess_input(input_data)

    # Convert processed_data to a NumPy array
    processed_data = np.array([processed_data])

    # Use the loaded model to make predictions
    prediction_result = model.predict(processed_data)

    # Postprocess the prediction result if necessary
    postprocessed_result = postprocess_prediction(prediction_result)

    return postprocessed_result

# Function to preprocess the input data
def preprocess_input(input_data):
    # Extract the values from the input dictionary
    age = int(input_data['age'])
    sex = int(input_data['sex'])
    cp = int(input_data['cp'])
    restbps = int(input_data['restbps'])
    chol = int(input_data['chol'])
    fbs = int(input_data['fbs'])
    restecg = int(input_data['restecg'])
    thalach = int(input_data['thalach'])
    exang = int(input_data['exang'])
    oldpeak = float(input_data['oldpeak'])
    slope = int(input_data['slope'])
    ca = int(input_data['ca'])
    thal = int(input_data['thal'])

    # Preprocess the data as needed
    # Convert it to the expected format for your model
    # ...

    # Create a processed data dictionary
    processed_data = {
        'age': age,
        'sex': sex,
        'cp': cp,
        'restbps': restbps,
        'chol': chol,
        'fbs': fbs,
        'restecg': restecg,
        'thalach': thalach,
        'exang': exang,
        'oldpeak': oldpeak,
        'slope': slope,
        'ca': ca,
        'thal': thal
    }

    # Return the processed data
    return processed_data
# Function to postprocess the prediction result
def postprocess_prediction(prediction_result):
    # Add your code here to postprocess the prediction result
    # Convert it to a human-readable format or apply any necessary transformations
    # ...

    # For demonstration purposes, we'll assume the prediction is a single value
    # and we'll round it to two decimal places
    postprocessed_result = round(prediction_result[0], 2)

    # Return the postprocessed result
    return postprocessed_result

if __name__ == '__main__':
    app.run(debug=True)
