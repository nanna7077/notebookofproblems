function loadJSON(callback) {
    var xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open('GET', '/static/problemList.json', true);
    xObj.onreadystatechange = function() {
        if (xObj.readyState === 4 && xObj.status === 200) {
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
  }

loadJSON(function(response) {
    var data = JSON.parse(response);
    console.log(data);
});