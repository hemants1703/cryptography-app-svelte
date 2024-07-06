<script>
  import CaesarCipher from "$lib/ciphers/CaesarCipher.svelte";
</script>

<svelte:head>
  <title>Ceaser Cipher | Cryptography App</title>
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

<CaesarCipher />
