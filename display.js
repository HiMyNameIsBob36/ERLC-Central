fetch("data.json")
.then(response => response.json())
.then(data => {

document.getElementById("uploads").textContent = data.stats.uploads;
document.getElementById("creators").textContent = data.stats.creators;
document.getElementById("favorites").textContent = data.stats.favorites;
document.getElementById("members").textContent = data.stats.members;
})
.catch(error => console.error('Error fetching data:', error));

