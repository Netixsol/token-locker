"scss.validate": false,
"editor.quickSuggestions": {
"strings": true
},
"editor.autoClosingQuotes": "always",
"tailwindCSS.experimental.classRegex": [
"tw`([^`]_)", // tw`...`
"tw=\"([^\"]_)", // <div tw="..." />
"tw={\"([^\"}]_)", // <div tw={"..."} />
"tw\\.\\w+`([^`]_)", // tw.xxx`...`
"tw\\(._?\\)`([^`]_)" // tw(Component)`...`
],
"tailwindCSS.includeLanguages": {
"typescript": "javascript",
"typescriptreact": "javascript"
}
1