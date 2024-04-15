<script>
    import Link from "svelte-link";
    import {
        Card,
        CardBody,
        CardFooter,
        Col,
        Container,
        Row,
    } from "sveltestrap";
    // Import Images
    import avatar10 from "../../assets/images/users/avatar-10.jpg";
    import avatar3 from "../../assets/images/users/avatar-3.jpg";
    import avatar5 from "../../assets/images/users/avatar-5.jpg";
    import avatar6 from "../../assets/images/users/avatar-6.jpg";
    import avatar7 from "../../assets/images/users/avatar-7.jpg";
    import avatar8 from "../../assets/images/users/avatar-8.jpg";
    import dumilag from "../assets/dumilag.webp";
    import escopete from "../assets/escopete.webp";
    import malto from "../assets/malto.webp";
    import mirasol from "../assets/mirasol.webp";
    import orgela from "../assets/orgela.webp";
    import profile from "../assets/profile.webp";

    import bongalontamichelle from "../assets/bongalontamichelle.webp";
    import guides from "../assets/guides.webp";
    import maltoaireen from "../assets/maltoaireen.webp";
    import tagal from "../assets/tagal.webp";
    import tee from "../assets/tee.webp";
</script>

<section class="section bg-light" id="team">
    <Container>
        <Row class="justify-content-center">
            <Col lg={8}>
                <div class="text-center mb-5">
                    <h3 class="mb-3 fw-semibold">
                        Our <span class="text-success">Team</span>
                    </h3>
                    <p class="text-muted mb-4 ff-secondary" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col xl={4} lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={dumilag}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">RICHARD DUMILAG</Link
                            >
                        </h5>

                        <p class="text-muted mb-0 ff-secondary">
                            Project Leader
                        </p>
                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col xl={4} lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={tagal}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">STEFANI REIGN TAGAL</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            University Research Associate
                        </p>
                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col xl={4} lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={maltoaireen}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">AIREEN MALTO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            University Research Associate
                        </p>
                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <Row>
            <Col xl={4} lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={mirasol}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">MA. LUISA MIRASOL</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 2
                        </p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={4} lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={profile}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">IDA CAPACIO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 2
                        </p>
                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            BFAR-NSTDC
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col xl={4} lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={escopete}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">ADA ESCOPETE</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 2
                        </p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={malto}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">MARK ARIEL MALTO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 1
                        </p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Magallanes
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={tee}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">DARYLL TEE</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 1
                        </p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={guides}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">ROBERTO GUIDES</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Staff Level 1
                        </p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={bongalontamichelle}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">MICHELLE B. BONGALONTA</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">Collaborator</p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={profile}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">MARIA JANICE V. OBIAS</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">Collaborator</p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>

            <Col lg={4} sm={6}>
                <Card>
                    <CardBody class="text-center p-4">
                        <div class="avatar-xl mx-auto mb-4 position-relative">
                            <img
                                src={profile}
                                alt=""
                                class="img-fluid rounded-circle"
                            />
                            <Link
                                href="/emailInbox/apps-mailbox"
                                class="btn btn-success btn-sm position-absolute bottom-0 end-0 rounded-circle avatar-xs"
                            >
                                <div class="avatar-title bg-transparent">
                                    <i class="ri-mail-fill align-bottom" />
                                </div>
                            </Link>
                        </div>

                        <h5 class="mb-1">
                            <Link
                                href="/pages/profile/simple/simplepage"
                                class="text-body">ADIN A. DREO</Link
                            >
                        </h5>
                        <p class="text-muted mb-0 ff-secondary">
                            Project Enumerator
                        </p>

                        <p
                            class="text-muted mb-0 ff-secondary"
                            style="font-size:12px;"
                        >
                            SorSU-Main
                        </p>
                    </CardBody>
                </Card>
            </Col>
        </Row>

        <!-- <Row>
            <div class="col-lg-12">
                <div class="text-center mt-2">
                    <Link href="/pages/team/team" class="btn btn-primary"
                        >View All Members <i
                            class="ri-arrow-right-line ms-1 align-bottom"
                        /></Link
                    >
                </div>
            </div>
        </Row>-->
    </Container>
</section>
