<script>
  import { Bar, Line, Pie } from "svelte-chartjs";
  import { Col, Container, Row } from "sveltestrap";
  import { Autoplay, Mousewheel } from "swiper";
  import "swiper/css";
  import { Swiper, SwiperSlide } from "swiper/svelte";

  import "swiper/scss/navigation";
  import "swiper/scss/pagination";
  let delayed;
  const pieData = {
    labels: ["Caricaran", "Carayat", "Bagayay"],
    datasets: [
      {
        data: [18.2, 45.5, 36.4],
        backgroundColor: [
          "rgba(46, 49, 49, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(33, 97, 140, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgba(46, 49, 49, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(33, 97, 140, 1)",
        ],
      },
    ],
  };
  const sexDataSet = {
    labels: ["Carayat", "Bagacay", "Caricaran"],
    datasets: [
      {
        label: "Male",
        data: [18, 15, 11],
        backgroundColor: "rgba(46, 49, 49, 0.6)",
        borderColor: "rgba(46, 49, 49, 1)",
        borderWidth: 1,
      },
      {
        label: "Female",
        data: [12, 9, 1],
        backgroundColor: "rgba(39, 55, 70, 0.6)",
        borderColor: "rgba(39, 55, 70, 1)",
        borderWidth: 1,
      },
    ],
  };
  const maritalStatusData = {
    labels: ["Single", "Married", "Widowed", "Separated", "Common Law"],
    datasets: [
      {
        label: "Carayat",
        data: [7, 17, 3, 2, 1],
        backgroundColor: "rgba(46, 49, 49, 0.6)",
        borderColor: "rgba(46, 49, 49, 1)",
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [3, 21, 0, 0, 0],
        backgroundColor: "rgba(39, 55, 70, 0.6)",
        borderColor: "rgba(39, 55, 70, 1)",
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [2, 8, 0, 0, 2],
        backgroundColor: "rgba(33, 97, 140, 0.6)",
        borderColor: "rgba(33, 97, 140, 1)",
        borderWidth: 1,
      },
    ],
  };
  const educationLevelData = {
    labels: [
      "Elementary",
      "High school",
      "K-12",
      "College",
      "Vocational Course",
    ],
    datasets: [
      {
        label: "Carayat",
        data: [15, 7, 3, 2, 2],
        backgroundColor: "rgba(46, 49, 49, 0.6)",
        borderColor: "rgba(46, 49, 49, 1)",
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [7, 14, 1, 2, 0],
        backgroundColor: "rgba(39, 55, 70, 0.6)",
        borderColor: "rgba(39, 55, 70, 1)",
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [3, 6, 3, 0, 0],
        backgroundColor: "rgba(33, 97, 140, 0.6)",
        borderColor: "rgba(33, 97, 140, 1)",
        borderWidth: 1,
      },
    ],
  };
  const seaweedData = {
    labels: ["Kappa alvarezi", "Kappa sp.", "Cracilaria", "Don't Know"],
    datasets: [
      {
        label: "Carayat",
        data: [8, 28, 0, 2],
        backgroundColor: "rgba(46, 49, 49, 0.6)",
        borderColor: "rgba(46, 49, 49, 1)",
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [9, 9, 5, 2],
        backgroundColor: "rgba(39, 55, 70, 0.6)",
        borderColor: "rgba(39, 55, 70, 1)",
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [8, 4, 0, 3],
        backgroundColor: "rgba(33, 97, 140, 0.6)",
        borderColor: "rgba(33, 97, 140, 1)",
        borderWidth: 1,
      },
    ],
  };
  const aquacultureData = {
    labels: ["Monoculture", "Polyculture", "Don't Know"],
    datasets: [
      {
        label: "Carayat",
        data: [23, 5, 1],
        backgroundColor: [
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
        ],
        borderColor: [
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [20, 2, 1],
        backgroundColor: [
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
        ],
        borderColor: [
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [10, 1, 0],
        backgroundColor: [
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
        ],
        borderColor: [
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const fishingMethodData = {
    labels: ["Longline", "Raft Method", "Don't Know"],
    datasets: [
      {
        label: "Carayat",
        data: [29, 0, 1],
        backgroundColor: [
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
        ],
        borderColor: [
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [21, 0, 2],
        backgroundColor: [
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
        ],
        borderColor: [
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [10, 1, 0],
        backgroundColor: [
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
        ],
        borderColor: [
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const organizationData = {
    labels: ["Association", "Cooperative", "Government", "Don't Know"],
    datasets: [
      {
        label: "Carayat",
        data: [21, 8, 0, 1],
        backgroundColor: [
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
        ],
        borderColor: [
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [10, 2, 9, 1],
        backgroundColor: [
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
        ],
        borderColor: [
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [9, 2, 0, 0],
        backgroundColor: [
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
        ],
        borderColor: [
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const insuranceData = {
    labels: ["Yes", "No"],
    datasets: [
      {
        label: "Carayat",
        data: [29, 0],
        backgroundColor: ["rgba(46, 49, 49, 0.6)", "rgba(46, 49, 49, 0.6)"],
        borderColor: ["rgba(46, 49, 49, 1)", "rgba(46, 49, 49, 1)"],
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [23, 1],
        backgroundColor: ["rgba(39, 55, 70, 0.6)", "rgba(39, 55, 70, 0.6)"],
        borderColor: ["rgba(39, 55, 70, 1)", "rgba(39, 55, 70, 1)"],
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [10, 1],
        backgroundColor: ["rgba(33, 97, 140, 0.6)", "rgba(33, 97, 140, 0.6)"],
        borderColor: ["rgba(33, 97, 140, 1)", "rgba(33, 97, 140, 1)"],
        borderWidth: 1,
      },
    ],
  };
  const negotiationPriceData = {
    labels: [
      "Follow the market price",
      "Negotiation",
      "Buyer's Price",
      "I decide",
    ],
    datasets: [
      {
        label: "Carayat",
        data: [1, 1, 29, 0],
        backgroundColor: [
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
          "rgba(46, 49, 49, 0.6)",
        ],
        borderColor: [
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
          "rgba(46, 49, 49, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Bagacay",
        data: [0, 0, 24, 0],
        backgroundColor: [
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
          "rgba(39, 55, 70, 0.6)",
        ],
        borderColor: [
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
          "rgba(39, 55, 70, 1)",
        ],
        borderWidth: 1,
      },
      {
        label: "Caricaran",
        data: [3, 0, 8, 1],
        backgroundColor: [
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
          "rgba(33, 97, 140, 0.6)",
        ],
        borderColor: [
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
          "rgba(33, 97, 140, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
</script>

<Container>
  <Row>
    <Col lg={6} sm={12} style="margin-top:50px">
      <h3 class="mb-3 fs-24" style="color:green">Respondents Demographic</h3>
      <p class="mb-4 ff-secondary fs-16">
        There is a total of 53 seaweed farmers in the three target sites.
        Seaweed farm associations include the Caricaran Self Help Group (est.
        2012) with 12 members, the Rural Improvement Club or RIC (est. 2012)
        with 11 members, and the Carayat Farmers Seaweed Association or CFSA
        (est. 2015) with 32 members. Most of the seaweed farmers identified were
        male and most of them reported being married. In terms of educational
        background, the majority of the seaweed farmers had completed their
        education at the elementary level.
      </p></Col
    >
    <Col lg={6} sm={12}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Mousewheel]}
        slidesPerView={1}
        spaceBetween={24}
        Autoplay={true}
        class="swiper candidate-swiper"
      >
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Pie
              data={pieData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                  onComplete: () => {
                    delayed = true;
                  },
                  delay: (context) => {
                    let delay = 0;
                    if (
                      context.type === "data" &&
                      context.mode === "default" &&
                      !delayed
                    ) {
                      delay =
                        context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                  },
                },
              }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Percentage of Farmers per Barangay
            </h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={sexDataSet}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">Sex</h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={maritalStatusData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Marital Status
            </h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={educationLevelData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Educational Attainment
            </h5>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Col>
  </Row>

  <Row style="margin-top:100px">
    <Col lg={6} sm={12}>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel]}
        slidesPerView={1}
        spaceBetween={24}
        Autoplay={true}
        class="swiper candidate-swiper"
      >
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={seaweedData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Seaweed Farmed/Cultured
            </h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={aquacultureData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Type of Farming
            </h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={fishingMethodData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Culture Method
            </h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={organizationData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Type of seaweed farm ownership
            </h5>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Col>
    <Col lg={6} sm={12}>
      <h3 class="mb-3 fs-32" style="color:green">
        Seaweed species farmed in target sites in Sorsogon including their type
        of farming, culture method and ownership
      </h3>
      <p>
        Three target sites cultured Kappaphycus species, known locally as
        gulaman, and a little fraction of farmers appeared to culture Gracilaria
        sp. Virtually all farming sites practice monoculture, which means they
        exclusively cultivate this specific seaweed species. The cultivation
        method employed is the long-line system, which involves suspending
        seaweed ropes or lines in the water. The type of ownership for Prieto
        Diaz and Bacon seaweed farms is in the form of associations, while Gubat
        is in the form of cooperative. This implies that multiple individuals or
        groups come together to collectively own and manage the seaweed farms
      </p>
    </Col>
  </Row>

  <Row style="margin-top:100px">
    <Col lg={6} sm={12}>
      <h3 class="mb-3 fs-32" style="color:green">
        Insurance and Marketing Strategies
      </h3>
      <p class="mb-4 ff-secondary fs-16">
        Almost all the seaweed farmers in the three target sites are insured
        under the Philippine Crop Insurance Corporation (PCIC). Seaweed farmers
        gain significantly from being covered under PCIC since they will be able
        to recover their investment in the event of crop loss or damage. The
        insurance also covers the labor expenditures that they have already
        spent on seaweed cultivation.
      </p>
      <p class="mb-4 ff-secondary fs-16">
        The local buyer was exclusively responsible for negotiating seaweed
        prices, which allows them to acquire seaweed at a price that is
        appropriate for their budget and needs. However, seaweed farmers may
        find it challenging to maintain consistent pricing and profit margins if
        they continually negotiate with local buyers seeking lower prices.
      </p></Col
    >
    <Col lg={6} sm={12}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Mousewheel]}
        slidesPerView={1}
        spaceBetween={24}
        Autoplay={true}
        class="swiper candidate-swiper"
      >
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={insuranceData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Insurance
            </h5>
          </Col>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <Col lg={12} sm={12}>
            <Bar
              data={negotiationPriceData}
              width={100}
              height={300}
              options={{ maintainAspectRatio: false, responsive: true }}
            />
          </Col>
          <Col lg={12} sm={12}>
            <h5 class="mb-3 fs-12 text-center" style="color:green">
              Negotiation of Price
            </h5>
          </Col>
        </SwiperSlide>
      </Swiper>
    </Col>
  </Row>
</Container>
