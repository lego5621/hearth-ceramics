<template>
    <div class="flex-grow-1 d-flex">
        <TheLayout v-if="allData.Title">
            <section class="blog-hero spad">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-9 text-center">
                            <div class="blog__hero__text">
                                <h2>
                                    {{ allData.Title }}
                                </h2>
                                <ul>
                                    <li>
                                        {{
                                            allData.published_at | moment('LL')
                                        }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="blog-details">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-lg-12">
                            <div class="blog__details__pic">
                                <img
                                    :src="urlApi + allData.Logo.url"
                                    alt="Post blog logo"
                                />
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="blog__details__content">
                                <div
                                    class="blog__details__text"
                                    v-html="allData.Text"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TheLayout>
    </div>
</template>

<script>
export default {
    name: 'Grid',
    data() {
        return {
            allData: [],
            error: null,
            urlApi: 'http://localhost:1337',
        }
    },
    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
        try {
            this.allData = await this.$strapi.$blogs.findOne(
                this.$route.params.slug
            )
        } catch (error) {
            this.error = error
            this.$nuxt.error({ statusCode: 404 })
        }
    },

    head() {
        return {
            title: this.allData.Title + ' - hearth.ceramics',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.allData.blogSEODescription,
                },
            ],
        }
    },
}
</script>
