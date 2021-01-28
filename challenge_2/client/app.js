var form = document.getElementById('form');
form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  var data = event.currentTarget;
  try {
    var formData = new FormData(data);
  } catch (err) {
    console.error(err);
  }
  var rawData = Object.fromEntries(formData.entries())
  var jsonData = JSON.stringify(rawData);

  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "text/csv"
    },
    body: jsonData
  })
    .then((res) => {
      if (res.ok) {
        return res.blob();
      } else {
        throw new Error(`Server returned status: ${res.status} with error: ${res.statusText}`);
      }
      console.log(res);
    })
    .then((resBlob) => {
      return resBlob.text()
    })
    .then((blobText) => {
      var csvNode = document.createElement('span');
      var spacer = document.createElement('hr');
      csvNode.setAttribute('className', 'csv-data');
      csvNode.append(blobText);
      document.getElementById('csv').appendChild(spacer);
      document.getElementById('csv').appendChild(csvNode);
    })
    .catch((err) => {
      if (err) {
        console.error(err);
    }})
};
