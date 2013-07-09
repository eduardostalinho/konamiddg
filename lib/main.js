var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScriptFile: data.url("konamijs/konami.js"),
  contentScript: "var easter_egg = new Konami(); easter_egg.code = function() { document.location = 'https://duckduckgo.com' }; easter_egg.load();"
});
