<script>
  import ContributeOnGitHub from "$lib/components/ContributeOnGitHub.svelte";
  const ciphersList = [
    { name: "Caesar Cipher", path: "/cipher/caesar-cipher" },
    // { name: "Playfair Cipher", path: "/cipher/playfair-cipher" },
    { name: "Rail Fence Cipher", path: "/cipher/rail-fence-cipher" },
  ];
</script>

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

<div>
  <h2 class="text-2xl text-white mb-1 font-bold max-sm:text-3xl">Home</h2>
  <p class="text-white my-5">
    This is a simple cryptography app that allows you to encrypt and decrypt
    messages using various ciphers.
  </p>
  <div class="mb-4">
    <p class="text-white">The ciphers currently available are:</p>
    <ul class="text-white pl-6 mt-2">
      {#each ciphersList as cipher}
        <li class="list-decimal max-sm:py-2">
          <a href={cipher.path} class="text-compliment-color underline"
            >{cipher.name}</a
          >
        </li>
      {/each}
    </ul>
  </div>
  <div class="flex flex-col">
    <p class="text-white italic">
      To get started, select the cipher technique in the navigation bar.
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
    <div class="max-sm:self-center">
      <ContributeOnGitHub />
    </div>
  </div>
</div>
