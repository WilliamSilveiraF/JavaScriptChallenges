var teste = document.querySelector('div.area');
        teste.addEventListener('click', clickar)
        teste.addEventListener('mouseenter', hover)
        teste.addEventListener('mouseout', out)

        function clickar() {
            teste.innerHTML = 'Clicou!';
            teste.style.background = 'green';
        }

        function hover() {
            teste.innerHTML = 'Sai de cima de mim :('
            teste.style.background = 'hotpink'
        }
        function out() {
            teste.innerHTML = 'Interaja...'
            teste.style.background = 'black'
        }