# Prova DoBCN

En aquesta prova he tingut diferents problemes i he creat la pàgina de nou 2 vegades (1 en React pur i l'altre amb Gatsby), en aquest deploy es mostra el treball fet amb Gatsby. La pàgina esta estilada per mòvil, si tingés mes marge afegiría els @include media al scss pel disseny de desktop. Al ser creada amb Gatsby el seo ve inclòs a la creació predeterminada del projecte.

## Problemes

Rebre dades de la REST API de Wordpress.


## Que he fet

### En general

Primer vaig crear el projecte en React pur i vaig fer la pàgina de Home.
Despès em vaig menjar el cap amb els plugins i no conseguía entendre perque no els trobaba a Wordpress i no funcionaben.
Desprès de consultar uns dubtes se'm va recomanar utilitzar Gatsby i vaig crear un altre projecte amb Gatsby (Tinc diferents repos a Github de cada un que vaig crear).


### A Gatsby

A Gatsby he fet la pàgina del catàleg i la dels productes (al no conseguir conectar el graphql no he pogut rebre les dades dels productes).
Gatsby al iniciar la página es veu que busca un arxiu anomenat index.js, dins d'aquest arxiu he creat un redireccionament a la pàgina del catàleg amb els components Navbar y Footer.
El estil esta fet amb Scss amb una carpeta on es guarden les variables com els colors principals i el mixins per fer la pàgina en responsive.

## Següents pasos

Els següents pasos que estaba fent era intentar trobar el endpoint de la restAPI per fer els calls de les queries i agafar les dades dels productes.

Desprès de conseguir rebre les dades sería fer-li css i posar la pàgina responsive amb els mixins que tinc creats.

## Conclusió

Sincerament, no estic gaire content amb el resultat que he aconseguit perque no està acabat i sento que no he demostrat el que puc fer. Per això em vull disculpar amb l'empresa de DoBCN perque m'ha donat una oportunitat de participat i sento que no he pogut aprofitar bé el temps que se m'ha donat i no he pogut demostrar les meves capacitats, ho sento molt.

## Link repo

[Github Repo](https://www.github.com/makeda67/gatsby-dobcn)

## Link deploy

[Deployed Webpage](https://makeda67.github.io/gatsby-dobcn/catalog/)