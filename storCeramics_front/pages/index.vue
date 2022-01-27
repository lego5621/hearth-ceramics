<template>
    <div v-if="allData[1]" class="flex-grow-1 d-flex">
        <TheLayout>
            <section class="banner">
                <div class="container">
                    <div class="row position-relative container__banner">
                        <div class="col-xl-4 banner__title">
                            <h2 class="mt-lg-5 mb-4">
                                Уникальные изделия ручной работы
                            </h2>
                        </div>
                        <div class="col-xl-7">
                            <div class="banner__item banner__item--first">
                                <div
                                    class="banner__item__pic rounded-lg banner__item__img"
                                >
                                    <img
                                        class="rounded-lg"
                                        :src="urlApi + allData[1][0].logo.url"
                                        :alt="'Серия' + allData[1][0].Name"
                                    />
                                </div>
                                <div class="banner__item__text">
                                    <h2>"{{ allData[1][0].name }}"</h2>
                                    <NuxtLink
                                        :to="{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                category: 'all',
                                                series: allData[1][0].slug,
                                                page: 1,
                                            },
                                        }"
                                        >К серии
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5">
                            <div
                                class="banner__item banner__item--middle banner__item__img--middle"
                            >
                                <div class="banner__item__pic rounded-lg">
                                    <img
                                        class="rounded-lg"
                                        :src="urlApi + allData[1][1].logo.url"
                                        :alt="'Серия' + allData[1][1].Name"
                                    />
                                </div>
                                <div class="banner__item__text">
                                    <h2>"{{ allData[1][1].name }}"</h2>
                                    <NuxtLink
                                        :to="{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                category: 'all',
                                                series: allData[1][1].slug,
                                                page: 1,
                                            },
                                        }"
                                        >К серии
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-7">
                            <div class="banner__item banner__item--last">
                                <div
                                    class="banner__item__pic rounded-lg banner__item__img--last"
                                >
                                    <img
                                        class="rounded-lg"
                                        :src="urlApi + allData[1][2].logo.url"
                                        :alt="'Серия' + allData[1][2].Name"
                                    />
                                </div>
                                <div class="banner__item__text">
                                    <h2>"{{ allData[1][2].name }}"</h2>
                                    <NuxtLink
                                        :to="{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                category: 'all',
                                                series: allData[1][2].slug,
                                                page: 1,
                                            },
                                        }"
                                        >К серии
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="position-absolute banner__all ">
                    <a href="#" class="font-weight-bold mt-4">#Все коллекции</a>
                </div> -->
                    </div>
                </div>
            </section>

            <section class="product spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 banner__title">
                            <h2 class="mb-4">Последние поступления</h2>
                        </div>
                    </div>
                    <div class="row product__filter">
                        <ProductCard
                            v-for="item in this.allData[0]"
                            :key="item.id"
                            :product="item"
                            :urlApi="urlApi"
                            lg="col-lg-3"
                        />
                    </div>
                </div>
            </section>

            <section class="instagram spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 instagram__text__wrap">
                            <div class="instagram__text">
                                <h2>Instagram</h2>
                                <p>
                                    Каждое новое изделие, сделанное нами не
                                    похоже на предыдущее. Форма, размер, цвет -
                                    всё уникальное.
                                    <br />
                                    <br />
                                    К каждому из них я питаю особые теплые
                                    чувства. Надеюсь они передадутся вам, вашему
                                    дому, семье и друзьям.
                                </p>
                                <h3 class="mb-2">
                                    <a :href="allData[3].Link" target="_blank">
                                        {{ allData[3].Name }}
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="instagram__pic">
                                <div
                                    class="instagram__pic__item set-bg"
                                    v-for="i in allData[3].img"
                                    :key="i.id"
                                >
                                    <img
                                        class="rounded-lg"
                                        :src="urlApi + i.url"
                                        :alt="allData[3].Name"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="latest spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <!-- <span>Последние посты</span> -->
                                <h2>Наш Блог</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div
                            class="col-lg-4 col-md-6 col-sm-6"
                            v-for="item in allData[2]"
                            :key="item.id"
                        >
                            <NuxtLink
                                :to="{
                                    name: 'blog-slug',
                                    params: { slug: item.slug },
                                }"
                            >
                                <div class="blog__item">
                                    <div
                                        class="blog__item__pic set-bg rounded-lg"
                                        :style="{
                                            'background-image':
                                                'url(' +
                                                urlApi +
                                                item.Logo.url +
                                                ')',
                                        }"
                                    ></div>
                                    <div class="blog__item__text rounded-lg">
                                        <span>
                                            <img
                                                src="img/icon/calendar.png"
                                                alt="calendar"
                                            />
                                            {{
                                                item.published_at
                                                    | moment('from')
                                            }}</span
                                        >
                                        <h5>{{ item.Title }}</h5>
                                        <!-- <a>Читать </a> -->
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
        </TheLayout>
    </div>
</template>

<script>
export default {
    name: 'Index',

    data() {
        return {
            allData: [],
            error: null,
            urlApi: 'http://194.87.111.244/api/',
        }
    },

    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        try {
            this.allData = await this.$strapi.find('categories/index')
        } catch (error) {
            this.error = error
        }
    },
}
</script>
