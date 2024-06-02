const textInput = document.querySelector('#textDecodeInput');
const encodeBtn = document.querySelector('#baseDecodeBtn');
const clearBtn = document.querySelector('#clearBtn');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');
const output = document.querySelector('#textDecodeOutput');

encodeBtn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to decode');
    }
    const base64Decode = atob(textInput.value);
    output.value = base64Decode;
    outputSection.style.display = 'block';
    container.style.height = '1200px';
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    output.value = '';
});
