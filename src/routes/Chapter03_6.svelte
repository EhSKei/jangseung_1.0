<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import {
    Mousewheel,
    Navigation,
    Scrollbar,
    EffectFade,
    Autoplay,
  } from "swiper";

  import "swiper/css";
  import "swiper/css/mousewheel";
  import "swiper/css/navigation";
  import "swiper/css/autoplay";
  import "swiper/css/effect-fade";
  import Subhero from "../lib/Subhero.svelte";
  import Image from "../lib/Image.svelte";

  function imgPath(n) {
    return "./chapter03/" + n + ".webp";
  }

  function bgPath(n) {
    return "url('./chapter03/" + n + ".webp')";
  }
</script>

<div class="chapter03-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="3" imgCode="038">
    <svelte:fragment slot="header">
      솟대와 선돌이 <br> 같이 있는 경우
    </svelte:fragment>
    <svelte:fragment slot="desc">
      (전라북도 부안군 보안면 우동리 짐대와 선돌, 정승모 조사, 1991년 3월)
      부안군 우동리는 부안 김씨들이 많이 사는 지역으로 조선 숙종때 실학자 반계
      유형원이 살았던 곳이다. 마을사람들은 반계 유형원 선생이 병란을 피해 이곳에
      왔을 때 우동리의 짐대와 선돌을 세웠다고 믿고 있습니다. 짐대는 격년으로
      정월 대보름날 세우는데, 짐대에 60m되는 암줄과 수줄을 메고 농악을 치며 마을
      한 바퀴 돈 후 남녀로 나누어 줄다리기를 합니다. 이때 여자 쪽이 이겨야
      풍년이 든다는 믿음이 있습니다. 줄다리기가 끝나면 동아줄은 솟대 밑에 감아
      둡니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      전라북도 부안군 보안면 우동리 짐대와 선돌
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article">
    <Image chapterCode="3" imgCode="038-1">
      <svelte:fragment slot="desc"
        >전라북도 부안군 보안면 우동리 당산에 옷입히기</svelte:fragment
      >
    </Image>
  </div>
</section>
