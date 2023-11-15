<script src="../setup-custom-elements.js" type="module"></script>
<link rel="stylesheet" href="../styles/style.css">

## Rappel: Attribut vs Propriété

Un attribut et une propriété ne sont pas forcément synchronisés.

L'attribut `value` sur un champ `<input>` permet de définir la valeur initiale du champ.

La propriété `value` d'un élément `input` permet de récupérer ou définir la valeur actuelle du champ.

Dès que l'utilisateur saisit des valeurs ou que l'on modifie la propriété `value`, l'attribut et la propriété n'ont plus la même valeur.

Par défaut, dans un `custom element`, les attributs ne sont pas synchronisés avec les propriétés.

--- 

## Champs non contrôlés

Composant / élément HTML gère lui-même son état.

Plus d'infos : [Controlled and uncontrolled components - React docs](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

---

### Exemple

<form>
  <my-uncontrolled-input label="nom" defaultValue="Willow"></my-uncontrolled-input>
</form>

---

## Champs contrôlés

L'état du composant / élément HTML est géré par son parent.

Plus d'infos : [Controlled and uncontrolled components - React docs](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

---

### Exemple 

<form>
  <my-controlled-input label="nom" value="Willow"></my-controlled-input>
</form>

---

### Note

A noter que parfois on gère une partie via le parent et on laisse une autre partie en auto-gestion. Par exemple dans le composant `<sl-select>`  ([Shoelace Docs](https://shoelace.style/components/select#properties)) / ([Exemple dans `cc-pricing-header`](https://github.com/CleverCloud/clever-components/blob/master/src/components/cc-pricing-header/cc-pricing-header.js#L168C37-L169C49)) :

* la valeur du `<sl-select>` est entièrement contrôlée par le state du composant `<cc-pricing-header>`.
* l'état ouvert / fermé du `<sl-select>` est géré par l'élément lui-même.

--- 

## Comment on récupère des données dans un formulaire natif ?

- on code un formulaire natif,
- on doit `preventDefault`, => on récupère le form avec `document.forms` pour le style, on y ajoute un name pour encore plus de style
- on peut mentionner la méthode reloue pour récupérer les données => `form.elements` et on loop dessus
- on va plutôt coder le listener au submit et utiliser `formData` (ne pas oublier `Object.fromEntries()`)
- avec le `formData`, on a plus obligatoirement besoin de contrôler nos champs pour récupérer les données facilement.
- on essaie de mettre un custom element dedans => on fait un custom Element, pas besoin de prop value, juste name et label (on set bien le shadow root)
- ça marche plus (parler du requestImplicitSubmit)
- quelles pistes ?
  - Custom element without shadow DOM => plus de scope de style (tester le style), plus de scope d'attribut id (la liaison for / id sera pétée volontairement dans mon exemple), plus composition (bye bye les slots) (5 mins)
  - l'utilisation exclusive du light DOM => https://lion-web.netlify.app/simulator/#?story-file=296596a8&story-key=main&theme=light&platform=web&language=en-US&edge-distance=true
  - Customized built-in elements
  - ElementInternals => on tente de faire évoluer le custom-input

et la validation de formulaire alors ?

- on repart sur le natif
- ah ça marche pas sur un custom element ?
- on fait marcher sur un custom element
- mais c'est naze en fait, on veut des messages inline
- comment on peut brancher pour afficher du inline ?

Solutions pour palier le problème du shadow DOM
    * validation (et les limites)
    * `delegateFocus`
    * recap: ce qu'on a appris (1 slide)