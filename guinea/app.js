// app.js
const INITIAL_DATA = [
    { id: 1, family: "CAMARA", nom: "Adama", dob: "1969", pob: "Conakry", pere: "Mohamed", mere: "Anser", prof: "Ménagère", statut: "Renouvellement", pass: "92", exp: "À vérifier", obs: "Épouse" },
    { id: 2, family: "CAMARA", nom: "Nsira", dob: "15/03/1998", pob: "Damas", pere: "Kerfalla", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Née en Syrie" },
    { id: 3, family: "CAMARA", nom: "Ibrahima Sory", dob: "20/09/1999", pob: "Damas", pere: "Kerfalla", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Né en Syrie" },
    { id: 4, family: "CAMARA", nom: "Mouhamed Lamine", dob: "15/10/2001", pob: "Damas", pere: "Kerfalla", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Né en Syrie" },
    { id: 5, family: "CAMARA", nom: "Aboubacar", dob: "21/11/2006", pob: "Damas", pere: "Kerfalla", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineur" },
    { id: 6, family: "CAMARA", nom: "Aicha", dob: "12/05/2010", pob: "Damas", pere: "Kerfalla", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineure" },
    { id: 7, family: "KOUYATE", nom: "N'faly", dob: "13/04/1964", pob: "Kankan", pere: "Moussa", mere: "Mariama", prof: "Ouvrier", statut: "Renouvellement", pass: "105", exp: "À vérifier", obs: "Chef de famille" },
    { id: 8, family: "KABA", nom: "Adama", dob: "04/04/1981", pob: "Kankan", pere: "Mamadi", mere: "Roukiatou", prof: "Ménagère", statut: "Renouvellement", pass: "Perdu", exp: "---", obs: "Épouse" },
    { id: 9, family: "KOUYATE", nom: "Souleyman", dob: "04/09/2002", pob: "Damas", pere: "N'faly", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Né en Syrie" },
    { id: 10, family: "KOUYATE", nom: "Zeinab", dob: "09/04/2007", pob: "Damas", pere: "N'faly", mere: "Adama", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineure" },
    { id: 11, family: "SOUMAH", nom: "Hawa", dob: "07/11/2004", pob: "Damas", pere: "Alseny", mere: "Fatoumata", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Née en Syrie" },
    { id: 12, family: "SOUMAH", nom: "Mariam", dob: "06/10/2005", pob: "Damas", pere: "Alseny", mere: "Fatoumata", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Née en Syrie" },
    { id: 13, family: "SOUMAH", nom: "Aminata", dob: "24/07/2007", pob: "Damas", pere: "Alseny", mere: "Fatoumata", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineure" },
    { id: 14, family: "SOUMAH", nom: "Mousah", dob: "09/10/2019", pob: "Damas", pere: "Alseny", mere: "Fatoumata", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineur" },
    { id: 15, family: "DIASSY", nom: "Hassimou", dob: "07/01/1981", pob: "Boké", pere: "Aboubacar", mere: "Salima", prof: "Ouvrier", statut: "Renouvellement", pass: "RO 080958", exp: "Expiré", obs: "Chef de famille" },
    { id: 16, family: "DIASSY", nom: "Halimatou", dob: "05/11/2000", pob: "Boké", pere: "Inconnu", mere: "Inconnu", prof: "Ménagère", statut: "Renouvellement", pass: "Disponible", exp: "À vérifier", obs: "Épouse" },
    { id: 17, family: "DIASSY", nom: "Aboubacar", dob: "28/01/2020", pob: "Damas", pere: "Hassimou", mere: "Halimatou", prof: "Enfant", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineur" },
    { id: 18, family: "DIASSY", nom: "Abdallah", dob: "2023", pob: "Damas", pere: "Hassimou", mere: "Halimatou", prof: "Enfant", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineur" },
    { id: 19, family: "DIASSY", nom: "Salima", dob: "2025", pob: "Damas", pere: "Hassimou", mere: "Halimatou", prof: "Enfant", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineure" },
    { id: 20, family: "FADIGA", nom: "Sankoumba", dob: "07/10/2000", pob: "Damas", pere: "Suleiman", mere: "Aicha", prof: "Sans", statut: "Renouvellement", pass: "74", exp: "Expiré", obs: "Né en Syrie" },
    { id: 21, family: "FADIGA", nom: "Bentouba", dob: "2008", pob: "Damas", pere: "Suleiman", mere: "Aicha", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineure" },
    { id: 22, family: "FADIGA", nom: "Khadiga", dob: "2009", pob: "Damas", pere: "Suleiman", mere: "Aicha", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineure" },
    { id: 23, family: "KABA", nom: "Safiatou", dob: "02/10/1972", pob: "Guinée", pere: "Mamadi", mere: "Roukiatou", prof: "Ménagère", statut: "Renouvellement", pass: "102", exp: "Bientôt", obs: "Épouse" },
    { id: 24, family: "FADIGA", nom: "Fatoumata", dob: "12/02/1995", pob: "Damas", pere: "Youssef", mere: "Safiatou", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Née en Syrie" },
    { id: 25, family: "FADIGA", nom: "Rokiatou", dob: "22/01/1997", pob: "Damas", pere: "Youssef", mere: "Safiatou", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Née en Syrie" },
    { id: 26, family: "FADIGA", nom: "Mariam", dob: "16/12/2004", pob: "Damas", pere: "Youssef", mere: "Safiatou", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Née en Syrie" },
    { id: 27, family: "FADIGA", nom: "Alpha Sanoussy", dob: "30/09/2010", pob: "Damas", pere: "Youssef", mere: "Safiatou", prof: "Sans", statut: "Première Demande", pass: "Néant", exp: "---", obs: "Mineur" }
];

const DICT = {
    ar: { title_admin: "لوحة الإدارة - الصلاحيات الكاملة", title_consul: "بوابة القنصل - عرض وطباعة", title_family: "إدارة العائلات", name: "الاسم", family: "العائلة", dob: "تاريخ الولادة", actions: "إجراءات", view: "عرض", edit: "تعديل", delete: "حذف", add: "إضافة", print: "طباعة", dir: "rtl" },
    fr: { title_admin: "Panneau d'Administration", title_consul: "Portail du Consul", title_family: "Gestion des Familles", name: "Prénoms", family: "Nom", dob: "Date de Naissance", actions: "Actions", view: "Voir", edit: "Modifier", delete: "Supprimer", add: "Ajouter", print: "Imprimer", dir: "ltr" },
    en: { title_admin: "Administration Panel", title_consul: "Consul Portal", title_family: "Families Management", name: "Name", family: "Family", dob: "Date of Birth", actions: "Actions", view: "View", edit: "Edit", delete: "Delete", add: "Add", print: "Print", dir: "ltr" }
};

const APP = {
    init: function() {
        if (!localStorage.getItem('guinea_db')) {
            localStorage.setItem('guinea_db', JSON.stringify(INITIAL_DATA));
        }
        this.setLang(localStorage.getItem('lang') || 'ar');
    },
    getDB: () => JSON.parse(localStorage.getItem('guinea_db')),
    saveDB: (data) => localStorage.setItem('guinea_db', JSON.stringify(data)),
    setLang: function(lang) {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        document.body.dir = DICT[lang].dir;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (DICT[lang][key]) el.innerText = DICT[lang][key];
        });
        if(window.renderTable) window.renderTable(); // Refresh UI if exists
    },
    getLangText: (key) => DICT[localStorage.getItem('lang') || 'ar'][key]
};

document.addEventListener('DOMContentLoaded', () => APP.init());
