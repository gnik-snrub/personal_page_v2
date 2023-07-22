<script>
let projects, about, contact
const handleClick = (element) => element.scrollIntoView({
    behavior: 'smooth'
})
</script>

<div class="flex flex-col items-center justify-center w-full bg-raisin-500 h-max text-verdigris-500">
  <section class="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-raisin-500 to-75% to-plum-500">
    <div class="flex flex-row w-1/2 overflow-hidden border-x-2">
      <span class="pr-1.5 text-center text-verdigris-500 basis-auto grow-0 shrink-0 animate-scroll">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center text-verdigris-500 basis-auto grow-0 shrink-0 animate-scroll">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center text-verdigris-500 basis-auto grow-0 shrink-0 animate-scroll">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
    </div>
    <h1 class="w-2/5 my-8 text-5xl italic font-bold text-center md:text-7xl lg:text-9xl text-verdigris-500">Josiah Morris</h1>
    <div class="flex flex-row w-1/2 overflow-hidden border-x-2 border-verdigris-500">
      <span class="pr-1.5 text-center text-verdigris-500 basis-auto grow-0 shrink-0 animate-scrollRev">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center text-verdigris-500 basis-auto grow-0 shrink-0 animate-scrollRev">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center text-verdigris-500 basis-auto grow-0 shrink-0 animate-scrollRev">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
    </div>
  </section>
  <header class="sticky top-10 z-10 flex items-center justify-center
  md:justify-end w-full -mt-10 after:content-[''] after:absolute after:w-full
  after:h-36 after:bg-plum-500 after:skew-y-2 after:top-full
  after:-translate-y-24 after:-z-50">
    <button class="mx-8" on:click={() => {handleClick(about)}}>
      About
    </button>
    <button class="mx-8" on:click={() => {handleClick(projects)}}>
      Projects
    </button>
    <button class="mx-8" on:click={() => {handleClick(contact)}}>
      Contact
    </button>
  </header>
  <section bind:this={about} class="flex items-center justify-center w-full h-screen">
    About!
  </section>
  <section bind:this={projects} class="flex items-center justify-center w-full h-screen">
    Projects!
  </section>
  <section bind:this={contact} class="flex items-center justify-center w-full h-screen">
    Contact!
  </section>
</div>
