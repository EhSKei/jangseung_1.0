<script>
  import { onMount } from "svelte";
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation, EffectFade, Autoplay } from "swiper";

  import "swiper/css";
  import "swiper/css/mousewheel";
  import "swiper/css/navigation";
  import Hero from "../lib/Hero.svelte";
  import Image from "../lib/Image.svelte";
  import Subhero from "../lib/Subhero.svelte";

  import AOS from "aos";
  import Map from "../lib/Map.svelte";

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

<Hero chapterCode="4" bgCode="041 (2)">
  <svelte:fragment slot="header">
    <div style="font-size:0.75em">1988년,<br /> 서울 올림픽의 해</div>
  </svelte:fragment>
  <svelte:fragment slot="title">
    <div style="font-size:0.75em">경기도, 강원도 조사</div>
  </svelte:fragment>
</Hero>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="048">
    <svelte:fragment slot="header">1-1. 경기도</svelte:fragment>
    <svelte:fragment slot="desc">
      경기도 장승·솟대조사는 1988년 5월, 서울에서 가까운 광주군 내 4개 마을의
      조사를 시작으로, 10월 11일~16일, 10월 19일~24일 등 2차에 걸쳐서
      실시하였습니다. 조사지역은 광주군, 용인군, 시흥군, 화성군, 평택군, 양평군,
      김포군, 파주군, 여주군, 강화군이었으며, 조사자는 이종철, 정승웅, 정종수,
      김삼기, 천진기였습니다. 조사된 장승과 솟대는 총 19건이었고 시군별로는
      광주군(3), 용인군(2), 화성군(3), 시흥군(3), 양평군(3), 평택군(1),
      김포군(1), 여주군(1), 파주군(1), 강화군(1)이었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">경기지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="049">
        <svelte:fragment slot="desc">진대 할아버지와 주민</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">경기도 장승의 명칭</h2>
      <hr />
      <p class="article-desc">
        장승 솟대의 명칭은 지역마다 다르게 나타나는데 비하여, 경기지방의 장승은
        일반적으로 쓰이는 “장승”이라는 명칭이 주류를 이룹니다. 간혹 “장싱”,
        “장신” 등으로 불리는 곳도 있으나 이는 장승의 방언에서 비롯된 것이라 할
        수 있습니다.
      </p>
      <br />
      <h2 class="article-title">경기도 솟대의 명칭</h2>
      <hr />
      <p class="article-desc">
        솟대는 기능과 새의 형태에 따라 약간 다르게 불려집니다. 광주군 8개 지역과
        김포군 신곡 7리에서는 새의 이름에 따라 “기러기대”, “오릿대”라고 칭하고
        있는 반면, 강화도의 외포리 솟대는 기능을 중시한 “수살목”이란 별도의
        명칭이 있습니다. 파주군 광탄면 용미리 솟대는 “진대”, “짐대”라고 합니다.
        솟대의 새는 기러기, 오리가 주류를 이루며 마리수도 1마리씩이나 외포리만
        5마리를 앉혀 놓은 특이한 형태를 보이고 있습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="052">
    <svelte:fragment slot="header">1-2. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title"
      >경기도 광주군 중부면 엄미2리,
      <br />
      장승과 솟대</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">500년 역사의 엄미리 마을을 지키는 장승</h3>
      무서운 얼굴을 한 인면문 목우를 장생으로 기록한 최초의 문헌은 1482년에 서거정이
      간행한 『태평한화골계전(太平閒話滑稽傳)』에서 나옵니다. 또한『경국대전(經國大典)』,「공전(工典)」에
      보면 "외방도로에는 10리마다 소후를 세우고, 30리마다 대후를 세우고 역을 두게
      하였다. 그 후에 이수와 지명을 새겼다."는 기록으로 보아 노표였다는 것을 알 수
      있었습니다. 지금도 장승에 여기부터 서울까지 몇리, 수원까지 몇리가 새겨져 있기도
      합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >이종철·정승웅이 그린 엄미리 마을 장승 솟대 위치</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="053" />
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      엄고개 초입에서 200여 미터 들어오면 유흥지가 있는 새말과 벅수골을 지키는
      장승백이가 나타납니다. 조사단은 이 장승백이에서 처음으로 장승을 만나게
      됩니다. 서측에는 천하대장군, 동측에는 지하여장군이 서 있었습니다. 새말에서
      다시 200여 미터 올라가면 벅수골과 미라울이 갈라지는 마을이 있는데 미라울의
      입구 숨멕이(수살멕이, 숲멕이)에 또 장승과 새가 있었습니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="054" />
    </div>
    <p class="article-text p-md-0">
      1988년 당시 장승의 외형은 원통의 오리나무의 전면을 다듬어서 사용했는데
      남자장승은 사모관을 씌우고 눈·귀·코를 볼록 튀어 나오게 조각하고 입과 턱을
      직각으로 잘라 입체감을 주고 수염을 달았습니다. 몸체 하부에는
      천하대장군(天下大將軍), 서울 칠십리(七十里), 수원 칠십리(七十里), 이천
      칠십리(七十里)가 묵서되어 있었습니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="place-self-center">
      <Image chapterCode="4" imgCode="055" />
    </div>
    <div style="display: grid; gap: 2ch">
      <div class="order-2 order-md-1">
        <Image chapterCode="4" imgCode="056" />
      </div>
      <p class="article-text order-1 order-md-2">
        여자장승은 민대머리에 눈은 왕눈모양이 도드라지게 조각하고 코가 튀어
        나오도록 볼을 파냈으며 입과 턱은 이마와 수평으로 안으로 들어가게 잘라
        입체감을 주었습니다. 새는 백지를 실로 매달아 부쳤고 돌무더기 제단
        아래에는 촛불, 정한수, 북어 등이 놓여있었습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="057">
    <svelte:fragment slot="header">광주 엄미리 장승제</svelte:fragment>
    <svelte:fragment slot="desc">
      경기도 광주시 중부면 엄미리에서 행해지는 장승제는 산신제와 함께 마을
      제의의 한 과정으로 행해졌는데, 지금은 산신제가 단절되고 장승제만 지내고
      있습니다. 장승제 당일에는 아침 일찍 마을 어른과 청년들이 모여 장승목을
      고르러 산에 올라갑니다. 나무 밑동이 20~30㎝의 오리나무로 장승목을
      정합니다. 나무가 정해지면 그 나무에 막걸리를 부어 놓습니다. 그리고 나무를
      베어 마을로 가져와 장승을 깎습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >광주 엄미리 장승제 장승목 선정</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="058">
        <svelte:fragment slot="desc"
          >광주 엄미리 장승제 장승 운반</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      장승은 남자장승 2기와 여자장승 2기를 만들며, 솟대도 만듭니다. 장승의
      머리는 나무의 밑부분으로 만듭니다. 여자장승은 남자장승을 만든 나무의
      나머지 부분으로 만듭니다. 역시 나무의 아랫부분이 여자장승의 머리가 됩니다.
      장승을 만든 다음에는 안면 부분에 황토를 바릅니다. 그리고 남자장승에
      ‘천하대장군(天下大將軍)’, 여자장승에 ‘지하대장군(地下大將軍)’이라고
      묵서합니다.
    </p>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="059">
        <svelte:fragment slot="desc">
          광주 엄미리 장승제 장승 솟대 세우기
        </svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-text p-md-0">
        장승을 만든 다음 남자장승과 여자장승이 길을 중심으로 서로 마주 보게
        세웁니다. 장승 한 쌍은 미라울 마을, 다른 한 쌍은 새말에 각각 세웁니다.
        솟대는 Y자형 나무를 기러기 모양으로 깎아 긴 장대에 꽂아 세우는데. 서울
        쪽(북쪽)을 향하도록 합니다. 이 마을에서는 솟대를 ‘기러기대’라고
        부릅니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="060">
        <svelte:fragment slot="desc">광주 엄미리 장승제 산신제</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      장승을 세운 다음에는 곧바로 장승제를 지냅니다. 이전에는 밤에 산신제를 먼저
      지내고 나서 장승제를 지냈으나 근래에는 장승을 깎아 세운 뒤 바로 장승제를
      지냅니다. 장승제에 쓸 제물은 화주가 준비합니다. 제물은 경안과 신장의
      장시를 번갈아 이용하였지만, 현재는 슈퍼마켓도 이용합니다. 제사 비용은
      옛날에는 쌀을 걷고 술을 빚어서 오는 사람도 있었지만, 원칙적으로
      대동걸립(乞粒)으로 충당했습니다. 지금은 마을기금을 기본으로 하고 시에서
      받은 보조금으로 충당합니다.
    </p>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="061">
        <svelte:fragment slot="desc">
          광주 엄미리 장승제 제수(祭需) 장만
        </svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-text p-md-0">
        제물은 대체로 백설기, 밤, 대추, 곶감, 두부, 포 (통북어) 정도이며, 과일은
        껍질을 벗기지 않은 채 소쿠리에 담아 올립니다. 제주(祭酒)로는 막걸리를
        사용하며, 산신제에서는 당주가 담은 조라를 씁니다. 돼지머리나 쇠머리같은
        육류가 제물로 오르지 않는 것이 특징입니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="062">
        <svelte:fragment slot="desc">광주 엄미리 장승제</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      제물을 올린 다음에는 당주가 먼저 술을 따르고 재배한 뒤 간단하게 준비된
      축을 읽습니다. 다시 술을 따르고 당주의 재배가 끝나면 소지를 올립니다.
      소지는 이름과 생년을 밝히면서 가구별로 다 올려줍니다. 소지가 끝나면
      통북어를 장승에 매달아 놓는 것으로 장승제를 마칩니다. 이전에는 장승제가
      끝나면 당주와 화주는 저녁을 먹고 개울물로 몸을 씻고 밤 9~10시쯤에 산에
      올라가 산신제를 지냈다고 합니다. 1910년 무렵에는 장승터에서 도당굿을
      하였고, 난장도 들어섰다고 합니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="063">
    <svelte:fragment slot="header"
      >2022년의 엄미리,<br />
      상수리 나무와 장승</svelte:fragment>
    <svelte:fragment slot="desc">
      2022년 4월 29일 국립민속박물관 조사팀은 장승이 있는 엄미리 마을을 다시
      찾았습니다. 43번 국도를 타고 은고개를 지나 엄미리로 가는 삼거리에 도착하면
      220년이 된 상수리나무(보호수)가 먼저 눈에 띕니다. 상수리나무 바로 앞에는
      엄미리 장승이 서 있습니다. 마을로 들어서는 도로 가까이에 서 있어서 쉽게
      찾을 수 있었습니다. 장승의 몸체에는 여전히 서울 칠십리(七十里), 수원
      칠십리(七十里)라고 쓰여져 있었습니다. 이곳으로부터 70리만 더 가면 서울,
      수원에 도착한다는 의미입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">2022년 4월엄미리</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="064">
        <svelte:fragment slot="desc">2022년 11월 엄미리</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-text p-md-0">
        2022년 11월, 조사팀은 다시 한번 엄미리를 찾았습니다. 안타깝게도 태풍의
        영향으로 장승 1기가 쓰러져 있는 모습을 발견하게 되었습니다. 장승과
        솟대는 나무로 만들어져 있어서 쉽게 썩기 때문에 오래가지 못합니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="065">
    <svelte:fragment slot="header"
      >국립민속박물관, <br />코로나 19 퇴치 기원 장승제</svelte:fragment>
    <svelte:fragment slot="desc">
      2021년 11월, 국립민속박물관은 우리 삶에 들어온 역병과 이를 함께 이겨낸
      모습을 돌아보는 의미로 '역병, 일상' 특별전을 개막을 앞두고 국립민속박물관
      야외전시장 장승동산에서 ‘장승세우기’ 행사를 열었습니다. 광주엄미리장승제를
      국립민속박물관 야외전시장에 그대로 옮겨 진행한 행사로 경기도 광주시
      남한산성면 엄미2리 마을 주민들이 신종 코로나바이러스감염증(코로나19) 퇴치
      기원 장승세우기와 장승제를 지냈습니다. 현재 국립민속박물관 정문 부근
      장승동산에서 엄미리 장승과 솟대가 함께 세워져 있는 모습을 확인할 수
      있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">2021년 장승제</svelte:fragment>
  </Subhero>
</div>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="4" imgCode="066">
    <svelte:fragment slot="header">1-3. 강원도</svelte:fragment>
    <svelte:fragment slot="desc">
      강원도 장승·솟대 조사는 1988년 10월 12일부터 29일까지 18일에 걸쳐 영동과
      영서지역으로 나누어 실시하였습니다. 조사지역은 속초시, 강릉시, 명주군,
      삼척군, 홍천군, 원성군, 춘성군이며, 조사자는 정승모, 박호원, 이종철,
      정승웅, 김삼기, 천진기였습니다. 조사는 장승∙솟대 조사내용 항목을 중심으로
      제보자와의 면담, 사진 촬영, 실측이 이루어졌습니다. 강원도에서 조사된
      장승과 솟대는 총 17건이었고 시군별로는 속초시(1), 강릉시(4), 명주군(4),
      삼척군(2), 홍천군(3), 원성군(1), 춘성군(2)입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">강원지방 장승 솟대 분포</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="4" imgCode="068">
      <svelte:fragment slot="desc">성황당</svelte:fragment>
    </Image>
    <div class="article-text text-center">
      <span class="article-title">
        영동지방의 골맥이성황 <hr />
      </span>
      <p class="article-desc">
        강원도 영동지역의 민간신앙으로 골맥이성황이 있습니다. 골맥이성황의
        명칭은 영동지역 내에서도 다양하게 나타나고 있습니다. 예컨대 짐대, 진대,
        짐대배기, 진대배기, 진또배기, 오릿대, 짐대성황, 진대성황 등이며 특정한
        이름이 붙여져 있는 경우도 있습니다. 그러나 명칭의 차이와는 관계없이
        대부분 이를 골맥이성황이라고 부릅니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="069">
        <svelte:fragment slot="desc">
          짐대와 목장승 (지하대장군)
        </svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h2 class="article-title">강원도의 솟대, 짐대</h2>
      <hr />
      <p class="article-desc">
        짐대는 주로 길고 곧은 소나무를 잘라 만든 3~4m되는 장대 위에 새의 모양을
        한 나무조각을 올려놓는데 대체로 오리의 형태를 하고 있지만 간혹 이를
        갈매기라고 하는 곳도 있습니다. 올려놓는 새의 수는 3마리이며 3갈래 난
        나뭇가지를 받침대로 하여 그 끝에 각각 고정시킵니다. 새가 1마리인
        예외적인 경우도 있습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <div class="article grid-2">
      <Image chapterCode="4" imgCode="070-1">
        <svelte:fragment slot="desc">짐대 상부</svelte:fragment>
      </Image>
      <Image chapterCode="4" imgCode="070-2">
        <svelte:fragment slot="desc">짐대 상부</svelte:fragment>
      </Image>
    </div>
    <div class="article-text text-center">
      <span class="article-title"
        >삼재를 막는 3마리 새
        <hr /></span>
      <p class="article-desc">
        3마리의 새가 한 방향을 가리키는 곳에서는 그 방향으로부터 삼재(三災)가
        오기 때문에 이를 막기 위해서라고 하며, 주로 마을 밖의 해안이나 산을
        가리킵니다. 3마리 새의 방향이 각기 다르며 새가 가리키는 곳에는 역시
        산이나 바다가 있어 이곳으로부터 재앙이 온다고 믿습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="071">
        <svelte:fragment slot="desc">목장승과 솟대</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <h3 class="article-title">영서지방의 장승과 솟대</h3>
      <hr />
      <p class="article-desc">
        강원도 영서지방에 남아 있는 장승과 솟대는 홍천군 북방면 화동리를
        제외하고는 모두 산간 오지마을로 교통이 불편한 곳이고, 이웃 마을과도
        왕래가 별로 없는 곳입니다. 이러한 지리적 조건 때문에 전통적인 장승·솟대
        신앙을 유지 시켜온 하나의 원인이 되었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="072">
        <svelte:fragment slot="desc">마을입구의 목장승과 솟대</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <h3 class="article-title">이정표 기능을 하는 장승</h3>
      <hr />
      <p class="article-desc">
        장승은 영서 지방 산간오지 마을에서는 인근 지역까지 얼마나 떨어져
        있는지를 표시하는 이정표 기능을 하였습니다. 장승의 이정표 기능은 산세가
        험하고 교통이 불편한 산간오지 마을에서 주민들의 생활 경험이 만들어낸
        결과물이었습니다.
      </p>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="073">
    <svelte:fragment slot="header">1-4. 대표조사사례</svelte:fragment>
    <svelte:fragment slot="title"
      >강원도 강릉시 강문동 강문마을 진또배기</svelte:fragment>
    <svelte:fragment slot="desc">
      <h3 style="font-size: 1em">강문마을 진또배기를 만나다.</h3>
      1988년 10월 11일 오후 3시, 국립민속박물관 조사팀의 정승모 학예연구사(작고)는
      강릉 남대천의 작은 포구를 끼고 있는 강문마을을 조사 중이었습니다. 강문마을은
      110가구로 구성된 각성받이 마을로 주민 대부분은 어업에 종사하는 어촌 마을이었습니다.
      북쪽으로는 경포대가 있고 10여 년 전에 해수욕장이 만들어져서 점차 관광지화되어
      가는 마을이었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >정승모가 그린 강문마을 솟대위치</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="074">
        <svelte:fragment slot="desc"
          >1988년 당시 강문마을 진또배기</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      정승모 학예연구사는 강문마을의 솟대를 찾았습니다. 주민들에게 솟대의 위치를
      수소문하여 어렵지 않게 솟대를 찾을 수 있었습니다. 이 마을에서는 솟대를
      진또배기라 부르고 있었습니다. 진또배기의 높이는 약 4.5m이며 둘레는 35cm
      정도로 소나무로 만들어졌습니다. 솟대는 세밀하게 조각되어 있어서 머리,
      부리, 몸통, 다리가 뚜렷하게 구분되었습니다. 장대 하나에 3마리의 오리가
      서북쪽의 경포대를 향하고 있는 것이 특징입니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div style="display: grid; gap: 2ch">
      <Image chapterCode="4" imgCode="075">
        <svelte:fragment slot="desc"
          >1988년 당시 강문마을 진또배기</svelte:fragment>
      </Image>
      <div class="article-text p-md-0">
        <h3 class="article-title">강문동 진또배기의 유래</h3>
        <hr />
        <p class="article-desc">
          마을사람들은 진또배기가 성황신을 보필하고 삼재(수재, 화재, 풍재)를
          막아주며, 마을의 안녕과 풍어, 풍년을 가져다 준다고 믿었다고 합니다.
          마을에는 별도의 성황당도 있었는데 남성황당과 여성황당이 각각
          존재합니다. (2022년에도 성황당은 깨끗하게 보존되고 관리되고 있음을
          확인하였습니다.)
        </p>
      </div>
    </div>
    <div class="place-self-center">
      <Image chapterCode="4" imgCode="076">
        <svelte:fragment slot="desc"
          >양평군 강하면 성덕2리 장승제</svelte:fragment>
      </Image>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="077">
    <svelte:fragment slot="header">진또배기 성황제</svelte:fragment>
    <svelte:fragment slot="title" />
    <svelte:fragment slot="desc">
      1988년 당시 성황제는 연 3회(정월, 4월, 8월) 매년 빼놓지 않고 지극 정성으로
      올렸다고 합니다. 정월 보름의 제사는 유교식 제사로 남성황신을 모시는
      제사였고, 음력 4월 보름의 제사는 어민들을 위한 제사였습니다. 8월 보름의
      제사는 여성황신에게 올리는 제사라고 합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >남성황당에 금줄을 치다.(2022년)</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="078">
        <svelte:fragment slot="desc">풍어제(2022년)</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      또한 당시에는 3년마다 4월 보름에는 무당 10여 명을 불러 풍어제를 지내기도
      했다고 합니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="079">
        <svelte:fragment slot="desc"
          >여성황당에 올려진 제물(2022년)</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      성황제의 절차는 여성황신에서 진또배기를 거쳐 남성황신을 모시는 순으로
      진행되었습니다. 여성황당의 벽에는 수부신도 걸려 있는데 여기에도 제물을
      차리고 절을 올립니다. 여성황신에게 올리는 제물은 소머리, 소의 네발, 소의
      콩팥, 소의 생식기 등이었습니다. 여성황신 제사가 끝나면 남성황당 앞에 있는
      진또배기에 제사를 올립니다. 마지막으로 남성황당에 제사를 올리고 제사는
      끝이 납니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="080">
    <svelte:fragment slot="header"
      >2022년 4월, <br />진또배기 풍어제 조사</svelte:fragment>
    <svelte:fragment slot="title" />
    <svelte:fragment slot="desc">
      국립민속박물관 조사팀은 2022년 5월 15일부터 17일까지 강문동 진또배기
      풍어제를 다시 조사하였습니다. 조사는 전북대학교 윤동환 연구교수(민속학)의
      도움으로 이루어졌습니다. 1988년에는 3년에 한번씩 풍어제를 지낸다고
      하였는데 현재는 2년에 한번씩 지내는 것으로 오히려 횟수가 늘어난 것이
      특이했습니다.
      <br /><br />
      풍어제는 강문어촌계를 중심으로 5월 15일부터 17일(음력 4월 15일~17일)까지 진행되었습니다.
      풍어제에는 마을주민과 어촌계 관계자들이 주로 참석합니다. 2022년 풍어제에는
      임춘봉(1954년 3월 8일생) 어촌계장과 4명의 제관 차정석(1963년 11월 16일생),
      이주일(1970년 4월 14일), 신길선(1951년 3월 1일생), 정선권(1960년 5월 1일생)과
      도가 홍병호(1954년 10월 11일생) 등이 참석하였습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">당맞이굿</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="081">
        <svelte:fragment slot="desc">당맞이굿의 대내림</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      5월 15일 자정에 어촌계장과 제관들을 중심으로 남서낭당과 여서낭당에서
      유교식으로 서낭제를 지냈습니다. 여서낭당에서는 서낭제를 마친 뒤, 무당이
      참석하여 제관과 마을사람들의 소지를 올려주고 마쳤습니다.
    </p>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
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
          <Image chapterCode="4" imgCode="082">
            <svelte:fragment slot="desc">세존굿</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="083">
            <svelte:fragment slot="desc">산신굿</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="084">
            <svelte:fragment slot="desc">용왕굿</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="085">
            <svelte:fragment slot="desc">용단지타기</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="086">
            <svelte:fragment slot="desc">풍어기흔들기</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="4" imgCode="087">
            <svelte:fragment slot="desc">거리굿</svelte:fragment>
          </Image>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="article-text">
      <p class="article-desc">
        5월 15일 오전부터 17일 오전까지 풍어굿을 연행하였습니다.
      </p>
      <p class="article-desc">
        5월 15일 ①부정굿, ②골매기굿, ③당맞이굿, ④화회굿, ⑤조상굿, ⑥칠성굿,
        ⑦세존굿(중도둑잡이 포함), ⑧지신굿
      </p>
      <p class="article-desc">
        5월 16일 ⑨산신굿, ⑩성주굿, ⑪심청굿, ⑫놋동이굿, ⑬손님굿, ⑭제면굿,
        ⑮등노래굿, 꽃노래굿, 초롱등노래굿, 뱃노래굿
      </p>
      <p class="article-desc">5월 17일 용왕굿, 거리굿</p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="088">
        <svelte:fragment slot="desc">현재의 강문마을 진또배기</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      2022년 강릉 강문마을의 모습은 1988년과는 많이 달라진 것으로
      판단되었습니다. 현재의 강문마을은 일명 진또배기 마을로 전국 단위 관광지로
      너무나 잘 알려진 마을로 변해있었습니다. 고급음식점과 숙박시설들이 들어선
      강문해변은 관광객들로 북적이고 있었습니다. 강문마을의 솟대인 진또배기는
      지역의 명물이 되어 있었으며 음식점, 관광상품으로 널리 활용되고 있었습니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="4" imgCode="089">
    <svelte:fragment slot="header"
      >『전국 부락제당조사 보고서 <br />
      1967년』의 강문마을 진또배기</svelte:fragment>
    <svelte:fragment slot="desc">
      전국 부락제당조사 보고서는 새마을운동이 아직 본격적으로 시작되기 전인
      1967년도에 전국의 학교 교사들을 대상으로 지역의 마을제당을 설문지 형태로
      조사한 결과물입니다. 이 결과물은 오랫동안 조사지 형태로 보관되어 오다가
      1995년부터『한국의 마을제당』이란 제목으로 순차적으로 책으로 간행되어 한국
      마을신앙 연구의 고전으로 자리잡았습니다. 당시 조사를 진행하신 연구자는
      작고하신 경기대학교 국문학과 장주근 교수입니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">부락제당조사질문지</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="4" imgCode="090">
        <svelte:fragment slot="desc"
          >강문마을 진또배기 성황당 조사지</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1 order-md-2">
      <p class="article-desc">
        1967년 강릉시 동익학교에 근무하는 교사 조남환씨(남, 31세)는 부락제당
        조사 질문지에 다음과 같이 답을 했습니다. “당의 이름은 진또배기
        성황입니다. 당의 위치는 부락 앞 20미터 지점에 있습니다. 신목은
        소나무이고 높이는 10미터 둘레는 30센치미터입니다. 새 3마리가 신목에
        있는데 바다쪽에서 내륙으로 날아가는 형체로 마을의 무궁한 발전의
        상징입니다. 마을제사는 연중 3회를 시행하며 매회 오전에 끝납니다. 제비는
        어촌계에서 부담합니다.”
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="4" imgCode="091">
        <svelte:fragment slot="desc">강문동 진또배기</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0 order-1">
      <h2 class="article-title">
        변화의 물결 속에서도 지속적으로 유지되는 강문동 진또배기
      </h2>
      <hr />
      <p class="article-desc">
        1967년, 1988년, 2022년의 기록이 거의 달라진 것이 없었습니다. 현재는
        오히려 3년에 한번 열리던 풍어제가 2년에 한번으로 횟수가 늘어나기도
        하였고, 남녀 성황당과 진또배기 솟대는 마을에서 잘 보존되고 있었습니다.
        또한 진또배기는 강문동의 상징이자 마스코트로 상품화되어 지역민들의
        경제생활에도 큰 보탬이 되고 있었습니다. 솟대민속의 발전적 계승의 좋은
        사례로 평가됩니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <div class="article grid-2">
      <Image chapterCode="4" imgCode="092">
        <svelte:fragment slot="desc">삼척군 미로면 고천리 진대</svelte:fragment>
      </Image>
      <Image chapterCode="4" imgCode="093">
        <svelte:fragment slot="desc">강릉시 안목마을 진대배기</svelte:fragment>
      </Image>
    </div>
    <p class="article-text text-center">
      <span class="article-title"
        >강문동 인근의 다른 솟대들
        <hr /></span>
      1988년 강릉 강문동 인근에는 또 다른 솟대들이 있었습니다. 삼척군 미로면 고천리에는
      진대라 불리는 솟대가 있었습니다. 기러기가 모두 다른 방향을 가르키고 있는 것이
      특징입니다. 강릉시 안목마을에는 진대배기라 불리는 솟대도 있었습니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div style="display: grid; gap: 2ch">
      <Image chapterCode="4" imgCode="095">
        <svelte:fragment slot="desc">강문동의 철제 진또배기</svelte:fragment>
      </Image>
      <p class="article-text">
        2022년 강릉 강문동에는 철제로 제작된 솟대들이 등장하였습니다. 바다를
        끼고 있는 철로 변에는 쇠로 만들어진 솟대가 있었고 강문동 해변의 가로등도
        진또배기 형상으로 만들어져 있었습니다.
      </p>
    </div>
    <div class="place-self-center">
      <Image chapterCode="4" imgCode="094">
        <svelte:fragment slot="desc">강릉시 철로 변의 철제솟대</svelte:fragment>
      </Image>
    </div>
  </div>
</section>

<Map/>