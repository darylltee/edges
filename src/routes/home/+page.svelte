<script>
    import { Col, Container, Row } from "sveltestrap";
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/effect-fade";
    import "swiper/css/pagination";

    import { Autoplay, EffectFade } from "swiper";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    // Import Images
    import Link from "svelte-link";
    import creativeDemo from "../../assets/images/demos/creative.png";
    import defaultDemo from "../../assets/images/demos/default.png";
    import interactiveDemo from "../../assets/images/demos/interactive.png";
    import materialDemo from "../../assets/images/demos/material.png";
    import minimalDemo from "../../assets/images/demos/minimal.png";
    import modernDemo from "../../assets/images/demos/modern.png";
    import saasDemo from "../../assets/images/demos/saas.png";
    import imgpattern from "../../assets/images/landing/img-pattern.png";
    import slider01 from "../assets/bg-home.webp";
    import slider02 from "../assets/farming01.webp";
    import slider03 from "../assets/farming02.webp";
    import slider04 from "../assets/farming04.webp";
    import slider05 from "../assets/farming05.webp";
    import slider06 from "../assets/farming07.webp";
    import slider07 from "../assets/farming08.webp";
    import slider08 from "../assets/farming09.webp";
    import slider09 from "../assets/farming10.webp";
    import slider10 from "../assets/farming11.webp";
</script>

<div
    class="vertical-overlay"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent.show"
/>
<section class="section pb-0 hero-section" id="hero">
    <div class="bg-overlay bg-overlay-pattern" />
    <Container>
        <Row class="justify-content-center">
            <Col lg={12} sm={10}>
                <Swiper
                    spaceBetween={30}
                    effect={"fade"}
                    loop={true}
                    style="height:450px;margin-bottom:-8%;"
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{ delay: 10000, disableOnInteraction: false }}
                    modules={[EffectFade, Autoplay]}
                    class="mySwiper"
                >
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img
                            src={slider01}
                            class="d-block w-500 mx-auto"
                            alt="..."
                        />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider09} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider05} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider08} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider06} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider07} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                </Swiper>
                <div class="text-center mt-lg-5 pt-5">
                    <h1 class="display-8 fw-bold mb-3 lh-base" style="text">
                        ENHANCING THE DEVELOPMENT AND GROWTH OF SEAWEED-BASED
                        ENTERPRISES IN SORSOGON <span class="text-success">
                            (EDGES)
                        </span>
                    </h1>

                    <!--<div class="d-flex gap-2 justify-content-center mt-4">
                        <Link
                            href="/authenticationInner/register/auth-signup-basic"
                            class="btn btn-primary"
                            >Get Started <i
                                class="ri-arrow-right-line align-middle ms-1"
                            /></Link
                        >
                        <Link
                            href="/pages/pricing/pages-pricing"
                            class="btn btn-danger"
                            >View Plans <i
                                class="ri-eye-line align-middle ms-1"
                            /></Link
                        >
                    </div>-->
                    <br />
                </div>
            </Col>
        </Row>
    </Container>
</section>
