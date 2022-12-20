<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";
    import Load from "../lib/Load.svelte";
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

<section class="article-container fullscreen">
    <div class="article article-text g-0" style="gap:0">
        <h2 class="article-header text-center">들어가는 글</h2>
        <h3 class="article-title text-center">왜 장승 솟대인가?</h3>
        <hr />
        <div class="article-text-container">
            <br />
            <p class="article-desc">
                국립민속박물관에서는 권역별 생활문화 전국 조사사업을 2021년부터
                의욕적으로 추진하고 있습니다. 이는 전국의 6개 권역(서울·경기,
                강원, 충청, 전라, 경상, 제주)의 특색있는 민속문화를 심층적으로
                살펴보는 전국 단위의 조사·연구사업입니다.
                <br /><br />
                이번에 우리가 공개하는「장승·솟대조사 대작전 –한국민속의 시원, 장승과
                솟대를 탐구하다.」는 우리관의 선배 연구자들이 1980년대 후반부터 1990년대
                중반까지 전국의 장승과 솟대를 조사한 결과를 대중적으로 재해석한 온라인
                콘텐츠입니다. 한국의 장승과 솟대는 마을 공동체 문화의 상징입니다.
                한국 농촌 마을의 입구에는 지금도 장승과 솟대를 세우고 매년 제사를
                지냅니다. 장승과 솟대는 마을의 경제적 번영과 구성원들의 안녕을 지켜주는
                수호신입니다. 예전보다는 장승과 솟대 문화가 많이 사라지기는 했으나
                현재도 매년 마을 구성원들이 장승을 깎고 제사를 지내는 곳이 있습니다.

                <br /><br />
                아무쪼록「장승·솟대조사 대작전 –한국민속의 시원 장승과 솟대를 탐구하다.」를
                통해서 이제는 고전이 되어 버린 1980·90년대 민속조사의 모습을 살펴
                보시기 바라며, 아울러 당시 조사를 담당했던 우리관 선배 연구자들의
                땀에 젖은 목소리를 기억해 주시기 바랍니다.
            </p>
            <p class="article-desc text-center fw-bold">
                <br />
                2022년 12월 국립민속박물관장 김종대
            </p>
        </div>
    </div>
</section>

<section class="article-container fullscreen bg-dark text-white">
    <div class="article article-text g-0" style="gap:0">
        <h2 class="article-header text-center">
            한국 장승·솟대의 역사와
            <br class="d-block d-md-none" />
            민속학적 의미
        </h2>
        <h3 class="article-title text-center">김종대(국립민속박물관장)</h3>
        <br>
        <hr />
        <br>
        <video
            src="https://d3pyyak0c50n14.cloudfront.net/jangseung/prologue-video.mp4"
            controls
            class="article-video"></video>
    </div>
</section>
