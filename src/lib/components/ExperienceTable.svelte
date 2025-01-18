<script lang="ts">

    interface ExperienceTableProps
    {
        workExperience: DevExperience[];
    }

    let { workExperience }:ExperienceTableProps = $props();
</script>

<section class="work-experience mt-m default-margin">
    <h2 class="headline">Past work <br/>experience</h2>
    <u1 class="work-experience-list">
        {#each workExperience as job}
            <li class="work-item">
                <article>
                    <h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
                    <div class="company-and-date">
                        <p>{job.company}</p>
                        <p class="dark-grey">
                            {job.startDate?.slice(0,7)} -
                            {#if job.endDate} 
                                {job.endDate.slice(0,7)}
                            {:else}
                                present
                            {/if}
                        </p>
                    </div>
                </article>
            </li>
        {/each}
    </u1>
</section>

<style>
    .work-experience
    {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .work-experience-list
    {
        width: 55%;
    }
    .work-item
    {
        border-bottom: 1px solid #f0eded;
        padding-bottom: 12px;
    }
    .work-item:not(:first-of-type)
    {
        padding-top: 16px;
    }
    .work-item p
    {
        margin-bottom: 0;
    }
    .company-and-date
    {
        display: flex;
        justify-content: space-between;
    }
    @media (max-width: 1366px)
    {
        .work-experience
        {
            flex-direction: column;
            align-items: flex-start;
        }
        .work-experience-list
        {
            margin-top: 32px;
            align-items: center;
            width: 90%;
        }
    }
</style>