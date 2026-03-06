/* fetch("data.json")
.then(res => res.json())
.then(data => {

document.querySelector("#uploads").textContent = data.stats.uploads;
document.querySelector("#creators").textContent = data.stats.creators;
document.querySelector("#favorites").textContent = data.stats.favorites;
document.querySelector("#members").textContent = data.stats.members;

document.getElementById("uploads").textContent = data.stats.uploads;

});*/
fetch("data.json")
  .then(res => {
    // Check if the response actually succeeded (e.g., 404 or 500 errors)
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
  })
  .then(data => {
    // Check if data.stats exists before accessing properties
    if (data.stats) {
      document.querySelector("#uploads").textContent = data.stats.uploads;
      document.querySelector("#creators").textContent = data.stats.creators;
      document.querySelector("#favorites").textContent = data.stats.favorites;
      document.querySelector("#members").textContent = data.stats.members;
    }
  })
  .catch(error => {
    console.error("Failed to load data:", error);
    // Optional: Show a message to the user on the UI
  });
