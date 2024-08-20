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
  import cover from "../../../../assets/OurWork/Marketing/mrktng01.JPG";

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
      <FullImage text="Marketing" file={cover} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h5 class="text-center text">
              Raw fresh seaweed (RFS) refers to seaweed in its most basic form,
              whereas raw dried seaweed (RDS) refers to seaweed that has been
              dried without any additional processing. Local traders prioritize
              dryness or "asin-asin,” when it comes to seaweed quality, which
              refers to the desired level of saltiness.
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
