// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();
// Open a GET request to data.csv file
xhr.open('GET', 'data.csv');
// Set the response type to text
xhr.responseType = 'text';
// When the request is loaded
xhr.onload = function() {
  // If the request is successful
  if (xhr.status === 200) {
    // Split the response text into an array of rows
    var rows = xhr.response.split('\n');
    // For each row starting at index 1
    for (var i = 1; i < rows.length - 1; i++) {
      // Split the row into an array of cells
      var cells = rows[i].split(',');
      // Create a new table row
      var tr = document.createElement('tr');
      // For each cell
      cells.forEach(function(cell, index) {
        // Create a new table cell
        var td = document.createElement('td');
        // If this is the first cell and there is a URL in the fourth cell
        if (index === 0 && cells[3]) {
          // Create a new hyperlink element
          var a = document.createElement('a');
          // Set the hyperlink's href attribute to the URL in the fourth cell
          a.href = cells[3] + "?aiworkcn.com";
          // Set the hyperlink's target attribute to "_blank" to open in a new tab
          a.target = "_blank";
          // Set the hyperlink's text to the cell value
          a.textContent = cell;
          // Append the hyperlink to the cell
          td.appendChild(a);
        } else {
          // Set the cell text to the cell value
          td.textContent = cell;
        }
        // Append the cell to the row
        tr.appendChild(td);
      });
      // Append the row to the table body
      document.querySelector('tbody').appendChild(tr);
    }
  }
};
// Send the request
xhr.send();
