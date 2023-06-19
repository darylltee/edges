<script>
    import { onMount } from "svelte";
    import Link from "svelte-link";
    import { Collapse, Container, NavbarToggler, NavLink } from "sveltestrap";
    // Import Images
    import {
        default as logodark,
        default as logolight,
    } from "./assets/logo.png";
    let navClass = "";
    let isOpen = true;

    onMount(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            navClass = "is-sticky";
        } else {
            navClass = "";
        }
    };
</script>

<nav
    class={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass}
    id="navbar"
>
    <Container>
        <Link class="navbar-brand" href="/index">
            <img
                src={logodark}
                class="card-logo card-logo-dark"
                alt="logo dark"
                height="50"
            />
            <img
                src={logolight}
                class="card-logo card-logo-light"
                alt="logo light"
                height="17"
            />
        </Link>

        <NavbarToggler
            class="navbar-toggler py-0 fs-20 text-body"
            on:click={() => (isOpen = !isOpen)}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <i class="mdi mdi-menu" />
        </NavbarToggler>

        <Collapse {isOpen} class="navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
                <li class="nav-item">
                    <NavLink class="fs-15" href="#hero">Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="fs-15" href="#services">Farming</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="fs-15" href="#features">EDGES</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="fs-15" href="#products">Products</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="fs-15" href="#reviews">Reviews</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="fs-15" href="#team">Team</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="fs-15" href="#contact">Contact</NavLink>
                </li>
            </div>

            <div class="">
                <Link
                    href="/authenticationInner/login/auth-signin-basic"
                    class="btn btn-link fw-medium text-decoration-none text-dark"
                    >Sign in</Link
                >
            </div>
        </Collapse>
    </Container>
</nav>
