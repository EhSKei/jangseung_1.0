<script>
    import { link } from "svelte-spa-router";
    import active from "svelte-spa-router/active";

    let activated = false;

    function activate() {
        activated = true;
    }

    function deactivate() {
        activated = false;
    }
</script>


<a href="/" class="nav-home" use:link>
    <img
        src="./navbar/nav-home.svg"
        alt=""
        class="nav-home-image"
        width="25"/>
</a>
<button class="nav-open" on:click="{activate}">
    <img
        src="./navbar/nav-open.svg"
        alt=""
        class="nav-open-image"
        width="25"/>
</button>

<nav class="nav" class:activated>
    <button class="nav-close" on:click="{deactivate}">
        <img
            src="./navbar/nav-close.svg"
            alt=""
            class="nav-close-image"
            width="25" />
    </button>
    <ul class="nav-item-container">
        <li class="nav-item-gap"></li>
        <li class="nav-item home">
            <a
                href="/"
                use:link
                use:active="{{
                    path: '/',
                    className: 'active',
                    inactiveClassName: '',
                
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> HOME </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description"> 홈 </span>
            </a>
        </li>
        <li class="nav-item">
            <a
                href="/prologue"
                use:link
                use:active="{{
                    path: '/prologue',
                    className: 'active',
                    inactiveClassName: '',
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> 들어가는 글 </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description"> 왜 장승·솟대인가? </span>
            </a>
        </li>
        <li class="nav-item">
            <a
                href="/chapter01"
                use:link
                use:active="{{
                    path: '/chapter01',
                    className: 'active',
                    inactiveClassName: '',
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> 1부 </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description">
                    젊은 민속학자들,<br />장승과 솟대를 조사하다
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a
                href="/chapter02"
                use:link
                use:active="{{
                    path: '/chapter02',
                    className: 'active',
                    inactiveClassName: '',
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> 2부 </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description">
                    한국과 장승·솟대의 역사
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a
                href="/chapter03"
                use:link
                use:active="{{
                    path: '/chapter03',
                    className: 'active',
                    inactiveClassName: '',
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> 3부 </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description">
                    장승과 솟대의 존재 양상
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a
                href="/chapter04"
                use:link
                use:active="{{
                    path: '/chapter04',
                    className: 'active',
                    inactiveClassName: '',
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> 4부 </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description">
                    전국의 장승·솟대를 조사하라!
                </span>
            </a>
        </li>
        <li class="nav-item">
            <a
                href="/epilogue"
                use:link
                use:active="{{
                    path: '/epilogue',
                    className: 'active',
                    inactiveClassName: '',
                }}"
                on:click={deactivate}
                class="nav-item-link">
                <span class="nav-item-title"> 끝내는 글 </span>
                <div class="vr nav-item-separator"></div>
                <span class="nav-item-description">
                    10년 동안의 기나긴 여정,<br />전국 장승·솟대 조사 대작전
                </span>
            </a>
        </li>
        <li class="nav-item-gap"></li>
    </ul>
</nav>

