// ============================================================
//  LISTE DES VOITURES — Modifiez ce fichier pour ajouter/supprimer/modifier les voitures
//  Pas besoin de toucher au code HTML !
//
//  Pour ajouter une voiture : copiez-collez un bloc et changez les valeurs
//  Pour supprimer : supprimez le bloc entier
//  Pour changer le prix : changez la valeur "price"
//
//  category possible : économique, suv, 4×4, premium, monospaces
//  (vous pouvez combiner avec des virgules : "suv,4×4,premium")
//
//  label_key / gearbox_key / fuel_key : clés de traduction (voir data/lang.js)
// ============================================================

var CARS_DATA = [
  {
    "id": "logan",
    "name": "Dacia <em>Logan</em>",
    "category": "économique",
    "label": "Berline · Économique",
    "label_key": "label_berline_eco",
    "image": "assets/cars/logan.webp",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Diesel",
    "fuel_key": "fuel_diesel",
    "price": 280
  },
  {
    "id": "3az",
    "name": "Dacia <em>mizo</em>",
    "category": "économique",
    "label": "Berline · Économique",
    "label_key": "label_berline_eco",
    "image": "assets/cars/logan.webp",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Diesel",
    "fuel_key": "fuel_diesel",
    "price": 30
  },
    {
    "id": "cc",
    "name": "cc <em>cc</em>",
    "category": "économique",
    "label": "Berline · Économique",
    "label_key": "label_berline_eco",
    "image": "assets/cars/logan.webp",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Diesel",
    "fuel_key": "fuel_diesel",
    "price": 40
  },
  {
    "id": "abdel",
    "name": "abdel <em>test</em>",
    "category": "économique",
    "label": "Berline · Économique",
    "label_key": "label_berline_eco",
    "image": "assets/cars/logan.webp",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Diesel",
    "fuel_key": "fuel_diesel",
    "price": 280
  },
  {
    "id": "sandero",
    "name": "Dacia <em>Sandero</em>",
    "category": "économique",
    "label": "Économique",
    "label_key": "label_economy",
    "image": "assets/cars/sandero.jpg",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Diesel",
    "fuel_key": "fuel_diesel",
    "price": 250
  },
  {
    "id": "tucson",
    "name": "Hyundai <em>Tucson</em>",
    "category": "suv",
    "label": "SUV Compact",
    "label_key": "label_suv_compact",
    "image": "assets/cars/tucson.jpg",
    "seats": "5",
    "gearbox": "Automatique",
    "gearbox_key": "gearbox_auto",
    "fuel": "Diesel",
    "fuel_key": "fuel_diesel",
    "price": 650
  },
  {
    "id": "hilux",
    "name": "Toyota <em>Hilux</em>",
    "category": "4×4",
    "label": "4×4 / Tout-terrain",
    "label_key": "label_4x4_offroad",
    "image": "assets/cars/hilux.jpg",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "traction": "4WD",
    "price": 1100
  },
  {
    "id": "clio",
    "name": "Renault <em>Clio</em>",
    "category": "économique",
    "label": "Compacte",
    "label_key": "label_compact",
    "image": "assets/cars/clio.jpg",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Essence",
    "fuel_key": "fuel_gasoline",
    "price": 320
  },
  {
    "id": "landcruiser",
    "name": "Toyota <em>Land Cruiser</em>",
    "category": "suv,4×4,premium",
    "label": "SUV Premium",
    "label_key": "label_suv_premium",
    "image": "assets/cars/landcruiser.jpg",
    "seats": "7",
    "gearbox": "Automatique",
    "gearbox_key": "gearbox_auto",
    "traction": "4WD",
    "price": 1800
  },
  {
    "id": "duster",
    "name": "Dacia <em>Duster</em>",
    "category": "suv,4×4",
    "label": "SUV · 4×4",
    "label_key": "label_suv_4x4",
    "image": "assets/cars/duster.jpg",
    "seats": "5",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "traction": "4WD",
    "price": 550
  },
  {
    "id": "jogger",
    "name": "Dacia <em>Jogger</em>",
    "category": "monospaces",
    "label": "Familiale · 7 places",
    "label_key": "label_family_7",
    "image": "assets/cars/jogger.png",
    "seats": "7",
    "gearbox": "Manuelle",
    "gearbox_key": "gearbox_manual",
    "fuel": "Essence",
    "fuel_key": "fuel_gasoline",
    "price": 450
  },
  {
    "id": "vito",
    "name": "Mercedes <em>Vito</em>",
    "category": "monospaces",
    "label": "Monospace · 9 places",
    "label_key": "label_minivan_9",
    "image": "assets/cars/vito.jpg",
    "seats": "9",
    "gearbox": "Automatique",
    "gearbox_key": "gearbox_auto",
    "bagages": "XL",
    "price": 1400
  }
];
