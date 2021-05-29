function workwithdata(data) {
    console.log(data);
};

$.getJSON("/static/problemList.json", workwithdata(json));
