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
  <Subhero chapterCode="3" imgCode="033">
    <svelte:fragment slot="header">장승과 솟대가 <br> 같이 있는 경우</svelte:fragment
    >
    <svelte:fragment slot="desc">
      (강원도 홍천군 동면 삼현리 장승·솟대, 박호원 조사, 1988년 10월 13일)
      삼현리의 장승과 솟대는 마을 초입에서 약 500m 정도 더 들어가는 길목에 장승
      4기, 솟대 3기가 있었습니다. 남자장승인 천하대장군은 사모를 쓰고 있으며,
      눈·귀·입·수염은 붓으로 그렸고 코는 따로 나무를 깍아서 부착시켰습니다.
      장승과 솟대가 같이 있는 전형적인 모습이었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      강원도 홍천군 동면 삼현리 장승과 솟대
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="3" imgCode="033-2">
        <svelte:fragment slot="desc">장승깍기</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      삼현리에서는 2년에 한번씩 음력 정월 대보름날 달이 뜰 무렵에 지낸다고
      합니다. 장승제를 지내는 날 아침에는 주민들이 모여서 야산에서 베어 온
      나무로 장승과 솟대를 직접 제작합니다. 새로 만든 장승과 솟대는 기존의 것과
      교체가 됩니다. 기존 장승은 근처에 그냥 방치한다고 합니다.
    </p>
  </div>
</section>
