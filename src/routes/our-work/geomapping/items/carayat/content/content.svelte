<script>
  import Link from "svelte-link";
  import { Carousel, CarouselItem, Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../../../Components/Common/FullImage.svelte";

  import src from "svelte-link";
  import CustomSlider from "../../../../../../Components/Common/CustomSlider.svelte";
  import fullmapImage from "../../../../../assets/OurWork/Geomapping/Carayat_Map.jpg";
  import cover from "../../../../../assets/OurWork/Geomapping/cover.jpg";
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
      <FullImage text="Geo-mapping" file={cover} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:80%;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm"><h3>Carayat Seaweed Farm</h3></Col
          >
          <!-- Full image of map -->
          <Col lg={12} style="padding:0 20px;">
            <img src={fullmapImage} alt="caricaran" style="width: 100%;" />
          </Col>

          <Col lg={12} class="text-start align-middle">
            <CustomSlider
              slidesPerView={4}
              slides={[
                {
                  src: null,
                  title: "CARAYAT SEAWEED FARMERS ASSOCIATION",
                  text: "                                    ",
                },
                {
                  src: null,
                  title: "30 MEMBERS",
                  text: "comprising 18 males and 12 females",
                },
                {
                  src: null,
                  title: "MONOCULTURE AND POLYCULTURE FARMING TYPES",
                },
                {
                  src: null,
                  title: "LONGLINE CULTURE METHOD",
                  text: "employed in seaweed farming",
                },
                {
                  src: null,
                  title: "3 SEAWEED SOURCES",
                  text: "including BFAR-NSTDC, LGU-Prieto Diaz, and co-members of the association",
                },
                {
                  src: null,
                  title: "INSURED",
                  text: "through the Philippine Crop Insurance Corporation",
                },
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
