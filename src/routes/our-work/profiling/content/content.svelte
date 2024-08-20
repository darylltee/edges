<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import CustomSlider from "../../../../Components/Common/CustomSlider.svelte";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import cover from "../../../assets/HowWeDoIt/cover.jpg";
  import img1 from "../../../assets/implication-img1.png";
  let activeIndex = 0;
</script>

<section class="py-5 position-relative">
  <div class=" opacity-50" />

  <Row
    noGutters
    class="align-items-center gy-4"
    style="max-width:100% !important;"
  >
    <Col lg={12} class="col-sm">
      <FullImage text="Profiling" file={cover} />
    </Col>
    <Col lg={12}>
      <Container>
        <Row class="text-center gy-4" noGutters style="max-width:100%;">
          <Col lg={12} md={12} class="col-sm">
            <h4 class="text-center text">
              We have surveyed 53 voluntary seaweed farmers from the Carayat
              Seaweed Farmers Association, Rural Improvement Club, and Caricaran
              Self-Help Group using Key Informant Interviews and Focus Group
              Discussions.
            </h4>
          </Col>
          <Col lg={12} md={12} class="col-sm">
            <h4 class="text-center text">
              The research focused on farming techniques, production, drying,
              marketing trends, and product pricing, as well as demographic
              profiles and income sources.
            </h4>
          </Col>
        </Row>
        <Row class="justify-content-center">
          <Col lg={12} class="text-start align-middle">
            <CustomSlider
              slidesPerView={3}
              slides={[
                {
                  src: null,
                  title: "38 OUT OF 53 SEAWEED FARMERS ARE MALE",
                  text: "                                    ",
                },
                {
                  src: null,
                  title: "MAJORITY ARE REPORTEDLY MARRIED",
                  text: "",
                },
                {
                  src: null,
                  title: "MAJORITY ARE ELEMENTARY GRADUATES",
                  text: "",
                },
                {
                  src: null,
                  title: "ALL ARE ROMAN CATHOLIC",
                },
                {
                  src: null,
                  title: "MOST OF THEM ARE 51-60 YEARS OLD",
                  text: "",
                },
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
</section>

<style>
  .cardIcon {
    width: 100%;
    height: 100%;
    background-color: #f8f9fa;

    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
  }
</style>
