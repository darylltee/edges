<script>
  import {
    Carousel,
    CarouselItem,
    Col,
    Container,
    Icon,
    Row,
  } from "sveltestrap";
  import FullImage from "../../../Components/Common/FullImage.svelte";
  import contactUs from "../../assets/contact-us.jpg";

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
      <FullImage text="OUR TEAM" file={contactUs} />
    </Col>
    <Col lg={12}>
      <Icon name="envelope" />
      <Container style="max-width:50%;padding:30px;">
        <Row class="text-center gy-4">
          <Col lg={12} class="col-sm">
            <h5 class="display-7 fw-bold text-start" style="color:green">
              Contact Us
            </h5>
          </Col>
          <Col lg={12} md={12} class="col-sm">
            <div class="text-muted mt-3 text-start">
              <ul class="list-unstyled footer-list fs-14" style="color:black">
                <li>
                  <i class="bi-alarm text-success me-2" />
                  <b><Icon name="envelope" /> Address:</b> Herbarium Sorsogonense,
                  2nd Floor Integrated Academic and Laboratory Building, Sorsogon
                  State University, Sorsogon City, Sorsogon, Philippines 4700
                </li>
                <li>
                  <br />
                </li>
                <li>
                  <b> Email:</b> edges@sorsu.edu.ph
                </li>
              </ul>
            </div>
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
