const thumbnails = document.querySelectorAll('.thumbnails img');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close-btn');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        fullImage.src = thumbnail.src;
        fullImageContainer.style.display = 'flex';
        });
});

closeBtn.addEventListener('click', () => {
    fullImageContainer.style.display = 'none';
});



document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([0, 0], 13); // La ubicación inicial
    //se establece en latitud 0 y longitud 0
    // Añadir una capa de mapa de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    // Obtener la ubicación del usuario utilizando la API de
    //geolocalización del navegador
    if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
    // Obtener las coordenadas de latitud y longitud del usuario
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    // Centrar el mapa en la ubicación del usuario y añadir un
    //marcador
    map.setView([lat, lon], 13);
    var marker = L.marker([lat, lon]).addTo(map);
    // Añadir un mensaje emergente al marcador
    marker.bindPopup("<b>Tu ubicación actual</b>").openPopup();
    });
    } else {
    // Si la geolocalización no está disponible en el navegador,
    //muestra un mensaje de error
    alert("Geolocalización no disponible en este navegador.");
    }


    var lat1 = -34.91823201206463;
    var lon1 = -56.16632544417521;

    map.setView([lat1, lon1], 13);
    var marker1 = L.marker([lat1, lon1]).addTo(map);
    marker1.bindPopup("<b>Local Parque Rodó</b>").openPopup();

    
    var lat2 = -34.9056508786282;
    var lon2 = -56.189531916545604;

    map.setView([lat2, lon2], 13);
    var marker2 = L.marker([lat2, lon2]).addTo(map);
    marker2.bindPopup("<b>Local 18 de Julio</b>").openPopup();

    var lat3 = -34.720646998555935;
    var lon3 = -55.96017910428799;

    map.setView([lat3, lon3], 13);
    var marker2 = L.marker([lat3, lon3]).addTo(map);
    marker2.bindPopup("<b>Local Pando</b>").openPopup();
});
