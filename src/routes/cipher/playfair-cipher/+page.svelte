<script>
  import PlayfairCipher from "$lib/ciphers/PlayfairCipher.svelte";
</script>

<svelte:head>
  <title>Playfair Cipher | Cryptography App</title>
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
  <i class="text-yellow-500">This cipher is currently under development</i>
  <PlayfairCipher />
</div>
