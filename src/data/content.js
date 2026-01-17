// data/content.js
export const contentData = {
    ar: {
        // Navigation
        navItems: ["الرئيسية", "المدونة الشخصية", "التواصل", "الخبرة"],
        
        // Hero Section
        heroTitle: "مرحباً، أنا <span>كرم حمزة</span>",
        heroSubtitle: "مدير تسويق ومبيعات | خبرة في إدارة المتاجر والحلويات",
        heroDescription: "خلال مسيرتي المهنية، اكتسبت خبرة عملية واسعة في مجال تصنيع الحلويات وإدارة المتاجر. تمكنت من تطوير مهاراتي في التنسيق، إدارة الوقت، خدمة العملاء، وضبط العمليات اليومية لضمان جودة الأداء في كل مرحلة من مراحل العمل.",
        
        // Section Titles
        experienceTitle: "الخبرات العملية",
        conceptsTitle: "المفاهيم الأساسية",
        challengesTitle: "التحديات والحلول",
        contactTitle: "معلومات التواصل",
        
        // Fixed Background Section
        fixedBgTitle: "فلسفة العمل",
        fixedBgText: "أؤمن بأن النجاح في أي مجال يتطلب فهماً عميقاً للتفاصيل، والتركيز على الجودة، والالتزام بالتعلم المستمر. خبرتي في تصنيع الحلويات وإدارة المتاجر علمتني أهمية الدقة، التنظيم، وبناء علاقات قوية مع العملاء والزملاء على حد سواء.",
        
        // Experience Data
        experiences: [
            {
                icon: "fas fa-industry",
                title: "معمل تصنيع الحلويات",
                description: "عملت كمساعد شيف لمدة ثمانية أشهر في معمل الحلويات، حيث اكتسبت معرفة واسعة حول:",
                items: [
                    "المواد الأولية المستخدمة بحسب كل صنف",
                    "جودة المكونات وطريقة اختيارها بعناية",
                    "آلية التنسيق والإدارة بين المصنع والمتجر",
                    "عمليات الجرد اليومي ومراقبة المخزون"
                ]
            },
            {
                icon: "fas fa-store",
                title: "متجر الحلويات",
                description: "مسؤولياتي في متجر الحلويات شملت:",
                items: [
                    "إجراء جرد كامل لقطع الحلويات وحساب الكميات",
                    "استقبال الزبائن وعمليات البيع المباشر",
                    "التواصل مع العملاء وتلبية احتياجاتهم بدقة",
                    "إدارة الطلبات من لحظة خروجها من المصنع وحتى وصولها للمتجر"
                ]
            },
            {
                icon: "fas fa-tshirt",
                title: "وكالة الألبسة",
                description: "مسؤول عن عمليات البيع والتواصل مع العملاء، مع فهم أساليب العرض وتقديم الخدمة بطريقة مهنية.",
                items: [
                    "معرفة أنواع المنتجات ومميزاتها",
                    "فهم احتياجات كل عميل وتقديم المنتج المناسب",
                    "إتقان مهارات العرض والإقناع"
                ]
            }
        ],
        
        // Core Concepts Data
        concepts: [
            {
                icon: "fas fa-cogs",
                title: "إدارة العمليات",
                description: "التنسيق الدقيق بين جميع مراحل العمل، من التصنيع إلى التوزيع، مع التركيز على الجودة والكفاءة في كل خطوة."
            },
            {
                icon: "fas fa-users",
                title: "خدمة العملاء",
                description: "الاستماع الفعال للعملاء، فهم احتياجاتهم العميقة، وتقديم حلول تتجاوز توقعاتهم لبناء علاقات طويلة الأمد."
            },
            {
                icon: "fas fa-chart-line",
                title: "التحليل والتطوير",
                description: "مراقبة أداء المنتجات والعمليات، تحليل البيانات، واستخلاص الدروس لتطوير وتحسين الأداء المستمر."
            },
            {
                icon: "fas fa-handshake",
                title: "العمل الجماعي",
                description: "بناء فرق عمل متجانسة، تعزيز التعاون، وتوزيع المهام بحسب نقاط القوة لتحقيق أهداف مشتركة بكفاءة عالية."
            }
        ],
        
        // Challenges Data
        challengeTabs: [
            { id: "manufacturing", icon: "fas fa-industry", text: "التصنيع" },
            { id: "sweets-store", icon: "fas fa-cookie-bite", text: "متجر الحلويات" },
            { id: "clothing-store", icon: "fas fa-tshirt", text: "وكالة الألبسة" },
            { id: "food-store", icon: "fas fa-shopping-basket", text: "متجر المواد الغذائية" },
            { id: "customer-approach", icon: "fas fa-users", text: "نهج خدمة العملاء" }
        ],
        
        challenges: {
            manufacturing: [
                {
                    title: "التحدي الأول: عامل الوقت",
                    description: "مراعاة مسألة الوقت، خاصة في الصباح الباكر، كانت من أكبر التحديات. التأخير ولو لثوانٍ أو دقائق قد يؤثر على سير الخطة اليومية كاملة.",
                    solution: "مراجعة يومية في نهاية كل يوم عمل على الأدوات، المواد، والأفران، مع التخطيط والتجهيز المسبق بما يضمن عدم التأخير في الساعات الأولى من الصباح."
                },
                {
                    title: "التحدي الثاني: التنظيم والتنسيق داخل القسم",
                    description: "سوء التنظيم وكثرة الطلبات اليومية أديا إلى انخفاض الجودة، تكرار الأخطاء، وضغط نفسي على الفريق.",
                    solution: "تقسيم المهام على ثلاث محاور: خطة يومية تركز على الساعات الأولى، توزيع الأدوار حسب الأصناف، وفهم الفريق وبناء العلاقات من خلال الاستماع والتعاون."
                }
            ],
            "sweets-store": [
                {
                    title: "فهم آلية عمل المتجر",
                    description: "التحدي تمثل في فهم آلية عمل المتجر، وكيف تتم عمليات الجرد، وتوزيع المنتجات، وأسماء الأصناف، خاصة أن هذه كانت تجربتي الأولى في مجال الحلويات.",
                    solution: "تدريب لمدة أسبوع كامل على آلية العمل، والتعرف على الإجراءات اليومية المترتبة مثل عمليات الجرد، أسماء الأصناف، وتقاسم الأدوار مع فريق العمل."
                }
            ],
            "clothing-store": [
                {
                    title: "معرفة المنتجات وتمييزها",
                    description: "معرفة أنواع المنتجات التي أبيعها، ومميزاتها، وما الذي يميز كل منتج عن الآخر من حيث المقاس، التسمية، وما يناسب كل عميل.",
                    solution: "مراجعة المنتجات وبناء قاعدة معرفية أستند عليها أثناء الاستماع للعميل وفهم احتياجاته، مما مهد الطريق لتقديم المنتج المناسب وفق طلب العميل."
                }
            ],
            "food-store": [
                {
                    title: "فهم آلية العمل والمنتجات",
                    description: "فهم آلية العمل وبناء قاعدة معرفية بأنواع المنتجات الواسعة الخاصة بكل شركة يتعامل معها المتجر وما تنتجه من أصناف.",
                    solution: "من خلال الممارسة والتكرار اليومي والتعاون مع فريق العمل، تمكنت خلال مدة قصيرة من فهم آلية العمل بشكل أفضل."
                }
            ],
            "customer-approach": [
                {
                    title: "نهج خدمة العملاء",
                    description: "أعتمد في حل مشاكل العملاء على قاعدة قبل وأثناء وبعد:",
                    solution: "<strong>قبل:</strong> الاستماع الجيد للعميل وفهم احتياجاتهم وطرح أسئلة هادفة لفهم الرؤية بشكل واضح.<br><strong>أثناء:</strong> طرح الحل المناسب بما يتوافق مع رؤية واحتياجات العميل.<br><strong>بعد:</strong> المتابعة بعد عملية الشراء والتأكد من أن المنتج أو الخدمة متوافقة مع توقعات العملاء."
                }
            ]
        },
        
        // Contact Data
        contactInfoTitle: "تواصل معي",
        phoneLabel: "رقم الهاتف",
        emailLabel: "البريد الإلكتروني",
        instagramLabel: "انستغرام",
        skillsTitle: "المهارات المكتسبة",
        operationsLabel: "إدارة العمليات",
        operationsDesc: "التنسيق، التخطيط، وإدارة الوقت",
        customerServiceLabel: "خدمة العملاء",
        customerServiceDesc: "فهم الاحتياجات وتقديم الحلول المناسبة",
        inventoryLabel: "إدارة المخزون والجرد",
        inventoryDesc: "مراقبة المخزون وعمليات الجرد اليومية",
        salesLabel: "مهارات البيع والإقناع",
        salesDesc: "تقديم المنتج المناسب وبناء الثقة مع العميل",
        
        // Loading Text
        loadingText: "جاري التحميل...",
        
        // Footer
        copyrightText: `© ${new Date().getFullYear()} كرم حمزة. جميع الحقوق محفوظة.`
    },
    
    en: {
        // Navigation
        navItems: ["Home", "Blog", "Contact", "Experience"],
        
        // Hero Section
        heroTitle: "Hello, I'm <span>Karam Hamza</span>",
        heroSubtitle: "Marketing & Sales Manager | Experience in Store & Sweets Management",
        heroDescription: "Throughout my professional journey, I have gained extensive practical experience in sweets manufacturing and store management. I have developed my skills in coordination, time management, customer service, and controlling daily operations to ensure quality performance at every stage of work.",
        
        // Section Titles
        experienceTitle: "Work Experience",
        conceptsTitle: "Core Concepts",
        challengesTitle: "Challenges & Solutions",
        contactTitle: "Contact Information",
        
        // Fixed Background Section
        fixedBgTitle: "Work Philosophy",
        fixedBgText: "I believe that success in any field requires a deep understanding of details, focus on quality, and commitment to continuous learning. My experience in sweets manufacturing and store management has taught me the importance of precision, organization, and building strong relationships with both customers and colleagues.",
        
        // Experience Data
        experiences: [
            {
                icon: "fas fa-industry",
                title: "Sweets Manufacturing Factory",
                description: "I worked as an assistant chef for eight months in a sweets factory, where I gained extensive knowledge about:",
                items: [
                    "Raw materials used according to each type",
                    "Quality of ingredients and careful selection method",
                    "Coordination and management mechanism between factory and store",
                    "Daily inventory processes and stock monitoring"
                ]
            },
            {
                icon: "fas fa-store",
                title: "Sweets Store",
                description: "My responsibilities in the sweets store included:",
                items: [
                    "Conducting a complete inventory of sweets pieces and calculating quantities",
                    "Receiving customers and direct sales operations",
                    "Communicating with customers and meeting their needs accurately",
                    "Managing orders from the moment they leave the factory until they reach the store"
                ]
            },
            {
                icon: "fas fa-tshirt",
                title: "Clothing Agency",
                description: "Responsible for sales operations and communication with customers, with an understanding of display methods and providing service in a professional manner.",
                items: [
                    "Knowledge of product types and their features",
                    "Understanding each customer's needs and providing the appropriate product",
                    "Mastering presentation and persuasion skills"
                ]
            }
        ],
        
        // Core Concepts Data
        concepts: [
            {
                icon: "fas fa-cogs",
                title: "Operations Management",
                description: "Precise coordination between all stages of work, from manufacturing to distribution, with a focus on quality and efficiency at every step."
            },
            {
                icon: "fas fa-users",
                title: "Customer Service",
                description: "Effective listening to customers, understanding their deep needs, and providing solutions that exceed their expectations to build long-term relationships."
            },
            {
                icon: "fas fa-chart-line",
                title: "Analysis & Development",
                description: "Monitoring product and process performance, analyzing data, and extracting lessons to continuously develop and improve performance."
            },
            {
                icon: "fas fa-handshake",
                title: "Teamwork",
                description: "Building cohesive work teams, enhancing cooperation, and distributing tasks according to strengths to achieve common goals with high efficiency."
            }
        ],
        
        // Challenges Data
        challengeTabs: [
            { id: "manufacturing", icon: "fas fa-industry", text: "Manufacturing" },
            { id: "sweets-store", icon: "fas fa-cookie-bite", text: "Sweets Store" },
            { id: "clothing-store", icon: "fas fa-tshirt", text: "Clothing Store" },
            { id: "food-store", icon: "fas fa-shopping-basket", text: "Food Store" },
            { id: "customer-approach", icon: "fas fa-users", text: "Customer Approach" }
        ],
        
        challenges: {
            manufacturing: [
                {
                    title: "First Challenge: Time Factor",
                    description: "Considering the issue of time, especially early in the morning, was one of the biggest challenges. Delay even for seconds or minutes could affect the entire daily plan.",
                    solution: "Daily review at the end of each workday on tools, materials, and ovens, with pre-planning and preparation to ensure no delay in the early morning hours."
                },
                {
                    title: "Second Challenge: Organization & Coordination Within the Department",
                    description: "Poor organization and the abundance of daily orders led to decreased quality, repeated errors, and psychological pressure on the team.",
                    solution: "Dividing tasks into three axes: a daily plan focusing on the first hours, distributing roles according to types, and understanding the team and building relationships through listening and cooperation."
                }
            ],
            "sweets-store": [
                {
                    title: "Understanding Store Operation Mechanism",
                    description: "The challenge was in understanding the store's operation mechanism, how inventory processes are conducted, product distribution, and type names, especially since this was my first experience in the sweets field.",
                    solution: "Training for a full week on the work mechanism, and getting acquainted with the daily procedures such as inventory processes, type names, and sharing roles with the work team."
                }
            ],
            "clothing-store": [
                {
                    title: "Product Knowledge and Differentiation",
                    description: "Knowing the types of products I sell, their features, and what distinguishes each product from the other in terms of size, naming, and what suits each customer.",
                    solution: "Reviewing products and building a knowledge base that I rely on while listening to the customer and understanding their needs, which paved the way for providing the appropriate product according to the customer's request."
                }
            ],
            "food-store": [
                {
                    title: "Understanding Work Mechanism and Products",
                    description: "Understanding the work mechanism and building a knowledge base of the wide range of products specific to each company the store deals with and what they produce.",
                    solution: "Through practice, daily repetition, and cooperation with the work team, I was able to understand the work mechanism better in a short period."
                }
            ],
            "customer-approach": [
                {
                    title: "Customer Service Approach",
                    description: "I rely on a before, during, and after rule in solving customer problems:",
                    solution: "<strong>Before:</strong> Good listening to the customer, understanding their needs, and asking purposeful questions to understand the vision clearly.<br><strong>During:</strong> Proposing the appropriate solution in line with the customer's vision and needs.<br><strong>After:</strong> Follow-up after the purchase and ensuring that the product or service meets customer expectations."
                }
            ]
        },
        
        // Contact Data
        contactInfoTitle: "Contact Me",
        phoneLabel: "Phone Number",
        emailLabel: "Email",
        instagramLabel: "Instagram",
        skillsTitle: "Acquired Skills",
        operationsLabel: "Operations Management",
        operationsDesc: "Coordination, planning, and time management",
        customerServiceLabel: "Customer Service",
        customerServiceDesc: "Understanding needs and providing appropriate solutions",
        inventoryLabel: "Inventory Management",
        inventoryDesc: "Stock monitoring and daily inventory processes",
        salesLabel: "Sales & Persuasion Skills",
        salesDesc: "Presenting the right product and building trust with the customer",
        
        // Loading Text
        loadingText: "Loading...",
        
        // Footer
        copyrightText: `© ${new Date().getFullYear()} Karam Hamza. All rights reserved.`
    }
};