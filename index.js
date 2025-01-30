
const apiUrl = 'https://my-json-server.typicode.com/janpadrta/api_article/';

function load_api() {
//     https://my-json-server.typicode.com/janpadrta/api_article

    fetch(apiUrl + 'Articles')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // console.log(data);

            createTableFromJSON(data);

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

async function createTableFromJSON(jsonData) {
    // Vytvoření tabulky
    let table = "<table border='1'><tr><th>User</th><th>Date</th><th>Title</th><th>Content</th></tr>";

    // // Přidání hlavičky tabulky
    // for (let key in jsonData[0]) {
    //     table += `<th>${key}</th>`;
    // }
    // table += "</tr>";

    // Přidání dat do tabulky
    for (const item of jsonData) {
        table += "<tr>";
        // for (let key in item) {
        //     table += `<td>${item[key]}</td>`;
        // }
        const email = await getUser(item['user_id']);

        table += `<td>${email}</td>`;
        table += `<td>${item['date']}</td>`;
        table += `<td>${item['title']}</td>`;
        table += `<td>${item['content']}</td>`;
        table += "</tr>";
    };

    table += "</table>";
    document.getElementById("tableDiv").innerHTML = table;
}

function getUser(id) {
    console.log(apiUrl + 'Users/' + id);
    fetch(apiUrl + 'Users/' + id)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            console.log("-------------------------------------")
            return data["email"];

        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
