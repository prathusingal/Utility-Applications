const ipOutput = document.querySelector('#ipOutput');
const ipGetBtn = document.querySelector('#ipGetBtn');


ipGetBtn.addEventListener('click', () => {
    fetch('https://api.ipify.org/?format=json',{
        method: 'GET'
    })
        .then((res) => res.json())
        .then((json) => {
            console.log("your public ip is : ", json.ip);
            ipOutput.innerHTML = `Your public IP address is : ${json.ip}`;
        })
        .catch((err) => {
            console.log(`error : ${err}`);
        });


})