let inputText = document.querySelector('.inputs__text');
let btn = document.querySelector('.inputs__btn');
let erro = document.querySelector('.erro');

btn.addEventListener('click', function() {
    if (inputText.value == '') {
        erro.innerHTML = `Please, provide some email address`;
        inputText.classList.add('bordaVermelha');
        inputText.value = '';
        inputText.placeholder = 'example@email/com';
    } else {
        if (!inputText.checkValidity()) {
            erro.innerHTML = `Please, provide a valid email address`;
            inputText.classList.add('bordaVermelha');
            inputText.value = '';
            inputText.placeholder = 'example@email/com';
        } else {
            inputText.classList.remove('bordaVermelha');
            erro.innerHTML = ``;
            inputText.value = '';
            inputText.placeholder = 'Your email address...';
        }
    }
})
