<template>
    <div>
        <TheLayout>
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Оплата и доставка</h4>
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
                                    <NuxtLink to="/shop/card">Корзина</NuxtLink>
                                    <span>Оплата и доставка</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Breadcrumb Section End -->

            <!-- Checkout Section Begin -->
            <section class="checkout spad">
                <div class="container">
                    <div class="checkout__form">
                        <form action="#">
                            <div class="row">
                                <div class="col-lg-8 col-md-6">
                                    <h6 class="checkout__title">
                                        Реквизиты доставки
                                    </h6>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkout__input">
                                        <p>Country<span>*</span></p>
                                        <input class="rounded-lg" type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            class="checkout__input__add rounded-jg"
                                        />
                                        <input
                                            type="text"
                                            class="rounded-lg"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                        />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input class="rounded-lg" type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input class="rounded-lg" type="text" />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Postcode / ZIP<span>*</span></p>
                                        <input class="rounded-lg" type="text" />
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="checkout__input">
                                        <p>Order notes<span>*</span></p>
                                        <input
                                            type="text"
                                            class="rounded-lg"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="checkout__order rounded-lg">
                                        <h4 class="order__title">Корзина</h4>
                                        <div class="checkout__order__products">
                                            Название <span>Цена</span>
                                        </div>
                                        <ul class="checkout__total__products">
                                            <li
                                                v-for="product in getCart"
                                                :key="product.slug"
                                            >
                                                {{ product.name }}
                                                <span>
                                                    {{
                                                        product.price *
                                                        product.count
                                                    }}
                                                    ₽
                                                </span>
                                            </li>
                                        </ul>
                                        <ul class="checkout__total__all">
                                            <li>
                                                Сумма
                                                <span
                                                    >{{ getTotalPrice }} ₽</span
                                                >
                                            </li>
                                        </ul>
                                        <button
                                            type="submit"
                                            class="site-btn rounded-lg"
                                        >
                                            Оплатить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </TheLayout>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('card', ['getCart', 'getTotalPrice']),
    },
}
</script>
