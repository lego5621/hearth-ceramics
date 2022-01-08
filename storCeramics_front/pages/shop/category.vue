<template>
    <TheLayout>
        <div class="flex-grow-1 d-flex flex-column">
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Магазин</h4>
                                <div class="breadcrumb__links">
                                    <NuxtLink to="/">Главная</NuxtLink>
                                    <span>Магазин</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shop spad">
                <div class="container">
                    <div class="row">
                        <ShopFilter />
                        <div class="col-lg-9">
                            <div class="shop__product__option"></div>
                            <transition name="fade" mode="out-in">
                                <NuxtChild
                                    :products="productList"
                                    :urlApi="urlApi"
                                    :productCaunt="productCaunt"
                                    :pageLimit="pageLimit"
                                />
                            </transition>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </TheLayout>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    data() {
        return {
            urlApi: 'http://localhost:1337',
        }
    },

    methods: {
        ...mapActions('product', ['fetchProductList']),
        ...mapMutations('product', ['clearProductList']),
    },

    computed: {
        ...mapGetters('product', ['productList', 'productCaunt', 'pageLimit']),
    },

    async beforeRouteUpdate(to, from, next) {
        await this.fetchProductList([to.params])
        document.body.scrollTop = document.documentElement.scrollTop = 0
        next()
    },

    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        await this.clearProductList()
        await this.fetchProductList([this.$route.params])
    },

    head() {
        return {
            title: 'Магазин' + ' - hearth.ceramics',
        }
    },
}
</script>

<style>
.fade-leave-active {
    transition: opacity 0.7s;
}

.fade-leave-to {
    opacity: 0;
}

select {
    background: white;
}
</style>
