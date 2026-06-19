
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
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const wrapperRelativeX = mouseX - centerX;
        const wrapperRelativeY = mouseY - centerY;

        let radianAngle = Math.atan2(wrapperRelativeY, wrapperRelativeX);
        if (radianAngle < 0)
            radianAngle += Math.PI*2;
        let degAngle = (radianAngle * 180) / Math.PI;
        degAngle += 45; // Cuz the pivot is at bottom left, it means the circle already pointing 45 degrees up,
                        //  which in browser coordinates is -45, so to offset that and bring things back to zero,
                        // we add 45 degrees. 
        wrapper.style.setProperty("--rotation-angle", `${degAngle}deg`); 
    })
})
