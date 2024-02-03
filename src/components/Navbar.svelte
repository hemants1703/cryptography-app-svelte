<script>
  import { onMount } from "svelte";

  export let navbarStatus;

  onMount(() => {
    const navbar = document.getElementById("navbar");
    if (navbarStatus) {
      navbar.classList.remove("sm:block");
      navbar.classList.add("block");
    } else {
      navbar.classList.add("sm:block");
      navbar.classList.remove("block");
    }
  });
</script>

<nav
  id="navbar"
  class="sm:max-w-[200px] sm:w-[200px] sm:block
          hidden bg-cyan-950"
>
  <ul class="pt-20">
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/ceaser-cipher">Ceaser Cipher</a>
    </li>
    <li>
      <a href="/rail-fence-cipher">Rail Fence Cipher</a>
    </li>
    <li>
      <a href="/playfair-cipher">Playfair Cipher</a>
    </li>
  </ul>
</nav>

<style>
  li {
    padding: 10px 0;
  }
  li:hover {
    background-color: rgb(30, 41, 59);
  }
  li a {
    padding: 0 10px;
  }
</style>
