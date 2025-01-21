export type MiniTask = {
  id: number;
  title: string;
  completed: boolean;
};

export type Goal = {
  id: number;
  title: string;
  description: string;
  miniTasks: MiniTask[];
  progress: number;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  progress: number;
  goals: Goal[];
  createdAt: string;
  updatedAt: string;
};

export const usersData: User[] = [
  {
    id: 1,
    name: "Alice Dupont",
    email: "alice.dupont@example.com",
    password: "securepassword123",
    avatar: "https://example.com/avatar1.jpg", // Ajoutez cette ligne
    progress: 75, // Ajoutez cette ligne
    goals: [
      {
        id: 1,
        title: "Réduire la consommation d’énergie",
        description: "Mettre en place des actions pour réduire la consommation d'énergie au quotidien.",
        miniTasks: [
          { id: 1, title: "Éteindre les appareils en veille", completed: false },
          { id: 2, title: "Remplacer une ampoule classique par une LED", completed: false },
          { id: 3, title: "Utiliser des appareils électroménagers en mode éco", completed: false },
          { id: 4, title: "Débrancher les chargeurs lorsqu’ils ne sont pas utilisés", completed: false }
        ],
        progress: 0,
        createdAt: "2025-01-21T00:00:00.000Z",
        updatedAt: "2025-01-21T00:00:00.000Z"
      }
    ],
    createdAt: "2025-01-01T00:00:00.000Z",
    updatedAt: "2025-01-21T00:00:00.000Z"
  },
  {
    id: 2,
    name: "Bob Martin",
    email: "bob.martin@example.com",
    password: "mypassword456",
    avatar: "https://example.com/avatar2.jpg", // Ajoutez cette ligne
    progress: 50, // Ajoutez cette ligne
    goals: [
      {
        id: 2,
        title: "Réduire les déchets plastiques",
        description: "Adopter des pratiques pour minimiser les déchets plastiques.",
        miniTasks: [
          { id: 1, title: "Utiliser un sac réutilisable pour les courses", completed: false },
          { id: 2, title: "Éviter les produits à usage unique", completed: false },
          { id: 3, title: "Acheter en vrac", completed: false },
          { id: 4, title: "Utiliser des contenants réutilisables", completed: false }
        ],
        progress: 0,
        createdAt: "2025-01-21T00:00:00.000Z",
        updatedAt: "2025-01-21T00:00:00.000Z"
      }
    ],
    createdAt: "2025-01-02T00:00:00.000Z",
    updatedAt: "2025-01-21T00:00:00.000Z"
  },
  {
    id: 3,
    name: "Claire Bernard",
    email: "claire.bernard@example.com",
    password: "password789",
    avatar: "https://example.com/avatar3.jpg", // Ajoutez cette ligne
    progress: 90, // Ajoutez cette ligne
    goals: [
      {
        id: 3,
        title: "Augmenter l’utilisation de transports écoresponsables",
        description: "Encourager l'usage des transports durables et écoresponsables.",
        miniTasks: [
          { id: 1, title: "Utiliser les transports en commun", completed: false },
          { id: 2, title: "Faire du covoiturage", completed: false },
          { id: 3, title: "Marcher ou faire du vélo pour les petits trajets", completed: false },
          { id: 4, title: "Participer à des programmes de partage de voitures", completed: false }
        ],
        progress: 0,
        createdAt: "2025-01-21T00:00:00.000Z",
        updatedAt: "2025-01-21T00:00:00.000Z"
      }
    ],
    createdAt: "2025-01-03T00:00:00.000Z",
    updatedAt: "2025-01-21T00:00:00.000Z"
  }
];