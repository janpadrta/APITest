function load_api() {
    console.log("AAAAAA")
//     my-json-server.typicode.com/user/repo/posts/1

    const apiUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            for (var i = 0; i < data.length; i++){p
                var obj = data[i];
                for (var key in obj){
                    var value = obj[key];
                    console.log("<br> - " + key + ": " + value);
                }
            }
            console.log(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
