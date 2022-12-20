<script>
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation, EffectFade, Autoplay } from "swiper";

  import "swiper/css";
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
  <Subhero chapterCode="3" imgCode="027">
    <svelte:fragment slot="header"
      >장승·솟대가 각각 <br />
      단독으로 존재하는 경우</svelte:fragment
    >
    <svelte:fragment slot="title">장승만 있는 경우</svelte:fragment>
    <svelte:fragment slot="desc">
      (경기도 양평군 강하면 성덕2리 장승, 1988년 10월 20일 정종수 조사) 성덕2리
      장승은 입구에 30~40년생 밤나무가 10여 그루 있는 길 양쪽에 위치해
      있었습니다. 왼편에는 남자장승이, 오른편에는 여자장승이 서 있었습니다.
      장승은 키가 거의 3미터에 이르고 얼굴 및 몸통에 붉은 색이 칠해져
      있었습니다. 얼굴은 상하로 긴 형태이고 눈은 눈끝이 위로 치켜 올라간 부릅뜬
      모양입니다. 남자장승에는 천하대장군, 여자장승에는 지하여장군이 적혀
      있었습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc"
      >경기도 양평군 강하면 성덕2리 장승</svelte:fragment
    >
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div style="display: grid; gap: 2ch">
      <Image chapterCode="3" imgCode="027-1">
        <svelte:fragment slot="desc"
          >경기도 양평군 강하면 성덕2리 장승</svelte:fragment
        >
      </Image>
      <p class="article-text p-md-0">
        마을 길을 사이에 두고 남자장승과 여자장승이 세워져 있는 것은 전형적인
        장승의 존재 형태입니다. 성덕2리에서는 마을 입구의 장승 앞에서 3년에
        한번씩 음력 2월초 10일이나 11일에 장승제를 지내고 있었습니다. 마을
        사람들은 제일이 정해진 날부터 개구리, 쥐, 벌레 등 일체의 살생을
        금지한다고 하며, 제사가 돌아오는 해에는 김장에도 새우젓 등 비린내가 나는
        것은 넣지 않는 풍습이 있었다고 합니다.
      </p>
    </div>
    <div class="place-self-center">
      <Image chapterCode="3" imgCode="027-2">
        <svelte:fragment slot="desc"
          >양평군 강하면 성덕2리 장승제</svelte:fragment
        >
      </Image>
    </div>
  </div>
</section>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="3" imgCode="028">
        <svelte:fragment slot="desc">
          전라남도 순천시 낙안면 내운리 내동 벅수(천하대장군)
        </svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      (전라남도 순천시 낙안면 내운리 내동 벅수, 1994년 8월 박호원 조사) 이번에는
      멀리 전라남도 순천으로 가보겠습니다. 벅수는 전라남도 지방에서 장승을
      이르는 명칭입니다. 내동 벅수는 마을의 좌우에 서로 500미터 정도 사이를 두고
      세워져 있었습니다. 마을의 왼편에는 여자장승인 지하여장군이, 오른편에는
      남자장승인 천하대장군이 있었습니다. 남자장승인 천하대장군은 멀히에 사모를
      쓰고 눈을 부릅뜬 형태입니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="3" imgCode="028-1">
        <svelte:fragment slot="desc">
          전라남도 순천시 낙안면 내운리 내동 벅수(지하여장군)
        </svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      반면 여자장승인 지하여장군은 머리에 족두리를 쓴 형태로 얼굴에 지름
      3cm정도의 곤지가 찍혀 있습니다. 여성성을 강조한 장승이었습니다. 내동에서도
      장승을 모시는 제사를 매년 음력 정월 14일 저녁 11시에 지내고 있었습니다.
      마을에서는 장승제를 당산제 또는 도제 모신다고 했다고 합니다. 제관은 3인을
      선정하는데 특이하게도 자녀가 적은 집이 우선이라고 합니다. 그 이유는 자녀가
      많으면 아무래도 이런저런 일들이 많이 일어나기 때문이였다고 합니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article">
    <p class="article-text text-center">
      그 외에도 경상남도 창원시 북면 화천리 시화마을의 선돌형 장승(이관호·오세길
      조사, 1996년 7월 31일)과 경상북도 긍릉군 아포면 송천리 숭산마을의 문인석
      장승(정승모 조사, 1989년 2월 22일)이 있습니다. 이들 장승은 본래 장승으로
      만들어진 것은 아니나 마을 사람들이 후에 장승의 기능을 부여하여 마을의
      수호신으로 삼은 것이 특징입니다.
    </p>
    <div
      style="display:grid; grid-template-columns: repeat(2,1fr); align-items: flex-end"
    >
      <Image chapterCode="3" imgCode="029">
        <svelte:fragment slot="desc">
          경상남도 창원시 북면 화천리 <br /> 시화마을 선돌형 장승
        </svelte:fragment>
      </Image>
      <Image chapterCode="3" imgCode="030">
        <svelte:fragment slot="desc">
          경상북도 금릉군 아포면 송천리 <br /> 숭산마을 문인석 장승
        </svelte:fragment>
      </Image>
    </div>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="3" imgCode="031">
    <svelte:fragment slot="header">솟대만 있는 경우</svelte:fragment>
    <svelte:fragment slot="desc">
      (경기도 파주군 광탄면 용미4리 진대, 정종수 조사, 1988년 10월 11일) 파주군
      용미4리에서는 솟대를 진대 혹은 짐대라 부르고 있었습니다. 마을 입구에는
      할아버지 진대, 뒤쪽에는 할머니 진대가 있었습니다. 장대의 길이는 4m
      정도였고 진대에 달린 새를 마을사람들은 기러기라 불렀습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">
      경기도 파주군 광탄면 용미4리 진대</svelte:fragment
    >
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article">
    <Image chapterCode="3" imgCode="031-1">
      <svelte:fragment slot="desc">용미4리 진대고사</svelte:fragment>
    </Image>
    <p class="article-text text-center">
      매년 음력 10월 초3일에 진대고사라는 마을 제사를 지낸다고 합니다.
      <br />
      진대고사가 끝나야 각 가정에서의 안택고사를 모실 수 있다고 합니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article">
    <div class="article-slide-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        effect={"fade"}
        autoplay
        loop
        on:slideChange={() => console.log("slide change")}
        class="swiper-chapter-03-1"
      >
        <SwiperSlide>
          <Image chapterCode="3" imgCode="031-2">
            <svelte:fragment slot="desc">용미4리 도당굿</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="3" imgCode="031-3">
            <svelte:fragment slot="desc">진대고사 음식준비</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="3" imgCode="031-4">
            <svelte:fragment slot="desc">진대 앞에서 축원</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="3" imgCode="031-5">
            <svelte:fragment slot="desc">도당굿 제물</svelte:fragment>
          </Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image chapterCode="3" imgCode="031-6">
            <svelte:fragment slot="desc">동당굿 축원</svelte:fragment>
          </Image>
        </SwiperSlide>
      </Swiper>
    </div>
    <p class="article-text text-center">
      1988년의 진대고사에는 특별히 도당굿도 했다고 합니다. 당굿은 모두 12거리를
      하는데, ①부정청배, ②부정거리, ③불사맞이, ④장군거리, ⑤별상거리, ⑥신장거리,
      ⑦별상대감, ⑧대감놀이, ⑨조상거리, ⑩성주거리, ⑪창부거리, ⑫뒷풀이 순서로
      진행하였습니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div style="display: grid; gap: 2ch; place-items: center">
      <Image chapterCode="3" imgCode="032">
        <svelte:fragment slot="desc">
          경상북도 안동군 도산면 태자1동 고리재 오릿대
        </svelte:fragment>
      </Image>
    </div>
    <div class="place-self-center " style="display: grid; gap: 2ch">
      <div class="order-2 order-md-1">
        <Image chapterCode="3" imgCode="032-1" />
      </div>
      <p class="article-text order-1 order-md-2">
        (경상북도 안동군 도산면 태자1동 고리재 오릿대, 이종철·천진기 조사,
        1989년 2월 21일) 안동군 태자1동 고리재의 오릿대는 마을의 중앙에 세워져
        있는 것이 특징이었습니다. 오릿대의 놆이는 4~5m 정도였고 길다란 소나무
        장대 위에 나무로 새모양을 깍아서 얹어 놓은 형태입니다. 마을 사람들은
        이것을 오리라 부르고 있었습니다.
      </p>
    </div>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="3" imgCode="032-3">
        <svelte:fragment slot="desc">
          경상북도 안동군 도산면 태자1동 고리재 서낭당
        </svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      마을의 입구에는 서낭당이 있어서 매년 정월대보름에 제사를 지낸다고 하는데
      만약 오릿대가 썩어서 넘어지면 제사 전날에 다시 깍아서 세운다고 한다.
      제사를 지낼 때도 오릿대 앞에서 지내는 것은 특별히 없다고 한다.
    </p>
  </div>
</section>