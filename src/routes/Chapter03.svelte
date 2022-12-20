<script>
  import Navbar from "../lib/Navbar.svelte";
  import Footer from "../lib/Footer.svelte";

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
  import "swiper/css/autoplay";
  import "swiper/css/effect-fade";

  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
  import Chapter03SideNav from "../lib/Chapter03SideNav.svelte";
  import Chapter03TopNav from "../lib/Chapter03TopNav.svelte";

  import AOS from "aos";
  import Chapter03_1 from "./Chapter03_1.svelte";
  import Chapter03_2 from "./Chapter03_2.svelte";
  import Chapter03_3 from "./Chapter03_3.svelte";
  import Chapter03_4 from "./Chapter03_4.svelte";
  import Hero from "../lib/Hero.svelte";
  import Chapter03_5 from "./Chapter03_5.svelte";
  import Chapter03_6 from "./Chapter03_6.svelte";
  import Chapter03_7 from "./Chapter03_7.svelte";
  import Chapter03_8 from "./Chapter03_8.svelte";
  import { onDestroy } from "svelte";

  let swiper;

  let currentChapter = 0;

  onMount(() => {
    window.addEventListener("scroll", checkChapter);

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

  function checkChapter() {
    let chapters = document.querySelectorAll(".chapter03-sub");

    if (chapters[7].getBoundingClientRect().top < 0) currentChapter = 7;
    else if (chapters[6].getBoundingClientRect().top < 0) currentChapter = 6;
    else if (chapters[5].getBoundingClientRect().top < 0) currentChapter = 5;
    else if (chapters[4].getBoundingClientRect().top < 0) currentChapter = 4;
    else if (chapters[3].getBoundingClientRect().top < 0) currentChapter = 3;
    else if (chapters[2].getBoundingClientRect().top < 0) currentChapter = 2;
    else if (chapters[1].getBoundingClientRect().top < 0) currentChapter = 1;
    else if (chapters[0].getBoundingClientRect().top < 0) currentChapter = 0;
  }

  function imgPath(n) {
    return "./chapter03/" + n + ".webp";
  }

  function bgPath(n) {
    return "url('./chapter03/" + n + ".webp')";
  }

  onDestroy(() => {
    window.removeEventListener("scroll", checkChapter);
  });
</script>

<Hero chapterCode="3" bgCode="026">
  <svelte:fragment slot="header">3부</svelte:fragment>
  <svelte:fragment slot="title">장승과 솟대의 존재 양상</svelte:fragment>
  <svelte:fragment slot="desc">
    <p class="section-text">
      장승․솟대는 각각 세워지기도 하지만 대개는 다른 신앙대상물과 복합적으로
      섞이면서 세워지기도 합니다. 장승과 솟대는 한쌍처럼 같이 세워지는 곳이 가장
      많지만 별도로 각각 세워지는 곳도 있고, 돌탑이나 제당 등과 같이 존재하기도
      합니다.장승과 솟대의 존재 형태를 분류해 보면 다음과 같습니다.
    </p>
  </svelte:fragment>
</Hero>

<Chapter03TopNav />

<div class="container-fluid p-0 position-relative">
  <Chapter03SideNav bind:currentChapter />

  <Chapter03_1 />
  <Chapter03_2 />
  <Chapter03_3 />
  <Chapter03_4 />
  <Chapter03_5 />
  <Chapter03_6 />
  <Chapter03_7 />
  <Chapter03_8 />
</div>
