const dataEmplois = [
  {
    "id": 1,
    "image":"https://img.icons8.com/?size=100&id=18108&format=png&color=000000",
    "nom_du_poste": "Laboureur",
    "date_debut": "1350-03-15",
    "duree": "À vie ou selon les récoltes",
    "description_du_poste": "Travail aux champs pour cultiver blé, orge et avoine. Labourage avec charrue et bœufs.",
    "qualification_requise": "Endurance physique, connaissance des saisons et de l'irrigation.",
    "categorie": "Agriculture",
    "salaire": "10 écus/mois"
  },
  {
    "id": 2,
    "image": "https://img.icons8.com/?size=100&id=D45ofLrj1Mp5&format=png&color=000000",
    "nom_du_poste": "Moine copiste",
    "date_debut": "1350-05-01",
    "duree": "Contrat de 10 ans ou jusqu'à l'illumination",
    "description_du_poste": "Recopier et enluminer des manuscrits religieux et savants dans le scriptorium d’un monastère.",
    "qualification_requise": "Maîtrise du latin, patience extrême et bonne vue.",
    "categorie": "Intellectuelle",
    "salaire": "5 écus/mois"
  },
  {
    "id": 3,
    "image":"https://img.icons8.com/?size=100&id=CxXz8glzbSOX&format=png&color=000000",
    "nom_du_poste": "Forgeron",
    "date_debut": "1350-07-10",
    "duree": "Indéfinie selon la production et la demande",
    "description_du_poste": "Forge d'armes, outils agricoles et ferronnerie pour le village et les soldats.",
    "qualification_requise": "Grande force, habileté avec le feu et le métal, maîtrise du marteau.",
    "categorie": "Manuel",
    "salaire": "25 écus/mois"
  },
  {
    "id": 4,
    "image":"https://img.icons8.com/?size=100&id=9RnNNaT7AD3N&format=png&color=000000",
    "nom_du_poste": "Écuyer",
    "date_debut": "1350-09-01",
    "duree": "Jusqu'à l'adoubement comme chevalier",
    "description_du_poste": "Assister un chevalier dans ses tâches : entretien de l’armure, soins du destrier et entraînement au combat.",
    "qualification_requise": "Courage, loyauté, bonne maîtrise de l'équitation et du maniement des armes.",
    "categorie": "Militaire",
    "salaire": "12 écus/mois"
  },
  {
    "id": 5,
    "image":"https://img.icons8.com/?size=100&id=9RnNNaT7AD3N&format=png&color=000000",
    "nom_du_poste": "Archer du seigneur",
    "date_debut": "1350-06-20",
    "duree": "Jusqu'à la fin du service militaire ou décès",
    "description_du_poste": "Défense du château et participation aux batailles en tant que tireur à l’arc.",
    "qualification_requise": "Précision, endurance et capacité à tendre un arc long.",
    "categorie": "Militaire",
    "salaire": "15 écus/mois"
  },
  {
    "id": 6,
    "image":"https://img.icons8.com/?size=100&id=18108&format=png&color=000000",
    "nom_du_poste": "Meunier",
    "date_debut": "1350-04-10",
    "duree": "À vie",
    "description_du_poste": "Exploite un moulin pour transformer les céréales en farine.",
    "qualification_requise": "Connaissance des moulins à vent ou à eau, gestion du grain.",
    "categorie": "Agriculture",
    "salaire": "18 écus/mois"
  },
  {
    "id": 7,
    "image": "https://img.icons8.com/?size=100&id=7844C5fv8ZWK&format=png&color=000000",
    "nom_du_poste": "Alchimiste",
    "date_debut": "1350-08-22",
    "duree": "Jusqu'à la découverte de la pierre philosophale",
    "description_du_poste": "Étudie la transformation des matières et la création d’élixirs.",
    "qualification_requise": "Connaissance des herbes, des métaux et des principes alchimiques.",
    "categorie": "Santé",
    "salaire": "20 écus/mois"
  },
  {
    "id": 8,
    "image":"https://img.icons8.com/?size=100&id=CxXz8glzbSOX&format=png&color=000000",
    "nom_du_poste": "Tailleur de pierre",
    "date_debut": "1350-05-15",
    "duree": "Durée du chantier",
    "description_du_poste": "Sculpter la pierre pour les cathédrales et châteaux.",
    "qualification_requise": "Maîtrise des outils de taille, force physique.",
    "categorie": "Manuel",
    "salaire": "22 écus/mois"
  },
  {
    "id": 9,
    "image":"https://img.icons8.com/?size=100&id=tvWu31iIQDtD&format=png&color=000000",
    "nom_du_poste": "Héraut",
    "date_debut": "1350-07-05",
    "duree": "Mandat royal",
    "description_du_poste": "Annonce les nouvelles du roi et organise les tournois.",
    "qualification_requise": "Bonne diction, sens de l’étiquette et de la diplomatie.",
    "categorie": "Vie de château",
    "salaire": "30 écus/mois"
  },
  {
    "id": 10,
    "image":"https://img.icons8.com/?size=100&id=9RnNNaT7AD3N&format=png&color=000000",
    "nom_du_poste": "Chevalier",
    "date_debut": "1350-02-12",
    "duree": "Jusqu'à la retraite ou la mort",
    "description_du_poste": "Combattre pour son seigneur et défendre son fief.",
    "qualification_requise": "Maîtrise des armes, équitation et valeurs chevaleresques.",
    "categorie": "Militaire",
    "salaire": "50 écus/mois"
  },
  {
    "id": 11,
    "image":"https://img.icons8.com/?size=100&id=18108&format=png&color=000000",
    "nom_du_poste": "Vigneron",
    "date_debut": "1350-03-20",
    "duree": "Toute l’année selon les saisons",
    "description_du_poste": "Travail de la vigne et production de vin.",
    "qualification_requise": "Savoir-faire en culture du raisin et fermentation.",
    "categorie": "Agriculture",
    "salaire": "14 écus/mois"
  },
  {
    "id": 12,
    "image": "https://img.icons8.com/?size=100&id=D45ofLrj1Mp5&format=png&color=000000",
    "nom_du_poste": "Scribe royal",
    "date_debut": "1350-06-01",
    "duree": "Contrat de 5 ans renouvelable",
    "description_du_poste": "Rédaction de documents officiels pour la cour du roi.",
    "qualification_requise": "Maîtrise de l’écriture et du droit féodal.",
    "categorie": "Intellectuelle",
    "salaire": "28 écus/mois"
  },
    {
    "id": 13,
    "image":"https://img.icons8.com/?size=100&id=CxXz8glzbSOX&format=png&color=000000",
    "nom_du_poste": "Tisserand",
    "date_debut": "1350-05-22",
    "duree": "À vie",
    "description_du_poste": "Fabrication de vêtements et tapisseries.",
    "qualification_requise": "Compétence dans le tissage et manipulation des métiers à tisser.",
    "categorie": "Manuel",
    "salaire": "16 écus/mois"
  },
  {
    "id": 14,
    "image":"https://img.icons8.com/?size=100&id=tvWu31iIQDtD&format=png&color=000000",
    "nom_du_poste": "Intendant du château",
    "date_debut": "1350-07-12",
    "duree": "À vie",
    "description_du_poste": "Gestion des stocks, des serviteurs et de l’entretien du château.",
    "qualification_requise": "Sens de l'organisation, gestion des comptes.",
    "categorie": "Vie de château",
    "salaire": "35 écus/mois"
  },
  {
    "id": 15,
    "image":"https://img.icons8.com/?size=100&id=9RnNNaT7AD3N&format=png&color=000000",
    "nom_du_poste": "Mercenaire",
    "date_debut": "1350-04-30",
    "duree": "Contrat selon les guerres",
    "description_du_poste": "Combattre pour de l'or, peu importe le camp.",
    "qualification_requise": "Expérience au combat, endurance et stratégie.",
    "categorie": "Militaire",
    "salaire": "30 écus/mois"
  },
{
    "id": 16,
    "image":"https://img.icons8.com/?size=100&id=tvWu31iIQDtD&format=png&color=000000",
    "nom_du_poste": "Bourreau",
    "date_debut": "1350-06-15",
    "duree": "À vie ou selon mandat royal",
    "description_du_poste": "Exécution des peines de justice, torture des prisonniers et maintien de l'ordre.",
    "qualification_requise": "Nerveux d'acier, connaissance des instruments de torture et sens du devoir.",
    "categorie": "Vie de château",
    "salaire": "40 écus/mois"
  },
  {
    "id": 17,
    "image": "https://img.icons8.com/?size=100&id=7844C5fv8ZWK&format=png&color=000000",
    "nom_du_poste": "Apothicaire",
    "date_debut": "1350-07-25",
    "duree": "Indéfinie",
    "description_du_poste": "Préparation de remèdes à base de plantes, consultation et soins pour la population.",
    "qualification_requise": "Connaissance des herbes, médecine de base et alchimie.",
    "categorie": "Santé",
    "salaire": "25 écus/mois"
  },
  {
    "id": 18,
    "image":"https://img.icons8.com/?size=100&id=JokzLDPCnEtE&format=png&color=000000",
    "nom_du_poste": "Boulanger",
    "date_debut": "1350-03-10",
    "duree": "À vie",
    "description_du_poste": "Cuisson du pain pour la population, gestion du four communal.",
    "qualification_requise": "Savoir-faire en panification, endurance et respect des quantités de farine.",
    "categorie": "Alimentation",
    "salaire": "12 écus/mois"
  },
  {
    "id": 19,
    "image":"https://img.icons8.com/?size=100&id=tvWu31iIQDtD&format=png&color=000000",
    "nom_du_poste": "Troubadour",
    "date_debut": "1350-09-05",
    "duree": "Jusqu'à l'épuisement de l'inspiration",
    "description_du_poste": "Chant, poésie et animation des fêtes dans les cours seigneuriales et villages.",
    "qualification_requise": "Talent musical, créativité et éloquence.",
    "categorie": "Vie de château",
    "salaire": "12 écus/mois"
  },
  {
    "id": 20,
    "image":"https://img.icons8.com/?size=100&id=CxXz8glzbSOX&format=png&color=000000",
    "nom_du_poste": "Maçon",
    "date_debut": "1350-04-22",
    "duree": "Selon les chantiers",
    "description_du_poste": "Construction de bâtiments, réparation des fortifications et édifices religieux.",
    "qualification_requise": "Savoir-faire en architecture, maniement des outils de construction.",
    "categorie": "Manuel",
    "salaire": "8 écus/mois"
  }
]

export default dataEmplois