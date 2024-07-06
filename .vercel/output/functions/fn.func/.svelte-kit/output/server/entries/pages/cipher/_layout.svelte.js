import { c as create_ssr_component, a as subscribe, d as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageURL;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const ciphersData = {
    "/cipher/caesar-cipher": {
      name: "Caesar Cipher",
      about: "The Ceasar cipher is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet."
    },
    "/cipher/rail-fence-cipher": {
      name: "Rail Fence Cipher",
      about: "The rail fence cipher is a form of transposition cipher that gets its name from the way in which it is encoded. It was already used by the ancient Greeks."
    },
    "/cipher/playfair-cipher": {
      name: "Playfair Cipher",
      about: "The Playfair cipher is a manual symmetric encryption technique and was the first literal digraph substitution cipher. The scheme was invented in 1854 by Charles Wheatstone."
    }
  };
  pageURL = $page.url.pathname;
  $$unsubscribe_page();
  return `<div><h2 class="text-2xl text-white mb-1 font-bold max-sm:text-3xl">${escape(ciphersData[pageURL].name)}</h2> <p class="mt-5">${escape(ciphersData[pageURL].about)}</p> <div class="mt-5 mb-10">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
