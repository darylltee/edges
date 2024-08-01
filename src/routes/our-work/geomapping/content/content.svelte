<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import imageContent from "../../../assets/geomapping-cover.jpg";
  import Geomap from "../../../geomap/+page.svelte";
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
      <FullImage text="Geo-mapping" file={imageContent} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h4 class="text-center text">
              Geo-mapping aims to evaluate the resource capital and characterize
              the seaweed farms of the target beneficiaries. This is significant
              as environmental factors such as typhoons can lead to
              vulnerabilities and disruptions in the seaweed value chain.
            </h4>
          </Col>
          <Col lg={12} style="padding:0 20px;">
            <Geomap />
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
