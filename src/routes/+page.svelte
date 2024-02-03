<script>
  import CeaserCipher from "../components/CeaserCipher.svelte";
</script>

<!-- 
<div id="app" class="max-w-screen-lg m-auto p-4">
  <CeaserCipher />
</div> -->

<svelte:head>
  <title>Cryptography App</title>
  <meta
    name="description"
    content="A simple cryptography app that allows you to encrypt and decrypt messages using various ciphers."
  />
  <meta
    name="keywords"
    content="cryptography, encryption, decryption, caesar cipher, rail fence cipher, playfair cipher"
  />
  <meta name="author" content="Hemant Sharma" />
</svelte:head>

<div id="home">
  <h2>Home</h2>
  <p class="text-white mb-4">
    This is a simple cryptography app that allows you to encrypt and decrypt
    messages using various ciphers.
  </p>
  <div class="mb-4">
    <p class="text-white">The ciphers currently available are:</p>
    <ul class="text-white pl-6 mt-2">
      <li>Caesar Cipher</li>
      <!-- <li>Rail Fence Cipher</li> -->
      <!-- <li>Playfair Cipher</li> -->
    </ul>
  </div>
  <p class="text-white italic max-sm:hidden">
    To get started, select the cipher technique in the navigation bar.
  </p>
  <p class="text-white italic sm:hidden">
    To get started, select any cipher technique from the Menu bar at the top
    right corner.
  </p>
  <p class="text-white mt-4">
    If you would like to contribute to this project, please visit the
    <a
      href="https://github.com/hemants1703/cryptography-app-svelte/"
      target="_blank"
      class="text-compliment-color hover:underline">GitHub repository</a
    >
    and submit a pull request.
  </p>
</div>

<style>
  li {
    list-style-type: decimal;
  }
</style>
