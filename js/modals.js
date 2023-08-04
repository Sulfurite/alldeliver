function hideModal() {
    const modal = document.querySelector('.cookiePopup__wrapper')
    modal.classList.toggle('active')
    document.cookie = 'accept = true'
    console.log(document.cookie)
}
function showMore() {
    Swal.fire(
        'Подробнее',
        'Прив',
        'question'
    )
}

window.addEventListener('load', function (e) {

    if (!document.cookie.includes('accept=true')) {
        const modal = document.querySelector('.cookiePopup__wrapper').classList.toggle('active')
    }
})