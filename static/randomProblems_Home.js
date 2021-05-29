function workwithdata(data) {
    console.log(data);
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
