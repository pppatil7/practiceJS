let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";


const changeMode = () => {
    // console.log("this function is to change the mode");
    if (currMode === "light") {
        currMode = "dark";
        // document.querySelector("body").classList.add("dark");
        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currMode = "light";
        // document.querySelector("body").classList.add("white");
        body.classList.add("light");
        body.classList.remove("dark");

    }
    console.log(currMode);
};

modeBtn.addEventListener("click", changeMode);
