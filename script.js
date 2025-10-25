function switchLanguage(lang) {
    // Hide/show content sections
    document.querySelectorAll('section').forEach(section => {
        if (section.id.endsWith(lang)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });

    // Change nav labels
    document.querySelectorAll('.nav-link').forEach(link => {
        link.textContent = link.getAttribute('data-' + lang);
    });

    // Change footer text
    document.querySelectorAll('footer span').forEach(span => {
        span.textContent = span.getAttribute('data-' + lang);
    });

    // Change <html lang="">
    document.documentElement.lang = lang;
}