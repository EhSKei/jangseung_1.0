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

<Hero chapterCode="4" bgCode="154">
  <svelte:fragment slot="header">
    <div style="font-size:0.75em">
      1991~1995년, <br /> 장승·솟대 조사의 <br /> 비약적 성장기
    </div>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <div style="font-size:0.75em">전라북도, 전라남도 조사</div>
  </svelte:fragment>
</Hero>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="149">
    <svelte:fragment slot="header">4-1. 전라북도</svelte:fragment>
    <svelte:fragment slot="desc">
      전라북도 장승·솟대 조사는 1991년부터 1994년까지 4차에 걸쳐 진행되었습니다.
      1차 조사지역은 부안군․고창군․김제군, 2차 조사지역은 정읍군․장수군․무주군,
      3차 조사지역은 남원군․순창군․익산군 등이고, 4차 조사는 순창군 복흥면
      반월리 자포마을 당산제 참여조사를 했습니다. 조사자는 이종철, 김권구,
      정종수, 정승모, 박호원, 이관호, 황보명이었습니다. 전라북도에서 조사된
      장승과 솟대는 무려 119건이었고 시군별로는 고창군(30), 김제군(5),
      남원군(12), 무주군(16), 부안군(15), 순창군(10), 익산군(13), 장수군(11),
      정읍군(7)이었습니다. 이 시기부터는 조사건수가 다른 지역에 비해서 많이
      늘어가게 됩니다. 바야흐로 장승·솟대 조사의 비약적인 성장을 이룬 시기라 할
      수 있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">전북지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="150 (3)">
        <svelte:fragment slot="desc">당산제</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-desc">
        전라북도에서는 마을 공동체 행사인 당제와 동제를 “당산제”라고 부르며,
        이때 “당산”이란 곧 신앙의 대상물을 가리키는 것이 일반적입니다. 이 때문에
        전라북도의 “당산”에는 마을사람들이 믿는 신앙 대상물인 신목, 누석(조산),
        장승(벅수·법수), 솟대(짐대) 등이 존재합니다.
      </p>
      <br />
      <h2 class="article-title">전라북도 장승의 명칭</h2>
      <hr />
      <p class="article-desc">
        전라북도에서 장승을 부르는 명칭은 “벅수”보다는 “장승”, “장성”, “장신”,
        “미륵”, “문지기 장군”, “당산할아버지”, “당산” 등으로 불립니다. 대개 가장
        보편적으로는 “장승”, “장성”이라 불립니다. 솟대와 관련하여 부안과
        고창지방에는 단순한 입석 짐대의 형태에서 벗어나
        오리석간당산[石鳥石竿柱], 또는 갓석간주당산[笠石間硃] 형태의 솟대당산이
        있으며 이들 석간주 건립연대를 밝힌 명문(銘文)도 있었습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="151">
    <svelte:fragment slot="header">4-2. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">
      전라북도 부안군 부안읍 내요리
      <br />
      짐대할머니</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">내요리 석제마을 앞의 짐대할머니</h3>
      1991년 3월, 국립민속박물관의 정승모 학예연구사와 김형주 부안여고 교장은 돌모산
      당산제가 행해지는 부안군 부안읍 내요리를 찾았습니다. 내요란 ‘역구지(여뀌)’
      또는 삼고지(蓼古地) 마을의 안쪽이라는 뜻입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">1991년 내요리 전경</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="152">
        <svelte:fragment slot="desc">1991년 돌모산 당산</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-desc">
        국립민속박물관 조사팀은 마을 주민들이 ‘진대하나씨당산’(짐대
        할머니)이라고 부르는 당산을 찾았습니다. 이 당산은 마을 입구에 세워져
        있었습니다. 돌모산 당산은 석주신간(石柱神竿)의 신당으로 신간의 높이가
        250㎝, 둘레가 80㎝입니다. 당산 위에 올려 진 오리의 석조 길이는 40㎝, 몸
        둘레는 25㎝이며 부리는 서북쪽을 향하고 있었습니다. 조형적으로도 매우
        아름다웠습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 place-self-center">
      <Image chapterCode="4" imgCode="153">
        <svelte:fragment slot="desc">1991년 돌모산 당산</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">석조신간, 당산에 얽힌 전설</h2>
      <hr />
      <p class="article-desc">
        기록이 없어서 돌모산 당산의 기원을 정확히 알기는 어렵지만, 이 지역에
        전해 오는 이야기에 따르면 마을 지형이 배모양이라는 풍수설에 의해 돌모산
        당산이 세워졌다고 합니다. 또 옛날 어떤 도승이 동냥하러 이 마을에 찾아 온
        적이 있었는데, 주민들이 푸대접한 결과인지 우물 판 집마다 좋지 않았다고
        합니다. 당산 건립과 관련하여 또 다른 전설이 있습니다. 마을 모양이
        배모양이기에 배가 가벼우면 쉽게 파손되므로, 이를 방지하기 위해
        돛대용으로 큰 돌기둥을 대신 세워 배를 무겁게 하였다고 합니다. 마을의
        안녕과 번영을 위해 돌모산 당산이 세워진 것은 틀림없어 보입니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="154">
        <svelte:fragment slot="desc">1991년 돌모산 당산제</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">
        전라북도 민속문화재 제19호
        <br /> 돌모산 당산과 제의
      </h2>
      <hr />
      <p class="article-desc">
        국립민속박물관 조사팀은 마을 주민들이 ‘진대하나씨당산’(짐대
        할머니)이라고 부르는 당산을 찾았습니다. 이 당산은 마을 입구에 세워져
        있었습니다. 돌모산 당산은 석주신간(石柱神竿)의 신당으로 신간의 높이가
        250㎝, 둘레가 80㎝입니다. 당산 위에 올려 진 오리의 석조 길이는 40㎝, 몸
        둘레는 25㎝이며 부리는 서북쪽을 향하고 있었습니다. 조형적으로도 매우
        아름다웠습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 place-self-center">
      <Image chapterCode="4" imgCode="155">
        <svelte:fragment slot="desc">1991년 당산에 줄감기</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <p class="article-desc">
        제의는 당골이 주관하여 설차→분향→강신→제관재배→음복의 순으로 진행됩니다.
        제물로는 백설기·떡·삼색실과 등 일반 집안의 음식 차림과 거의 같습니다.
        제사 후에는 남녀 줄다리기→마을돌기→짐대 옷입히기 등의 행사가 이어집니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="156">
    <svelte:fragment slot="header">
      2022년, <br /> 부안 돌모산 당산제의 지속성
    </svelte:fragment>
    <svelte:fragment slot="desc">
      내요리 지역민들은 당산에 대한 신앙심이 매우 강하여 제의를 열심히 모시면,
      그해 마을은 풍년을 맞고 해가 발생하지 않는다고 믿는다고 합니다. 당산제를
      안 모시거나 소홀히 행하면 그해 마을에는 좋지 않은 일들이 생긴다고 하여
      더욱 열심히 모십니다. 2022년 9월 28일, 국립민속박물관 조사팀은 이러한
      내요리 마을을 다시 찾았습니다. 여전히 마을 어귀에서 돌모산 당산을 발견할
      수 있었고 마을 주민들은 지금도 매년 거르지 않고 돌모산 당산제를 지내고
      있다고 합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">2022년 돌모산 당산</svelte:fragment>
  </Subhero>
</div>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="157">
    <svelte:fragment slot="header">4-3. 전라남도</svelte:fragment>
    <svelte:fragment slot="desc">
      전라남도 장승·솟대 조사는 1994년 2월부터 1995년 2월까지 총 5회에 걸쳐
      진행되었습니다. 정월 대보름에는 마을 제사 현장에 대한 참여관찰 조사도
      실시하였습니다. 조사지역은 광주광역시를 포함한 전라남도 전 지역 25개
      시․군을 대상으로 삼았으나, 장승·솟대가 발견된 광주광역시, 여수시, 순천시,
      나주시, 여천시, 담양군, 곡성군, 여천군, 보성군, 화순군, 장흥군, 강진군,
      해남군, 영암군, 무안군, 함평군, 영광군, 장성군, 진도군, 신안군 등 20개
      시․군에서 실제 조사가 이루어졌습니다. 조사자는 김종대, 박호원, 이관호,
      황보명, 김삼기, 기량, 강현구(향토문화개발협의회 전문위원), 김희태(전남도청
      문화재 전문위원), 선영란(향토문화개발협의회 간사)였습니다. 조사된 장승과
      솟대의 건수는 총 87건이었으며 시군별로는 광주광역시(4), 여수시(3),
      순천시(6), 나주시(3), 여천시(2), 담양군(4), 곡성군(6), 여천군(5),
      보성군(3), 화순군(9), 장흥군(4), 강진군(2), 해남군(7), 영암군(3),
      무안군(4), 함평군(3), 영광군(6), 장성군(5), 진도군(4), 신안군(4)입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">전남지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="158">
        <svelte:fragment slot="desc">총지사지 석장승</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">벅수, 전라남도 장승의 대표 명칭</h2>
      <hr />
      <p class="article-desc">
        전라남도에서 장승은 대개 “벅수”라 불리고 있습니다. 다른 지역에 비해
        퉁망울 눈을 한 돌벅수가 많고 여러 개의 장승에서 조성연대가 기록된 명문이
        나타나고 있는 것도 특징입니다. 사찰장승 또한 타지역에 비해 많이 나타나고
        있는 것이 특징입니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container ">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="159">
        <svelte:fragment slot="desc">송호리 동방적제장군</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">전라남도 장승·솟대의 특징</h2>
      <hr />
      <p class="article-desc">
        전라남도 장승은 명문에 있어서도 다른 지역과 다소 차이가 있었습니다. 가장
        일반적인 ‘천하대장군’, ‘지하대장군’ 외에도, ‘동방청제부인',
        ‘서방백제부인', ‘중앙황제부인', ‘남방적제부인’, ‘북방흑제부인’ 등 다른
        표현들이 보였습니다. 다른 지역에서는 솟대의 새를 대개 ‘오리’라고 하는데,
        해남군 송지면 서정리 치소마을의 경우에는 ‘매’, 진도군 고군면 석현리의
        경우에는 ‘까치’라고 하는게 특이했습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="160">
    <svelte:fragment slot="header">4-4. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">
      전라남도 영암군 금정면 남송리
      <br />
      쌍계사지 석장승</svelte:fragment>
    <svelte:fragment slot="desc">
      1986년 전라남도 민속자료 제17호로 지정 보호되고 있는 쌍계사지 석장승은 5m
      간격을 두고 총 2기의 장승이 서로 마주보고 있는 형상입니다. 이 중 서쪽에
      있는 장승은 ‘주장군(周將軍)’, 동쪽에 있는 장승은 ‘당장군(唐將軍)’이라 쓰여
      있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >2022년 쌍계사지 석장승(전면)</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="161">
        <svelte:fragment slot="desc"
          >2022년 쌍계사지 석장승(주장군)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">주장군</h2>
      <hr />
      <p class="article-desc">
        주장군은 벙거지를 썼고 짧은 이마 위로 곡선을 그은 돌대같은 두 개의
        주름과 주름 아래에서 눈까지 두터운 눈썹을 표현하였습니다. 퉁방울눈과
        도두라진 주먹코를 하고 입을 다문 모습입니다. 윗입술 아래에 네모진 이빨을
        많이 드러내 놓았고 외가닥 수염을 배까지 길게 늘어뜨렸습니다. 배부분에
        ‘주장군(周將軍)’이란 명문이 새겨져 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="162">
        <svelte:fragment slot="desc"
          >2022년 쌍계사지 석장승(당장군)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">당장군</h2>
      <hr />
      <p class="article-desc">
        당장군 역시 벙거지를 썼고, 눈 위로 홈을 파 이마를 구분하고 얕게 두 개의
        반원을 그려 주름을 표현하였습니다. 눈썹 표현은 하지 않고 퉁방울눈의
        가장자리에 두툼한 둥근테 선을 둘렀습니다. 콧잔등에 작은 백호 같은 구슬과
        깨어진 콧등이 좁은 콧날을 이루고 펑퍼짐한 주먹코 아래로 콧구멍이 두 개
        뚫렸습니다. 입은 꺾쇠를 아래로 걸쳐 놓은 듯이 턱 전체에 길게 선각하여
        성난 듯한 입과 턱이 표현되었습니다. 흐릿하게 채수염이 표현되었고
        배부분에 ‘당장군(唐將軍)’이라는 명문이 새겨져 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="163">
        <svelte:fragment slot="desc"
          >2022년 쌍계사지 석장승(측면)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">호법장승, 왜 절 앞에 장승을 세웠나?</h2>
      <hr />
      <p class="article-desc">
        쌍계사지 석장승에 대한 제작 연대는 직접적인 기록이 없어 정확한 시대는 알
        수 없으나 쌍계사의 창건·중수의 역사와 연관시켜 13세기 말 정도를 상한으로
        상정해 볼 수는 있습니다만 보다 후대에 세워진 것으로 보는 것이
        정설입니다. 쌍계사지 장승은 사찰에 들어오는 잡귀침입을 방지하고
        성역공간을 표식한 금표적 기능을 가지고 있는데 이것을 호법장승이라
        합니다. 쌍계사지 장승에서 나타나는 주장군(周將軍)과 당장군(唐將軍)
        명문은 전라도 지방의 사찰 장승에 많이 나타나는 특징이라고 합니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="164">
        <svelte:fragment slot="desc">쌍계사지 안내판</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">
        2022년 10월, <br />
        어렵게 만난 쌍계사지 장승
      </h2>
      <hr />
      <p class="article-desc">
        2022년 10월, 국립민속박물관 조사팀은 쌍계사지 장승을 조사하였습니다.
        대부분의 장승들이 차량이 접근 가능한 곳에 있었는데 쌍계사지 장승은 차로
        접근이 불가능한 곳에 있었습니다. 산길을 따라 서 1km 정도 올라간 후에야
        고즈넉한 모습의 쌍계사지 장승 2기를 만날 수 있었습니다. 산길은 인적이
        드물어 잡초가 무성하였고 여름에 내린 폭우로 인해 길이 여러 곳 파여
        있었습니다. 2022년의 조사자들도 산길을 오르며 짧게 나마 과거
        국립민속박물관 선배님들의 노고를 경험할 수 있었습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="165">
    <svelte:fragment slot="header">4-5. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">
      전라남도 광주시 남구
      <br />
      송암동 임정마을</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size:1em">임정 마을 들머리의 영감벅수와 할멈벅수</h3>
      국립민속박물관 조사팀은 1995년 2월 10일부터 2월 16일까지 광주시 남구 송암동
      임정마을 등 광주 지역의 장승들을 조사하였습니다. 조사단은 박호원, 기량, 강현구,
      김희태, 선영란 등으로 구성되었습니다. 먼저 찾아간 송암동 임정마을은 마을이
      성립된 지 300여 년쯤 되는 곳으로 마을로 들어오는 들머리(마을 앞쪽)에 장승(벅수)이
      서 있었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">1995년 임정마을 지하여장군</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="166">
        <svelte:fragment slot="desc">2022년 임정마을 영감벅수</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">임정마을 영감벅수</h2>
      <hr />
      <p class="article-desc">
        영감벅수는 좌측에, 할멈벅수는 우측에 서서 마주보고 있었는데 영감벅수의
        높이는 240cm, 둘레 90cm, 얼굴 길이 140cm이며, 소나무 뿌리를 이용하여
        봉두남발형을 이루고 있고, 몸통엔 천하대장군(天下大將軍)이 묵서되어
        있었습니다. 얼굴은 고리 눈에 긴 코, 그리고 여러 개의 이빨이 양각 되어
        있으며 수염을 빗살처럼 표현하였습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="167">
        <svelte:fragment slot="desc">2022년 임정마을 할멈벅수</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">임정마을 할멈벅수</h2>
      <hr />
      <p class="article-desc">
        할멈벅수는 고리눈에 큰 코, 그리고 가지런한 이빨이 양각되어 웃고 있는
        형상으로 높이 195cm, 둘레 80cm, 얼굴 길이 80cm이며, 몸통엔
        지하여장군(地下女將軍)이 묵서되어 있었습니다. 1996년에 조사팀이 다시
        방문했을 때는 벅수 하나의 몸통 밑부분이 썩어서 넘어져 있었다고 합니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="168">
        <svelte:fragment slot="desc">2022년 임정마을 전경</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">벅수제</h2>
      <hr />
      <p class="article-desc">
        마을 주민 전경순(全京順)씨의 기억으로는, 해방될 때까지만 하더라도 임정
        슈퍼마켓 옆에 괴목나무와 버드나무로 이루어진 두 그루의 당산나무가 있어서
        꾸준히 당산제를 지내 왔다고 합니다. 그러나 한국전쟁 이후에 당산나무가
        고사(枯死)되면서 당산제가 단절되었다고 합니다. 본래 벅수제는 당산제의
        일부로, 당산 터의 거센 기운을 누르기 위해 지내오던 부차적인 작은
        제사였는데 당산제는 단절되었으나 벅수제는 계속 지냈다고 합니다.
        임정마을은 마을은 배모양이어서 벅수할멈 뒤쪽의 소나무 숲속에는
        가죽나무로 장대를 만들어 오리를 깎아 올린 짐대가 있었다고 하는데
        당시에는 발견할 수 없었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="169">
        <svelte:fragment slot="desc"
          >2022년 마을입구의 영감벅수</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">영감벅수와 할멈벅수에 제사를 지내다.</h2>
      <hr />
      <p class="article-desc">
        제의 절차는 먼저 영감 벅수에서 다음에 할멈 벅수 앞에서 제를 지낸 다음,
        마을 내 공동 샘에서 샘굿을 치고 마을을 돌며 마당 밟기를 시작합니다.
        이어서 공동 샘을 기준으로 웃대미와 아랫대미로 편을 갈라 줄다리기를
        실시했으나 오늘날은 벅수제로 끝내고 있습니다. 1992년의 경우에는 2월 1일
        오전 10시경 벅수 앞에서 모여 농악을 친 뒤 영감벅수 주변에 간단한
        산신상(山神床)을 차려, 제를 지내고, 제물을 조금씩 떼어 내 벅수 밑에 묻은
        다음, 참석자들이 음복을 하고 농악을 치면서 끝을 냈습니다. 제(祭)가
        끝나면 벅수 몸체에 감겨 있는 금줄에 재액 소멸을 상징하는 북어를
        끼워둡니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="170">
    <svelte:fragment slot="header"
      >2022년, <br /> 전설로 남은 임정마을 벅수제</svelte:fragment>
    <svelte:fragment slot="desc">
      벅수제와 관련하여 임정마을에는 많은 이야기들이 전해지고 있습니다. 마을에
      도둑이 들어 물건을 훔쳐 나오다 벅수 근처에 오면 도망가지 못하고 주위만
      맴돌다 물건을 버리고 몸만 도망간다는 이야기, 천연두가 창궐했을 때 벅수의
      영험으로 마을 내에는 아무런 피해가 없었다는 이야기 등이 전해집니다.
      임정마을의 벅수제는 도시화, 산업화로 인해서 현재는 전승되지 못하는
      형편입니다. 주변에는 아파트가 계속 들어서고 있고 원주민들은 대부분
      타지역으로 이주하였습니다. 아직 벅수는 2022년에도 옛모습 그대로 존속하고
      있었지만, 얼마나 더 존속이 될지는 모르겠습니다. 장승과 솟대의 보존에
      신경을 써야할 이유입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >2022년 임정(林亭) 장승법수골 안내문</svelte:fragment>
  </Subhero>
</div>

<Map />
