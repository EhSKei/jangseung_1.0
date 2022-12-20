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
  <Subhero chapterCode="3" imgCode="040">
    <svelte:fragment slot="header">
      장승, 선돌, 탑이 <br> 같이 있는 경우
    </svelte:fragment>
    <svelte:fragment slot="desc">
      (충청북도 괴산군 청천면 고성리 승암마을 장승·선돌·돌탑, 박호원 조사,
      1989년 2월 23일) 괴산군 승암마을은 버스조차 다니지 않는 산골 오지
      마을이었습니다. 농지 면적도 좁아서 겨우 마을에서 먹을 정도만 생산되었다고
      합니다. 지리적으로 외부와 단절되어 있어서 오히려 마을 사람들끼리의
      결속력은 높았다고 합니다. 마을에서는 장승을 ‘장군’이라 불렀습니다.
      낙영산의 한줄기인 진산중턱에 ‘산제당’이 있고 마을 입구에는
      장승․선돌․돌탑․신목이 놓여 있었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      충청북도 괴산군 청천면 고성리 승암마을 장승, 선돌, 돌탑
    </svelte:fragment>
  </Subhero>
</div>