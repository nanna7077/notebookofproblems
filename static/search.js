function workwithdata(data) {
    var tbl = document.getElementById("searchtable");
    for (i in data['problems']){
        tbl.innerHTML+="<td>"+data["problems"][i]['title']+"</td><td>"+data["problems"][i]["difficulty"]+"</td><td>"+data["problems"][i]['language']+"</td><td><a href=\""+data["problems"][i]["contributorLink"]+"\">"+data["problems"][i]["contributorName"]+"</a></td>"
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
    timeout: 3000
    });