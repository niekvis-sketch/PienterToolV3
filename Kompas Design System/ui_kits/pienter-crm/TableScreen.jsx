// Pienter CRM — Deals / clients table.
const { Badge, Avatar, Checkbox, Icon } = window.VeldDesignSystem_c2e968;

function TableScreen() {
  const rows = [
    { naam: 'De Korenmaat B.V.', contact: 'Mira van Dijk',  fase: 'Onderhandeling', faseColor: 'warning', waarde: 24500, eigenaar: 'JV', kans: 78 },
    { naam: 'KaalKeurig',         contact: 'Pjotr Bakker',   fase: 'Demo',           faseColor: 'primary', waarde: 8400,  eigenaar: 'IK', kans: 52 },
    { naam: 'Boombond NL',        contact: 'Hester Tellier', fase: 'Offerte',        faseColor: 'accent',  waarde: 18200, eigenaar: 'DV', kans: 64 },
    { naam: 'Lumen Studio',       contact: 'Yusuf Aydın',    fase: 'Gewonnen',       faseColor: 'success', waarde: 42000, eigenaar: 'SK', kans: 100 },
    { naam: 'Vlas & Veen',        contact: 'Ineke Robben',   fase: 'Lead',           faseColor: 'neutral', waarde: 0,     eigenaar: 'JV', kans: 8 },
    { naam: 'Stroom Architecten', contact: 'Lars Bremen',    fase: 'Verloren',       faseColor: 'danger',  waarde: 0,     eigenaar: 'IK', kans: 0 },
  ];
  const barColor = k => k >= 80 ? 'var(--success)' : k >= 40 ? 'var(--primary)' : k > 0 ? 'var(--accent)' : 'var(--ink-mute)';
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 18px' }}>Deals</h1>
      <div className="card" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--line)', gap: 10 }}>
          <div style={{ position: 'relative', flex: '0 0 240px' }}>
            <Icon name="search" size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--ink-3)' }} />
            <input className="input" placeholder="Filter klanten…" style={{ height: 32, fontSize: 13, paddingLeft: 30 }} />
          </div>
          <button className="btn btn-secondary btn-sm"><Icon name="filter" size={13} />Fase</button>
          <button className="btn btn-secondary btn-sm"><Icon name="filter" size={13} />Eigenaar</button>
          <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--ink-3)' }}>6 van 248</span>
        </div>
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: 30 }}></th>
              <th>Klant <Icon name="sort" size={11} style={{ display: 'inline', marginLeft: 4, verticalAlign: 'middle' }} /></th>
              <th>Contact</th>
              <th>Fase</th>
              <th style={{ textAlign: 'right' }}>Waarde</th>
              <th>Kans</th>
              <th style={{ width: 60 }}>Eigenaar</th>
              <th style={{ width: 30 }}></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td><Checkbox /></td>
                <td style={{ fontWeight: 500 }}>{r.naam}</td>
                <td style={{ color: 'var(--ink-2)' }}>{r.contact}</td>
                <td><Badge variant={r.faseColor} dot>{r.fase}</Badge></td>
                <td className="mono" style={{ textAlign: 'right', color: r.waarde ? 'var(--ink)' : 'var(--ink-3)' }}>
                  {r.waarde ? `€ ${r.waarde.toLocaleString('nl-NL')}` : '—'}
                </td>
                <td style={{ minWidth: 110 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ height: 6, flex: 1, background: 'var(--line)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${r.kans}%`, background: barColor(r.kans) }} />
                    </div>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)', width: 28 }}>{r.kans}%</span>
                  </div>
                </td>
                <td><Avatar name={r.eigenaar} size={26} tone="neutral" /></td>
                <td><button className="btn btn-ghost btn-sm btn-icon" style={{ width: 26, height: 26 }}><Icon name="dots" size={14} /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
window.TableScreen = TableScreen;
