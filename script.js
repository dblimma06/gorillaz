const botaogradiente = document.querySelector('.botao');

botaogradiente.addEventListener('click', () => {
       if (document.body.style.backgroundImage === 'linear-gradient(to right, lightgreen, darkgreen)') { 
       document.body.style.backgroundImage = 'none';
       document.body.style.backgroundColor = '#48a948';
       botaogradiente.textContent = 'Com Gradiente';
    }
    else {
         document.body.style.backgroundImage = 'linear-gradient(to right, lightgreen, darkgreen)';
         botaogradiente.textContent = 'Sem Gradiente';
    }
})