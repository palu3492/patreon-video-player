
let xhr = new XMLHttpRequest();
let counterApiUrl = 'https://cors-anywhere.herokuapp.com/https://bit.ly/2NRJxgf';
function countImpression() {
    xhr.open("GET", counterApiUrl, true);
    xhr.setRequestHeader('Content-Type', 'text/html');
    xhr.setRequestHeader('x-requested-with', 'https://www.patreon.com');
    xhr.send();
}
