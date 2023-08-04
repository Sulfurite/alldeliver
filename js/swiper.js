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
}

const swiperInstance = new swiper({
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
if (window.innerWidth <= 890) {
    swiperInstance.init()
}

window.addEventListener('resize', function (e) {
    const width = window.innerWidth
    if (width <= 890) {
        if (!swiperInstance.isInited) swiperInstance.init()
    } else {
        if (swiperInstance.isInited) {
            swiperInstance.destroy()

        }
    }
})