<template>
    <TheLayout v-if="InfoAbaut[0]">
        <section class="breadcrumb-option">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb__text">
                            <h4>О нас</h4>
                            <div class="breadcrumb__links">
                                <NuxtLink to="/">Главная</NuxtLink>
                                <span>О нас</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="about spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__pic">
                            <img
                                class="rounded-lg"
                                :src="urlApi + InfoAbaut[0].MainLogo.url"
                                alt="about logo"
                            />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="about__item">
                            <h4>Кто мы ?</h4>
                            <p>
                                {{ InfoAbaut[0].WhoWeAre }}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="about__item">
                            <h4>Что мы делаем ?</h4>
                            <p>
                                {{ InfoAbaut[0].WhoWeDo }}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="about__item">
                            <h4>Как мы делаем ?</h4>
                            <p>
                                {{ InfoAbaut[0].HowDoWeDo }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="testimonial">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 p-0 d-flex quote-flex">
                        <div class="testimonial__text">
                            <p>" {{ InfoAbaut[0].Quote }} "</p>
                        </div>
                    </div>
                    <div class="col-lg-6 p-0">
                        <div
                            class="testimonial__pic set-bg"
                            v-bind:style="{
                                'background-image':
                                    'url(' +
                                    urlApi +
                                    InfoAbaut[0].QuoteImg.url +
                                    ')',
                            }"
                        ></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="counter spad">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="counter__item">
                            <div class="counter__item__number">
                                <h2 class="cn_num">
                                    Продавец и творец. Разумова Мария Сергеевна.
                                    ИНН 463231996087
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="team spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Наша команда</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div
                        class="col-lg-4 col-md-6 col-sm-6"
                        v-for="i in InfoAbaut[1]"
                        v-bind:key="i.id"
                    >
                        <div class="team__item">
                            <div
                                class="about__item__pic set-bg rounded-lg"
                                v-bind:style="{
                                    'background-image':
                                        'url(' + urlApi + i.Avatar.url + ')',
                                }"
                            ></div>
                            <h4>{{ i.Name }}</h4>
                            <span>{{ i.Position }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </TheLayout>
</template>

<script>
export default {
    name: 'Index',

    data() {
        return {
            InfoAbaut: [],
            error: null,
            urlApi: 'http://localhost:1337',
        }
    },
    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        try {
            this.InfoAbaut = await this.$strapi.$about.find()
        } catch (error) {
            this.error = error
        }
    },

    head() {
        return {
            title: 'О нас' + ' - hearth.ceramics',
        }
    },
}
</script>
