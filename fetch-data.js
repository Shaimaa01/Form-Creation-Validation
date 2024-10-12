async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  let dataContainer = document.getElementById("api-data");

  try {
    let response = await fetch(apiUrl);
    let users = await response.json();
    dataContainer.innerHTML = "";

    let userList = document.createElement("ul");
    users.forEach((ele) => {
      let li = document.createElement("li");
      li.textContent = ele.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch {
    dataContainer.innerHTML = "";
    dataContainer.innerHTML = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
