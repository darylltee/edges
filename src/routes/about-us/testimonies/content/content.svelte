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
    <Col lg={12}>
      <Container style="max-width:80%;padding:50px;">
        <Row class="text-center gy-4" noGutters>
          <Col lg={12} md={12} class="col-sm"><h3>Testimonies</h3></Col>
          <Col lg={12} md={12} class="col-sm">
            <iframe
              src="https://drive.google.com/file/d/1TYSo8DpwVmhKTTUOJ2nkLTvtp46VQMze/preview"
              style="width: 100%; height: 100vh;"
              allow="autoplay"
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
