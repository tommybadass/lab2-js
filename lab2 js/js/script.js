/* Declare and initialize global variables */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].oninput = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = parseInt(this.value); // Convert to integer
        newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
        document.getElementById("colorDisplay").innerText = newCSS; // Update displayed RGB value
    };
}

/* Function to update RGB values */
function changeRgb(channel, value) {
    switch (channel) {
        case "red":
            rgb[0] = value;
            break;
        case "green":
            rgb[1] = value;
            break;
        case "blue":
            rgb[2] = value;
            break;
    }
    return rgb;
}

/* Function to convert RGB array to CSS format */
function writeCSS(newRgb) {
    return `rgb(${newRgb[0]}, ${newRgb[1]}, ${newRgb[2]})`;
}
