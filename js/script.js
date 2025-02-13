document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const video = document.getElementById('video');
    if (file) {
        const fileURL = URL.createObjectURL(file);
        video.src = fileURL;
    }
});

document.getElementById('loadUrlButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    const video = document.getElementById('video');
    if (url) {
        video.src = url;
    }
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeToggle = document.getElementById('themeToggle');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});
