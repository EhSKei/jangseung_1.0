<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { fade } from "svelte/transition";
  import { link } from "svelte-spa-router";

  let mapFocus = false;
  let jx, jy, kx, ky, kz;
  let sel = 0;
  let mapDescActivated = false;
  let mapModalOn = false;

  let mapSvg = [];
  for (let i = 0; i < 4; i++) {
    mapSvg[i] = { id: i + 1, fill: "" };
  }

  mapSvg[0].fill = "#f9e548";
  mapSvg[1].fill = "#f05401";
  mapSvg[2].fill = "#5638bc";
  mapSvg[3].fill = "#03b15a";

  let mapDescriptions = [
    {
      id: 1,
      title: "1988년 서울 올림픽의 해 – 경기도, 강원도 조사",
      title1: "1988년,",
      title2: "서울 올림픽의 해",
      subtitle: "경기도, 강원도 조사",
      bg: "./chapter04/041 (2).webp",
    },
    {
      id: 2,
      title: "1989년, 장승·솟대 조사의 성숙기 – 경상북도, 충청북도 조사",
      title1: "1989년,",
      title2: "장승·솟대 조사의 성숙기",
      subtitle: "경상북도, 충청북도 조사",
      bg: "./chapter04/099.webp",
    },
    {
      id: 3,
      title: "1990년, 장승·솟대 조사의 성장기 – 충청남도 조사",
      title1: "1999년,",
      title2: "장승·솟대 조사의 성장기",
      subtitle: "충청남도 조사",

      bg: "./chapter04/133.webp",
    },
    {
      id: 4,
      title:
        "1991~1995년, 장승·솟대 조사의 비약적 성장기 – 전라북도, 전라남도 조사",
      title1: "1991~1995년,",
      title2: "장승·솟대 조사의 비약적 성장기",
      subtitle: "전라북도, 전라남도 조사",
      bg: "./chapter04/154.webp",
    },
    {
      id: 5,
      title: "1996~1997년, 장승·솟대 조사 피날레 – 경상남도(제주도) 조사",
      title1: "1996~1997년,",
      title2: "장승·솟대 조사 피날레",
      subtitle: "경상남도(제주도) 조사",

      bg: "./chapter04/174.webp",
    },
  ];

  let mapVector = ["#f9e548", "#f05401", "#5638bc", "#03b15a", "#ffffff"];

  function mapZoom(n) {
    mapDescActivated = true;
    mapFocus = true;
    sel = n;
    kz = 1.25;

    console.log(sel);

    if (n == 1) {
      kx = 5;
      ky = 35;
    } else if (n == 2) {
      kx = -5;
      ky = 3;
    } else if (n == 3) {
      kx = 20;
      ky = 10;
    } else if (n == 4) {
      kx = 15;
      ky = -15;
    } else if (n == 5) {
      kx = -5;
      ky = -10;
    }
  }

  let mapSel = false;

  function removeMouseListener() {
    document.querySelectorAll(".mapSvgComponent").forEach(function (item, i) {
      item.removeEventListener("mouseleave", resetStuff);
    });
  }

  function addMouseListener() {
    document.querySelectorAll(".mapSvgComponent").forEach(function (item, i) {
      item.addEventListener("mouseleave", resetStuff);
    });
  }

  function resetStuff() {
    kx = 0;
    ky = 0;
    kz = 1;
    sel = 0;
  }

  function activateMapSel() {
    mapSel = true;
  }
</script>

<section
  id="mapContainer"
  style:background-image="url('./map/water.jpg')"
  style:background-position="{kx}% {ky}%">
  <div id="mapSvgContainer">
    <svg
      viewBox="0 0 603.8 978.3"
      id="mapSvg"
      class:activated={mapFocus}
      style:transform="translate({kx}%, {ky}%) scale({kz})">
      {#each mapVector as item, index}
        <use
          href={"./map/map.svg#" + (index + 1)}
          class="mapSvgComponent"
          style:fill={item}
          on:load={addMouseListener}
          on:mouseover={() => {
            mapZoom(index + 1);
          }}
          on:click={() => {
            sel = index + 1;
            removeMouseListener();
            activateMapSel();
          }} />
      {/each}
    </svg>
  </div>
  {#if sel != 0}
    <div class="map-overlay" style="pointer-events: none" transition:fade>
      <div class="map-overlay-items-container">
        <div
          class="map-overlay-title"
          style="position: relative; transform: none">
          {mapDescriptions[sel - 1].title1}
          <br />
          {mapDescriptions[sel - 1].title2}
          <hr />
          <div class="map-overlay-subtitle">
            {mapDescriptions[sel - 1].subtitle}
          </div>
        </div>
      </div>
    </div>
    {#if mapSel == true}
      <div
        class="map-overlay"
        style:background-image={"url('" + mapDescriptions[sel - 1].bg + "')"}
        transition:fade
        on:click={() => {
          mapSel = false;
          sel = 0;
          resetStuff();
          addMouseListener();
        }}>
        <div class="map-overlay-items-container">
          <div
            class="map-overlay-title"
            style="position: relative; transform: none">
            {mapDescriptions[sel - 1].title1}
            <br />
            {mapDescriptions[sel - 1].title2}
            <hr />
            <div class="map-overlay-subtitle">
              {mapDescriptions[sel - 1].subtitle}
            </div>
          </div>

          <div class="map-overlay-button-container">
            <a
              href={"#/chapter04-" + mapDescriptions[sel - 1].id}
              use:link
              class="map-overlay-link">바로 가기</a>
            <button class="map-overlay-cancel">뒤로</button>
          </div>
        </div>
      </div>
    {/if}
  {/if}

  <div class="mapAssist">
    <span>
      원하시는 지역으로
      <br class="d-md-none" />
      클릭/탭하여 이동해보세요
    </span>
  </div>
</section>
