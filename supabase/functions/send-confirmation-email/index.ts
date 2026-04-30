import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const BREVO_API_KEY = Deno.env.get('BREVO_API_KEY') ?? ''
const FROM_EMAIL   = 'contact@formasecret.fr'
const FROM_NAME    = 'FormaSecret'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function formatDateFr(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: CORS_HEADERS })
  }

  try {
    const { to, firstName, lastName, formationKey, startDate, endDate, location } = await req.json()

    const startFr = formatDateFr(startDate)
    const endFr   = startDate === endDate ? '' : ` au ${formatDateFr(endDate)}`

    const htmlBody = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f8;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- En-tête navy -->
        <tr>
          <td style="background:#1b2f4e;padding:28px 40px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.04em;">
              Forma<span style="color:#c8922a;">Secret</span>
            </p>
          </td>
        </tr>

        <!-- Corps -->
        <tr>
          <td style="padding:36px 40px;">
            <h1 style="margin:0 0 8px;font-size:22px;font-weight:700;color:#1b2f4e;">
              Votre inscription est confirmée !
            </h1>
            <p style="margin:0 0 24px;font-size:14px;color:#6b7280;">
              Bonjour ${firstName} ${lastName},<br>
              Nous avons bien reçu votre inscription. Voici le récapitulatif :
            </p>

            <!-- Récap session -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fb;border-radius:8px;border:1px solid rgba(27,47,78,0.1);margin-bottom:24px;">
              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0 0 6px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#c8922a;">Session</p>
                  <p style="margin:0;font-size:15px;font-weight:700;color:#1b2f4e;">
                    Du ${startFr}${endFr}
                  </p>
                  <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">${location}</p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 24px;font-size:14px;color:#4b5563;line-height:1.6;">
              Notre équipe vous contactera dans les prochains jours pour vous transmettre toutes les informations pratiques (horaires, accès, documents à apporter).
            </p>

            <p style="margin:0 0 8px;font-size:14px;color:#4b5563;">
              Une question ? Contactez-nous directement :
            </p>
            <a href="mailto:contact@formasecret.fr" style="color:#c8922a;font-weight:700;font-size:14px;">contact@formasecret.fr</a>
          </td>
        </tr>

        <!-- Pied -->
        <tr>
          <td style="padding:20px 40px;background:#f8f9fb;border-top:1px solid rgba(27,47,78,0.08);">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              FormaSecret · Organisme de formation certifié Qualiopi<br>
              Décines-Charpieu (69150)
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: FROM_NAME, email: FROM_EMAIL },
        to: [{ email: to, name: `${firstName} ${lastName}` }],
        subject: `Confirmation d'inscription – FormaSecret`,
        htmlContent: htmlBody,
      }),
    })

    if (!res.ok) {
      const body = await res.text()
      throw new Error(`Brevo error ${res.status}: ${body}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    })
  }
})
