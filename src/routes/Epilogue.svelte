<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Footer from "../lib/Footer.svelte";
  import Navbar from "../lib/Navbar.svelte";

  import AOS from "aos";

  onMount(() => {
    let aosSections = document.querySelectorAll("section");
    aosSections.forEach((item, i) => {
      item.setAttribute("data-aos", "fade-up");
    });

    AOS.init({
      duration: 1000,
      once: false,
    });

    window.scrollTo(0, 0);
  });
</script>

<section class="article-container fullscreen">
  <div class="article article-text g-0" style="gap:0">
    <h2 class="article-header text-center">끝내는 글</h2>
    <h3 class="article-title text-center">10년 동안의 기나긴 여정, <br /> 전국 장승·솟대조사 대작전</h3>
    <br>
    <hr>
    <br>
    <div class="article-text-container">
      <p class="article-desc">
        국립민속박물관의 전국 장승·솟대 조사사업은 1988년 5월부터 시작되어
        1997년까지 장장 10년 동안의 기나긴 여정이었습니다. 전국적으로 조사된
        장승·솟대는 무려 442건이었고, 조사에 참여한 분들도 총 21분이나
        되었습니다. 조사된 장승·솟대의 면모를 살펴보면, 길가에서 비교적 쉽게 볼
        수 있었던 목장승과 솟대부터, 사찰 앞의 돌장승, 마을의 수호신인 돌솟대,
        우리나라에서 가장 오래된 목장승 등 지금까지 학계에 잘 알려지지 않았던
        것들이었습니다. 2022년, 우리관에서는 당시 조사된 자료들을 토대로 다시
        한번 현장을 방문하여 장승·솟대의 보존상태와 마을공동제사 등을
        확인하였습니다. 비교적 양호하게 현재 잘 보존되고 마을공동제사도 전승되는
        지역도 있었지만, 일부는 주민들의 기억 속에서 완전히 사라져 버린 경우도
        있었습니다. 1988년에 조사를 시작했던 시기에는 비교적 흔했던 마을 앞의
        목장승과 솟대는 지금은 쉽게 보기 힘든 민속문화재가 되었습니다.
        민속(民俗)은 시시각각 변하는 생물(生物)입니다. 현 시점에서라도 기록하지
        않으면 언제 사라질지 모르는 게 민속입니다. 전국 장승·솟대 조사사업의
        가르침은 지금 기록하지 않으면 늦는다는 것이었습니다. 1988년부터
        1997년까지 조사를 하셨던 젊은 민속연구자들의 한편의 로드무비같은 작전
        완수에 경의를 표합니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article">
    <div class="epilogue-gallery">
      <div class="epilogue-col">
        <img src="./epilogue/178.webp" alt="" />
        <img src="./epilogue/179.webp" alt="" />
        <img src="./epilogue/180.webp" alt="" />
      </div>
      <div class="epilogue-col">
        <img src="./epilogue/181.webp" alt="" />
        <img src="./epilogue/182.webp" alt="" />
        <img src="./epilogue/183.webp" alt="" />
      </div>
    </div>
  </div>
</section>
