<script>
  import { onMount } from "svelte";

  let menuIcon;
  let navMenu;

  onMount(() => {
    if (menuIcon) {
      menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
      });
    }
  });
</script>

<nav
  class="sm:fixed sm:top-0 sm:bottom-0 sm:left-0 sm:right-80 text-center sm:w-[150px] sm:bg-secondary-color fixed flex"
>
  <h1 class="text-5xl text-compliment-color bg-black block sm:hidden">
    Cryptography App
  </h1>
  <div class="menu-icon sm:hidden" bind:this={menuIcon}>Toggle Menu</div>
  <ul
    class="block sm:max-sm:hidden fixed top-20 left-0 right-0 bottom-0"
    bind:this={navMenu}
  >
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
