<script>
    export let currentChapter;

    function setCurrentChapter(n) {
        currentChapter = n;

        let chapters = document.getElementsByClassName("chapter02-sub");
        let container = document.getElementsByClassName("container-fluid")[0]

        window.scrollTo(0, chapters[n].offsetTop);

        console.log(chapters[n])
    }

    let expanded;
</script>

<div class="chapter-02 sidenav-container">
    <nav class="sidenav" class:expanded>
        <div class="sidenav-link-container">
            <button
                class="sidenav-link"
                class:active="{currentChapter == 0}"
                on:click="{() => setCurrentChapter(0)}">
                장승의 역사
            </button>
            <button
                class="sidenav-link"
                class:active="{currentChapter == 1}"
                on:click="{() => setCurrentChapter(1)}">
                솟대의 역사
            </button>
            <button
                class="sidenav-link"
                class:active="{currentChapter == 2}"
                on:click="{() => setCurrentChapter(2)}">
                장승과 솟대의 만남
            </button>
        </div>
        <button
            class="sidenav-expand"
            on:click="{() => (expanded = !expanded)}">
            <img
                src="./navbar/nav-expand.svg"
                alt=""
                class="sidenav-expand-image"
                class:expanded
                width="15" />
        </button>
    </nav>
</div>
