// <div class="marquee"></div>

const genMarqueeItem = (img, url, name) => `<a draggable="false"  href="${url}" target="_blank"><img draggable="false" loading="eager" alt="${name}" src="${img.includes("/")?img:`https://leeuwsewielertoeristen.be/lwt1/wp-content/uploads/2024/02/${img}`}"/></a>`;

const sponsors = [
  // {name: "VWB", img: "https://leeuwsewielertoeristen.be/lwt1/wp-content/uploads/2020/12/Logo-VWB-zonder-achtergrond-150x150-1.png", url: "https://www.vwb.be/"},
  {name: "Culinaire slagerij De nachtegaal", img: "DeNachtegael.png", url: "https://www.nachtegael-slager-traiteur.be/"},
  {name: "Wijnen Julien", img: "https://leeuwsewielertoeristen.be/lwt1/wp-content/uploads/2024/02/WijnenJulien.png", url: "https://www.lesvinsdejulien.be/"},
  {name: "CAFETARIA MERSELBORRE", img: "mersel-648c75f148ca7553558391.webp", url: "https://menucards.cc/Merselborre"},
  // {name: "GROOTHANDEL GROENTEN", img: "", url: ""},
  {name: "BLOEMEN RUDI & VEERLE", img: "BloemenRudiVeerle.jpg", url: "https://www.leeuwkooptlokaal.be/post/bloemen-rudi-en-veerle"},
  {name: "Bell Tours", img: "Bell_Tours_logo.jpg", url: "https://www.belltours.be/"},
  {name: "Gardening Bruno Niels", img: "bruno-niels-logo2.jpg", url: "http://brunonielsgarden.be/"},
  {name: "EMS-BIKES", img: "ems-bikes-logo.png", url: "https://emsbikes.be/"},
  {name: "IMMO GROOT LEEUW", img: "ImmoGrootLeeuw.png", url: "https://immogrootleeuw.be/"},
  {name: "KBC Sint-Pieters-Leeuw", img: "Logo-KBC-SPL.png", url: "https://www.kbc.be/particulieren/nl/kantoor/4173-SINT-PIETERS-LEEUW-RINK-21.html"},
  {name: "IMMO PICKE", img: "ImmoPicke.png", url: "https://www.immopicke.be/"},
  {name: "BIKELIFE", img: "logo_bikelife.png", url: "https://www.bikelife.be/"},
  {name: "Livingstone ", img: "logo_living-stone.png", url: "https://living-stone.be/"},
  {name: "Thesora", img: "logo_thesora.jpg", url: "https://thesora.be/"},
  {name: "HOF TE BERCHEMVELD", img: "logo-berchemveld.png", url: "https://berchemveld.be/"},
  {name: "HOF DE OUDE SMISSE ", img: "logo_bakkerijhofoudesmisse.png", url: "https://www.bakkerijhofoudesmisse.be/"},
  {name: "MDH Foodservice", img: "logo_mdh.png", url: "https://www.mdhfoodservice.be/"},
  {name: "REVOLTM", img: "logo_revoltm.png", url: "https://revoltm.be/"},
  {name: "FALCO COFFEE", img: "logo_falco.png", url: "https://www.falcofietsbar.be/"},
  {name: "De Spanuit", img: "logo_despanuit.png", url: "https://www.despanuit.be/"},
  {name: "V-BUILD", img: "logo_vbuild.png", url: "https://v-build.be/"},
  {name: "Cafe 't Leeuwke", img: "https://leeuwsewielertoeristen.be/lwt1/wp-content/uploads/2024/03/logo_cafe_tleeuwke.png", url: "https://www.cafe-tleeuwke.com/"},
  {name: "Stedi Cars", img: "https://leeuwsewielertoeristen.be/lwt1/wp-content/uploads/2024/03/logo-stedi_cars.png", url: "https://www.stedicars.be/"},
  {name: "Gorgon Motors", img: "https://leeuwsewielertoeristen.be/lwt1/wp-content/uploads/2024/10/gorgon.png", url: "https://www.gorgonmotors.be/fr/"},
];
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(sponsors);

const marqueeItems = sponsors.map(({ img, url, name }) => genMarqueeItem(img, url, name)).join('\n');

const templateFileContent = `
<div class="marquee">
<div class="marquee-content scroll">
  {{marqueeItems}}
</div>
<div class="marquee-content scroll" aria-hidden="true">
  {{marqueeItems}}
</div>
</div>
`

const finalHTML = templateFileContent.replace(/{{marqueeItems}}/g, marqueeItems);



const styleSheetContent = 
`
.marquee {
  display: flex;
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 1rem;
  user-select: none;
  width: 100%;
  column-gap: 1rem;
}

.marquee-content {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  column-gap: 1rem;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(calc(-100% - 1rem));
  }
}

.scroll {
  animation: scroll 120s linear infinite;
}

.marquee-content img {
  max-height: 70px;
}
`

jQuery("#wp-custom-header").append(
finalHTML
  )
jQuery("<style/>").text(styleSheetContent).appendTo(document.head);
