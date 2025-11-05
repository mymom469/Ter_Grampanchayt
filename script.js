/*
===========================================
DATA STORAGE FORMAT AND CONFIGURATION
===========================================

This section contains all the static data for the website.
To update content, modify the objects below:

1. PANCHAYAT_MEMBERS: Add/edit member information
2. NOTICES_DATA: Add/edit notices and announcements  
3. GALLERY_DATA: Add/edit gallery images and descriptions

Each data object supports bilingual content (English and Marathi)
*/

// PANCHAYAT MEMBERS DATA
// Format: { id, name: {en, mr}, position: {en, mr}, photo, contact }
// Only Sarpanch and Upsarpanch
const PANCHAYAT_MEMBERS = [
  {
    id: 1,
    name: {
      en: "Mrs.Didi Lokesh Kalhe",
      mr: "सौ. दीदी लोकेश काळे"
    },
    position: {
      en: "Sarpanch",
      mr: "सरपंच"
    },
    photo: "sarpanch.jpg",
    contact: "+91 8308774202"
  },
  {
    id: 2,
    name: {
      en: "Mr.Shrimant Ramesh Fand",
      mr: " श्री.श्रीमंत रमेश फंड"
    },
    position: {
      en: "Deputy Sarpanch",
      mr: "उप सरपंच"
    },
    photo: "upsarpanch.jpg",
    contact: "+91 7020393677"
  },
   {
    id: 3,
    name: {
      en: "Mr.Khochare Bi.Bi ",
      mr: " श्री.खोचरे बी.बी "
    },
    position: {
      en: "Village Development Officer",
      mr: "ग्रामविकास अधिकारी"
    },
    photo: "gramsevak - Copy.jpg",
    contact: "+91 9403725118"
  }
];




// Dropdown toggle for mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdownMenu = toggle.nextElementSibling;
            dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
        }
    });
});


// NOTICES DATA
// Format: { id, date, title: {en, mr}, content: {en, mr} }
const NOTICES_DATA = [
  {
    id: 1,
    date: "2025-07-28",
    title: {
      en: "Village Development Meeting",
      mr: "गाव विकास सभा"
    },
    content: {
      en: "All villagers are invited to attend the village development meeting on July 20th, 2025 at 10:00 AM in the Panchayat office.",
      mr: "सर्व गावकऱ्यांना 30 जुलै  2025 रोजी सकाळी 10:00 वाजता पंचायत कार्यालयात होणाऱ्या गाव विकास सभेत उपस्थित राहण्यासाठी आमंत्रित केले आहे."
    }
  },
  {
    id: 2,
    date: "2025-05-10",
    title: {
      en: "Water Supply Maintenance",
      mr: "पाणी पुरवठा देखभाल"
    },
    content: {
      en: "Water supply will be temporarily suspended on January 18th from 9:00 AM to 3:00 PM for maintenance work.",
      mr: "देखभाल कामासाठी 12 मे 2024 रोजी सकाळी 9:00 ते दुपारी 3:00 पर्यंत पाणी पुरवठा तात्पुरता बंद राहील."
    }
  },
  {
    id: 3,
    date: "2025-01-05",
    title: {
      en: "New Road Construction Project",
      mr: "नवीन रस्ता बांधकाम प्रकल्प"
    },
    content: {
      en: "Construction of new concrete road from village center to agricultural fields will begin from February 1st, 2025.",
      mr: "गावाच्या मध्यभागी पासून शेतीच्या जमिनीपर्यंत नवीन काँक्रीट रस्त्याचे बांधकाम 1 फेब्रुवारी 2025 पासून सुरू होईल."
    }
  }
];

// GALLERY DATA
// Format: { category, title: {en, mr}, description: {en, mr}, images: [] }
// Categories: grampanchayat, mandir, schools, nadi, hospital, banks, busstop
const GALLERY_DATA = [
  {
    category: "grampanchayat",
    title: {
      en: "GramPanchayat Office",
      mr: "ग्राम पंचायत कार्यालय"
    },
    description: {
      en: "The administrative center of our village where all government services and community meetings are conducted.",
      mr: "आमच्या गावाचे प्रशासकीय केंद्र जिथे सर्व सरकारी सेवा आणि सामुदायिक सभा आयोजित केल्या जातात."
    },
    images: [
      "grp1.jpg",
      "grp2.jpg",
      "grp3.jpg",
      "grp4.jpg",
      "grp5.jpg",
      "grp6.jpg",
      "grp7.jpg",
      "grp8.jpg",
      "grp9.jpg",
      "grp10.jpg",
      "grp11.jpg",
      "grp12.jpg",
    ]

  },
  {
    category: "mandir",
    title: {
      en: "Ambika Devi Temple",
      mr: "अंबिका देवी मंदिर"
    },
    description: {
      en: "The idol of Devi Koshtha Ambika Madira is similar to Kulaswamini Tulja Bhavani. Devi Ambika is also seated in a lotus position. This is a festival here, from Dussehra to Navratri. The goddess is decorated.",
      mr: "देवी कोष्ठ अंबिका मदिरातिल मूर्ती ही कुलस्वामिनी तुळजा भवानी सारखी आहे. देवी अंबिका ही पद्मासनात स्थानपण झालेली दिसते दसरा किव्हा नवरात्री इथे उत्सव असतो  देवीला सजवले जाते."
    },
    images: [
      "ambikadevi1.jpg",
      "ambikadevi2.jpg",
      "ambikadevi3.jpg"
    ]
  },
  {
    category: "mandir",
    title: {
      en: "Gajanan Maharaj Temple",
      mr: "गजानन महाराज पालखी"
    },
    description: {
      en: "The Palkhi of Lord Gajanan Maharaj, where devotees come for prayers and blessings.",
      mr: "भगवान गजानन महाराज पालखी जिथे भक्त प्रार्थना आणि आशीर्वादासाठी येतात."
    },
    images: [
      "gajananmaharaj.jpg"
    ]
  },
  {
    category: "mandir",
    title: {
      en: "Goroba Kaka Temple",
      mr: "गोरबा काका मंदिर"
    },
    description: {
      en: "Sant Goroba Kaka was one of the most revered saints of the Varkari tradition. He was born in Ter village, Osmanabad district, and is remembered for his simplicity, humility, and deep devotion to Lord Vithoba. Goroba Kaka lived a life rooted in the soil, closely connected with farming and the struggles of common people. He is considered a contemporary of Sant Dnyaneshwar and Sant Namdev, and through his life he inspired people to follow the path of hard work, honesty, and continuous remembrance of God’s name.In Ter, there stands a temple dedicated to Sant Goroba Kaka, which has become a sacred place for devotees and pilgrims. Every year, festivals, Palkhi processions, kirtans, and bhajans are organized there, attracting thousands of devotees. People visit this holy shrine to seek blessings and to immerse themselves in the spiritual legacy of Goroba Kaka. Because of him, Ter holds a special place in the cultural and spiritual history of Maharashtra",
      mr: "संत गोरबा काका हे वारकरी संप्रदायातील एक अतिशय आदरणीय संत होते. त्यांचा जन्म उस्मानाबाद जिल्ह्यातील तेर गावात झाला. ते मूळचे मातीशी जोडलेले, अत्यंत साधेपणाने आयुष्य जगणारे आणि विठ्ठलभक्तीमध्ये लीन असलेले वारकरी संत म्हणून ओळखले जातात. गोरबा काका हे संत ज्ञानेश्वर, संत नामदेव यांचे समकालीन मानले जातात. त्यांनी शेतकरी आणि सामान्य लोकांना अध्यात्म, भक्ती आणि साधेपणाचा मार्ग दाखविला. गोरबा काकांच्या जीवनातून “कष्ट, प्रामाणिकपणा आणि विठ्ठलनामस्मरण” या मूल्यांचा प्रसार झाला.तेर गावात आजही संत गोरबा काकांचे मंदिर आहे, जे वारकरी आणि भाविकांसाठी मोठे पूजनीय स्थान आहे. प्रत्येक वर्षी येथे उत्सव, पालखी सोहळे आणि कीर्तन-भजनाचे कार्यक्रम होतात. वारकरी मोठ्या श्रद्धेने गोरबा काकांच्या मंदिरात दर्शन घेण्यासाठी येतात आणि विठ्ठलभक्तीचा अनुभव घेतात. त्यांच्या स्मृतीमुळे तेर हे गाव महाराष्ट्राच्या सांस्कृतिक आणि आध्यात्मिक इतिहासात एक विशेष स्थान मिळवते."
    },
    images: [
      "gorobakaka1.jpg",
      "gorobakaka2.jpg",
      "gorobakaka3.jpg",
      "gorobakaka4.jpg",
      "gorobakaka5.jpg",
      "gorobakaka6.jpg",
      "gorobakaka7.jpg",
      "gorobakaka8.jpg",
      "gorobakaka9.jpg",
      "gorobakaka10.jpg"
    ]
  },
  {
    category: "mandir",
    title: {
      en: "Jain Temple",
      mr: "जैन मंदिर"
    },
    description: {
      en: "Lord Mahavira had come here on the fifth day of the month of Magh Shuddha. That is, it was purified by the touch of the feet of the Lord 2600 years ago.This village was formerly the capital of Tagar. A Jain king named Karakandu ruled there and his trade between Europe and Asia was going on. Evidence of this has been found in the excavations here. Many ancient and amazing objects have been found in the excavations here.The famous caves located near this city, formerly known as Dharashiv and now known as Osmanavad, were all part of the capital Tagar. This land, which was once very glorious, has become sacred with the Vihara of the Lotus Feet of Lord Mahavira.",
      mr: "भगवान महावीरांचे येथे माघ शुध्द पंचमीस समवशरण आलेले होते. म्हणजे २६०० से वर्षा पुर्वी साक्षात भगवतांच्या पदस्पर्शाने पावन झालेली आहे. तेर हे गाव पुर्वी तगर नावाची राजधानी होती करकंडू नावाचा जैन राजा तेथे राज्य करत होता त्याचा युरोप व अशियाशी मध्ये व्यापार चालत असे अशाप्रकाराचा पुरावा इथल्या उत्खननात सापडला आहे. अनेक पुरातन व आश्चर्य जनक वस्तू येथील उत्खननात सापडले आहे. पुर्वीचे धाराशिव व आताचे उस्मानावाद नावाने ओळखले जाते या शहराच्या लगत असलेली प्रसिध्द लेणी हा सर्व भाग राजधानी तगरचाच होता. पुर्वी अतिशय वैभवात असलेली भ. महावीरांच्या चरण कमलाच्या विहाराने ही भुमी पावन झालेली आहे."
    },
    images: [
      "jain1.jpg",
      "jain2.jpg",
      "jain3.jpg",
      "jain4.jpg",
      "jain5.jpg",
      "jain6.jpg",
      "jain7.jpg",
      "jain8.jpg",
      "jain9.jpg",
      "jain10.jpg",
      "jain11.jpg",
      "jain12.jpg",
      "jain13.jpg",
      "jain14.jpg",
      "jain15.jpg",
      "jain16.jpg",
      "jain17.jpg"
    ]
  },
  {
    category: "mandir",
    title: {
      en: "Utreshwar Temple",
      mr: "उत्तरेश्वर मंदिर"
    },
    description: {
      en: "Uttareshwar Temple is an ancient, dilapidated brick temple in Ter, dedicated to Lord Shiva. The temple is notable for its 6th-7th century brickwork and Known for the oldest surviving carved wooden door frame in India,Which is now preserved in the Lamture Museum. It is an important example of early brick and wooden temple architecture of the post-Vakataka period.The most unique feature is its carved wooden door frame (dwarshakha), which is considered to be the oldest wooden architectural work in India. It is notable for being the oldest surviving brick temple in Maharashtra.",
      mr: "उत्तरेश्वर मंदिर हे तेर येथील एक प्राचीन, जीर्ण विटांचे मंदिर आहे, जे भगवान शिव यांना समर्पित आहे. हे मंदिर त्याच्या सहाव्या-सातव्या शतकातील विटकामासाठी आणि भारतातील सर्वात जुनी जिवंत कोरीव लाकडी दरवाजाच्या चौकटीसाठी ओळखले जाते, जे आता लामतुरे संग्रहालयात जतन केले आहे . हे वाकाटकोत्तर काळातील सुरुवातीच्या विटा आणि लाकडी मंदिर स्थापत्यकलेचे एक महत्त्वपूर्ण उदाहरण आहे. सर्वात अद्वितीय वैशिष्ट्य म्हणजे त्याची कोरलेली लाकडी दरवाजाची चौकट (द्वारशाखा), जी भारतातील सर्वात जुनी लाकडी स्थापत्य कलाकृती मानली जाते.महाराष्ट्रातील सर्वात जुने जिवंत विटांचे मंदिर म्हणून उल्लेखनीय आहे. "
    },
    images: [
      "siddheshwar1.jpg"

    ]
  },
  {
    category: "mandir",
    title: {
      en: "Trivikram Temple",
      mr: "त्रिविक्रम मंदिर"
    },
    description: {
      en: "Trivikram Temple is a temple located in Ter in Osmanabad district of Maharashtra. The temple has been declared a National Protected Monument by the Archaeological Survey of India, Government of India.There is a life-size statue of Trivikram here. The Trivikram temple is built like a Chaitya and its period is from the 2nd century AD to the 5th century AD..",
      mr: "त्रिविक्रम मंदिर हे महाराष्ट्राच्या उस्मानाबाद जिल्ह्यातील तेर येथे असलेले एक मंदिर आहे. भारत सरकारच्या भारतीय पुरातत्त्व सर्वेक्षणाने हे मंदिर राष्ट्रीय संरक्षित स्मारक म्हणून घोषित केलेले आहे. याठिकाणी माणसाच्या आकाराएवढी मोठी त्रिविक्रमाची मूर्ती आहे. त्रिविक्रम मंदिराची बांधणी चैत्यासारखी असून त्याचा काळ इ.स.चे दुसरे शतक ते इ.स.चे पाचवे शतक असा आहे."
    },
    images: [
      "trivikram1.jpg",
      "trivikram2.jpg",
      "trivikram4.jpg",
      "trivikram5.jpg",
      "trivikram6.jpg",
      "trivikram7.jpg",
      "trivikram8.jpg",
      "trivikram9.jpg",
      "trivikram10.jpg",
      "trivikram11.jpg",
      "trivikram12.jpg",
      "trivikram13.jpg"
    ]
  },
  {
    category: "schools",
    title: {
      en: "Zilla Parishad Primary School",
      mr: "जिल्हा परिषद प्राथमिक शाळा"
    },
    description: {
      en: "Government primary school providing quality education to children from class 1 to 7.",
      mr: "वर्ग 1 ते 7 पर्यंतच्या मुलांना दर्जेदार शिक्षण देणारी सरकारी प्राथमिक शाळा."
    },
    images: [
      "kanyashala1.jpg",
      "kendriyshala1.jpg",
      "kanyashala2.jpg",
      "kendriyshala2.jpg",
      "kendriyshala3.jpg",
      "kendriyshala4.jpg",
      "kanyashala3.jpg",
      "kanyashala4.jpg",
      "kanyashala5.jpg"
    ]
  },
  {
    category: "schools",
    title: {
      en: "Maharashtra Saint Secondary and Higher Secondary School",
      mr: "महाराष्ट्र संत माध्यमिक व उच्च माध्यमिक विद्यालय"
    },
    description: {
      en: "At Ter, Mama established Maharashtra Sant Vidyalaya, Ter on 10th June 1960. Mama, who had benefited from the teachings and traditions of the saints,The name of this school was Maharashtra Sant Vidyalaya. To avoid any inconvenience to the children, the uncle started the Sant Goroba Hostel there.",
      mr: "तेर या ठिकाणी मामांनी १० जून १९६० रोजी महाराष्ट्र संत विद्यालय, तेर याची स्थापना केली. संतांची शिकवण व परंपरा लाभलेल्या मामांनी या विद्यालयाचे नाव महाराष्ट्र संत विद्यालय असे नांव दिले. मुलांच्या राहण्याची गैरसोय होऊ नये म्हणून तेथेच मामांनी संत गोरोबा वसतिगृह सुरु केले."
    },
    images: [
      "sant1.jpg",
      "sant2.jpg",
      "sant3.jpg",
      "sant4.jpg",
      "sant5.jpg",
      "sant6.jpg",
      "sant7.jpg",
      "sant8.jpg",
      "sant9.jpg"
    ]
  },
  {
    category: "nadi",
    title: {
      en: "Terna River",
      mr: "तेरणा नदी"
    },
    description: {
      en: "Terna Dam was built in 1964 and the height of the dam was increased by three feet in 1993. The water from the dam supplies water to Dharashiv city, Ter, Dhoki, Kasbe Tadvale, and Yedshi villages. The total water storage of Terna Dam is 20.554 million cubic meters, of which 19.663 million cubic meters is usable water storage.This dam has a dead storage of 0.896 million cubic meters. The left canal of Terna dam is 15 kilometers long and the right canal is 16 kilometers long. An area of ​​1652 hectares comes under irrigation on the dam and both the left and right canals.",
      mr: "तेरणा धरण 1964 ला बांधण्यात आले तर 1993 ला धरणाची तीन फूट उंची वाढवण्यात आली. धरणातील पाण्याचा धाराशिव शहर, तेर, ढोकी, कसबे तडवळे, येडशी गावाला पाणीपुरवठा केला जातो. तेरणा धरणाचा एकूण पाणीसाठा 20.554 दशलक्ष घनमिटर असून, 19.663 दशलक्ष घनमिटर उपयुक्त पाणीसाठा साठला जातो. याच धरणात 0.896 दशलक्ष घनमिटर मृतसाठा आहे. तेरणा धरणाचा डावा कालवा 15 किलोमीटर तर उजव्या कालवा 16 किलोमीटर आहे. धरण व दोन्ही डाव्या व उजव्या कालव्यावर 1652 हेक्टर क्षेत्र ओलिताखाली येते."

    },
    images: [
      "dharan.jpg"
    ]
  },
  {
    category: "hospital",
    title: {
      en: "Rural Hospital Ter",
      mr: "ग्रामीण रुग्णालय टेर"
    },
    description: {
      en: "The Primary Health Center in Ter village is run by the state government's health department.It provides free check-ups, medicines, and emergency services to the villagers and the citizens of the surrounding areas.",
      mr: " येथे गावकरी आणि आसपासच्या भागातील नागरिकांसाठी मोफत तपासणी, औषधे, आणि आपत्कालीन सेवा पुरवल्या जातात."
    },
    images: [
      "hospital1.jpg",
      "hospital2.jpg",
      "hospital3.jpg",
      "hospital4.jpg",
      "hospital5.jpg",
      "hospital6.jpg",
      "hospital7.jpg",
      "hospital8.jpg",
      "hospital9.jpg",
      "hospital10.jpg",
      "hospital11.jpg",
      "hospital12.jpg",
      "hospital13.jpg"
    ]
  },
  {
    category: "hospital",
    title: {
      en: "Veternary Hospital Ter",
      mr: "पशुवैद्यकीय रुग्णालय टेर "
    },
    description: {
      en: "Government health center providing essential medical services to villagers and nearby communities.",
      mr: "गावकऱ्यांना आणि जवळच्या समुदायांना आवश्यक वैद्यकीय सेवा प्रदान करणारे सरकारी आरोग्य केंद्र."
    },
    images: [
      "pashuhospital.jpg"
    ]
  },
  {
    category: "banks",
    title: {
      en: "Maharashtra bank",
      mr: "महाराष्ट्र बँक"
    },
    description: {
      en: "The Maharashtra Gramin Bank has a branch in Ter village, Osmanabad district, which serves as one of the primary financial institutions for local residents. This branch provides essential banking services such as savings and current accounts, deposits, loans for farmers and small businesses, as well as government scheme disbursements. It plays an important role in supporting the rural economy of Ter by giving access to credit and financial inclusion facilities.",
      mr: "महाराष्ट्र ग्रामीण बँक ची शाखा तेर गाव, उस्मानाबाद येथे कार्यरत आहे. ही शाखा गावातील नागरिकांना विविध बँकिंग सेवा पुरवते जसे की बचत खाते, चालू खाते, ठेवी, शेती व लघुउद्योगांसाठी कर्ज, तसेच शासकीय योजना व अनुदाने वितरित करणे. तेर गावाच्या ग्रामीण अर्थव्यवस्थेला बळकट करण्यामध्ये या बँकेचे महत्त्वपूर्ण योगदान आहे."
    },
    images: [
      "mahabank.jpg"
    ]
  },
  {
    category: "banks",
    title: {
      en: "State bank",
      mr: "स्टेट बँक"
    },
    description: {
      en: "State Bank of India (SBI) – Ter Branch is one of the key financial institutions serving the people of Ter village in Osmanabad district. The branch is located near Rukmini Nagar Karyalaya, beside the ST Stand, Ter, Osmanabad, Maharashtra – 413509. The working hours of the branch are from 10:00 AM to 4:00 PM. Customers can also access support through the toll-free numbers 1800 1234 and 1800 2100, along with the customer care number 080-26599990. The branch offers a wide range of services including savings and current accounts, fixed deposits, loans for agriculture, education, and housing, as well as modern facilities like net banking, mobile banking, and ATM services. For the people of Ter, this branch has become a reliable and convenient center for all financial needs.",
      mr: "स्टेट बँक ऑफ इंडिया (SBI) तेर शाखा उस्मानाबाद जिल्ह्यातील तेर गावात कार्यरत असून गावकऱ्यांसाठी एक महत्त्वाचे आर्थिक केंद्र ठरले आहे. या शाखेचा पत्ता रुक्मिणी नगर कार्यालयाजवळ, एस.टी. स्टँड शेजारी, तेर, जि. उस्मानाबाद, महाराष्ट्र – 413509 असा आहे. या शाखेत बचत व चालू खाती, एफ.डी., शेती व शिक्षणासाठी कर्ज, घरकर्ज, तसेच नेट बँकिंग, मोबाईल बँकिंग व एटीएमसारख्या आधुनिक सुविधा उपलब्ध आहेत. त्यामुळे तेर गावातील नागरिकांच्या आर्थिक व्यवहारांसाठी ही शाखा एक विश्वासार्ह व सोयीस्कर ठिकाण ठरते."
    },
      images: [
         "statebank.jpg"
    ]
  },
  {
    category: "busstop",
    title: {
      en: "Ter Bus Stop",
      mr: "तेर बस स्थानक"
    },
    description: {
      en: "Main bus stop connecting our village to nearby towns and cities.",
      mr: "आमच्या गावाला जवळच्या शहरे आणि शहरांशी जोडणारा मुख्य बस स्टॉप."
    },
    images: [
      "busstop.jpg",
      "busstop2.jpg"
    ]
  }
];

/*
===========================================
GLOBAL STATE MANAGEMENT
===========================================
*/
let currentLanguage = 'en';
let currentTheme = 'light';

/*
===========================================
DOM ELEMENTS REFERENCES
===========================================
*/
const themeToggle = document.getElementById('themeToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const membersGrid = document.getElementById('membersGrid');
const noticesMarquee = document.getElementById('noticesMarquee');
const noticesList = document.getElementById('noticesList');
const galleryGrid = document.getElementById('galleryGrid');
const langButtons = document.querySelectorAll('.lang-btn');

/*
===========================================
INITIALIZATION
===========================================
*/
document.addEventListener('DOMContentLoaded', function () {
  initializeTheme();
  initializeLanguage();
  renderPanchayatMembers();
  renderNotices();
  renderGallery();
  initializeEventListeners();
  handleSmoothScrolling();
  initializeScrollAnimations();
});

/*
===========================================
THEME MANAGEMENT
===========================================
*/
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  currentTheme = savedTheme;
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const icon = themeToggle.querySelector('.theme-icon');
  icon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

/*
===========================================
LANGUAGE MANAGEMENT
===========================================
*/
function initializeLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'en';
  currentLanguage = savedLanguage;
  updateLanguageDisplay();
  updateActiveLanguageButton();
}

function switchLanguage(lang) {
  if (lang !== currentLanguage) {
    currentLanguage = lang;
    localStorage.setItem('language', currentLanguage);
    updateLanguageDisplay();
    updateActiveLanguageButton();
    renderPanchayatMembers();
    renderNotices();
    renderGallery();
  }
}

function updateLanguageDisplay() {
  const elements = document.querySelectorAll('[data-en][data-mr]');
  elements.forEach(element => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (text) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = text;
      } else {
        element.textContent = text;
      }
    }
  });

  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === 'en' ?
    'Ter Gaon Gram Panchayat' :
    'तेर गाव ग्राम पंचायत';
}

function updateActiveLanguageButton() {
  langButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === currentLanguage) {
      btn.classList.add('active');
    }
  });
}

/*
===========================================
PANCHAYAT MEMBERS RENDERING
===========================================
*/
function renderPanchayatMembers() {
  membersGrid.innerHTML = '';

  PANCHAYAT_MEMBERS.forEach(member => {
    const memberCard = createMemberCard(member);
    membersGrid.appendChild(memberCard);
  });
}

function createMemberCard(member) {
  const card = document.createElement('div');
  card.className = 'member-card';
  card.innerHTML = `
      <img src="${member.photo}" alt="${member.name[currentLanguage]}" class="member-photo">
      <h4 class="member-name">${member.name[currentLanguage]}</h4>
      <p class="member-position">${member.position[currentLanguage]}</p>
      <p class="member-contact">📞 ${member.contact}</p>
    `;

  // Add hover animation
  card.addEventListener('mouseenter', function () {
    this.style.transform = 'translateY(-5px) scale(1.02)';
  });

  card.addEventListener('mouseleave', function () {
    this.style.transform = 'translateY(0) scale(1)';
  });

  return card;
}

/*
===========================================
NOTICES RENDERING
===========================================
*/
function renderNotices() {
  renderNoticesMarquee();
  renderNoticesList();
}

function renderNoticesMarquee() {
  const marqueeText = NOTICES_DATA.map(notice =>
    `📢 ${notice.title[currentLanguage]} - ${formatDate(notice.date)}`
  ).join(' • ');

  noticesMarquee.textContent = marqueeText;
}

function renderNoticesList() {
  noticesList.innerHTML = '';

  NOTICES_DATA.forEach(notice => {
    const noticeItem = createNoticeItem(notice);
    noticesList.appendChild(noticeItem);
  });
}

function createNoticeItem(notice) {
  const item = document.createElement('div');
  item.className = 'notice-item';
  item.innerHTML = `
      <div class="notice-date">${formatDate(notice.date)}</div>
      <h4 class="notice-title">${notice.title[currentLanguage]}</h4>
      <p class="notice-content">${notice.content[currentLanguage]}</p>
    `;

  return item;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  if (currentLanguage === 'mr') {
    return date.toLocaleDateString('mr-IN', options);
  } else {
    return date.toLocaleDateString('en-IN', options);
  }
}

/*
===========================================
GALLERY RENDERING
===========================================
*/
let currentImageIndex = {};

function renderGallery() {
  galleryGrid.innerHTML = '';

  // Group items by category
  const categories = {};
  GALLERY_DATA.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  // Create sections for each category
  Object.keys(categories).forEach(category => {
    const categorySection = createCategorySection(category, categories[category]);
    galleryGrid.appendChild(categorySection);
  });
}

function createCategorySection(category, items) {
  const categoryNames = {
    grampanchayat: { en: "Gram Panchayat", mr: "ग्राम पंचायत" },
    mandir: { en: "Temples", mr: "मंदिरे" },
    schools: { en: "Schools", mr: "शाळा" },
    nadi: { en: "Rivers", mr: "नद्या" },
    hospital: { en: "Health Center", mr: "आरोग्य केंद्र" },
    banks: { en: "Banks", mr: "बँका" },
    busstop: { en: "Bus Stop", mr: "बस स्टॉप" }
  };

  const section = document.createElement('div');
  section.className = 'gallery-category';

  const categoryTitle = document.createElement('h3');
  categoryTitle.className = 'category-title';
  categoryTitle.textContent = categoryNames[category][currentLanguage];
  section.appendChild(categoryTitle);

  items.forEach((item, index) => {
    const itemId = `${category}-${index}`;
    currentImageIndex[itemId] = 0;

    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.innerHTML = `
        <div class="image-slider">
          <button class="slider-btn prev-btn" onclick="changeImage('${itemId}', -1)">›</button>
          <img src="${item.images[0]}" alt="${item.title[currentLanguage]}" class="gallery-image" id="img-${itemId}">
          <button class="slider-btn next-btn" onclick="changeImage('${itemId}', 1)">‹</button>
          <div class="image-counter">
            <span id="counter-${itemId}">1 / ${item.images.length}</span>
          </div>
        </div>
        <div class="gallery-content">
          <h4 class="gallery-title">${item.title[currentLanguage]}</h4>
          <p class="gallery-description">${item.description[currentLanguage]}</p>
        </div>
      `;

    section.appendChild(galleryItem);
  });

  return section;
}

function changeImage(itemId, direction) {
  const [category, index] = itemId.split('-');
  const categoryItems = GALLERY_DATA.filter(item => item.category === category);
  const item = categoryItems[parseInt(index)];

  currentImageIndex[itemId] += direction;

  if (currentImageIndex[itemId] >= item.images.length) {
    currentImageIndex[itemId] = 0;
  } else if (currentImageIndex[itemId] < 0) {
    currentImageIndex[itemId] = item.images.length - 1;
  }

  const img = document.getElementById(`img-${itemId}`);
  const counter = document.getElementById(`counter-${itemId}`);

  if (img && counter) {
    img.src = item.images[currentImageIndex[itemId]];
    counter.textContent = `${currentImageIndex[itemId] + 1} / ${item.images.length}`;
  }
}

// Make changeImage function global
window.changeImage = changeImage;

/*
===========================================
EVENT LISTENERS
===========================================
*/
function initializeEventListeners() {
  // Theme toggle
  themeToggle.addEventListener('click', toggleTheme);

  // Language switcher
  langButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      const lang = this.getAttribute('data-lang');
      switchLanguage(lang);
    });
  });

  // Mobile menu toggle
  mobileMenuToggle.addEventListener('click', function () {
    // Mobile menu functionality can be added here
    console.log('Mobile menu clicked');
  });

  // Navbar scroll effect
  window.addEventListener('scroll', handleNavbarScroll);
}

/*
===========================================
SMOOTH SCROLLING
===========================================
*/
function handleSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/*
===========================================
NAVBAR SCROLL EFFECT
===========================================
*/
function handleNavbarScroll() {
  const header = document.querySelector('.header');
  const scrolled = window.scrollY > 100;

  if (scrolled) {
    header.style.backgroundColor = currentTheme === 'light' ?
      'rgba(44, 62, 80, 0.95)' :
      'rgba(52, 73, 94, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.backgroundColor = '';
    header.style.backdropFilter = '';
  }
}

/*
===========================================
SCROLL ANIMATIONS
===========================================
*/
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.member-card, .service-card, .notice-item, .gallery-item, .contact-item'
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
  });
}

/*
===========================================
ERROR HANDLING FOR IMAGES
===========================================
*/
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function () {
      this.src = 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
    });
  });
});

/*
===========================================
UTILITY FUNCTIONS
===========================================
*/

// Function to add new member (for future use)
function addPanchayatMember(memberData) {
  PANCHAYAT_MEMBERS.push(memberData);
  renderPanchayatMembers();
}

// Function to add new notice (for future use)
function addNotice(noticeData) {
  NOTICES_DATA.unshift(noticeData); // Add to beginning
  renderNotices();
}

// Function to add new gallery item (for future use)
function addGalleryItem(galleryData) {
  GALLERY_DATA.push(galleryData);
  renderGallery();

}
