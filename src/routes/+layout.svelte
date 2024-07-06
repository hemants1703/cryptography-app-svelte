<script>
  import "../app.css";
  import {
    navbarOpened,
    // showCipherInformationPopup,
  } from "$lib/stores/store.js";
  import Navbar from "$lib/components/Navbar.svelte";
  // import InformationPopup from "$lib/components/InformationPopup.svelte";
</script>

<div class="flex h-[100vh]">
  <Navbar />
  <main class="w-[100%] mt-0 max-w-screen-lg m-auto p-4 max-sm:p-0">
    <header
      class="flex justify-between items-center mb-8 max-sm:bg-cyan-950 max-sm:p-4"
    >
      <h1
        class="max-sm:relative sm:text-5xl text-3xl max-sm:text-4xl font-bold text-compliment-color block z-50"
      >
        <a href="/"> Cryptography App </a>
      </h1>
      <button
        class="sm:hidden z-50"
        on:click={() => {
          navbarOpened.update((value) => !value);
        }}
        aria-label="Toggle Navbar"
      >
        {#if $navbarOpened}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        {/if}
      </button>
      <!-- <InformationPopup /> -->
    </header>
    <div class="max-sm:px-4 max-sm:text-xl">
      <slot />
    </div>
  </main>
</div>
