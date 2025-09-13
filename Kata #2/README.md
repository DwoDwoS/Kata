# Kata 2

## Objectifs pédagogiques

- Définir et expliquer les concepts de base de la programmation asynchrone (callbacks, promesses, async/await)
- Utiliser des callbacks pour gérer des opérations asynchrones
- Utiliser **`fetch`** pour effectuer des requêtes HTTP et gérer les promesses retournées
- Utiliser les mots-clés **`async`** et **`await`** pour écrire du code asynchrone plus lisible et maintenable
- Manipuler les réponses HTTP pour extraire les données retournées
- Expliquer la relation client / serveur dans le cadre de l’utilisation d’une API
- Construire des URL complètes avec les paramètres nécessaires (query parameters, path parameters).
- Gérer les réponses des API par la manipulation de JSON

## Enoncé

Il est temps de voir ce que tu as assimilé du projet "Dataviz"

# Mini-station Météo

L'objectif de ce kata est de faire une mini-station météo qui donne la température actuelle dans une ville donnée !

Voici une démonstration du résultat final que tu es censé·e obtenir à la fin des quatre étapes de ce kata.

[demo-rendu-final.mov](attachment:4f675fab-ce59-477f-a91f-920d377decd3:demo-rendu-final.mov)

## **Etape 1: Récupère le code source de base**

Tu as deux options pour récupérer les fichiers de base 👇🏼

- Faire un fork [du projet Github](https://github.com/adatechschool/kata-mini-station-meteo) *(et cloner le fork récupéré sur ton compte en local)*
- Copier-coller les trois fichiers [de ce repository](https://github.com/adatechschool/kata-mini-station-meteo) sur ton ordinateur

<aside>

Quelque soit l’option choisie, tu verras que le CSS et le HTML te sont fournis. 

**Tu ne dois te concentrer que sur la partie Javascript pour ce kata !**

</aside>

## **Etape 2: Récupérer les coordonnées de la ville**

En tant qu’utilisateur·ice:

- Je saisis une ville dans le champ texte
- Je clique sur le bouton “OK”

Je vois alors s’afficher  sur la page les coordonnées GPS de la ville 

 

![L’utilisateur a saisi la ville d’Agadir, on voit les coordonnées GPS de la ville](attachment:b7ea81a2-d73e-451b-ae0a-c8ae849932fe:Capture_decran_2025-03-25_a_10.54.23.png)

L’utilisateur a saisi la ville d’Agadir, on voit les coordonnées GPS de la ville

Tu vas pouvoir récupérer ces informations avec **l'API de Geocoding de Open Street Map**. Pour une ville donnée, elle te retournera différentes informations dont les coordonnées GPS (propriétés **lat** et **lon**). 

> La documentation de cette API est fournie [ici](https://nominatim.org/release-docs/develop/api/Search/#free-form-query).
> 

**Exemples d’appels pour les villes de Paris, Nantes et Lyon** : 

- https://nominatim.openstreetmap.org/search?q=Paris&format=json&addressdetails=1&limit=1
- https://nominatim.openstreetmap.org/search?q=Lyon&format=json&addressdetails=1&limit=1
- https://nominatim.openstreetmap.org/search?q=Nantes&format=json&addressdetails=1&limit=1

## Etape 3: Affiche la température courante de la ville

Maintenant qu'on a réussi à afficher les coordonnées, il est temps d'afficher la température !

![Capture d’écran 2025-03-25 à 10.59.32.png](attachment:2de47196-7c08-4118-b2ca-5d13c3bd3c69:Capture_decran_2025-03-25_a_10.59.32.png)

En tant qu’utilisateur·ice:

- Je saisis une ville dans le champ texte
- Je clique sur le bouton “OK”

Je vois alors s’afficher  sur la page les coordonnées GPS **ET** la température actuelle de la ville. 

<aside>

**Contrainte technique imposée**

Les deux appels d’API doivent se faire dans deux fonctions distinctes: `fetchCoordinates` et `fetchWeather` !
L’API “Météo” ne peut se déclencher que si l’API “Coordonnées GPS” a bien fait son travail …

</aside>

Tu vas utiliser l’API Open-Météo pour récupérer les informations liées à la température. Elle prend en paramètre une *latitude* et une *longitude.* Tu es censé·e avoir une fonction faite à l’étape précédente qui te permet de récupérer ces infos

**Exemple d’appel pour la ville de Berlin** 

- https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,relative_humidity_2m

![Les informations liées à la température, la précipitation et l’humidité se trouvent dans la propriété “current”](attachment:66f85552-0537-425e-8beb-d1c266dbfecb:Capture_decran_2025-03-25_a_11.06.57.png)

Les informations liées à la température, la précipitation et l’humidité se trouvent dans la propriété “current”

> La documentation technique d’Open-Météo se trouve [ici](https://open-meteo.com/en/docs)
> 

## Etape 3 : Gère les erreurs

En tant qu’utilisateur·ice:

- Je saisis n’importe quoi dans le champ texte (ex: “DFGoiuretkjh”)
- Je clique sur le bouton “OK”

Je dois voir un message d’erreur “Ville non trouvée”. 

<aside>

**Contrainte technique**: 

L’API “Weather” ne doit pas se déclencher puisque l’API Open Street Map n’a pas retourné de coordonnées saines. 

</aside>

![Exemple d’état d’erreur](attachment:f1289a6a-c2ea-4124-afe8-59805357dd8c:Capture_decran_2025-03-25_a_11.11.46.png)

Exemple d’état d’erreur

### Tu as fini ce kata et tu souhaites aller plus loin ?

Bravo d’avoir complété les étapes précédentes ! Voici quelques suggestions d’étapes bonus si tu souhaites monter en complexité.  

- Affiche d'autres informations provenant de l'API : le taux d'humidité, la précipitation.
- Déploie ton application finie sur Github Pages.
- Etape bonus et *un peu plus costaud*
    - Affiche les informations des précipitations ou des températures des 3 derniers jours par heure sur un graphique en utilisant [Chart.js](https://www.chartjs.org/docs/latest/getting-started/)
    - Tu peux récupérer les températures des derniers jours avec cet appel d’API : https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation&past_days=2