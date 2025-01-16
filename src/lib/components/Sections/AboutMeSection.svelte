<script lang="ts">
    import {SectionHeadline, ExperienceTable} from "$components";
    import image from "$assets/about-me.jpeg"
    import Button from "$components/Button.svelte";
    import { goto } from "$app/navigation";

    interface AboutMeProps
    {
        workExperience: DevExperience[];
    }

    let { workExperience }:AboutMeProps = $props();

    function onclick()
    {
        goto("/#contact-form");
    }
</script>

<section class="about-me mt-l" id="about-me">
    <SectionHeadline sectionName={"about-me"}>
        About Me
    </SectionHeadline>
    <div class="mt-m content-container default-margin">
        <img class="image" src={image} alt=""/>
        <div class="text">
            <p>
                <b>Hello, my name is Wojtek. I am a software developer looking to make interesting and tangible things.</b>
            </p>
            <p>
                I have hands-on experience helping building a robust solutions 
                tailored to client's needs as well as some interesting personal projects.
                I am always willing to learn and improve as well as participate in exciting projects.
                I am most interested in game and web development.
            </p>
            <Button className="mt-m" {onclick}>Tell me about your project</Button>
        </div>
    </div>
    <ExperienceTable {workExperience} />
</section>

<style>
    .content-container
    {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .image{
        width: 42%;
        border-radius: 20px;
        object-fit: cover;
    }
    .text
    {
        width: 55%;
        text-align: left;
    }
</style>