<script>
    import { fade } from "svelte/transition";


  function bgPath(chapterCode, bgCode) {
    return "url('./chapter0" + chapterCode + "/" + bgCode + ".webp')";
  }

  export let chapterCode, bgCode;
</script>

<header
  class="hero text-white"
  style:background-image={bgPath(chapterCode, bgCode)}
>
  <div class="hero-text">
    <h1 class="hero-header">
      <slot name="header" />
      <hr />
      <h2 class="hero-title">
        <slot name="title" />
      </h2>
    </h1>
    
    <p class="hero-desc d-none d-md-block">
      <slot name="desc" />
    </p>
  </div>
</header>

{#if $$slots.desc}
<section class="hero-mobile d-flex d-md-none">
  <p class="hero-desc">
    <slot name="desc" />
  </p>
</section>
{/if}