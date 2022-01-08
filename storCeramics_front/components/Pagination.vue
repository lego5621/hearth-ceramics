<template>
    <div class="row" v-if="caunt / pageLimit > 1">
        <div class="col-lg-12">
            <div class="product__pagination">
                <NuxtLink
                    v-if="Number(this.$route.params.page) > 1"
                    :to="{
                        name: 'shop-category-category-series-series-page-page',
                        params: {
                            category: $route.params.category,
                            series: $route.params.series,
                            page: Number(this.$route.params.page) - 1,
                        },
                    }"
                >
                    {{ Number(this.$route.params.page) - 1 }}
                </NuxtLink>
                <NuxtLink
                    class="active"
                    :to="{
                        name: 'shop-category-category-series-series-page-page',
                        params: {
                            category: $route.params.category,
                            series: $route.params.series,
                            page: $route.params.page,
                        },
                    }"
                >
                    {{ this.$route.params.page }}
                </NuxtLink>
                <NuxtLink
                    v-if="Number(caunt / pageLimit) > this.$route.params.page"
                    :to="{
                        name: 'shop-category-category-series-series-page-page',
                        params: {
                            category: $route.params.category,
                            series: $route.params.series,
                            page: Number(this.$route.params.page) + 1,
                        },
                    }"
                >
                    {{ Number(this.$route.params.page) + 1 }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['caunt', 'pageLimit'],
}
</script>
