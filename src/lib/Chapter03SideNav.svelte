<script>
  export let currentChapter;

  function setCurrentChapter(n) {
    currentChapter = n;

    let chapters = document.getElementsByClassName("chapter03-sub");
    let container = document.getElementsByClassName("container-fluid")[0];

    window.scrollTo(0, chapters[n].offsetTop + container.offsetTop);
  }

  let expanded;
</script>

<div class="chapter-03 sidenav-container">
  <nav class="sidenav" class:expanded>
    <div class="sidenav-link-container">
      <button
        class="sidenav-link"
        class:active={currentChapter == 0}
        on:click={() => setCurrentChapter(0)}
        style="background-image: url(./chapter03/027.webp"
      >
        1
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 1}
        on:click={() => setCurrentChapter(1)}
        style="background-image: url(./chapter03/033.webp"
      >
        2
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 2}
        on:click={() => setCurrentChapter(2)}
        style="background-image: url(./chapter03/034.webp"
      >
        3
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 3}
        on:click={() => setCurrentChapter(3)}
        style="background-image: url(./chapter03/035.webp"
      >
        4
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 4}
        on:click={() => setCurrentChapter(4)}
        style="background-image: url(./chapter03/036.webp"
      >
        5
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 5}
        on:click={() => setCurrentChapter(5)}
        style="background-image: url(./chapter03/038.webp"
      >
        6
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 6}
        on:click={() => setCurrentChapter(6)}
        style="background-image: url(./chapter03/039.webp"
      >
        7
      </button>
      <button
        class="sidenav-link"
        class:active={currentChapter == 7}
        on:click={() => setCurrentChapter(7)}
        style="background-image: url(./chapter03/040.webp"
      >
        8
      </button>
    </div>
    <button class="sidenav-expand" on:click={() => (expanded = !expanded)}>
      <img
        src="./navbar/nav-expand.svg"
        alt=""
        class="sidenav-expand-image"
        class:expanded
        width="15"
      />
    </button>
  </nav>
</div>
