<script>
  import Link from "svelte-link";
  import { Col, Container, Row } from "sveltestrap";
  // Import Images
  import Drying from "../assets/Drying.jpg";
  import Harvesting from "../assets/Harvesting.jpg";
  import Monitoring from "../assets/Monitoring.jpg";
  import Planting from "../assets/Planting.jpg";
</script>

<section class=" position-relative">
  <div class="opacity-50" />

  <Row class="text-center">
    <Col lg={12}
      ><h3 class="mb-3 ff-secondary lh-base" style="margin-top: 20px;">
        SEAWEED FARMING IN SORSOGON
      </h3>
    </Col>
    <Col class="col-sm">
      <div class="d-flex flex-column align-items-center">
        <div class="position-relative">
          <img
            src={Planting}
            alt="Image 1"
            class="img-fluid"
            style="width: 100%; height: 350px;"
          />
          <h4 class="overlay-title">PLANTING</h4>
        </div>
      </div>
    </Col>
    <Col class="col-sm">
      <div class="d-flex flex-column align-items-center">
        <div class="position-relative">
          <img
            src={Monitoring}
            alt="Image 2"
            class="img-fluid"
            style="width: 100%; height: 350px;"
          />
          <h4 class="overlay-title">MONITORING</h4>
        </div>
      </div>
    </Col>
    <Col class="col-sm">
      <div class="d-flex flex-column align-items-center">
        <div class="position-relative">
          <img
            src={Harvesting}
            alt="Image 3"
            class="img-fluid"
            style="width: 100%; height: 350px;"
          />
          <h4 class="overlay-title">HARVESTING</h4>
        </div>
      </div>
    </Col>
    <Col class="col-sm">
      <div class="d-flex flex-column align-items-center">
        <div class="position-relative">
          <img
            src={Drying}
            alt="Image 4"
            class="img-fluid"
            style="width: 100%; height: 350px;"
          />
          <h4 class="overlay-title">DRYING</h4>
        </div>
      </div>
    </Col>
  </Row>
</section>
