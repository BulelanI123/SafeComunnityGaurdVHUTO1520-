// alerts.js - Handles displaying community alerts

document.addEventListener('DOMContentLoaded', function() {
    loadAlerts();
});

function loadAlerts() {
    const container = document.getElementById('alerts-container');
    const reports = JSON.parse(localStorage.getItem('reports')) || [];

    // Add some sample alerts if none exist
    if (reports.length === 0) {
        const sampleAlerts = [
            {
                incidentType: 'Suspicious Activity',
                location: 'Main Street',
                description: 'A suspicious vehicle has been seen circling the neighborhood.',
                datetime: '2024-03-08T10:00',
                id: 1
            },
            {
                incidentType: 'Break-in',
                location: 'Oak Avenue',
                description: 'A break-in occurred at 123 Oak Avenue last night.',
                datetime: '2024-03-07T22:00',
                id: 2
            },
            {
                incidentType: 'Noise Disturbance',
                location: 'Elm Street',
                description: 'Loud noises reported from an abandoned building.',
                datetime: '2024-03-06T23:00',
                id: 3
            }
        ];
        localStorage.setItem('reports', JSON.stringify(sampleAlerts));
        reports.push(...sampleAlerts);
    }

    container.innerHTML = '';

    reports.forEach(report => {
        const alertCard = document.createElement('div');
        alertCard.className = 'alert-card';

        const alertLevel = getAlertLevel(report.incidentType);

        alertCard.innerHTML = `
            <h3>${report.incidentType}</h3>
            <p><strong>Location:</strong> ${report.location}</p>
            <p><strong>Date and Time:</strong> ${new Date(report.datetime).toLocaleString()}</p>
            <p><strong>Description:</strong> ${report.description}</p>
            <span class="alert-level ${alertLevel.class}">${alertLevel.text}</span>
        `;

        container.appendChild(alertCard);
    });
}

function getAlertLevel(incidentType) {
    const levels = {
        'Suspicious Activity': { class: 'high', text: 'High Risk' },
        'Break-in': { class: 'high', text: 'High Risk' },
        'Theft': { class: 'high', text: 'High Risk' },
        'Missing Person': { class: 'high', text: 'High Risk' },
        'Vandalism': { class: 'medium', text: 'Medium Risk' },
        'Other': { class: 'low', text: 'Low Risk' }
    };

    return levels[incidentType] || { class: 'medium', text: 'Medium Risk' };
}