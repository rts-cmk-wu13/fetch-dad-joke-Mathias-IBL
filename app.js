fetch("https://icanhazdadjoke.com",{
    headers: {
        "Accept": "application/json",
    }
})

.then(response => response.json()).then(function(data) {
    console.log(data);
    let jokeDiv = document.querySelector(".joke")
    let divElm = document.createElement("div");
    divElm.classList.add("jokeText")
 
    divElm.innerHTML = `
        <p>${data.joke}</p>
    `
    jokeDiv.append(divElm);
})