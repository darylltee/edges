<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import imageContent from "../../../assets/farmer-benificiaries-cover.jpg";

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
      <FullImage text="FARMER BENEFICIARIES" file={imageContent} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4">
          <Col lg={12} md={12} class="col-sm">
            <h3 class="text-center">
              Our committed project team is instrumental in facilitating th
              growth of the seaweed-based enterprises in Sorsogon. We envision a
              flourishing seaweed industry in the region through innovation and
              sustainability.
            </h3>
          </Col>
          <Col lg={12} />
        </Row>
      </Container>
    </Col>
  </Row>
</section>
<section
  class="py-5 bg-green position-relative align-middle"
  style="max-height: 120px;"
>
  <div class=" opacity-50" />
  <Container>
    <Row class="align-middle gy-4 ">
      <Col class="col-sm">
        <div>
          <h4 class=" mb-0 fw-semibold text-center">
            As indirect beneficiaries, the LGU, academe, and policymakers within
            th province may benefit from the replication and/or scaling of
            interventions.
          </h4>
        </div>
      </Col>
    </Row>
  </Container>
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
