<script>
  import Link from "svelte-link";
  import { Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import hwdit from "../../../assets/How-we-do-it.jpg";
  import chart from "../../../assets/how-we-do-itchart.png";
</script>

<section class="py-5 position-relative">
  <div class=" opacity-50" />

  <Row
    noGutters
    class="align-items-center gy-4"
    style="max-width:100% !important;"
  >
    <Col lg={12} class="col-sm">
      <FullImage text="HOW WE DO IT" file={hwdit} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:100%%;">
        <Row noGutters class="text-center gy-4">
          <Col lg={12}>
            <h3 class="text-center">
              Project EDGES will build on the findings from the various
              biological and value chain-related studies conducted and the
              initiatives supporting the livelihood improvement of the seaweed
              farmers.
            </h3>
          </Col>
          <Col lg={12} md={12} class="col-sm">
            <img
              style="width:100%;"
              src={chart}
              alt="chart"
              class="img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
</section>
