// app.js - The Core Engine
const SYSTEM = {
    // القاموس الذكي المدمج (يمكن توسعته بسهولة)
    i18n: {
        ar: { dir: 'rtl', font: 'Cairo', greeting: 'مرحباً، حسن جواد', subtitle: 'نظام الإدارة القنصلية الفاخر', search: 'ابحث عن مواطن، جواز سفر...', dark: 'داكن', light: 'فاتح' },
        fr: { dir: 'ltr', font: 'Poppins', greeting: 'Bonjour, Hassan Jawad', subtitle: 'Système Consulaire Premium', search: 'Rechercher un citoyen...', dark: 'Sombre', light: 'Clair' },
        en: { dir: 'ltr', font: 'Poppins', greeting: 'Welcome, Hassan Jawad', subtitle: 'Premium Consular System', search: 'Search citizens...', dark: 'Dark', light: 'Light' }
    },
    
    init: function() {
        this.currentLang = localStorage.getItem('lang') || 'ar';
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.applyTheme(this.currentTheme);
        this.applyLang(this.currentLang);
        this.animateIn();
    },

    // تغيير اللغة ذكياً مع أنيميشن ناعم
    applyLang: function(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        
        const dict = this.i18n[lang];
        document.documentElement.dir = dict.dir;
        document.documentElement.lang = lang;
        document.body.style.fontFamily = `'${dict.font}', sans-serif`;

        // تأثير بهتان عند تغيير اللغة
        gsap.to("[data-i18n]", { 
            opacity: 0, y: -5, duration: 0.2, 
            onComplete: () => {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if(dict[key]) {
                        if(el.tagName === 'INPUT') el.placeholder = dict[key];
                        else el.innerText = dict[key];
                    }
                });
                gsap.to("[data-i18n]", { opacity: 1, y: 0, duration: 0.3, stagger: 0.02 });
            }
        });
    },

    // الوضع الفاخر الداكن/الفاتح
    toggleTheme: function() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(this.currentTheme);
    },
    
    applyTheme: function(theme) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    },

    // حركات GSAP الفيزيائية للظهور
    animateIn: function() {
        if(typeof gsap !== 'undefined') {
            gsap.from(".glass-card", { y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.2 });
            gsap.from(".modern-table tr", { x: -20, opacity: 0, duration: 0.6, stagger: 0.05, ease: "back.out(1.7)", delay: 0.5 });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => SYSTEM.init());
