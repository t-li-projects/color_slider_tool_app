const inRed = document.getElementById('inputRed')
const inGreen = document.getElementById('inputGreen')
const inBlue = document.getElementById('inputBlue')

const colorOutDesktop = document.getElementById('colorDesktop')
const colorOutMobile = document.getElementById('colorMobile')

const outputRGB = document.getElementById('outputRGB')
const outputRGBp = document.getElementById('outputRGBp')
const outputHEX = document.getElementById('outputHEX')

const copyRgbButton = document.getElementById('outputRGB')
const copyRgbpButton = document.getElementById('outputRGBp')
const copyHexButton = document.getElementById('outputHEX')


// Converter functions
        //rgb component to rgb % component
function rgbCTorgbpC(rgbC) {
    // let rgbpC = Math.round( rgbC/256*100 )
    return Math.round( rgbC/256*100 )+'%'
}
        //rgb component to hex component
function rgbCToHexC(rgbC) {
    return ((+rgbC).toString(16)).toUpperCase();
}

// update functions
function updateData() {
    colorOutDesktop.style.backgroundColor = 'rgb('+inRed.value+','+inGreen.value+','+inBlue.value+')'
    colorOutMobile.style.backgroundColor = 'rgb('+inRed.value+','+inGreen.value+','+inBlue.value+')'
    outputRGB.textContent = 'rgb('+inRed.value+', '+inGreen.value+', '+inBlue.value+')'
    outputRGBp.textContent = 'rgb('+rgbCTorgbpC(inRed.value)+', '+rgbCTorgbpC(inGreen.value)+', '+rgbCTorgbpC(inBlue.value)+')'
    outputHEX.textContent = '#'+rgbCToHexC(inRed.value)+rgbCToHexC(inGreen.value)+rgbCToHexC(inBlue.value)
}



// on click events
inRed.oninput = function() {
    document.getElementById('redRGB').innerHTML = inRed.value;
    document.getElementById('redHEX').innerHTML = rgbCToHexC(inRed.value)
    document.getElementById('redRGBp').innerHTML = rgbCTorgbpC(inRed.value);
    updateData()
}

inGreen.oninput = function() {
    document.getElementById('greenRGB').innerHTML = inGreen.value;
    document.getElementById('greenHEX').innerHTML = rgbCToHexC(inGreen.value)
    document.getElementById('greenRGBp').innerHTML = rgbCTorgbpC(inGreen.value);
    updateData()
}

inBlue.oninput = function() {
    document.getElementById('blueRGB').innerHTML = inBlue.value;
    document.getElementById('blueHEX').innerHTML = rgbCToHexC(inBlue.value);
    document.getElementById('blueRGBp').innerHTML = rgbCTorgbpC(inBlue.value);
    updateData()
}

// copy to clipboard functions
copyRgbButton.onclick = function() {
    navigator.clipboard.writeText( outputRGB.textContent );
}

copyRgbpButton.onclick = function() {
    navigator.clipboard.writeText( outputRGBp.textContent );
}

copyHexButton.onclick = function() {
    navigator.clipboard.writeText( outputHEX.textContent );
}