const crusadeCursor = document.querySelector('.crusade-cursor');

if (crusadeCursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('pointermove', (event) => {
        crusadeCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    });

    document.addEventListener('pointerover', (event) => {
        const target = event.target;
        if (!(target instanceof Element)) {
            return;
        }

        crusadeCursor.classList.toggle(
            'is-interactive',
            Boolean(target.closest('a, button, [role="button"], input[type="submit"], input[type="button"]'))
        );
    });

    document.addEventListener('pointerdown', () => {
        crusadeCursor.classList.add('is-pressed');
    });

    document.addEventListener('pointerup', () => {
        crusadeCursor.classList.remove('is-pressed');
    });
}
