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

                <section class="chronicle-section" aria-labelledby="chronicle-title">
                    <div class="chronicle-heading">
                        <p class="section-index">Cronología del frente</p>
                        <h2 id="chronicle-title">Una guerra sin armisticio</h2>
                    </div>
                    <ol class="chronicle-list">
                        <li><span>Siglo XI</span><div><h3>Se abren las puertas</h3><p>La traición de los Templarios libera las fuerzas del Infierno sobre la Tierra.</p></div></li>
                        <li><span>La guerra eterna</span><div><h3>La fe cava sus trincheras</h3><p>Fieles y malditos se enfrentan en una lucha que devora generaciones.</p></div></li>
                        <li><span>1914</span><div><h3>El frente no cede</h3><p>La humanidad resiste entre acero, pólvora y horrores que no deberían existir.</p></div></li>
                    </ol>
                </section>

                <section class="factions-section" id="facciones">
                    <div class="section-heading factions-heading">
                        <div><h2>Principales beligerantes</h2><span class="heading-rule" aria-hidden="true"></span></div>
                        <button class="text-link" type="button" onclick="openWiki('home')">Ver todas las facciones <span aria-hidden="true">&#8250;</span></button>
                    </div>
                    <div class="faction-grid">
                        <article class="faction-tile faction-pilgrims">
                            <img class="faction-art" src="images/sacerdote.webp" alt="Peregrino en el frente de batalla" width="66" height="66" loading="lazy" decoding="async">
                            <div class="faction-info"><h3>Peregrinos de la Trinchera</h3><p>Fanáticos en busca del martirio entre el barro, los huesos y el alambre del frente.</p></div>
                        </article>
                        <article class="faction-tile faction-heretics">
                            <img class="faction-art" src="images/demonio.webp" alt="Criatura de la Legión Hereje" width="66" height="66" loading="lazy" decoding="async">
                            <div class="faction-info"><h3>Legión Hereje</h3><p>Almas condenadas y monstruosidades al servicio de los Archidiablos.</p></div>
                        </article>
                        <article class="faction-tile faction-antioch">
                            <img class="faction-art" src="images/templario.webp" alt="Caballero de Nueva Antioquía" width="66" height="66" loading="lazy" decoding="async">
                            <div class="faction-info"><h3>Principado de Nueva Antioquía</h3><p>El escudo firme de la humanidad, armado de fe y artillería.</p></div>
                        </article>
                        <article class="faction-tile faction-grail">
                            <img class="faction-art" src="images/profeta.webp" alt="Profeta del Grial Negro" width="66" height="66" loading="lazy" decoding="async">
                            <div class="faction-info"><h3>El Grial Negro</h3><p>Portadores de una plaga que extiende enfermedad y vida antinatural.</p></div>
                        </article>
                        <article class="faction-tile faction-sultanate">
                            <img class="faction-art" src="images/asesino.webp" alt="Combatiente del Sultanato del Muro de Hierro" width="66" height="66" loading="lazy" decoding="async">
                            <div class="faction-info"><h3>Sultanato del Muro de Hierro</h3><p>Guerreros del desierto que desafían al Infierno con acero y antiguos pactos.</p></div>
                        </article>
                    </div>
                </section>

                <section class="field-note" aria-labelledby="field-note-title">
                    <div class="field-note-copy">
                        <p class="section-index">El archivo sigue creciendo</p>
                        <h2 id="field-note-title">Cada combatiente deja una historia.</h2>
                        <p>Consulta el registro completo y encuentra tu lugar en el frente.</p>
                    </div>
                    <div class="field-stats" aria-label="Contenido de la wiki">
                        <div><strong>12</strong><span>combatientes</span></div>
                        <div><strong>5</strong><span>facciones</span></div>
                    </div>
                    <button class="landing-cta" type="button" onclick="openWiki('home')">Consultar personajes <span aria-hidden="true">&#8250;</span></button>
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