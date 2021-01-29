const filePicker = document.getElementById('file-picker');
filePicker.addEventListener('change', (event) => {
  const fileList = event.target.files;

  function readImage(file) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      var rawData = event.target.result;
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
        })
        .then(resBlob => resBlob.text())
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
    });
    reader.readAsDataURL(file);
  }
  readImage(fileList[0]);
});