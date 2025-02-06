fetch("https://icanhazdadjoke.com",{
    headers: {
        "Accept": "application/json",
    }
})

.then(response => response.json()).then(function(data) {
    // console.log(data);
    let jokeDiv = document.querySelector(".joke")
    let pElm = document.createElement("p");
    pElm.classList.add("jokeText")
 
    pElm.innerHTML = `
        <p>${data.joke}</p>
    `
    jokeDiv.append(pElm);
})