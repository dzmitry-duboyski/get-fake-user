# Instructions for adding a new language

1. Create a folder for the new language, inside the `data` folder. The folder name is the language code. The language code can be viewed on [this page](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

2. In the created folder, you need to create the following files:
   - data-newLanguage-common.js
   - data-newLanguage-female.js
   - data-newLanguage-male.js
   - data-newLanguage-translite.js

   `newLanguage` is also a language code. 

3. Fill in the generated files by analogy with another language, for example `ru`.

4. Add code for new language to `utils.js` file.

5. Add code for new language to `getTranslite.js` file.

6. Update information about supported languages in the `README.md` file.

7. Update the package version, push a new release to npm, add a description of the new release to [github](https://github.com/dzmitry-duboyski/get-fake-user/releases).
