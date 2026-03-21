import type { Metadata } from 'next';
import DestinationsContent from './DestinationsContent';

export const metadata: Metadata = {
  title: 'Destinasi Wisata Kebumen',
  description: 'Jelajahi destinasi wisata terbaik di Kabupaten Kebumen, Jawa Tengah. Dari pantai hingga gua purba, temukan keindahan alam yang menakjubkan.',
};

export default function DestinationsPage() {
  return <DestinationsContent />;
}
