function workwithdata(data) {
    console.log(data);
};

$.getJSON("notebookofproblems/static/problemList.json", workwithdata(json));
