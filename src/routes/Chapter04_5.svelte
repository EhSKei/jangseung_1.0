<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Footer from "../lib/Footer.svelte";
  import Map from "../lib/Map.svelte";
  import Navbar from "../lib/Navbar.svelte";

  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Mousewheel, Navigation, Scrollbar, EffectFade } from "swiper";

  import "swiper/css";
  import "swiper/css/mousewheel";
  import "swiper/css/navigation";
  import Hero from "../lib/Hero.svelte";
  import Subhero from "../lib/Subhero.svelte";
  import Image from "../lib/Image.svelte";

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

<Hero chapterCode="4" bgCode="174">
  <svelte:fragment slot="header">
    <div style="font-size:0.75em">
      1996~1997년, <br /> 장승·솟대 조사 피날레
    </div>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <div style="font-size:0.75em">경상남도(제주도) 조사</div>
  </svelte:fragment>
</Hero>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="171">
    <svelte:fragment slot="header">5-1. 경상북도</svelte:fragment>
    <svelte:fragment slot="desc">
      경상남도 장승·솟대 조사는 1996년 3월과 7월, 8월 등 3차례 그리고 1997년
      2월에 한 차례 등 총 4회에 걸쳐 이루어졌습니다. 조사지역은 부산광역시,
      울산광역시, 창원시, 마산시, 통영시, 사천시, 밀양시, 거제시, 남해군,
      하동군, 함양군, 거창군, 합천군 등이며, 조사자는 박호원, 기량, 이관호,
      정명섭, 오세길이었습니다. 경상남도에서 조사된 장승과 솟대는 총
      35건이었는데 시군별로는 부산광역시( 2), 울산광역시(2), 창원시(1),
      마산시(1), 통영시(7), 사천시(1), 밀양시(6), 거제시(6), 남해군(2),
      하동군(2), 함양군(2), 거창군(2), 합천군(1)입니다. 부차적으로는 제주도도
      조사하였는데, 제주도 지역에는 장승과 솟대 문화가 없었기에 “제주의
      석상”이라는 주제로 총 33건의 제주도 돌하르방과 석상들을 조사하였습니다.
      시군별로는 제주시(17), 남제주군(13), 북제주군(3)입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">경남지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="172">
        <svelte:fragment slot="desc">통영 돌벅수</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">경상남도 장승의 특징</h2>
      <hr />
      <p class="article-desc">
        경상남도 장승의 특징은 명칭에 있어서 ‘장승’과 ‘벅수’란 명칭을 혼용하여
        사용한다는 점입니다. 전체적인 비율로 볼 때 장승보다는 대개 ‘벅수’로
        불리고 있으며, ‘미륵’, ‘국장생석표’ 등으로 불리기도 합니다. 국장생석표는
        사찰 입구에 세워져 있으면서 사찰 경계를 표시하는 역할을 했습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="173">
    <svelte:fragment slot="header">5-2. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">
      경상남도 하동군 화개면 운수리
      <br />
      쌍계사 입구에 있던 장승</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">
        1966년까지 경남 하동군 쌍계사 입구를 지켰던 쌍계사 장승
      </h3>
      본래 하동군 쌍계사 앞에는 장승 한쌍이 지키고 있었습니다. 일제강점기 유리건판
      사진으로도 기록된 바 있는 오래된 장승으로, 1966년 국립민속박물관으로 이전되어
      현재 전시 중에 있습니다. 1997년 2월 19일 국립민속박물관의 이관호, 정명섭, 오세길
      조사원들은 쌍계사 입구의 장승을 다시 찾았습니다. 장승이 옮겨 간 쌍계사 입구에는
      더 이상 장승은 없었고 인근에 유사한 모양의 장승이 있는 것을 확인하였습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      초창기 국립민속박물관에 전시된 쌍계사 장승
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="4" imgCode="174">
      <svelte:fragment slot="desc"
        >2018년 국립 민속박물관 복도의 쌍계사 장승</svelte:fragment>
    </Image>
    <div class="article-text text-center">
      <h3 class="article-title">국립민속박물관 대표 유물, 쌍계사 장승</h3>
      <hr />
      <p class="article-desc">
        쌍계사 장승은 1966년 국립민속박물관으로 이관하여 전시되고 있습니다.
        국립민속박물관의 중요한 소장품 중 하나로, 상설전시관에 개관 이후부터
        계속 전시되고 있습니다. 현존하는 장승 중 가장 오래된 것으로 추정되고
        있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="175">
        <svelte:fragment slot="desc">가람선신 (伽藍善神)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">가람선신-伽藍善神</h2>
      <hr />
      <p class="article-desc">
        가람선신(伽藍善神)은 남자장승입니다. 머리는 나무 뿌리를 이용하여 도깨비
        머리와 같이 봉두남발(蓬頭腩髮)의 형상을 하고 있으며, 이마에는 깊은
        주름이 패여 있습니다. 눈알은 둥글게 툭 튀어 나와 있으며 눈썹은
        당초문(唐草汶)으로 주름이 그어져 있습니다. 코는 주먹코에 유난히 콧망울이
        불룩합니다. 인중이 길고 코 밑 부분이 넓으며 코 밑에는 구름무늬의
        콧수염을 그려 놓았습니다. 입은 윗이빨만 보일 정도로 벌렸고, 윗송곳니가
        팔자형(八字形)으로 뾰족히 뻗어 나와 있어서 인상이 더욱 험상궂게
        보입니다. 턱수염은 한줄로 굵게 땋아서 오른쪽으로 구부려 놓았으며
        전체적인 모습은 약간 앞으로 구부정한 듯 휘었습니다. 현재 쌍계사에 있는
        장승은 페인트로 채색을 한 흔적이 보입니다. 따라서 예전의 것보다 더욱
        괴상스럽고 험상궂으며 다정다감한 맛이 없습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="176">
        <svelte:fragment slot="desc">외호선신 (外護善神)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">외호선신-外護善神</h2>
      <hr />
      <p class="article-desc">
        외호선신(外護善神)은 여자장승입니다. 머리는 나무 뿌리를 이용하여 도깨비
        머리와 같이 봉두남발(逢頭腩髮)의 형상을 하고 있으며 눈썹을 닭벼슬 같이
        새겨 올렸습니다. 눈은 둥글게 표현하였으되 약간 들어간 듯 하고 코는
        주먹코에 콧망울이 불룩합니다. 코밑 부분이 넓으며 입은 아랫 이빨이 모두
        보일 정도로 벌렸고, 아래 송곳니가 위로 솟아 나 있어 코 밑 부분의
        허전함을 메워 주고 있습니다. 그리고 턱에는 톱니 모양의 주름살이 새겨져
        있습니다 . 전체적인 모습은 약간 앞으로 구부정한 듯 휘었습니다. 현재
        쌍계사에 있는 장승은 페인트로 채색을 한 흔적이 보인다. 따라서 예전의
        것보다 더욱 괴상스럽고 험상궂으며 다정다감한 맛이 없다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="177">
    <svelte:fragment slot="header"
      >국립민속박물관
      <br /> 로비의 장승제</svelte:fragment>
    <svelte:fragment slot="desc">
      2021년 3월 23일 오전 10시, 국립민속박물관 로비에 전시되어 있는 쌍계사 장승
      앞에서 장승제를 재현하는 행사가 있었습니다. 본래 쌍계사 장승은 2전시실에
      전시되어 있었으나 이번에 박물관 중앙 로비로 옮겨졌습니다. 박물관에 오는
      사람들이 가장 먼저 보는 유물이 쌍계사 장승입니다. 이날 장승제에서는
      코로나19로 어려운 상황을 잘 살펴나갈 수 있도록 기원하였습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >2021년 쌍계사 장승제 재현 행사</svelte:fragment>
  </Subhero>
</div>

<Map />
