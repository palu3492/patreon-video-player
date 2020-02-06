
let xhr = new XMLHttpRequest();
let counterApiUrl = 'https://cors-anywhere.herokuapp.com/https://bit.ly/2CnMtft'; // https://www.simple-counter.com/hit.php?id=zvmnffc // 11-8-19 it was 7
function countImpression() {
    xhr.open("GET", counterApiUrl, true);
    xhr.setRequestHeader('Content-Type', 'text/html');
    xhr.setRequestHeader('x-requested-with', 'https://www.patreon.com');
    xhr.send();
}
