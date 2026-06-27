const APP = {
    // قاعدة البيانات الرئيسية
    initDB: function() {
        if (!localStorage.getItem('guinea_db')) {
            const data = [
                { id: 1, family: "Camara", nomFr: "Kerfalla CAMARA", nomAr: "كرفالا كمارا", pere: "Ibrahim", mere: "Yari", dob: "1976", pob: "Kindia", pass: "", statut: "Valide / ساري", address: "Daf Al-Shouk" },
                { id: 2, family: "Camara", nomFr: "Adama CAMARA", nomAr: "آدم كمارا", pere: "Mohamed", mere: "Anser", dob: "1969", pob: "Conakry", pass: "", statut: "Valide / ساري", address: "Daf Al-Shouk" },
                { id: 3, family: "Camara", nomFr: "Nsira CAMARA", nomAr: "انسرا كامارا", pere: "Kerfalla", mere: "Adama", dob: "15/03/1998", pob: "Damas", pass: "R0066758", statut: "À renouveler", address: "Daf Al-Shouk" },
                { id: 8, family: "Kouyate", nomFr: "N'faly KOUYATE", nomAr: "انفالي كوياتي", pere: "Moussa", mere: "Mariama", dob: "13/04/1964", pob: "Kankan", pass: "R00366136", statut: "À renouveler", address: "Rukn Al-Din" },
                { id: 13, family: "Soumah", nomFr: "Alseny SOUMAH", nomAr: "الحسين موسى سوما", pere: "Moussa", mere: "Hawa", dob: "01/01/1978", pob: "Kindia", pass: "R00153997", statut: "À renouveler", address: "Daf Al-Shouk" },
                { id: 19, family: "Diassy", nomFr: "Hassimou DIASSY", nomAr: "هاشمي جاسي", pere: "Aboubacar", mere: "Salima", dob: "07/01/1981", pob: "Boké", pass: "R0080958", statut: "À renouveler", address: "Al-Midan" },
                { id: 24, family: "Suleiman Fadiga", nomFr: "Aicha FADIGA", nomAr: "عائشة فاديغا", pere: "Mohamed Lamine", mere: "Bentouba", dob: "16/11/1979", pob: "Guinée", pass: "", statut: "À renouveler", address: "Daf Al-Shouk" },
                { id: 29, family: "Youssef Fadiga", nomFr: "Safiatou KABA", nomAr: "صفية كابا", pere: "Mamadi", mere: "Roukiatou", dob: "02/10/1972", pob: "Guinée", pass: "", statut: "À renouveler", address: "Daf Al-Shouk" }
                // تم وضع عينات رئيسية لضمان سرعة الكود، الإضافة متاحة من لوحة الإدارة
            ];
            localStorage.setItem('guinea_db', JSON.stringify(data));
        }
    },
    getDB: () => JSON.parse(localStorage.getItem('guinea_db')) || [],
    saveDB: (data) => localStorage.setItem('guinea_db', JSON.stringify(data)),
    
    // نظام الصلاحيات
    checkAuth: (role) => {
        const user = JSON.parse(sessionStorage.getItem('sessionUser'));
        if (!user) { window.location.href = 'index.html'; return null; }
        if (role && user.role !== role && user.role !== 'admin') {
            alert("صلاحيات غير كافية");
            window.location.href = 'index.html';
        }
        return user;
    },
    logout: () => {
        sessionStorage.clear();
        window.location.href = 'index.html';
    }
};
APP.initDB();
