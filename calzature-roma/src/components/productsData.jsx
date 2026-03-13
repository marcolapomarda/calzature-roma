// const IMG = {
//     donnaHeels: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/80c401e70_generated_image.png",
//     donnaBoots: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/bb25894f4_generated_image.png",
//     donnaSandals: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/3d6bd8757_generated_image.png",
//     donna: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/d5f97784a_generated_23efb102.png",
//     uomoDress: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/632875d88_generated_image.png",
//     uomo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1024&q=80",
//     uomoCasual: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/126c21196_generated_image.png",
//     bambinoSchool: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/43d41d97c_generated_image.png",
//     bambino: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/04737fab9_generated_50492239.png",
//     battesimi: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/1ad260af4_generated_image.png",
//     cerimonia: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/a823bddb6_generated_3224986c.png",
//     handbags: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/b4c4cd587_generated_image.png",
//     accessori: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/b501ebeff_generated_image.png",
//     bags: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/81ba25f73_generated_e2af6e65.png",
//     womenCloth: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/32e3f2a6a_generated_image.png",
//     abbigliamento: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/00028f1e9_generated_ef649e9a.png",
//     battesimiDet: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/11831e6c9_generated_image.png",
//   };
  
//   export const products = [
//     // SCARPE DONNA - Décolleté ed eleganti
//     { id: "d1", categoryId: "donna", subcategoryId: "decollete-eleganti", name: "Décolleté nera tacco alto", description: "Scarpa elegante con tacco 9cm, perfetta per cerimonie e serate.", features: ["Tacco 9cm", "Tomaia in pelle", "Suola antiscivolo", "Colore nero"], images: [IMG.donnaHeels, IMG.cerimonia, IMG.donna] },
//     { id: "d2", categoryId: "donna", subcategoryId: "decollete-eleganti", name: "Décolleté beige tacco medio", description: "Comoda e raffinata, con tacco 6cm ideale per l'ufficio.", features: ["Tacco 6cm", "Vera pelle", "Fodera traspirante", "Colore beige"], images: [IMG.cerimonia, IMG.donnaHeels] },
//     { id: "d3", categoryId: "donna", subcategoryId: "decollete-eleganti", name: "Pump nero vernice", description: "Scarpa da sera in vernice lucida con tacco 8cm.", features: ["Tacco 8cm", "Vernice lucida", "Punta arrotondata", "Colore nero"], images: [IMG.donnaHeels, IMG.cerimonia] },
    
//     // SCARPE DONNA - Stivali e tronchetti
//     { id: "d4", categoryId: "donna", subcategoryId: "stivali-tronchetti", name: "Stivale nero al ginocchio", description: "Stivale elegante con zip laterale e tacco comodo.", features: ["Altezza ginocchio", "Zip laterale", "Tacco 5cm", "Pelle sintetica"], images: [IMG.donnaBoots, IMG.donna] },
//     { id: "d5", categoryId: "donna", subcategoryId: "stivali-tronchetti", name: "Tronchetto marrone", description: "Tronchetto casual con tacco basso, perfetto per l'autunno.", features: ["Tacco 4cm", "Chiusura con lacci", "Suola gomma", "Colore marrone"], images: [IMG.donnaBoots, IMG.donna] },
    
//     // SCARPE DONNA - Sandali estivi
//     { id: "d6", categoryId: "donna", subcategoryId: "sandali-estivi", name: "Sandalo gioiello argento", description: "Sandalo elegante con dettagli gioiello per le serate estive.", features: ["Tacco 7cm", "Cinturino regolabile", "Strass decorativi", "Colore argento"], images: [IMG.donnaSandals, IMG.cerimonia] },
//     { id: "d7", categoryId: "donna", subcategoryId: "sandali-estivi", name: "Sandalo flat cuoio", description: "Sandalo piatto in cuoio, comodo e versatile.", features: ["Suola piatta", "Vera pelle", "Chiusura regolabile", "Colore cuoio"], images: [IMG.donnaSandals, IMG.donna] },
//     { id: "d8", categoryId: "donna", subcategoryId: "sandali-estivi", name: "Zeppa estiva beige", description: "Sandalo con zeppa 6cm per l'estate.", features: ["Zeppa 6cm", "Cinturino caviglia", "Suola corda", "Colore beige"], images: [IMG.donnaSandals, IMG.donna] },
    
//     // SCARPE DONNA - Casual e sneakers
//     { id: "d9", categoryId: "donna", subcategoryId: "casual-sneakers", name: "Sneaker bianca donna", description: "Sneaker sportiva con suola in gomma, perfetta per il tempo libero.", features: ["Suola ammortizzata", "Tomaia in ecopelle", "Chiusura con lacci", "Colore bianco"], images: [IMG.donna, IMG.donnaSandals] },
//     { id: "d10", categoryId: "donna", subcategoryId: "casual-sneakers", name: "Ballerina nera", description: "Ballerina classica in pelle morbida.", features: ["Pelle morbida", "Suola flessibile", "Slip-on", "Colore nero"], images: [IMG.donna, IMG.donnaBoots] },
    
//     // SCARPE UOMO - Eleganti e classiche
//     { id: "u1", categoryId: "uomo", subcategoryId: "eleganti-classiche", name: "Francesina nera pelle", description: "Scarpa elegante stringata in vera pelle per cerimonie.", features: ["Vera pelle", "Suola cuoio", "Chiusura con lacci", "Colore nero"], images: [IMG.uomoDress, IMG.cerimonia] },
//     { id: "u2", categoryId: "uomo", subcategoryId: "eleganti-classiche", name: "Derby marrone", description: "Scarpa classica da ufficio in pelle marrone.", features: ["Pelle bovina", "Suola in cuoio", "Stringata", "Colore marrone"], images: [IMG.uomoDress, IMG.uomo] },
//     { id: "u3", categoryId: "uomo", subcategoryId: "eleganti-classiche", name: "Oxford nera", description: "Scarpa elegante con punta arrotondata.", features: ["Vera pelle", "Suola cuoio", "Stringata", "Colore nero"], images: [IMG.uomoDress, IMG.cerimonia] },
    
//     // SCARPE UOMO - Mocassini
//     { id: "u4", categoryId: "uomo", subcategoryId: "mocassini", name: "Mocassino blu elegante", description: "Mocassino slip-on in camoscio blu, versatile e raffinato.", features: ["Camoscio", "Soletta estraibile", "Slip-on", "Colore blu"], images: [IMG.uomo, IMG.uomoDress] },
//     { id: "u5", categoryId: "uomo", subcategoryId: "mocassini", name: "Mocassino marrone pelle", description: "Mocassino classico in vera pelle.", features: ["Vera pelle", "Suola gomma", "Slip-on", "Colore marrone"], images: [IMG.uomo, IMG.uomoDress] },
    
//     // SCARPE UOMO - Casual e sneakers
//     { id: "u6", categoryId: "uomo", subcategoryId: "casual-sneakers-uomo", name: "Sneaker uomo grigia", description: "Sneaker sportiva con suola in gomma ammortizzata.", features: ["Suola ammortizzata", "Tomaia tessuto", "Stringata", "Colore grigio"], images: [IMG.uomoCasual, IMG.uomo] },
//     { id: "u7", categoryId: "uomo", subcategoryId: "casual-sneakers-uomo", name: "Scarpa casual beige", description: "Scarpa casual in tela con suola in gomma.", features: ["Tela traspirante", "Suola gomma", "Lacci", "Colore beige"], images: [IMG.uomoCasual, IMG.uomo] },
    
//     // SCARPE COMODE - Comfort donna
//     { id: "c1", categoryId: "scarpecomode", subcategoryId: "comfort-donna", name: "Scarpa comfort nera donna", description: "Scarpa anatomica con plantare estraibile.", features: ["Plantare estraibile", "Pelle morbida", "Suola ammortizzata", "Colore nero"], images: [IMG.donna, IMG.donnaSandals] },
//     { id: "c2", categoryId: "scarpecomode", subcategoryId: "comfort-donna", name: "Ballerina comfort beige", description: "Ballerina con suola anatomica.", features: ["Suola anatomica", "Tomaia morbida", "Slip-on", "Colore beige"], images: [IMG.donna, IMG.donnaSandals] },
    
//     // SCARPE COMODE - Comfort uomo
//     { id: "c3", categoryId: "scarpecomode", subcategoryId: "comfort-uomo", name: "Scarpa comfort marrone uomo", description: "Calzatura con tecnologia comfort e suola antiscivolo.", features: ["Suola antiscivolo", "Tomaia morbida", "Plantare anatomico", "Colore marrone"], images: [IMG.uomoCasual, IMG.uomo] },
//     { id: "c4", categoryId: "scarpecomode", subcategoryId: "comfort-uomo", name: "Mocassino comfort blu", description: "Mocassino con soletta memory foam.", features: ["Memory foam", "Pelle morbida", "Slip-on", "Colore blu"], images: [IMG.uomo, IMG.uomoCasual] },
    
//     // SCARPE COMODE - Plantare estraibile
//     { id: "c5", categoryId: "scarpecomode", subcategoryId: "plantare-estraibile", name: "Scarpa plantare estraibile nero", description: "Scarpa con plantare estraibile per ortesi personalizzate.", features: ["Plantare estraibile", "Apertura ampia", "Velcro regolabile", "Colore nero"], images: [IMG.donna, IMG.uomoCasual] },
    
//     // SCARPE COMODE - Scarpe leggere
//     { id: "c6", categoryId: "scarpecomode", subcategoryId: "scarpe-leggere", name: "Sneaker ultraleggera", description: "Sneaker ultraleggera e traspirante.", features: ["Peso 200g", "Tomaia mesh", "Suola EVA", "Colore grigio"], images: [IMG.uomoCasual, IMG.donna] },
    
//     // SCARPE COMODE - Chiusura facile
//     { id: "c7", categoryId: "scarpecomode", subcategoryId: "chiusura-facile", name: "Scarpa velcro grigio", description: "Scarpa con chiusura a strappo per facilità d'uso.", features: ["Chiusura velcro", "Apertura ampia", "Leggera", "Colore grigio"], images: [IMG.bambinoSchool, IMG.donna] },
    
//     // SCARPE BAMBINO - Scarpe da scuola
//     { id: "b1", categoryId: "bambino", subcategoryId: "scarpe-scuola", name: "Scarpa scuola blu", description: "Scarpa resistente con rinforzi sulla punta.", features: ["Suola antiscivolo", "Rinforzi protettivi", "Chiusura velcro", "Colore blu"], images: [IMG.bambinoSchool, IMG.bambino] },
//     { id: "b2", categoryId: "bambino", subcategoryId: "scarpe-scuola", name: "Sneaker bambino rossa", description: "Sneaker sportiva per la scuola con luci LED.", features: ["Luci LED", "Suola ammortizzata", "Lacci elastici", "Colore rosso"], images: [IMG.bambino, IMG.bambinoSchool] },
    
//     // SCARPE BAMBINO - Sandali e scarpe estive
//     { id: "b3", categoryId: "bambino", subcategoryId: "sandali-scarpe-estive", name: "Sandalo bambino blu", description: "Sandalo estivo con chiusura regolabile.", features: ["Cinturini regolabili", "Suola antiscivolo", "Leggero", "Colore blu"], images: [IMG.bambino, IMG.bambinoSchool] },
    
//     // SCARPE BAMBINO - Stivaletti e scarpe invernali
//     { id: "b4", categoryId: "bambino", subcategoryId: "stivaletti-scarpe-invernali", name: "Stivaletto invernale nero", description: "Stivaletto caldo e impermeabile.", features: ["Impermeabile", "Fodera calda", "Suola antiscivolo", "Colore nero"], images: [IMG.bambinoSchool, IMG.bambino] },
    
//     // CERIMONIA - Cerimonia donna
//     { id: "ce1", categoryId: "cerimonia", subcategoryId: "cerimonia-donna", name: "Décolleté argento cerimonia", description: "Scarpa elegante con tacco per matrimoni e feste.", features: ["Tacco 8cm", "Glitter argentati", "Suola antiscivolo", "Colore argento"], images: [IMG.cerimonia, IMG.donnaHeels] },
//     { id: "ce2", categoryId: "cerimonia", subcategoryId: "cerimonia-donna", name: "Pump raso rosa", description: "Scarpa da cerimonia in raso con tacco.", features: ["Tacco 7cm", "Raso pregiato", "Punta arrotondata", "Colore rosa"], images: [IMG.donnaHeels, IMG.cerimonia] },
    
//     // CERIMONIA - Cerimonia uomo
//     { id: "ce3", categoryId: "cerimonia", subcategoryId: "cerimonia-uomo", name: "Francesina nera vernice", description: "Scarpa da cerimonia in vernice lucida.", features: ["Vernice lucida", "Suola cuoio", "Stringata", "Colore nero"], images: [IMG.uomoDress, IMG.cerimonia] },
    
//     // CERIMONIA - Sandali cerimonia
//     { id: "ce4", categoryId: "cerimonia", subcategoryId: "sandali-cerimonia", name: "Sandalo gioiello oro", description: "Sandalo elegante con strass e dettagli dorati.", features: ["Strass decorativi", "Tacco 7cm", "Cinturino caviglia", "Colore oro"], images: [IMG.donnaSandals, IMG.cerimonia] },
    
//     // CERIMONIA - Scarpe basse eleganti
//     { id: "ce5", categoryId: "cerimonia", subcategoryId: "scarpe-basse-eleganti", name: "Ballerina raso bianco", description: "Ballerina elegante per cerimonie.", features: ["Raso bianco", "Fiocco decorativo", "Suola antiscivolo", "Colore bianco"], images: [IMG.cerimonia, IMG.donna] },
    
//     // BATTESIMI - Battesimo
//     { id: "ba1", categoryId: "battesimi", subcategoryId: "battesimo", name: "Scarpina bianca neonato", description: "Delicata scarpina per battesimo in pelle bianca.", features: ["Pelle morbida", "Suola flessibile", "Chiusura regolabile", "Colore bianco"], images: [IMG.battesimi, IMG.bambino] },
//     { id: "ba2", categoryId: "battesimi", subcategoryId: "battesimo", name: "Scarpina avorio battesimo", description: "Scarpina cerimonia in pelle avorio.", features: ["Pelle avorio", "Dettagli ricamati", "Suola morbida", "Colore avorio"], images: [IMG.battesimiDet, IMG.battesimi] },
    
//     // BATTESIMI - Prima Comunione
//     { id: "ba3", categoryId: "battesimi", subcategoryId: "prima-comunione", name: "Ballerina bianca bambina", description: "Ballerina elegante per la prima comunione.", features: ["Ecopelle bianca", "Fiocco decorativo", "Suola antiscivolo", "Colore bianco"], images: [IMG.battesimi, IMG.bambino] },
    
//     // BATTESIMI - Cresima e cerimonie
//     { id: "ba4", categoryId: "battesimi", subcategoryId: "cresima-cerimonie", name: "Scarpa cerimonia ragazzo", description: "Scarpa elegante per cresima e cerimonie.", features: ["Pelle nera", "Stringata", "Suola gomma", "Colore nero"], images: [IMG.bambinoSchool, IMG.battesimi] },
    
//     // BATTESIMI - Accessori sacra cerimonia
//     { id: "ba5", categoryId: "battesimi", subcategoryId: "accessori-sacra-cerimonia", name: "Borsetta comunione bianca", description: "Piccola borsetta coordinata per la comunione.", features: ["Tracolla removibile", "Chiusura magnetica", "Dettagli in pizzo", "Colore bianco"], images: [IMG.accessori, IMG.battesimi] },
    
//     // BORSE - Borse e borsette
//     { id: "bo1", categoryId: "borse", subcategoryId: "borse-borsette", name: "Borsa a spalla nera", description: "Borsa capiente in ecopelle con tracolla.", features: ["Ecopelle", "Tracolla regolabile", "Tasche interne", "Colore nero"], images: [IMG.handbags, IMG.bags] },
//     { id: "bo2", categoryId: "borse", subcategoryId: "borse-borsette", name: "Clutch elegante argento", description: "Pochette per serate ed eventi.", features: ["Catena removibile", "Chiusura magnetica", "Compatta", "Colore argento"], images: [IMG.bags, IMG.handbags] },
    
//     // BORSE - Accessori e bigiotteria
//     { id: "bo3", categoryId: "borse", subcategoryId: "accessori-bigiotteria", name: "Collana perle", description: "Collana con perle sintetiche per occasioni eleganti.", features: ["Perle sintetiche", "Chiusura regolabile", "Lunghezza 45cm", "Colore avorio"], images: [IMG.accessori, IMG.bags] },
    
//     // BORSE - Portafogli e pelletteria
//     { id: "bo4", categoryId: "borse", subcategoryId: "portafogli-pelletteria", name: "Portafoglio pelle marrone", description: "Portafoglio classico in vera pelle.", features: ["Vera pelle", "Porta carte", "Porta monete", "Colore marrone"], images: [IMG.bags, IMG.handbags] },
    
//     // BORSE - Cinture in pelle
//     { id: "bo5", categoryId: "borse", subcategoryId: "cinture-pelle", name: "Cintura pelle marrone", description: "Cintura classica in vera pelle con fibbia.", features: ["Vera pelle", "Fibbia metallica", "Larghezza 3.5cm", "Colore marrone"], images: [IMG.accessori, IMG.handbags] },
    
//     // ABBIGLIAMENTO - Abbigliamento donna
//     { id: "ab1", categoryId: "abbigliamento", subcategoryId: "abbigliamento-donna", name: "Camicia bianca elegante", description: "Camicia in cotone per l'ufficio o cerimonie.", features: ["Cotone 100%", "Collo classico", "Chiusura bottoni", "Colore bianco"], images: [IMG.womenCloth, IMG.abbigliamento] },
    
//     // ABBIGLIAMENTO - Capi eleganti
//     { id: "ab2", categoryId: "abbigliamento", subcategoryId: "capi-eleganti", name: "Abito nero elegante", description: "Abito lungo per cerimonie ed eventi.", features: ["Tessuto elasticizzato", "Zip posteriore", "Linea slim", "Colore nero"], images: [IMG.womenCloth, IMG.abbigliamento] },
    
//     // ABBIGLIAMENTO - Taglie comode
//     { id: "ab3", categoryId: "abbigliamento", subcategoryId: "taglie-comode", name: "Pantalone comodo beige", description: "Pantalone con elastico in vita, disponibile in taglie comode.", features: ["Elastico in vita", "Tessuto stretch", "Tasche laterali", "Colore beige"], images: [IMG.abbigliamento, IMG.womenCloth] },
//   ];
  
//   export function getProductById(id) {
//     return products.find((p) => p.id === id) || null;
//   }
  
//   export function getProductsByCategory(categoryId) {
//     return products.filter((p) => p.categoryId === categoryId);
//   }
  
//   export function getProductsBySubcategory(categoryId, subcategoryId) {
//     return products.filter((p) => p.categoryId === categoryId && p.subcategoryId === subcategoryId);
//   }