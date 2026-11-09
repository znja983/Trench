(function initializeVisualEffects() {
    const animationSpeed = document.getElementById('animation-speed');
    const animationSpeedValue = document.getElementById('animation-speed-value');
    const animationControlsToggle = document.getElementById('animation-controls-toggle');
    const animationControlsPanel = document.getElementById('animation-controls-panel');
    const ashContainer = document.getElementById('ash-container');
    const random = (min, max) => Math.random() * (max - min) + min;

    if (animationSpeed && animationSpeedValue) {
        const updateAnimationSpeed = () => {
            const seconds = Number(animationSpeed.value);
            document.documentElement.style.setProperty('--drip-speed', `${seconds}s`);
            animationSpeedValue.value = `${seconds.toFixed(1)} s`;
            animationSpeedValue.textContent = `${seconds.toFixed(1)} s`;

            ashContainer?.querySelectorAll('.ash-particle').forEach((ash) => {
                ash.style.animationDuration = `${seconds * Number(ash.dataset.durationFactor)}s`;
            });
        };

        animationSpeed.addEventListener('input', updateAnimationSpeed);
    }

    if (animationControlsToggle && animationControlsPanel) {
        animationControlsToggle.addEventListener('click', () => {
            const isExpanded = animationControlsToggle.getAttribute('aria-expanded') === 'true';
            animationControlsToggle.setAttribute('aria-expanded', String(!isExpanded));
            animationControlsPanel.hidden = isExpanded;
        });
    }

    if (ashContainer) {
        const particleCount = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 8 : 24;

        for (let index = 0; index < particleCount; index += 1) {
            const ash = document.createElement('span');
            const size = random(1, 3.5);

            ash.className = 'ash-particle';
            ash.dataset.durationFactor = random(2.7, 5).toFixed(2);
            ash.style.setProperty('--ash-size', `${size}px`);
            ash.style.setProperty('--ash-x', `${random(0, 100)}vw`);
            ash.style.setProperty('--ash-drift', `${random(-70, 70)}px`);
            ash.style.setProperty('--ash-delay', `${random(-18, 0)}s`);
            ashContainer.appendChild(ash);
        }
    }

    if (animationSpeed && animationSpeedValue) {
        animationSpeed.dispatchEvent(new Event('input'));
    }
})();
