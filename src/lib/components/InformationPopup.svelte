<script>
  import {
    showCipherInformationPopup,
    navbarOpened,
  } from "$lib/stores/store.js";

  const showTimeout = setTimeout(() => {
    showCipherInformationPopup.set(true);
  }, 5000);

  $: if ($navbarOpened) {
    clearTimeout(showTimeout);
    showCipherInformationPopup.set(false);
  }
</script>

<div
  id="informationPopup"
  class={`sm:hidden max-sm:${$showCipherInformationPopup ? "block" : "hidden"} absolute top-20 flex justify-center items-center max-w-96 right-3 bg-cyan-100 text-gray-900 py-2 px-4 rounded-xl shadow-2xl z-50`}
>
  <div
    style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"
    class="bg-cyan-100 z-50 aspect-square size-4 absolute -top-4 right-4"
  ></div>
  <p>
    To explore all the cipher techniques, click on this menu button to visit any
    one you wish
  </p>
  <button
    class="scale-125"
    on:click={() => showCipherInformationPopup.set(false)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  </button>
</div>

<style>
  #informationPopup {
    animation: fadeIn 1s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
</style>
