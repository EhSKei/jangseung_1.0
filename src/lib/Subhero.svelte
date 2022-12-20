<script>
  import Image from "./Image.svelte";

  function imgPath(chapterCode, imgCode) {
    return "url('./chapter0" + chapterCode + "/" + imgCode + ".webp')";
  }

  export let chapterCode;
  export let imgCode;
</script>

<section class="sub-hero-container">
  <div class="sub-hero">
    <div class="sub-hero-text">
      <h1 class="sub-hero-header">
        <slot name="header" />
        <hr />
        <h2 class="sub-hero-title">
          <slot name="title" />
        </h2>
      </h1>
      <p class="sub-hero-desc">
        <slot name="desc" />
      </p>
    </div>
    <Image {chapterCode} {imgCode}>
      <svelte:fragment slot="desc">
        <slot name="imgDesc" />
      </svelte:fragment>
    </Image>
  </div>
</section>
