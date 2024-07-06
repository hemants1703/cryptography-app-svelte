import { c as create_ssr_component, a as subscribe, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import { C as ContributeOnGitHub } from "../../chunks/ContributeOnGitHub.js";
import { p as page } from "../../chunks/stores.js";
const navbarOpened = writable(false);
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pageURL;
  let $page, $$unsubscribe_page;
  let $navbarOpened, $$unsubscribe_navbarOpened;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_navbarOpened = subscribe(navbarOpened, (value) => $navbarOpened = value);
  const navbarLinks = [
    { name: "Home", path: "/" },
    {
      name: "Caeser Cipher",
      path: "/cipher/caesar-cipher"
    },
    // { name: "Playfair Cipher", path: "/cipher/playfair-cipher" },
    {
      name: "Rail Fence Cipher",
      path: "/cipher/rail-fence-cipher"
    }
  ];
  pageURL = $page.url.pathname;
  $$unsubscribe_page();
  $$unsubscribe_navbarOpened();
  return `<nav${add_attribute("class", `sm:w-[230px] sm:block max-sm:${$navbarOpened ? "block" : "hidden"} max-sm:fixed max-sm:inset-0 bg-cyan-950`, 0)}><div class="flex flex-col justify-between h-full pt-20"><div class="flex flex-col">${each(navbarLinks, (link) => {
    return `<a${add_attribute("class", `px-4 py-2 m-1 rounded-lg hover:bg-cyan-600 active:bg-cyan-800 active:scale-95 max-sm:active:scale-[0.97] ${pageURL === link.path ? "bg-cyan-700" : ""} transition-all duration-100 max-sm:text-xl`, 0)}${add_attribute("href", link.path, 0)}>${escape(link.name)}</a>`;
  })}</div> <div${add_attribute("class", `sm:${pageURL === "/" ? "hidden" : "block"} self-center scale-95`, 0)}>${validate_component(ContributeOnGitHub, "ContributeOnGitHub").$$render($$result, {}, {}, {})}</div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navbarOpened, $$unsubscribe_navbarOpened;
  $$unsubscribe_navbarOpened = subscribe(navbarOpened, (value) => $navbarOpened = value);
  $$unsubscribe_navbarOpened();
  return `<div class="flex h-[100vh]">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <main class="w-[100%] mt-0 max-w-screen-lg m-auto p-4 max-sm:p-0"><header class="flex justify-between items-center mb-8 max-sm:bg-cyan-950 max-sm:p-4"><h1 class="max-sm:relative sm:text-5xl text-3xl max-sm:text-4xl font-bold text-compliment-color block z-50" data-svelte-h="svelte-1qelxns"><a href="/">Cryptography App</a></h1> <button class="sm:hidden z-50" aria-label="Toggle Navbar">${$navbarOpened ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`}</button> </header> <div class="max-sm:px-4 max-sm:text-xl">${slots.default ? slots.default({}) : ``}</div></main></div>`;
});
export {
  Layout as default
};
