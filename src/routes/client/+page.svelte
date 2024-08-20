<script>
    import { onMount } from "svelte";
    import { Col, Container, Row } from "sveltestrap";
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-fade";
    import "swiper/css/pagination";

    import { Autoplay, Pagination } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    // Import Images

    // on mount
    onMount(() => {
        // scroll to top
        // get swiper instance
        const swiper = document.querySelector(".trusted-client-slider").swiper;
        // get button next
        const next = document.querySelector(".swiper-button-next");
        // get button prev
        const prev = document.querySelector(".swiper-button-prev");
        // add event listener to next button
        next.addEventListener("click", () => {
            swiper.slideNext();
        });
        // add event listener to prev button
        prev.addEventListener("click", () => {
            swiper.slidePrev();
        });

        console.log(swiper);
    });
</script>

<div class="pt-5 mt-5">
    <Container>
        <Row>
            <Col lg={12}>
                <div class="text-center mt-5 slider-container">
                    <div class="swiper-button-prev nav-button" />
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={25}
                        pagination={false}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        loop={true}
                        modules={[Pagination, Autoplay]}
                        class="mySwiper swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4"
                    >
                        <!-- Slide 1 -->
                        <SwiperSlide>
                            <div class="slide-content">
                                <div class="box">
                                    <h3>Publication</h3>
                                    <p>
                                        at least one (1) draft article for
                                        publication in highly regarded
                                        peer-reviewed journals and one (1)
                                        policy brief
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <!-- Slide 2 -->
                        <SwiperSlide>
                            <div class="slide-content">
                                <div class="box">
                                    <h3>Products</h3>
                                    <p>
                                        one (1) geo-map, seaweed producers, and
                                        consolidators database to be easily
                                        accessed by various stakeholders
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <!-- Slide 3 -->
                        <SwiperSlide>
                            <div class="slide-content">
                                <div class="box">
                                    <h3>People and Services</h3>
                                    <p>
                                        at least 81 seaweed farmers and
                                        processors directly benefit from the
                                        interventions
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div class="swiper-button-next nav-button" />
                </div>
            </Col>
        </Row>
    </Container>
</div>

<style>
    .slider-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .swiper {
        width: 300px;
        margin: 0 20px;
    }
    .slide-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
    }
    .box {
        background-color: #5a9b5a; /* Green background color */
        color: white;
        padding: 20px;
        text-align: center;
        border-radius: 10px;
        width: 100%;
    }
    .nav-button {
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        /* align vertically center*/
    }
    .swiper-button-next:after {
        color: #5a9b5a !important;
    }
    .swiper-button-prev:after {
        color: #5a9b5a !important;
    }
    .swiper-button-prev {
        background-color: transparent;
    }
    .swiper-button-next {
        background-color: transparent;
    }
</style>
