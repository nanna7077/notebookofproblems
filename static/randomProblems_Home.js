function workwithdata(data) {
    var final_array=[];
    var x=Math.floor(Math.random() * data['problems'].length);
    final_array.push(data['problems'].pop(x));
    var x=Math.floor(Math.random() * data['problems'].length);
    final_array.push(data['problems'].pop(x));
    var x=Math.floor(Math.random() * data['problems'].length);
    final_array.push(data['problems'].pop(x));
    var x=Math.floor(Math.random() * data['problems'].length);
    final_array.push(data['problems'].pop(x));
    var x=Math.floor(Math.random() * data['problems'].length);
    final_array.push(data['problems'].pop(x));
    var container_ = document.getElementById("randomproblems");
    container_.innerHTML='';
    for (i in final_array) {
        container_.innerHTML += "<a href=\""+final_array[i]['link']+"\">"+final_array[i]['name']+"</a> - Difficultiy Level: "+final_array[i]['difficulty']+" - Language: "+final_array[i]['language']+" <br>";
    }
    
};

$.ajax({
    url: "static/problemList.json",
    success: function (data) {
    workwithdata(data);
    },
    error: function(data) {
        console.log("Couldn't fetch json");
    },
    dataType: "json",
    timeout: 3000});
