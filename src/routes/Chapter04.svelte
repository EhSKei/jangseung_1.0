<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Footer from "../lib/Footer.svelte";
  import Hero from "../lib/Hero.svelte";
  import Image from "../lib/Image.svelte";
  import Map from "../lib/Map.svelte";
  import Navbar from "../lib/Navbar.svelte";
  import Subhero from "../lib/Subhero.svelte";
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

<Hero chapterCode="4" bgCode="041 (2)">
  <svelte:fragment slot="header">4부</svelte:fragment>
  <svelte:fragment slot="title">전국의 장승·솟대를 조사하라!</svelte:fragment>
  <svelte:fragment slot="desc">
    <p class="section-text" style="font-size: 1.2em">
      전국의 장승과 솟대를 조사하라.
    </p>
    <p class="section-text">
      1988년은 서울올림픽이 열렸던 해로 대한민국은 올림픽의 열기 속에 빠져
      있었습니다. 1988년에는 올림픽을 기념해서 여러 문화 행사도 기획되었는데
      한국의 호랑이 그림 전시, 한국의 장승제 등이었다고 합니다. 이 가운데
      장승제는 송파구 오륜동의 올림픽공원 안에서 열릴 예정이었는데 행사를
      우상숭배 행사로 오인한 일부 개신교 단체의 반대로 열리지는 못했다고 합니다.
      다만 이것을 계기로 우리 민속문화에 대한 관심이 크게 부각되었고,
      국립민속박물관에서도 전국의 장승과 솟대를 조사하여 박물관의 정체성 확립 및
      대표 문화 이이콘으로 만드는 기회로 삼고자 했습니다..
    </p>
  </svelte:fragment>
</Hero>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="4" imgCode="042">
      <svelte:fragment slot="desc">장승솟대조사파일철</svelte:fragment>
    </Image>
    <div class="article-text">
      <span class="article-title">
        불가능해 보이는 작전
        <hr />
      </span>
      <p class="article-desc">
        현재의 국립민속박물관은 직원이 200여 명에 이르는 커다란 조직으로
        성장했습니다만, 1988년에는 학예사 2~명이 전부인 소규모 조직이었고,
        가지고 있는 예산도 별로 없었습니다. 하면된다는 식으로 사업을 시작했지만
        당시 조사를 위해 전국을 뛰어다니던 조사자들의 노고는 이루 말할 수가
        없었다고 합니다. 숙박비가 부족해서 마을회관에서 자는 경우도 많았고,
        농촌지역에서 마땅한 식당을 찾을 수가 없어서 각자 준비한 도시락을
        먹으면서 다니기도 했다고 합니다. 자가용 차량도 별로 없었던 때라
        대중교통을 이용해서 다니기도 했으며, 2~3km 정도의 거리는 걸어다니는 것도
        부지기수였다고 합니다. 이렇게 불가능해 보이는 작전을 성공적으로 끝마칠
        수 있었던 것은 당시 조사자들의 패기와 열정의 힘이었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="">
      <Image chapterCode="4" imgCode="043">
        <svelte:fragment slot="desc">
          1993년 전남 무안에서 조사하던 김종대 <br />
          (현 국립민속박물관장)</svelte:fragment>
      </Image>
    </div>
    <div class="article-text p-md-0">
      <span class="article-title">
        442건의 장승과 솟대를 조사하다.
        <hr /></span>
      <p class="article-desc">
        전국 장승·솟대조사 사업은 1988년 5월부터 시작되어 1997년까지
        진행되었습니다. 조사된 장승과 솟대의 건수는 총 442건이었습니다. 초기에
        진행한 경기도와 강원도는 많은 수를 조사하지 못했으나 1990년대에
        들어오면서 전라북도와 전라남도는 무려 206건이나 조사를 하였습니다.
        인력과 예산의 충원이 이루어져 가능했던 것으로 보입니다.
      </p>
    </div>
  </div>
</section>

<div class="article-container pb-0">
  <div class="article">
    <table class="article-table table table-bordered">
      <tr>
        <th>연도</th>
        <th>지역</th>
        <th>조사건수</th>
      </tr>
      <tr>
        <td>1988년</td>
        <td>경기도, 강원도</td>
        <td>36건: 경기( 19), 강원(17)</td>
      </tr>
      <tr>
        <td>1989년</td>
        <td>충청북도, 경상북도</td>
        <td>73건: 충북( 39), 경북(34)</td>
      </tr><tr>
        <td>1990년</td>
        <td>충청남도</td>
        <td>59건: 충남( 59)</td>
      </tr>
      <tr>
        <td>1991년 ~ 1994년</td>
        <td>전라북도, 전라남도</td>
        <td>206건: 전북(119), 전남(87)</td>
      </tr><tr>
        <td>1996년 ~ 1997년</td>
        <td>경상남도, 제주도</td>
        <td>68건: 경남( 35), 제주(33)</td>
      </tr>
      <tr>
        <td />
        <th>합계</th>
        <td>442건</td>
      </tr>
    </table>
  </div>
</div>

<section class="article-container pb-0">
  <div class="article">
    <div class="article grid-2">
      <Image chapterCode="4" imgCode="044">
        <svelte:fragment slot="desc"
          >조사자들이 휴대하고 다니던 자료들</svelte:fragment>
      </Image>
      <Image chapterCode="4" imgCode="045">
        <svelte:fragment slot="desc">조사자 수첩</svelte:fragment>
      </Image>
    </div>
    <div class="article-text">
      <span class="article-title"
        >아날로그 시대의 조사도구들
        <hr /></span>
      <p class="article-desc">
        조사가 시작된 1988년에는 컴퓨터가 흔한 물건이 아니었습니다. 당시만 해도 8비트
        애플 컴퓨터나 일본에서 개발된 MSX 컴퓨터가 주종을 이루던 시기였고, 현재 사용하는
        IBM-PC는 아주 고가의 장비였습니다. 당시 조사자들은 수첩을 들고 다니면서 꼼꼼히
        장승과 솟대를 기록하였고, 제보자들의 구술은 녹음기를 이용해서 녹음했습니다.
        수첩에 적은 기록은 사무실에 돌아와서 타자기로 타이핑해서 문서로 정리하였습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="4" imgCode="046">
      <svelte:fragment slot="desc">종이지도</svelte:fragment>
    </Image>
    <div class="article-text">
      <span class="article-title"
        >조사자들의 필수품, 종이지도
        <hr /></span>
      <p class="article-desc">
        지금이야 네비게이션이나 GPS 등이 너무 잘 되어 있어서 종이 지도를 사용하는 사람이
        별로 없지만 당시 조사자들의 필수품은 종이지도였습니다. 각 도별 세부지도를 기지고
        다니면서 장승과 솟대를 찾아 다녔는데, 지도를 잘못 봐서 길을 잘못 찾으면 걸어서
        산을 넘어가야 하는 일도 있었다고 합니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="4" imgCode="047">
      <svelte:fragment slot="desc">사전조사질문지</svelte:fragment>
    </Image>
    <div class="article-text">
      <span class="article-title"
        >전국부락제당조사의 경험을 살리다.
        <hr /></span>
      <p class="article-desc">
        1968년 전국부락제당조사는 전국의 학교 선생님들에게 소재 마을의 제당에 대한
        정보를 묻는 질문지를 발송하여서 수집된 정보를 체계적으로 정리했던 사업입니다.
        전국 장승·솟대조사 사업도 전국부락제당조사사업으로 얻어진 장승과 솟대에 대한
        대략적인 위치를 알 수 있어서 진행할 수 있었다고 합니다. 이 사업의 경험으로
        장승·솟대조사를 시작하기 전에 체계적인 질문지를 만들어서 지역에 배포했었다고
        하는데, 질문지 회수율이 적어서 소기의 목적을 달성하지는 못했다고 합니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article">
    <div class="article-text">
      <span class="article-title">
        조사에 참여했던 사람들, 가나다순, 2022년 12월 현재 직위 표기
      </span>
      <hr />
      <p class="article-desc">
        장승·솟대 조사에 참여했던 젊은 조사자들은 총 21명이었습니다. 모두
        박물관계 및 학계에서 두터운 신망을 받고 있는 분들입니다. 조사에 참여할
        당시에는 임시직 연구원 신분으로 참여하신 분들도 있었으나, 박물관장,
        과장, 학예연구관을 지내신 분들이 다수입니다. 조사에 열정적으로 참여하여
        땀흘려 주신 모든 분들께 감사를 드립니다.
        <br />
        <br /> 강성복(민속학자)
        <br /> 강현구(향토문화개발협의회 전문위원)
        <br /> 기 량(전 국립민속박물관 전시운영과장)
        <br /> 김권구(계명대 교수)
        <br /> 김삼기(전 문화재청 과장)
        <br /> 김종대(국립민속박물관장)
        <br /> 김희태(전 전남도 문화재위원)
        <br /> 박호원(작고, 전 국립민속박물관 어린이박물관과장)
        <br /> 선영란(전 향토문화개발협의회 간사)
        <br /> 송봉화(사진작가)
        <br /> 오세길(전 국립민속박물관 연구원)
        <br /> 이관호(국립민속박물관 민속연구과장)
        <br /> 이문현(전 국립민속박물관 학예연구관)
        <br /> 이종철(전 전통문화학교총장, 전 국립민속박물관장)
        <br /> 이필영(전 한남대 교수)
        <br /> 정명섭(전 국립민속박물관 유물과학과장)
        <br /> 정승모(작고, 전 국립민속박물관 학예연구사)
        <br /> 정승웅(전 국립민속박물관 학예연구사)
        <br /> 정종수(전 국립고궁박물관장, 전 국립춘천박물관장)
        <br /> 천진기(전 국립민속박물관장, 전 국립전주박물관장)
        <br /> 황보명(대한민국역사박물관 자료관리과장)
      </p>
    </div>
  </div>
</section>

<Map />
