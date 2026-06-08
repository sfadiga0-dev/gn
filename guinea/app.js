// app.js - النظام القنصلي الأساسي
const APP = {
    // تحميل البيانات الأولية إذا كان النظام فارغاً
    initDB: function() {
        if (!localStorage.getItem('consular_db')) {
            const defaultData = [
                { id: 1, family: "Camara", nomFr: "Kerfalla CAMARA", nomAr: "كرفالا كمارا", pere: "Ibrahim", mere: "Yari", dob: "1976", pob: "Kindia", pass: "", statut: "Valide / ساري", address: "Daf Al-Shouk / دف الشوك" },
                { id: 2, family: "Camara", nomFr: "Adama CAMARA", nomAr: "آدم كمارا", pere: "Mohamed", mere: "Anser", dob: "1969", pob: "Conakry", pass: "", statut: "Valide / ساري", address: "Daf Al-Shouk / دف الشوك" },
                { id: 3, family: "Camara", nomFr: "Nsira CAMARA", nomAr: "انسرا كامارا", pere: "Kerfalla", mere: "Adama", dob: "15/03/1998", pob: "Damas", pass: "R0066758", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 4, family: "Camara", nomFr: "Ibrahima Sory CAMARA", nomAr: "إبراهيم سوري كمارا", pere: "Kerfalla", mere: "Adama", dob: "20/09/1999", pob: "Damas", pass: "R0066758", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 5, family: "Camara", nomFr: "Mouhamed Lamine CAMARA", nomAr: "محمد أمين كمارا", pere: "Kerfalla", mere: "Adama", dob: "15/10/2001", pob: "Damas", pass: "R0066758", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 6, family: "Camara", nomFr: "Aboubacar CAMARA", nomAr: "أبوبكر كمارا", pere: "Kerfalla", mere: "Adama", dob: "21/11/2006", pob: "Damas", pass: "R0066758", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 7, family: "Camara", nomFr: "Aicha CAMARA", nomAr: "عائشة كمارا", pere: "Kerfalla", mere: "Adama", dob: "12/05/2010", pob: "Damas", pass: "R0029223", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 8, family: "Kouyate", nomFr: "N'faly KOUYATE", nomAr: "انفالي كوياتي", pere: "Moussa", mere: "Mariama", dob: "13/04/1964", pob: "Kankan", pass: "R00366136", statut: "À renouveler", address: "Rukn Al-Din / ركن الدين" },
                { id: 9, family: "Kouyate", nomFr: "Adama KABA", nomAr: "ادما كابا", pere: "Mamadi", mere: "Roukiatou", dob: "04/04/1981", pob: "Kankan", pass: "R0366137", statut: "À renouveler", address: "Rukn Al-Din / ركن الدين" },
                { id: 10, family: "Kouyate", nomFr: "Souleyman KOUYATE", nomAr: "سليمان كوياتي", pere: "N'faly", mere: "Adama", dob: "04/09/2002", pob: "Damas", pass: "R0366138", statut: "À renouveler", address: "Rukn Al-Din / ركن الدين" },
                { id: 11, family: "Kouyate", nomFr: "Zeinab KOUYATE", nomAr: "زينب كوياتي", pere: "N'faly", mere: "Adama", dob: "09/04/2007", pob: "Damas", pass: "R0366139", statut: "À renouveler", address: "Rukn Al-Din / ركن الدين" },
                { id: 12, family: "Kouyate", nomFr: "Aminata kouyate", nomAr: "امينا كوياتي", pere: "N'faly", mere: "Adama", dob: "25/6/2014", pob: "Damas", pass: "00507104", statut: "À renouveler", address: "Rukn Al-Din / ركن الدين" },
                { id: 13, family: "Soumah", nomFr: "Alseny SOUMAH", nomAr: "الحسين موسى سوما", pere: "Moussa", mere: "Hawa", dob: "01/01/1978", pob: "Kindia", pass: "R00153997", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 14, family: "Soumah", nomFr: "Fatoumata KAMANO", nomAr: "فاتوماتا كامانو", pere: "Kikoura", mere: "Wata", dob: "30/01/1985", pob: "Gueckedou", pass: "R00438563", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 15, family: "Soumah", nomFr: "Hawa SOUMAH", nomAr: "حواء سوما", pere: "Alseny", mere: "Fatoumata", dob: "07/11/2004", pob: "Damas", pass: "R00438563", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 16, family: "Soumah", nomFr: "Mariam SOUMAH", nomAr: "مريم سوما", pere: "Alseny", mere: "Fatoumata", dob: "06/10/2005", pob: "Damas", pass: "R00438563", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 17, family: "Soumah", nomFr: "Aminata SOUMAH", nomAr: "آمنة سوما", pere: "Alseny", mere: "Fatoumata", dob: "24/07/2007", pob: "Damas", pass: "R00438563", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 18, family: "Soumah", nomFr: "Mousah SOUMAH", nomAr: "موسى سوما", pere: "Alseny", mere: "Fatoumata", dob: "09/10/2019", pob: "Damas", pass: "R00438563", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 19, family: "Diassy", nomFr: "Hassimou DIASSY", nomAr: "هاشمي جاسي", pere: "Aboubacar", mere: "Salima", dob: "07/01/1981", pob: "Boké", pass: "R0080958", statut: "À renouveler", address: "Al-Midan / الميدان" },
                { id: 20, family: "Diassy", nomFr: "Halimatou DIASSY", nomAr: "حليمة جاسي", pere: "-", mere: "-", dob: "05/11/2000", pob: "Boké", pass: "00370517", statut: "À renouveler", address: "Al-Midan / الميدان" },
                { id: 21, family: "Diassy", nomFr: "Aboubacar DIASSY", nomAr: "أبوبكر جاسي", pere: "Hassimou", mere: "Halimatou", dob: "28/01/2020", pob: "Damas", pass: "R0080958", statut: "À renouveler", address: "Al-Midan / الميدان" },
                { id: 22, family: "Diassy", nomFr: "Abdallah DIASSY", nomAr: "عبد الله جاسي", pere: "Hassimou", mere: "Halimatou", dob: "2023", pob: "Damas", pass: "R0080958", statut: "À renouveler", address: "Al-Midan / الميدان" },
                { id: 23, family: "Diassy", nomFr: "Salima DIASSY", nomAr: "سليمة جاسي", pere: "Hassimou", mere: "Halimatou", dob: "2025", pob: "Damas", pass: "R0080958", statut: "À renouveler", address: "Al-Midan / الميدان" },
                { id: 24, family: "Suleiman Fadiga", nomFr: "Aicha FADIGA", nomAr: "عائشة فاديغا", pere: "Mohamed Lamine", mere: "Bentouba", dob: "16/11/1979", pob: "Guinée", pass: "", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 25, family: "Suleiman Fadiga", nomFr: "Hawa FADIGA", nomAr: "حواء فاديغا", pere: "Suleiman", mere: "Aicha", dob: "01/01/1999", pob: "Damas", pass: "", statut: "Valide / ساري", address: "Daf Al-Shouk / دف الشوك" },
                { id: 26, family: "Suleiman Fadiga", nomFr: "Sankoumba FADIGA", nomAr: "سنكونبا فاديغا", pere: "Suleiman", mere: "Aicha", dob: "07/10/2000", pob: "Damas", pass: "R610376", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 27, family: "Suleiman Fadiga", nomFr: "Bentouba FADIGA", nomAr: "بنتوبا فاديغا", pere: "Suleiman", mere: "Aicha", dob: "2008", pob: "Damas", pass: "R0094482", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 28, family: "Suleiman Fadiga", nomFr: "Khadiga FADIGA", nomAr: "كديجا فاديغا", pere: "Suleiman", mere: "Aicha", dob: "2009", pob: "Damas", pass: "R0094482", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 29, family: "Youssef Fadiga", nomFr: "Safiatou KABA", nomAr: "صفية كابا", pere: "Mamadi", mere: "Roukiatou", dob: "02/10/1972", pob: "Guinée", pass: "", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 30, family: "Youssef Fadiga", nomFr: "Fatoumata FADIGA", nomAr: "فاطمة فاديغا", pere: "Youssef", mere: "Safiatou", dob: "12/02/1995", pob: "Damas", pass: "R0121167", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 31, family: "Youssef Fadiga", nomFr: "Rokiatou FADIGA", nomAr: "رقية فاديغا", pere: "Youssef", mere: "Safiatou", dob: "22/01/1997", pob: "Damas", pass: "R0121198", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 32, family: "Youssef Fadiga", nomFr: "Mariam FADIGA", nomAr: "مريم فاديغا", pere: "Youssef", mere: "Safiatou", dob: "16/12/2004", pob: "Damas", pass: "", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" },
                { id: 33, family: "Youssef Fadiga", nomFr: "Mamadi FADIGA", nomAr: "مامادي فاديغا", pere: "Youssef", mere: "Safiatou", dob: "30/11/2001", pob: "Damas", pass: "R0075297", statut: "Valide / ساري", address: "Daf Al-Shouk / دف الشوك" },
                { id: 34, family: "Youssef Fadiga", nomFr: "Alpha Sanoussy FADIGA", nomAr: "ألفا سنسي فاديغا", pere: "Youssef", mere: "Safiatou", dob: "30/09/2010", pob: "Damas", pass: "R0075297", statut: "À renouveler", address: "Daf Al-Shouk / دف الشوك" }
            ];
            localStorage.setItem('consular_db', JSON.stringify(defaultData));
        }
    },
    getDB: () => JSON.parse(localStorage.getItem('consular_db')),
    saveDB: (data) => localStorage.setItem('consular_db', JSON.stringify(data)),
    
    checkAuth: (requiredRole) => {
        // إذا كنت تعمل بدون تسجيل دخول حالياً، يمكنك إيقاف هذا السطر لسهولة العمل
        // const user = JSON.parse(sessionStorage.getItem('sessionUser'));
        // if (!user || (requiredRole && user.role !== requiredRole)) { window.location.href = 'index.html'; }
    }
};

APP.initDB(); // تفعيل قاعدة البيانات فور فتح الملف
