fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    // Process the fetched data
    console.log(data);

    // Call a function to display the data in the browser
    displayData(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

function displayData(data) {
  // Access the container element
  const container = document.getElementById("data-container");

  // Clear any existing content
  container.innerHTML = "";

  // Iterate over the data and create elements to display it
  data.forEach((item) => {
     const div = document.createElement("div");
     div.classList.add("item");

     const userId = document.createElement("h1");
     userId.textContent = item.userId;

     const id = document.createElement("h2");
    id.textContent = item.id;

     const heading = document.createElement("h3");
     heading.textContent = item.title;

     const paragraph = document.createElement("p");
     paragraph.textContent = item.body;



     // Append the heading and paragraph to the div
      div.appendChild(userId);
      div.appendChild(id);
     div.appendChild(heading);
     div.appendChild(paragraph);
    
     // Append the div to the container
     container.appendChild(div);
  });
}
