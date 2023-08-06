class swiper {
    swiperInst;
    isInited;
    params;
    constructor(params) {
        this.isInited = false
        this.params = params
        this.swiperInst = null
    }

    init() {
        const swiper1 = new Swiper('.swiper', this.params);
        this.swiperInst = swiper1
        this.isInited = true
    }

    destroy() {
        this.swiperInst.forEach(swiperInstance => swiperInstance.destroy())
        this.isInited = false
        this.swiperInst = null
    }

    isInited() {
        return this.isInited
    }

    update() {
        this.swiperInst.forEach(swiperInstance => swiperInstance.update())
    }
}

function initSwiper() {
    const swiperInstance = new swiper({
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000
        },
    
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

    })
    if (window.innerWidth <= 890) {
        swiperInstance.init()
        swiperInstance.update()
    }
    
    window.addEventListener('resize', function (e) {
        const width = window.innerWidth
        if (width <= 890) {
            if (!swiperInstance.isInited) swiperInstance.init()
            swiperInstance.update()
        } else {
            if (swiperInstance.isInited) {
                swiperInstance.destroy()
    
            }
        }
    })

    swiperInstance.update()
}

window.addEventListener('load', initSwiper)