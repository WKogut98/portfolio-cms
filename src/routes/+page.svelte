<script>
    import { HeroSection, AboutMeSection, MyWorkSection } from "$components";
    import ContactSection from "$components/Sections/ContactSection.svelte";
    import SkillsSection from "$components/Sections/SkillsSection.svelte";
    const {data} = $props();
    
    let { workExperience, projects, skills } = data;
</script>
<HeroSection/>
<AboutMeSection {workExperience} />
<MyWorkSection {projects}/>
<SkillsSection {skills}/>
<ContactSection/>