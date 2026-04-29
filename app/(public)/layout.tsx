import Nav from '@/components/landing/Nav';
import Footer from '@/components/landing/Footer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
