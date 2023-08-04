function hideModal() {
    const modal = document.querySelector('.cookiePopup__wrapper')
    document.querySelector('body').removeChild(modal)
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
        document.querySelector('body').innerHTML += `
        <div class="cookiePopup__wrapper active" style="animation: 0.5s ease-out 0s 1 normal none running slideInFromBottom; bottom: 0px;">
            <div class="cookiePopup__container">
                <div class="cookiePopup__content">Мы используем файлы cookie. Продолжив работу с сайтом, вы соглашаетесь с
                    <div class="cookiePopup_link"><a class="cookiePopup_link-text" target="_blank" href="/ua/privacy">Политикой обработки персональных данных</a></div> и <a class="cookiePopup_link-text" target="_blank" href="/ua/privacy">Правилами пользования сайтом</a>.
                </div><button onclick="hideModal()">СОГЛАШАЮСЬ</button>
            </div>
        </div>
        `
    }
})