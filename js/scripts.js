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

function hamburgerControl(event) {
    event.stopPropagation();
    if (document.getElementById("hamburger-toggle").hasAttribute("checked")) {
        document.getElementById("hamburger-toggle").removeAttribute("checked");
        document.getElementById("glazed").style.display = "none";
        document.body.style.overflow = "";
        document.getElementsByClassName("sticky")[0].style.left = "-80%";
    } else {
        document.getElementById("hamburger-toggle").setAttribute("checked", "true");
        document.getElementById("glazed").style.display = "block";
        document.body.style.overflow = "hidden";
        document.getElementsByClassName("sticky")[0].style.left = "0";
    }
}

function preventCollapse(event) {
    event.stopPropagation();
}

function collapse() {
    if (document.getElementById("hamburger-toggle").hasAttribute("checked")) {
        document.getElementById("hamburger-toggle").removeAttribute("checked");
        document.getElementById("glazed").style.display = "none";
        document.body.style.overflow = "";
        document.getElementsByClassName("sticky")[0].style.left = "-80%";
    }
}