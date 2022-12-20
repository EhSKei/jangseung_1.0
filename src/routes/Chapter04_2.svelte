<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Footer from "../lib/Footer.svelte";
  import Map from "../lib/Map.svelte";
  import Navbar from "../lib/Navbar.svelte";

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

<Hero chapterCode="4" bgCode="099">
  <svelte:fragment slot="header">
    <div style="font-size:0.75em">1989년, <br /> 장승·솟대 조사의 성숙기</div>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <div style="font-size:0.75em">경상북도, 충청북도 조사</div>
  </svelte:fragment>
</Hero>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="096">
    <svelte:fragment slot="header">2-1. 경상북도</svelte:fragment>
    <svelte:fragment slot="desc">
      경상북도 장승·솟대 조사는 1989년 2월, 10월로 나누어 행해졌습니다. 특히,
      2월 조사 기간에는 정월 보름이 포함되어 선산군 산동면 도중리 등의 마을에서
      지냈던 동제의 참여관찰 조사도 이루어졌습니다. 조사지역은 선산군, 상주군,
      금릉군, 군위군, 영덕군, 영일군, 안동군, 안동시, 예천군, 문경군, 의성군,
      청송군, 청도군이며, 조사자는 이종철, 정승모, 천진기이었습니다.
      경상북도에서 조사된 장승과 솟대는 총 34건이었고 1988년의 강원도와 경기도에
      비해 조사건수가 배로 늘어났습니다. 시군별로는 선산군(2), 상주군(4),
      금릉군(5), 군위군(1), 영덕군(3), 영일군(2), 안동시(5), 예천군(5),
      문경군(3), 의성군(1), 청송군(1), 청도군(1), 대구시(1)입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">경북지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="097">
        <svelte:fragment slot="desc">누각 밑에 방치된 장승</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">경상북도의 마을 공동체 신앙</h2>
      <hr />
      <p class="article-desc">
        경북지방 마을공동체의 마을신[洞神]은 마을을 처음으로 개척하여 터를 잡은
        입향 시조신이거나, 또는 마을을 지켜준다고 믿는 수호신이 일반적입니다.
        마을신은 마을의 개척신이며, “골맥이할매”, “할배”로 불려지는
        조상신이면서, 수강신의 개념을 내포하고 있습니다.
      </p>
      <br />
      <h2 class="article-title">경상북도 장승 신앙의 특징</h2>
      <hr />
      <p class="article-desc">
        안동시 도산면 태자 1동에서는 솟대를 “오릿대”라 부르고, 영일 기계면
        문성동에서는 솟대를 “세워 놓은 큰 나무”, “솟아 있는 나무”, “솔나무”
        등이라 부른다고 합니다. 다른 지역에서는 그냥 “솟대”라 부르기도 하며,
        신체의 기능적인 의미를 강조하여 “성주기둥”이라고도 부릅니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="098">
        <svelte:fragment slot="desc">고리현 오릿대 근경</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">경상북도 솟대의 명칭</h2>
      <hr />
      <p class="article-desc">
        안동시 도산면 태자 1동에서는 솟대를 “오릿대”라 부르고, 영일 기계면
        문성동에서는 솟대를 “세워 놓은 큰 나무”, “솟아 있는 나무”, “솔나무”
        등이라 부른다고 합니다. 다른 지역에서는 그냥 “솟대”라 부르기도 하며,
        신체의 기능적인 의미를 강조하여 “성주기둥”이라고도 부릅니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container ">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="099">
        <svelte:fragment slot="desc">마을입구 골맥이</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">경상북도 장승의 다양한 이름들</h2>
      <hr />
      <p class="article-desc">
        경상북도에서 장승은 다양한 명칭으로 불리고 있었습니다. 조사된 18개 장승
        가운데 그냥 “장승”이라 불리는 곳은 8개소였으며, 그 외는 석장성, 장승
        또는 문인석, 골맥이 장승, 수구맥이 장생, 동맥이 석상, 골맥이, 골맥이
        입석, 할배당 입석, 천장군, 석상 등으로 불리고 있었습니다. 다른 지역에
        비해서 장승의 명칭이 다양한 것이 특징입니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="100">
    <svelte:fragment slot="header">2-2. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">
      경상북도 상주군 내서면 남장리
      <br />
      남장사 입구 석장승</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">남장사 석장승을 찾다.</h3>
      1989년 2월 21일 오전 11시, 국립민속박물관 조사팀의 정승모 학예연구사(작고)는
      첫 조사지역으로 상주의 남장사를 찾았습니다. 원래 남장사 입구의 석장승은 일주문에서
      약 300m 떨어진 길에 서 있었는데 1968년 저수지 건설로 옛날 길이 물에 잠기게
      되면서 옮기게 되었다고 합니다. 당시 석장승의 위치는 남장리 저수지 뚝 서쪽 길
      위에 있었다고 합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      정승모가 그린 남장사 입구 장승 위치
    </svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="101">
        <svelte:fragment slot="desc"
          >1989년 당시 남장사 석장승(전면)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">1832년에 세워진 남장사 석장승</h2>
      <hr />
      <p class="article-desc">
        정승모 학예연구사가 기록한 석장승은 높이 186cm의 화강석으로 큰눈,
        송솟니, 수염 등은 나무장승의 모습과 유사합니다. 몸통 중간 부분부터
        아래로 ‘하원당장군(下元唐將軍)’이라고 다섯 글자가 음각(陰刻)되어 있으며
        작은 글씨로 ‘임진칠월입(壬辰七月立)’이라고 써져 있습니다. 석장승
        복원사업을 주관한 상주군내의 상맥회(尙脈會)에서는 이 연대를 남장사 법당
        건축시기인 1832년으로 추정하고 있습니다. 주민들은 이보다는 더 오래되었을
        것이라고 말하고 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="102">
        <svelte:fragment slot="desc"
          >1989년 당시 남장사 석장승(후면)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">불가의 전설이 얽혀 있는 남장사 석장승</h2>
      <hr />
      <p class="article-desc">
        남장사 석장승과 관련해서는 실제 제작시기가 고려 초에 강감찬
        장군(958~1031)이 상주복사로 있을 때라는 전설이 마을에 전해져 내려오고
        있었습니다. 그 내용은 다음과 같습니다.
      </p>
      <p class="article-desc">
        <i>
          예전에 어떤 부부가 아이가 없던 차에 아들, 딸 오누이를 얻었는데 조금 큰
          후에 두 아이를 모두 잃게 되었다. 그래서 두 부부가 남장사에 가서 불공을
          드렸더니 내일 남장사 장승 뒤에 다 귀를 대고 있으면 아들과 딸을 찾을 수
          있을 것이라는 예시가 있어 다음날 그대로 했더니 멀리서 행차하는 소리가
          나 그 뒤를 따라가 관현에 이르게 되었다. 일반 백성이라 더 이상 못
          들어가고 문틈으로 들여다보니 도현 마루 밑에 자식 오누이가 있어 부르니
          욕을 하면서 자신 들은 당신들에게 원한이 있어 이를 갚으러 왔다가 간
          것이라고 말하더라는 것이다. 부부가 생 각해보니 자신들이 예전에 비둘기
          한쌍을 구워 먹은 적이 있었다는 것이다F
        </i>
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="4" imgCode="103">
      <svelte:fragment slot="desc"
        >1989년 당시 남장리 마을 전경</svelte:fragment>
    </Image>
    <p class="article-text text-center">
      전설의 내용에는 살생(殺生)하지 말라는 불가(佛家)의 가르침이 조선시대를
      배경으로 하여 전달되고 있으며 석장승이 매개가 되고 있습니다. 이전의 장소에
      석장승이 서 있을 때는 남장사에 다니는 신도들이 오르내리면서 돌맹이를
      장승에 던져 돌맹이가 항상 목부근까지 차 있었다고 합니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="104">
    <svelte:fragment slot="header"
      >2022년, <br />
      남장사 입구의 석장승</svelte:fragment>
    <svelte:fragment slot="desc">
      2022년 6월, 국립민속박물관 조사팀은 1968년 저수지 공사 이후에 옮겨진
      남장사 석장승을 확인하기 위해 다시 상주시 남장동을 찾았습니다. 노음산 남쪽
      마을인 남장동은 과거에는 절 소유 농토가 많았고 주민들이 이를 소작하여
      사하촌의 성격을 띄었다고 합니다. 하지만 지금은 감 재배와 곶감 가공이
      주수입원이 되고 있습니다. 가을이면 수 만개의 감들이 햇빛을 받아 붉은 빛을
      반사하는 장관을 볼 수 있다고 합니다. 줄 지어있는 곶감 덕장을 지나 남장사
      방면으로 한참을 가다보니 길가의 남장사 석장승을 바로 찾을 수 있었습니다.
      이 석장승은 부분적으로 풍화된 흔적이 있었지만 1982년 2월 24일 경상북도
      민속문화재로 지정된 이후 잘 보존되고 있었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">2022년 남장사 석장승</svelte:fragment>
  </Subhero>
</div>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="105">
    <svelte:fragment slot="header">2-3. 충청북도</svelte:fragment>
    <svelte:fragment slot="desc">
      충청북도 장승·솟대 조사는 1989년 2월과 11월, 2차에 걸쳐 실시되었으며, 정월
      보름이 포함된 1차 조사 기간에는 장승제의 참여 조사를 통하여 진행절차,
      주민들이 생각하는 장승신앙의 의미 등을 조사함으로써 현장감을 파악하고자
      노력하였습니다. 조사지역은 청주시, 괴산군, 단양군, 영동군, 옥천군, 음성군,
      청원군 등 7개 시·군이며, 조사자는 이종철, 박호원, 정종수, 이관호, 김삼기,
      기 량, 정명섭, 이문현이었습니다. 그리고 김중진(KBS PD), 송봉화(사진작가)
      선생님의 공동 조사가 이루어졌습니다. 조사된 장승과 솟대는 모두 39건이었고
      시군별로는 청주시(3), 괴산군(5), 단양군(1), 영동군 (2), 옥천군(20),
      음성군(2), 청원군(6)입니다. 옥천군에서 무려 20건을 조사한 것이 특징입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">충북지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="106">
        <svelte:fragment slot="desc"
          >장승·솟대·돌탑·당산나무가 같이 있는 모습-옥천군 사기점골</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">장승·솟대와 다른 신앙물과의 공존</h2>
      <hr />
      <p class="article-desc">
        충청복도에서는 장승과 다른 신앙물들이 같은 장소에 함께 있는 경우가
        많습니다. 흔히 장승과 솟대가 함께있는 일반적인 모습 외에도 선돌, 돌탑
        등도 장승과 공존하는 예가 보입니다. 명칭 또한 장승, 솟대, 선돌, 돌탑,
        미륵 등이 상호 동일한 명칭으로도 불리고 있습니다. 장승을 가리키는 명칭은
        수구맥이, 선돌맥이, 장군, 장승, 선돌, 돌(탑), 거북, 수살맥이, 수살, 미륵
        등이 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="107">
        <svelte:fragment slot="desc"
          >장승 솟대에 주저리 다는 주민</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">충청북도 장승의 특징</h2>
      <hr />
      <p class="article-desc">
        충청북도 장승의 특징은 다른 지역에서 많이 보이는 이정표 장승, 사찰 장승
        등이 전혀 발견되지 않는 점이었습니다. 이러한 점에서 충청북도의 장승은
        외부와의 연결을 위한 장승이 아니라 현지 주민들의 수호와 풍요를 보장하는
        마을 수호신 기능이 강한 것이 특징입니다. 마을 사람들의 평화와 안녕을
        기원하는 장승의 본래 기능이 강했습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="108">
    <svelte:fragment slot="header">2-4. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title"
      >충청북도 옥천군 청마리
      <br />
      장승과 솟대</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">해마다 탑신제를 지내는 마티마을</h3>
      충북 옥천군 청마리 마티마을은 옥천에서도 가장 외지고 교통이 불편한 지역으로
      1989년 조사 당시만 하더라도 비가 많이 오든지 날씨가 궂을 때에는 이 마을을 쉽게
      찾을 수 없을 정도였습니다. 외진 곳에 위치한 작은 마을이지만, 마티는 정월 대보름
      오전에 주민들에 의해 지내지는 동제가 유명한 마을이었습니다. 국립민속박물관
      장승솟대 조사팀의 이종철 국립민속박물관장과 정종수 학예연구사는 옥천군 마티마을을
      찾았습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >1989년 당시 마을 전경과 장승 모습</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article">
    <div class="article-text">
      <h3 class="article-title">청마리 장승과 솟대를 발견하다</h3>
      <hr />
      <p class="article-desc">
        1989년 당시 마을에는 우산국민학교 청마분교가 있어 청마리의 어린이들과
        청성면 합금리의 어린이들이 다니고 있었습니다. 국립민속박물관 조사팀은
        학교 뒷담에서 마티마을 주민들이 오래 전부터 섬겨 오던 돌탑과 솟대를
        발견하게 됩니다. 또 그 뒷편 농기계 수리센타 옆 마티교 좌우에는
        나무장승이 마주보고 서 있는 것을 발견하였습니다.
      </p>
    </div>
    <div
      style="display:grid; grid-template-columns: repeat(2,1fr); align-items: flex-end">
      <Image chapterCode="4" imgCode="109">
        <svelte:fragment slot="desc">
          1989년 당시 장승 모습 <br /> (천하대장군)
        </svelte:fragment>
      </Image>
      <Image chapterCode="4" imgCode="110">
        <svelte:fragment slot="desc">
          1989년 당시 장승 모습 <br /> (지하여장군)
        </svelte:fragment>
      </Image>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2" style="grid-template-rows: auto">
    <div
      style="display: grid; gap: 2ch; grid-template-rows: repeat(2, min-content)">
      <Image chapterCode="4" imgCode="113">
        <svelte:fragment slot="desc">1989년 청마리 탑제</svelte:fragment>
      </Image>
      <div class="article-text p-md-0">
        <h3 class="article-title">1989년의 청마리 탑제</h3>
        <hr />
        <p class="article-desc">
          정월대보름날 오전 10시 정도에 마을 사람들이 모여서 탑제를 지낸다고
          합니다. 장승과 솟대는 윤달이 드는 해(4년에 한번)에만 다시 세웠다고
          합니다. 장승 2기, 솟대 1기를 세우기 위해 산에서 소나무 3그루를
          베었다고 합니다. 마을에서는 나무를 베어서 가지고 올 때 부르는 노래가
          전해집니다. 2022년 현재도 청마리 탑제는 전승되어오고 있습니다.
        </p>
        <br />
        <p class="article-desc text-center">
          <i>
            모셔가세 모셔가세 모든 악귀 물리치실 추악대를 모셔가세<br />
            모셔가세 모셔가세 천하대장군 모셔가세 우리부락 지켜주실 천하대장군 모셔가세<br />
            모셔가세 모셔가세 지하대장군 모셔가세 우리부락 지켜주실 지하대장군 모셔가세
          </i>
        </p>
      </div>
    </div>
    <div class="place-self-center" style="display: grid; gap: 2ch">
      <Image chapterCode="4" imgCode="112" />
      <Image chapterCode="4" imgCode="111" />
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="114">
        <svelte:fragment slot="desc">2022년 마티마을 전경</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h3 class="article-title">2022년의 청마리</h3>
      <hr />
      <p class="article-desc p-0">
        2022년 9월 23일, 국립민속박물관 조사팀은 옥천군 청마리 마티마을을 다시
        찾았습니다. 현재는 초등학교가 폐교되면서 옻 배움터를 조성하여 옻나무들이
        심어져 있었습니다. 그리고 아직도 탑과 솟대가 건재하였고, 마티마을
        입구에서는 장승을 발견할 수 있었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="115">
        <svelte:fragment slot="desc">2022년 마을 전경</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 ">
      <h3 class="article-title">충북 민속문화재 제1호, 옥천 청마리 제신탑</h3>
      <hr />
      <p class="article-desc">
        마티의 동제는 정월 초사흘에 지내는 산신제와 정월 보름날에 지내는
        동제(탑제·솟대제·장승제)로 나누어 볼 수 있습니다. 이는 충청북도에서
        보편적으로 확인되는 상당제와 하당제로 이원화된 동제의 이중구조입니다.
        마티마을에서는 산신제가 “상당제”, 동제가 “하당제”입니다. 마티마을
        사람들은 정월 대보름의 제의를 “동제” 또는 “탑신제”라고 부릅니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="116">
        <svelte:fragment slot="desc">산신당 전경</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h3 class="article-title">마티마을 산신당</h3>
      <hr />
      <p class="article-desc">
        마티마을 산신제는 마을에서 북서쪽으로 약 1km 떨어진 깃대봉이라 불리는 산
        중턱에 자리한 산신당에서 지냅니다. 산신당은 신목인 소나무와 그 자리를
        포함한 자연제당이며, 신목 주변에 나무로 짠 울타리를 경사면을 따라서,
        단을 4단으로 울타리를 설치해서 주변으로부터 제당 공간을 구분하고
        있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <div class="article-text text-center">
      <span class="article-title"
        >마티마을 탑신제
        <hr /></span>
      <p class="article-desc">
        ‘동제’ 혹은 ‘탑신제’는 마을의 탑, 솟대, 장승을 모시는 제사입니다. 그
        가운데에서 탑제를 가장 중요한 제의로 여기고 있습니다. 이는 탑제를 다른
        제의보다 먼저 시행하는 점과 동제를 탑신제라는 명칭으로 부르는 점에서도
        알 수 있습니다. 탑은 원뿔형의 돌탑으로 높이가 약 5m, 둘레가 약 7m입니다.
        마을회관에서 북서쪽, 마을 창고의 맞은 편에 자리하고 있으며, 탑의
        주변으로 낮은 울타리가 둘러 처져있습니다. 탑 꼭대기에는 70cm 가량의
        길쭉한 머릿돌이 세워져 있는데, ‘동제’를 지낼 때 이 돌의 몸통에 한지를
        양쪽으로 매듭지어 묶습니다. 탑의 몸통 부분에는 금줄을 치지 않는다고
        합니다.
      </p>
    </div>
    <div class="article grid-2">
      <Image chapterCode="4" imgCode="117">
        <svelte:fragment slot="desc">탑</svelte:fragment>
      </Image>
      <Image chapterCode="4" imgCode="118">
        <svelte:fragment slot="desc">한지를 묶은 머릿돌</svelte:fragment>
      </Image>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <div class="article-text text-center">
      <span class="article-title"
        >마티마을 짐대
        <hr /></span>
      <p class="article-desc">
        마을 사람들이 ‘짐대’라고도 부르는 솟대는 탑이 있는 자리에서 동쪽으로 10m
        가량 떨어진 지점에 세워져 있으며 높이는 6m 정도입니다. 솟대 아랫부분에
        돌을 쌓아서 고정해 둔 형태입니다. 솟대 아래의 돌들은 작은 탑 모양을
        이루고 있습니다. 솟대 꼭대기에는 나무오리를 올려두었는데 Y자형 나무
        모양은 오리의 몸통과 날개를, ㄱ자형 나무 모양은 오리의 머리를 표현한
        것입니다. 솟대는 윤년이 드는 해(4년에 1번)에 새롭게 만드는데, 이때 마을
        남성들은 긴 장대에 황토와 숯을 칠해 황룡과 흑룡을 표현합니다. 이를
        “용틀임”이라고 하는데, 농사의 풍요를 기원하는 상징적인 조형이라고 할 수
        있습니다.
      </p>
    </div>
    <div class="article grid-2">
      <Image chapterCode="4" imgCode="119">
        <svelte:fragment slot="desc">솟대</svelte:fragment>
      </Image>
      <Image chapterCode="4" imgCode="120">
        <svelte:fragment slot="desc">솟대 꼭대기의 나무오리</svelte:fragment>
      </Image>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2" style="grid-template-rows: auto">
    <div style="display: grid; gap: 2ch;">
      <div class="article-text p-md-0">
        <h3 class="article-title">마티마을 장승</h3>
        <hr />
        <p class="article-desc">
          탑과 솟대가 있는 자리에서 북서쪽으로 약 10m 정도 가면 장승이 보입니다.
          탑을 등진 채 마을 길을 사이에 두고서 우측에는 천하대장군이, 좌측에는
          지하여장군이 세워져 있습니다. 천하대장군의 좌측으로 오래되어서 상한
          장승들이 가지런히 눕혀져 있는데, 이는 나무가 자연적으로 썩어
          없어지도록 놓아두는 기존 장승의 처리 방식을 보여주는 것입니다.
        </p>
      </div>
      <Image chapterCode="4" imgCode="121">
        <svelte:fragment slot="desc">천하대장군</svelte:fragment>
      </Image>
    </div>
    <div class="place-self-center" style="display: grid; gap: 2ch">
      <Image chapterCode="4" imgCode="122"
        ><svelte:fragment slot="desc">지하여장군</svelte:fragment></Image>
      <Image chapterCode="4" imgCode="123"
        ><svelte:fragment slot="desc"
          >천하대장군 옆 기존의 장승들</svelte:fragment
        ></Image>
    </div>
  </div>
</section>

<section class="article-container ">
  <div class="article">
    <div class="article-text">
      <h3 class="article-title">마티마을 동제의 진행 과정</h3>
      <hr />
      <p class="article-desc">
        2022년 마티마을의 동제는 정재영(영남대), 김연정(영남대)이
        조사하였습니다. 음력 1월에 지냈던 산신제는 이장과 마을주민들의
        구술증언을 토대로 정리하였습니다.
      </p>
    </div>
    <div class="article-slide-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect={"fade"}
        autoplay
        loop
        on:slideChange={() => console.log("slide change")}
        class="swiper-chapter-03-1">
        <SwiperSlide>
          <Image chapterCode="4" imgCode="124">
            <svelte:fragment slot="desc">탑제 제물 신설</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="125">
            <svelte:fragment slot="desc">탑제 제물 신설도</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="126">
            <svelte:fragment slot="desc">탑제를 진행하는 모습</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="127">
            <svelte:fragment slot="desc">탑제를 진행하는 모습</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="128">
            <svelte:fragment slot="desc"
              >솟대제를 진행하는 모습</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="129">
            <svelte:fragment slot="desc"
              >장승제를 진행하는 모습</svelte:fragment>
          </Image>
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="article-steps">
      <div class="article-text text-center">
        <h3 class="article-title">① 산신제</h3>
        <hr />
        <p class="article-desc">
          제관은 산신제를 지내기 전날에 제물을 준비하고 새끼줄을 꼬아서 금줄을
          만듭니다. 산신제는 정월 초사흘 해가 지기 시작하는 저녁에 지내는데,
          이때 제관은 준비한 제물을 지게에 짊어지고 산신당으로 올라갑니다.
          제관은 신목 앞에서 3번 절하고 술잔에 술을 부어 올립니다. 이후 한 번 더
          3번 절하고 소지를 올립니다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">② 탑제</h3>
        <hr />
        <p class="article-desc">
          마을 이장이 제상과 제기를 담아 둔 상자를 탑 앞에 놓아두면 제관은
          진설을 준비합니다. 이장이 돌탑에 올라가 길쭉한 머릿돌에 한지를 먼저
          묶기 시작하면 제관과 집사가 각각 솟대와 장승에 한지를 묶습니다. 솟대의
          아랫부분, 천하대장군의 머리 부분, 지하여장군의 머리 부분 순으로 한지를
          묶고 나면 본격적으로 탑제가 시작됩니다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">③ 솟대제</h3>
        <hr />
        <p class="article-desc">
          솟대제는 탑제보다 비교적 간단하게 진행합니다. 제관은 솟대에 술을
          올리고 3번 절합니다. 제관과 집사는 동그랗게 만 볏짚 위에 백설기, 대추,
          밤, 호두를 올려 솟대 앞에 놓아둡니다. 이로써 솟대제가 마무리됩니다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">④ 장승제</h3>
        <hr />
        <p class="article-desc">
          솟대제가 끝나면 참관인들은 천하대장군 앞으로 제상을 옮깁니다. 제관은
          천하대장군 앞에서 술을 올리고 3번 절합니다. 제관과 집사는 동그랗게
          말린 볏짚에 제물 일부를 올려 천하대장군과 지하여장군 앞에 놓아둡니다.
          천하대장군에서 지하여장군까지 제상을 별도로 옮기지는 않고, 지하여장군
          앞에 제물을 일부 떼어놓은 볏짚을 놓아두고 집사가 3번 절합니다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">⑤ 음복</h3>
        <hr />
        <p class="article-desc">
          지하여장군에서 ‘동제’가 마무리되면 마을 주민들이 모여 음복을 위한 상을
          차리기 시작합니다. 제상에 올렸던 백설기, 사과, 배, 호두, 곶감, 유과뿐
          아니라 제상에 올리지 않았던 김치, 귤도 음복을 위해 상에 올립니다. 마을
          주민은 물론 동제를 참관한 외부인들도 함께 음복을 합니다. 코로나19로
          마을회관이 폐쇄되기 전에는 마을회관에서 음복을 했습니다.
        </p>
      </div>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="130">
    <svelte:fragment slot="header">마티 동제의 전승 동력</svelte:fragment>
    <svelte:fragment slot="desc">
      마티마을 주민들은 동제를 무엇보다 신성하게 여기며 전승하고 있습니다. 특히,
      탑에 대한 마음이 지극하다는 것을 느낄 수 있었습니다. 탑 안에는 귀 달린
      구렁이가 살면서 주민들의 말을 듣는다는 전설이 전해집니다. 주민들은 여전히
      탑을 신성하고 또한 두려운 존재로 여겨 탑 근처에 가는 것을 꺼립니다. 마티
      주민들의 동제에 대한 강한 믿음은 동제를 지속하고 전승하는 큰 힘이 되고
      있었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">2022년 동제 결산 회의</svelte:fragment>
  </Subhero>
</div>

<Map />
