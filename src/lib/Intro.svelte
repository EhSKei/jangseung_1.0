<script>
    import * as PIXI from "pixi.js";
    import gsap from "gsap";
    import { PixiPlugin } from "gsap/PixiPlugin";
    import { ColorMatrixFilter } from "@pixi/filter-color-matrix";
    import { onDestroy, onMount } from "svelte";

    onMount(() => {
        /** GSAP AND PIXI INTEGRATION */
        gsap.registerPlugin(PixiPlugin);
        PixiPlugin.registerPIXI(PIXI);

        /** INITIALIZE PIXI APPLICATION */
        const canvas = document.getElementById("canvasAnimation");
        const ani = new PIXI.Application({
            width: 1920,
            height: 1080,
            view: canvas,
            backgroundColor: 0x000000,
            backgroundAlpha: 0,
            premultipliedAlpha: false,
        });

        ani.stage.interactive = true;
        ani.renderer.view.style.touchAction = "auto";

        /** INITIALIZE PIXI CONTAINERS AND SPRITES */
        const aniContainer = new PIXI.Container();
        const doorContainer = new PIXI.Container();
        const gateContainer = new PIXI.Container();
        let aniSprite = [];
        let gateSprite = [];

        /** CENTER PIVOT AND POSITION */
        function centerPos(img, x, y) {
            img.pivot.set(x, y);
            img.position.set(x, y);
        }
        function centerPosObj(img, w, h, x, y) {
            img.pivot.set(x + w / 2, y + h);
            img.position.set(x + w / 2, y + h);
        }

        /** CREATE SPRITES - BG */
        for (let i = 0; i < 6; i++) {
            aniSprite[i] = PIXI.Sprite.from("./intro/" + (i + 1) + ".webp");
            centerPos(aniSprite[i], 960, 540);
            aniContainer.addChild(aniSprite[i]);
        }

        /** CREATE SPRITES - GATE */
        for (let i = 0; i < 4; i++) {
            gateSprite[i] = PIXI.Sprite.from("./intro/gate" + (i + 1) + ".png");
            centerPos(gateSprite[i], 960, 540);
            gateContainer.addChild(gateSprite[i]);
        }

        centerPosObj(gateSprite[0], 48, 508, 916, 387);
        centerPosObj(gateSprite[1], 48, 508, 960, 387);
        gsap.set([gateSprite[0], gateSprite[1]], { pixi: { scaleY: 0 } });
        gsap.set([gateSprite[2], gateSprite[3]], { pixi: { scaleX: 0 } });

        centerPos(gateContainer, 960, 540);
        gateContainer.scale.set(0.75);

        /**CREATE MASK OUT OF GATE SPRITES */
        const renderTexture = PIXI.RenderTexture.create({
            width: 1920,
            height: 1080,
        });
        const gateMask = PIXI.Sprite.from(renderTexture);
        centerPos(gateMask, 960, 540);

        ani.ticker.add(() => {
            ani.renderer.render(gateContainer, { renderTexture });
        });

        /**CREATE VIDEO FOR GATE */
        const video = document.createElement("video");
        video.src = "./intro/clouds.mp4";
        video.pause();
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        const gateVid = PIXI.Sprite.from(video);
        const gateVidFilter = new ColorMatrixFilter();
        gateVidFilter.brightness(2, false);
        gateVidFilter.saturate(0.625, true);
        gateVidFilter.hue(150, true);
        gateVid.filters = [gateVidFilter];
        gateVid.mask = gateMask;
        gateVid.scale.set(0.5);
        centerPos(gateVid, 960, 540);

        /** ADD GATE MASK AND VIDEO TO CONTAINER */
        aniContainer.addChildAt(gateMask, 1);
        aniContainer.addChildAt(gateVid, 2);

        /** CREATE GRAPHICS - DOOR */
        const doorLeft = new PIXI.Graphics();
        const doorRight = new PIXI.Graphics();
        doorLeft.beginFill(0x000000, 0.5);
        doorRight.beginFill(0x000000, 0.5);
        doorLeft.drawRect(0, 0, 959, 1080);
        doorRight.drawRect(961, 0, 959, 1080);
        centerPos(doorLeft, 0, 0);
        centerPos(doorRight, 1920, 0);
        doorContainer.addChild(doorLeft, doorRight);

        /**ADD MAIN & DOOR CONTAINER TO STAGE */
        ani.stage.addChild(aniContainer, doorContainer);

        /** ANIMATION TRIGGER EVENT LISTENER */
        canvas.addEventListener("pointerdown", playAnimation, { once: true });

        function playAnimation() {
            /** REMOVE TEXT */
            let introAssist = document.querySelector(".introAssist");
            let introSkip = document.querySelector(".introSkip");

            introAssist.classList.add("remove");
            introSkip.classList.add("remove");

            introAssist.addEventListener(
                "animationend",
                () => {
                    introAssist.remove();
                },
                { once: true }
            );
            introSkip.addEventListener(
                "animationend",
                () => {
                    introSkip.remove();
                },
                { once: true }
            );

            var tl = gsap.timeline();
            /** SEQ 1 - GATE CREATE */
            tl.add("seq1", 0).to(
                [gateSprite[0], gateSprite[1]],
                { pixi: { scaleY: 1 }, duration: 2 },
                "seq1"
            );
            /** SEQ 2 - DOOR OPEN */
            tl.add("seq2")
                .to(gateSprite[2], { pixi: { scaleX: 1 }, duration: 5 }, "seq2")
                .to(gateSprite[3], { pixi: { scaleX: 1 }, duration: 5 }, "seq2")
                .to(
                    gateSprite[0],
                    {
                        pixi: { x: 916 - 190, y: 490 + 508 },
                        duration: 5,
                    },
                    "seq2"
                )
                .to(
                    gateSprite[1],
                    {
                        pixi: { x: 960 + 235, y: 490 + 508 },
                        duration: 5,
                    },
                    "seq2"
                )
                .to(
                    [doorLeft, doorRight],
                    { pixi: { scaleX: 0 }, duration: 5, ease: "power1.in" },
                    "seq2"
                );
            /** SEQ 3 - ZOOM */
            tl.add("seq3");
            let x = aniContainer.children.length;
            let y = aniContainer.children.length;
            for (let i = 0; i < x; i++) {
                tl.to(
                    aniContainer.getChildAt(i),
                    {
                        pixi: { scale: 10 },
                        duration: 2,
                        delay: y / 10,
                        ease: "power4.in",
                    },
                    "seq3"
                );
                tl.to(
                    aniContainer.getChildAt(i),
                    {
                        pixi: { alpha: 0 },
                        duration: 1,
                        delay: y / 10,
                        ease: "power4.in",
                        onComplete: () => {
                            document.getElementById("cloud-video").play();
                        },
                    },
                    "seq3+=1"
                );
                y--;
            }
            /** SEQ 4 - FADE */

            tl.add("seq4")
                .to(
                    "#canvasContainer",
                    {
                        opacity: 0,
                        onStart: () => {
                            document.getElementById("poster-front").play();
                            document.getElementById("poster-back").play();
                            console.log("vid playing");
                        },
                    },
                    ">+3"
                )
                .to("#canvasContainer", {
                    display: 'none',
                    onComplete: () => {
                        document.getElementById("canvasContainer").remove();
                    },
                });
        }

        /** RESIZE CANVAS TO WINDOW DIMENSIONS*/
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
    });

    onDestroy(() => {
        window.removeEventListener("resize", resizeCanvas);
    });

    function skipIntro() {
        let c = document.getElementById("canvasContainer");
        c.classList.add("remove");
        document.getElementById("poster-front").play();
        document.getElementById("poster-back").play();
        c.addEventListener("transitionend", () => {
            c.style.display = "none";
            c.remove();
        });
    }

    function resizeCanvas() {
        let c = document.getElementById("canvasContainer");
        c.style.width = window.innerWidth + "px";
        c.style.height = window.innerHeight + "px";
        console.log(c.style.width);
    }

    export let finishedAnimation = 0;

    let canvasContainer;

    $: if (finishedAnimation === 1) {
        canvasContainer.addEventListener("transitionend", () => {
            canvasContainer.remove();
        });

        console.log("canvas Removed!");
    }
</script>

<div id="canvasContainer" bind:this="{canvasContainer}">
    <canvas id="canvasAnimation" width="1920" height="1080"></canvas>
    <div id="foglayer_01" class="fog">
        <div class="image01"></div>
        <div class="image02"></div>
    </div>
    <div id="foglayer_02" class="fog">
        <div class="image01"></div>
        <div class="image02"></div>
    </div>
    <div id="foglayer_03" class="fog">
        <div class="image01"></div>
        <div class="image02"></div>
    </div>
    <div class="cloud-video-container position-absolute w-100 h-100">
        <video
            id="cloud-video"
            class="cloud-video"
            src="./intro/poster_prev.mp4"
            muted
            playsinline></video>
    </div>
    <div class="introAssist">
        <img src="{'./intro/semicircle.svg'}" alt="" width="100" />
        <span style="margin-block: 7.5px">화면을 클릭/탭하여 이동해보세요</span>
        <img
            src="{'./intro/semicircle.svg'}"
            alt=""
            width="100"
            style="rotate: 180deg" />
    </div>
    <button class="introSkip" on:click="{skipIntro}">건너뛰기</button>
</div>

<style>
    #foglayer_01,
    #foglayer_02,
    #foglayer_03 {
        pointer-events: none;
    }
</style>
