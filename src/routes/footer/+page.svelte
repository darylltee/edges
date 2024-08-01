<script>
    import Link from "svelte-link";
    import { Col, Container, Row } from "sveltestrap";
    // Import Images
    import logolight from "../../assets/images/logo-light.png";
    import dost from "../assets/dost.webp";
    import edgeslogoonly from "../assets/edgeslogoonly.png";
    import nstdc from "../assets/nstdc.webp";
    import pcic from "../assets/pcic.webp";
    import sorsu from "../assets/ssu.webp";
    import veritas from "../assets/veritas.png";
</script>

<footer class="custom-footer bg-light py-5 position-relative">
    <Container>
        <Row>
            <Col lg={6} class="mt-4 d-flex justify-content-center">
                <div>
                    <img src={edgeslogoonly} alt="logo light" height="270" />
                </div>
            </Col>
            <Col lg={6} class="mt-4">
                <Row>
                    <Col lg={4}>
                        <div class="client-images">
                            <img
                                src={sorsu}
                                alt="client-img"
                                class="mx-auto img-fluid d-block"
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="client-images">
                            <img
                                src={dost}
                                alt="client-img"
                                class="mx-auto img-fluid d-block"
                            />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div class="client-images">
                            <img
                                src={nstdc}
                                alt="client-img"
                                class="mx-auto img-fluid d-block"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div class="client-images">
                            <img
                                src={pcic}
                                alt="client-img"
                                class="mx-auto img-fluid d-block"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div class="client-images">
                            <img
                                src={veritas}
                                alt="client-img"
                                class="mx-auto img-fluid d-block"
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col lg={12} class="ms-lg-auto">
                <Row>
                    <Col class="mt-4" lg={2}>
                        <h5 class=" mb-0">ABOUT US</h5>
                        <div class=" mt-3">
                            <ul class="list-unstyled footer-list fs-14">
                                <li>
                                    <Link
                                        href="/pages/profile/simple/simplepage"
                                        >Our Goals</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/gallery/pages-gallery"
                                        >How We Do it</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        href="/projects/apps-projects-overview"
                                        >Our Outputs</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/timeline/timeline"
                                        >Implications</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/timeline/timeline"
                                        >Community Influence</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/timeline/timeline"
                                        >Farmer Beneficiaries</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/timeline/timeline"
                                        >Our Team</Link
                                    >
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col class="mt-4" lg={2}>
                        <h5 class=" mb-0">OUR WORK</h5>
                        <div class="text-muted mt-3">
                            <ul
                                class="list-unstyled ff-secondary footer-list fs-14"
                            >
                                <li>
                                    <Link
                                        href="/pages/profile/simple/simplepage"
                                        >Geomapping</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/gallery/pages-gallery"
                                        >Profiling</Link
                                    >
                                </li>
                                <li>
                                    <Link
                                        href="/projects/apps-projects-overview"
                                        >Farming</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/pages/timeline/timeline"
                                        >Testimonies</Link
                                    >
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col class="mt-4" lg={2}>
                        <h5 class=" mb-0">OUR PARTNERS</h5>
                        <div class="text-muted mt-3">
                            <ul
                                class="list-unstyled ff-secondary footer-list fs-14"
                            >
                                <li>
                                    <Link href="/pages/pricing/pages-pricing"
                                        >Sorsogon State University</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/emailInbox/apps-mailbox"
                                        >DOST-PCAARRD AABH</Link
                                    >
                                </li>
                                <li>
                                    <Link href="/apps-chat">BFAR-NSTDC</Link>
                                </li>
                                <li>
                                    <Link href="/crm/apps-crm-deals">PCIC</Link>
                                </li>
                                <li>
                                    <Link href="/tasks/apps-tasks-kanban"
                                        >Seoul National University</Link
                                    >
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col class="mt-4" lg={2}>
                        <h5 class=" mb-0">PUBLICATION</h5>
                        <div class="text-muted mt-3" />
                    </Col>
                    <Col class="mt-4" lg={4}>
                        <h5 class=" mb-0">CONTACT US</h5>
                        <div class="text-muted mt-3">
                            <ul
                                class="list-unstyled ff-secondary footer-list fs-14"
                            >
                                <li>
                                    <i class="bi-alarm text-success me-2" />
                                    <b>Address:</b> Herbarium Sorsogonense, 2nd Floor
                                    Integrated Academic and Laboratory Building,
                                    Sorsogon State University, Sorsogon City, Sorsogon,
                                    Philippines 4700
                                </li>
                                <li>
                                    <br />
                                </li>
                                <li>
                                    <b>Email:</b> edges@sorsu.edu.ph
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row class="text-center text-sm-start align-items-center mt-5">
            <Col sm={6}>
                <div>
                    <p class="copy-rights mb-0">
                        {new Date().getFullYear()} © PROJECT EDGES
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
</footer>
