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
  <Subhero chapterCode="3" imgCode="039">
    <svelte:fragment slot="header">
      장승, 솟대, 탑이 <br> 같이 있는 경우
    </svelte:fragment>
    <svelte:fragment slot="desc">
      (충청북도 옥천군 군서면 사정리 사기점골 장승·솟대·탑, 이종철·정종수 조사,
      1989년 2월 22일) 옥천군 사기점골은 고려시대부터 청자와 백자를 굽던
      곳이어서 지명을 사기(沙器)라 하였다고 합니다. 지금도 마을의 뒷산의 중턱에
      오르면 사기편이 많이 발견된다고 합니다. 사기점골 입구 오른편에는 시멘트로
      약 70cm 정도 높이로 쌓은 단 위에 장승, 솟대, 돌탑이 세워져 있습니다.
      솟대의 새는 떨어져 나가서 없어졌고 장대만 남아 있었습니다. 마을 사람들은
      새를 물오리라 불렀습니다. 장승은 밤나무로 깍은 것으로 2기가 세워져
      있습니다. 돌탑은 냇가에서 나온 돌로 윗부분이 다소 뾰족하게 쌓아 올려
      있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      충청북도 옥천군 군서면 사정리 사기점골 장승·솟대·돌탑
    </svelte:fragment>
  </Subhero>
</div>
