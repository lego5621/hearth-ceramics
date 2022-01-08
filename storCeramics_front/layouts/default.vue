<template>
    <div class="d-flex flex-column height-100">
        <Header />
        <div class="flex-grow-1 d-flex flex-column">
            <Nuxt />
        </div>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.7s;
}

.page-enter,
.page-leave-active {
    opacity: 0;
}

body {
    overflow-y: scroll;
}

html {
    scroll-behavior: smooth;
}

.Vue-Toastification__toast--default {
    background: #dae7f1 !important;
    color: black;
}

.Vue-Toastification__close-button {
    color: black;
}
</style>
