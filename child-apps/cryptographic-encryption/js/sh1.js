const textInput = document.querySelector('#sh1TextInput');
const sh1Btn = document.querySelector('#sh1Button');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#textSh1Output');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');

sh1Btn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text create sh1 hash');
    }
    const sha1 = CryptoJS.SHA1(textInput.value);
    // eslint-disable-next-line no-console
    console.log(`sh1 hash : ${sha1}`);
    output.value = sha1;
    outputSection.style.display = 'block';
    container.style.height = '1150px';
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    output.value = '';
});
