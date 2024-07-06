<script>
  import { page } from "$app/stores";

  $: pageURL = $page.url.pathname;

  const ciphersData = {
    "/cipher/caesar-cipher": {
      name: "Caesar Cipher",
      about:
        "The Ceasar cipher is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet.",
    },
    "/cipher/rail-fence-cipher": {
      name: "Rail Fence Cipher",
      about:
        "The rail fence cipher is a form of transposition cipher that gets its name from the way in which it is encoded. It was already used by the ancient Greeks.",
    },
    "/cipher/playfair-cipher": {
      name: "Playfair Cipher",
      about:
        "The Playfair cipher is a manual symmetric encryption technique and was the first literal digraph substitution cipher. The scheme was invented in 1854 by Charles Wheatstone.",
    },
  };
</script>

<div>
  <h2 class="text-2xl text-white mb-1 font-bold max-sm:text-3xl">
    {ciphersData[pageURL].name}
  </h2>
  <p class="mt-5">{ciphersData[pageURL].about}</p>
  <div class="mt-5 mb-10">
    <slot />
  </div>
</div>
