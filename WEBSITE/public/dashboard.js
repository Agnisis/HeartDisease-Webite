
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

    // Prepare data for the charts
    const data = [
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
    ];

    // Generate the charts
    generateBarChart(data);
    generateScatterPlot(data);
    generateBoxPlot(data);
    generateLineChart(data);
    generateRadarChart(data);
    generatePieChart(data);
    generatePolarAreaChart(data);
    generateDoughnutChart(data);
    generateBubbleChart(data);
  }

  function generateBarChart(data) {
    const labels = ['Age', 'Sex', 'Chest Pain Type', 'Resting Blood Pressure', 'Cholesterol', 'Fasting Blood Sugar', 'Resting Electrocardiographic Results', 'Maximum Heart Rate Achieved', 'Exercise Induced Angina', 'ST Depression Induced by Exercise', 'Slope of the Peak Exercise ST Segment', 'Number of Major Vessels (0-3) Colored by Fluoroscopy', 'Thalassemia'];

    const barData = {
      labels: labels,
      datasets: [{
        label: 'Data',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    const barConfig = {
      type: 'bar',
      data: barData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };

    const barCtx = document.getElementById('chart1').getContext('2d');
    new Chart(barCtx, barConfig);
  }

  function generateScatterPlot(data) {
    const scatterLabels = ['Age', 'Cholesterol'];

    const scatterData = {
      labels: scatterLabels,
      datasets: [{
        label: 'Scatter Plot',
        data: [{
          x: data[0],
          y: data[4]
        }],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 5
      }]
    };

    const scatterConfig = {
      type: 'scatter',
      data: scatterData,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Age'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Cholesterol'
            }
          }
        }
      }
    };

    const scatterCtx = document.getElementById('chart2').getContext('2d');
    new Chart(scatterCtx, scatterConfig);
  }

  function generateBoxPlot(data) {
    const boxLabels = ['Chest Pain Type', 'Maximum Heart Rate Achieved'];

    const boxData = [
      [data[2]],
      [data[7]]
    ];

    const boxConfig = {
      type: 'boxplot',
      data: {
        labels: boxLabels,
        datasets: [{
          label: 'Box Plot',
          data: boxData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      }
    };

    const boxCtx = document.getElementById('chart3').getContext('2d');
    new Chart(boxCtx, boxConfig);
  }

  function generateLineChart(data) {
    const lineLabels = ['Age', 'Cholesterol'];

    const lineData = {
      labels: lineLabels,
      datasets: [{
        label: 'Line Chart',
        data: [
          { x: data[0], y: data[4] },
          { x: data[1], y: data[5] },
          // Add more data points as needed
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    const lineConfig = {
      type: 'line',
      data: lineData,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Age'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Cholesterol'
            }
          }
        }
      }
    };

    const lineCtx = document.getElementById('chart4').getContext('2d');
    new Chart(lineCtx, lineConfig);
  }

  function generateRadarChart(data) {
    const radarLabels = ['Age', 'Cholesterol', 'Resting Blood Pressure', 'Maximum Heart Rate Achieved'];

    const radarData = {
      labels: radarLabels,
      datasets: [{
        label: 'Radar Chart',
        data: [data[0], data[4], data[3], data[7]],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    const radarConfig = {
      type: 'radar',
      data: radarData,
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    };

    const radarCtx = document.getElementById('chart5').getContext('2d');
    new Chart(radarCtx, radarConfig);
  }

  function generatePieChart(data) {
    const pieLabels = ['Age', 'Cholesterol', 'Resting Blood Pressure'];

    const pieData = {
      labels: pieLabels,
      datasets: [{
        label: 'Pie Chart',
        data: [data[0], data[4], data[3]],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 1
      }]
    };

    const pieConfig = {
      type: 'pie',
      data: pieData
    };

    const pieCtx = document.getElementById('chart6').getContext('2d');
    new Chart(pieCtx, pieConfig);
  }

  function generatePolarAreaChart(data) {
    const polarLabels = ['Age', 'Cholesterol', 'Resting Blood Pressure'];

    const polarData = {
      labels: polarLabels,
      datasets: [{
        label: 'Polar Area Chart',
        data: [data[0], data[4], data[3]],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 1
      }]
    };

    const polarConfig = {
      type: 'polarArea',
      data: polarData
    };

    const polarCtx = document.getElementById('chart7').getContext('2d');
    new Chart(polarCtx, polarConfig);
  }

  function generateDoughnutChart(data) {
    const doughnutLabels = ['Age', 'Cholesterol', 'Resting Blood Pressure'];

    const doughnutData = {
      labels: doughnutLabels,
      datasets: [{
        label: 'Doughnut Chart',
        data: [data[0], data[4], data[3]],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 205, 86, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)'
        ],
        borderWidth: 1
      }]
    };

    const doughnutConfig = {
      type: 'doughnut',
      data: doughnutData
    };

    const doughnutCtx = document.getElementById('chart8').getContext('2d');
    new Chart(doughnutCtx, doughnutConfig);
  }

  function generateBubbleChart(data) {
    const bubbleData = {
      datasets: [{
        label: 'Bubble Chart',
        data: [
          { x: data[0], y: data[4], r: data[7] },
          { x: data[1], y: data[5], r: data[8] },
          // Add more data points as needed
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    const bubbleConfig = {
      type: 'bubble',
      data: bubbleData,
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Age'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Cholesterol'
            }
          }
        }
      }
    };

    const bubbleCtx = document.getElementById('chart9').getContext('2d');
    new Chart(bubbleCtx, bubbleConfig);
  }

  // Add more chart generation functions for additional charts as needed
});
