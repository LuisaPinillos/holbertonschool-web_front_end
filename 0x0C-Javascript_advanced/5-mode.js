// Changing DOM with closure

function changeMode(size, weight, transform, background, color) {
    return function () {
        const body = document.querySelector("body");
        body.style.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    };
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    //select the body element
    const body = document.querySelector("body");
    // craete a p element
    const p = document.createElement("p");
    // innertext represents the text like the user will see it
    p.innerText = "Welcome Holberton!";
    //Later the create the element, it's added to body
    body.appendChild(p);

    //create and added to body buttons
    const button = document.createElement("button")
    button.innerText = "Spooky";
    body.appendChild(button);

    const buttonDark = document.createElement("button")
    buttonDark.innerText = "Dark mode";
    body.appendChild(buttonDark);

    const buttonScream = document.createElement("button")
    buttonScream.innerText = "Scream mode";
    body.appendChild(buttonScream);

    // When clicking on each button, the page CSS should change to
    //the different themes created previously.
    button.onclick = spooky;
    buttonDark.onclick = darkMode;
    buttonScream.onclick = screamMode;
}
main();
