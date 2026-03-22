import { Article, Destination } from '@/types';

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Pantai Logending",
    slug: "pantai-logending",
    category: "Pantai",
    location: "Desa Ayah, Kecamatan Ayah, Kebumen",
    description: "Pantai Logending merupakan pantai paling lengkap di Kebumen dengan perpaduan hamparan pasir cokelat, hutan jati, dan pemandangan Samudera Hindia. Tempat ini juga memiliki nilai sejarah sebagai bekas benteng pertahanan pada masa Jepang dan Belanda.",
    image: "https://nurohmansmkn2.wordpress.com/wp-content/uploads/2014/12/pantai-logending.jpg",
    gallery: [
      "https://nurohmansmkn2.wordpress.com/wp-content/uploads/2014/12/pantai-logending.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ],
    facilities: ["Area Parkir", "Mushola", "Gazebo", "Toilet", "Warung", "Sewa Perahu", "Taman Bermain", "Gardu Pandang"],
    ticketPrice: "Rp 5.000 - Rp 10.000",
    hours: "07:00 - 18:00 WIB",
    coordinates: { lat: -7.72, lng: 109.39 }
  },
  {
    id: 2,
    name: "Gua Jatijajar",
    slug: "gua-jatijajar",
    category: "Gua",
    location: "Desa Jatijajar, Kecamatan Ayah, Kebumen",
    description: "Gua Jatijajar merupakan salah satu destinasi wisata alam paling terkenal di Kebumen. Gua ini menawarkan keindahan alam bawah tanah dengan formasi stalaktit dan stalagmit yang terbentuk selama jutaan tahun. Konon ditemukan pada tahun 1802 oleh seorang petani bernama Jayamenawi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Goa_jati_jajar_ayah_kebumen.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Goa_jati_jajar_ayah_kebumen.jpg",
      "https://www.kebumenkab.go.id/uploads/potenda/POT_5_29092025-011935-565_goa-jatija.jpg"
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
    image: "https://www.kebumenkab.go.id/resource/doc/potenda/images/29092025-013627-271_goa-petruk.jpg",
    gallery: [
      "https://www.kebumenkab.go.id/resource/doc/potenda/images/29092025-013627-271_goa-petruk.jpg",
      "https://www.antarafoto.com/images/source/2025/07/2570953.jpg"
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
    image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2025/04/23/1159263764.jpg",
    gallery: [
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2025/04/23/1159263764.jpg",
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/1200x675/photo/2025/04/23/1159263764.jpg"
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1NMTwIjJC4GAGuJDpTiK6Rtdwb03BwzJyg&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1NMTwIjJC4GAGuJDpTiK6Rtdwb03BwzJyg&s",
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
    image: "https://kebumen24.com/wp-content/uploads/2020/07/FOTO-Oyek-Wsiata-Songging-Water-Park.jpg",
    gallery: [
      "https://kebumen24.com/wp-content/uploads/2020/07/FOTO-Oyek-Wsiata-Songging-Water-Park.jpg",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
    ],
    facilities: ["Kolam Renang", "Seluncur Air", "Area Parkir", "Warung", "Gazebo", "Toilet"],
    ticketPrice: "Rp 35.000",
    hours: "08:00 - 17:00 WIB",
    coordinates: { lat: -7.65, lng: 109.45 }
  },
  {
    id: 7,
    name: "Pantai Menganti",
    slug: "pantai-menganti",
    category: "Pantai",
    location: "Desa Karangduwur, Kecamatan Ayah, Kebumen",
    description: "Pantai Menganti terkenal dengan pasir putih yang langka di pantai selatan Jawa dan perbukitan hijau yang mengelilinginya. Terkenal sebagai 'New Zealand-nya Kebumen' dengan pemandangan tebing karst yang indah dan sunsets yang memukau.",
    image: "https://assets-a1.kompasiana.com/items/album/2022/03/13/disebut-sebagai-new-zealand-nya-indonesia-ini-7-pesona-pantai-menganti-di-kebumen-rev-1-622d7310bb44860a1f2d3ec2.jpeg",
    gallery: [
      "https://assets-a1.kompasiana.com/items/album/2022/03/13/disebut-sebagai-new-zealand-nya-indonesia-ini-7-pesona-pantai-menganti-di-kebumen-rev-1-622d7310bb44860a1f2d3ec2.jpeg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
    ],
    facilities: ["Area Parkir", "Warung", "Toilet", "Spot Foto", "Mercusuar", "Tanjung Karangbata"],
    ticketPrice: "Rp 10.000",
    hours: "24 Jam",
    coordinates: { lat: -7.77, lng: 109.41 }
  },
  {
    id: 8,
    name: "Sagara View",
    slug: "sagara-view",
    category: "Bukit",
    location: "Desa Karangbolong, Kecamatan Buayan, Kebumen",
    description: "Sagara View merupakan destinasi wisata di bukit yang menawarkan pemandangan langsung ke Samudera Hindia dan Pantai Karangbolong dari ketinggian. Tempat ini sempurna untuk menikmati sunrise dan sunset dengan panorama yang spektakuler.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9G3XHMA5Ufr5Ga3P7sn8LiJI4YvDZwX6udQ&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9G3XHMA5Ufr5Ga3P7sn8LiJI4YvDZwX6udQ&s",
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800"
    ],
    facilities: ["Spot Foto", "Gazebo", "Foodcourt", "Playground", "Toilet", "Area Parkir"],
    ticketPrice: "Rp 20.000",
    hours: "07:00 - 22:00 WIB",
    coordinates: { lat: -7.65, lng: 109.40 }
  },
  {
    id: 9,
    name: "Pantai Suwuk",
    slug: "pantai-suwuk",
    category: "Pantai",
    location: "Desa Tambakmulyo, Kecamatan Puring, Kebumen",
    description: "Pantai Suwuk menawarkan hamparan pasir cokelat yang luas dengan pemandangan Pegunungan Sewu di kejauhan. Pantai ini cocok untuk bermain pasir, berkuda, dan menikmati keindahan alam pesisir selatan.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800"
    ],
    facilities: ["Area Parkir", "Warung", "Toilet", "Sewa Kuda", "Gazebo"],
    ticketPrice: "Rp 4.500",
    hours: "24 Jam",
    coordinates: { lat: -7.72, lng: 109.38 }
  },
  {
    id: 10,
    name: "Pantai Sawangan",
    slug: "pantai-sawangan",
    category: "Pantai",
    location: "Desa Surorejan, Kecamatan Puring, Kebumen",
    description: "Pantai Sawangan terkenal dengan muara sungainya yang asri dan pepohonan cemara yang rindang. Pengunjung bisa bermain air di muara sungai atau menikmati keindahan pantai dengan ombak yang kencang.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800"
    ],
    facilities: ["Area Parkir", "Warung", "Toilet", "Saung", "Jembatan Bambu"],
    ticketPrice: "Rp 5.000",
    hours: "06:00 - 18:00 WIB",
    coordinates: { lat: -7.73, lng: 109.37 }
  },
  {
    id: 11,
    name: "Benteng Van Der Wijck",
    slug: "benteng-van-der-wijck",
    category: "Sejarah",
    location: "Gombong, Kebumen",
    description: "Benteng Van Der Wijck merupakan benteng kolonial berbentuk segi delapan yang dibangun pada tahun 1881. Dengan ketebalan dinding 1,4 meter dan tinggi 10 meter, benteng ini memiliki nilai sejarah penting sebagai bekas markas pertahanan Belanda.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Benteng_Van_Der_Wijck.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/8/84/Benteng_Van_Der_Wijck.jpg",
      "https://images.unsplash.com/photo-1590073242678-70d786b36b6d?w=800"
    ],
    facilities: ["Area Parkir", "Toilet", "Guide Lokal", "Museum"],
    ticketPrice: "Rp 10.000",
    hours: "08:00 - 17:00 WIB",
    coordinates: { lat: -7.60, lng: 109.52 }
  },
  {
    id: 12,
    name: "Jembangan Wisata Alam",
    slug: "jembangan-wisata-alam",
    category: "Wisata Alam",
    location: "Desa Jembangan, Kecamatan Poncowarno, Kebumen",
    description: "Jembangan Wisata Alam menawarkan keindahan telaga hijau yang dikelilingi hutan lebat. Destinasi ini cocok untuk keluarga dengan berbagai wahana seperti perahu wisata, kolam pemancingan, dan area outbound.",
    image: "https://i0.wp.com/www.kangamir.com/wp-content/uploads/2019/07/%40exotickebumen.jpg",
    gallery: [
      "https://i0.wp.com/www.kangamir.com/wp-content/uploads/2019/07/%40exotickebumen.jpg",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
    ],
    facilities: ["Perahu Wisata", "Kolam Pemancingan", "Area Outbound", "Restoran Apung", "Toilet"],
    ticketPrice: "Rp 5.000",
    hours: "07:00 - 17:00 WIB",
    coordinates: { lat: -7.72, lng: 109.68 }
  },
  {
    id: 13,
    name: "Curug Silancur",
    slug: "curug-silancur",
    category: "Air Terjun",
    location: "Desa Wadasmalang, Kecamatan Karangsambung, Kebumen",
    description: "Curug Silancur merupakan air terjun tersembunyi dengan ketinggian sekitar 25 meter. Dikelilingi bebatuan purba berwarna hitam dan vegetasi hijau yang rindang, tempat ini menjadi surga tersembunyi bagi pecinta alam.",
    image: "https://www.jogjasuper.co.id/wp-content/uploads/2025/04/lokasi-Curug-Silancur.webp",
    gallery: [
      "https://www.jogjasuper.co.id/wp-content/uploads/2025/04/lokasi-Curug-Silancur.webp",
      "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800"
    ],
    facilities: ["Area Parkir", "Toilet", "Mushola", "Spot Foto"],
    ticketPrice: "Gratis",
    hours: "24 Jam",
    coordinates: { lat: -7.68, lng: 109.55 }
  },
  {
    id: 14,
    name: "Curug Silangit",
    slug: "curug-silangit",
    category: "Air Terjun",
    location: "Desa Sidoagung, Kecamatan Sruweng, Kebumen",
    description: "Curug Silangit adalah air terjun setinggi 12 meter dengan kolam alami yang cocok untuk berenang. Terletak di kaki perbukitan Giripurno, tempat ini menawarkan suasana sejuk dan alami yang jauh dari keramaian.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9OCfzKhAM4nbn6wm-1uQXShCMvG_gRNZuw&s",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9OCfzKhAM4nbn6wm-1uQXShCMvG_gRNZuw&s",
      "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=800"
    ],
    facilities: ["Area Parkir", "Gazebo", "Toilet", "Spot Foto"],
    ticketPrice: "Rp 5.000",
    hours: "08:00 - 17:00 WIB",
    coordinates: { lat: -7.72, lng: 109.62 }
  },
  {
    id: 15,
    name: "Bukit Pentulu Indah",
    slug: "bukit-pentulu-indah",
    category: "Bukit",
    location: "Desa Kaligending, Kecamatan Karangsambung, Kebumen",
    description: "Bukit Pentulu Indah menawarkan pemandangan spektakuler Gunung Slamet dari ketinggian 300 meter. Dikenal sebagai spot terbaik untuk menikmati sunrise dengan latar belakang pohon pinus yang rindang dan sawah hijau.",
    image: "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/kebumen/bukit-pentulu-indah-profile1670082030.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim",
    gallery: [
      "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/kebumen/bukit-pentulu-indah-profile1670082030.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
    ],
    facilities: ["Spot Foto", "Gardu Pandang", "Gazebo", "Area Camping", "Flying Fox", "Toilet"],
    ticketPrice: "Rp 5.000",
    hours: "05:30 - 21:00 WIB",
    coordinates: { lat: -7.67, lng: 109.53 }
  },
  {
    id: 16,
    name: "Geopark Kebumen",
    slug: "geopark-kebumen",
    category: "Geopark",
    location: "Kecamatan Karangsambung, Kebumen",
    description: "Geopark Kebumen merupakan kawasan geologi dengan situs terlengkap di Asia Tenggara yang telah diajukan untuk diakui oleh UNESCO Global Geopark. Kawasan ini menyimpan berbagai batuan purba dan formasi geologi unik.",
    image: "https://statik.tempo.co/data/2019/08/23/id_866415/866415_720.jpg",
    gallery: [
      "https://statik.tempo.co/data/2019/08/23/id_866415/866415_720.jpg",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
    ],
    facilities: ["Guide Lokal", "Area Parkir", "Mushola", "Toilet", "Pusat Edukasi Geologi"],
    ticketPrice: "Rp 10.000",
    hours: "08:00 - 17:00 WIB",
    coordinates: { lat: -7.68, lng: 109.52 }
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
    image: "https://nurohmansmkn2.wordpress.com/wp-content/uploads/2014/12/pantai-logending.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Goa_jati_jajar_ayah_kebumen.jpg",
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
    image: "https://www.kebumenkab.go.id/resource/doc/potenda/images/29092025-013627-271_goa-petruk.jpg",
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
    image: "https://statik.tempo.co/data/2019/08/23/id_866415/866415_720.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Goa_jati_jajar_ayah_kebumen.jpg",
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
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG1NMTwIjJC4GAGuJDpTiK6Rtdwb03BwzJyg&s",
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
    image: "https://www.kebumenkab.go.id/resource/doc/potenda/images/29092025-013627-271_goa-petruk.jpg",
    category: "Petualangan",
    author: "Admin",
    publishedAt: "2026-03-12",
    readTime: 5
  },
  {
    id: 11,
    title: "Pantai Menganti: Surga Tersembunyi dengan Pasir Putih di Kebumen",
    slug: "pantai-menganti-surga-tersembunyi",
    excerpt: "Nikmati keindahan pasir putih langka dan pemandangan perbukitan karst yang memukau di Pantai Menganti.",
    content: `Pantai Menganti merupakan salah satu pantai terindah di Jawa Tengah dengan keunikan hamparan pasir putih yang langka ditemukan di pantai selatan. Terletak di Desa Karangduwur, Kecamatan Ayah, pantai ini dikelilingi perbukitan hijau yang menjulang tinggi.

Keunikan Pantai Menganti:
Pantai ini memiliki tebing-tebing karst yang indah dan pasir putih yang kontras dengan birunya laut Samudera Hindia. Dari kejauhan, terlihat Pulau Nusakambangan yang menambah keindahan panorama.

Akses dan Rute:
Dari pusat kota Kebumen, perjalanan menuju Pantai Menganti memakan waktu sekitar 1,5 jam dengan melewati jalan yang berkelok-kelok melintasi perbukitan. Meskipun akses sedikit menantang, pemandangan sepanjang perjalanan sangat menakjubkan.

Aktivitas yang Bisa Dilakukan:
- Menikmati sunset di tepi pantai
- Bermain di pasir putih
- Mendaki ke Tanjung Karangbata
- Mengunjungi mercusuar
- Fotografi landscape`,
    image: "https://assets-a1.kompasiana.com/items/album/2022/03/13/disebut-sebagai-new-zealand-nya-indonesia-ini-7-pesona-pantai-menganti-di-kebumen-rev-1-622d7310bb44860a1f2d3ec2.jpeg",
    category: "Wisata Alam",
    author: "Admin",
    publishedAt: "2026-03-11",
    readTime: 5
  },
  {
    id: 12,
    title: "Benteng Van Der Wijck: Jejak Sejarah Kolonial di Gombong",
    slug: "benteng-van-der-wijck-sejarah",
    excerpt: "Mengenal lebih dekat benteng bersejarah yang menjadi saksi bisu masa kolonial di Kebumen.",
    content: `Benteng Van Der Wijck merupakan salah satu peninggalan bersejarah penting di Kabupaten Kebumen. Terletak di kawasan Gombong, benteng ini memiliki arsitektur unik berbentuk segi delapan.

Sejarah Benteng:
Benteng ini dibangun pada tahun 1881 dan awalnya berfungsi sebagai kantor dagang VOC yang didirikan oleh Frans David Cochius. Posteriormente, berubah fungsi menjadi sekolah militer (Pupillen School) bagi calon perwira keturunan Eropa.

Arsitektur Menakjubkan:
Dengan ketebalan dinding 1,4 meter dan tinggi mencapai 10 meter, benteng ini seluruhnya terbuat dari batu bata. Bentuk segi delapan yang unik menjadikannya berbeda dari benteng kolonial lainnya.

Nilai Sejarah:
Selama Perang Diponegoro, benteng ini digunakan untuk berbagai keperluan militer. Bekas bangunan ini kini menjadi salah satu destinasi wisata sejarah yang wajib dikunjungi di Kebumen.`,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/Benteng_Van_Der_Wijck.jpg",
    category: "Sejarah",
    author: "Admin",
    publishedAt: "2026-03-10",
    readTime: 4
  },
  {
    id: 13,
    title: "Bukit Pentulu Indah: Spot Sunrise Favorit dengan View Gunung Slamet",
    slug: "bukit-pentulu-indah-spot-sunrise",
    excerpt: "Rasakan sensasi menikmati sunrise spektakuler dengan pemandangan Gunung Slamet dari Bukit Pentulu Indah.",
    content: `Bukit Pentulu Indah merupakan destinasi wisata yang populer untuk menikmati sunrise di Kebumen. Terletak di Desa Kaligending, Kecamatan Karangsambung, bukit ini memiliki ketinggian sekitar 300 meter di atas permukaan laut.

Pemandangan yang Memukau:
Dari puncak bukit, pengunjung dapat menikmati pemandangan spektakuler Gunung Slamet yang menjulang tinggi. Hamparan sawah hijau dan laut biru menjadi latar sempurna untuk fotografi.

Fasilitas Lengkap:
- Gardu pandang untuk menikmati panorama
- Spot foto dengan berbagai tema
- Area camping untuk pengalaman bermalam
- Flying fox untuk sensasi adrenalin
- Gazebo untuk bersantai

Tips Berkunjung:
Datanglah pagi hari untuk menikmati sunrise terbaik. Jangan lupa membawa kamera dan jaket tebal karena udara di puncak cukup dingin.`,
    image: "https://zjglidcehtsqqqhbdxyp.supabase.co/storage/v1/object/public/atourin/images/destination/kebumen/bukit-pentulu-indah-profile1670082030.jpeg?x-image-process=image/resize,p_100,limit_1/imageslim",
    category: "Wisata Alam",
    author: "Admin",
    publishedAt: "2026-03-09",
    readTime: 4
  },
  {
    id: 14,
    title: "Jembangan Wisata Alam: Telaga Hijau untuk Liburan Keluarga",
    slug: "jembangan-wisata-alam-telaga-hijau",
    excerpt: "Nikmati keindahan telaga hijau yang asri dan berbagai wahana seru di Jembangan Wisata Alam.",
    content: `Jembangan Wisata Alam menjadi destinasi favorit keluarga di Kebumen yang menawarkan perpaduan indah antara danau, hutan, dan berbagai wahana permainan.

Keindahan Telaga:
Telaga hijau yang dikelilingi pepohonan rindang menciptakan suasana sejuk dan nyaman. Pengunjung dapat menikmati pemandangan dari atas jembatan kayu atau dengan menyewa perahu.

Wahana Seru:
- Perahu wisata untuk berkeliling danau
- Kolam pemancingan
- Banana boat
- Sepeda air
- Area outbound
- Jembangan Fantasy Zoo dengan berbagai hewan

Restoran Apung:
Salah satu keunikan Jembangan adalah Restoran Apung yang menawarkan hidangan lezat dengan pemandangan langsung ke telaga.

Dengan harga tiket terjangkau dan fasilitas lengkap, Jembangan Wisata Alam sangat direkomendasikan untuk liburan keluarga.`,
    image: "https://i0.wp.com/www.kangamir.com/wp-content/uploads/2019/07/%40exotickebumen.jpg",
    category: "Wisata Keluarga",
    author: "Admin",
    publishedAt: "2026-03-08",
    readTime: 4
  },
  {
    id: 15,
    title: "Curug Silancur: Hidden Gem Air Terjun di Karangsambung",
    slug: "curug-silancur-hidden-gem",
    excerpt: "Temukan keindahan alam tersembunyi di Curug Silancur dengan bebatuan purba yang menakjubkan.",
    content: `Curug Silancur merupakan salah satu hidden gem di Kebumen yang masih jarang diketahui wisatawan. Terletak di Desa Wadasmalang, Kecamatan Karangsambung, air terjun ini menawarkan keindahan alam yang masih sangat alami.

Keunikan Curug Silancur:
Air terjun ini memiliki ketinggian sekitar 25 meter dengan aliran air yang deras. Keunikannya terletak pada bebatuan purba berwarna hitam yang mengelilingi air terjun, menciptakan kontras yang memukau dengan derasnya air berwarna putih.

Suasana yang Asri:
Dikelilingi vegetasi hijau yang lebat, Curug Silancur menawarkan suasana sejuk dan tenang بعيد dari keramaian. Suara gemericik air menjadi terapi alami yang menyegarkan pikiran.

Akses:
Dari parkiran, pengunjung perlu berjalan kaki sekitar 200 meter untuk mencapai lokasi. Jalur masih berupa tanah dan bebatuan, sehingga disarankan menggunakan alas kaki yang nyaman.

Gratis untuk Dikunjungi:
Keunggulan lain Curug Silancur adalah tidak adanya biaya masuk. Pengunjung hanya dikenakan biaya parkir kendaraan.`,
    image: "https://www.jogjasuper.co.id/wp-content/uploads/2025/04/lokasi-Curug-Silancur.webp",
    category: "Petualangan",
    author: "Admin",
    publishedAt: "2026-03-07",
    readTime: 4
  },
  {
    id: 16,
    title: "Geopark Kebumen: The Mother Earth of Java yang Diusulkan Masuk UNESCO",
    slug: "geopark-kebumen-unesco",
    excerpt: "Kenali 5 fakta menarik Geopark Kebumen yang telah diajukan untuk diakui oleh UNESCO Global Geopark.",
    content: `Geopark Kebumen diajukan untuk mendapat pengakuan dari UNESCO Global Geopark. Dengan luas daratan 1.138,70 kilometer persegi dan luas lautan 21,98 kilometer persegi, Geopark Kebumen menyimpan situs geologi terlengkap di Asia Tenggara.

1. Trail Geologi The Mother Earth of Java
Geopark Kebumen memiliki tiga geo trail yaitu trail hijau menuju Karangsambung tentang The Mother Earth of Java, trail kuning tentang earth and human live, dan trail ungu tentang kehangatan wisata Kebumen. Sejak tahun 1964, kawasan ini dipakai untuk kegiatan edukasi kebumian serta geowisata.

2. Karangbolong Sagara View
Situs paling banyak dikunjungi游客 adalah Karangbolong Sagara View yang memiliki sisi geologi menarik dengan ketinggian tertentu. Situs ini telah melalui peremajaan menjadi destinasi wisata kekinian dengan berbagai spot foto ikonik.

3. Kemudahan Akses dan Keramahan Warga
Akses transportasi yang mudah serta ramah tamah warga setempat menjadi daya tarik utama bagi turis mancanegara. Tradisi unik penyambutan wisatawan menjadi bukti ekonomi berkelanjutan yang dirasakan warga setempat.

4. Mata Air Panas Krakal
Berjarak 11 meter dari timur laut Kebumen, terdapat pemandian air panas Krakal yang dipercaya menyembuhkan berbagai penyakit kulit. Mata air ini sudah dimanfaatkan warga sejak tahun 1905 dengan suhu berkisar 39-42 derajat Celsius.

5. Bukit Pentulu Indah untuk Spot Camping
Bukit Pentulu Indah menyediakan homestay, tenda kemping, gazebo, hingga Wi-Fi untuk kenyamanan pengunjung. Tempat ini cocok untuk pemburu sunrise dengan tiket masuk hanya Rp 5.000.

Geopark Kebumen kini menunggu keputusan dari tim penguji UNESCO Global Geopark terkait pengakuan resminya.`,
    image: "https://statik.tempo.co/data/2019/08/23/id_866415/866415_720.jpg",
    category: "Geopark",
    author: "Admin",
    publishedAt: "2026-03-06",
    readTime: 5
  },
  {
    id: 17,
    title: "Pantai Logending: Pantai Paling Lengkap di Kebumen dengan Sejarah Benteng Pertahanan",
    slug: "pantai-logending-pantai-terlengkap",
    excerpt: "Nikmati keindahan pantai perpaduan pasir cokelat, hutan jati, dan pemandangan Samudera Hindia di Pantai Logending.",
    content: `Pantai Logending terletak di Desa Ayah, Kecamatan Ayah, Kabupaten Kebumen, Jawa Tengah. Pantai ini dikenal sebagai salah satu pantai paling lengkap di Kebumen karena memiliki perpaduan hamparan pasir cokelat, hutan jati yang rindang, dan pemandangan Samudera Hindia yang luas.

Sejarah Pantai Logending
Nama "Logending" sendiri menggambarkan keberadaan pohon kayu yang tumbuh di sekitar pantai, sementara "Ayah" berasal dari lokasinya di Kecamatan Ayah. Pada masa pemerintahan Jepang dan Belanda, Pantai Logending berfungsi sebagai benteng pertahanan. Nama ini juga mencerminkan kaitan dengan alat musik tradisional "Gending."

Daya Tarik Pantai Logending
Pantai Logending menawarkan berbagai kegiatan wisata untuk pengunjung:
- Bermain air di pinggir pantai
- Bermain pasir bersama keluarga
- Menyeberang ke Pulau Momongan dengan perahu
- Berkemah di area camping
- Menikmati pemandangan dari gardu pandang
- Fotografi sunrise dan sunset

Fasilitas Lengkap
Pantai Logending Ayah dilengkapi dengan berbagai fasilitas, antara lain:
- Area parkir kendaraan yang luas
- Mushola
- Gazebo untuk bersantai
- Toilet dan kamar mandi
- Warung makanan dan minuman
- Taman bermain anak
- Menara gardu pandang
- Penyewaan perahu
- Penginapan

Lokasi Strategis
Pantai Logending berjarak sekitar 47-53 km dari pusat Kota Kebumen dengan waktu tempuh kurang lebih 1,5 jam. Lokasi ini juga berdekatan dengan Goa Jatijajar dan Pantai Karangbolong, sehingga bisa dikombinasikan dalam satu perjalanan wisata.

Harga Tiket Masuk
- Senin-Jumat: Rp 5.000
- Sabtu, Minggu, dan hari libur: Rp 10.000

Jam Operasional
Pantai buka setiap hari dari pukul 07.00 hingga 18.00 WIB.`,
    image: "https://nurohmansmkn2.wordpress.com/wp-content/uploads/2014/12/pantai-logending.jpg",
    category: "Wisata Alam",
    author: "Admin",
    publishedAt: "2026-03-05",
    readTime: 4
  }
];
