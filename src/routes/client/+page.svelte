<script>
    import { Col, Container, Row } from "sveltestrap";
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-fade";
    import "swiper/css/pagination";

    import { Autoplay, Pagination } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    // Import Images
    import dost from "../assets/dost.webp";
    import nstdc from "../assets/nstdc.webp";
    import pcic from "../assets/pcic.webp";
    import sorsu from "../assets/ssu.webp";
    import veritas from "../assets/veritas.webp";
</script>

<div class="pt-5 mt-5">
    <Container>
        <Row>
            <Col lg={12}>
                <div class="text-center mt-5">
                    <h5 class="fs-20">PARTNER AGENCIES</h5>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
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
                        <SwiperSlide>
                            <div class="client-images">
                                <img
                                    src={sorsu}
                                    alt="client-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img
                                    src={veritas}
                                    alt="client-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img
                                    src={nstdc}
                                    alt="client-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img
                                    src={pcic}
                                    alt="client-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="client-images">
                                <img
                                    src={dost}
                                    alt="client-img"
                                    class="mx-auto img-fluid d-block"
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Col>
        </Row>
    </Container>
</div>
