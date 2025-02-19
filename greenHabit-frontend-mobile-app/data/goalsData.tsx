export type MiniTask = {
  id: number;
  title: string;
  completed: boolean;
};

export type Goal = {
  id: number;
  title: string;
  category: 'Énergie' | 'Déchets' | 'Transport' | 'Alimentation' | 'Eau' | 'Consommation';
  miniTasks: MiniTask[];
  
};

export const goalsData: Goal[] = [
  {
    id: 1,
    title: 'Réduire la consommation d’énergie',
    category: 'Énergie', // Ajoutez cette ligne
    miniTasks: [
      { id: 1, title: 'Éteindre les appareils en veille', completed: false },
      { id: 2, title: 'Remplacer une ampoule classique par une LED', completed: false },
      { id: 3, title: 'Utiliser des appareils électroménagers en mode éco', completed: false },
      { id: 4, title: 'Débrancher les chargeurs lorsqu’ils ne sont pas utilisés', completed: false },
    ],
  },
  {
    id: 2,
    title: 'Réduire les déchets plastiques',
    category: 'Déchets', // Ajoutez cette ligne
    miniTasks: [
      { id: 1, title: 'Utiliser un sac réutilisable pour les courses', completed: false },
      { id: 2, title: 'Éviter les produits à usage unique', completed: false },
      { id: 3, title: 'Acheter en vrac', completed: false },
      { id: 4, title: 'Utiliser des contenants réutilisables', completed: false },
    ],
  },
  {
    id: 3,
    title: 'Augmenter l’utilisation de transports écoresponsables',
    category: 'Transport', // Ajoutez cette ligne
    miniTasks: [
      { id: 1, title: 'Utiliser les transports en commun', completed: false },
      { id: 2, title: 'Faire du covoiturage', completed: false },
      { id: 3, title: 'Marcher ou faire du vélo pour les petits trajets', completed: false },
      { id: 4, title: 'Participer à des programmes de partage de voitures', completed: false },
    ],
  },
  {
    id: 4,
    title: 'Adopter une alimentation locale et de saison',
    category: 'Alimentation', // Ajoutez cette ligne
    miniTasks: [
      { id: 1, title: 'Acheter des fruits et légumes de saison', completed: false },
      { id: 2, title: 'Privilégier les produits locaux', completed: false },
      { id: 3, title: 'Réduire la consommation de viande', completed: false },
      { id: 4, title: 'Essayer des recettes végétariennes', completed: false },
    ],
  },
  {
    id: 5,
    title: 'Réduire la consommation d’eau',
    category: 'Eau', // Ajoutez cette ligne
    miniTasks: [
      { id: 1, title: 'Prendre des douches plus courtes', completed: false },
      { id: 2, title: 'Réparer les fuites', completed: false },
      { id: 3, title: 'Utiliser un économiseur d’eau pour les robinets', completed: false },
      { id: 4, title: 'Arroser les plantes avec de l’eau recyclée', completed: false },
    ],
  },
  {
    id: 6,
    title: 'Adopter une consommation responsable',
    category: 'Consommation', // Ajoutez cette ligne
    miniTasks: [
      { id: 1, title: 'Éviter les achats impulsifs', completed: false },
      { id: 2, title: 'Opter pour des produits durables', completed: false },
      { id: 3, title: 'Réparer avant de remplacer', completed: false },
      { id: 4, title: 'Donner ou recycler les objets inutilisés', completed: false },
    ],
  },
];