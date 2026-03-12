const IMG = {
    storeInterior: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/5249c43f6_generated_8d5ed396.png",
    shelves:       "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/9a5bed982_generated_f14c473b.png",
    bags:          "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/81ba25f73_generated_e2af6e65.png",
    customer:      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/e185ac27b_generated_3f1a1e30.png",
    donna:         "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/d5f97784a_generated_23efb102.png",
    uomo:          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1024&q=80",
    bambino:       "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/04737fab9_generated_50492239.png",
    cerimonia:     "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/a823bddb6_generated_3224986c.png",
    abbigliamento: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/00028f1e9_generated_ef649e9a.png",
    exterior:      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/380c86123_generated_25038b50.png",
    battesimi:     "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/1ad260af4_generated_image.png",
    donnaHeels:    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/80c401e70_generated_image.png",
    uomoDress:     "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/632875d88_generated_image.png",
    donnaBoots:    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/bb25894f4_generated_image.png",
    donnaSandals:  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/3d6bd8757_generated_image.png",
    uomoCasual:    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/126c21196_generated_image.png",
    bambinoSchool: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/43d41d97c_generated_image.png",
    handbags:      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/b4c4cd587_generated_image.png",
    accessori:     "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/b501ebeff_generated_image.png",
    womenCloth:    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/32e3f2a6a_generated_image.png",
    battesimiDet:  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69afdee179eed976df81b896/11831e6c9_generated_image.png",
  };
  
  export const STORE_IMAGES = IMG;
  
  export const categories = [
    {
      id: "donna",
      name: "Scarpe donna",
      shortDesc: "Eleganti, casual, sandali e stivali",
      description: "Una selezione pensata per ogni occasione e ogni stile. Dalle scarpe da ufficio agli stivali invernali, dai sandali estivi alle décolleté eleganti.",
      heroImage: IMG.donna,
      subcategories: [
        { id: "decollete-eleganti", name: "Décolleté ed eleganti", image: IMG.donnaHeels },
        { id: "stivali-tronchetti", name: "Stivali e tronchetti", image: IMG.donnaBoots },
        { id: "sandali-estivi", name: "Sandali estivi", image: IMG.donnaSandals },
        { id: "casual-sneakers", name: "Casual e sneakers", image: IMG.donna },
      ],
    },
    {
      id: "uomo",
      name: "Scarpe uomo",
      shortDesc: "Classiche, casual e mocassini",
      description: "Calzature per l'uomo moderno: dalla scarpa elegante da lavoro alla sneaker casual, dal mocassino classico allo stivale robusto.",
      heroImage: IMG.uomo,
      subcategories: [
        { id: "eleganti-classiche", name: "Eleganti e classiche", image: IMG.uomoDress },
        { id: "mocassini", name: "Mocassini", image: IMG.uomo },
        { id: "casual-sneakers-uomo", name: "Casual e sneakers", image: IMG.uomoCasual },
      ],
    },
    {
      id: "scarpecomode",
      name: "Scarpe comode",
      shortDesc: "Comfort, leggerezza e facilità di indossare",
      description: "Pensate per chi non rinuncia al comfort senza sacrificare lo stile. Scarpe leggere, con plantare estraibile, chiusure facili e materiali morbidi per tutta la giornata.",
      heroImage: IMG.uomoCasual,
      subcategories: [
        { id: "comfort-donna", name: "Comfort donna", image: IMG.donna },
        { id: "comfort-uomo", name: "Comfort uomo", image: IMG.uomoCasual },
        { id: "plantare-estraibile", name: "Plantare estraibile", image: IMG.donna },
        { id: "scarpe-leggere", name: "Scarpe leggere", image: IMG.donnaSandals },
        { id: "chiusura-facile", name: "Chiusura facile (velcro o zip)", image: IMG.bambinoSchool },
      ],
    },
    {
      id: "bambino",
      name: "Scarpe bambino",
      shortDesc: "Comode e resistenti per ogni giorno",
      description: "Calzature pensate per i più piccoli: resistenti, comode e sicure. Modelli per ogni stagione e ogni esigenza, dalla scuola al tempo libero.",
      heroImage: IMG.bambino,
      subcategories: [
        { id: "scarpe-scuola", name: "Scarpe da scuola", image: IMG.bambinoSchool },
        { id: "sandali-scarpe-estive", name: "Sandali e scarpe estive", image: IMG.bambino },
        { id: "stivaletti-scarpe-invernali", name: "Stivaletti e scarpe invernali", image: IMG.bambinoSchool },
      ],
    },
    {
      id: "cerimonia",
      name: "Scarpe da cerimonia",
      shortDesc: "Per eventi, matrimoni e occasioni speciali",
      description: "Eleganza e raffinatezza per i momenti più importanti. Scarpe per matrimoni, feste e ogni occasione che richiede un look impeccabile.",
      heroImage: IMG.cerimonia,
      subcategories: [
        { id: "cerimonia-donna", name: "Cerimonia donna", image: IMG.donnaHeels },
        { id: "cerimonia-uomo", name: "Cerimonia uomo", image: IMG.uomoDress },
        { id: "sandali-cerimonia", name: "Sandali cerimonia", image: IMG.donnaSandals },
        { id: "scarpe-basse-eleganti", name: "Scarpe basse eleganti", image: IMG.cerimonia },
      ],
    },
    {
      id: "battesimi",
      name: "Battesimi, Comunioni e Cresime",
      shortDesc: "Calzature e accessori per i sacramenti",
      description: "Momenti speciali meritano scarpe speciali. Trovi da noi una selezione dedicata per battesimi, prime comunioni e cresime: scarpine bianche, modelli eleganti e accessori pensati per rendere unico ogni sacramento.",
      heroImage: IMG.battesimi,
      subcategories: [
        { id: "battesimo", name: "Battesimo", image: IMG.battesimiDet },
        { id: "prima-comunione", name: "Prima Comunione", image: IMG.battesimi },
        { id: "cresima-cerimonie", name: "Cresima e cerimonie", image: IMG.bambinoSchool },
        { id: "accessori-sacra-cerimonia", name: "Accessori sacra cerimonia", image: IMG.accessori },
      ],
    },
    {
      id: "borse",
      name: "Borse e accessori",
      shortDesc: "Borsette, bigiotteria e accessori moda",
      description: "Completa il tuo outfit con la borsa giusta o l'accessorio perfetto. Selezione di borse, portafogli, bigiotteria e molto altro.",
      heroImage: IMG.bags,
      subcategories: [
        { id: "borse-borsette", name: "Borse e borsette", image: IMG.handbags },
        { id: "accessori-bigiotteria", name: "Accessori e bigiotteria", image: IMG.accessori },
        { id: "portafogli-pelletteria", name: "Portafogli e pelletteria", image: IMG.bags },
        { id: "cinture-pelle", name: "Cinture in pelle", image: IMG.handbags },
      ],
    },
    {
      id: "abbigliamento",
      name: "Abbigliamento",
      shortDesc: "Selezione di capi eleganti e casual",
      description: "Una selezione curata di abbigliamento per uomo e donna. Capi eleganti e casual selezionati per qualità e stile, a prezzi accessibili.",
      heroImage: IMG.abbigliamento,
      subcategories: [
        { id: "abbigliamento-donna", name: "Abbigliamento donna", image: IMG.womenCloth },
        { id: "capi-eleganti", name: "Capi eleganti", image: IMG.womenCloth },
        { id: "taglie-comode", name: "Taglie comode", image: IMG.abbigliamento },
      ],
    },
  ];
  
  export function getCategoryById(id) {
    return categories.find((c) => c.id === id) || null;
  }
  
  export function getSubcategoryById(categoryId, subcategoryId) {
    const category = getCategoryById(categoryId);
    return category?.subcategories.find((s) => s.id === subcategoryId) || null;
  }