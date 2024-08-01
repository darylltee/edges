<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import imageContent from "../../../assets/our-outputs.jpg";

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
      <FullImage text="OUR OUTPUTS" file={imageContent} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:50%;">
        <Row class="text-center gy-4">
          <Col lg={12} md={12} class="col-sm">
            <h2 class="text-center">
              Our general objective is to support the growth and development of
              seaweed-based enterprises in Sorsogon.
            </h2>
          </Col>
          <Col lg={12}>
            <Carousel />
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
