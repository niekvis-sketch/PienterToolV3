// Pienter CRM — Overview dashboard.
const { Card, CardHeader, CardBody, Badge, Tabs, Icon } = window.VeldDesignSystem_c2e968;

function Stat({ label, value, accent }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div className="caps" style={{ marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', color: accent ? 'var(--accent-deep)' : 'var(--ink)' }}>{value}</div>
    </div>
  );
}

function RevenueChart() {
  const data = [22, 26, 24, 30, 28, 34, 38, 36, 42, 40, 46, 48];
  const labels = ['J','F','M','A','M','J','J','A','S','O','N','D'];
  const w = 380, h = 150, pad = 22, maxV = 50;
  const xs = i => pad + (i * (w - pad * 2)) / (data.length - 1);
  const ys = v => h - pad - (v / maxV) * (h - pad * 2);
  const path = data.map((v, i) => `${i ? 'L' : 'M'} ${xs(i)} ${ys(v)}`).join(' ');
  const area = `${path} L ${xs(data.length - 1)} ${h - pad} L ${xs(0)} ${h - pad} Z`;
  return (
    <Card>
      <CardHeader>
        <div>
          <div className="caps">Omzet 2025</div>
          <div style={{ fontSize: 22, fontWeight: 600, marginTop: 4 }}>€ 384.200</div>
        </div>
        <Badge variant="success"><Icon name="arrowUp" size={11} strokeWidth={2.4} />+ 18%</Badge>
      </CardHeader>
      <CardBody>
        <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%' }}>
          {[10,20,30,40,50].map(t => <line key={t} x1={pad} x2={w-pad} y1={ys(t)} y2={ys(t)} stroke="var(--line)" strokeDasharray="2 3" />)}
          <path d={area} fill="var(--primary-soft)" opacity=".7" />
          <path d={path} fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinejoin="round" />
          <circle cx={xs(data.length-1)} cy={ys(data[data.length-1])} r="4" fill="var(--accent)" />
          {labels.map((l,i) => <text key={i} x={xs(i)} y={h-5} fill="var(--ink-3)" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono">{l}</text>)}
        </svg>
      </CardBody>
    </Card>
  );
}

function PhaseBars() {
  const rows = [['Lead',22,'var(--ink-mute)'],['Demo',14,'var(--primary-soft-2)'],['Offerte',12,'var(--primary)'],['Onderhandeling',8,'var(--accent)'],['Gewonnen',8,'var(--success)']];
  return (
    <Card>
      <CardHeader>
        <div className="caps">Deals per fase</div>
        <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>n=64</span>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {rows.map(([l, v, c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5 }}>
              <span style={{ width: 100, color: 'var(--ink-2)' }}>{l}</span>
              <div style={{ flex: 1, height: 14, background: 'var(--bg-elev)', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${(v/22)*100}%`, height: '100%', background: c, borderRadius: 3 }} />
              </div>
              <span className="mono" style={{ width: 22, textAlign: 'right', color: 'var(--ink-3)' }}>{v}</span>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

function ActivityCard() {
  const rows = [
    { who: 'Jens', what: 'heeft een offerte verstuurd aan', whom: 'De Korenmaat', when: '4 min', icon: 'mail', tone: 'primary' },
    { who: 'Iris', what: 'heeft een afspraak gepland met', whom: 'KaalKeurig', when: '1 uur', icon: 'calendar', tone: 'accent' },
    { who: 'Daan', what: 'voegde een notitie toe bij', whom: 'Boombond NL', when: 'gisteren', icon: 'edit', tone: 'neutral' },
  ];
  return (
    <Card style={{ gridColumn: '1 / -1' }}>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontWeight: 600 }}>Recente activiteit</span>
          <Badge variant="neutral">4 nieuw</Badge>
        </div>
        <button className="btn btn-ghost btn-sm">Alles tonen<Icon name="arrowR" size={13} /></button>
      </CardHeader>
      <div style={{ padding: '8px 18px' }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < 2 ? '1px dashed var(--line)' : 'none' }}>
            <span style={{
              width: 32, height: 32, borderRadius: 'var(--r-2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: r.tone === 'accent' ? 'var(--accent-soft)' : r.tone === 'primary' ? 'var(--primary-soft)' : 'var(--bg-elev)',
              color: r.tone === 'accent' ? 'var(--accent-deep)' : r.tone === 'primary' ? 'var(--primary)' : 'var(--ink-2)',
            }}><Icon name={r.icon} size={15} /></span>
            <div style={{ flex: 1, fontSize: 13.5 }}>
              <strong style={{ fontWeight: 500 }}>{r.who}</strong> <span style={{ color: 'var(--ink-2)' }}>{r.what}</span> <strong style={{ fontWeight: 500 }}>{r.whom}</strong>
            </div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--ink-3)' }}>{r.when}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function DashboardScreen() {
  const [tab, setTab] = React.useState('overview');
  return (
    <div style={{ padding: 24 }}>
      <Tabs
        items={[{value:'overview',label:'Overzicht'},{value:'activity',label:'Activiteit'},{value:'goals',label:'Doelen'},{value:'notes',label:'Notities'}]}
        value={tab} onChange={setTab}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, margin: '18px 0 12px' }}>
        <Stat label="Actieve deals" value="24" />
        <Stat label="Pijplijn waarde" value="€ 184k" />
        <Stat label="Nieuwe leads · wk" value="12" accent />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <RevenueChart />
        <PhaseBars />
        <ActivityCard />
      </div>
    </div>
  );
}
window.DashboardScreen = DashboardScreen;
