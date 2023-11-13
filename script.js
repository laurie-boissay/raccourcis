function copierDansPressePapier(
    elementId,
    textACopier,
    ) {
    // Sélectionne l'élément contenant l'adresse e-mail
    var emailElement = document.getElementById(elementId);

    // Crée une zone de texte temporaire
    var tempInput = document.createElement('textarea');

    // Copie l'adresse e-mail dans la zone de texte
    tempInput.value = textACopier;

    // Ajoute la zone de texte à la page
    document.body.appendChild(tempInput);

    // Sélectionne le texte dans la zone de texte
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Pour les appareils mobiles

    // Copie le texte dans le presse-papiers
    document.execCommand('copy');

    // Supprime la zone de texte temporaire
    document.body.removeChild(tempInput);

    // Affiche le message de confirmation
    var confirmation = document.createElement('div');
    confirmation.textContent = "Element copié !";
    confirmation.style.position = 'fixed';
    confirmation.style.top = '10px';
    confirmation.style.left = '50%';
    confirmation.style.transform = 'translateX(-50%)';
    confirmation.style.backgroundColor = '#4CAF50';
    confirmation.style.color = 'white';
    confirmation.style.padding = '10px';
    confirmation.style.borderRadius = '5px';
    confirmation.style.opacity = '0';
    confirmation.style.transition = 'opacity 0.5s ease-in-out';

    document.body.appendChild(confirmation);

    // Augmente l'opacité du message
    confirmation.style.opacity = '1';

    // Supprime le message après quelques secondes
    setTimeout(function() {
        confirmation.style.opacity = '0';
    }, 2000);
}