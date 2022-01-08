<template>
    <div class="col-md-6 col-sm-6 new-arrivals" v-bind:class="lg">
        <div class="product__item sale">
            <NuxtLink
                :to="{
                    name: 'product-slug',
                    params: { slug: product.slug },
                }"
            >
                <div
                    class="product__item__pic set-bg rounded-lg"
                    v-bind:style="{
                        'background-image':
                            'url(' + urlApi + product.image[0].url + ')',
                    }"
                >
                    <span class="label" v-if="product.OldPrice">Скидка</span>
                </div>
            </NuxtLink>
            <div class="product__item__text">
                <h6>{{ product.Name }}</h6>
                <span
                    @click.prevent="
                        addProductInCart({
                            product,
                            count: 1,
                        })
                    "
                    class="add-cart"
                >
                    + Добавить в корзину
                </span>
                <h5>
                    {{ product.Price }}₽
                    <span v-if="product.OldPrice">
                        {{ Math.abs(product.OldPrice) }}₽
                    </span>
                </h5>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Card',
    props: ['product', 'urlApi', 'lg'],
    methods: {
        ...mapMutations('card', ['addProductInCart']),
    },
}
</script>
