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
                        <p class="landing-kicker">Frente de guerra <span aria-hidden="true"></span></p>
                        <h1 id="landing-title">Trench Crusade <em>Wiki</em></h1>
                        <p class="landing-intro">Explora el oscuro trasfondo, conoce las facciones y descubre las reglas de esta guerra sin fin. Las puertas del Infierno están abiertas.</p>
                        <div class="hero-actions">
                            <button class="landing-cta" type="button" onclick="openWiki('home')">
                                Entrar a la wiki <span aria-hidden="true">&#8250;</span>
                            </button>
                            <button class="landing-ghost" type="button" onclick="if (window.renderAuthScreen) { window.renderAuthScreen('login'); } else { openWiki('account'); }">
                                Iniciar sesión
                            </button>
                        </div>
                        <p class="landing-note">Sin bloqueo de acceso para explorar la historia, las fichas y la campaña.</p>
                    </div>
                    <div class="hero-caption" aria-hidden="true">
                        <span>Frente occidental</span>
                        <span>Archivo activo / 24h</span>
                        <span>Se abre la campaña</span>
                    </div>
                </section>

                <section class="command-strip" aria-label="Resumen del frente">
                    <article class="command-card">
                        <span class="command-label">facciones</span>
                        <strong>05</strong>
                        <p>Beligerantes activos en el conflicto.</p>
                    </article>
                    <article class="command-card">
                        <span class="command-label">personajes</span>
                        <strong>12</strong>
                        <p>Combatientes con historia y doctrina.</p>
                    </article>
                    <article class="command-card">
                        <span class="command-label">unidades</span>
                        <strong>24</strong>
                        <p>Modelos y líneas de combate registradas.</p>
                    </article>
                    <article class="command-card">
                        <span class="command-label">front</span>
                        <strong>∞</strong>
                        <p>La guerra sigue sin amnistía ni descanso.</p>
                    </article>
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

                <section class="battle-brief" aria-labelledby="battle-brief-title">
                    <div class="section-heading battle-brief-header">
                        <p class="section-index">Manual del frente</p>
                        <h2 id="battle-brief-title">Tres registros que cuentan la guerra</h2>
                    </div>
                    <div class="brief-grid">
                        <article class="brief-card brief-card-ruins">
                            <div class="brief-card-copy">
                                <span>01</span>
                                <h3>Ciudades bajo fuego</h3>
                                <p>Las urbes muertas conservan reliquias, armas y oraciones que aún siguen ardiendo en el barro.</p>
                            </div>
                        </article>
                        <article class="brief-card brief-card-saints">
                            <div class="brief-card-copy">
                                <span>02</span>
                                <h3>Héroes del hambre</h3>
                                <p>Soldados, clérigos y herejes se convierten en leyendas mientras el frente se extiende sin descanso.</p>
                            </div>
                        </article>
                        <article class="brief-card brief-card-war">
                            <div class="brief-card-copy">
                                <span>03</span>
                                <h3>El arte de la supervivencia</h3>
                                <p>La guerra destruye ciudades, pero también forja rituales, tácticas y costumbres que resisten al fin.</p>
                            </div>
                        </article>
                    </div>
                </section>

                <section class="war-operations" aria-labelledby="war-operations-title">
                    <div class="operations-copy">
                        <p class="section-index">Operaciones activas</p>
                        <h2 id="war-operations-title">Preparación para la siguiente ofensiva</h2>
                        <p>El frente no se mide solo por armas, sino por voluntad, disciplina y el valor de defender lo que aún queda en pie.</p>
                    </div>
                    <ul class="operations-list">
                        <li><strong>Reconocimiento</strong><span>Mapas, trincheras y rutas cortadas por la metralla.</span></li>
                        <li><strong>Asalto</strong><span>Fuerzas de choque, explosivos y unidades que rompen la línea enemiga.</span></li>
                        <li><strong>Resistencia</strong><span>Refuerzos, rituales y sacrificios para mantener la posición.</span></li>
                    </ul>
                </section>

                <section class="community-banner" aria-labelledby="community-title">
                    <div class="community-banner-copy">
                        <p class="section-index">Archivado en la noche</p>
                        <h2 id="community-title">Únete al cuaderno de campaña.</h2>
                        <p>Guarda tus favoritos, sigue a tus personajes y responde a la llamada del frente en cualquier momento.</p>
                    </div>
                    <button class="landing-cta" type="button" onclick="openWiki('account')">Tu cuenta <span aria-hidden="true">&#8250;</span></button>
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

                ${renderNewsletterSection()}
            </main>
            <footer class="landing-footer">
                <a class="footer-brand" href="#" onclick="Landing(); return false;">Trench Crusade <span>Wiki</span></a>
                <p>Proyecto comunitario no oficial. Trench Crusade y sus elementos pertenecen a sus respectivos creadores.</p>
                <span>Que el barro tenga piedad.</span>
            </footer>
        </div>
    `;

    attachNewsletterForm();
}

function renderNewsletterSection() {
    return `
        <section class="newsletter-section" aria-labelledby="newsletter-title">
            <div class="newsletter-copy">
                <p class="section-index">Boletín de guerra</p>
                <h2 id="newsletter-title">Recibe los últimos reportes del frente.</h2>
                <p>Déjanos tu correo y te enviaremos las novedades de la wiki.</p>
            </div>
            <form class="newsletter-form" id="newsletter-form">
                <label class="sr-only" for="newsletter-email">Tu correo electrónico</label>
                <input
                    id="newsletter-email"
                    type="email"
                    name="user_email"
                    placeholder="tu@correo.com"
                    autocomplete="email"
                    required
                >
                <button class="landing-cta" type="submit">Suscribirme</button>
                <p class="newsletter-status" id="newsletter-status" role="status" aria-live="polite"></p>
            </form>
        </section>
    `;
}

function attachNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    const status = document.getElementById('newsletter-status');
    const submitButton = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        status.textContent = '';

        try {
            if (!window.emailjs || typeof window.emailjs.sendForm !== 'function') {
                throw new Error('No se pudo cargar EmailJS.');
            }

            await window.emailjs.sendForm(
                'service_jlpj0ib',
                'template_4fauh0h',
                form,
                { publicKey: 't2mU6sUoKt1-Qs22G' }
            );
            form.reset();
            status.textContent = '¡Inscripción exitosa! Revisa la bandeja de entrada del correo registrado.';
        } catch (error) {
            console.error('Error al enviar la suscripción con EmailJS:', error);
            status.textContent = 'No se pudo completar la inscripción. Inténtalo de nuevo.';
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Suscribirme';
        }
    });
}

function Newsletter() {
    const root = document.getElementById('root');
    if (!root) {
        return;
    }

    root.innerHTML = `
        <div class="landing-page newsletter-page">
            <main>${renderNewsletterSection()}</main>
        </div>
    `;

    attachNewsletterForm();
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
        account: Cuenta,
        newsletter: Newsletter
    };

    if (views[view]) {
        views[view]();
    }
}

window.Landing = Landing;
window.Newsletter = Newsletter;
window.openWiki = openWiki;