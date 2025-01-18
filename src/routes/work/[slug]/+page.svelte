<script lang="ts">
    let { data } = $props();

    const {company, name, date, stack, projectImageUrl, content} = data;

    function getTag(style: ProcessedTextContent["style"]): string
    {
        if(style === 'normal') return 'p';
        else return style;
    }
    function parseText(text: string): string {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
    }
</script>

<main class="work-page default-margin">
    <h4>{company}</h4>
    <div class="underscore"></div>
    <h2 class = "mb-s">{name}</h2>
    <img class="project-image" src={projectImageUrl} alt=""/>
    <div class="project-container mt-m">
        <div class="meta-data">
            <h3 class="semi-bold">Date</h3>
            <p>{date.slice(0,4)}</p>
            <h3 class="semi-bold mt-m">Tech Stack</h3>
            <ul class="tech-stack">
            {#each stack as technology}
                <li>{technology}</li>
            {/each}
            </ul>
        </div>
        <div class="project-text">
            {#each content as block}
                {#if block.type === 'text'}
                    <svelte:element this={getTag(block.style)}>
                        {@html parseText(block.textToRender)}
                    </svelte:element>
                {:else}
                    <img class="content-image" src={block.url} alt=""/>
                {/if}
            {/each}
        </div>
    </div>
</main>

<style>
    .work-page
    {
        padding-top: 80px;
        padding-bottom: 140px;
    }

    .project-image
    {
        width: 100%;
        max-height: 450px;
        object-fit: cover;
        border-radius: 20px;
    }

    .content-image
    {
        width: 100%;
    }

    .project-container
    {
        display: flex;
    }
    .meta-data
    {
        min-width: 200px;
    }

    @media (max-width: 1080px) 
    {
        .tech-stack 
        {
            display: flex;
            flex-direction: row;
            flex-flow: row wrap;
            justify-content: space-between;
            overflow-x: auto;
        }

        .tech-stack li 
        {
            white-space: nowrap;
        }
    }
</style>