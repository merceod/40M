const onClick = (event) => {
    console.log("Button Click");
    window.open("http://localhost:1234/index2.html", "_blank"); /* http://localhost:1234/index2.html file:///Users/atindrajha/Downloads/html/index2.html*/
};

const main = () => {
    let btn = document.querySelector("#week1");
    btn.addEventListener("click", onClick);
};

main();