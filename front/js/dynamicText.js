async function dynamicText(i = 0, delay = 200, between = 5000) {
    const arr = ['Digiseller', 'Plati Market', 'GGSELL', 'FunPay']
    const element = document.querySelector('#dynamicText')
    let text = element.innerHTML
    if (!text.length) {
        for (let j = 0; j < arr[i].length; j++) {
            element.innerHTML += arr[i][j]
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, delay);
            });
        }
        i++
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve();
            }, between);
        });
        dynamicText(i)
    } else {
        for (let j = 0; j < text.length; j++) {
            element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - 1)
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    return resolve();
                }, delay);
            });
        }
        if (i == arr.length) {
            i = 0
        }
        dynamicText(i)
    }

}
window.addEventListener('load', dynamicText());