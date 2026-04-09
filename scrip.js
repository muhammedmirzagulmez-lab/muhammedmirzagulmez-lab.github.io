// Proje Verileri (Array)
const projeVerisi = [
    { baslik: "E-Ticaret Paneli", kategori: "Web", aciklama: "Admin yönetim sistemi." },
    { baslik: "Hava Durumu App", kategori: "Web", aciklama: "Anlık API verisi çeker." },
    { baslik: "Antrenman Takip", kategori: "Mobil", aciklama: "Sporcu takip uygulaması." },
    { baslik: "Yemek Tarifleri", kategori: "Mobil", aciklama: "Offline çalışan tarifler." },
    { baslik: "Kişisel Blog", kategori: "Web", aciklama: "Responsive tasarım örneği." }
];

const projeListesiElemani = document.getElementById("projeListesi");


function projeleriEkranaBas(secilenKategori = "Hepsi") {
    projeListesiElemani.innerHTML = ""; 

    const suzulenProjeler = secilenKategori === "Hepsi" 
        ? projeVerisi 
        : projeVerisi.filter(proje => proje.kategori === secilenKategori);

    suzulenProjeler.map(proje => {
        const kart = document.createElement("div");
        kart.className = "proje-kart";
        kart.innerHTML = `
            <h3>${proje.baslik}</h3>
            <span style="color: var(--vurgu-rengi)">${proje.kategori}</span>
            <p>${proje.aciklama}</p>
        `;
        projeListesiElemani.appendChild(kart);
    });
}

function projeFiltrele(kategori) {
    projeleriEkranaBas(kategori);
}


const temaButonu = document.getElementById("temaDegistirici");
temaButonu.addEventListener("click", () => {
    const mevcutTema = document.body.getAttribute("data-tema");
    if (mevcutTema === "dark") {
        document.body.removeAttribute("data-tema");
    } else {
        document.body.setAttribute("data-tema", "dark");
    }
});


const daktiloMetni = "Yazılım Geliştirici & Tasarımcı";
let harfSirasi = 0;
function daktiloYaz() {
    if (harfSirasi < daktiloMetni.length) {
        document.getElementById("daktiloMetni").innerHTML += daktiloMetni.charAt(harfSirasi);
        harfSirasi++;
        setTimeout(daktiloYaz, 100);
    }
}


const imlec = document.getElementById("ozelImlec");
document.addEventListener("mousemove", (e) => {
    imlec.style.left = e.clientX + "px";
    imlec.style.top = e.clientY + "px";
});

projeleriEkranaBas();
daktiloYaz();