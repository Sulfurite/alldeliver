function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}
function showLanguages() {
    const ul = document.querySelector('.language-dropdown')
    ul.style.display = ul.style.display == "none" ? "block" : "none"
}