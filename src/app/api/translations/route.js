const translations = [
  {
    amharic: "ሰላም",
    oromo: "Nagaa",
    tigrigna: "ሰላም",
    gamootho: "saro",
    audio: {
      amharic: "/audio/amharic/selam.m4a",
      oromo: "/audio/oromo/nagaa.m4a",
      tigrigna: "/audio/tigrigna/selam.m4a",
      gamootho: "/audio/gamootho/saro.m4a",
    },
  },
  {
    amharic: "እንዴት ነህ?",
    oromo: "Akkam?",
    tigrigna: "ከመይ ኢኻ?",
    gamootho: "Aymelle?",
    audio: {
      amharic: "/audio/amharic/Endet-neh.m4a",
      oromo: "/audio/oromo/Akkam.m4a",
      tigrigna: "/audio/tigrigna/kemey.m4a",
      gamootho: "/audio/gamootho/Aymelle.m4a",
    },
  },
  {
    amharic: "አመሰግናለሁ",
    oromo: "Galatoomi",
    tigrigna: "የቐንየለይ",
    gamootho: "Galatays",
    audio: {
      amharic: "/audio/amharic/Amesegnalew.m4a",
      oromo: "/audio/oromo/Galatoomi.m4a",
      tigrigna: "/audio/tigrigna/Yekonyeley.m4a",
      gamootho: "/audio/gamootho/Galatays.m4a",
    },
  },
  {
    amharic: "አዎ",
    oromo: "Eeyyee",
    tigrigna: "እወ",
    gamootho: "Eya",
    audio: {
      amharic: "/audio/amharic/Awo.m4a",
      oromo: "/audio/oromo/Eeyyee.m4a",
      tigrigna: "/audio/tigrigna/Ewe.m4a",
      gamootho: "/audio/gamootho/Eeyee.m4a",
    },
  },
  {
    amharic: "እሺ",
    oromo: "Tole",
    tigrigna: "ሓላው",
    gamootho: "Ero",
    audio: {
      amharic: "/audio/amharic/Ishi.m4a",
      oromo: "/audio/oromo/Tole.m4a",
      tigrigna: "/audio/tigrigna/Halao.m4a",
      gamootho: "/audio/gamootho/Ero.m4a",
    },
  },
  {
    amharic: "ስምህ ማን ነው?",
    oromo: "Maqaan kee eenyu?",
    tigrigna: "ስምካ ማን እዩ?",
    gamootho: "Sunthay onee?",
    audio: {
      amharic: "/audio/amharic/simih-man-new.mp3",
      oromo: "/audio/oromo/maqaan-kee-eenyu.mp3",
      tigrigna: "/audio/tigrigna/simka-man-iyu.mp3",
      gamootho: "/audio/gamootho/sunthay-onee.mp3",
    },
  },
  {
    amharic: "ሰላም እንዴት ነህ?",
    oromo: "Nagaa, akkam?",
    tigrigna: "ሰላም ከመይ ኢኻ?",
    gamootho: "Saro Aymelle?",
    audio: {
      amharic: "/audio/amharic/selam-endat-neh.mp3",
      oromo: "/audio/oromo/nagaa-akkam.mp3",
      tigrigna: "/audio/tigrigna/selam-kemey-ika.mp3",
      gamootho: "/audio/gamootho/saro-aymelle.mp3",
    },
  },
  {
    amharic: "እንዴት ነው ስራ?",
    oromo: "Hojii akkam ta'a?",
    tigrigna: "ስራ እንዴት እዩ?",
    gamootho: "ooso wani?",
    audio: {
      amharic: "/audio/amharic/endat-new-sira.mp3",
      oromo: "/audio/oromo/hoji-akkam-taa.mp3",
      tigrigna: "/audio/tigrigna/sira-endat-iyu.mp3",
      gamootho: "/audio/gamootho/ooso-wani.mp3",
    },
  },
  {
    amharic: "እንጀራ ትወዳለህ?",
    oromo: "Injera siif tolaa?",
    tigrigna: "እንጀራ ትፈትዋለይ?",
    gamootho: "Solo Dossayi?",
    audio: {
      amharic: "/audio/amharic/enjera-tewodalleh.mp3",
      oromo: "/audio/oromo/injera-siif-tolaa.mp3",
      tigrigna: "/audio/tigrigna/enjera-tefetwaley.mp3",
      gamootho: "/audio/gamootho/solo-dossayi.mp3",
    },
  },
  {
    amharic: "እደህና ነኝ",
    oromo: "Nagaan jiraadha.",
    tigrigna: "በጥሩ ህይወት ኣሎኹ።",
    gamootho: "Tani Loo.",
    audio: {
      amharic: "/audio/amharic/edenna-neh.mp3",
      oromo: "/audio/oromo/nagaan-jiraadha.mp3",
      tigrigna: "/audio/tigrigna/betiru-hiywot-alohku.mp3",
      gamootho: "/audio/gamootho/tani-loo.mp3",
    },
  },
];

export async function GET() {
  return new Response(JSON.stringify(translations), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
