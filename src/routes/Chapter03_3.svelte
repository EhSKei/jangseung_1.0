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
  <Subhero chapterCode="3" imgCode="034">
    <svelte:fragment slot="header">장승과 탑이 <br> 같이 있는 경우</svelte:fragment>
    <svelte:fragment slot="desc">
      (충청북도 영동군 용산면 율곡2구 섭눈이 장승과 탑, 박호원 조사, 1898년 11월
      10일) 영동군 섭눈이 마을의 입구에서 우측으로 장승과 돌탑 간목(竿木)이 있고
      좌측으로 너비 약2m 가량의 내[川]를 건너 그 바로 위쪽에 장승, 돌탑, 신목이
      있었습니다. 섭눈이 마을의 장승은 몸체에 명문이 조각되거나 묵서되어 있지
      않다는 점과 우측 장승 뒤의 간목도 ‘장승’이라고 하는 점입니다. 돌탑의
      상부에는 머리와 몸통을 지닌 마치 거북 모양과 같은 돌이 하나 올려져 있고
      목부분에 금줄이 걸처져 있는게 특징이었습니다.
    </svelte:fragment>
        <svelte:fragment slot="imgDesc">
      강원도 홍천군 동면 삼현리 장승과 솟대
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article">
    <div class="article-slide-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect={"fade"}
        autoplay
        loop
        on:slideChange={() => console.log("slide change")}
        class="swiper-chapter-03-1"
      >
        <SwiperSlide>
          <Image chapterCode="3" imgCode="034-1">
            <svelte:fragment slot="desc">섭눈이 장승과 돌탑</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="3" imgCode="034-2">
            <svelte:fragment slot="desc">섭눈이 장승</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="3" imgCode="034-3">
            <svelte:fragment slot="desc">섭눈이 돌탑</svelte:fragment>
          </Image>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</section>