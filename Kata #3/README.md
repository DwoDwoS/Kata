### Kata 3

Crée une fonction drawMyPen(){:js} qui retourne l'état de ton crayon en ASCII Art en fonction du temps passé en cours. Tu trouveras un exemple de crayons ci-dessous. Attention, petite subtilité : la gomme a deux étages en début d'année scolaire, mais se réduit à un seul étage à partir du mois de mars.

**Exemple :**

``` bash
drawMyPen('septembre');
// retourne un crayon à 10 étages avec une gomme à 2 étages
 /\
/__\
||||
||||
||||
||||
||||
||||
||||
||||
||||
||||
|__|
|  |
|__|

drawMyPen('fevrier');
// retourne un crayon à 5 étages avec une gomme à 2 étages
 /\
/__\
||||
||||
||||
||||
||||
|__|
|  |
|__|

drawMyPen('mars');
// retourne un crayon à 4 étages avec une gomme à 1 étage
 /\
/__\
||||
||||
||||
||||
|__|
|__|

drawMyPen('juin');
// retourne un crayon à 1 étage avec une gomme à 1 étage
 /\
/__\
||||
|__|
|__|
```
​
**Annexe :**
```js
const calendrierDuCrayon = {
    septembre: 10,
    octobre: 9,
    novembre: 8,
    decembre: 7,
    janvier: 6,
    fevrier: 5,
    mars: 4,
    avril: 3,
    mai: 2,
    juin: 1,
};
``` 
