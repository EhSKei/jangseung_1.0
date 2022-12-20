<script>
  function imgPath(chapterCode, imgCode) {
    return "./chapter0" + chapterCode + "/" + imgCode + ".webp";
  }

  export let chapterCode;
  export let imgCode;
</script>

<div class="article-image-container">
  <img src={imgPath(chapterCode, imgCode)} alt="" class="article-image" />
  
  {#if $$slots.desc}
  <span class="article-image-desc">
    <br>
    <slot name="desc" />
  </span>
  {/if}
</div>
