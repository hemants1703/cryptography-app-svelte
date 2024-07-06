import { c as create_ssr_component, e as each, v as validate_component, b as add_attribute, d as escape } from "../../chunks/ssr.js";
import { C as ContributeOnGitHub } from "../../chunks/ContributeOnGitHub.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const ciphersList = [
    {
      name: "Caesar Cipher",
      path: "/cipher/caesar-cipher"
    },
    // { name: "Playfair Cipher", path: "/cipher/playfair-cipher" },
    {
      name: "Rail Fence Cipher",
      path: "/cipher/rail-fence-cipher"
    }
  ];
  return `${$$result.head += `<!-- HEAD_svelte-1wdep5m_START -->${$$result.title = `<title>Cryptography App</title>`, ""}<meta name="description" content="A simple cryptography app that allows you to encrypt and decrypt messages using various ciphers."><meta name="keywords" content="cryptography, encryption, decryption, caesar cipher, rail fence cipher, playfair cipher"><meta name="author" content="Hemant Sharma"><!-- HEAD_svelte-1wdep5m_END -->`, ""} <div><h2 class="text-2xl text-white mb-1 font-bold max-sm:text-3xl" data-svelte-h="svelte-ag1obz">Home</h2> <p class="text-white my-5" data-svelte-h="svelte-p8gxg7">This is a simple cryptography app that allows you to encrypt and decrypt
    messages using various ciphers.</p> <div class="mb-4"><p class="text-white" data-svelte-h="svelte-c1s2s">The ciphers currently available are:</p> <ul class="text-white pl-6 mt-2">${each(ciphersList, (cipher) => {
    return `<li class="list-decimal max-sm:py-2"><a${add_attribute("href", cipher.path, 0)} class="text-compliment-color underline">${escape(cipher.name)}</a> </li>`;
  })}</ul></div> <div class="flex flex-col"><p class="text-white italic" data-svelte-h="svelte-17dvz9">To get started, select the cipher technique in the navigation bar.</p> <p class="text-white mt-4" data-svelte-h="svelte-1xx9sdv">If you would like to contribute to this project, please visit the
      <a href="https://github.com/hemants1703/cryptography-app-svelte/" target="_blank" class="text-compliment-color hover:underline">GitHub repository</a>
      and submit a pull request.</p> <div class="max-sm:self-center">${validate_component(ContributeOnGitHub, "ContributeOnGitHub").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
