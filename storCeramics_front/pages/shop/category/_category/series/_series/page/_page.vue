<template>
    <div>
        <div class="placeholder" v-if="!products[0]"></div>
        <div v-if="products[0] !== 'noData'">
            <div class="row">
                <ProductCard
                    v-for="item in this.products"
                    :key="item.id"
                    :product="item"
                    :urlApi="urlApi"
                    lg="col-lg-4"
                />
            </div>
            <Pagination :caunt="productCaunt" :pageLimit="pageLimit" />
        </div>
        <p class="text-center" v-if="products[0] === 'noData'">
            Извините, мы ничего не нашли :(
        </p>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['products', 'urlApi', 'productCaunt', 'pageLimit'],
    methods: {
        ...mapActions('product', ['fetchProductList']),

        fetchMoreProductList: function () {
            this.fetchProductList([this.$route.params])
        },
    },
}
</script>

<style scoped>
/* placeholder Нужен для того чтобы ебучий футер не дергался во время первой загрузки страницы */
.placeholder {
    min-height: 700px;
}

.text-center {
    text-align: center;
    font-size: 18px;
    color: #111111;
    display: block;
    font-weight: 600;
}
</style>
