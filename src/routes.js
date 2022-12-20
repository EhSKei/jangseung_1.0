import Chapter01 from "./routes/Chapter01.svelte";
import Chapter02 from "./routes/Chapter02.svelte";
import Index from "./routes/Index.svelte";
import Prologue from "./routes/Prologue.svelte";
import Chapter02_1 from "./routes/Chapter02_1.svelte";
import Chapter02_2 from "./routes/Chapter02_2.svelte";
import Chapter02_3 from "./routes/Chapter02_3.svelte";
import Chapter03 from "./routes/Chapter03.svelte";
import Chapter04 from "./routes/Chapter04.svelte";
import Epilogue from "./routes/Epilogue.svelte";
import Chapter04_1 from "./routes/Chapter04_1.svelte";
import Chapter04_2 from "./routes/Chapter04_2.svelte";
import Chapter04_3 from "./routes/Chapter04_3.svelte";
import Chapter04_4 from "./routes/Chapter04_4.svelte";
import Chapter04_5 from "./routes/Chapter04_5.svelte";

export default {
    '/': Index,
    '/prologue': Prologue,
    '/chapter01': Chapter01,
    '/chapter02': Chapter02,
    '/chapter02-1': Chapter02_1,
    '/chapter02-2': Chapter02_2,
    '/chapter02-3': Chapter02_3,
    '/chapter03': Chapter03,
    '/chapter04': Chapter04,
    '/chapter04-1': Chapter04_1,
    '/chapter04-2': Chapter04_2,
    '/chapter04-3': Chapter04_3,
    '/chapter04-4': Chapter04_4,
    '/chapter04-5': Chapter04_5,
    '/epilogue': Epilogue,
}