<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import CustomSlider from "../../../../../Components/Common/CustomSlider.svelte";
  import FullImage from "../../../../../Components/Common/FullImage.svelte";
  import cover from "../../../../assets/OurWork/Planting/cover.png";

  import item1 from "../../../../assets/OurWork/Planting/item1.jpg";
  import item2 from "../../../../assets/OurWork/Planting/item2.jpg";
  import item3 from "../../../../assets/OurWork/Planting/item3.jpg";
  import item4 from "../../../../assets/OurWork/Planting/item4.jpg";

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
      <FullImage text="Planting" file={cover} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm">
            <h4 class="text-center text">
              Seaweed farmers obtain plant material for cultivation,
              particularly eucheumatoids, from pruning, BFAR-NSTDC, communal
              farms, and other sources. These plants are grown utilizing
              floating monoline and multiple raft long line methods. Farmers tie
              propagules using soft-tie straws.
            </h4>
          </Col>

          <Col lg={12} class="text-start align-middle">
            <CustomSlider
              slidesPerView={3}
              slides={[
                {
                  src: item1,
                  title: "SEAWEED NOODLES",
                  text: "",
                  link: "/our-work/farming/value-adding/items/pickles",
                },
                { src: item2, title: "NO DATA", text: "" },
                { src: item3, title: "NO DATA", text: "" },
                { src: item4, title: "NO DATA", text: "" },
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
