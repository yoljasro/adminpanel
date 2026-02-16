const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const { Motto } = require('../Motto/motto.entity');
const { Advantages } = require('../Advantages/advantages.entity');
const { Services } = require('../Services/news.entity');
const { Members } = require('../Members/members.entity');
const { Location } = require('../Location/location.entity');
const { Reviews } = require('../Reviews/reviews.entity');

const MONGODB_URI = 'mongodb+srv://saidaliyevjasur450_db_user:r1C4OnTRkvhb20fX@saifbackadmin.jzqb4fk.mongodb.net/';

const loadJSON = (lang) => {
    const filePath = path.join(__dirname, `../../../saifproface/src/messages/${lang}.json`);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const run = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        const uz = loadJSON('uz');
        const ru = loadJSON('ru');
        const en = loadJSON('en');
        const kl = loadJSON('kl');

        // 1. Seed Motto
        await Motto.deleteMany({});
        await Motto.create({
            title_uz: uz.welcome,
            title_ru: ru.welcome,
            title_en: en.welcome,
            title_uz_cyr: kl.welcome,
            subtitle_uz: uz.aboutBlock.title,
            subtitle_ru: ru.aboutBlock.title,
            subtitle_en: en.aboutBlock.title,
            subtitle_uz_cyr: kl.aboutBlock.title,
            description_uz: uz.aboutBlock.desc,
            description_ru: ru.aboutBlock.desc,
            description_en: en.aboutBlock.desc,
            description_uz_cyr: kl.aboutBlock.desc,
        });

        // 2. Seed Advantages
        await Advantages.deleteMany({});
        const advantagesKeys = [
            { title: 'titleOne', desc: 'descOne', img: '/assets/img/visoko.jpg', phone: "/assets/img/visokophone.jpg" },
            { title: 'titleTwo', desc: 'descTwo', img: '/assets/img/j1.jpg', phone: "/assets/img/j1phone.jpg" },
            { title: 'titleThree', desc: 'descThree', img: '/assets/img/j2.jpg', phone: "/assets/img/j2phone.jpg" },
            { title: 'titleFour', desc: 'descFour', img: '/assets/img/j3.jpg', phone: "/assets/img/j3phone.jpg" },
            { title: 'titleFive', desc: 'descFive', img: '/assets/img/uyut.jpg', phone: "/assets/img/uyutphone.jpg" },
            { title: 'guarant', desc: 'guarantDesc', img: '/assets/img/j4.jpg', phone: "/assets/img/j4phone.jpg" },
            { title: 'conver', desc: 'converDesc', img: '/assets/img/j5.jpg', phone: "/assets/img/j5phone.jpg" },
        ];

        for (const adv of advantagesKeys) {
            await Advantages.create({
                title_uz: uz.advantagesBlock[adv.title],
                title_ru: ru.advantagesBlock[adv.title],
                title_en: en.advantagesBlock[adv.title],
                title_uz_cyr: kl.advantagesBlock[adv.title],
                description_uz: uz.advantagesBlock[adv.desc],
                description_ru: ru.advantagesBlock[adv.desc],
                description_en: en.advantagesBlock[adv.desc],
                description_uz_cyr: kl.advantagesBlock[adv.desc],
                image: adv.img,
                phoneImage: adv.phone
            });
        }

        // 3. Seed Services
        await Services.deleteMany({});

        const getServiceDesc = (block, keys) => {
            return `<ul>${keys.map(k => `<li>${block[k]}</li>`).join('')}</ul>`;
        };

        const servicesSeed = [
            {
                uz: { title: uz.servicesBlock.first, desc: getServiceDesc(uz.servicesBlock, ['descOne', 'correction', 'hirurgy', 'face']) },
                ru: { title: ru.servicesBlock.first, desc: getServiceDesc(ru.servicesBlock, ['descOne', 'correction', 'hirurgy', 'face']) },
                en: { title: en.servicesBlock.first, desc: getServiceDesc(en.servicesBlock, ['descOne', 'correction', 'hirurgy', 'face']) },
                kl: { title: kl.servicesBlock.first, desc: getServiceDesc(kl.servicesBlock, ['descOne', 'correction', 'hirurgy', 'face']) },
                img: '/assets/img/service1.jpg' // Actual medical render
            },
            {
                uz: { title: uz.servicesBlock.titleTwo, desc: getServiceDesc(uz.servicesBlock, ['descTwo', 'second', 'three', 'four', 'five', 'six']) },
                ru: { title: ru.servicesBlock.titleTwo, desc: getServiceDesc(ru.servicesBlock, ['descTwo', 'second', 'three', 'four', 'five', 'six']) },
                en: { title: en.servicesBlock.titleTwo, desc: getServiceDesc(en.servicesBlock, ['descTwo', 'second', 'three', 'four', 'five', 'six']) },
                kl: { title: kl.servicesBlock.titleTwo, desc: getServiceDesc(kl.servicesBlock, ['descTwo', 'second', 'three', 'four', 'five', 'six']) },
                img: '/assets/img/service2.jpg' // Clean clinic photo
            },
            {
                uz: { title: uz.servicesBlock.titleThree, desc: getServiceDesc(uz.servicesBlock, ['descThree', 'seven', 'eight']) },
                ru: { title: ru.servicesBlock.titleThree, desc: getServiceDesc(ru.servicesBlock, ['descThree', 'seven', 'eight']) },
                en: { title: en.servicesBlock.titleThree, desc: getServiceDesc(en.servicesBlock, ['descThree', 'seven', 'eight']) },
                kl: { title: kl.servicesBlock.titleThree, desc: getServiceDesc(kl.servicesBlock, ['descThree', 'seven', 'eight']) },
                img: '/assets/img/service3.jpg' // Female aesthetic photo
            }
        ];

        for (const s of servicesSeed) {
            await Services.create({
                title_uz: s.uz.title,
                title_ru: s.ru.title,
                title_en: s.en.title,
                title_uz_cyr: s.kl.title,
                description_uz: s.uz.desc,
                description_ru: s.ru.desc,
                description_en: s.en.desc,
                description_uz_cyr: s.kl.desc,
                // image: s.img, // Removed to restore anatomical carousels
            });
        }

        // 4. Seed Members
        await Members.deleteMany({});
        const membersSeed = [
            {
                nameKey: 'doctor4', specKey: 'doctortwo', img: '/assets/img/c1.jpg', bg: '/assets/img/y4.jpg', mobile: '/assets/img/yebat1.jpg',
                bio: "Ведет прием, оказывая весь спектр хирургических услуг взрослым и детям. Основное направление челюстно-лицевая хирургия, лечении травм и переломов, удаление новообразований лица и челюсти, ортогнатическая хирургия.",
                edu: "2008 – 2013 гг. окончил с отличием Андижанский государственный медицинский институт по специальности «Лечебное дело»...\n2013 – 2015 гг. окончил магистратуру Андижанского государственного медицинского института по специальности «Челюстно-лицевая хирургия»...\n2018 г. - курс переподготовки стоматологов в ТМА...",
                exp: "2016 – 2021 гг. Ассистент на кафедре «Хирургическая стоматология»...\n2016 – 2021 гг. Челюстно-лицевой хирург в РЦСМП...\n2019 – 2023гг. Консультант в клинике «Sog`lom Avlod»..."
            },
            {
                nameKey: 'doctor6', specKey: 'doctorfive', img: '/assets/img/c2.jpg', bg: '/assets/img/y1.jpg', mobile: '/assets/img/yebat2.jpg',
                bio: "Ведет прием, оказывая весь спектр ортодонтических услуг взрослым и детям. Основное направление лечение и помощь в решение проблем с суставами...",
                edu: "2014 – 2019 гг. Астраханский Государственный Медицинский Университет...\n2023 - 2025гг. - Ташкентский Государственный Стоматологический Институт...",
                exp: "2019 - 2024 гг. частная стоматологическая клиника 'ASNAN'...\n2024 - п.н.в. - врач ортодонт в SAIF PROFACE"
            },
            {
                nameKey: 'doctor1', specKey: 'doctorone', img: '/assets/img/c3.jpg', bg: '/assets/img/y6.jpg', mobile: '/assets/img/yebat3.jpg',
                bio: "Ведет узкоспециализированный прием, оказывая весь спектр хирургических услуг взрослым и детям. Основное направление дентальная импланталогия и лечение предраковых заболеваний...",
                edu: "В 2016 году окончил стоматологический факультет и в 2019 году ординатуру по направлению челюстно- лицевая хирургия в первом СПбГМУ имени академика Павлова.\nВ 2018 году проходил магистерскую программу по направлению менеджмент в СПбПУ Петра Великого.",
                exp: "2016 - 2019 гг. работал в «Центр имплантологии доктора Зорина» Санкт-Петербург.\n2020 - 2024 гг. ассистент кафедры ЧЛХ ТГСИ.\n2024 - п.н.в. стоматолог-хирург в SAIF PROFACE."
            },
            {
                nameKey: 'doctor3', specKey: 'doctorthree', img: '/assets/img/c4.jpg', bg: '/assets/img/y2.jpg', mobile: '/assets/img/yebat4.jpg',
                bio: "Доктор медицинских наук, высококвалифицированный специалист в области челюстно-лицевой и пластической хирургии.",
                edu: "1998 – 2005 гг. Андижанский государственный медицинский институт...\n2005 – 2007 гг. клиническая ординатура по специальности «Челюстно-лицевая хирургия» РМАПО...\n2014 г. профессиональная переподготовка «Пластическая и эстетическая хирургия»...",
                exp: "2011 г. – по настоящее время врач ЧЛХ в отделении ЧЛХ ФГБУ НМИЦ «ЦНИИС и ЧЛХ».\n2021 г. – по настоящее время врач ЧЛХ в ФГБУ «Клиническая больница №1» (Волынская) УДП РФ."
            },
            {
                nameKey: 'doctor5', specKey: 'doctorfour', img: '/assets/img/c5.jpg', bg: '/assets/img/y3.jpg', mobile: '/assets/img/yebat5.jpg',
                bio: "Ведет прием, оказывая весь спектр терапевтический и ортопедических услуг. Эстетика: композитные и керамические виниры...",
                edu: "2019 - 2024 гг. окончил Ташкентский Государственный Стоматологический Институт.\n2024 - 2026 гг. ординатура по направлению «Ортопедия» ТГSI.",
                exp: "2021 - по настоящее время Стоматологическая клиника L-dent.\n2024 - по настоящее время врач терапеvt-ortoped в SAIF PROFACE."
            },
            {
                nameKey: 'doctor2', specKey: 'doctortwo', img: '/assets/img/c6.jpg', bg: '/assets/img/y5.jpg', mobile: '/assets/img/yebat6.jpg',
                bio: "Челюстно-лицевой хирург с международным опытом. Специалист по ортогнатической хирургии.",
                edu: "2005 – 2012 гг. Андижанский государственный медицинский институт...\n2015 г. магистратура АГМИ по специальности «Хирургия».\n2021 г. стажировка в Италии с командой «OrtognaticaRoma».",
                exp: "2018 - 2023 гг. заведующий отделением ЧЛХ в клинике «Sog`lom Avlod».\n2024 - п.н.в. челюстно-лицевой хирург в SAIF PROFACE."
            }
        ];

        for (const m of membersSeed) {
            await Members.create({
                image: m.img,
                bgImage: m.bg,
                lastyebat: m.mobile,
                name_uz: uz.aboutBlock[m.nameKey],
                name_ru: ru.aboutBlock[m.nameKey],
                name_en: en.aboutBlock[m.nameKey],
                name_uz_cyr: kl.aboutBlock[m.nameKey],
                spec_uz: uz.aboutBlock[m.specKey],
                spec_ru: ru.aboutBlock[m.specKey],
                spec_en: en.aboutBlock[m.specKey],
                spec_uz_cyr: kl.aboutBlock[m.specKey],
                biography_uz: m.bio,
                biography_ru: m.bio,
                biography_en: m.bio,
                biography_uz_cyr: m.bio,
                education_uz: m.edu,
                education_ru: m.edu,
                education_en: m.edu,
                education_uz_cyr: m.edu,
                experience_uz: m.exp,
                experience_ru: m.exp,
                experience_en: m.exp,
                experience_uz_cyr: m.exp,
            });
        }

        // 5. Seed Location
        await Location.deleteMany({});
        await Location.create({
            address_uz: uz.advantagesBlock.adress,
            address_ru: ru.advantagesBlock.adress,
            address_en: en.advantagesBlock.adress,
            address_uz_cyr: kl.advantagesBlock.adress,
            phone1: "+998 55 506 00 01",
            phone2: "+998 88 430 70 00",
            email: "info@saifproface.uz",
            map_link: "https://yandex.uz/map-widget/v1/-/CCU8F8u98A",
            working_hours_uz: "Dushanba - Shanba: 08:30 - 18:00",
            working_hours_ru: "Понедельник - Суббота: 08:30 - 18:00",
            working_hours_en: "Monday - Saturday: 08:30 - 18:00",
            working_hours_uz_cyr: "Душанба - Шанба: 08:30 - 18:00",
        });

        // 6. Seed Reviews
        await Reviews.deleteMany({});
        const reviewsData = [
            { name: "Вероника Ли", date: "24.09.2024", text: "Saif ProFace - клиника с превосходным персоналом и врачами . В клинике уютно и чисто .Хочу выразить огромную благодарность хирургу Мансуру Анваровичу, который провел несколько сложных удалений зубов мудрости , не смотря на то что удаления были сложными." },
            { name: "Лащёнов Руслан", date: "12.09.2024", text: "Зубы коренные замучали, пришёл прооперировали удалили всё, спасибо большое!" },
            { name: "Юнусова Сабина", date: "08.09.2024", text: "Спасибо клинике Saif Proface, после родов ухудшились все зубы. Вылечили, объяснили что делать дальше, вы большие молодцы!!!!" },
            { name: "Умарова Камола", date: "16.09.2024", text: "Здравствуйте хочу поделиться с вами своими впечатлениями. Я давно не улыбалась из за отсутствия зубов в этой клинике поставили мне 10 имплантов и керамические зубы, хочу поблагодарить весь коллектив, они вернули мне мою замечательную улыбку. Спасибо всем от всей души." },
            { name: "Файзиева Рано", date: "19.09.2024", text: "Хочу поделиться своим опытом, для тех, кто долго не может решиться на циркониевые зубы. Я делала себе цирконий 10 лет назад в этой клинике, была приятно удивлена на контроле, встретив, тех же мастеров и персонал." },
            { name: "Закиров Шохрух", date: "14.09.2024", text: "Случайно нашел в интернете клинику Saif Proface и выбрал её, т.к очень быстро прислали план работы и её стоимость. Очень рад, что здесь работают очень отзывчивые и профессиональные люди." },
            { name: "Хасанов Анвар", date: "21.09.2024", text: "Мне всё понравилось. Я отмечаю значительное улучшение после лечения. Врачи в очень хорошие, обходительные. Они всегда позвонят, предупредят о визите. Спасибо Saif Proface за организацию лечения!" }
        ];
        for (const r of reviewsData) {
            await Reviews.create({
                name: r.name,
                date: r.date,
                text_uz: r.text,
                text_ru: r.text,
                text_en: r.text,
                text_uz_cyr: r.text
            });
        }

        console.log('Seeding completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

run();
