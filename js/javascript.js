document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("menu-overlay").classList.toggle("active");
});

window.addEventListener("load", function() {
    let loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 500); // Pastikan display:none setelah transition selesai
});


