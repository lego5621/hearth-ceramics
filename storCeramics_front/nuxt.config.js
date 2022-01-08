export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Керамика ручной работы' + ' - hearth.ceramics',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'На нашем сайте можно купить посуду ручной работы. А также другие изделия из керамики. hearth.ceramics поможет вам создать уютную атмосферу в вашем доме.',
            },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap',
            },
        ],
        // script: [
        //   { hid: 'stripe', src: 'js/jquery-3.3.1.min.js', defer: true },
        //   { hid: 'stripe', src: 'js/jquery.countdown.min.js', defer: true },
        //   { hid: 'stripe', src: 'js/jquery.magnific-popup.min.js', defer: true },
        //   { hid: 'stripe', src: 'js/jquery.nice-select.min.js', defer: true },
        //   { hid: 'stripe', src: 'js/jquery.nicescroll.min.js', defer: true },
        //   { hid: 'stripe', src: 'js/jquery.slicknav.js', defer: true },
        //   // { hid: 'stripe', src: 'js/main.js', defer: true },
        //   { hid: 'stripe', src: 'js/mixitup.min.js', defer: true },
        //   { hid: 'stripe', src: 'js/bootstrap.min.js', defer: true },
        // ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/css/bootstrap.min.css',
        // "~/assets/css/elegant-icons.css",
        '~/assets/css/font-awesome.min.css',
        // "~/assets/css/magnific-popup.css",
        // "~/assets/css/nice-select.css",
        // "~/assets/css/slicknav.min.css",
        '~/assets/css/style.css',
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    ],

    pageTransition: {
        // mode: '',
        // appear: true,
    },

    loading: false,

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/moment.js',
        '~/plugins/vueProductCarousel.js',
        { src: '~plugins/vueBurgerMenu.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/strapi', 'vue-toastification/nuxt'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    strapi: {
        entities: [
            'products',
            'categories',
            'blogs',
            'about',
            'product-series',
        ],
        url: 'http://localhost:1337',
    },
}
