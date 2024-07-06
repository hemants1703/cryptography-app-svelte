<script>
  import ContributeOnGitHub from "$lib/components/ContributeOnGitHub.svelte";
  import { navbarOpened } from "$lib/stores/store.js";
  import { page } from "$app/stores";

  const navbarLinks = [
    { name: "Home", path: "/" },
    { name: "Caeser Cipher", path: "/cipher/caesar-cipher" },
    // { name: "Playfair Cipher", path: "/cipher/playfair-cipher" },
    { name: "Rail Fence Cipher", path: "/cipher/rail-fence-cipher" },
  ];

  $: pageURL = $page.url.pathname;
</script>

<nav
  class={`sm:w-[230px] sm:block max-sm:${$navbarOpened ? "block" : "hidden"} max-sm:fixed max-sm:inset-0 bg-cyan-950`}
>
  <div class="flex flex-col justify-between h-full pt-20">
    <div class="flex flex-col">
      {#each navbarLinks as link}
        <a
          class={`px-4 py-2 m-1 rounded-lg hover:bg-cyan-600 active:bg-cyan-800 active:scale-95 max-sm:active:scale-[0.97] ${pageURL === link.path ? "bg-cyan-700" : ""} transition-all duration-100 max-sm:text-xl`}
          href={link.path}
          on:click={() => navbarOpened.set(false)}>{link.name}</a
        >
      {/each}
    </div>
    <div
      class={`sm:${pageURL === "/" ? "hidden" : "block"} self-center scale-95`}
    >
      <ContributeOnGitHub />
    </div>
  </div>
</nav>
