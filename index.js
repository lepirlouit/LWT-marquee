// <div class="marquee"></div>

const fs = require('fs');

const genMarqueeItem = (img, url) => `<div class="marquee"><a href="${url}" target=”_blank”><img src="${img}"/></a></div>`;

const sponsors = [
  {img: "", url: ""},
  {img: "", url: ""},
  {img: "", url: ""},
];

const marqueeItems = sponsors.map(({ img, url }) => genMarqueeItem(img, url)).join('\n');

const templateFileContent = fs.readFileSync('./marqueeHTMLTemplate.html').toString();

const finalHTML = templateFileContent.replace(/{{marqueeItems}}/, marqueeItems);



const fullWidgetTemplatecontent = fs.readFileSync('./fullWidgetTemplate.html').toString();
const styleSheetContent = fs.readFileSync('./stylesheet.css').toString();


const outFile = fullWidgetTemplatecontent.replace(/{{finalHTML}}/, finalHTML).replace(/{{styleSheetContent}}/, styleSheetContent);


fs.writeFileSync('./output.html', outFile);