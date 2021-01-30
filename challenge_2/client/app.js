const filePicker = document.getElementById('file-picker');
filePicker.addEventListener('change', (event) => {
  const fileList = event.target.files;

  function readImage(file) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      var rawData = event.target.result;
      var jsonData = JSON.stringify(rawData);
      $.ajax({
        method: "POST",
        url: "http://localhost:3000/",
        data: jsonData
      })
        .done((res) => {
          console.log('res')
          console.log(res);
          var csvNode = document.createElement('span');
          var spacer = document.createElement('hr');
          csvNode.setAttribute('className', 'csv-data');
          csvNode.append(res);
          document.getElementById('csv').appendChild(spacer);
          document.getElementById('csv').appendChild(csvNode);
        })
    });
    reader.readAsDataURL(file);
  }
  readImage(fileList[0]);
});