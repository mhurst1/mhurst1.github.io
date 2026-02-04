/* MATTHEW HURST | CSCE 242 */

/**
 * This is the code for adding the triangle to the geometry frame whenever 
 * the frame is clicked
 */
const geometryFrame = document.getElementById("geometry-frame");

geometryFrame.addEventListener("click", () =>{
    geometryFrame.classList.toggle("selected");
});

/**
 * This is the code for the calander so that it will return the date
 * the user selected
 */

const datePicker = document.getElementById("datePicker");
const dateOutput = document.getElementById("dateOutput");

datePicker.addEventListener("change", () =>{
    if (!datePicker.value){
        dateOutput.textContent ="";
        return;
    }
    const [year,month,day] = datePicker.value.split("-");

    const formatted = `${month}/${day}/${year}`;
    dateOutput.textContent = `You picked the date : ${formatted}`;
});

/**
 * This is the code that allows the image to change and have an outline
 */
const frameImg = document.getElementById("frameImage");
const imgHolder = frameImg.parentElement;

frameImg.addEventListener("click", () => {
    imgHolder.classList.toggle("framed");
});