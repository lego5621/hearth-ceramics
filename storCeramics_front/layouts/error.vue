<template>
    <!-- <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred - {{ error.statusCode }} </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div> -->
    <div
        class="d-flex justify-content-center align-items-center flex-grow-1"
        id="main"
    >
        <h1
            class="mr-3 pr-3 align-top border-right inline-block align-content-center"
        >
            {{ error.statusCode }}
        </h1>
        <div class="inline-block align-middle">
            <h2 class="font-weight-normal lead" id="desc">
                Запрошенная вами страница не найдена.
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    props: ['error'],
        head() {
        return {
            title: '404' + ' - hearth.ceramics',
        }
    },
}
</script>
