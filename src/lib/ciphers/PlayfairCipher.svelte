<script>
  let inputMessage = "";
  let inputDecryptingMessage = "";
  let key = "";
  let encryptedMessage = "";
  let decryptedMessage = "";
  let encryptionShift = 0;
  let decryptionShiftValue = 0;

  function generateKeyMatrix() {
    let matrix = [];
    let adjustedKey = key.replace(/j/gi, "i").replace(/\s/g, "");
    let uniqueChars = [...new Set(adjustedKey + "abcdefghiklmnopqrstuvwxyz")];
    while (uniqueChars.length) matrix.push(uniqueChars.splice(0, 5));
    return matrix;
  }

  function encryptPlayfair() {
    let matrix = generateKeyMatrix();
    let message = inputMessage.replace(/j/gi, "i").replace(/\s/g, "");
    let encrypted = "";

    for (let i = 0; i < message.length; i += 2) {
      let char1 = message[i];
      let char2 = message[i + 1];
      let char1Pos, char2Pos;
      let char1Row, char1Col, char2Row, char2Col;

      // Find positions of characters in the matrix
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === char1) {
            char1Pos = row * 10 + col;
            char1Row = row;
            char1Col = col;
          }
          if (matrix[row][col] === char2) {
            char2Pos = row * 10 + col;
            char2Row = row;
            char2Col = col;
          }
        }
      }

      // Encrypt the characters
      if (char1Pos === char2Pos) {
        // Characters are in the same position, use wrapping
        char1Col = (char1Col + 1) % 5;
        char2Col = (char2Col + 1) % 5;
      } else if (char1Row === char2Row) {
        // Characters are in the same row
        char1Col = (char1Col + 1) % 5;
        char2Col = (char2Col + 1) % 5;
      } else if (char1Col === char2Col) {
        // Characters are in the same column
        char1Row = (char1Row + 1) % 5;
        char2Row = (char2Row + 1) % 5;
      } else {
        // Characters form a rectangle, swap columns
        let temp = char1Col;
        char1Col = char2Col;
        char2Col = temp;
      }

      encrypted += matrix[char1Row][char1Col] + matrix[char2Row][char2Col];
    }

    encryptedMessage = encrypted;
  }

  function decryptPlayfair() {
    let matrix = generateKeyMatrix();
    let message = inputDecryptingMessage;
    let decrypted = "";

    for (let i = 0; i < message.length; i += 2) {
      let char1 = message[i];
      let char2 = message[i + 1];
      let char1Pos, char2Pos;
      let char1Row, char1Col, char2Row, char2Col;

      // Find positions of characters in the matrix
      for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
          if (matrix[row][col] === char1) {
            char1Pos = row * 10 + col;
            char1Row = row;
            char1Col = col;
          }
          if (matrix[row][col] === char2) {
            char2Pos = row * 10 + col;
            char2Row = row;
            char2Col = col;
          }
        }
      }

      // Decrypt the characters
      if (char1Pos === char2Pos) {
        // Characters are in the same position, use wrapping
        char1Col = (char1Col + 4) % 5;
        char2Col = (char2Col + 4) % 5;
      } else if (char1Row === char2Row) {
        // Characters are in the same row
        char1Col = (char1Col + 4) % 5;
        char2Col = (char2Col + 4) % 5;
      } else if (char1Col === char2Col) {
        // Characters are in the same column
        char1Row = (char1Row + 4) % 5;
        char2Row = (char2Row + 4) % 5;
      } else {
        // Characters form a rectangle, swap columns
        let temp = char1Col;
        char1Col = char2Col;
        char2Col = temp;
      }

      decrypted += matrix[char1Row][char1Col] + matrix[char2Row][char2Col];
    }

    decryptedMessage = decrypted;
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
              encryptPlayfair();
            }
          }}
        />
        <div class="flex justify-between items-center w-full mt-2">
          <button
            class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900"
            on:click={() => {
              if (encryptionShift > 0) {
                encryptionShift--;
                encryptPlayfair();
              }
            }}>-</button
          >
          <p class="text-white text-sm sm:w-[33%] text-center">
            Shift: {encryptionShift}
          </p>
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900"
            on:click={() => {
              encryptionShift++;
              encryptPlayfair();
            }}>+</button
          >
        </div>
        <button
          class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900"
          on:click={encryptPlayfair}>Encrypt</button
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
              decryptPlayfair();
            }
          }}
        />
        <div class="flex justify-between items-center w-full mt-2">
          <button
            class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900"
            on:click={() => {
              if (decryptionShiftValue > 0) {
                decryptionShiftValue--;
                decryptPlayfair();
              }
            }}>-</button
          >
          <p class="text-white text-sm sm:w-[33%] text-center">
            Shift: {decryptionShiftValue}
          </p>
          <button
            class="bg-cyan-950 text-white rounded-md p-3 text-center w-[33%] transition-all duration-75 ease-in-out hover:bg-cyan-900"
            on:click={() => {
              decryptionShiftValue++;
              decryptPlayfair();
            }}>+</button
          >
        </div>
        <button
          class="flex justify-center self-center bg-cyan-950 text-white rounded-md p-2 w-full mt-2 transition-all duration-75 ease-in-out hover:bg-cyan-900"
          on:click={decryptPlayfair}>Decrypt</button
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
