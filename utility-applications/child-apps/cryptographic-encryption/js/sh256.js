const textInput = document.querySelector('#sh256TextInput');
const sh256Btn = document.querySelector('#sh256Button');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#textSh256Output');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');

sh256Btn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text create sh256 hash');
    }
    const sha256 = CryptoJS.SHA256(textInput.value);
    // eslint-disable-next-line no-console
    console.log(`sh256 hash : ${sha256}`);
    output.value = sha256;
    outputSection.style.display = 'block';
    container.style.height = '1150px';
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    output.value = '';
});
