# 📧 Configuration EmailJS pour Lead Magnet

## 🚀 Étapes de Configuration

### 1. Créer un compte EmailJS
- Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
- Créez un compte gratuit (200 emails/mois)

### 2. Configurer un Service Email
1. Connectez-vous à votre dashboard EmailJS
2. Allez dans "Email Services"
3. Cliquez sur "Add New Service"
4. Choisissez votre provider (Gmail, Outlook, etc.)
5. Connectez votre compte email
6. Notez votre **Service ID**

### 3. Créer un Template d'Email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Votre plaquette FormaSecret 2026</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0066cc; margin-bottom: 10px;">🎓 FormaSecret</h1>
            <h2 style="color: #333; margin: 0;">Votre plaquette complète 2026</h2>
        </div>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666; line-height: 1.6;">
                Bonjour {{to_email}},
            </p>
            <p style="margin: 15px 0; color: #666; line-height: 1.6;">
                Merci pour votre intérêt pour nos formations ! Voici votre plaquette complète avec tous nos programmes, tarifs et modalités de financement.
            </p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="{{pdf_link}}" 
               style="background: #0066cc; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                📥 Télécharger la plaquette PDF
            </a>
        </div>
        
        <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
            <p style="margin: 0; color: #999; font-size: 12px; text-align: center;">
                Cet email a été envoyé depuis forma-secret.fr<br>
                Vous pouvez nous contacter à {{reply_to}}
            </p>
        </div>
    </div>
</body>
</html>
```

4. Notez votre **Template ID**

### 4. Obtenir votre Clé Publique
1. Allez dans "Account" → "API Keys"
2. Copiez votre **Public Key**

### 5. Mettre à jour le Composant

Dans `src/components/marketing/LeadMagnet.jsx`, remplacez les valeurs :

```javascript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_w1lw4hj',      // Remplacez avec votre Service ID
  TEMPLATE_ID: 'template_uas40aq',    // Remplacez avec votre Template ID
  PUBLIC_KEY: 'AV-lC8dyv1w1WXQRp'      // Remplacez avec votre Public Key
};
```

## 📁 Hébergement du PDF

### Option 1: Dossier Public (Recommandé)
1. Placez votre PDF dans `public/plaquette-2026.pdf`
2. Accès via : `https://votredomaine.com/plaquette-2026.pdf`

### Option 2: Cloudinary (Avancé)
1. Créez un compte Cloudinary
2. Uploadez votre PDF
3. Utilisez l'URL fournie dans `pdfUrl`

## 🎯 Variables du Template

EmailJS utilise ces variables :
- `{{to_email}}` : Email de l'utilisateur
- `{{from_name}}` : "FormaSecret"
- `{{subject}}` : Sujet de l'email
- `{{message}}` : Message personnalisé
- `{{pdf_link}}` : Lien vers le PDF
- `{{reply_to}}` : Email de réponse

## ✅ Test Final

1. Lancez votre application : `npm run dev`
2. Testez avec un email réel
3. Vérifiez la réception de l'email
4. Cliquez sur le lien PDF pour confirmer

## 🔧 Dépannage

### Erreur "EmailJS is not defined"
```bash
npm install @emailjs/browser
```

### Erreur "Invalid service ID"
- Vérifiez votre Service ID dans le dashboard EmailJS

### Erreur "Template not found"
- Vérifiez votre Template ID et qu'il est bien publié

### PDF non trouvé
- Assurez-vous que le fichier est dans `public/`
- Vérifiez le nom exact du fichier
