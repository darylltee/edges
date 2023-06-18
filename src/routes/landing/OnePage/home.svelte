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
    import creativeDemo from "../../../assets/images/demos/creative.png";
    import defaultDemo from "../../../assets/images/demos/default.png";
    import interactiveDemo from "../../../assets/images/demos/interactive.png";
    import materialDemo from "../../../assets/images/demos/material.png";
    import minimalDemo from "../../../assets/images/demos/minimal.png";
    import modernDemo from "../../../assets/images/demos/modern.png";
    import saasDemo from "../../../assets/images/demos/saas.png";
    import imgpattern from "../../../assets/images/landing/img-pattern.png";
    import slider01 from "./assets/bg-home.png";
    import slider02 from "./assets/farming01.png";
    import slider03 from "./assets/farming02.png";
    import slider04 from "./assets/farming04.png";
    import slider05 from "./assets/farming05.png";
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
                            src={slider04}
                            class="d-block w-500 mx-auto"
                            alt="..."
                        />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider05} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider03} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                    <SwiperSlide
                        class="carousel-inner shadow-lg p-2 bg-white rounded"
                    >
                        <img src={slider01} class="d-block w-100" alt="..." />
                    </SwiperSlide>
                </Swiper>
                <div class="text-center mt-lg-5 pt-5">
                    <h1 class="display-8 fw-bold mb-3 lh-base" style="text">
                        ENHANCING THE DEVELOPMENT AND GROWTH OF SEAWEED-BASED
                        ENTERPRISES IN SORSOGON <span class="text-success">
                            (EDGES)
                        </span>
                    </h1>
                    <p class="lead text-muted lh-base">
                        Revitalizing Sorsogon's Seaweed Industry: Overcoming
                        Challenges to Harness Global Demand and Foster Viable
                        Enterprises.
                    </p>

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

                <div class="mt-4 mt-sm-5 pt-sm-5 mb-sm-n5 demo-carousel">
                    <div class="demo-img-patten-top d-none d-sm-block">
                        <img
                            src={imgpattern}
                            class="d-block img-fluid"
                            alt="..."
                        />
                    </div>
                    <div class="demo-img-patten-bottom d-none d-sm-block">
                        <img
                            src={imgpattern}
                            class="d-block img-fluid"
                            alt="..."
                        />
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

    <div class="position-absolute start-0 end-0 bottom-0 hero-shape-svg">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1440 120"
        >
            <g mask="url(&quot;#SvgjsMask1003&quot;)" fill="none">
                <path
                    d="M 0,118 C 288,98.6 1152,40.4 1440,21L1440 140L0 140z"
                />
            </g>
        </svg>
    </div>
</section>
