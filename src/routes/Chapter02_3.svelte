<script>
  import Image from "../lib/Image.svelte";
  import Subhero from "../lib/Subhero.svelte";

  function imgPath(n) {
    return "./chapter02/" + n + ".webp";
  }

  function bgPath(n) {
    return "url('./chapter02/" + n + ".webp')";
  }
</script>

<div class="chapter02-sub" style="background-color: #212529; color: white">
  <Subhero chapterCode="2" imgCode="023">
    <svelte:fragment slot="header">장승과 솟대의 만남</svelte:fragment>
    <svelte:fragment slot="desc">
      형태상 장간(長竿)에 새가 올려져 있는 실물로 연대가 가장 올라가는 것은
      1749년에 건립된 부안군 계화면 대벌리의 석조간(石鳥竿)이 있습니다. 솟대의
      지역분포를 살펴보면 중부지방에서 남부지방으로 내려갈수록 더 집중적으로
      나타나고 있습니다. 솟대의 종류는 마을의 액막이와 풍농을 위하여 세우는
      일반솟대, 행주형 지세를 돛대로서 세우는 솟대, 급제를 기념하는 솟대로 나눌
      수 있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">석남 송석하 사진자료 - 솟대</svelte:fragment
    >
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1 place-self-center">
      <Image chapterCode="2" imgCode="024">
        <svelte:fragment slot="desc">솟대</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      솟대가 마을입구에 건립되어 수호신으로 신앙된 시기는 빨라야 조선 후기를
      앞서지는 못할 것으로 보입니다. 수호신으로서 신앙되기 전에 먼저 풍수상
      목적으로 석간의 건립이 성행되었고, 경제적으로 다소 열세인 일반 서민들은
      솟대로써 이에 충당한 것이 아닌가 추측됩니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 place-self-center">
      <Image chapterCode="2" imgCode="025">
        <svelte:fragment slot="desc"
          >목장승 <br /> 석장승 <br /> 솟대-석남</svelte:fragment
        >
      </Image>
    </div>
    <p class="article-text p-md-0">
      오늘날 솟대 자체는 독립적인 신앙대상물로서의 성격은 매우 희미해졌고,
      대개는 장승 또는 기타의 신앙대상물과 함께 모셔집니다. 그 가운데 장승과
      솟대가 하나의 짝이 되는 경우가 가장 많습니다. 장승과 솟대가 하는 일을
      나누어서 생각하고 모시는 마을은 거의 찾아보기 어렵습니다. 솟대의 원래
      의미도 많이 상실되면서 장승과 결부되어 보호신 같은 역할을 하게 되었던 것
      같습니다.
    </p>
  </div>
</section>
