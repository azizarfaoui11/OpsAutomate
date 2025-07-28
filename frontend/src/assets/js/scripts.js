/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your projectconst toastTrigger = document.getElementById('liveToastBtn');

document.addEventListener('DOMContentLoaded', () => {
    console.log("Dom chargee");

    fetch('http://localhost:8082/me', {  // Spécifie l'URL complète de ton endpoint
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Met à jour le prénom de l'utilisateur dans l'interface utilisateur
        const userFirstname = document.getElementById('user-firstname');
        userFirstname.textContent = data.firstname; // Assure-toi que la propriété est correcte

        // Autres mises à jour d'interface utilisateur nécessaires ici

    })
    .catch(error => {
        console.error('Error fetching user data:', error);
    });
});
