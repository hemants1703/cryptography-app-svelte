<script>
  let inputMessage = "";
  let inputDecryptingMessage = "";
  let encryptionShift = 3;
  let decryptionShiftValue = 3;
  let encryptedMessage = "";
  let decryptedMessage = "";

  function encryptRailFence() {
    if (encryptionShift <= 0) {
      encryptedMessage = "";
      return;
    }

    let rail = Array.from({ length: encryptionShift }, () => []);
    let num = 0;
    let down = false;

    for (let char of inputMessage) {
      rail[num].push(char);
      if (num === 0 || num === encryptionShift - 1) down = !down;
      num += down ? 1 : -1;
    }

    encryptedMessage = rail.flat().join("");
  }

  function decryptRailFence() {
    let rail = Array.from({ length: decryptionShiftValue }, () => []);
    let indices = Array.from({ length: inputDecryptingMessage.length });
    let num = 0;
    let down = false;

    for (let i = 0; i < inputDecryptingMessage.length; i++) {
      rail[num].push(i);
      if (num === 0 || num === decryptionShiftValue - 1) down = !down;
      num += down ? 1 : -1;
    }

    let counter = 0;
    for (let r of rail) {
      for (let i = 0; i < r.length; i++) {
        indices[r[i]] = inputDecryptingMessage[counter++];
      }
    }

    decryptedMessage = indices.join("");
  }
</script>

<div class="flex flex-col gap-16 mt-[25px]">
  <div class="flex flex-col">
    <h3 class="font-bold mb-4 text-lg underline">ENCRYPTOR</h3>
    <div class="flex gap-16 max-sm:flex-col max-sm:w-full max-sm:gap-8">
      <div class="w-full sm:w-[50%]">
        <input
          class="text-white rounded-md border-2 border-cyan-950 p-2 w-full bg-slate-800 transition-all duration-75 ease-in-out hover:border-cyan-900 active:border-cyan-900 hover:bg-slate-900 active:bg-slate-900"
          type="text"
          placeholder="Enter your message here"
          bind:value={inputMessage}
          on:keydown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              encryptRailFence();
            }
          }}
        />
        <div class="flex justify-between items-center w-full mt-2">
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              if (encryptionShift > 0) {
                encryptionShift--;
                encryptRailFence();
              }
            }}>-</button
          >
          <p class="text-white text-sm sm:w-[33%] text-center">
            Shift: {encryptionShift}
          </p>
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              encryptionShift++;
              encryptRailFence();
            }}>+</button
          >
        </div>
        <button
          class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
          on:click={encryptRailFence}>Encrypt</button
        >
      </div>
      <div
        class="flex flex-col w-[50%] h-full bg-slate-800 rounded-md p-[10px] overflow-y-auto
      sm:h-auto sm:w-[50%] max-sm:w-full max-sm:h-auto"
      >
        <!-- {#if encryptedMessage.length > 0} -->
        <h3 class="italic text-base font-bold text-start">Encrypted message</h3>
        <!-- {/if} -->
        <div class="w-full h-full text-emerald-500">
          {encryptedMessage}
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <h3 class="font-bold mb-4 text-lg underline">DECRYPTOR</h3>
    <div class="flex gap-16 max-sm:flex-col max-sm:w-full max-sm:gap-8">
      <div class="w-full sm:w-[50%]">
        <input
          class="text-white rounded-md border-2 border-cyan-950 p-2 w-full bg-slate-800 transition-all duration-75 ease-in-out hover:border-cyan-900 active:border-cyan-900 hover:bg-slate-900 active:bg-slate-900"
          type="text"
          placeholder="Enter your message here"
          bind:value={inputDecryptingMessage}
          on:keydown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              decryptRailFence();
            }
          }}
        />
        <div class="flex justify-between items-center w-full mt-2">
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              if (decryptionShiftValue > 0) {
                decryptionShiftValue--;
                decryptRailFence();
              }
            }}>-</button
          >
          <p class="text-white text-sm sm:w-[33%] text-center">
            Shift: {decryptionShiftValue}
          </p>
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              decryptionShiftValue++;
              decryptRailFence();
            }}>+</button
          >
        </div>
        <button
          class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
          on:click={decryptRailFence}>Decrypt</button
        >
      </div>
      <div
        class="flex flex-col w-[50%] h-full bg-slate-800 rounded-md p-[10px] overflow-y-auto
      sm:h-auto sm:w-[50%] max-sm:w-full max-sm:h-auto"
      >
        <!-- {#if encryptedMessage.length > 0} -->
        <h3 class="italic text-base font-bold text-start">Decrypted message</h3>
        <!-- {/if} -->
        <div class="w-full h-full text-emerald-500">
          {decryptedMessage}
        </div>
      </div>
    </div>
  </div>
</div>
