import { Article, Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Pantai Logending",
    slug: "pantai-logending",
    category: "Pantai",
    location: "Kecamatan Ayah, Kebumen",
    description: "Pantai Logending atau Pantai Ayah merupakan destinasi wisata bahari yang berpadu dengan hutan asri. Pantai dengan pasir landai ini dibatasi oleh tebing terjal batu gamping di sebelah timur dan muara Sungai Bodo di sebelah barat yang menjadi pembatas administrasi dengan Kabupaten Cilacap.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800"
    ],
    facilities: ["Area Parkir", "Warung Makanan", "Toilet", "Mushola", "Spot Foto", "Area Berkemah", "Sewa Perahu"],
    ticketPrice: "Rp 7.500",
    hours: "06:00 - 18:00 WIB",
    coordinates: { lat: -7.67, lng: 109.42 }
  },
  {
    id: 2,
    name: "Gua Jatijajar",
    slug: "gua-jatijajar",
    category: "Gua",
    location: "Desa Jatijajar, Kecamatan Ayah, Kebumen",
    description: "Gua Jatijajar merupakan salah satu destinasi wisata alam paling terkenal di Kebumen. Gua ini menawarkan keindahan alam bawah tanah dengan formasi stalaktit dan stalagmit yang terbentuk selama jutaan tahun. Konon ditemukan pada tahun 1802 oleh seorang petani bernama Jayamenawi.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800"
    ],
    facilities: ["Area Parkir", "Toilet", "Warung", "Tempat Ibadah", "Spot Foto", "Sungai Bawah Tanah"],
    ticketPrice: "Rp 15.000",
    hours: "07:30 - 16:00 WIB",
    coordinates: { lat: -7.68, lng: 109.43 }
  },
  {
    id: 3,
    name: "Gua Petruk",
    slug: "gua-petruk",
    category: "Gua",
    location: "Desa Candirenggo, Kecamatan Ayah, Kebumen",
    description: "Gua Petruk merupakan salah satu goa yang sudah dibuka untuk umum dan pengunjung bisa menikmati mahakarya Sang Pencipta. Situs geologi yang terbentuk dari proses alamiah di Kawasan Karst Gombong Selatan ini keseluruhannya terbentuk dari kapur dengan panjang hingga 2 Km.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800"
    ],
    facilities: ["Area Parkir", "Guide lokal", "Peralatan Caving", "Toilet"],
    ticketPrice: "Rp 25.000",
    hours: "08:00 - 17:00 WIB",
    coordinates: { lat: -7.69, lng: 109.44 }
  },
  {
    id: 4,
    name: "Pantai Karang Bolong",
    slug: "pantai-karang-bolong",
    category: "Pantai",
    location: "Kecamatan Ayah, Kebumen",
    description: "Pantai Karang Bolong merupakan salah satu pantai yang cukup populer dengan keindahan pantai yang dikelilingi bukit yang lebat. Terdapat sebuah goa yang terkenal sebagai sarang burung walet yang disebut Goa Karang Bolong di sisi timur pantai.",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ],
    facilities: ["Area Parkir", "Warung", "Toilet", "Spot Foto"],
    ticketPrice: "Rp 5.000",
    hours: "07:00 - 18:00 WIB",
    coordinates: { lat: -7.66, lng: 109.41 }
  },
  {
    id: 5,
    name: "Danau Sempor",
    slug: "danau-sempor",
    category: "Danau",
    location: "Kecamatan Gombong, Kebumen",
    description: "Danau Sempor terletak di Kecamatan Gombong dengan keindahan yang memukau, dikelilingi perbukitan. Danau ini sangat ideal untuk bersantai dan menikmati pemandangan alam yang asri.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800"
    ],
    facilities: ["Area Parkir", "Warung", "Perahu Sewa", " Gazebo", "Toilet"],
    ticketPrice: "Rp 10.000",
    hours: "07:00 - 17:00 WIB",
    coordinates: { lat: -7.60, lng: 109.50 }
  },
  {
    id: 6,
    name: "Songking Waterpark",
    slug: "songking-waterpark",
    category: "WATERPARK",
    location: "Kebumen",
    description: "Songking Waterpark merupakan destinasi wisata air yang terletak di Kabupaten Kebumen dengan berbagai wahana menarik seperti seluncur air, kolam renang anak-anak dan dewasa, serta berbagai tempat untuk berswafoto.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ],
    facilities: ["Kolam Renang", "Seluncur Air", "Area Parkir", "Warung", "Gazebo", "Toilet"],
    ticketPrice: "Rp 35.000",
    hours: "08:00 - 17:00 WIB",
    coordinates: { lat: -7.65, lng: 109.45 }
  }
];

export const articles: Article[] = [
  {
    id: 1,
    title: "Pesona Pantai Logending yang Memukau Pengunjung",
    slug: "pesona-pantai-logending",
    excerpt: "Keindahan pantai dengan sentuhan sejarah benteng pertahanan Jepang dan Belanda, serta pemandangan muara Sungai Bodo yang menawan.",
    content: `Pantai Logending atau Pantai Ayah merupakan salah satu destinasi wisata bahari paling populer di Kabupaten Kebumen. Pantai yang terletak di Desa Ayah, Kecamatan Ayah ini memiliki keunikan tersendiri dengan hamparan pasir berwarna cokelat kehitaman yang landai.

Pada masa pemerintahan Jepang dan Belanda, Pantai Logending berfungsi sebagai benteng pertahanan. Nama "Logending" sendiri mencerminkan keberadaan pohon kayu dan alat musik tradisional "Gending."

Keindahan alamnya semakin menonjol karena pantai ini juga merupakan muara dari Sungai Bodo yang memisahkan Kabupaten Kebumen dan Cilacap. Para wisatawan dapat menikmati panorama muara sungai dengan menyewa perahu nelayan.

Pantai ini dikelilingi oleh bukit-bukit yang dihiasi dengan pohon jati dan batu-batu besar di sepanjang bagian selatannya. Di atas bukit, terdapat sebuah rumah dengan pagar pembatas yang menawarkan pemandangan luar biasa.

Bagi pecinta camping, hutan wisata milik Perum Perhutani KPH Kedu Selatan dengan ketinggian sekitar 5 meter di atas permukaan air laut ini sangat ideal untuk berkemah. Suhu udara berkisar antara 24 hingga 34 derajat Celsius.

Fasilitas yang tersedia sangat lengkap, mulai dari area parkir, warung makanan, toilet, mushola, spot foto, hingga penyewaan perahu untuk menjelajahi muara sungai.`,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    category: "Wisata Alam",
    author: "Admin",
    publishedAt: "2026-03-21",
    readTime: 5
  },
  {
    id: 2,
    title: "Gua Jatijajar: Petualangan di Perut Bumi dengan Stalaktit Jutaan Tahun",
    slug: "gua-jatijajar-stalaktit",
    excerpt: "Gua bersejarah dengan formasi stalaktit dan stalagmit yang memukau, serta empat mata air yang memiliki mitos menarik.",
    content: `Gua Jatijajar merupakan salah satu destinasi wisata alam paling terkenal di Kebumen yang memikat hati para petualang dan pencinta sejarah. Gua ini menawarkan keindahan alam bawah tanah yang spektakuler dengan formasi stalaktit dan stalagmit yang terbentuk selama jutaan tahun.

Gua yang keseluruhannya terbentuk dari batuan kapur ini memiliki panjang sekitar 250 meter, lebar rata-rata 15 meter, dan tinggi rata-rata 12 meter. Lokasi gua ini berada 50 meter di atas permukaan laut.

Konon, nama "Jatijajar" berasal dari dua pohon jati yang tumbuh sejajar di depan pintu gua. Gua ini ditemukan pada tahun 1802 oleh seorang petani bernama Jayamenawi yang sedang mengambil rumput, kemudian jatuh ke sebuah lubang yang ternyata ventilasi gua.

Di dalam gua, pengunjung akan disuguhi keindahan formasi stalaktit dan stalagmit yang megah. Pantulan cahaya dari dinding gua menciptakan suasana yang eksotis dan memukau.

Terdapat juga empat mata air yang masing-masing memiliki mitos tersendiri, yaitu:
1. Sendang Kantil - Dipercaya mampu meningkatkan wibawa dan karisma
2. Sendang Mawar - Membawa keberuntungan dalam urusan percintaan
3. Sendang Puserbumi - Dipercaya memberikan ketenangan hati
4. Sendang Jombor - Dipercaya dapat menyembuhkan penyakit

Di dalam gua juga terdapat 8 diorama dengan 32 patung yang menceritakan legenda Raden Kamandaka dan menghiasi area dalam gua ini. Gua ini buka setiap hari Senin-Minggu mulai pukul 07.30 pagi hingga 16.00 sore.`,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
    category: "Wisata Alam",
    author: "Admin",
    publishedAt: "2026-03-20",
    readTime: 6
  },
  {
    id: 3,
    title: "Gua Petruk: Eksplorasi Gua Karst Gombong Selatan",
    slug: "gua-petruk-eksplorasi",
    excerpt: "Surga tersembunyi bagi pecinta petualangan dengan keindahan geologi dan tantangan susur gua yang mendebarkan.",
    content: `Gua Petruk merupakan salah satu goa yang sudah dibuka untuk umum di Kawasan Karst Gombong Selatan. Berbeda dengan Gua Jatijajar yang sudah dimodifikasi untuk wisata keluarga, Gua Petruk menawarkan pengalaman susur gua (caving) yang jauh lebih menantang dan alami.

Situs geologi yang keseluruhannya terbentuk dari kapur ini memiliki panjang keseluruhan hingga 2 Km dengan panjang jelajah 100 meter hingga 664 meter, lebar rata-rata 14 meter, dan tinggi rata-rata 32 meter.

Gua Petruk berjarak sekitar 7 km dari Gua Jatijajar, sehingga dapat dijangkau dalam satu rute perjalanan wisata. Gua ini mengalir di sungai dangkal yang增添了 nuansa eksotis bagi para penjelajah.

Di dalam gua, terdapat beberapa ruang besar dengan formasi batuan yang menawan. Pantulan cahaya senter dari dinding goa menciptakan siluet-siluet yang menakjubkan. Beragam formasi stalaktit dan stalagmit yang terbentuk selama jutaan tahun menambah keindahan gua ini.

Dengan nuansa alami, keindahan karst, serta tantangan yang ditawarkan, Gua Petruk menjadi surga tersembunyi bagi pecinta petualangan. Destinasi ini bukan hanya menyajikan keindahan, tetapi juga pengalaman mendebarkan yang sulit dilupakan.`,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200",
    category: "Petualangan",
    author: "Admin",
    publishedAt: "2026-03-19",
    readTime: 5
  },
  {
    id: 4,
    title: "Geopark Kebumen: 365 Gua dan 982 Bukit Karst",
    slug: "geopark-kebumen",
    excerpt: "Kabupaten Kebumen resmi menjadi Geopark Global UNESCO dengan kekayaan geologi yang luar biasa.",
    content: `Kabupaten Kebumen telah resmi diakui sebagai Geopark Global UNESCO, sebuah pengakuan internasional terhadap kekayaan geologi luar biasa yang dimiliki wilayah ini.

Dengan total di kawasan Geosite Karst Gombong Selatan ini ada sekitar 365 gua dan 982 bukit karst, Kebumen menjadi surga bagi para pecinta geologi dan petualangan.

Geopark Kebumen mencakup berbagai situs geologi penting, termasuk:
- Gua Jatijajar - Goa terkenal dengan stalaktit dan stalagmit
- Gua Petruk - Goa petualangan bagi pencinta caving
- Perbukitan Karst - Formasi batuan kapur yang spektakuler
- Pantai dengan formasi geologi unik

Pengakuan UNESCO ini akan meningkatkan potensi pariwisata Kebumen di kancah internasional dan mendukung upaya pelestarian warisan geologi untuk generasi mendatang.`,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200",
    category: "Berita",
    author: "Admin",
    publishedAt: "2026-03-18",
    readTime: 4
  },
  {
    id: 5,
    title: "Tips Berkemah di Pantai Logending",
    slug: "tips-berkemah-pantai-logending",
    excerpt: "Panduan lengkap untuk pengalaman berkemah yang menyenangkan dan aman di Pantai Logending.",
    content: `Pantai Logending merupakan salah satu spot berkemah favorit di Kebumen. Berikut tips untuk pengalaman berkemah yang menyenangkan:

1. Waktu Terbaik
Kunjungan terbaik adalah saat musim kemarau (April-Oktober) untuk cuaca cerah dan udara sejuk.

2. Perlengkapan yang Dibawa
- Tenda yang tahan air
- Sleeping bag atau selimut tebal
- Senter dan lampu portable
- Obat-obatan pribadi
- Air minum yang cukup

3. Lokasi Berkemah
Hutan wisata milik Perum Perhutani di sekitar pantai menyediakan area camping ground yang tertata dengan baik.

4. Fasilitas yang Tersedia
- Toilet dan kamar mandi
- Area pembuangan sampah
- Keamanan 24 jam

5. Tips Keamanan
- Jangan meninggalkan barang berharga tanpa pengawasan
- Jaga kebersihan area camping
- Patuhi aturan yang berlaku di kawasan hutan`,
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200",
    category: "Tips",
    author: "Admin",
    publishedAt: "2026-03-17",
    readTime: 4
  },
  {
    id: 6,
    title: "Kuliner Khas Kebumen yang Wajib Dicoba",
    slug: "kuliner-khas-kebumen",
    excerpt: "Jelajahi cita rasa autentik Kebumen dari keripik singkong hingga makanan tradisional lainnya.",
    content: `Kabupaten Kebumen tidak hanya terkenal dengan keindahan alamnya, tetapi juga kaya akan kuliner khas yang menggugah selera. Berikut beberapa kuliner yang wajib dicoba saat berkunjung ke Kebumen:

1. Keripik Singkong (Lanting)
 Camilan renyah dari singkong tipis-tipis yang dibumbui rempah khas. Tersedia di berbagai oleh-oleh shops di sekitar area wisata.

2. Gula Aren
 Produk olahan aren yang dimanfaatkan menjadi gula merah dengan aroma dan rasa yang autentik.

3. Mie Lendhot
 Mie tradisional dengan kuah kaldu gurih dan topping sayuran. Cocok untuk menghangatkan tubuh setelah berwisata.

4. Nasi Ponggol
 Nasi yang dimasak dengan santan dan rempah dalam bungkusan daun pisang.

5. Es Degan
 Minuman segar dari air kelapa muda yang dicampur es serut, sempurna untuk cuaca tropis.

6. Aneka Seafood
 Karena letaknya di pesisir selatan,海鲜 segar seperti ikan, udang, dan cumi mudah ditemukan di warung-warung sekitar pantai.`,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    category: "Kuliner",
    author: "Admin",
    publishedAt: "2026-03-16",
    readTime: 5
  },
  {
    id: 7,
    title: "Rute Menuju Destinasi Wisata Kebumen",
    slug: "rute-destinasi-kebumen",
    excerpt: "Panduan lengkap jalur dan transportasi untuk mencapai berbagai destinasi wisata di Kebumen.",
    content: `Kabupaten Kebumen terletak di jalur selatan Jawa Tengah, membuatnya mudah diakses dari berbagai arah. Berikut panduan rute menuju destinasi wisata utama:

Dari Yogyakarta:
- Ambil jalur selatan menuju Gombong (± 2 jam)
- Lanjutkan perjalanan ke selatan mengikuti petunjuk arah
- Pantai Logending berjarak ± 28 km dari Gombong

Dari Purwokerto:
- Ikuti jalur menuju Banyumas
- Lanjutkan ke selatan menuju Kebumen
- Gua Jatijajar berjarak ± 38 km dari pusat Kota Kebumen

Dari Cilacap:
- Ikuti jalur utara menuju Gombong
- Akan melewati Pantai Logending di perbatasan
- Lanjutkan perjalanan menuju destinasi lain

Transportasi Umum:
- Bus: Trayek AKAP dari Jakarta, Bandung, Surabaya
- Kereta: Stasiun terdekat di Gombong atau Kebumen
- Angkutan umum lokal tersedia untuk mobilitas di dalam kota`,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200",
    category: "Guide",
    author: "Admin",
    publishedAt: "2026-03-15",
    readTime: 4
  },
  {
    id: 8,
    title: "Legenda dan Cerita Mistis Gua Jatijajar",
    slug: "legenda-gua-jatijajar",
    excerpt: "Mengenal mitos dan cerita rakyat yang melekat pada Gua Jatijajar sejak ratusan tahun lalu.",
    content: `Gua Jatijajar tidak hanya terkenal dengan keindahan geologinya, tetapi juga kaya akan legenda dan cerita mistis yang sudah melekat sejak ratusan tahun lalu.

Legenda Raden Kamandaka:
 Gua ini dikaitkan dengan legenda Raden Kamandaka, putra Prabu Siliwangi dari Kerajaan Pajajaran. Konon, Raden Kamandaka melakukan pertapaan di gua ini dan mendapat petunjuk untuk menjadi lutung kasarung agar dapat mempersunting pujaan hatinya, Dewi Ciptoroso.

Keempat Mata Air Misterius:
 Di dalam gua terdapat empat sendang (mata air) yang masing-masing memiliki mitos:
1. Sendang Kantil - Meningkatkan wibawa dan karisma
2. Sendang Mawar - Membawa keberuntungan percintaan
3. Sendang Puserbumi - Menenangkan hati
4. Sendang Jombor - Menyembuhkan penyakit

Cerita Penemuan Gua:
 Pada tahun 1802, petani Jayamenawi menemukan gua ini saat ia jatuh ke dalam lubang ventilasi saat sedang mengambil rumput di atas gua.`,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200",
    category: "Budaya",
    author: "Admin",
    publishedAt: "2026-03-14",
    readTime: 5
  },
  {
    id: 9,
    title: "Aktivitas Seru di Danau Sempor",
    slug: "aktivitas-danau-sempor",
    excerpt: "Berbagai aktivitas menarik yang bisa dilakukan di kawasan Danau Sempor yang indah.",
    content: `Danau Sempor terletak di Kecamatan Gombong dengan keindahan yang memukau, dikelilingi perbukitan yang hijau. Berikut berbagai aktivitas yang bisa dilakukan:

1. Memancing
Danau ini terkenal sebagai spot memancing yang populer. Pengunjung bisa membawa peralatan pancing sendiri atau menyewa di lokasi.

2. Perahu Keliling
Sewa perahu untuk mengelilingi danau dan menikmati pemandangan dari tengah danau.

3. Fotografi
Pemandangan danau yang dikelilingi perbukitan sangat instagramable, terutama saat sunrise dan sunset.

4. Piknik
Bawa bekal dan nikmati suasana santai di gazebo yang tersedia di tepi danau.

5. Birdwatching
Kawasan ini rumah bagi berbagai jenis burung yang интересно untuk diamati.`,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200",
    category: "Wisata Alam",
    author: "Admin",
    publishedAt: "2026-03-13",
    readTime: 4
  },
  {
    id: 10,
    title: "Persiapan Caving di Gua Petruk",
    slug: "persiapan-caving-gua-petruk",
    excerpt: "Yang perlu diketahui dan dipersiapkan sebelum menjelajahi Gua Petruk yang menantang.",
    content: `Gua Petruk menawarkan pengalaman caving (susur gua) yang mendebarkan dan penuh tantangan. Berikut persiapan yang perlu dilakukan:

1. Perlengkapan Wajib
- Helmet dengan lampu kepala (headlamp)
- Sarung tangan tebal
- Sepatu boots anti-selip
- Pakaian lengan panjang
- Senter cadangan

2. Kondisi Fisik
- Tidak disarankan untuk yang memiliki claustrophobia
- Membutuhkan stamina baik karena jalur berlumpur
- Usia minimal 12 tahun dengan pengawasan dewasa

3. Pemandu Lokal
Sangat disarankan untuk menyewa pemandu lokal yang berpengalaman. Mereka menguasai jalur-jalur aman di dalam gua.

4. Harga Tiket dan Sewa Peralatan
- Tiket masuk: Rp 25.000
- Sewa peralatan lengkap: Rp 50.000
- Guide lokal: Rp 100.000 (sudah termasuk peralatan)

5. Tips Penting
- Jangan membawa terlalu banyak barang
- Bawa air minum yang cukup
- Ikuti instruksi pemandu dengan ketat`,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200",
    category: "Petualangan",
    author: "Admin",
    publishedAt: "2026-03-12",
    readTime: 5
  }
];
