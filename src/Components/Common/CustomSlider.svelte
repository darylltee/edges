<script>
  import { onMount } from "svelte";
  import { Col, Container, Row } from "sveltestrap";
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/pagination";

  import src from "svelte-link";
  import { Autoplay, Pagination } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  export let slides = [];
  export let slidesPerView = 3;
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

<div>
  <Container>
    <Row>
      <Col lg={12}>
        <div class="text-center slider-container">
          <div class="swiper-button-prev nav-button" />
          <Swiper
            {slidesPerView}
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
                slidesPerView: slidesPerView,
              },
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            class="mySwiper swiper trusted-client-slider mt-sm-5 mt-4 mb-sm-5 mb-4"
          >
            {#each slides as slide}
              <SwiperSlide>
                <div class="slide-content">
                  <div class="box">
                    {#if slide.src}
                      <img
                        src={slide.src}
                        alt="client-img"
                        class="mx-auto img-fluid d-block slide-image"
                      />
                    {/if}

                    <!-- Title -->
                    <h5
                      class="mb-0"
                      style="color:rgba(0,0,0,0.8);font-weight:bold;"
                    >
                      {slide.title}
                    </h5>
                    <!-- Text -->
                    {#if slide.text}
                      <p style="color:rgba(0,0,0,0.8);font-weight:500;">
                        {slide.text}
                      </p>
                    {/if}
                    <!-- Know More button -->
                    {#if slide.link}
                      <button class="know-more-button" href={slide.link}
                        >Know More</button
                      >
                    {/if}
                  </div>
                </div>
              </SwiperSlide>
            {/each}
          </Swiper>

          <div class="swiper-button-next nav-button" />
        </div>
      </Col>
    </Row>
  </Container>
</div>

<style>
  .slide-image {
    width: 95%; /* Same as max-width for consistency */
    height: 200px; /* Same as max-height for consistency */
    overflow: hidden;
    margin: 0 10px;
  }
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
    position: relative; /* Add this line */
  }
  .box {
    background-color: #8dbd82; /* Green background color */
    color: white;
    padding: 10px;

    text-align: center;
    border-radius: 10px;
    width: 100%;
    vertical-align: middle;
    min-height: 100px;
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
  /* Add this block */
  .know-more-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    background-color: #5a9b5a;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .slide-content:hover .know-more-button {
    opacity: 1;
  }
</style>
