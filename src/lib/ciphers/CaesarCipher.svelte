<script>
  let inputMessage;
  let inputDecryptingMessage;
  let shiftValue = 4;
  let decryptionShiftValue = 4;
  let encryptedMessage = "";
  let decryptedMessage = "";

  function encryptMessage() {
    encryptedMessage = inputMessage
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(((charCode - 65 + shiftValue) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(((charCode - 97 + shiftValue) % 26) + 97);
        }
        return char;
      })
      .join("");
  }

  function decryptMessage() {
    decryptedMessage = inputDecryptingMessage
      .split("")
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
          return String.fromCharCode(
            ((charCode - 65 - decryptionShiftValue + 26) % 26) + 65
          );
        } else if (charCode >= 97 && charCode <= 122) {
          return String.fromCharCode(
            ((charCode - 97 - decryptionShiftValue + 26) % 26) + 97
          );
        }
        return char;
      })
      .join("");
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
              encryptMessage();
            }
          }}
        />
        <div class="flex justify-between items-center w-full mt-2">
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              if (shiftValue > 0) {
                shiftValue--;
                encryptMessage();
              }
            }}>-</button
          >
          <p class="text-white text-sm sm:w-[33%] text-center">
            Shift: {shiftValue}
          </p>
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              shiftValue++;
              encryptMessage();
            }}>+</button
          >
        </div>
        <button
          class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
          on:click={encryptMessage}>Encrypt</button
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
              decryptMessage();
            }
          }}
        />
        <div class="flex justify-between items-center w-full mt-2">
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
            on:click={() => {
              if (decryptionShiftValue > 0) {
                decryptionShiftValue--;
                decryptMessage();
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
              decryptMessage();
            }}>+</button
          >
        </div>
        <button
          class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900 shadow-md hover:shadow-lg active:shadow-sm active:scale-[0.99] active:translate-y-[1px]"
          on:click={decryptMessage}>Decrypt</button
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
