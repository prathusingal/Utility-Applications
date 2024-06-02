const redInput = document.querySelector('#redColorInput');
const greenInput = document.querySelector('#greenColorInput');
const blueInput = document.querySelector('#blueColorInput');
const rgbToHex = document.querySelector('#rgbToHexButton');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#rgbToHexOutput');
const outputSection = document.querySelector('.outputSection');
const hexSection = document.querySelector('.hexTitle');
const container = document.querySelector('.container');


// script.js
window.onload = function() {
    fetch('../../navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });
};

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
}

function rgbToHexConvert(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

function getRGBValue(hex) {
    // eslint-disable-next-line radix
    const rgb = parseInt(hex, 16);
    return rgb;
}

rgbToHex.addEventListener('click', () => {
    if (redInput.value.length === 0 || greenInput.value.length === 0 || blueInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter red, blue, green values');
    } else {
        // eslint-disable-next-line radix
        const redValue = parseInt(redInput.value);
        // eslint-disable-next-line radix
        const greenValue = parseInt(greenInput.value);
        // eslint-disable-next-line radix
        const blueValue = parseInt(blueInput.value);
        // eslint-disable-next-line radix
        if (
            // eslint-disable-next-line radix
            parseInt(redValue) > 255 ||
            // eslint-disable-next-line radix
            parseInt(redValue) < 0 ||
            // eslint-disable-next-line radix
            parseInt(greenValue) > 255 ||
            // eslint-disable-next-line radix
            parseInt(greenValue) < 0 ||
            // eslint-disable-next-line radix
            parseInt(blueValue) > 255 ||
            // eslint-disable-next-line radix
            parseInt(blueValue) < 0
        ) {
            // eslint-disable-next-line no-alert
            alert('please enter value between 0 and 255');
        } else {
            let containerHeight = container.offsetHeight;
            let containerWidth = container.offsetHeight;
            containerHeight += 150;
            const color = rgbToHexConvert(redValue, greenValue, blueValue);
            // eslint-disable-next-line no-console
            console.log(color);
            output.style.backgroundColor = color;
            output.style.border = '2px solid black';
            outputSection.style.display = 'block';
            hexSection.innerHTML = color;
            container.style.height = '900px';
        }
    }
});

clearBtn.addEventListener('click', () => {
    redInput.value = '';
    greenInput.value = '';
    blueInput.value = '';
    output.value = '';
    outputSection.style.display = 'none';
    let containerWidth = container.offsetHeight;
    container.style.height = '750px';
});
