<template>
    <header class="header sticky-top">
        <div class="container">
            <div class="row">
                <div class="d-block d-md-none col-lg-12">
                    <div class="header__logo">
                        <h2 class="logo-text">
                            <NuxtLink to="/"> hearth.ceramics </NuxtLink>
                        </h2>
                    </div>
                </div>
                <div class="col-lg-10 col-md-9">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li>
                                <NuxtLink exact-active-class="active" to="/">
                                    Главная
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    :class="{ active: isShopPage }"
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
                            </li>
                            <li>
                                <NuxtLink
                                    exact-active-class="active"
                                    to="/about"
                                >
                                    О нас
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    :class="{ active: isBlogPage }"
                                    :to="{
                                        name: 'blog-page-page',
                                        params: {
                                            page: 1,
                                        },
                                    }"
                                >
                                    Блог
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink
                                    to="/contact"
                                    exact-active-class="active"
                                >
                                    Контакты и доставка
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-2 col-md-3 d-none d-md-block">
                    <NuxtLink to="/shop/card" class="header__nav__option">
                        <span href="#"
                            ><img src="/img/icon/cart.png" alt="cart"
                        /></span>
                        <span class="price">{{ getTotalPrice }}₽</span>
                    </NuxtLink>
                </div>
            </div>
            <div class="canvas__open">
                <button
                    class="menu"
                    :class="{ opened: menuOpen }"
                    aria-label="Main Menu"
                    @click="menuOpen = !menuOpen"
                >
                    <svg width="40" height="40" viewBox="0 0 100 100">
                        <path
                            class="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path class="line line2" d="M 20,50 H 80" />
                        <path
                            class="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <div class="dropdown" :class="{ 'dropdown-after': menuOpen }">
            <ul class="navlist">
                <li class="navlistitem" @click="menuOpen = !menuOpen">
                    <NuxtLink exact-active-class="active" to="/">
                        Главная
                    </NuxtLink>
                </li>
                <li class="navlistitem" @click="menuOpen = !menuOpen">
                    <NuxtLink
                        v-bind:class="{ active: isShopPage }"
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
                </li>
                <li class="navlistitem" @click="menuOpen = !menuOpen">
                    <NuxtLink exact-active-class="active" to="/about">
                        О нас
                    </NuxtLink>
                </li>
                <li class="navlistitem" @click="menuOpen = !menuOpen">
                    <NuxtLink
                        active-class="active"
                        :to="{
                            name: 'blog-page-page',
                            params: {
                                page: 1,
                            },
                        }"
                    >
                        Блог
                    </NuxtLink>
                </li>
                <li class="navlistitem" @click="menuOpen = !menuOpen">
                    <NuxtLink to="/contact" exact-active-class="active">
                        Контакты и доставка
                    </NuxtLink>
                </li>
                <li class="navlistitem" @click="menuOpen = !menuOpen">
                    <NuxtLink to="/shop/card" class="">
                        <span href="#">
                            <img src="/img/icon/cart.png" alt="cart" />
                        </span>
                        <span class="text">Корзина</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: function () {
        return {
            menuOpen: false,
        }
    },
    computed: {
        ...mapGetters('card', ['getTotalPrice']),
        isShopPage: function () {
            return (
                this.$nuxt.$route.name ==
                    'shop-category-category-series-series-page-page' ||
                this.$nuxt.$route.name == 'product-slug' ||
                this.$nuxt.$route.name == 'shop-card-checkout' ||
                this.$nuxt.$route.name == 'shop-card'
            )
        },
        isBlogPage: function () {
            return (
                this.$nuxt.$route.name ==
                    'blog-page-page' ||
                this.$nuxt.$route.name == 'blog-slug'
            )
        },
    },
}
</script>

<style>
a.activeLinkHeader {
    color: #111111 !important;
}

.header__nav__option {
    display: block;
}

.logo-text a {
    color: black;
}
.navbar {
    height: 50px;
    background-color: Lightgrey;
    display: flex;
    border-radius: 0px;
}

.logo1 {
    color: red;
}

.logo2 {
    color: grey;
}

.logo,
.hamburger-wrap {
    width: 100px;
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
}

.hamburger-wrap {
    float: right;
    justify-content: flex-end;
}

.hamburger {
    width: 45px;
    height: 45px;
    background-color: black;
    border-radius: 4px;
}

.hamburger:focus {
    outline: none;
}

.hamburger__line,
.hamburger__middle {
    display: block;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #ffffff;
    margin-top: 7px;
    margin-bottom: 7px;
}

.hamburger__middle {
    width: 20px;
    margin-left: 10px;
}

.dropdown {
    /* margin-top: -20px; */
    height: 0px;
    background-color: #ffffff;
    transition: height 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.dropdown-after {
    height: calc(100vh - 103px);
    transition: height 0.2s ease;
}

.navlist {
    list-style: none;
}

.navlistitem {
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
}

.navlistitem a {
    color: black;
}

.text {
    font-size: 15px;
    color: #111111;
    font-weight: 500;
    display: inline-block;
    margin-left: 5px;
    position: relative;
    top: 3px;
}

/* svg картинка */
.menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;
}
.line {
    fill: none;
    stroke: black;
    stroke-width: 4;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
    stroke-dasharray: 60 207;
    stroke-width: 4;
}
.line2 {
    stroke-dasharray: 60 60;
    stroke-width: 4;
}
.line3 {
    stroke-dasharray: 60 207;
    stroke-width: 4;
}
.opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 4;
}
.opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 4;
}
.opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 4;
}
</style>
