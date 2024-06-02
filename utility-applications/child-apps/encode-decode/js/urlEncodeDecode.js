const urlInput = document.querySelector('#urlInput');
const encodeBtn = document.querySelector('#encodeBtn');
const decodeBtn = document.querySelector('#decodeBtn');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#output');

encodeBtn.addEventListener('click', () => {
    if (urlInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to encode/decode');
    }
    output.value = encodeURIComponent(urlInput.value);
});

decodeBtn.addEventListener('click', () => {
    if (urlInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text to encode/decode');
    }
    output.value = decodeURIComponent(urlInput.value);
});

clearBtn.addEventListener('click', () => {
    urlInput.value = '';
    output.value = '';
});
