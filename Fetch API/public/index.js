document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
  fetch('https://api.thingspeak.com/channels/2414963/feeds.json?results=8000')
    .then(response => response.json())
    .then(data => displayData(data.feeds))
    .catch(error => console.error('Error fetching data:', error));
}

function displayData(feeds) {
  const tableBody = document.querySelector('#data-table tbody');

  for (let i = feeds.length - 1; i >= Math.max(0, feeds.length - 10); i--) {
    const feed = feeds[i];
    const row = tableBody.insertRow(0);

    const timeCell = row.insertCell(0);
    timeCell.textContent = feed.created_at;

    const temperatureCell = row.insertCell(1);
    temperatureCell.textContent = feed.field1;

    const pressureCell = row.insertCell(2);
    pressureCell.textContent = feed.field2;
  }

  const averageTemperature = calculateAverage(feeds.map(feed => parseFloat(feed.field1)));
  const averagePressure = calculateAverage(feeds.map(feed => parseFloat(feed.field2)));

  const averageValuesDiv = document.getElementById('average-values');
  averageValuesDiv.innerHTML = `<p>Průměr teploty: ${averageTemperature.toFixed(2)} °C</p>
                                <p>Průměr tlaku: ${averagePressure.toFixed(2)} hPa</p>`;
}

function calculateAverage(values) {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}