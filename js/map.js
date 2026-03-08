// map.js - Handles map functionality

document.addEventListener('DOMContentLoaded', function() {
    loadMapMarkers();
});

function loadMapMarkers() {
    const map = document.getElementById('map');
    const reports = JSON.parse(localStorage.getItem('reports')) || [];

    reports.forEach(report => {
        const marker = document.createElement('div');
        marker.className = 'map-marker';
        marker.innerHTML = `
            <div class="marker-popup">
                <h4>${report.incidentType}</h4>
                <p><strong>Location:</strong> ${report.location}</p>
                <p><strong>Description:</strong> ${report.description}</p>
                <p><strong>Date:</strong> ${new Date(report.datetime).toLocaleString()}</p>
            </div>
        `;
        // Random position for demo
        marker.style.left = Math.random() * 80 + '%';
        marker.style.top = Math.random() * 80 + '%';
        map.appendChild(marker);
    });
}