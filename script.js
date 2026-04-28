let isAudioPlaying = false;
const audio = document.getElementById('bg-audio');
const audioToggle = document.getElementById('audio-toggle');
const loader = document.getElementById('loader');

function init() {
    // SAFETY TIMEOUT
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 4000);

    if (typeof JEELIZFACEFILTER !== 'undefined') {
        JEELIZFACEFILTER.init({
            canvasId: 'overlay',
            NNCPath: 'https://cdn.jsdelivr.net/npm/jeelizfacefilter/dist/NNC.json',
            callbackReady: (err, spec) => {
                if (!err) {
                    loader.classList.add('hidden');
                    console.log('AR Ready');
                }
            }
        });
    }
}

audioToggle.onclick = () => {
    if (isAudioPlaying) {
        audio.pause();
        audioToggle.textContent = '🎵';
    } else {
        audio.play().catch(() => {});
        audioToggle.textContent = '🔊';
    }
    isAudioPlaying = !isAudioPlaying;
};

window.addEventListener('load', init);
setTimeout(init, 5000); // Forced fallback