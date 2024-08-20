<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../../Components/Common/FullImage.svelte";

  import src from "svelte-link";
  import CustomSlider from "../../../../../Components/Common/CustomSlider.svelte";
  import ins01 from "../../../../assets/OurWork/Insurance/ins01.jpg";
  import ins02 from "../../../../assets/OurWork/Insurance/ins02.jpg";
  import ins03 from "../../../../assets/OurWork/Insurance/ins03.jpg";
  import ins04 from "../../../../assets/OurWork/Insurance/ins04.jpg";

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
      <FullImage text="Insurance" file={ins01} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h5 class="text-center text">
              A substantial percentage of seaweed farmers in the Province of
              Sorsogon are beneficiaries of insurance coverage offered by the
              Philippine Crop Insurance Corporation (PCIC). These packages offer
              insurance coverage to farmers in the event of crop failure or
              damages caused by natural calamities such as typhoons or flooding.
              In addition, the PCIC also covers the incidence of ice-ice
              disease.
            </h5>
          </Col>

          <Col lg={12} class="text-start align-middle">
            <CustomSlider
              slidesPerView={4}
              slides={[
                { src: ins02, title: "", text: "" },
                { src: ins03, title: "", text: "" },
                { src: ins04, title: "", text: "" },
                { src: ins01, title: "", text: "" },
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
