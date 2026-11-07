function Favoritos(){
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    
    const root = document.getElementById("root");
    root.innerHTML = `
        <section class="view-heading">
            <p>Archivo personal</p>
            <h1>Favoritos</h1>
            <span>Los combatientes que has marcado para volver a consultar.</span>
        </section>
    `;
    
    if(favoritos.length == 0){
        root.insertAdjacentHTML("beforeend", "<div class='c-vacio'><p>No hay personajes favoritos aún. ¡Agrega algunos!</p></div>");
    }else{
        let favHTML = "<div class='c-favoritos'><h2>Tus Personajes Favoritos</h2>";
        for (let i = 0; i < favoritos.length; i++) {
            const personaje = baseDatosTrench.find(p => p.id == favoritos[i].id);
            if (personaje) {
                favHTML += `
                <div class="c-fav-item" onclick="Detalle('${personaje.id}')">
                    <div class="fav-avatar">⚔️</div>
                    <h3>${personaje.name}</h3>
                    <p>${personaje.faction}</p>
                </div>`;
            }
        }
        favHTML += "</div>";
        root.insertAdjacentHTML("beforeend", favHTML);
    }
}