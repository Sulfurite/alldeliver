function initHeight() {
    let img = document.querySelector('.showcase__image')
    document.querySelector('.showcase').style.cssText = `height: ${img.offsetHeight + 400}px`
}
window.addEventListener('load', initHeight());