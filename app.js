const api = {
    key: "208b184d34cc6f952244ba9e7e39f035",
    baseUrl: "https://openweathermap.org/data/2.5"
}

let input = document.querySelector("input");
input.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(input.value);
        console.log(input.value)
    }
}


function getResults(query) {
    fetch(`${api.base}weather?q=${query}&units=`)
}

