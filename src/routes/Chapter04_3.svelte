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
  import Subhero from "../lib/Subhero.svelte";
  import Hero from "../lib/Hero.svelte";
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

<Hero chapterCode="4" bgCode="133">
  <svelte:fragment slot="header">
    <div style="font-size:0.75em">
      1990년, <br /> 장승·솟대 조사의 성장기
    </div>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <div style="font-size:0.75em">충청남도 조사</div>
  </svelte:fragment>
</Hero>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="131">
    <svelte:fragment slot="header">3-1. 충청남도</svelte:fragment>
    <svelte:fragment slot="desc">
      충청남도 장승·솟대 조사는 1990년 2월과 12월 2차에 걸쳐 나누어
      실시하였습니다. 2월 조사기간에는 정월 설 명절과 보름이 들어있어 이를
      전후해 마을에서 실시한 제의 현장에 대한 참여 관찰도 이루어졌습니다.
      조사지역은 대전직할시, 천안시, 천안군, 아산군, 온양시, 홍성군, 예산군,
      서산군, 당진군, 공주군, 청양군, 연기군 등이었습니다. 당시 조사에 참여했던
      분들은 이필영(한남대 교수), 이종철(국립민속박물관장),
      천진기(국립중앙박물관), 정종수(국립민속박물관 학예연구사), 김중진(경원대
      대학원), 송봉화(민속사진 작가), 강성복(장승연구가) 등이었습니다. 조사된
      장승과 솟대는 총 59건이었고 시군별로는 천안군(6), 천안시(3), 아산군(6),
      온양시(2), 홍성군(8), 예산군(1), 서산군(7), 당진군(4), 공주군(10),
      청양군(8), 연기군(4)였습니다. 이필영, 강성복, 김중진 등 충청남도 지역의
      민속학자들이 공동 조사를 하였고, 타 지역에 비해서 비교적 많은 장승과
      솟대를 조사하였습니다. 이 시기에 이르러 장승·솟대조사는 성장기에 접어들게
      됩니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">충남지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1 align-self-center">
      <Image chapterCode="4" imgCode="133">
        <svelte:fragment slot="desc">진대 할아버지와 주민</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">장승목 껍질 벗기기</h2>
      <hr />
      <p class="article-desc">
        충청남도는 먼저 조사된 다른 지역들에 비해서 장승과 솟대의 숫자가
        많았습니다. 또한 중북부 지역인 경기도와 강원도에서는 나타나지 않고,
        남부지역인 경상도와 전라도에서 보이는 돌장승과 원추형 돌탑이 금강 유역을
        끼고 많이 나타나는 것이 특징이었습니다. 장승은 지역적으로 보령, 서천,
        예산, 당진 등 서해안 지방이 적었고, 논산·대전·공주·청양·연기·천안 등
        내륙에 많이 분포되어 있었습니다.
      </p>
      <h2 class="article-title">충청남도 장승의 명칭</h2>
      <hr />
      <p class="article-desc">
        충청남도에서 장승은 “장성”, “장신”, “수살”, “미륵”, “벅수” 등으로 불리고
        있습니다. 나무장승은 대부분 해마다 산신제나 장승제 때 새로 깎아
        세웁니다. 긴 통나무를 잘라 귀면·미륵·장군·문무관 모양의 얼굴을 새기고
        몸통에 “천하대장군”, “지하여장군”, “동방축귀대장군”, “오방축귀대장군”
        등의 명문을 붓으로 적는게 특징입니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="134">
    <svelte:fragment slot="header">3-2. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">
      충청남도 청양군 용두리 나무장승과 오릿대</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">용두리 마을의 나무장승과 오릿대</h3>
      1990년 2월과 12월, 국립민속박물관 정종수 학예연구사와 김중진(경원대 대학원),
      송봉화(민속사진 작가)는 용두리 장승을 조사하기위해 청양군 정산면 용두리 마을을
      찾았습니다. 정산면 방향으로 노루목 고개를 지나 2km정도 내려가면 마을 입구 당산나무
      밑에 장승과 솟대가 서 있었습니다. 이곳에서 농로를 따라 300여 미터 들어가면
      마을에 다다릅니다. 이곳까지 청양에서 시내버스로 40여 분이 소요되는데 버스가
      수시로 운행되기 때문에 가는 길은 어렵지 않았다고 합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">1990년 용두리 마을 전경</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0 ">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="135">
        <svelte:fragment slot="desc"
          >1990년 용두리마을 장승과 솟대</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-desc">
        장승은 2단으로 쌓은 장방형의 콘크리트단에 약 1.2m 정도의 간격을 두고
        2기씩 세워져 있었는데 그 옆에는 각각 오릿대 1쌍과 솔대(소나무 가지)
        1쌍이 함께 꽂혀 있었습니다. 그와 더불어 서너 겹의 금줄이 쳐있고 금줄
        사이 사이에 붉은 고추와 백지가 끼워져 있었습니다. 좌·우측의 2기 중 한
        기는 새로 만들어 세워져서 색이 변색되지 않은 새 장승이었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="136">
        <svelte:fragment slot="desc">청양 용두리 장승제</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">1990년, 용두리 마을의 노신제</h2>
      <hr />
      <p class="article-desc">
        1990년대 용두리 마을에서는 마을 입구 노루목에 매년 장승과 오릿대를 깎아
        세우고 마을 공동제사를 지냈습니다. 마을에서는 이 제사를 노신제라 부르고
        있었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <div class="article-text">
      <h3 class="article-title">노신제 준비</h3>
      <hr />
    </div>
    <Image chapterCode="4" imgCode="137">
      <svelte:fragment slot="desc">청양 용두리 장승제 제물</svelte:fragment>
    </Image>
    <div class="article-steps grid-3">
      <div class="article-text text-center">
        <h3 class="article-title">① 제일</h3>
        <hr />
        <p class="article-desc">
          노신제는 매년 음력 정월 열나흗날 저녁 무렵에 지낸다. 그러나 만약 제일
          이전에 마을 내에서 초상이 발생하거나 특별한 불상사가 발생하면 제일은
          연기된다. 제일이 연기될 경우엔 다음 달 길일(吉日)을 택하여 지낸다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">② 제관선정</h3>
        <hr />
        <p class="article-desc">
          제관은 정월 초이레에 마을 이장과 노인들이 주관하여 생기복덕을 가려
          선정한다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">③ 제비</h3>
        <hr />
        <p class="article-desc">
          제비는 정초에 풍물을 쳐, 걸립한 기금과 가가호호에서 정성껏 낸 돈이나
          쌀로 충당한다.
        </p>
      </div>
      <div class="article-text text-center">
        <h3 class="article-title">④ 제물</h3>
        <hr />
        <p class="article-desc">
          제일 하루 전날인 정월 열사흗날 마을 임원들이 제사에 필요한 일체의
          제물을 청양읍 내에서 구입하여 화주집에 갖다 준다.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="">
      <Image chapterCode="4" imgCode="138">
        <svelte:fragment slot="desc">청양 용두리 장승 세우기</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">노신제 과정</h2>
      <hr />
      <h3 class="article-desc" style="font-size: 1.2rem; font-weight: 700">
        ① 장승·솟대 세우기
      </h3>
      <p class="article-desc">
        ① 장승·솟대 세우기 장승목은 당일 방위를 보아 흉방을 피해 벌목한다. 먼저
        남장승을 베고 이어 여장승을 벤다. 그리고 오릿대와 솔대를 베어 지게에
        지고 마을 회관 앞에 놓는다. 간단히 약주로 목을 축이고 주민들 중 솜씨있는
        목공이 남자장승부터 깍는다.
      </p>
      <h3 class="article-desc" style="font-size: 1.2rem; font-weight: 700">
        ② 장승제
      </h3>
      <p class="article-desc">
        장승 세우러 가는 행렬은 맨 앞에 남자장승이 서고 이어
        여자장승-소농기-상쇠-부쇠-장고-북-금줄-마을사람 순이다. 장승거리에
        도착하면 지게를 받쳐놓고 먼저 남자장승부터 뽑아낸 다음 새로 만든 장승을
        세운다. 그리고 오릿대와 솔대를 옆에 함께 세운다. 이어 같은 방법으로
        여자장승을 세운다. 그리고 황토흙을 여러 군데 떠다 놓는다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="139">
        <svelte:fragment slot="desc"
          >2022년 국립 민속박물관 용두리 장승</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h2 class="article-title">국립민속박물관 전시실의 용두리 장승</h2>
      <hr />
      <p class="article-desc">
        충남 청양군 정산면 용두리 노루목마을은 국립민속박물관과 자매결연마을로서
        1998년, 2015년 국립민속박물관 야외전시장에서 장승제를 진행한 바 있으며
        이 장승은 국립민속박물관에 기증되어 전시에 활용되도록 하고 있습니다.
        현재「한국인의 일년」상설전시관에서 만나볼 수 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container ">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="140">
        <svelte:fragment slot="desc">2022년 용두리 장승과 솟대</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">2022년, 용두리 마을의 장승</h2>
      <hr />
      <p class="article-desc">
        2022년 9월 28일, 국립민속박물관 조사팀은 용두리 마을을 다시 찾았습니다.
        장승을 함부로 만지면 큰일이 난다는 전설이 내려오는 용두리 마을의 장승과
        솟대는 노신(路神)의 분노 때문인지 여전히 마을 입구 당산나무 밑에 잘
        보존되어 있었습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="141">
    <svelte:fragment slot="header">3-3. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title">대전광역시 법동 석장승</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">대전지역의 가장 오래된 장승, 법동 석장승</h3>
      대전광역시는 강성복(민속학자) 조사원이 조사기간에 관계없이 수시로 조사한 지역입니다.
      그 가운데에서도 대전 법동 범천골의 석장승을 살펴 보겠습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">1990년 범천골 천하대장군</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="142">
        <svelte:fragment slot="desc">1990년 범천골 천하대장군</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-desc">
        범천골은 멀리 계족산을 뒤로 하고 있는 작은 농촌마을이었으나 인근의
        읍내동에 대덕공단이 들어서면서 이주민이 늘어나기 시작, 1987년에는 300여
        세대에 인구수 1천여 명을 넘어서는 큰 마을로 성장했습니다. 이러한 변화와
        도시개발로 예전의 마을 모습은 완전히 자취를 감추었고 1990년 늦은 가을
        조사자가 마지막으로 이 마을을 답사했을 때에는 주민 대부분은 보상을 받고
        떠난 터라 마을은 폐허가 되어 있었고 미처 이주를 하지 못한 몇몇의
        농가만이 가을걷이를 하고 있었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="143 (2)">
        <svelte:fragment slot="desc">
          1990년 범천골 천하대장군옆 선돌
        </svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <p class="article-desc">
        범천골 마을 어귀에는 남장승과 여장승이 마주보고 서 있었습니다. 남장승은
        마을 입구 북쪽에 검은색 선돌과 함께 서 있고 그 앞을 가로지르는 도랑 옆에
        여장승이 역시 선돌 1기와 함께 남장승을 바라보고 있었습니다. 그리고
        1983년에는 남장승 곁에 ‘지방문화재 제42호 돌장생’이라는 돌푯말과 함께
        안내문이 쓰여 있었으나, 1990년에는 ‘민속자료 제1호 돌장생’이라 새긴
        새로운 푯말과 안내문이 서 있었습니다. 1998년 3월 18일 법동 석장승은
        대전광역시 민속문화재 제1호로 지정되었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="144">
        <svelte:fragment slot="desc">2022년 범천골 천하대장군</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h3 class="article-title">범천골 장승의 형상</h3>
      <hr />
      <p class="article-desc">
        남자장승은 사각형의 화강암을 이용하여 윗부분에 사람의 얼굴을 새기고
        동체에는 천하대장군이라 음각하였습니다. 얼굴은 평범한 할아버지의 모습
        또는 농부의 얼굴을 조각하였고 부리부리한 퉁방울 눈과 꼭다문 입을 새겨
        넣어 무섭다기보다는 친근하게 느껴집니다. 그리고 남자장승 곁에는
        마을사람들이 ‘아기장승’ 이라고 부르는 길쭉한 선돌이 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="145">
        <svelte:fragment slot="desc">2022년 범천골 지하대장군</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <p class="article-desc">
        여자장승 역시 길쭉한 화강암의 돌기둥을 사용하여 위에는 사람의 얼굴을
        새기고 몸체에는 지하대장군의 명문을 새겨 넣었습니다. 얼굴은 아주 순해
        보이는 인상이 마음씨 좋은 할머니의 모습을 닮고 있으며 눈, 코, 입, 귀의
        형태는 남장승에 비해 한층 사실적이고 정교하게 표현하였습니다. 그리고
        여자장승 옆에 있는 선돌은 타원형의 형상이어서 남자장승 옆에 있는
        선돌과는 대조적인 모습인데 그 외형으로 보아 여성을 상징하는 것으로
        풀이됩니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="146">
        <svelte:fragment slot="desc"
          >2022년 범천골 천하대장군과 선돌</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h3 class="article-title">범천골에서 장승을 세운 이유</h3>
      <hr />
      <p class="article-desc">
        범천골에서 장승을 세우게 된 이유는 수백 년 전 마을 어귀의 숲이 우거져
        질병과 재앙이 자주 발생하여 이를 막기 위해 장승을 세웠다고 합니다. 다만
        당시에 세운 장승은 석장승이 아니라 나무장승이었으며, 현재의 석장승은 약
        300년 전 이 마을의 갑부였던 송민노라는 사람이 자신의 사재를 털어
        돌장승을 깎아 세웠다고 합니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="147">
        <svelte:fragment slot="desc"
          >2022년 범천골 지하대장군과 선돌</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h3 class="article-title">무사무병을 기원하는 장승제</h3>
      <hr />
      <p class="article-desc">
        1990년, 조사 당시 법동 마을에서는 음력 정월 14일 밤 12시경에 산제당에
        제사를 지내고 장승에 거리제를 지냈습니다. 마을의 액운을 막고 동민의
        안녕과 건강을 기원하기 위함이었습니다. 제관은 나이가 지긋하고 깨끗한
        분으로 뽑았습니다. 제물은 백설기·과일·북어·약주 등을 차린 후, 절을
        3번하고 대동소지와 호별소지를 올리며 풍장을 치고 음복을 하였습니다.
        마을사람들은 정월 초사흘부터 풍장을 쳐 걸립하여 쌀이나 돈 등 제비를
        걷었으며, 장승 주위를 깨끗이 청소하고 황토를 뿌린 후 장승의 몸에
        왼새끼로 꼰 금줄을 쳤습니다. 그리고 액막이와 자손창성(子孫昌盛)을 함께
        빌었습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="148">
    <svelte:fragment slot="header">2022년, 범천골 장승</svelte:fragment>

    <svelte:fragment slot="desc">
      1990년을 끝으로 범천골은 도시화가 이루어져 대단위 아파트들이 들어서는 등
      본래의 모습을 찾아 볼 수 없게 되었습니다. 하지만 범천골의 석장승은 아직도
      길가에 서서 주민들의 건강과 안녕을 지켜주는 수호신 역할을 하고 있었고
      범천골 거리제도 꾸준히 이어져 내려오고 있었습니다. 도시화의 바람 속에서도
      범천골 장승은 잘 보존되고 있었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">2022년 법동 사거리</svelte:fragment>
  </Subhero>
</div>

<Map />
