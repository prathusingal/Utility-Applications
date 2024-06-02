const hexInput = document.querySelector('#hexColorInput');
const hexToRgb = document.querySelector('#hexToRGBButton');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#hexToRgbOutput');
const outputSection = document.querySelector('.outputSection');
const rgbSection = document.querySelector('.rgbTitle');
const container = document.querySelector('.container');

function getRGBValue(hex) {
    // eslint-disable-next-line radix
    const rgb = parseInt(hex, 16);
    return rgb;
}

function isHexadecimal(str) {
    const regexp = /^[0-9a-fA-F]+$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}

hexToRgb.addEventListener('click', () => {
    const hexString = hexInput.value;
    if (hexInput.value.length < 6 || !isHexadecimal(hexString)) {
        // eslint-disable-next-line no-alert
        alert(
            'Please enter valid input: A 6 character hex alphanumeric value that translates to an RGB value within the range of 0-255 for each color',
        );
    } else {
        const redString = hexString.substring(0, 2);
        const greenString = hexString.substring(2, 4);
        const blueString = hexString.substring(4, 6);
        const redValue = getRGBValue(redString);
        const greenValue = getRGBValue(greenString);
        const blueValue = getRGBValue(blueString);

        output.style.backgroundColor = `#${hexString}`;
        output.style.border = '2px solid black';
        outputSection.style.display = 'block';
        container.style.height = '700px';
        rgbSection.innerHTML = '(Red : ' + redValue + ', Green : ' + greenValue + ', Blue : ' + blueValue + ')';
    }
});

clearBtn.addEventListener('click', () => {
    hexInput.value = '';
    output.value = '';
    outputSection.style.display = 'none';
    container.style.height = '550px';
});
