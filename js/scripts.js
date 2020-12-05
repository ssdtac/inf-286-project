function initMap() {
    // The location of Uluru
    const station = { lat: 38.99371415734998, lng: -84.36397252532434 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: station,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: station,
        map: map,
    });
}