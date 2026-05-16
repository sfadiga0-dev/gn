// قاعدة البيانات المركزية الشاملة والمدققة قنصلياً لـ 33 مواطناً غينياً في سوريا
const citizensData = [
    // 1. عائلة كمارا (6 أفراد - الكبير: كرفالا، المتزوج من أداما)
    { id: 1, firstName: "Kerfalla", lastName: "CAMARA", nameAr: "كرفالا كمارا", family: "Camara", father: "Ibrahim", mother: "Yari", dob: "1976", pob: "Kindia", phone: "0932779075", passport: "91", passStatus: "Valide / ساري", residence: "Daf Al-Shouk / دف الشوك", profession: "Commerçant / تاجر", marital: "Marié / متزوج", eyes: "Marron / بني", issueDate: "2026" },
    { id: 2, firstName: "Adama", lastName: "CAMARA", nameAr: "آدم كمارا", family: "Camara", father: "Mohamed", mother: "Anser", dob: "1969", pob: "Conakry", phone: "---", passport: "92", passStatus: "À vérifier / غير واضح", residence: "Daf Al-Shouk / دف الشوك", profession: "Ménagère / ربة منزل", marital: "Mariée / متزوجة", eyes: "Marron / بني", issueDate: "2026" },
    { id: 3, firstName: "Nsira", lastName: "CAMARA", nameAr: "انسرا كامارا", family: "Camara", father: "Kerfalla", mother: "Adama", dob: "15/03/1998", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", complexion: "-", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 4, firstName: "Ibrahima Sory", lastName: "CAMARA", nameAr: "إبراهيم سوري كمارا", family: "Camara", father: "Kerfalla", mother: "Adama", dob: "20/09/1999", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", complexion: "-", eyes: "Marron", marital: "Célibataire / أعزب", issueDate: "---" },
    { id: 5, firstName: "Mouhamed Lamine", lastName: "CAMARA", nameAr: "محمد أمين كمارا", family: "Camara", father: "Kerfalla", mother: "Adama", dob: "15/10/2001", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", complexion: "-", eyes: "Marron", marital: "Célibataire / أعزب", issueDate: "---" },
    { id: 6, firstName: "Aboubacar", lastName: "CAMARA", nameAr: "أبوبكر كمارا", family: "Camara", father: "Kerfalla", mother: "Adama", dob: "21/11/2006", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", complexion: "-", eyes: "Marron", marital: "Célibataire / أعزب", issueDate: "---" },
    { id: 7, firstName: "Aicha", lastName: "CAMARA", nameAr: "عائشة كمارا", family: "Camara", father: "Kerfalla", mother: "Adama", dob: "12/05/2010", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", complexion: "-", eyes: "Marron", marital: "Mineure / قاصر", issueDate: "---" },

    // 2. عائلة كوياتي (4 أفراد - الكبير: انفالي، المتزوج من أداما كابا)
    { id: 8, firstName: "N'faly", lastName: "KOUYATE", nameAr: "انفالي كوياتي", family: "Kouyate", father: "Moussa", mother: "Mariama", dob: "13/04/1964", pob: "Kankan", phone: "---", passport: "105", passStatus: "À vérifier / غير واضح", residence: "Rukn Al-Din / ركن الدين", profession: "Ouvrier / عامل", marital: "Marié / متزوج", eyes: "Noir / أسود", issueDate: "2026" },
    { id: 9, firstName: "Adama", lastName: "KABA", nameAr: "ادما كابا", family: "Kouyate", father: "Mamadi", mother: "Roukiatou", dob: "04/04/1981", pob: "Kankan", phone: "---", passport: "Pas de passeport", passStatus: "À vérifier / غير واضح", residence: "Rukn Al-Din / ركن الدين", profession: "Ménagère / ربة منزل", marital: "Mariée / متزوجة", eyes: "Marron / بني", issueDate: "2026" },
    { id: 10, firstName: "Souleyman", lastName: "KOUYATE", nameAr: "سليمان كوياتي", family: "Kouyate", father: "N'faly", mother: "Adama", dob: "04/09/2002", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Rukn Al-Din / ركن الدين", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / أعزب", issueDate: "---" },
    { id: 11, firstName: "Zeinab", lastName: "KOUYATE", nameAr: "زينب كوياتي", family: "Kouyate", father: "N'faly", mother: "Adama", dob: "09/04/2007", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Rukn Al-Din / ركن الدين", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },

    // 3. عائلة سوما (6 أفراد - الكبير: الحسين، المتزوج من فاتوماتا كامانو)
    { id: 12, firstName: "Alseny", lastName: "SOUMAH", nameAr: "الحسين موسى سوما", family: "Soumah", father: "Moussa", mother: "Hawa", dob: "01/01/1978", pob: "Kindia", phone: "0934229739", passport: "RO 00252379", passStatus: "Renouvelé / تم تجديده", residence: "Daf Al-Shouk / دف الشوك", profession: "Commerçant / تاجر", marital: "Marié / متزوج", eyes: "Noir / أسود", issueDate: "2026" },
    { id: 13, firstName: "Fatoumata", lastName: "KAMANO", nameAr: "فاتوماتا كامانو", family: "Soumah", father: "Kikoura", mother: "Wata", dob: "30/01/1985", pob: "Gueckedou", phone: "---", passport: "173494", passStatus: "Valide (2 ans) / مجدد لسنتين", residence: "Daf Al-Shouk / دف الشوك", profession: "Ménagère / ربة منزل", marital: "Mariée / متزوجة", eyes: "Marron / بني", issueDate: "2026" },
    { id: 14, firstName: "Hawa", lastName: "SOUMAH", nameAr: "حواء سوما", family: "Soumah", father: "Alseny", mother: "Fatoumata", dob: "07/11/2004", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 15, firstName: "Mariam", lastName: "SOUMAH", nameAr: "مريم سوما", family: "Soumah", father: "Alseny", mother: "Fatoumata", dob: "06/10/2005", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 16, firstName: "Aminata", lastName: "SOUMAH", nameAr: "آمنة سوما", family: "Soumah", father: "Alseny", mother: "Fatoumata", dob: "24/07/2007", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 17, firstName: "Mousah", lastName: "SOUMAH", nameAr: "موسى سوما", family: "Soumah", father: "Alseny", mother: "Fatoumata", dob: "09/10/2019", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Mineur / قاصر", issueDate: "---" },

    // 4. عائلة جاسي (5 أفراد - الكبير: هاشمي، المتزوج من حليمة)
    { id: 18, firstName: "Hassimou", lastName: "DIASSY", nameAr: "هاشمي جاسي", family: "Diassy", father: "Aboubacar", mother: "Salima", dob: "07/01/1981", pob: "Boké", phone: "0936864671", passport: "RO 080958", passStatus: "Expiré / منتهي الصلاحية", residence: "Al-Midan / الميدان", profession: "Ouvrier / عامل", marital: "Marié / متزوج", eyes: "Marron / بني", issueDate: "2026" },
    { id: 19, firstName: "Halimatou", lastName: "DIASSY", nameAr: "حليمة جاسي", family: "Diassy", father: "-", mother: "-", dob: "05/11/2000", pob: "Boké", phone: "---", passport: "Disponible", passStatus: "À renouveler / بدو تجديد", residence: "Al-Midan / الميدان", profession: "Ménagère / ربة منزل", marital: "Mariée / متزوجة", eyes: "Marron / بني", issueDate: "2026" },
    { id: 20, firstName: "Aboubacar", lastName: "DIASSY", nameAr: "أبوبكر جاسي", family: "Diassy", father: "Hassimou", mother: "Halimatou", dob: "28/01/2020", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Al-Midan / الميدان", profession: "Enfant / طفل", eyes: "Marron", marital: "Mineur / قاصر", issueDate: "---" },
    { id: 21, firstName: "Abdallah", lastName: "DIASSY", nameAr: "عبد الله جاسي", family: "Diassy", father: "Hassimou", mother: "Halimatou", dob: "2023", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Al-Midan / الميدان", profession: "Enfant / طفل", eyes: "Marron", marital: "Mineur / قاصر", issueDate: "---" },
    { id: 22, firstName: "Salima", lastName: "DIASSY", nameAr: "سليمة جاسي", family: "Diassy", father: "Hassimou", mother: "Halimatou", dob: "2025", pob: "Damas", phone: "---", passport: "Pas de passeport", passStatus: "Sans / لا يوجد", residence: "Al-Midan / الميدان", profession: "Enfant / طفل", eyes: "Marron", marital: "Mineur / قاصر", issueDate: "---" },

    // 5. عائلة سليمان فاديغا (6 أفراد - الكبير: سليمان، المتزوج من صفية كابا)
    { id: 23, firstName: "Aicha", lastName: "FADIGA", nameAr: "عائشة فاديغا", family: "Suleiman Fadiga", father: "Mohamed Lamine", mother: "Bentouba", dob: "16/11/1979", pob: "Guinée", phone: "0999373093", passport: "72", passStatus: "Valide / موجود ساري", residence: "Daf Al-Shouk / دف الشوك", profession: "Ménagère / ربة منزل", marital: "Mariée / متزوجة", eyes: "Marron / بني", issueDate: "2026" },
    { id: 24, firstName: "Hawa", lastName: "FADIGA", nameAr: "حواء فاديغا", family: "Suleiman Fadiga", father: "Suleiman", mother: "Aicha", dob: "01/01/1999", pob: "Damas", phone: "---", passport: "73", passStatus: "Valide / ساري الصلاحية", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "2026" },
    { id: 25, firstName: "Sankoumba", lastName: "FADIGA", nameAr: "سنكونبا فاديغا", family: "Suleiman Fadiga", father: "Suleiman", mother: "Aicha", dob: "07/10/2000", pob: "Damas", phone: "---", passport: "74", passStatus: "À renouveler / بدو تجديد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / أعزب", issueDate: "---" },
    { id: 26, firstName: "Bentouba", lastName: "FADIGA", nameAr: "بنتوبا فاديغا", family: "Suleiman Fadiga", father: "Suleiman", mother: "Aicha", dob: "2008", pob: "Damas", phone: "---", passport: "75", passStatus: "Pas de passeport / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 27, firstName: "Khadiga", lastName: "FADIGA", nameAr: "كديجا فاديغا", family: "Suleiman Fadiga", father: "Suleiman", mother: "Aicha", dob: "2009", pob: "Damas", phone: "---", passport: "76", passStatus: "Pas de passeport / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Mineure / قاصر", issueDate: "---" },

    // 6. عائلة يوسف فاديغا (6 أفراد - الكبير: يوسف، المتزوج من صفية كابا)
    { id: 28, firstName: "Safiatou", lastName: "KABA", nameAr: "صفية كابا", family: "Youssef Fadiga", father: "Mamadi", mother: "Roukiatou", dob: "02/10/1972", pob: "Guinée", phone: "---", passport: "102", passStatus: "Expire bientôt / يخلص قريباً", residence: "Daf Al-Shouk / دف الشوك", profession: "Ménagère / ربة منزل", marital: "Mariée / متزوجة", eyes: "Marron / بني", issueDate: "2026" },
    { id: 29, firstName: "Fatoumata", lastName: "FADIGA", nameAr: "فاطمة فاديغا", family: "Youssef Fadiga", father: "Youssef", mother: "Safiatou", dob: "12/02/1995", pob: "Damas", phone: "---", passport: "110", passStatus: "Pas de passeport / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 30, firstName: "Rokiatou", lastName: "FADIGA", nameAr: "رقية فاديغا", family: "Youssef Fadiga", father: "Youssef", mother: "Safiatou", dob: "22/01/1997", pob: "Damas", phone: "---", passport: "111", passStatus: "Pas de passeport / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 31, firstName: "Mariam", lastName: "FADIGA", nameAr: "مريم فاديغا", family: "Youssef Fadiga", father: "Youssef", mother: "Safiatou", dob: "16/12/2004", pob: "Damas", phone: "---", passport: "157", passStatus: "Pas de passeport / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / عزباء", issueDate: "---" },
    { id: 32, firstName: "Mamadi", lastName: "FADIGA", nameAr: "مامادي فاديغا", family: "Youssef Fadiga", father: "Youssef", mother: "Safiatou", dob: "30/11/2001", pob: "Damas", phone: "---", passport: "156", passStatus: "Valide / ساري ولا بدو تجديد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Célibataire / أعزب", issueDate: "2026" },
    { id: 33, firstName: "Alpha Sanoussy", lastName: "FADIGA", nameAr: "ألفا سنسي فاديغا", family: "Youssef Fadiga", father: "Youssef", mother: "Safiatou", dob: "30/09/2010", pob: "Damas", phone: "---", passport: "116", passStatus: "Pas de passeport / لا يوجد", residence: "Daf Al-Shouk / دف الشوك", profession: "Sans / بلا", eyes: "Marron", marital: "Mineur / قاصر", issueDate: "---" }
];

// التأكد من حفظ وتخزين البيانات كاملة بالـ LocalStorage بمجرد تشغيل السيرفر المحلي للمرة الأولى
if (!localStorage.getItem('citizens_db_v5') || JSON.parse(localStorage.getItem('citizens_db_v5')).length < 33) {
    localStorage.setItem('citizens_db_v5', JSON.stringify(citizensData));
}

// جلب البيانات الفورية الحية للعمل عبر الواجهات
let citizensLiveList = JSON.parse(localStorage.getItem('citizens_db_v5'));

// دالة الحفظ والتعديل الشاملة (CRUD التفاعلية لربط كافة الحقول بنجاح وبدون ثغرات)
function saveCitizen(e) {
    e.preventDefault();
    const id = document.getElementById('citizen-id').value;
    
    const citizen = {
        id: id ? parseInt(id) : Date.now(),
        nameAr: document.getElementById('f-nameAr').value,
        firstName: document.getElementById('f-firstName').value,
        lastName: document.getElementById('f-lastName').value,
        family: document.getElementById('f-family').value,
        father: document.getElementById('f-father').value,
        mother: document.getElementById('f-mother').value,
        dob: document.getElementById('f-dob').value,
        pob: document.getElementById('f-pob').value,
        passport: document.getElementById('f-passport').value,
        passStatus: document.getElementById('f-passStatus').value,
        profession: document.getElementById('f-profession').value,
        marital: document.getElementById('f-marital').value,
        eyes: document.getElementById('f-eyes').value,
        residence: document.getElementById('f-residence').value,
        phone: document.getElementById('f-phone').value,
        issueDate: document.getElementById('f-issue') ? document.getElementById('f-issue').value : "2026"
    };

    if(id) {
        citizensLiveList = citizensLiveList.map(c => c.id === parseInt(id) ? citizen : c);
    } else {
        citizensLiveList.push(citizen);
    }

    localStorage.setItem('citizens_db_v5', JSON.stringify(citizensLiveList));
    resetForm();
    if (typeof renderAdminPanel === 'function') renderAdminPanel();
    if (typeof renderConsulPanel === 'function') renderConsulPanel();
}

function resetForm() {
    const form = document.getElementById('citizen-form');
    if (form) form.reset();
    const idField = document.getElementById('citizen-id');
    if (idField) idField.value = '';
}