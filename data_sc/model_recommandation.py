import pandas as pd
from surprise import Dataset, Reader, SVDpp
from surprise.model_selection import train_test_split
from surprise import accuracy
from collections import defaultdict



# Documentation technique du  composant
'''
Pour le model de recommandation, nous avons du fais un exemple de donnée de notre base de donnée, afin d'entrainer le model et de le rendre opérationel.
Nous avons pour cela utiliser un 'SVDpp' de la librairie scikit-learn surprise. Le model prédira quel article l'utilisateur a le plus de chance d'aimer.
A partir de la, nous avons mis en place une fonction qui recommandera les articles en lien avec le projet que l'utilisateur a choisit.

'''



# Exemple de données
data = {
    "user_id": [1, 1, 2, 2, 3, 3, 4, 4,5],
    "article_id": [101, 102, 104, 103, 105, 104, 103, 105,104],
    "project_id": [201, 202, 201, 203, 202, 204, 203, 205,203],
    "rating": [4, 5, 3, 4, 2, 5, 3, 4,3],  
}

df = pd.DataFrame(data)

# Créer une colonne combinée pour project_id et article_id
df["project_article"] = df["project_id"].astype(str) + "_" + df["article_id"].astype(str)

# Prépareration des données pour SVD++
reader = Reader(rating_scale=(0, 5))
dataset = Dataset.load_from_df(df[["user_id", "project_article", "rating"]], reader)

# entraînement et de test
train_set, test_set = train_test_split(dataset, test_size=0.2, random_state=42)

# Entraînement du modèle
model = SVDpp()
model.fit(train_set)

# Évaluation
prediction = model.test(test_set)
accuracy.rmse(prediction)

#  Génération de recommandations pour un projet spécifique
def recommend_articles(user_id, project_id, df, model, n_recommendations=10):
    
    # Extraire les articles associés project_id
    articles = df[df["project_id"] == project_id]["article_id"].unique()
    
    #  prédictions des articles
    predictions = [
        (article_id, model.predict(user_id, f"{project_id}_{article_id}").est)
        for article_id in articles
    ]
    
    # Trier les articles par score décroissant
    recommendations = sorted(predictions, key=lambda x: x[1], reverse=True)[:n_recommendations]
    
    return [article for article, score in recommendations]


# Recommandations pour un utilisateur donné
user_id = 3
project_id = 203
recommended_articles = recommend_articles(user_id, project_id, df, model)

print(f"Recommandations pour user_id={user_id}, project_id={project_id}: {recommended_articles}")