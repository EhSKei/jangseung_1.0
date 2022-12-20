<script>
    import { onMount } from "svelte";
    import gsap from "gsap";
    import { onDestroy } from "svelte";

    let posterHue = 0;

    function checkTime() {
        let vid = document.getElementById("posterVideo");
        let back = document.getElementsByTagName("img")[0];
        let c = document.getElementsByTagName("circle")[0];

        console.log(vid.currentTime)

        if (vid.currentTime < 6) {
            gsap.to(".poster-back", { filter: "hue-rotate(0deg)" });
            gsap.to("circle", {
                cx: -27.5,
                cy: 50,
                duration: 1,
                ease: "power4.out",
            });
        } else if (vid.currentTime < 13) {
            gsap.to(".poster-back", { filter: "hue-rotate(94deg)" });
            gsap.to("circle", {
                cx: 2.5,
                cy: 40,
                duration: 1,
                ease: "power4.out",
            });
        } else if (vid.currentTime < 20) {
            gsap.to(".poster-back", { filter: "hue-rotate(24deg)" });
            gsap.to("circle", {
                cx: 95,
                cy: 75,
                duration: 1,
                ease: "power4.out",
            });
        } else if (vid.currentTime < 27) {
            gsap.to(".poster-back", { filter: "hue-rotate(-75deg)" });
            gsap.to("circle", {
                cx: 97.5,
                cy: 30,
                duration: 1,
                ease: "power4.out",
            });
        } else if (vid.currentTime < 35) {
            gsap.to(".poster-back", { filter: "hue-rotate(-199deg)" });
            gsap.to("circle", {
                cx: 125,
                cy: 55,
                duration: 1,
                ease: "power4.out",
            });
        } else if (vid.currentTime < vid.duration) {
            gsap.to(".poster-back", { filter: "hue-rotate(0deg)" });
            gsap.to("circle", {
                cx: -27.5,
                cy: 50,
                duration: 1,
                ease: "power4.out",
            });
        }
    }

    function resizeCanvas() {
        let c = document.getElementsByClassName("poster-container")[0];
        c.style.width = window.innerWidth + "px";
        c.style.height = window.innerHeight + "px";
        console.log(c.style.width);
    }

    let checkTimer;

    onMount(() => {
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
    });

    onDestroy(() => {
        window.removeEventListener("resize", resizeCanvas);
    });
</script>

<div class="poster-container">
    <video
        src="./poster/poster_front.mp4"
        type="video/mp4"
        id="poster-front"
        loop
        muted
        playsinline></video>
    <video
        src="./poster/poster_back.mp4"
        type="video/mp4"
        id="poster-back"
        loop
        muted
        playsinline></video>
    
</div>
