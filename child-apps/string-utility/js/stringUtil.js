const languageInputTxt = document.querySelector('#languageInput');
const lowerCaseBtn = document.querySelector('#lowerCaseBtn');
const upperCaseBtn = document.querySelector('#upperCaseBtn');
const reverseBtn = document.querySelector('#reverseBtn');
const characterCountBtn = document.querySelector('#characterCountBtn');
const wordCountBtn = document.querySelector('#wordCountBtn');
const resetBtn = document.querySelector('#resetBtn');
const output = document.querySelector('#languageOutput');
const outputSection = document.querySelector('.outputSection');
const container = document.querySelector('.container');
const home = document.querySelector('#home');

function wordCount(text)
{
    let count =0 ;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) === ' ' || text.charAt(i) === ',' || text.charAt(i) === ';') {
            count ++;
        }
    }
    return count+1;
}

lowerCaseBtn.addEventListener('click', () => {
    const textValue = languageInputTxt.value;
    languageInputTxt.value = textValue.toLowerCase();
});

upperCaseBtn.addEventListener('click', () => {
    const textValue = languageInputTxt.value;
    languageInputTxt.value = textValue.toUpperCase();
});

reverseBtn.addEventListener('click', () => {
    const textValue = languageInputTxt.value;
    languageInputTxt.value = textValue.split('').reverse().join('');
});

characterCountBtn.addEventListener('click', () => {
    const textValue = languageInputTxt.value;
    output.value = `character count : ${textValue.length}`;
    outputSection.style.display = 'block';

});

wordCountBtn.addEventListener('click', () => {
    const textValue = languageInputTxt.value;
    const count = wordCount(textValue);
    output.value = `word count : ${count}`;
    outputSection.style.display = 'block';

});

resetBtn.addEventListener('click', () => {
    languageInputTxt.value = '';
    output.value = '';
    outputSection.style.display = 'none';

});
