const wrapper = document.querySelector(".wrapper");
const HEIGHT = document.querySelector("body").offsetHeight;
const WIDTH = document.querySelector("body").offsetWidth;

const leftX = [54, 63];
const leftY = [18, 29];

const rightX = [6.5, 20];
const rightY = [16.5, 31.5];
// Origin -> the center of the png.
document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("mousemove", (e) =>{
        x = e.clientX / WIDTH;
        y = e.clientY / HEIGHT;
    
        coordLeftX = 63 - (x * 9);
        coordLeftY = (y * 11) + 18;

        coordRightX = 20 - (x * 13.5);
        coordRightY = (y * 15) + 16.5;
        moveLeftX(coordLeftX);
        moveLeftY(coordLeftY);

        moveRightX(coordRightX);
        moveRightY(coordRightY);
    })
})


function moveLeftX(coord)
{
    wrapper.style.setProperty(
        "--left-eye-x",
        `${coord}%`
    );
}

function moveLeftY(coord)
{
    wrapper.style.setProperty(
        "--left-eye-y",
        `${coord}%`
    );
}

function moveRightX(coord)
{
    wrapper.style.setProperty(
        "--right-eye-x",
        `${coord}%`
    );
}

function moveRightY(coord)
{
    wrapper.style.setProperty(
        "--right-eye-y",
        `${coord}%`
    );
}