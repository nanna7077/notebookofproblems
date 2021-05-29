function workwithdata(data) {
    var data = JSON.parse();
    console.log(data);
};

fetch("/static/problemList.json").
then(response => {
    return response.json();
})
.then(data => workwithdata(data));
