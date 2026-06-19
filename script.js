
// const leftX = [54, 63];
// const leftY = [18, 29];

// const rightX = [6.5, 20];
// const rightY = [16.5, 31.5];
// Origin -> the center of the png.


document.addEventListener("DOMContentLoaded", () => {
    
const wrapper = document.querySelector(".wrapper");
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;

const rect = wrapper.getBoundingClientRect();
const wrapperX = rect["x"];
const wrapperY = rect["y"];
const imgHeight = rect["height"];
const imgWidth = rect["width"];

const centerX =  wrapperX + (imgWidth/2);
const centerY =  wrapperY + (imgHeight/2);

    document.addEventListener("mousemove", (e) =>{
        // x = e.clientX / WIDTH;
        // y = e.clientY / HEIGHT;
    
        // coordLeftX = 63 - (x * 9);
        // coordLeftY = (y * 11) + 18;

        // coordRightX = 20 - (x * 13.5);
        // coordRightY = (y * 15) + 16.5;
        // moveLeftX(coordLeftX);
        // moveLeftY(coordLeftY);

        // moveRightX(coordRightX);
        // moveRightY(coordRightY);
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const wrapperRelativeX = mouseX - centerX;
        const wrapperRelativeY = mouseY - centerY;

        let radianAngle = Math.atan2(wrapperRelativeY, wrapperRelativeX);
        if (radianAngle < 0)
            radianAngle += Math.PI*2;
        let degAngle = (radianAngle * 180) / Math.PI;
        degAngle += 45;
        wrapper.style.setProperty("--rotation-angle", `${degAngle}deg`); 
    })
})


// function moveLeftX(coord)
// {
//     wrapper.style.setProperty(
//         "--left-eye-x",
//         `${coord}%`
//     );
// }

// function moveLeftY(coord)
// {
//     wrapper.style.setProperty(
//         "--left-eye-y",
//         `${coord}%`
//     );
// }

// function moveRightX(coord)
// {
//     wrapper.style.setProperty(
//         "--right-eye-x",
//         `${coord}%`
//     );
// }

// function moveRightY(coord)
// {
//     wrapper.style.setProperty(
//         "--right-eye-y",
//         `${coord}%`
//     );
// }