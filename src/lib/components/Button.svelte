<script lang='ts'>
    import type { Snippet } from "svelte";

    interface ButtonProps
    {
        children: Snippet,
        onclick: ((e: MouseEvent) => void) | (()=>void),
        className?: string;
    }

    let {children, className, ...props}:ButtonProps = $props();
</script>

<button class={`btn ${className}`} {...props}>
    {@render children()}
</button>

<style>
    .btn
    {
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        background-color: black;
        color: white;
        font-size: 24px;
        padding: 14px 40px;
        border-radius: 10px;
        transition: all 0.3s linear;
    }
    .btn:hover
    {
        color: black;
        background-color: rgb(216, 216, 216);
        transition: all 0.3s linear;
    }
    .btn:active
    {
        box-shadow: inset gray 0px 0px 60px -12px;
    }
    .nav-bar
    {
        padding: 10px 24px;
        font-size: 20px;
    }
</style>