function changeImage() {
    const image = document.querySelector("#image");
    const url = prompt("please enter your image url !")
    const width = prompt("please enter your image width");
    const height = prompt("please enter your image height");
    const borderRadius = prompt("please enter your image border radius");
    const backgroundColor = prompt("please enter your background color");
    const padding = prompt("please enter your image padding");
    image.style.width = width + "px";
    image.style.height = height + "px";
    image.style.borderRadius = borderRadius + "px";
    image.style.backgroundColor = backgroundColor;
    image.style.padding = padding + "px";
    image.setAttribute("src", url)
}