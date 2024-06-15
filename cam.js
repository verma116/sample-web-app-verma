document.getElementById('startButton').addEventListener('click', async function() {
    const video = document.getElementById('video');

    // Check if the browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
            
            // Play the video stream
            video.play();

            // Add animation class to video element
            video.classList.add('animated');

            // Remove animation class after animation ends
            video.addEventListener('transitionend', () => {
                video.classList.remove('animated');
            });
        } catch (error) {
            console.error('Error accessing the camera', error);
            alert('Error accessing the camera: ' + error.message);
        }
    } else {
        alert('getUserMedia is not supported by your browser');
    }
});
