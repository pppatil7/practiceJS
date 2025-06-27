let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
    console.log(e);
    console.log(e.type);
    // console.log("btn1 was  handler1");
};

// btn1.onclick = () => {
//     console.log("btn1 was clicked handler2");
// };

const handler3 = (e) => {
    console.log("btn1 was clicked handler 3");
};

btn1.addEventListener("click", (e) => {
    console.log("btn1 was clicked handler 1");
});

btn1.addEventListener("click", (e) => {
    console.log("btn1 was clicked handler 2");
});

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", (e) => {
    console.log("btn1 was clicked handler 4");
});

btn1.removeEventListener("click", handler3);

