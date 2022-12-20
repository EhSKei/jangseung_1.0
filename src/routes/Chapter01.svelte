<script>
    import Hero from "../lib/Hero.svelte";

    import AOS from "aos";
    import { onMount } from "svelte";

    onMount(() => {
        let aosSections = document.querySelectorAll("section");
        aosSections.forEach((item, i) => {
            item.setAttribute("data-aos", "fade-up");
        });

        AOS.init({
            duration: 1000,
            once: false,
        });
    });

    window.scrollTo(0, 0);
</script>

<Hero chapterCode="4" bgCode="043">
    <svelte:fragment slot="header">1부</svelte:fragment>
    <svelte:fragment slot="title">
        젊은 민속학자들,<br />
        장승과 솟대를 조사하다.
    </svelte:fragment>
</Hero>

<section class="article-container fullscreen bg-dark text-white">
    <div class="article article-text g-0" style="gap:0">
        <h2 class="article-header text-center">
            장승·솟대,
            <br class="d-block d-md-none" />
            어떻게 조사하였나?
        </h2>
        <h3 class="article-title text-center">
            이관호(국립민속박물관 민속연구과장, 당시 학예연구원)
        </h3>
        <br>
        <hr />
        <br>
        <video
            src="https://d3pyyak0c50n14.cloudfront.net/jangseung/chapter01-video.mp4"
            controls
            class="article-video"></video>
    </div>
</section>
