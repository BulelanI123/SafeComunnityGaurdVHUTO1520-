// reports.js - Handles incident report form

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('incident-form');
    const confirmation = document.getElementById('confirmation');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(form);
        const report = {
            name: formData.get('name'),
            email: formData.get('email'),
            location: formData.get('location'),
            incidentType: formData.get('incident-type'),
            description: formData.get('description'),
            datetime: formData.get('datetime'),
            image: formData.get('image') ? formData.get('image').name : null,
            id: Date.now() // Unique ID
        };

        // Validate form
        if (!validateForm(report)) {
            alert('Please fill in all required fields.');
            return;
        }

        // Save to localStorage
        saveReport(report);

        // Show confirmation
        form.style.display = 'none';
        confirmation.classList.remove('hidden');

        // Reset form
        form.reset();
    });
});

function validateForm(report) {
    return report.name && report.email && report.location && report.incidentType && report.description && report.datetime;
}

function saveReport(report) {
    const reports = JSON.parse(localStorage.getItem('reports')) || [];
    reports.push(report);
    localStorage.setItem('reports', JSON.stringify(reports));
}