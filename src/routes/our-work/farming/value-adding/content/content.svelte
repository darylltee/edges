<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../../Components/Common/FullImage.svelte";

  import src from "svelte-link";
  import CustomSlider from "../../../../../Components/Common/CustomSlider.svelte";
  import vl01 from "../../../../assets/OurWork/ValueAdding/vl01.png";
  import vl02 from "../../../../assets/OurWork/ValueAdding/vl02.jpg";
  import vl03 from "../../../../assets/OurWork/ValueAdding/vl03.jpg";
  import vl04 from "../../../../assets/OurWork/ValueAdding/vl04.png";
  import vl05 from "../../../../assets/OurWork/ValueAdding/vl05.png";

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
      <FullImage text="Value-adding" file={vl03} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h5 class="text-center text">
              Harvested seaweed are often sold in a dried form, without
              undergoing additional processing or being transformed into
              value-added products. Nevertheless, in Gubat and Prieto Diaz, the
              harvested seaweeds undergo further processing such as cracklings,
              noodles, and pickles.
            </h5>
          </Col>

          <Col lg={12} class="text-start align-middle">
            <CustomSlider
              slidesPerView={2}
              slides={[
                {
                  src: vl01,
                  title: "SEAWEED NOODLES",
                  text: "",
                  link: "/our-work/farming/value-adding/items/pickles",
                },
                { src: vl02, title: "NO DATA", text: "" },
                { src: vl04, title: "NO DATA", text: "" },
                { src: vl05, title: "NO DATA", text: "" },
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
