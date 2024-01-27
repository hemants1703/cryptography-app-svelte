<script>
  import { onMount } from "svelte";

  let inputMessage;
  let encryptButton;
  let plusButton;
  let minusButton;
  let shiftValue = 4;
  let encryptedMessage = "";

  function encryptMessage() {
    const shift = shiftValue;
    encryptedMessage = inputMessage.value
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
        return char;
      })
      .join("");
  }

  onMount(() => {
    if (encryptButton && inputMessage && plusButton && minusButton) {
      encryptButton.addEventListener("click", encryptMessage);
      inputMessage.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          encryptMessage();
        }
      });
      plusButton.addEventListener("click", () => {
        shiftValue++;
        encryptMessage();
      });
      minusButton.addEventListener("click", () => {
        if (shiftValue > 0) {
          shiftValue--;
          encryptMessage();
        }
      });
    }
  });
</script>

<div id="ceaserCipher" class="mt-[25px]">
  <h2 class="text-2xl text-white mb-[5px]">Ceaser Cipher</h2>
  <div class="w-full">
    <input
      class="text-white rounded-md border-2 border-cyan-950 p-2 w-full bg-slate-800 transition-all duration-75 ease-in-out hover:border-cyan-900 active:border-cyan-900 hover:bg-slate-900 active:bg-slate-900"
      type="text"
      placeholder="Enter your message here"
      bind:this={inputMessage}
    />
    <div class="flex justify-center items-center w-full mt-2">
      <button
        class="bg-cyan-950 text-white rounded-md p-3 text-center"
        bind:this={minusButton}>-</button
      >
      <p class="text-white text-sm px-8">Shift: {shiftValue}</p>
      <button
        class="bg-cyan-950 text-white rounded-md p-3"
        bind:this={plusButton}>+</button
      >
    </div>
    <button
      class="bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900"
      bind:this={encryptButton}>Encrypt</button
    >
  </div>
  <div class="flex flex-col mt-2">
    {#if encryptedMessage.length > 0}
      <h3 class="italic">Encrypted message</h3>
    {/if}
    <p>{encryptedMessage}</p>
  </div>
</div>
