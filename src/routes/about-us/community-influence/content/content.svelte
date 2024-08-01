<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import imageContent from "../../../assets/community-influence-cover.jpg";
  import img1 from "../../../assets/community-influence-img1.jpg";
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
      <FullImage text="COMMUNITY INFLUENCE" file={imageContent} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4">
          <Col lg={12} md={12} class="col-sm">
            <h3 class="text-center">
              Seaweed farming provides significant social and economic benefits
              to many Sorsoganon families. It creates livelihood opportunities
              for otherwise economically and socially marginalized rural coastal
              communities, especially women.
            </h3>
          </Col>

          <Col lg={7} class="text-start align-middle">
            <p class="fs-5 --bs-secondary">
              The information that will be generated in this study will help
              seaweed farmers, cooperators, and policymakers address key
              challenges on how to improve production and market.
            </p>

            <p class="fs-5 --bs-secondary">
              Fundamental understanding of the actual condition of farmers and
              their working environment in Sorsogon will aid in improving farm
              productivity.
            </p>
            <p class="fs-5 --bs-secondary">
              In turn, these impacts will improve the overall competitiveness of
              the seaweed industry in Sorsogon.
            </p>
          </Col>
          <Col lg={5} style="padding:0 10px;">
            <img src={img1} height="300px" alt="icon" />
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
