<script>
  let currentChapter = 0;

  function setCurrentChapter(n) {
    currentChapter = n;

    let chapters = document.getElementsByClassName("chapter03-sub");
    let container = document.getElementsByClassName("container-fluid")[0];

    window.scrollTo(0, chapters[n].offsetTop + container.offsetTop);
  }
</script>

<section class="chapsel-container">
  <button
    on:click={() => setCurrentChapter(0)}
    class="chapsel"
    style="background-image: url(./chapter03/027.webp)"
    >장승·솟대가 각각<br />
    단독으로 존재하는 경우</button>
  <button
    on:click={() => setCurrentChapter(1)}
    class="chapsel"
    style="background-image: url(./chapter03/033.webp)"
    >장승과 솟대가<br /> 같이 있는 경우</button>
  <button
    on:click={() => setCurrentChapter(2)}
    class="chapsel"
    style="background-image: url(./chapter03/034.webp)"
    >장승과 탑이<br /> 같이 있는 경우</button>
  <button
    on:click={() => setCurrentChapter(3)}
    class="chapsel"
    style="background-image: url(./chapter03/035.webp)"
    >장승과 선돌이<br /> 같이 있는 경우</button>
  <button
    on:click={() => setCurrentChapter(4)}
    class="chapsel"
    style="background-image: url(./chapter03/036.webp)"
    >솟대와 탑이<br /> 같이 있는 경우</button>
  <button
    on:click={() => setCurrentChapter(5)}
    class="chapsel"
    style="background-image: url(./chapter03/038.webp)"
    >솟대와 선돌이<br /> 같이 있는 경우</button>
  <button
    on:click={() => setCurrentChapter(6)}
    class="chapsel"
    style="background-image: url(./chapter03/039.webp)"
    >장승, 솟대, 탑이<br /> 같이 있는 경우</button>
  <button
    on:click={() => setCurrentChapter(7)}
    class="chapsel"
    style="background-image: url(./chapter03/040.webp)"
    >장승, 선돌, 탑이<br /> 같이 있는 경우</button>
</section>
