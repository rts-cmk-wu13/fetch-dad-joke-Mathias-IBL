fetch("https://icanhazdadjoke.com",{
    headers: {
        "Accept": "application/json",
    }
})

.then(response => response.json()).then(function(data) {
    console.log(data);
    let jokeElm = document.querySelector(".joke")
    let listElm = document.createElement("p");
    listElm.classList.add("jokeText")
 
    listElm.innerHTML = `
        <p>${data.joke}</p>
    `
    jokeElm.appendChild(listElm);
})