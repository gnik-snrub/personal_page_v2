<script>
let projects, about, contact
const handleClick = (element) => element.scrollIntoView({
    behavior: 'smooth'
})
const changeTheme = () => {
}

</script>

<div class="flex flex-col items-center justify-center w-full bg-raisin-500 h-max text-verdigris-500">
  <section class="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-raisin-500 to-75% to-plum-500">
    <div class="flex flex-row w-1/2 overflow-hidden border-x-2 border-verdigris-500">
      <span class="pr-1.5 text-center basis-auto grow-0 shrink-0 animate-scroll">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center basis-auto grow-0 shrink-0 animate-scroll">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center basis-auto grow-0 shrink-0 animate-scroll">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
    </div>
    <h1 class="w-2/5 my-8 text-5xl italic font-bold text-center md:text-7xl lg:text-9xl">Josiah Morris</h1>
    <div class="flex flex-row w-1/2 overflow-hidden border-x-2 border-verdigris-500">
      <span class="pr-1.5 text-center basis-auto grow-0 shrink-0 animate-scrollRev">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center basis-auto grow-0 shrink-0 animate-scrollRev">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
      <span class="pr-1.5 text-center basis-auto grow-0 shrink-0 animate-scrollRev">Full stack web developer - Designer - Self guided learner - Lover of purple - Pokemon master - </span>
    </div>
  </section>
  <header class="sticky top-10 flex-wrap z-10 flex items-center justify-center
  md:justify-end w-full -mt-14 after:content-[''] after:absolute after:w-full
  after:h-36 after:bg-plum-500 after:skew-y-2 after:top-full
  after:-translate-y-24 after:-z-50 gapy-2">
    <button class="px-4 py-1 mx-8 border rounded-full basis-1/5 md:basis-0 border-verdigris-500 " on:click={() => {handleClick(about)}}>
      About
    </button>
    <button class="px-4 py-1 mx-8 border rounded-full basis-1/5 md:basis-0 border-verdigris-500 " on:click={() => {handleClick(projects)}}>
      Projects
    </button>
    <button class="px-4 py-1 mx-8 border rounded-full basis-1/5 md:basis-0 border-verdigris-500 " on:click={() => {handleClick(contact)}}>
      Contact
    </button>
    <button class="px-4 py-1 mx-8 border rounded-full basis-1/5 md:basis-0 border-verdigris-500 " on:click={changeTheme}>
      Theme
    </button>
  </header>
  <section bind:this={about} class="flex items-center justify-center w-full h-screen">
    <div class="w-1/2 px-8 py-4 border-2 rounded-lg h-fit-content border-plum-500">
      <h2 class="w-full text-3xl text-center">Hi there, I'm Josiah Morris</h2>
      <p>Embracing the path of a lifelong learner, I've ventured into the world
      of web development as a self-taught enthusiast from Australia. Committed
      to lifelong lonearing, I embrace every opportunity to enhance expertise
      and stay updated with the ever-changing web development landscape.</p>
      <p>With a blend of technical skills, creative thinking, and a strong
      focus on user-centric design, I approach each project with dedication,
      attention to detail, and a genuine passion for crafting engaging user
      experiences.</p>
    </div>
  </section>
  <section bind:this={projects} class="flex items-center justify-center w-full h-screen">
    Projects!
  </section>
  <section bind:this={contact} class="flex items-center justify-center w-full h-screen">
    Contact!
  </section>
</div>
