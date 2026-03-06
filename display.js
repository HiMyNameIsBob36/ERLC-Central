fetch("data.json")
.then(response => response.json())
.then(data => {

document.getElementById("uploads").textContent = data.stats.uploads;
})
.catch(error => console.error('Error fetching data:', error));

