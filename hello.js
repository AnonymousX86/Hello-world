// Write in console
console.log("Hello world!");

// Write in document (it overwrites any HTML document's data)
document.write("Hello world!");

// Create "span" tag with text (this one does not overwrites document, but appends it)
const myTag = document.createElement("span");
myTag.textContent = "Hello world!";
document.body.appendChild(myTag);

// Execute in browser console (check F12)
