
window.onbeforeunload = () => {
    window.localStorage.setItem('userData', JSON.stringify(userData));
};

var chefSelect = document.getElementById('chef-select');


var userData = [];
userData[0] = 'image location';
userData[1] = 'user name';
userData[2] = 1;
userData[3] = 0;

chefSelect.addEventListener('click', collectChefChoice);
function collectChefChoice(event) {
    event.preventDefault();
    var playerChef = event.target.src;
    userData.splice(0, 1, playerChef);
}


var playerName = document.getElementById('player-name');
playerName.addEventListener('submit', playerNameSubmit);
function playerNameSubmit(event) {

    // Cannot advance if a charater isn't selected 
    if (userData[0] === 'image location') {
        event.preventDefault();
        showToast('Lütfen bir karakter seçin.');
    } else {
        event.preventDefault();
        var userName = event.target.username.value;
        userData.splice(1, 1, userName);
        window.location.replace('gameapp.html');
    }
    
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500); // 3 saniye sonra kaybolur
    }
    
}



