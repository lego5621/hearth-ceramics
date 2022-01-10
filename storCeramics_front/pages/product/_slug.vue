<template>
    <div class="flex-grow-1 d-flex">
        <TheLayout v-if="productItem[0]">
            <section class="shop-details">
                <div class="product__details__pic">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="product__details__breadcrumb">
                                    <NuxtLink to="/">Главная</NuxtLink>
                                    <NuxtLink
                                        :to="{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                category: 'all',
                                                series: 'all',
                                                page: 1,
                                            },
                                        }"
                                    >
                                        Магазин
                                    </NuxtLink>
                                    <span>
                                        {{ productItem[0].Name }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="carousel">
                                    <VueSlickCarousel
                                        :dots="true"
                                        :edgeFriction="0.35"
                                        :infinite="true"
                                        :slidesToShow="1"
                                        :slidesToScroll="1"
                                        :arrows="false"
                                        :autoplay="true"
                                        :speed="1000"
                                        :autoplaySpeed="3000"
                                    >
                                        <div
                                            class="d-flex center VueSlickCarouselDiv"
                                            v-for="img in productItem[0].image"
                                            :key="img.url"
                                        >
                                            <img
                                                class="VueSlickCarouselImg"
                                                :src="urlApi + img.url"
                                                :alt="productItem[0].Name"
                                            />
                                        </div>
                                    </VueSlickCarousel>
                                </div>
                            </div>
                            <div class="col-lg-5 center mt-5 mt-lg-0">
                                <div class="product__details__text">
                                    <h4 v-if="productItem[0]">
                                        {{ productItem[0].Name }}
                                    </h4>
                                    <h3 v-if="productItem[0]">
                                        {{
                                            Math.abs(
                                                productItem[0].Price *
                                                    this.count
                                            )
                                        }}₽
                                        <span v-if="productItem[0].OldPrice">
                                            {{
                                                Math.abs(
                                                    productItem[0].OldPrice *
                                                        this.count
                                                )
                                            }}₽
                                        </span>
                                    </h3>
                                    <p class="mb-3">
                                        {{ productItem[0].description }}
                                    </p>
                                    <p class="mb-2">
                                        <span class="font-weight-bold"
                                            >Серия:</span
                                        >
                                        {{ productItem[0].product_sery.name }}
                                    </p>
                                    <p class="mb-2">
                                        <span class="font-weight-bold"
                                            >Материалы:</span
                                        >
                                        {{ productItem[0].material }}
                                    </p>
                                    <p>
                                        <span class="font-weight-bold">
                                            В наличии:
                                        </span>
                                        {{ productItem[0].count }}
                                    </p>

                                    <div class="product__details__cart__option">
                                        <div class="form">
                                            <input
                                                type="number"
                                                class="rounded-lg"
                                                v-model.number="count"
                                                min="1"
                                                :max="productItem[0].count"
                                            />
                                            <button
                                                @click.prevent="
                                                    addProductInCart({
                                                        product: productItem[0],
                                                        count,
                                                    })
                                                "
                                                class="rounded-lg"
                                            >
                                                В корзину
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="related">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h4 class="mb-xl-4 mb-2 text-uppercase">
                                доставка
                            </h4>
                            <p>{{ productItem[2].delivery }}</p>
                        </div>
                        <div class="col-md-6 mt-md-0 mt-4">
                            <h4 class="mb-xl-4 mb-2 text-uppercase">
                                политика возврата
                            </h4>
                            <p>{{ productItem[2].returnPolicy }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mb-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3 class="related-title">Последние поступления</h3>
                        </div>
                    </div>
                    <div>
                        <div class="row" v-if="productItem[1] !== 'noData'">
                            <ProductCard
                                v-for="item in this.productItem[1]"
                                :key="item.id"
                                :product="item"
                                :urlApi="urlApi"
                                lg="col-lg-4"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </TheLayout>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    name: 'slug',
    data() {
        return {
            urlApi: 'http://localhost:1337',
            count: 1,
        }
    },

    methods: {
        ...mapActions('product', ['fetchProductItem']),
        ...mapMutations('card', ['addProductInCart']),
    },

    computed: {
        ...mapGetters('product', [
            'productItem',
            'productSEOTitle',
            'productSEODescription',
        ]),
    },

    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }

        try {
            await this.fetchProductItem(this.$route.params.slug)
        } catch {
            this.$nuxt.error({ statusCode: 404 })
        }
    },

    head() {
        return {
            title: this.productSEOTitle + ' - hearth.ceramics',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.productSEODescription,
                },
            ],
        }
    },
}
</script>

<style scoped>
.carousel {
    min-width: 100% !important;
    width: 0 !important;
}

img {
    pointer-events: none;
    border-radius: 10px;
    object-position: center;
    object-fit: cover;
}

.center {
    justify-content: center;
    align-items: center;
    padding: 0 10px;
}

.slick-slider {
    width: 100%;
    align-items: center;
}

.form {
    display: flex;
    justify-content: center;
}
input {
    width: 15%;
    padding: 5px;
    margin-right: 20px;
    border: none;
    text-align: center;
}

button {
    border: none;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 14px 30px;
    color: #ffffff;
    background: #000000;
    letter-spacing: 4px;
}

@media only screen and (min-width: 425px) {
    .VueSlickCarouselImg {
        height: 472.5px !important;
        width: 633px !important;
    }
}
</style>
