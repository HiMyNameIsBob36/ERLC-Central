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
      {"name":"Roles","id":"04"},
      {"name":"Roles","id":"05"},
      {"name":"Roles","id":"06"}
    ]
  }
}

// Stats
document.getElementById("uploads").textContent = data.stats.uploads;
document.getElementById("creators").textContent = data.stats.creators;
document.getElementById("favorites").textContent = data.stats.favorites;
document.getElementById("members").innerText = data.stats.members;
// Featured
document.getElementById("featured01").textContent = data.featured.id.01;
document.getElementById("featured02").textContent = data.featured.id.02;
// Trending
document.getElementById("trending01").textContent = data.trending.id.04;
document.getElementById("trending02").textContent = data.trending.id.05;

// Helper function to update a "Card" (Title, Link, Image)
function updateCard(elementId, item) {
    const container = document.getElementById(elementId);
    if (!container) return;

    // 1. Change the Title (Text)
    container.querySelector(".title").textContent = item.name;

    // 2. Change the Link (href)
    container.querySelector(".link").href = `https://url.com/${item.id}`;

    // 3. Change the Image (src)
    container.querySelector(".thumb").src = `https://url.com/image/${item.id}`;
}

// --- Execution ---

// Stats (Keeping your existing logic)
document.getElementById("uploads").textContent = data.stats.uploads;
document.getElementById("creators").textContent = data.stats.creators;

// Featured (Accessing the Array)
const featured = data.home.featured; 
updateCard("featured01", featured[0]); // First item (id: 01)
updateCard("featured02", featured[1]); // Second item (id: 02)

// Trending
const trending = data.home.trending;
updateCard("trending01", trending[0]); // First item (id: 04)
