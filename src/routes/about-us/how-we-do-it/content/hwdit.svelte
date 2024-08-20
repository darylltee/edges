<script>
  import Link from "svelte-link";
  import { Col, Container, Row } from "sveltestrap";
  import FullImage from "../../../../Components/Common/FullImage.svelte";
  import hwdit1 from "../../../assets/HowWeDoIt/1.png";
  import hwdit2 from "../../../assets/HowWeDoIt/2.png";
  import hwdit3 from "../../../assets/HowWeDoIt/3.png";
  import hwdit4 from "../../../assets/HowWeDoIt/4.png";
  import hwdit5 from "../../../assets/HowWeDoIt/5.png";
  import hwdit6 from "../../../assets/HowWeDoIt/6.png";
  import hwdit7 from "../../../assets/HowWeDoIt/7.png";
  import hwdit from "../../../assets/HowWeDoIt/cover.jpg";
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
      <Container style="max-width:100%;">
        <Row class="text-center gy-4">
          <Col lg={24}>
            <h3 class="text-center" style="max-width:60%;margin:auto;">
              Project EDGES will build on the findings from the various
              biological and value chain-related studies conducted and the
              initiatives supporting the livelihood improvement of the seaweed
              farmers.
            </h3>
          </Col>
          <Col lg={12}>
            <Container style="max-width:70%;">
              <Row class="text-center gx-2 gy-4 ">
                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit1} alt="1" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    The project identified three active seaweed farming groups
                    in Sorsogon as the priority beneficiaries. Partnership
                    agreements among LGUs, the seaweed farmer
                    association/cooperative, and the Sorsogon State University
                    (the implementing agency) were forged.
                  </h5>
                </Col>

                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit2} alt="2" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    Aerial boundaries per seaweed farm site were acquired using
                    a drone, which was used to generate geo-maps and determine
                    the actual size of the study area.
                  </h5>
                </Col>

                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit3} alt="3" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    The number of seaweed producers, middlemen, and traders in
                    each municipality was determined using questionnaires and a
                    chain-referral sampling technique, following inquiries from
                    LGU workers. In its process and design framework, the
                    technical assistance and guiding concerns of Dr. Edo
                    Andriesse and UNIDO (2011) were incorporated.
                  </h5>
                </Col>

                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit4} alt="42" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    Field surveys were done to profile the seaweed farmers in
                    Sorsogon and explore the role of collective action and
                    clustering in the operations of the farmer groups. The
                    analysis of the project situation was built to allow for
                    targeted interventions.
                  </h5>
                </Col>

                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit5} alt="5" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    Enterprise assessment for the existing seaweed ventures
                    involved the use of Quick Resource Appraisal (QRA) and Risk
                    Management Process (RMP) assessment tools. The assessment
                    results provide the information essential to the creation of
                    a detailed action plan to address gaps in the industry.
                  </h5>
                </Col>

                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit6} alt="6" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    A policy brief was created based on the results generated by
                    the project. This will be published and disseminated to all
                    relevant stakeholders, particularly government units.
                  </h5>
                </Col>

                <Col
                  xl={3}
                  lg={4}
                  md={4}
                  sm={12}
                  class="col-sm align-middle d-flex align-items-center"
                >
                  <div class=" float-start">
                    <img src={hwdit7} alt="7" width="180" />
                  </div>
                </Col>
                <Col
                  xl={9}
                  lg={7}
                  md={8}
                  sm={12}
                  class="d-flex align-items-center text-start"
                >
                  <h5 class="mb-0">
                    Aerial boundaries per seaweed farm site were acquired using
                    a drone, which was used to generate geo-maps and determine
                    the actual size of the study area.
                  </h5>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Col>
  </Row>
</section>
