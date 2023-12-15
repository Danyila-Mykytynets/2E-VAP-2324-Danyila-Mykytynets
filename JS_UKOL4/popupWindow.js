class PopupWindow{
    constructor() {
        this.popup = document.createElement("div");
        this.popup.style="position: fixed; top: 10%; left:50%; transform: translateX(-50%);display: block;text-align: center; padding: 1em; width: fit-content; height: auto; margin-left: auto; margin-right: auto; border: 1px solid black; border-radius: 0.5em; background-color: antiquewhite; font-family: monospace; font-size: 2em; ";
        this.content = document.createElement("div");
        this.content.style = "color: black";
        this.popup.appendChild(this.content);
        let button = document.createElement("input");
        button.type = "button";
        button.value = "Close";
        button.style = "font-size: 1.5rem; background-color: lightgreen; border-radius: 0.5em; margin-top: 1em;";
        this.popup.appendChild(button);
        button.onclick = this.close.bind(this);
        this.close();
        document.body.appendChild(this.popup);
    }

    remove() {
        this.popup.remove();
    }

    close() {
        this.popup.style.display = "none";
    }

    show(object) {
        this.content.innerHTML = "";
        for (const key in object) {
            this.content.innerHTML += key + ": " + object[key] + "<br>";
        }
        this.popup.style.display = "block";
    }
}