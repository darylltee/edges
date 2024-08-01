<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import img1 from "../../../assets/implication-img1.png";
  import imageContent from "../../../assets/implicationscover.jpg";
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
      <FullImage text="IMPLICATIONS" file={imageContent} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h1 class="text-center text">
              Identification and Application of Interventions
            </h1>
          </Col>
          <Col lg={4} style="padding:0 20px;">
            <img src={img1} height="450px" alt="icon" />
          </Col>
          <Col lg={8} class="text-start align-middle">
            <p>
              <b class="fw-bolder">Geo-maps of Seaweed Farm Sites:</b> Geo-maps allow
              assessment of area vulnerability based on exposure to climate change,
              pests and diseases, poor selection of strains, and other practices.
            </p>
            <p>
              <b class="fw-bolder">Value chain:</b> The delineation and updating
              of the value chain for the seaweed industry in Sorsogon will help identify
              points where products (or services) may be inefficiently passed on
              or lose the opportunity to maximize profitability.
            </p>
            <p>
              <b class="fw-bolder">Market and database:</b> Increased development
              of enterprises through market linkage and the development of the farmer
              database.
            </p>

            <p>
              <b class="fw-bolder">Policy brief:</b> The creation of a policy brief
              will help formulate recommendations to revive the seaweed industry
              in Sorsogon.
            </p>
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
