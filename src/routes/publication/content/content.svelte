<script>
  import { Button, Col, Container, Icon, Row } from "sveltestrap";
  import FullImage from "../../../Components/Common/FullImage.svelte";
  import fullImgeContent from "../../assets/publication.png";

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
      <FullImage text="Publication" file={fullImgeContent} />
    </Col>
    <Col lg={12}>
      <Icon name="envelope" />
      <Container style="max-width:70%;padding:30px;">
        <Row class="text-center gy-4">
          <Col lg={12} class="col-sm">
            <h5 class="display-7 fw-bold text-start" style="color:#8dbd82">
              Articles
            </h5>
          </Col>
          <Col lg={12} md={12} class="col-sm">
            <div class="article-container text-start">
              <h5 class="fw-bold">
                Personal Entrepreneurial Competencies among Seaweed Farmers in
                Sorsogon, Philippines
              </h5>
              <p class="authors">
                Dumilag RV, Malto MAD, Mirasol MLP, Escopete AJ, Capacio IT,
                Malto AD, Tagal SRB, Abeleda MF, Andriesse E
              </p>
              <p class="date">January 2024</p>
              <Button
                href="https://philjournalsci.dost.gov.ph/126-vol-152-no-6b-december-2023-part-b/2001-%20personal-entrepreneurial-competencies-among-seaweed-farmers-in-sorsogon-philippines"
                target="_blank"
                style="background-color:#8dbd82;color:black;"
                class="full-article-button">Full Article</Button
              >
            </div>
          </Col>
          <Col lg={12} md={12} class="col-sm">
            <div class="article-container text-start">
              <h5 class="fw-bold">
                Are the Fishers of Sorsogon Knowledgeable about and Willing to
                Farm the Seaweed Ulva?
              </h5>
              <p class="authors">
                Dumilag RV, Malto MAD, Malto AD, Tagal SRB, Escopete AJ, Mirasol
                MLP, Mintu CB, Olipany RD, Ruiz CFC, Capacio IT
              </p>
              <p class="date">November 2023</p>
              <Button
                href="https://philjournalsci.dost.gov.ph/124-vol-152-no-6a-december-2023-part-a/1978-are-the-%20fishers-of-sorsogon-knowledgeablenabout-and-willing-to-farm-the-seaweed-ulva"
                target="_blank"
                style="background-color:#8dbd82;color:black;"
                class="full-article-button">Full Article</Button
              >
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
  .article-container {
    padding: 10px;
  }

  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  .authors {
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  .date {
    font-size: 0.875rem;
    color: gray;
    margin-bottom: 1rem;
  }

  .full-article-button {
    font-size: 0.875rem;
  }
</style>
