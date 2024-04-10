const form = document.getElementById('formulario')
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const campoA = document.querySelector('input[name = "menorNumero"]').value;
        const campoB = document.querySelector('input[name = "maiorNumero"]').value;
        const messageError = document.getElementById('messageError');
        const successMessage = document.getElementById('successMessage');
        const clearA = document.getElementById('smnum');
        const clearB = document.getElementById('bgnum');
       

        function result(){
            if(campoA < campoB){
                return true
            }else{
                return false
            }
        } 

        if(result() === false){
            messageError.innerText = "O primeiro numero é maior que o segundo!"
            messageError.style.display = 'grid';
            clearA.style.borderColor = '#b22222'
            successMessage.innerText = '';
            successMessage.style.display = '';
            clearB.value = ''
        }else{
            successMessage.innerText = "O segundo numero é maior que o primeiro!"
            successMessage.style.display = 'grid';
            messageError.innerText = '';
            messageError.style.display = 'none';
            clearA.style.borderColor = '#fff'
            clearA.value = ''
            clearB.value = ''
        }
    })
   