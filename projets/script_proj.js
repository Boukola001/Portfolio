function switchLanguage(lang) {
    // Hide/show content sections
    document.querySelectorAll('section').forEach(section => {
        if (section.id.endsWith(lang)) {
            section.style.display = '';
        } 
        else {
            section.style.display = 'none';
        }
    });
}
// 🧩 Demande au parent la langue active
document.addEventListener("DOMContentLoaded", () => {
    try {
        const parentLang = window.parent.currentLang || "fr";
        switchLanguage(parentLang);
    } catch {
        // Si la page est ouverte seule (hors iframe)
        switchLanguage("fr");
    }
});