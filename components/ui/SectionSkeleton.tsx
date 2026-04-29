import styles from './SectionSkeleton.module.css';

function Skel({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div className={styles.skeleton} style={{ background: bg }}>
      <div className={styles.shimmer} />
      <div className={styles.inner}>{children}</div>
    </div>
  );
}

function Bar({ w, h, opacity = 0.15 }: { w: string; h: number; opacity?: number }) {
  return (
    <div
      className={styles.bar}
      style={{ width: w, height: h, background: `rgba(255,255,255,${opacity})` }}
    />
  );
}

function DarkBar({ w, h }: { w: string; h: number }) {
  return (
    <div
      className={styles.bar}
      style={{ width: w, height: h, background: 'rgba(26,19,12,0.1)' }}
    />
  );
}

export function StatsSkeleton() {
  return (
    <Skel bg="var(--ink-950)">
      <div className={styles.row}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Bar w="60%" h={52} />
            <Bar w="80%" h={16} />
            <Bar w="50%" h={12} opacity={0.08} />
          </div>
        ))}
      </div>
    </Skel>
  );
}

export function MarqueeSkeleton() {
  return (
    <div style={{ background: 'var(--ink-950)', padding: '14px 0', position: 'relative', overflow: 'hidden' }}>
      <div className={styles.shimmer} />
      <div style={{ display: 'flex', gap: 48, padding: '0 40px' }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{ height: 20, width: 100, borderRadius: 4, background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
        ))}
      </div>
    </div>
  );
}

export function ServicesSkeleton() {
  return (
    <Skel bg="var(--accent-cream)">
      <div className={styles.row} style={{ marginBottom: 8 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <DarkBar w="120px" h={16} />
          <DarkBar w="260px" h={40} />
        </div>
        <DarkBar w="140px" h={20} />
      </div>
      <div className={styles.row} style={{ flexWrap: 'wrap' }}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} style={{ flex: '1 1 calc(33% - 12px)', minHeight: 200, borderRadius: 20, background: 'rgba(26,19,12,0.07)', border: '2px solid rgba(26,19,12,0.1)' }} />
        ))}
      </div>
    </Skel>
  );
}

export function ProcessSkeleton() {
  return (
    <Skel bg="var(--accent-cream)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 8 }}>
        <DarkBar w="100px" h={16} />
        <DarkBar w="280px" h={40} />
      </div>
      <div className={styles.row}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={{ flex: 1, minHeight: 160, borderRadius: 16, background: 'rgba(26,19,12,0.07)', border: '2px solid rgba(26,19,12,0.1)' }} />
        ))}
      </div>
    </Skel>
  );
}

export function CaseStudiesSkeleton() {
  return (
    <Skel bg="var(--accent-cream)">
      <div className={styles.row} style={{ marginBottom: 8 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <DarkBar w="120px" h={16} />
          <DarkBar w="300px" h={40} />
        </div>
      </div>
      <div className={styles.row}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ flex: 1, minHeight: 240, borderRadius: 20, background: 'rgba(26,19,12,0.07)', border: '2px solid rgba(26,19,12,0.1)' }} />
        ))}
      </div>
    </Skel>
  );
}

export function TestimonialsSkeleton() {
  return (
    <Skel bg="var(--ink-950)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 8 }}>
        <Bar w="100px" h={16} />
        <Bar w="280px" h={40} />
      </div>
      <div className={styles.row}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ flex: 1, minHeight: 180, borderRadius: 20, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
        ))}
      </div>
    </Skel>
  );
}

export function FaqSkeleton() {
  return (
    <Skel bg="var(--ink-950)">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 56 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <Bar w="80px" h={24} />
          <Bar w="220px" h={56} />
          <Bar w="180px" h={16} />
          <Bar w="160px" h={16} opacity={0.08} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ height: 60, borderRadius: 14, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }} />
          ))}
        </div>
      </div>
    </Skel>
  );
}

export function CtaStripSkeleton() {
  return (
    <div style={{ background: 'var(--tenta-500)', padding: '72px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, position: 'relative', overflow: 'hidden', borderTop: '4px solid var(--ink-950)', borderBottom: '4px solid var(--ink-950)' }}>
      <div className={styles.shimmer} />
      <Bar w="340px" h={52} />
      <Bar w="220px" h={20} opacity={0.2} />
      <Bar w="180px" h={48} opacity={0.25} />
    </div>
  );
}
