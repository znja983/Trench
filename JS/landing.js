function Landing() {
    const root = document.getElementById('root');
    if (!root) {
        return;
    }

    root.innerHTML = `
        <div class="landing-page">
            <main>
                <section class="landing-hero" aria-labelledby="landing-title">
                    <div class="landing-hero-content">
                        <h1 id="landing-title">Trench Crusade <span>Wiki</span></h1>
                        <p class="landing-intro">Explora el oscuro trasfondo, conoce las facciones y descubre las reglas de esta guerra sin fin. Las puertas del Infierno están abiertas.</p>
                        <button class="landing-cta" type="button" onclick="openWiki('home')">
                            Entrar a la wiki <span aria-hidden="true">&#8250;</span>
                        </button>
                    </div>
                </section>

                <section class="archive-section" id="archivo">
                    <div class="section-heading">
                        <h2>Archivos sagrados y profanos</h2>
                        <span class="heading-rule" aria-hidden="true"></span>
                    </div>
                    <div class="archive-grid">
                        <button class="archive-item" type="button" onclick="openWiki('lore')">
                            <span class="archive-symbol" aria-hidden="true">&#10013;</span>
                            <span class="archive-copy"><strong>Historia</strong><small>Desde la apertura de las puertas del Infierno hasta la guerra eterna en las trincheras.</small></span>
                            <span class="archive-arrow" aria-hidden="true">&#8599;</span>
                        </button>
                        <button class="archive-item" type="button" onclick="openWiki('home')">
                            <span class="archive-symbol" aria-hidden="true">&#9823;</span>
                            <span class="archive-copy"><strong>Facciones</strong><small>Doctrinas, unidades y héroes de quienes luchan por la humanidad o su destrucción.</small></span>
                            <span class="archive-arrow" aria-hidden="true">&#8599;</span>
                        </button>
                        <button class="archive-item" type="button" onclick="openWiki('units')">
                            <span class="archive-symbol" aria-hidden="true">&#9876;</span>
                            <span class="archive-copy"><strong>Unidades</strong><small>Recluta combatientes y reúne tu propia compañía para el frente.</small></span>
                            <span class="archive-arrow" aria-hidden="true">&#8599;</span>
                        </button>
                        <button class="archive-item" type="button" onclick="openWiki('favorites')">
                            <span class="archive-symbol" aria-hidden="true">&#9638;</span>
                            <span class="archive-copy"><strong>Favoritos</strong><small>Guarda y vuelve a consultar a tus combatientes preferidos.</small></span>
                            <span class="archive-arrow" aria-hidden="true">&#8599;</span>
                        </button>
                    </div>
                </section>

                <section class="factions-section" id="facciones">
                    <div class="section-heading factions-heading">
                        <div><h2>Principales beligerantes</h2><span class="heading-rule" aria-hidden="true"></span></div>
                        <button class="text-link" type="button" onclick="openWiki('home')">Ver todas las facciones <span aria-hidden="true">&#8250;</span></button>
                    </div>
                    <div class="faction-grid">
                        <article class="faction-tile faction-pilgrims">
                            <div class="faction-art" role="img" aria-label="Peregrino en el frente de batalla"></div>
                            <div class="faction-info"><h3>Peregrinos de la Trinchera</h3><p>Fanáticos en busca del martirio entre el barro, los huesos y el alambre del frente.</p></div>
                        </article>
                        <article class="faction-tile faction-heretics">
                            <div class="faction-art" role="img" aria-label="Criatura infernal"></div>
                            <div class="faction-info"><h3>Legión Hereje</h3><p>Almas condenadas y monstruosidades al servicio de los Archidiablos.</p></div>
                        </article>
                        <article class="faction-tile faction-antioch">
                            <div class="faction-art" role="img" aria-label="Caballero de Nueva Antioquía"></div>
                            <div class="faction-info"><h3>Principado de Nueva Antioquía</h3><p>El escudo firme de la humanidad, armado de fe y artillería.</p></div>
                        </article>
                        <article class="faction-tile faction-grail">
                            <div class="faction-art" role="img" aria-label="Profeta del Grial Negro"></div>
                            <div class="faction-info"><h3>El Grial Negro</h3><p>Portadores de una plaga que extiende enfermedad y vida antinatural.</p></div>
                        </article>
                    </div>
                </section>
            </main>
            <footer class="landing-footer">
                <a class="footer-brand" href="#" onclick="Landing(); return false;">Trench Crusade <span>Wiki</span></a>
                <p>Proyecto comunitario no oficial. Trench Crusade y sus elementos pertenecen a sus respectivos creadores.</p>
                <span>Que el barro tenga piedad.</span>
            </footer>
        </div>
    `;
}

function openWiki(view) {
    if (view === 'account' && (!window.isAuthenticated || !window.isAuthenticated())) {
        window.renderAuthScreen('login');
        return;
    }

    const views = {
        home: Home,
        lore: Informativa,
        units: Capturados,
        favorites: Favoritos,
        account: Cuenta
    };

    if (views[view]) {
        views[view]();
    }
}

window.Landing = Landing;
window.openWiki = openWiki;