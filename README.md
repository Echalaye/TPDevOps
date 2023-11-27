# TP DEV OPS
Ce readme décrit l'utilisation du TP devOps

## Installation
Pour installer le projet, il suffit de cloner ce repos sur votre machine en utilisant la commande suivante.

```bash
git clone [https://github.com/Echalaye/TPDevOps.git](https://github.com/Echalaye/TPDevOps.git)
```

## Utilisation
Pour lancer le projet il suffit de lancer un terminale depuis le dossier du projet et d'écrire les commandes suivante:

```bash
npx tsc
```
```bash
node build/index.js
```

Le port d'écoute du serveur est par défaut à 8080 mais vous pouvez le changer en créant/modifiant votre variable d'environement PING_LISTEN_PORT.

Pour récupérer les données de l'api vous devez lancer la commande suivante. N'oubliez pas de remplacer 8080 par le port de votre variable d'environement PING_LISTEN_PORT.
```bash
http://localhost:8080/ping
```

## Notes
Ce projet à pour but de permettre à un utilisateur de récupérer les Headers de la requête HTTP GET sur l'adresse /ping.
Si l'utilisateur envoie une requête HTTP GET sur une autre adresse, il recevra une erreur 404.
