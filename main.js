var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000');
request.responseType = 'text';
request.onload = function () {
    alert(request.response);
};
request.send();

fetch('http://localhost:3000').then(
        function (response) {
            response.text().then(
                function (text) {
                    alert(text);
                });
        }