const AUTH_STORAGE_KEY = 'trench-auth-session';
const USERS_STORAGE_KEY = 'trench-users';

function getStoredUsers() {
    try {
        const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY));
        return Array.isArray(users) ? users : [];
    } catch (error) {
        return [];
    }
}

function saveStoredUsers(users) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    try {
        const user = JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
        return user && typeof user === 'object' ? user : null;
    } catch (error) {
        return null;
    }
}

function setCurrentUser(user) {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
}

function normalizeEmail(email) {
    return email.trim().toLowerCase();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isStrongPassword(password) {
    return password.length >= 6;
}

async function hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const data = encoder.encode(`${salt}:${password}`);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer))
        .map((value) => value.toString(16).padStart(2, '0'))
        .join('');
}

function generateSalt() {
    const randomValues = crypto.getRandomValues(new Uint8Array(16));
    return Array.from(randomValues)
        .map((value) => value.toString(16).padStart(2, '0'))
        .join('');
}

function createAuthMessage(text, type = 'info') {
    const container = document.createElement('div');
    container.className = `auth-message auth-message--${type}`;
    container.textContent = text;
    container.setAttribute('role', 'status');
    return container;
}

function buildAuthCard(mode) {
    const shell = document.createElement('section');
    shell.className = 'auth-shell';

    const card = document.createElement('div');
    card.className = 'auth-card';

    const eyebrow = document.createElement('p');
    eyebrow.className = 'auth-eyebrow';
    eyebrow.textContent = 'Cuenta opcional de Trench Crusade Wiki';

    const title = document.createElement('h1');
    title.className = 'auth-title';
    title.textContent = mode === 'register' ? 'Crear cuenta' : 'Iniciar sesión';

    const subtitle = document.createElement('p');
    subtitle.className = 'auth-subtitle';
    subtitle.textContent = mode === 'register'
        ? 'Regístrate para guardar tu experiencia y volver a entrar cuando quieras.'
        : 'Inicia sesión para consultar tu perfil y tu progreso. El contenido de la wiki es público.';

    const form = document.createElement('form');
    form.className = 'auth-form';
    form.id = mode === 'register' ? 'register-form' : 'login-form';

    const messageBox = document.createElement('div');
    messageBox.className = 'auth-message-box';

    const nameField = document.createElement('label');
    nameField.className = 'auth-field';
    nameField.innerHTML = `
        <span>Nombre</span>
        <input type="text" name="name" placeholder="Tu nombre de guerra" autocomplete="name" required ${mode === 'register' ? '' : 'disabled'}>
    `;

    const emailField = document.createElement('label');
    emailField.className = 'auth-field';
    emailField.innerHTML = `
        <span>Correo electrónico</span>
        <input type="email" name="email" placeholder="correo@ejemplo.com" autocomplete="email" required>
    `;

    const passwordField = document.createElement('label');
    passwordField.className = 'auth-field';
    passwordField.innerHTML = `
        <span>Contraseña</span>
        <input type="password" name="password" placeholder="Mínimo 6 caracteres" autocomplete="current-password" required>
    `;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'auth-submit';
    submitButton.textContent = mode === 'register' ? 'Registrarme' : 'Iniciar sesión';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'auth-toggle';
    toggle.textContent = mode === 'register'
        ? '¿Ya tienes cuenta? Inicia sesión'
        : '¿No tienes cuenta? Regístrate';

    form.append(messageBox, nameField, emailField, passwordField, submitButton, toggle);

    if (mode === 'register') {
        form.addEventListener('submit', handleRegisterSubmit);
        toggle.addEventListener('click', () => renderAuthScreen('login'));
    } else {
        form.addEventListener('submit', handleLoginSubmit);
        toggle.addEventListener('click', () => renderAuthScreen('register'));
    }

    card.append(eyebrow, title, subtitle, form);

    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.className = 'auth-back';
    backButton.textContent = 'Volver a la wiki';
    backButton.addEventListener('click', () => Landing());
    card.append(backButton);

    shell.append(card);
    return shell;
}

function renderAuthScreen(mode = 'login') {
    const root = document.getElementById('root');
    if (!root) {
        return;
    }

    root.innerHTML = '';
    root.append(buildAuthCard(mode));
    syncAuthControls();
}

function mergeUserMessage(messageBox, text, type) {
    messageBox.innerHTML = '';
    if (!text) {
        return;
    }
    messageBox.append(createAuthMessage(text, type));
}

function syncAuthControls() {
    const nav = document.querySelector('nav');
    if (!nav) {
        return;
    }

    let controls = document.getElementById('auth-controls');
    if (!controls) {
        controls = document.createElement('div');
        controls.id = 'auth-controls';
        nav.appendChild(controls);
    }

    const session = getCurrentUser();
    controls.innerHTML = '';

    if (!session) {
        const loginButton = document.createElement('button');
        loginButton.type = 'button';
        loginButton.className = 'nav-login';
        loginButton.textContent = 'Iniciar sesión';
        loginButton.addEventListener('click', () => renderAuthScreen('login'));

        const registerButton = document.createElement('button');
        registerButton.type = 'button';
        registerButton.className = 'nav-register';
        registerButton.textContent = 'Registrarme';
        registerButton.addEventListener('click', () => renderAuthScreen('register'));

        controls.append(loginButton, registerButton);
        return;
    }

    const label = document.createElement('span');
    label.className = 'auth-user-label';
    label.textContent = `Usuario: ${session.name}`;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'auth-logout';
    button.textContent = 'Cerrar sesión';
    button.addEventListener('click', logout);

    controls.append(label, button);
}

function Cuenta() {
    const session = getCurrentUser();
    if (!session) {
        renderAuthScreen('login');
        return;
    }

    const root = document.getElementById('root');
    const user = getStoredUsers().find((item) => normalizeEmail(item.email) === normalizeEmail(session.email));
    let favorites = [];
    let units = [];

    try {
        const storedFavorites = JSON.parse(localStorage.getItem('favoritos'));
        favorites = Array.isArray(storedFavorites) ? storedFavorites : [];
    } catch (error) {
        favorites = [];
    }

    try {
        const storedUnits = JSON.parse(localStorage.getItem('minasUnidades'));
        units = Array.isArray(storedUnits) ? storedUnits : [];
    } catch (error) {
        units = [];
    }

    const createdAt = user && user.createdAt ? new Date(user.createdAt) : null;
    const createdLabel = createdAt && !Number.isNaN(createdAt.getTime())
        ? new Intl.DateTimeFormat('es', { dateStyle: 'long' }).format(createdAt)
        : 'No disponible';

    root.innerHTML = `
        <section class="account-shell" aria-labelledby="account-title">
            <p class="section-index">Archivo personal</p>
            <h1 id="account-title">Tu cuenta</h1>
            <div class="account-panel">
                <div class="account-identity">
                    <span class="account-avatar" aria-hidden="true"></span>
                    <div><p class="account-label">Combatiente registrado</p><h2 class="account-name"></h2></div>
                </div>
                <dl class="account-details">
                    <div><dt>Correo electrónico</dt><dd class="account-email"></dd></div>
                    <div><dt>Miembro desde</dt><dd class="account-created"></dd></div>
                </dl>
                <div class="account-progress">
                    <div><span class="progress-number account-favorites"></span><span>Favoritos</span></div>
                    <div><span class="progress-number account-units"></span><span>Unidades reclutadas</span></div>
                </div>
                <div class="account-actions">
                    <button class="account-action" type="button">Ver favoritos <span aria-hidden="true">&#8594;</span></button>
                    <button class="account-action" type="button">Ver unidades <span aria-hidden="true">&#8594;</span></button>
                </div>
            </div>
        </section>
    `;

    root.querySelector('.account-name').textContent = session.name || 'Combatiente';
    root.querySelector('.account-email').textContent = session.email || 'No disponible';
    root.querySelector('.account-created').textContent = createdLabel;
    root.querySelector('.account-avatar').textContent = (session.name || 'T').trim().charAt(0).toUpperCase();
    root.querySelector('.account-favorites').textContent = favorites.length;
    root.querySelector('.account-units').textContent = `${units.length} / ${typeof totalPersonajes === 'number' ? totalPersonajes : 0}`;
    root.querySelectorAll('.account-action')[0].addEventListener('click', Favoritos);
    root.querySelectorAll('.account-action')[1].addEventListener('click', Capturados);
}

async function handleLoginSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const messageBox = form.querySelector('.auth-message-box');
    const email = normalizeEmail(form.email.value);
    const password = form.password.value;

    if (!isValidEmail(email)) {
        mergeUserMessage(messageBox, 'Ingresa un correo válido.', 'error');
        return;
    }

    const users = getStoredUsers();
    const user = users.find((item) => normalizeEmail(item.email) === email);

    if (!user) {
        mergeUserMessage(messageBox, 'No existe ninguna cuenta con ese correo.', 'error');
        return;
    }

    const hash = await hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
        mergeUserMessage(messageBox, 'La contraseña es incorrecta.', 'error');
        return;
    }

    setCurrentUser({
        email: user.email,
        name: user.name,
        loginAt: Date.now()
    });
    mergeUserMessage(messageBox, '¡Bienvenido de nuevo! Redirigiendo a la app…', 'success');
    syncAuthControls();

    if (typeof General === 'function') {
        General();
    }
}

async function handleRegisterSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const messageBox = form.querySelector('.auth-message-box');
    const name = form.name.value.trim();
    const email = normalizeEmail(form.email.value);
    const password = form.password.value;

    if (!name) {
        mergeUserMessage(messageBox, 'Ingresa tu nombre para continuar.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        mergeUserMessage(messageBox, 'Ingresa un correo válido.', 'error');
        return;
    }

    if (!isStrongPassword(password)) {
        mergeUserMessage(messageBox, 'La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }

    const users = getStoredUsers();
    const existingUser = users.find((item) => normalizeEmail(item.email) === email);

    if (existingUser) {
        mergeUserMessage(messageBox, 'Ese correo ya está registrado. Usa otra cuenta o inicia sesión.', 'error');
        return;
    }

    const salt = generateSalt();
    const passwordHash = await hashPassword(password, salt);

    users.push({
        email,
        name,
        passwordHash,
        salt,
        createdAt: new Date().toISOString()
    });

    saveStoredUsers(users);
    setCurrentUser({ email, name, loginAt: Date.now() });
    mergeUserMessage(messageBox, 'Cuenta creada correctamente. Entrando a la aplicación…', 'success');
    syncAuthControls();

    if (typeof General === 'function') {
        General();
    }
}

function logout() {
    clearCurrentUser();
    syncAuthControls();
    if (typeof General === 'function') {
        General();
    }
}

window.isAuthenticated = function () {
    return Boolean(getCurrentUser());
};

window.renderAuthScreen = renderAuthScreen;
window.Cuenta = Cuenta;
window.logout = logout;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        syncAuthControls();
    });
} else {
    syncAuthControls();
}
