<template>
    <div class="flex-grow-1 d-flex">
        <TheLayout v-if="blogList[0]">
            <section
                class="breadcrumb-blog set-bg"
                :style="{
                    'background-image': 'url(/img/breadcrumb-bg.jpg)',
                }"
            >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="blogH2">Наш блог</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="blog spad">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-lg-4 col-md-6 col-sm-6"
                            v-for="item in blogList"
                            :key="item.id"
                        >
                            <div class="blog__item">
                                <div
                                    class="blog__item__pic set-bg rounded-lg"
                                    v-bind:style="{
                                        'background-image':
                                            'url(' +
                                            urlApi +
                                            item.Logo.url +
                                            ')',
                                    }"
                                ></div>
                                <div class="blog__item__text rounded-lg">
                                    <span>
                                        <img
                                            src="/img/icon/calendar.png"
                                            alt="calendar"
                                        />
                                        {{ item.published_at | moment('from') }}
                                    </span>
                                    <h5>{{ item.Title }}</h5>
                                    <NuxtLink
                                        :to="{
                                            name: 'blog-slug',
                                            params: { slug: item.slug },
                                        }"
                                        >Читать
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="blogCaunt / pageLimit > 1">
                        <div class="col-lg-12">
                            <div class="product__pagination">
                                <NuxtLink
                                    v-if="Number(this.$route.params.page) > 1"
                                    :to="{
                                        name: 'blog-page-page',
                                        params: {
                                            page:
                                                Number(
                                                    this.$route.params.page
                                                ) - 1,
                                        },
                                    }"
                                >
                                    {{ Number(this.$route.params.page) - 1 }}
                                </NuxtLink>
                                <NuxtLink
                                    class="active"
                                    :to="{
                                        name: 'blog-page-page',
                                        params: {
                                            page: $route.params.page,
                                        },
                                    }"
                                >
                                    {{ this.$route.params.page }}
                                </NuxtLink>
                                <NuxtLink
                                    v-if="
                                        Number(blogCaunt / pageLimit) >
                                        this.$route.params.page
                                    "
                                    :to="{
                                        name: 'blog-page-page',
                                        params: {
                                            page:
                                                Number(
                                                    this.$route.params.page
                                                ) + 1,
                                        },
                                    }"
                                >
                                    {{ Number(this.$route.params.page) + 1 }}
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
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
    name: 'Grid',

    data() {
        return {
            allData: [],
            error: null,
            urlApi: 'http://localhost:1337',
        }
    },

    methods: {
        ...mapActions('blog', ['fetchBlogList']),
        ...mapMutations('blog', ['clearBlogList']),
    },

    computed: {
        ...mapGetters('blog', ['blogList', 'blogCaunt', 'pageLimit']),
    },

    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }

        try {
            await this.clearBlogList()
            await this.fetchBlogList([this.$route.params])
        } catch (error) {
            this.$nuxt.error({ statusCode: 404 })
        }
    },

    head() {
        return {
            title: 'Блог' + ' - hearth.ceramics',
        }
    },

    // methods: {

    //     fetchMoreProductList: function () {
    //         this.fetchBlogList([this.$route.params])
    //     },
    // },
}
</script>
