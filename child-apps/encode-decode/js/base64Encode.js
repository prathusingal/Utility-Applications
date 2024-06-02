const textInput = document.querySelector('#textEncodeInput');
const encodeBtn = document.querySelector('#baseEncodeBtn');
const clearBtn = document.querySelector('#clearBtn');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');
const output = document.querySelector('#textEncodeOutput');

encodeBtn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to encode');
    }
    const base64 = btoa(textInput.value);
    // eslint-disable-next-line no-console
    console.log(`base 64 : ${base64}`);
    // eslint-disable-next-line no-console
    console.log(`base 64 decode : ${atob(base64)}`);
    output.value = base64;
    outputSection.style.display = 'block';
    container.style.height = '1200px';
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    output.value = '';
});
