<script lang="ts">
    import {goto} from "$app/navigation";
    import {Button} from "$components";
    import { onMount } from "svelte";

    let showLinks = $state(false);
    let isOnMobile = $state(false);

    function goToContactForm()
    {
        goto("#contact-form");
    }

    function toggleLinks()
    {
        showLinks = !showLinks;
    }

    onMount(() => {
        const mediaQuery = window.matchMedia("(max-width: 1080px)");
        isOnMobile = mediaQuery.matches;

        mediaQuery.addEventListener("change", (e) => {
            isOnMobile = e.matches;
            if (!isOnMobile) {
                showLinks = true;
            }
        });
    });
</script>

<nav class="navbar default-margin">
    <a href = "/" class="logo">WK</a>
    {#if isOnMobile}
    <button class="nav-toggle" onclick={toggleLinks}>
        &#x22EE;
    </button>
    {:else}
    <div class="navbar-links">
        <a href="/#about-me" class="nav-link">About me</a>
        <a href="/#work" class="nav-link">My work</a>
        <Button className="nav-bar" onclick={goToContactForm}>Contact</Button>
    </div>
    {/if}
</nav>
{#if isOnMobile && showLinks}
    <div class="navbar-links default-margin">
        <a href="/#about-me" class="nav-link">About me</a>
        <a href="/#work" class="nav-link">My work</a>
    <Button className="nav-bar" onclick={goToContactForm}>Contact</Button>
</div>
{/if}

<style>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }
    .logo{
        font-size: 35px;
        font-weight: bold;
    }
    .navbar-links{
        display: flex;
        align-items: center;
        gap: 60px;
    }
    .nav-link:hover
    {
        text-decoration: underline;
    }
    .nav-toggle
    {
        font-size: 30px;
    }
    @media (max-width: 1080px)
    {
        .navbar-links
        {
            justify-content: space-between;
        }
        .nav-toggle
        {
            display: block;
            align-items: center;
        }
    }
</style>