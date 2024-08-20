<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import CustomSlider from "../../../../../Components/Common/CustomSlider.svelte";
  import FullImage from "../../../../../Components/Common/FullImage.svelte";
  import cover from "../../../../assets/OurWork/Monitoring/cover.webp";

  import item1 from "../../../../assets/OurWork/Monitoring/item1.jpg";
  import item2 from "../../../../assets/OurWork/Monitoring/item2.jpg";
  import item3 from "../../../../assets/OurWork/Monitoring/item3.jpg";
  import item4 from "../../../../assets/OurWork/Monitoring/item4.jpg";

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
      <FullImage text="Monitoring" file={cover} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h4 class="text-center text">
              The management strategy for grazing fish involves shifting
              operations to deeper waters, submerging seaweed modules in
              moderate currents, brushing out epiphytes, and relocating
              production activities to cooler waters to prevent ice-ice disease,
              as well as total harvesting.
            </h4>
          </Col>

          <Col lg={12} class="text-start align-middle">
            <CustomSlider
              slidesPerView={3}
              slides={[
                {
                  src: item1,
                  title: "",
                  text: "",
                },
                { src: item2, title: "", text: "" },
                { src: item3, title: "", text: "" },
                { src: item4, title: "", text: "" },
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
