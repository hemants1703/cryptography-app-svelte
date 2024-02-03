<script>
  import { onMount } from "svelte";
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";

  let navbarStatus = false;

  onMount(() => {
    const menuBar = document.getElementById("menuBar");
    const path = document.querySelector("#menuBar svg path");
    menuBar.addEventListener("click", () => {
      if (navbarStatus)
        path.setAttribute("d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5");
      else path.setAttribute("d", "M6 18 18 6M6 6l12 12");
      navbarStatus = !navbarStatus;
    });
  });
</script>

<div class="flex h-[100vh]">
  <Navbar {navbarStatus} />
  <main class="w-[100%] mt-0 max-w-screen-lg m-auto p-4">
    <header class="flex justify-between items-center mb-8">
      <h1
        class="sm:text-5xl text-3xl text-compliment-color block sm:max-sm:hidden"
      >
        Cryptography App
      </h1>
      <div id="menuBar" class="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-9 h-9"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </header>
    <slot />
  </main>
</div>

<style>
  :global(h2) {
    font-size: 1.5rem;
    line-height: 2rem;
    color: white;
    margin-bottom: 5px;
    font-weight: bold;
  }
  :global(#aboutCipher) {
    margin-top: 20px;
  }
</style>
