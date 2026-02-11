export type Language = "en" | "ar";

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            programs: "Programs",
            contact: "Contact",
        },
        hero: {
            title: "Unforgettable trips,",
            titleAccent: "expertly planned",
            subtitle: "We tailor trips to your mood, relaxing, thrilling, or cultural. All logistics managed with care.",
            cta: "Start Your Journey",
        },
        services: {
            title: "Professional Travel Services For You",
            explore: "Explore",
            items: {
                travel: {
                    title: "Travel Tourism",
                    desc: "Explore breathtaking destinations with tailored itineraries designed for your comfort and joy.",
                },
                medical: {
                    title: "Medical Tourism",
                    desc: "Access world-class healthcare combined with premium travel arrangements for your peace of mind.",
                },
                business: {
                    title: "Business Tourism",
                    desc: "Seamless corporate travel, from meetings to retreats, ensuring productivity and luxury.",
                },
                transport: {
                    title: "Transportation Service",
                    desc: "Reliable and high-end transport solutions for individuals and groups, whenever you need them.",
                },
                shipping: {
                    title: "Shipping Service",
                    desc: "Efficient global shipping logistics managed with precision and care for your cargo.",
                },
                events: {
                    title: "Event Management",
                    desc: "From concept to execution, we create unforgettable events that leave a lasting impression.",
                },
            },
        },
        about: {
            title: "Learn About TreTrip",
            desc: "TreTrip is your trusted travel partner, delivering personalized, seamless journeys across the globe. Whether you’re planning a vacation, a medical trip, or a corporate retreat — we ensure every detail is taken care of.",
            item1: "Tailored itineraries for every mood",
            item2: "Professional and reliable service",
            item3: "Global reach with local expertise",
            cta: "Discover More",
        },
        programs: {
            title: "Explore Our Programs",
            explore: "Explore",
            hajj: {
                title: "Hajj and Umrah",
                desc: "Spiritually enriching journeys with comprehensive support and premium amenities.",
            },
            kingdom: {
                title: "Explore The Kingdom",
                desc: "Discover Saudi Arabia’s heritage, landscapes, and new wonders with expert guides.",
            },
            usa: {
                title: "Explore The USA",
                desc: "Iconic cities, national parks, and tailored US adventures for every traveler.",
            },
        },
        testimonials: {
            title: "What Clients say about TreTrip",
            items: [
                { name: "David Chen", role: "Business Tourism Client", text: "Professional, reliable, and exceptional service. TreTrip handled our corporate trip flawlessly." },
                { name: "Sarah Johnson", role: "Travel Tourism Client", text: "Thanks to TreTrip, our family vacation was stress-free and unforgettable. Highly recommend!" },
                { name: "Ahmed Ali", role: "Medical Tourism Client", text: "Their medical tourism package was affordable and organized. We felt safe and well taken care of." },
            ],
        },
        cta: {
            title: "Let's Plan Your Next Trip",
            subtitle: "Whether you're traveling for health, work, or exploration — we're here to make it effortless",
            contact: "Contact Us",
            whatsapp: "Chat on WhatsApp",
        },
        footer: {
            desc: "Your trusted travel partner, delivering personalized, seamless journeys across the globe.",
            quickLinks: "Services",
            company: "Company",
            contactUs: "Contact Us",
            address: "Washington DC, USA & Riyadh, KSA",
            rights: "All rights reserved. Designed by",
        },
        contact: {
            title: "Contact Us",
            subtitle: "We're here to help you plan your next adventure.",
            getInTouch: "Get In Touch",
            form: {
                name: "Full Name",
                email: "Email Address",
                subject: "Subject",
                message: "Message",
                submit: "Send Message",
            },
        }
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "من نحن",
            services: "خدماتنا",
            programs: "البرامج",
            contact: "اتصل بنا",
        },
        hero: {
            title: "رحلات لا تُنسى،",
            titleAccent: "مخططة بخبرة",
            subtitle: "نحن نصمم رحلات تناسب مزاجك، سواء كانت للاسترخاء أو الإثارة أو الثقافة. جميع اللوجستيات تُدار بعناية.",
            cta: "ابدأ رحلتك",
        },
        services: {
            title: "خدمات سفر احترافية لك",
            explore: "استكشف",
            items: {
                travel: {
                    title: "السياحة والترفيه",
                    desc: "استكشف وجهات خلابة مع مسارات مصممة خصيصاً لراحتك ومتعتك.",
                },
                medical: {
                    title: "السياحة العلاجية",
                    desc: "احصل على رعاية صحية عالمية المستوى مدمجة مع ترتيبات سفر متميزة من أجل راحة بالك.",
                },
                business: {
                    title: "سياحة الأعمال",
                    desc: "سفر مؤسسي سلس، من الاجتماعات إلى الخلوات، مما يضمن الإنتاجية والرفاهية.",
                },
                transport: {
                    title: "خدمة النقل",
                    desc: "حلول نقل موثوقة وعالية المستوى للأفراد والمجموعات، متى احتجت إليها.",
                },
                shipping: {
                    title: "خدمة الشحن",
                    desc: "لوجستيات شحن عالمية فعالة تُدار بدقة وعناية لشحنتك.",
                },
                events: {
                    title: "إدارة الفعاليات",
                    desc: "من الفكرة إلى التنفيذ، نصنع فعاليات لا تُنسى تترك انطباعاً دائماً.",
                },
            },
        },
        about: {
            title: "تعرف على تري تريب",
            desc: "تري تريب هي شريكك الموثوق في السفر، حيث نقدم رحلات مخصصة وسلسة في جميع أنحاء العالم. سواء كنت تخطط لقضاء عطلة، أو رحلة طبية، أو خلوة مؤسسية - نحن نضمن الاهتمام بكل التفاصيل.",
            item1: "مسارات مصممة خصيصاً لكل مزاج",
            item2: "خدمة احترافية وموثوقة",
            item3: "انتشار عالمي مع خبرة محلية",
            cta: "اكتشف المزيد",
        },
        programs: {
            title: "استكشف برامجنا",
            explore: "استكشف",
            hajj: {
                title: "الحج والعمرة",
                desc: "رحلات إيمانية مثرية مع دعم شامل ومرافق متميزة.",
            },
            kingdom: {
                title: "استكشف المملكة",
                desc: "اكتشف تراث المملكة العربية السعودية ومناظرها الطبيعية وعجائبها الجديدة مع مرشدين خبراء.",
            },
            usa: {
                title: "استكشف الولايات المتحدة",
                desc: "مدن أيقونية، متنزهات وطنية، ومغامرات أمريكية مخصصة لكل مسافر.",
            },
        },
        testimonials: {
            title: "ماذا يقول عملاؤنا عن تري تريب",
            items: [
                { name: "ديفيد تشن", role: "عميل سياحة أعمال", text: "احترافية، موثوقية، وخدمة استثنائية. تعاملت تري تريب مع رحلتنا المؤسسية ببراعة." },
                { name: "سارة جونسون", role: "عميلة سياحة ترفيهية", text: "بفضل تري تريب، كانت عطلتنا العائلية خالية من التوتر ولا تُنسى. نوصي بها بشدة!" },
                { name: "أحمد علي", role: "عميل سياحة علاجية", text: "كانت باقة السياحة العلاجية لديهم منظمة وبسعر مناسب. شعرنا بالأمان والرعاية التامة." },
            ],
        },
        cta: {
            title: "لنخطط لرحلتك القادمة",
            subtitle: "سواء كنت تسافر من أجل الصحة أو العمل أو الاستكشاف - نحن هنا لنجعل الأمر سهلاً",
            contact: "اتصل بنا",
            whatsapp: "تحدث معنا عبر الواتساب",
        },
        footer: {
            desc: "شريكك الموثوق في السفر، نقدم رحلات مخصصة وسلسة في جميع أنحاء العالم.",
            quickLinks: "الخدمات",
            company: "الشركة",
            contactUs: "اتصل بنا",
            address: "واشنطن دي سي، الولايات المتحدة والرياض، السعودية",
            rights: "جميع الحقوق محفوظة. صمم بواسطة",
        },
        contact: {
            title: "اتصل بنا",
            subtitle: "نحن هنا لمساعدتك في التخطيط لمغامرتك القادمة.",
            getInTouch: "تواصل معنا",
            form: {
                name: "الاسم الكامل",
                email: "البريد الإلكتروني",
                subject: "الموضوع",
                message: "الرسالة",
                submit: "إرسال الرسالة",
            },
        }
    },
};
