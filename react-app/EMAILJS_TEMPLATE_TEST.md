# Template EmailJS Simple pour Test

## Template HTML Minimaliste

Copiez ce code dans votre template EmailJS :

```html
Bonjour {{to_email}},

Merci pour votre intérêt !

Voici le lien pour télécharger votre plaquette :
<a href="{{pdf_link}}" target="_blank">Télécharger le PDF</a>

Lien direct : {{pdf_link}}

Cordialement,
FormaSecret
```

## Variables Testées
- {{to_email}} : Email de l'utilisateur
- {{pdf_link}} : Lien vers le PDF

## Si ça ne marche pas...

Essayez avec ces noms de variables alternatifs :
- {{email}} au lieu de {{to_email}}
- {{link}} au lieu de {{pdf_link}}

## Test Final
1. Mettez à jour le template avec ce code simple
2. Testez le formulaire
3. Vérifiez les logs dans la console
4. Regardez l'email reçu
