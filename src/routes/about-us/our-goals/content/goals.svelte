<script>
  import Link from "svelte-link";
  import { Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import ourGoals from "../../../assets/our-goals.jpg";
</script>

<section class="py-5 position-relative">
  <div class=" opacity-50" />

  <Row
    noGutters
    class="align-items-center gy-4"
    style="max-width:100% !important;"
  >
    <Col lg={12} class="col-sm">
      <FullImage text="OUR GOALS" file={ourGoals} />
    </Col>
    <Col lg={12}>
      <Container style="max-width:50%;">
        <Row class="text-center gy-4">
          <Col lg={12} md={12} class="col-sm">
            <h2 class="text-center">
              Our general objective is to support the growth and development of
              seaweed-based enterprises in Sorsogon.
            </h2>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex align-items-center"
          >
            <div class="greenBox float-start">
              <h1>1</h1>
            </div>
            <h5 class="mb-0">
              Provide an overview of the current state of the seaweed industry
              in the province of Sorsogon
            </h5>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex flex-row-reverse align-items-center"
          >
            <div class="greenBox float-end">
              <h1>2</h1>
            </div>
            <h5 class="mb-0">
              Identify the challenges and opportunities facing the seaweed-based
              enterprises in the study area
            </h5>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex align-items-center"
          >
            <div class="greenBox float-start">
              <h1>3</h1>
            </div>
            <h5 class="mb-0">
              Develop and implement intervention strategies to address the
              specific needs of the industry and develop strong enterprises
            </h5>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex flex-row-reverse align-items-center"
          >
            <div class="greenBox float-end">
              <h1>4</h1>
            </div>
            <h5 class="mb-0">
              Build partnerships between and among key stakeholders in the
              seaweed industry in Sorsogon
            </h5>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex align-items-center"
          >
            <div class="greenBox float-start">
              <h1>5</h1>
            </div>
            <h5 class="mb-0">
              Develop local industry player databases to support the development
              of seaweed-based enterprises
            </h5>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex flex-row-reverse align-items-center"
          >
            <div class="greenBox float-end">
              <h1>6</h1>
            </div>
            <h5 class="mb-0">
              Monitor and evaluate the immediate outcomes of the interventions
              for the enterprises
            </h5>
          </Col>

          <Col
            lg={12}
            md={12}
            class="col-sm align-middle d-flex align-items-center"
          >
            <div class="greenBox float-start">
              <h1>7</h1>
            </div>
            <h5 class="mb-0">
              Provide policy recommendations for further growth and development
              of the seaweed industry in Sorsogon
            </h5>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
</section>
