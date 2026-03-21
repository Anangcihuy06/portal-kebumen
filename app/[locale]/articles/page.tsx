import type { Metadata } from 'next';
import ArticlesContent from './ArticlesContent';

export const metadata: Metadata = {
  title: 'Artikel & Berita Kebumen',
  description: 'Baca artikel terbaru tentang pariwisata, budaya, dan informasi wisata di Kabupaten Kebumen, Jawa Tengah.',
};

export default function ArticlesPage() {
  return <ArticlesContent />;
}
