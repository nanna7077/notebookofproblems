function workwithdata(data) {
    console.log(data);
};

$.getJSON("notebookofproblems/static/problemList.json", function(data) { workwithdata(data); });
