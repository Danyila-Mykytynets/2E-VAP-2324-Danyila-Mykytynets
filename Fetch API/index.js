fetch('https://api.thingspeak.com/channels/2414963/feeds.json?results=8000')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var feeds = data.feeds;
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');

    var lastTenFeeds = feeds.slice(-10);
    lastTenFeeds.forEach(function(feed) {
      var row = document.createElement('tr');
      var temperatureCell = document.createElement('td');
      var pressureCell = document.createElement('td');
      temperatureCell.textContent = feed.field1;
      pressureCell.textContent = feed.field2;
      row.appendChild(temperatureCell);
      row.appendChild(pressureCell);
      tbody.appendChild(row);
    });

    var sumTemperature = feeds.reduce(function(acc, feed) {
      return acc + parseFloat(feed.field1);
    }, 0);
    var averageTemperature = sumTemperature / feeds.length;

    var sumPressure = feeds.reduce(function(acc, feed) {
      return acc + parseFloat(feed.field2);
    }, 0);
    var averagePressure = sumPressure / feeds.length;

    var averageRow = document.createElement('tr');
    var averageTemperatureCell = document.createElement('td');
    var averagePressureCell = document.createElement('td');
    averageTemperatureCell.textContent = 'Průměr teploty: ' + averageTemperature.toFixed(2);
    averagePressureCell.textContent = 'Průměr tlaku: ' + averagePressure.toFixed(2);
    averageRow.appendChild(averageTemperatureCell);
    averageRow.appendChild(averagePressureCell);
    tbody.appendChild(averageRow);

    table.appendChild(tbody);
    document.body.appendChild(table);
  })
  .catch(function(error) {
    console.log('Nastala chyba při načítání dat: ', error);
  });