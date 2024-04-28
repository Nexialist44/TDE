document.addEventListener('DOMContentLoaded', function() {
    const getDataButton = document.getElementById('getDataButton');
    const responseData = document.getElementById('responseData');

    getDataButton.addEventListener('click', function() {
        fetch('https://api.nationalize.io/?name=')
            .then(response => response.json())
            .then(data => {
    
                responseData.textContent = `Dados recebidos: ${JSON.stringify(data)}`;
                responseData.style.display = 'block';
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });
});