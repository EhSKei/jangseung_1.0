<script>
    import { fade } from "svelte/transition";
    export let loading = true;
</script>


{#if loading}
    <div class="loading-spinner" out:fade="{{ delay: 500, duration: 500 }}">
        <div class="spinner-border"></div>
        <span class="loading-spinner-message">
            콘텐츠를 불러오고 있습니다...
        </span>
    </div>
{/if}
