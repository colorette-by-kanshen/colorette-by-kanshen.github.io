function checkContrast(color) {
    const ColorContrastBox = document.querySelectorAll("#contrastwhite, #contrastblack");
    Array.from(ColorContrastBox).forEach(box => box.style.color = color);

    // Convert the input color to its RGB components
    const redHEX = color.substring(0, 2);
    const greenHEX = color.substring(2, 4);
    const blueHEX = color.substring(4, 6);

    // Convert HEX values to RGB
    const redRGB = parseInt(redHEX, 16);
    const blueRGB = parseInt(blueHEX, 16);
    const greenRGB = parseInt(greenHEX, 16);

    // Calculate the ContrastIndex
    const contrastIndex = ((redRGB + greenRGB + blueRGB) / 3 / 2.55 + (((redRGB + greenRGB + blueRGB) / 3 / 2.55) - 100))

    // Set Elements Constants and Values
    const whiteContrastBox = document.querySelector("#contrastWhite")
    const blackContrastBox = document.querySelector("#contrastblack")
    whiteContrastBox.textContent = contrastIndex.toFixed(1)
    blackContrastBox.innerHTML = "ON A SCALE FROM -100 TO 100 <span id='contrastvalueblack'>Based on calculations made by the Contrast Calculator Engine</span>";

    const contrastInfo = document.querySelector("#contrastcheckcolorinfo");
    if (-100 >= contrastIndex && contrastIndex < -77.5) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is great to see on white, but very hard, if not impossible to see on black.";
    } else if (-77.5 >= contrastIndex && contrastIndex < -55) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is good to see on white, but it might be difficult to see on black.";
    } else if (-55 >= contrastIndex && contrastIndex < -32.5) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is good to see on white, but a bit less on black.";
    } else if (-32.5 >= contrastIndex && contrastIndex < -10) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is good to see on white, and only a bit less on black.";
    } else if (-10 >= contrastIndex && contrastIndex <= 10) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is neutral, and is pretty easy to see on both white and black.";
    } else if (10 < contrastIndex && contrastIndex <= 32.5) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is good to see on black, and only a bit less on white.";
    } else if (32.5 < contrastIndex && contrastIndex <= 55) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is good to see on black, but a bit less on white.";
    } else if (55 < contrastIndex && contrastIndex <= 75.5) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is good to see on black, but it might be difficult to see on white.";
    } else if (75.5 < contrastIndex && contrastIndex <= 100) {
        contrastInfo.innerHTML = "The color <span id='contrastcheckcolorcode'></span> has the contrast index of " + contrastIndex.toFixed(1) + ", which means the color is great to see on black, but very hard, if not impossible to see on white.";
    }
    const contrastColor = document.querySelector("span#contrastcheckcolorcode");
    contrastColor.style.color = color;
    contrastColor.textContent = "#" + color;
}
