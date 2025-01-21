# IMPORTATION DES LIBRAIRIES
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import json

# CHARGEMENT DU FICHIER
data = json.loads(open('data.json').read())

df = pd.DataFrame(data['users'])

# AUCUNE DONNÉ MANQUANTE
df.isna().sum() 

X = df.drop(columns = ['deadline','username','goal_description','progress'])
y = df['user_id']

# Number of unique goal_ids
unique_goal_ids = df["goal_id"].nunique()  

# TRAINING THE K-MEANS MODEL
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters = unique_goal_ids, init = 'k-means++', random_state = 42)
y_kmeans = kmeans.fit_predict(X)
X['cluster'] = y_kmeans

X_array = X.values


plt.figure(figsize=(8, 6))
for cluster in range(unique_goal_ids):
    plt.scatter(
        # Coordonées de points de X dans le cluster
        X_array[y_kmeans == cluster, 0],  
        # Coordonées de points de Y dans le cluster
        X_array[y_kmeans == cluster, 1], 
        # Étiquette pour chaque cluster
        label=f'Cluster {cluster + 1}'  
    )

# Affichage des centroids
plt.scatter(
    # Coordonnées X des centroids
    kmeans.cluster_centers_[:, 0], 
    # Coordonnées Y des centroids
    kmeans.cluster_centers_[:, 1], 
    # taille des centroids
    s=300,  
    # Couleur des centroids
    c='red',  
    label='Centroids',
    marker='X'
)

#  Étiquette et Titre
plt.title('Clusters of data points')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.legend(bbox_to_anchor =(1.05,1.0),loc='upper left')
plt.grid()
plt.show()

print(X)