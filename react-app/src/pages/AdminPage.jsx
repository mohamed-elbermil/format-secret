import React, { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import '@/assets/css/components/admin.css'

const FORMATION_LABELS = {
  formation3:  'Pratiques managériales',
  formation5:  'Techniques de vente',
  formation6:  'Préparer sa retraite',
  formation7:  'Prise de parole',
  formation8:  'Gestion du temps',
  formation14: 'Écrits professionnels',
  formation15: 'Réunions efficaces',
  formation16: 'Accueil physique & tél.',
  formation20: 'Gestes et Postures',
  formation21: 'SST',
  formation22: 'MAC SST',
  formation23: "Osez l'IA Générative",
}

const FORMATION_OPTIONS = Object.entries(FORMATION_LABELS).map(([key, label]) => ({ key, label }))

function formatDate(str) {
  if (!str) return '—'
  return new Date(str + 'T00:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function spotsBadge(session) {
  const left = session.capacity - session.spots_taken
  if (left <= 0) return <span className="admin-badge admin-badge--full">Complet</span>
  if (left <= 2) return <span className="admin-badge admin-badge--low">{left} pl.</span>
  return <span className="admin-badge admin-badge--ok">{left}/{session.capacity}</span>
}

/* ── Login ── */
function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) setError('Email ou mot de passe incorrect.')
    else onLogin()
    setLoading(false)
  }

  return (
    <div className="admin-login">
      <div className="admin-login__card">
        <p className="admin-login__logo">Forma<span>Secret</span></p>
        <p className="admin-login__sub">Espace administration</p>
        <form className="admin-login__form" onSubmit={handleSubmit}>
          <div className="admin-login__field">
            <label className="admin-login__label">Email</label>
            <input className="admin-login__input" type="email" value={email} onChange={e => setEmail(e.target.value)} required autoFocus />
          </div>
          <div className="admin-login__field">
            <label className="admin-login__label">Mot de passe</label>
            <input className="admin-login__input" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          {error && <p className="admin-login__error">{error}</p>}
          <button className="admin-login__btn" type="submit" disabled={loading}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>
      </div>
    </div>
  )
}

/* ── Formulaire ajout / édition session ── */
function SessionForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial || {
    formation_key: 'formation5',
    start_date: '',
    end_date: '',
    capacity: 12,
    location: 'Décines-Charpieu (69150)',
    notes: '',
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const payload = {
      formation_key: form.formation_key,
      start_date: form.start_date,
      end_date: form.end_date || form.start_date,
      capacity: parseInt(form.capacity) || 12,
      location: form.location || 'Décines-Charpieu (69150)',
      notes: form.notes || null,
    }

    let err
    if (form.id) {
      ;({ error: err } = await supabase.from('sessions').update(payload).eq('id', form.id))
    } else {
      ;({ error: err } = await supabase.from('sessions').insert([payload]))
    }

    if (err) {
      setError(err.message)
    } else {
      onSave()
    }
    setLoading(false)
  }

  return (
    <div className="admin-form">
      <p className="admin-form__title">{form.id ? 'Modifier la session' : 'Ajouter une session'}</p>
      <form onSubmit={handleSubmit}>
        <div className="admin-form__grid">
          <div className="admin-form__field">
            <label className="admin-form__label">Formation</label>
            <select className="admin-form__select" value={form.formation_key} onChange={set('formation_key')}>
              {FORMATION_OPTIONS.map(o => (
                <option key={o.key} value={o.key}>{o.label}</option>
              ))}
            </select>
          </div>
          <div className="admin-form__field">
            <label className="admin-form__label">Date de début</label>
            <input className="admin-form__input" type="date" value={form.start_date} onChange={set('start_date')} required />
          </div>
          <div className="admin-form__field">
            <label className="admin-form__label">Date de fin</label>
            <input className="admin-form__input" type="date" value={form.end_date} onChange={set('end_date')} min={form.start_date} />
          </div>
          <div className="admin-form__field">
            <label className="admin-form__label">Capacité</label>
            <input className="admin-form__input" type="number" min="1" max="50" value={form.capacity} onChange={set('capacity')} required />
          </div>
          <div className="admin-form__field">
            <label className="admin-form__label">Lieu</label>
            <input className="admin-form__input" type="text" value={form.location} onChange={set('location')} />
          </div>
          <div className="admin-form__field">
            <label className="admin-form__label">Notes (optionnel)</label>
            <input className="admin-form__input" type="text" value={form.notes} onChange={set('notes')} placeholder="Ex: Groupe A, présentiel uniquement…" />
          </div>
        </div>
        {error && <p className="admin-form__error">{error}</p>}
        <div className="admin-form__actions">
          <button className="admin-btn admin-btn--primary" type="submit" disabled={loading}>
            {loading ? 'Enregistrement…' : (form.id ? 'Mettre à jour' : 'Ajouter la session')}
          </button>
          <button className="admin-btn admin-btn--ghost" type="button" onClick={onCancel}>Annuler</button>
        </div>
      </form>
    </div>
  )
}

/* ── Confirmation suppression ── */
function ConfirmDelete({ onConfirm, onCancel }) {
  return (
    <div className="admin-confirm-backdrop" onClick={e => e.target === e.currentTarget && onCancel()}>
      <div className="admin-confirm">
        <p className="admin-confirm__title">Supprimer la session ?</p>
        <p className="admin-confirm__text">Cette action supprimera aussi toutes les inscriptions liées à cette session. Elle est irréversible.</p>
        <div className="admin-confirm__btns">
          <button className="admin-btn admin-btn--danger" onClick={onConfirm}>Supprimer</button>
          <button className="admin-btn admin-btn--ghost" onClick={onCancel}>Annuler</button>
        </div>
      </div>
    </div>
  )
}

/* ── Vue Sessions ── */
function SessionsView() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editSession, setEditSession] = useState(null)
  const [deleteId, setDeleteId] = useState(null)
  const [filterKey, setFilterKey] = useState('all')

  const load = async () => {
    setLoading(true)
    const { data } = await supabase.from('sessions').select('*').order('start_date', { ascending: true })
    setSessions(data || [])
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const handleDelete = async () => {
    await supabase.from('sessions').delete().eq('id', deleteId)
    setDeleteId(null)
    load()
  }

  const filtered = filterKey === 'all' ? sessions : sessions.filter(s => s.formation_key === filterKey)

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <h2 className="admin-section__title" style={{ margin: 0 }}>Sessions</h2>
        <button className="admin-btn admin-btn--primary" onClick={() => { setEditSession(null); setShowForm(true) }}>
          + Ajouter une session
        </button>
      </div>

      {(showForm || editSession) && (
        <SessionForm
          initial={editSession}
          onSave={() => { setShowForm(false); setEditSession(null); load() }}
          onCancel={() => { setShowForm(false); setEditSession(null) }}
        />
      )}

      <div className="admin-filter">
        <button className={`admin-filter__btn${filterKey === 'all' ? ' admin-filter__btn--active' : ''}`} onClick={() => setFilterKey('all')}>
          Toutes
        </button>
        {FORMATION_OPTIONS.map(o => (
          <button
            key={o.key}
            className={`admin-filter__btn${filterKey === o.key ? ' admin-filter__btn--active' : ''}`}
            onClick={() => setFilterKey(o.key)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="admin-table-wrap">
        <div className="admin-table-wrap__header">
          <span className="admin-table-wrap__label">{filtered.length} session{filtered.length !== 1 ? 's' : ''}</span>
        </div>
        {loading ? (
          <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--clr-text-muted)' }}>Chargement…</p>
        ) : filtered.length === 0 ? (
          <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--clr-text-muted)' }}>Aucune session.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Formation</th>
                <th>Dates</th>
                <th>Lieu</th>
                <th>Places</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id}>
                  <td><strong>{FORMATION_LABELS[s.formation_key] || s.formation_key}</strong></td>
                  <td>{formatDate(s.start_date)}{s.end_date !== s.start_date ? ` → ${formatDate(s.end_date)}` : ''}</td>
                  <td>{s.location}</td>
                  <td>{spotsBadge(s)}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="admin-btn admin-btn--ghost" style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}
                        onClick={() => { setEditSession(s); setShowForm(false) }}>
                        Modifier
                      </button>
                      <button className="admin-btn admin-btn--danger" style={{ padding: '0.3rem 0.7rem', fontSize: '0.78rem' }}
                        onClick={() => setDeleteId(s.id)}>
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {deleteId && <ConfirmDelete onConfirm={handleDelete} onCancel={() => setDeleteId(null)} />}
    </div>
  )
}

/* ── Vue Inscriptions ── */
function RegistrationsView() {
  const [registrations, setRegistrations] = useState([])
  const [sessions, setSessions] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const [{ data: regs }, { data: sess }] = await Promise.all([
        supabase.from('registrations').select('*').order('created_at', { ascending: false }),
        supabase.from('sessions').select('*'),
      ])
      setRegistrations(regs || [])
      const map = {}
      ;(sess || []).forEach(s => { map[s.id] = s })
      setSessions(map)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div>
      <h2 className="admin-section__title">Inscriptions</h2>

      <div className="admin-table-wrap">
        <div className="admin-table-wrap__header">
          <span className="admin-table-wrap__label">{registrations.length} inscription{registrations.length !== 1 ? 's' : ''}</span>
        </div>
        {loading ? (
          <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--clr-text-muted)' }}>Chargement…</p>
        ) : registrations.length === 0 ? (
          <p style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--clr-text-muted)' }}>Aucune inscription.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Entreprise</th>
                <th>Formation</th>
                <th>Session</th>
                <th>Date d'inscription</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map(r => {
                const session = sessions[r.session_id]
                return (
                  <tr key={r.id}>
                    <td><strong>{r.first_name} {r.last_name}</strong></td>
                    <td><a href={`mailto:${r.email}`} style={{ color: 'var(--clr-gold)' }}>{r.email}</a></td>
                    <td>{r.phone || '—'}</td>
                    <td>{r.company || '—'}</td>
                    <td>{session ? (FORMATION_LABELS[session.formation_key] || session.formation_key) : '—'}</td>
                    <td>{session ? formatDate(session.start_date) : '—'}</td>
                    <td>{new Date(r.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

/* ── Page principale ── */
export default function AdminPage() {
  const [user, setUser] = useState(undefined)
  const [tab, setTab] = useState('sessions')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null)
    })
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })
    return () => subscription.unsubscribe()
  }, [])

  if (user === undefined) return null

  if (!user) return <LoginScreen onLogin={() => {}} />

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <div className="admin-page">
      <div className="admin-bar">
        <span className="admin-bar__logo">Forma<span>Secret</span> · Admin</span>
        <button className="admin-bar__logout" onClick={handleLogout}>Déconnexion</button>
      </div>

      <div className="admin-layout">
        <nav className="admin-sidebar">
          <button
            className={`admin-nav__item${tab === 'sessions' ? ' admin-nav__item--active' : ''}`}
            onClick={() => setTab('sessions')}
          >
            Sessions
          </button>
          <div className="admin-nav__sep" />
          <button
            className={`admin-nav__item${tab === 'registrations' ? ' admin-nav__item--active' : ''}`}
            onClick={() => setTab('registrations')}
          >
            Inscriptions
          </button>
        </nav>

        <main className="admin-content">
          {tab === 'sessions' && <SessionsView />}
          {tab === 'registrations' && <RegistrationsView />}
        </main>
      </div>
    </div>
  )
}
