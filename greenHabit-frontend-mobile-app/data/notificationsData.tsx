export type Notification = {
  id: number;
  type: 'reminder' | 'motivation' | 'general';
  message: string;
  timestamp: string;
};

export const notificationsData: Notification[] = [
  {
    id: 1,
    type: 'reminder',
    message: 'N’oubliez pas d’éteindre les lumières avant de sortir ! 🌱',
    timestamp: '2025-01-21T08:00:00Z',
  },
  {
    id: 2,
    type: 'motivation',
    message: 'Chaque petit geste compte. Continuez ainsi ! 🌿',
    timestamp: '2025-01-21T09:00:00Z',
  },
  {
    id: 3,
    type: 'general',
    message: 'Vous avez un nouveau défi : réduire la consommation d’eau de 10% cette semaine.',
    timestamp: '2025-01-21T10:00:00Z',
  },
  // Ajoutez plus de notifications ici
];
