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
  <Subhero chapterCode="2" imgCode="003">
    <svelte:fragment slot="header">장승의 역사</svelte:fragment>
    <svelte:fragment slot="desc">
      장승의 시원은 장승과 비슷한 목상(木像)을 세운 고대의 여러 기록에서 찾아볼
      수 있습니다. 『삼국지』,「위서」, 동이전에는 장례 때 죽은 자의 모습대로
      목상(木像)을 세우는 풍속이 소개되고 있습니다. 또한 남녀 한 쌍으로
      목조신상(木彫神像)을 세운 예가 중국 위진남북조시대 사서인『주서(周書)』,
      고려조 및 『북사(北史)』, 고구려조 등에 전해집니다. 이 기록을 통해 볼 때
      목상을 세워 신앙 대상화한 풍습은 고대에까지 소급될 수 있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">삼국지 위서 동이전</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="2" imgCode="004">
        <svelte:fragment slot="desc">몽골 석인상- 임동권</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      기원전 7~9세기 고(古) 투루크(突厥: 돌궐)시대의 석상(石像)도 장승의 모습을
      하고 있어 흥미를 끕니다. 이 석상은 투르크인들의 장례와 관련하여 매우
      중요한 의미를 갖고 있습니다. 투르크인들이 장례를 치르는 제사유적의
      근처에는 사람 모양의 석상을 세웠는데, 이 석상은 장례의례가 진행되는 동안에
      만들어지며 죽은 자의 영혼은 샤만에 의해 석상으로 옮겨집니다. 따라서
      석상들은 죽은 자의 모습을 상징하고 있다고 할 수 있습니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="2" imgCode="005">
    <svelte:fragment slot="header">장생시대</svelte:fragment>
    <svelte:fragment slot="title">
      사역표지(寺域標識)와 
      사방산천비보(四方山川禆補)</svelte:fragment
    >
    <svelte:fragment slot="desc">
      장승의 시원은 장승과 비슷한 목상(木像)을 세운 고대의 여러 기록에서 찾아볼
      수 있습니다. 『삼국지』,「위서」, 동이전에는 장례 때 죽은 자의 모습대로
      목상(木像)을 세우는 풍속이 소개되고 있습니다. 또한 남녀 한 쌍으로
      목조신상(木彫神像)을 세운 예가 중국 위진남북조시대 사서인『주서(周書)』,
      고려조 및 『북사(北史)』, 고구려조 등에 전해집니다. 이 기록을 통해 볼 때
      목상을 세워 신앙 대상화한 풍습은 고대에까지 소급될 수 있습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">전남 영암 소전머리 황장생</svelte:fragment>
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1">
      <Image chapterCode="2" imgCode="006">
        <svelte:fragment slot="desc">죽정마을 황장생</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      흔히 장승의 전 단계라고 하는 장생표(사찰 장생표류)와 조선후기의
      사찰장승과는 장생과 장승이라는 음의 유사성 외에는 건립 위치나 형태에서
      차이가 있습니다. 그래서 이 장생을 그대로 장승의 기원으로 간주하기에 무리가
      있습니다. 현존하는 장생표를 보더라도 이들 장생표에는 결코 인면이나 귀면의
      모습은 찾아볼 수 없으므로 오늘날에 전하는 장승으로 이어져 왔음을 선뜻
      수긍하기 어렵다는 견해가 많습니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2">
      <Image chapterCode="2" imgCode="007">
        <svelte:fragment slot="desc">죽정마을 장생</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      장승의 시원은 장생표보다는 우리 민족의 전통수호신앙으로서 장승의
      주술력[呪力]과 장생의 풍수도참의 비보음조의 능력이 통합되어, 이정표로 세운
      후(堠)가 결합되면서 장승에 무서운 신장의 얼굴을 새겨 역신의 횡횡을 막는
      노신(路神)등으로 분화 발전된 것으로 보고 있습니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="2" imgCode="008">
    <svelte:fragment slot="header">
      생과 후(堠)의
      인면문 장생시대</svelte:fragment
    >
    <svelte:fragment slot="title">노표(路標) 장승</svelte:fragment>
    <svelte:fragment slot="desc">
      무서운 얼굴을 한 인면문 목우를 장생으로 기록한 최초의 문헌은 1482년에
      서거정이 간행한 『태평한화골계전(太平閒話滑稽傳)』에서 나옵니다.
      또한『경국대전(經國大典)』,「공전(工典)」에 보면 "외방도로에는 10리마다
      소후를 세우고, 30리마다 대후를 세우고 역을 두게 하였다. 그 후에 이수와
      지명을 새겼다."는 기록으로 보아 노표였다는 것을 알 수 있었습니다. 지금도
      장승에 여기부터 서울까지 몇리, 수원까지 몇리가 새겨져 있기도 합니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">경국대전 (經國大典)</svelte:fragment>
  </Subhero>
</div>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 order-md-1 place-self-center">
      <Image chapterCode="2" imgCode="009">
        <svelte:fragment slot="desc">경국대전 (經國大典)</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      우리나라의 후가 중국의 후에서 영향을 받았는데 15세기 말에 이르면 재래의
      중국식에서 벗어나기 시작하였습니다. 15세기 말에 오면 우리의 노표인 후에
      세운 나무기둥 상부에 귀면이나 무서운 인면을 조각하였습니다. 이를 장생이라
      하였고 17세기부터는 점차 장성, 장승, 장선 등 현재와 같이 장승과 유사한
      차음으로 사용되고 있습니다. 17~18세기 장승은 성문이나 사찰 입구에 세워져
      수호신의 속성이 더 부각되고, 저변에서는 장승이 수호신으로의 신앙성을
      인정한 기반을 보게 됩니다.
    </p>
  </div>
</section>

<div style="background-color: #dee2e6">
  <Subhero chapterCode="2" imgCode="010">
    <svelte:fragment slot="header">시국·관광 장승시대</svelte:fragment>
    <svelte:fragment slot="desc">
      의술의 발달로 전염병에 의한 피해와 두려움이 사라지고 과학 영농기술로
      풍·흉년이 천재(天災)보다는 기술 도입의 유무 등에 의하여 결정되면서 질병
      막음, 풍년 등의 기원은 구체적인 것으로부터 추상적인 것으로
      탈바꿈하였습니다. 또한, 몸체에 새긴 명문도 '천하대장군'류의 기존의 것이
      아닌 마을 이름 등을 새기면서 마을 수호의 기능보다는 마을을 안내하거나
      전시하는 효과를 보려는 의도가 나타나기도 하였습니다.
    </svelte:fragment>
    <svelte:fragment slot="imgDesc">어서오십시요 광지원리입니다</svelte:fragment
    >
  </Subhero>
</div>

<section class="article-container pb-0">
  <div class="article grid-2">
    <div class="order-2 order-md-1 place-self-center">
      <Image chapterCode="2" imgCode="011">
        <svelte:fragment slot="desc"
          >수원경기 상상캠퍼스 통일장승</svelte:fragment
        >
      </Image>
    </div>
    <p class="article-text p-md-0 order-1 order-md-2">
      소박하게 제사의식을 통하여 마을의 안전과 태평·풍년을 기원하는 신앙물로서의
      장승은 의술과 과학기술이 발달하면서 새로운 모습으로 등장하기
      시작하였습니다. 1980년대 후반 각 대학에서 민주·민족·통일에 대한 관심이
      고조되면서 장승문화는 이것들을 기원하고 성취하려는 목적에서 시국 장승
      세우기로 나타났습니다. 통일을 기원하는 신앙체로서의 장승을 깎아서 세우기
      시작한 것입니다. 뿐만 아니라 민주·자주·여성해방·학교발전을 기원하는 장승도
      함께 세웠습니다.
    </p>
  </div>
</section>

<section class="article-container">
  <div class="article grid-2">
    <div class="order-2 place-self-center">
      <Image chapterCode="2" imgCode="012">
        <svelte:fragment slot="desc">장승과 마을사람들</svelte:fragment>
      </Image>
    </div>
    <p class="article-text p-md-0">
      관광유원지의 입구에 조형물로 등장한 장승은 종교적 의미와 상징성은 소멸되고
      박제화된 관광상품이 되어 버렸습니다. 관광지임을 알리기 위한 목적으로, 혹은
      토속적인 분위기를 내기 위해서 이용되는 조형물이 바로 장승이 된 것입니다.
      이러한 관광장승의 특징은 한결같이 '천하대장군', '지하여장군'이고
      마을장승에 비해 크며 외모도 화려하고 대부분이 전신에 채색되어 있습니다.
    </p>
  </div>
</section>

