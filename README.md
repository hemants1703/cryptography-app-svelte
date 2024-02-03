# Cryptography App 🔐

This is a web app that encrypts and decrypts messages that you input using different cipher techniques. It is built using SvelteKit.

## Features

- Caesar Cipher
- Rail Fence Cipher (Currently being worked on)
- Playfair Cipher (Currently being worked on)

## Project Structure

The project is organized as follows:

- `src/routes` contains the main pages of the app
- `src/routes/[route]` contains the components for each page and the logic for each cipher itself
- each component starts with its unique `id` name (e.g. `id="ceaserCipher"`, `id="railFenceCipher"`, `id="playfairCipher"`) in a div and the heading of each component is the name of the cipher itself in an `h2` tag

