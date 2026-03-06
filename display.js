fetch("data.json")
/*.then(res => res.json())
.then(data => {*/

document.querySelector("#uploads").textContent = data.stats.uploads;
document.querySelector("#creators").textContent = data.stats.creators;
document.querySelector("#favorites").textContent = data.stats.favorites;
document.querySelector("#members").textContent = data.stats.members;

});
