console.log('Loading home page')

const data = {
  "stats": {
    "uploads": "0",
    "creators": "0",
    "favorites": "0",
    "members": "1"
  },
  "home": {
    "featured": [
      {"name":"Discord Template","id":"01"},
      {"name":"Server Emojis","id":"02"},
      {"name":"Staff Training","id":"03"}
    ],
    "trending": [
      {"name":"NA","id":"04"},
      {"name":"NA","id":"05"},
      {"name":"NA","id":"06"}
    ]
  }
}


document.getElementById("uploads").textContent = data.stats.uploads;
document.getElementById("creators").textContent = data.stats.creators;
document.getElementById("favorites").textContent = data.stats.favorites;
document.getElementById("members").innerText = data.stats.members;

/*console.log('Loading home page');

fetch("https://erlccentral.netlify.app/data.json")
.then(response => response.json())
.then(data => {

document.getElementById("uploads").textContent = data.stats.uploads;
document.getElementById("creators").textContent = data.stats.creators;
document.getElementById("favorites").textContent = data.stats.favorites;
document.getElementById("members").textContent = data.stats.members;
})
.catch(error => console.error('Error fetching data:', error));*/


