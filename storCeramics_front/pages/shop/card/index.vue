<template>
    <div class="flex-grow-1 d-flex">
        <TheLayout>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Корзина</h4>
                                <div class="breadcrumb__links">
                                    <NuxtLink to="/">Главная</NuxtLink>
                                    <NuxtLink
                                        :to="{
                                            name: 'shop-category-category-series-series-page-page',
                                            params: {
                                                series: 'all',
                                                category: 'all',
                                                page: 1,
                                            },
                                        }"
                                    >
                                        Магазин
                                    </NuxtLink>
                                    <span>Корзина</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="d-flex flex-column flex-grow-1 align-items-center"
                v-if="!Object.keys(getCart).length"
            >
                <div class="flex-grow-1 center">
                    <h4>Ваша корзина пуста</h4>
                </div>
            </section>
            <section
                class="shopping-cart spad"
                v-if="Object.keys(getCart).length"
            >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Товар</th>
                                            <th>Количество</th>
                                            <th>Сумма</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="prod in getCart"
                                            v-bind:key="prod.slug"
                                        >
                                            <td class="product__cart__item">
                                                <NuxtLink
                                                    :to="{
                                                        name: 'product-slug',
                                                        params: {
                                                            slug: prod.slug,
                                                        },
                                                    }"
                                                >
                                                    <div
                                                        class="product__cart__item__pic"
                                                    >
                                                        <img
                                                            :src="
                                                                urlApi +
                                                                prod.image
                                                            "
                                                            :alt="prod.name"
                                                            class="rounded-lg"
                                                        />
                                                    </div>
                                                    <div
                                                        class="product__cart__item__text"
                                                    >
                                                        <h6>
                                                            {{ prod.name }}
                                                        </h6>
                                                        <h5>
                                                            {{ prod.price }} ₽
                                                        </h5>
                                                    </div>
                                                </NuxtLink>
                                            </td>
                                            <td class="quantity__item">
                                                <CartInputPrice
                                                    :product="prod"
                                                />
                                            </td>
                                            <td class="cart__price">
                                                {{ prod.price * prod.count }} ₽
                                            </td>
                                            <td
                                                class="cart__close"
                                                @click="
                                                    removeProduct({
                                                        product: prod,
                                                    })
                                                "
                                            >
                                                <i class="fa fa-close"></i>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cart__total rounded-lg">
                                <h6>Цена корзины</h6>
                                <ul>
                                    <li>Доставка<span>300 ₽</span></li>
                                    <li>
                                        Итого <span>{{ getTotalPrice +300 }} ₽</span>
                                    </li>
                                </ul>
                                <NuxtLink
                                    class="primary-btn rounded-lg"
                                    to="/shop/card/checkout"
                                >
                                    Оформить заказ
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TheLayout>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    data: function () {
        return {
            urlApi: 'http://localhost:1337',
            caunt: 0,
        }
    },
    computed: {
        ...mapGetters('card', ['getCart', 'getTotalPrice']),
    },
    methods: {
        ...mapMutations('card', ['removeProduct']),
    },
}
</script>

<style scoped>
.center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    object-position: center center;
}

.cart__close i {
    cursor: pointer;
}

tr.clear-card {
    border: none;
    text-align: center;
    width: 100%;
}
</style>
