document.addEventListener("DOMContentLoaded", () => {
    const openMenuBtn = document.getElementById("open-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const sidebarMenu = document.getElementById("sidebar-menu");

    // 1. Abrir el menú al presionar el SVG (Hamburguesa)
    openMenuBtn.addEventListener("click", (e) => {
        sidebarMenu.classList.add("active");
        e.stopPropagation(); 
    });

    // 2. Cerrar el menú al presionar la X
    closeMenuBtn.addEventListener("click", () => {
        sidebarMenu.classList.remove("active");
    });

    // 3. Cerrar el menú automáticamente si se hace clic en una opción interna
    const menuItems = sidebarMenu.querySelectorAll(".nav-item");
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            sidebarMenu.classList.remove("active");
        });
    });

    // 4. NUEVO: Cerrar el menú al hacer clic en cualquier otra parte de la pantalla
    document.addEventListener("click", (e) => {
        
        if (sidebarMenu.classList.contains("active") && 
            !sidebarMenu.contains(e.target) && 
            !openMenuBtn.contains(e.target)) {
            sidebarMenu.classList.remove("active");
        }
    });
});