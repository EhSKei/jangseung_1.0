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
  <Subhero chapterCode="3" imgCode="035">
    <svelte:fragment slot="header">
      장승과 선돌이 <br> 같이 있는 경우
    </svelte:fragment>
    <svelte:fragment slot="desc">
      (울산광역시 울주구 언양읍 남부2리 장승과 선돌, 박호원·기량 조사, 1996년
      3월 3일) 본래 언양 장승은 울산에서 언양으로 들어오는 입구에 해당하는 옛길
      양편에 있었으며 이곳 주민들은 이곳을 ‘벅시골’이라고 부릅니다. 장승 옆에는
      자연석의 입석 1기가 세워져 있는데, 주민들은 이를 미륵보살 또는
      미륵불이라고 부릅니다. 1957년에는 이곳에 신당(神堂)을 만들고 당 내부에
      장승을 봉안하려 하였으나 1993년 35번 국도의 확장으로 모두 철거되었다고
      합니다. 신당이 철거되던 날에는 무당을 불러 굿을 하였고 현재의 위치에
      장승을 다시 세웠다고 합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      울산광역시 울주구 언양읍 남부2리 장승과 선돌
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2" style="grid-template-rows: auto">
    <div
      style="display: grid; gap: 2ch; grid-template-rows: repeat(2, min-content)">
      <Image chapterCode="3" imgCode="035-3">
        <svelte:fragment slot="desc">
          울산광역시 울주구 언양읍 남부2리 장승제
        </svelte:fragment>
      </Image>
      <p class="article-text p-md-0">
        벅시골에서는 2년에 한번씩 음력 2월 초하룻날에 장승제를 지냅니다. 이를
        마을사람들은 동제 혹은 당제라 부릅니다. 마을에서는 장승을 장성이라고
        보르기도 합니다. 벅시골이란 지명으로 보아 마을에서는 장승을 벅수 혹은
        벅시라고도 불렀을 것입니다.
      </p>
    </div>
    <div class="place-self-center" style="display: grid; gap: 2ch">
      <Image chapterCode="3" imgCode="035-1">
        <svelte:fragment slot="desc">
          울산광역시 울주구 언양읍 남부2리 장승과 선돌
        </svelte:fragment>
      </Image>
      <Image chapterCode="3" imgCode="035-2">
        <svelte:fragment slot="desc">
          울산광역시 울주구 언양읍 남부2리 장승과 선돌
        </svelte:fragment>
      </Image>
    </div>
  </div>
</section>
