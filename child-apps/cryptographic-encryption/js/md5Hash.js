const textInput = document.querySelector('#md5TextInput');
const md5Btn = document.querySelector('#md5Button');
const clearBtn = document.querySelector('#clearBtn');
const output = document.querySelector('#textMd5Output');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');

md5Btn.addEventListener('click', () => {
    if (textInput.value.length === 0) {
        // eslint-disable-next-line no-alert
        alert('please enter text create md5 hash');
    }
    // eslint-disable-next-line no-undef
    const md5Hash = CryptoJS.MD5(textInput.value);
    // eslint-disable-next-line no-console
    console.log(`md5 hash : ${md5Hash}`);
    const sha1 = CryptoJS.SHA1(textInput.value);
    console.log(`sh1 hash : ${sha1}`);
    output.value = md5Hash;
    outputSection.style.display = 'block';
    container.style.height = '1100px';
});

clearBtn.addEventListener('click', () => {
    textInput.value = '';
    output.value = '';
});
