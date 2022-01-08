<template>
    <div class="col-lg-3 pt-lg-5">
        <div class="shop__sidebar">
            <div class="shop__sidebar__accordion">
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-heading">
                            <span>Категории</span>
                        </div>
                        <div class="card-body">
                            <div
                                class="shop__sidebar__categories"
                                v-if="category[0]"
                            >
                                <ul class="nice-scroll">
                                    <li>
                                        <NuxtLink
                                            :class="
                                                $route.params.category == 'all'
                                                    ? 'activeFilter'
                                                    : ''
                                            "
                                            :to="{
                                                name: 'shop-category-category-series-series-page-page',
                                                params: {
                                                    category: 'all',
                                                    series: $route.params
                                                        .series,
                                                    page: 1,
                                                },
                                            }"
                                        >
                                            Все
                                        </NuxtLink>
                                    </li>
                                    <li v-for="i in category" :key="i.id">
                                        <NuxtLink
                                            :class="
                                                $route.params.category == i.slug
                                                    ? 'activeFilter'
                                                    : ''
                                            "
                                            :to="{
                                                name: 'shop-category-category-series-series-page-page',
                                                params: {
                                                    category: i.slug,
                                                    series: $route.params
                                                        .series,
                                                    page: 1,
                                                },
                                            }"
                                        >
                                            {{ i.name }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-heading">
                            <span>Серии</span>
                        </div>
                        <div
                            id="collapseThree"
                            class="collapse show"
                            data-parent="#accordionExample"
                        >
                            <div class="card-body">
                                <div class="shop__sidebar__price">
                                    <ul class="nice-scroll">
                                        <li>
                                            <NuxtLink
                                                :class="
                                                    $route.params.series ==
                                                    'all'
                                                        ? 'activeFilter'
                                                        : ''
                                                "
                                                :to="{
                                                    name: 'shop-category-category-series-series-page-page',
                                                    params: {
                                                        series: 'all',
                                                        category:
                                                            $route.params
                                                                .category,
                                                        page: 1,
                                                    },
                                                }"
                                            >
                                                Все
                                            </NuxtLink>
                                        </li>

                                        <li v-for="i in series" :key="i.id">
                                            <NuxtLink
                                                :class="
                                                    $route.params.series ==
                                                    i.slug
                                                        ? 'activeFilter'
                                                        : ''
                                                "
                                                :to="{
                                                    name: 'shop-category-category-series-series-page-page',
                                                    params: {
                                                        series: i.slug,
                                                        category:
                                                            $route.params
                                                                .category,
                                                        page: 1,
                                                    },
                                                }"
                                            >
                                                {{ i.name }}
                                            </NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            category: [],
            series: [],
            error: null,
            urlApi: 'http://localhost:1337',
        }
    },
    async beforeCreate() {
        try {
            this.category = await this.$strapi.$categories.find()
            this.series = await this.$strapi['$product-series'].find()
        } catch (error) {
            this.error = error
        }
    },
}
</script>

<style scoped>
a.activeFilter {
    color: #111111 !important;
}
</style>
