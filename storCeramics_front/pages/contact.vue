<template>
    <div class="flex-grow-1 d-flex">
        <TheLayout>
            <div class="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d127923.66171553332!2d30.35072638253602!3d59.93534109534734!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1639492775042!5m2!1sru!2sru"
                    width="600"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <section class="contact spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="contact__text">
                                <div class="section-title">
                                    <!-- <span>Информация</span> -->
                                    <h2>Доставка</h2>
                                    <p>
                                        Срочная доставка по Санкт-Петербургу -
                                        500 руб.
                                        <br />
                                        По России: до пункта самовывоза СДЭК.
                                        300 руб.
                                        <br />
                                        При заказе от 3000 руб доставка
                                        бесплатно.
                                    </p>
                                </div>
                                <ul>
                                    <li>
                                        <h4>Россия, Санкт-Петербург</h4>
                                        <p>
                                            Email: hearth.ceramics.spb@gmail.com
                                        </p>
                                        <p>Телефон: +7 920 711-83-30</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="contact__form">
                                <form action="#">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input
                                                type="text"
                                                class="rounded-lg"
                                                placeholder="Имя"
                                            />
                                        </div>
                                        <div class="col-lg-6">
                                            <input
                                                type="text"
                                                placeholder="Почта"
                                                class="rounded-lg"
                                            />
                                        </div>
                                        <div class="col-lg-12">
                                            <textarea
                                                placeholder="Сообщение"
                                                class="rounded-lg"
                                            ></textarea>
                                            <button
                                                type="submit"
                                                class="site-btn rounded-lg"
                                            >
                                                Отправить
                                            </button>
                                        </div>
                                    </div>
                                </form>
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
    async fetch() {
        if (process.client) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
    },

    head() {
        return {
            title: 'Контакты' + ' - hearth.ceramics',
        }
    },
}
</script>
