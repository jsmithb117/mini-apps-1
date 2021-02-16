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
        url: "http://localhost:4000/",
        data: jsonData
      })
        .done((res) => {
          var atBreaks = res.split('\n');
          var randomNumber = Math.floor(Math.random() * 10000);
          var fileName = `csvData${randomNumber}.csv`;
          var csvNode = document.createElement('span');
          var spacer = document.createElement('hr');
          csvNode.setAttribute('className', 'csv-data');
          // csvNode.append(res);
          atBreaks.forEach((line) => {
            var newLine = document.createElement('div');
            newLine.innerHTML = line;
            csvNode.append(newLine);

          })
          document.getElementById('csv').appendChild(spacer);
          document.getElementById('csv').appendChild(csvNode);
          var downloadLink = document.createElement('a');
          downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(res));
          downloadLink.setAttribute('download', fileName);
          downloadLink.innerHTML = 'Download this csv file here.'
          csvNode.append(downloadLink);
        });
    });
    reader.readAsDataURL(file);
  }
  readImage(fileList[0]);
});