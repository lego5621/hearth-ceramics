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
                                                <p>Имя<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                    placeholder="Иван"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Фамилия<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                    placeholder="Иванов"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="checkout__input">
                                        <p>Страна<span>*</span></p>
                                        <input
                                            class="rounded-lg"
                                            type="text"
                                            placeholder="Россия"
                                        />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Область<span>*</span></p>
                                        <input
                                            type="text"
                                            placeholder="Московская"
                                            class="checkout__input__add rounded-jg"
                                        />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Город<span>*</span></p>
                                        <input
                                            class="rounded-lg"
                                            type="text"
                                            placeholder="Москва"
                                        />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Адрес<span>*</span></p>
                                        <input
                                            class="rounded-lg"
                                            type="text"
                                            placeholder="ул Московская дом 3"
                                        />
                                    </div>
                                    <div class="checkout__input">
                                        <p>Почтовый индекс<span>*</span></p>
                                        <input
                                            class="rounded-lg"
                                            type="text"
                                            v-mask="'######'"
                                            v-model="inputValue"
                                            placeholder="101000"
                                        />
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Телефон<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                    placeholder="+7 777 777 77 77"
                                                    v-mask="'+7 ### ### ## ##'"
                                                    v-model="telephoneValue"
                                                />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input
                                                    class="rounded-lg"
                                                    type="text"
                                                    placeholder="someone@example.com"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="checkout__input">
                                        <p>Записка для продавца</p>
                                        <input
                                            type="text"
                                            class="rounded-lg"
                                            placeholder="Напишите продавцу свои пожелания"
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
                                            <li>Доставка<span>300 ₽</span></li>
                                            <li>
                                                Сумма
                                                <span>
                                                    {{ getTotalPrice + 300 }} ₽
                                                </span>
                                            </li>
                                        </ul>
                                        <button
                                            type="submit"
                                            class="site-btn rounded-lg"
                                            v-on:click.prevent="showAlert"
                                        >
                                            К оплате
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
    data: function () {
        return {
            inputValue: '',
            telephoneValue: '',
        }
    },

    methods: {
        showAlert: function () {
            this.$toast('Оплата временно недоступна', {
                timeout: 2000,
                position: 'bottom-center',
                icon: false,
                hideProgressBar: true,
            })
        },
    },
}
</script>
