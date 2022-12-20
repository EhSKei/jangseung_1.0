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
  <Subhero chapterCode="3" imgCode="036">
    <svelte:fragment slot="header">솟대와 탑이 <br> 같이 있는 경우</svelte:fragment>
    <svelte:fragment slot="desc">
      (전라남도 곡성군 삼기면 노동리 남계마을 짐대와 탑, 김종대·박호원 조사,
      1994년 11월) 곡성군 남계마을 사람들의 수호신은 마을 입구에 있는 탑과
      짐대(솟대)였습니다. 탑과 짐대는 특이하게도 당산나무와 같이 있는 것이
      특징입니다. 탑은 흡사 축대와 비슷한 형태로 돌을 쌓아서 만들었고, 탑 주위에
      높이 4m가량의 짐대 3기가 세워져 있습니다. 마을사람들은 짐대의 새모양을
      오리라 부릅니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      전라남도 곡성군 삼기면 노동리 남계마을 짐대와 탑
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article">
    <Image chapterCode="3" imgCode="037">
      <svelte:fragment slot="desc"
        >전라북도 순창군 구림면 금창리 2구 금상마을 짐대와 탑</svelte:fragment
      >
    </Image>
    <p class="article-text text-center">
      (전라북도 순창군 구림면 금창리 2구 금상마을 짐대와 탑, 박호원·이관호 조사,
      1993년 7월) 순창군 금상마을은 3면이 산으로 둘러싸여 있는 전형적인
      산촌마을입니다. 마을 양옆으로는 조그마한 냇가가 있어 예로부터 금상마을을
      풍수상 배의 형국을 한 지세라고 합니다. 따라서 마을 내에서 우물을 파면
      물속으로 가라앉는다는 믿음이 있어 절대로 마을에서는 샘을 파지 않은 대신
      마을 뒷산 골짜기에서 물을 길어 식수로 사용하고 있었습니다. 마을 입구에는
      짐대와 돌탑을 세워 마을의 안전을 기원하고 있었습니다. 원래 금상마을에는
      마을 입구 양쪽으로 할아버지탑과 할머니탑 등 두 개의 돌탑이 짐대(솟대)와
      같이 있었다고 하는데, 할머니탑은 오래 전에 없어졌다고 합니다.
    </p>
  </div>
</section>
