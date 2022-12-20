<script>
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Mousewheel, FreeMode, Scrollbar } from "swiper";

    import "swiper/css";
    import "swiper/css/scrollbar";

    import active from "svelte-spa-router/active";
    import { link } from "svelte-spa-router";
    import { location } from "svelte-spa-router";

    let slideNumber;

    if ($location == "/") slideNumber = 0;
    else if ($location == "/prologue") slideNumber = 1;
    else if ($location == "/chapter01") slideNumber = 2;
    else if ($location == "/chapter02") slideNumber = 3;
    else if ($location == "/chapter03") slideNumber = 4;
    else if ($location == "/chapter04") slideNumber = 5;
    else if ($location == "/epilogue") slideNumber = 6;

</script>

<nav class="footer">
    <Swiper
        initialSlide="{slideNumber}"
        spaceBetween="{50}"
        slidesPerView="{'auto'}"
        centeredSlides="{true}"
        modules="{[Mousewheel, FreeMode, Scrollbar]}"
        mousewheel
        freeMode="{{ sticky: true }}"
        scrollbar="{{ draggable: true }}"
        grabCursor
        class="footer-swiper">
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/" use:link class="footer-item-link">
                    <span class="footer-item-title"> HOME </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc"> 홈 <br /><br /> </span>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/prologue',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/prologue" use:link class="footer-item-link">
                    <span class="footer-item-title"> 들어가는 글 </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc">
                        왜 장승·솟대인가? <br /><br /></span>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/chapter01',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/chapter01" use:link class="footer-item-link">
                    <span class="footer-item-title"> 1부 </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc">
                        젊은 민속학자들,<br />장승과 솟대를 조사하다
                    </span>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/chapter02',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/chapter02" use:link class="footer-item-link">
                    <span class="footer-item-title"> 2부 </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc"
                        >한국과 장승·솟대의 역사<br /><br /></span>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/chapter03',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/chapter03" use:link class="footer-item-link">
                    <span class="footer-item-title"> 3부 </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc"
                        >장승과 솟대의 존재 양상<br /><br /></span>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/chapter04',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/chapter04" use:link class="footer-item-link">
                    <span class="footer-item-title"> 4부 </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc"
                        >전국의 장승·솟대를 조사하라! <br /><br /></span>
                </a>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
                class="footer-item"
                use:active="{{
                    path: '/epilogue',
                    className: 'active',
                    inactiveClassName: '',
                }}">
                <a href="/epilogue" use:link class="footer-item-link">
                    <span class="footer-item-title"> 끝내는 글 </span>
                    <hr class="footer-item-separator" />
                    <span class="footer-item-desc">
                        10년 동안의 기나긴 여정,<br />전국 장승·솟대 조사 대작전
                    </span>
                </a>
            </div>
        </SwiperSlide>
    </Swiper>
</nav>
