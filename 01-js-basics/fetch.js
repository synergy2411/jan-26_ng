// Day 02

window.onload = function () {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const btnFetch = document.querySelector("#btnFetch");
  const listContainer = document.querySelector("#listContainer");

  btnFetch.addEventListener("click", async function () {
    //   const response = await fetch(url, {
    //       method: "POST",
    //       body: JSON.stringify(),
    //       headers: {
    //           "Content-Type": "application/json",
    //           "Authorization" : "Bearer TOKEN_VALUE"
    //       }
    // });

    const response = await fetch(url);
    const result = await response.json();
    result.forEach((todo) => {
      const liElement = document.createElement("li");
      liElement.innerHTML = todo.title.toUpperCase();
      listContainer.appendChild(liElement);
    });
  });
};
