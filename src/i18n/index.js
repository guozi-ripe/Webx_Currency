import { ref, inject } from "vue";

const messages = {
  en: {
    nav: {
      項目簡介: "Overview",
      項目優勢: "Advantages",
      生態系統: "Ecosystem",
      團隊背景: "Team Background",
      聯係我們: "Contact Us",
    },
    hero: {
      title: "The future of global chain ",
      title2: "commerce starts here",
      sub: "We follow openness, transparency and compliance to launch WEBX digital assets, empowering the construction and growth of the global chain-commerce ecosystem.",
      join: "Join WebX",
      ctaPrimary: "View token info",
      ctaSecondary: "Contact project team",
      stats: {
        rating: "4.8/5 on Trustpilot",
        investors: "3M+ investors",
        projects: "100+ international awards",
      },
    },
    trust: {
      title: "Trusted Globally",
      sub: "See why millions from 100+ countries join WebX",
      cards: {
        social: {
          title: "Social",
          desc: "Over 5 billion internet users and $8T online spending",
        },
        reliable: {
          title: "Reliable",
          desc: "Core team averages 10+ years in R&D across Web3, AI, security",
        },
        guarantee: {
          title: "Assurance",
          desc: "Compliance with GDPR, ISO27001, SOC2 led by security experts",
        },
        global: {
          title: "Global",
          desc: "5000+ certified partners deliver end-to-end services worldwide",
        },
      },
    },
    partners: {
      title: "Your funds are held by top institutions",
      sub: "WebX Group partners with world-class institutions",
    },
    footer: {
      tag: "A diverse world, earning together.",
      columns: {
        about: "About",
        contact: "Contact",
        money: "Earn with us",
        legal: "Legal",
      },
      about: {
        about_us: "About us",
        careers: "Careers",
        press: "Press",
      },
      contact: {
        facebook: "Facebook",
        twitter: "Twitter",
        instagram: "Instagram",
        email: "Email",
      },
      money: {
        affiliates: "Become a WebX promoter",
        vendors: "Vendors partner with WebX",
        protect_brand: "Protect the official brand",
      },
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Use",
      },
      Copyright: "© BingoX Investments Limited. All rights reserved.",
    },
    Project: {
      title: "Project Overview",

      Box1: {
        h1_1: "Connecting the World: WebX Grand Consumption Ecosystem",
        h3_1: "Chain Commerce",
        h3_1_s:
          "(Hong Kong, Vietnam, Indonesia, Malaysia, Dubai, North America…), ",
        h3_1_s_2: "Chain Gaming, Entertainment, Cross-border",
        h3_1_3: "(China, Vietnam, Malaysia…), ",
        h3_1_s_3: "Payment…",
        h3_2: "Consumption",
        h3_2_s: "earns",
        h3_2_s_2: " WebX ",
        h3_2_s_3: "energy contributions, assisting",
        h3_2_s_4: " W2 ",
        h3_2_s_5: "traditional traffic and capital to enter the",
        h3_2_s_6: " W3 ",
        h3_2_s_7: "realm",
        h3_3: "WebX",
        h3_3_1:
          "main token serves as the ecosystem's primary currency, empowering supply chain merchants, global consumers,",
        h3_4: "game developers, players, etc. to co-create, share, and win together",
        h1_2: "Token Information",
        li1: "Token Symbol:",
        li2: "Chinese Full Name:",
        li3: "English Full Name:",
        li4: "Total Token Supply:",
        symbol: "WebX",
        cnFull: "Global Chain Commerce",
        enFull: "WebX Global Chain Commerce",
        supply: "1.2 Billion (1,200,000,000)",
      },

      Box2: {
        title_left: "Exchange Listings",
        planned: "Planned CEX",
        dex: "DEX",
        title_right: "Wallet Support",
        plannedWallet: "Planned Wallets",
        adapted: "Adapted (Testing)",
      },

      Box3: {
        title_left: "Project Status",
        tag1: "Compliance & Transparency",
        desc1: "Strictly comply with local regulations",
        tag2: "Tech Foundation",
        desc2: "Secure & scalable on-chain architecture",
        tag3: "Ecosystem Direction",
        desc3: "Expand partnerships around chain-commerce use cases",
        title_right: "Whitepaper Download",
        coming:
          "The whitepaper is being finalized and reviewed; a link will be provided once the official version is released",
        btn: "Coming Soon",
      },

      Box4: {
        token: "Token",
        supply: "Total Supply",
      },
    },
    News: {
      title: "News & Information",

      banner: {
        h2: "Gateway to Cryptocurrencies",
        txt: "Gateway to Cryptocurrencies",
        btn: "Learn More",
      },

      item1: {
        h3: "APY up to 10%",
        txt: "Tiered + locking mechanism; all promoters act as nodes.",
        btn: "Join WebX",
      },

      item2: {
        h3: "Core Features of Crypto Trading",
        txt: "Energy value supports both deposit and card-making. Upload energy to earn WebX tokens, turning spending into digital assets; turn energy into gift cards for circulation, payments or gifting—no expiry, ever-expanding use cases.",
        btn: "Search Crypto",
      },

      item3: {
        h3: "Diversify Your Portfolio",
        txt: "Access Web3 quant, crypto, stocks, ETFs; curated institutional gateways for low-risk, high-return choices.",
      },
    },
    Team: {
      David: { desc: "Blockchain Engineer" },
      William: { desc: "Consensus Algorithm Engineer" },
      Olivia: { desc: "Smart-Contract Auditor" },
      James: { desc: "Smart-Contract Engineer" },
      Daniel: { desc: "Web3 Backend Engineer" },
      Mia: { desc: "Web3 Visual Designer" },
      Emma: { desc: "Web3 Frontend Engineer" },
      Michael: { desc: "Web3 Product Manager" },
    },
    hello: {
      paragraph: "Network request",
    },
    assets: {
      title: "Diversify your portfolio",
      sub: "Cover Web3 quant, crypto, stocks, ETFs; curated institutional access for low risk and high returns",
    },
    copyTrader: {
      title: "Copy top investors",
      sub: "With WebX CopyTrader™, automatically mirror other investors' actions.",
      cta: "Start Copying",
      return12m: "RETURN (12M)",
    },
    education: {
      title: "Investing courses, blogs and webinars",
      cta: "Start learning now",
      items: {
        portfolio: "Build your portfolio",
        stockBreakdown: "Stock breakdown",
        stockStrategy: "Stock investing strategies",
        technicalAnalysis: "Technical analysis",
        cryptoIntro: "Intro to crypto assets",
      },
    },
    overview: {
      title: "Project overview",
      token: {
        title: "1. Token info",
        symbol: "Symbol: WEBX",
        cn: "Chinese name: 全球鏈商",
        en: "English name: WebX Global Chain Commerce",
        supply: "Supply: 2.1 billion (2,100,000,000)",
      },
      project: {
        title: "Basic info",
        compliance:
          "Compliance & transparency: strictly meet local regulations.",
        tech: "Tech foundation: secure and scalable on-chain architecture.",
        ecosystem:
          "Ecosystem: continue expanding commerce scenarios and cooperation.",
      },
      exchanges: {
        title: "Exchanges",
        cex: "Planned CEX",
      },
      wallets: {
        title: "Wallets",
        plan: "Planned support",
        adapted: "Adapted (testing)",
        note: "Lists will update as adaptation progresses; subject to platform announcements.",
      },
      whitepaper: {
        title: "Whitepaper",
        desc: "Whitepaper is under review; a preview link will be provided. Official release will be downloadable.",
        cta: "Coming soon",
      },
    },
    interest: {
      title: "APY up to 10%*",
      sub: "Adopts a tiered + locking mechanism; all promoters act as nodes.",
      join: "Join WebX",
      more: "Learn more",
    },
    promo: {
      title: "Gateway to cryptocurrencies",
      desc: "Get popular crypto assets and start your investment journey.",
      more: "Learn more",
      title2: "WebX Partner",
      desc2: "Your funds are stored in top-tier institutions",
    },
    global: {
      title: "Trusted Worldwide",
      title2:
        "Learn why millions of investors from over 100 countries are joining WebX",

      social: {
        h3: "Social",
        p: "Over 5 billion internet users and an online consumer market exceeding USD 8 trillion.",
      },

      reliable: {
        h3: "Reliable",
        p: "Core team averages 10+ years of collaborative R&D in Web3, AI algorithms and security architecture.",
      },

      guarantee: {
        h3: "Assurance",
        p: "Security & compliance experts ensure data safety, privacy and regulatory adherence (GDPR, ISO27001, SOC2).",
      },

      worldwide: {
        h3: "Global",
        p: "5,000+ certified channel partners worldwide covering sales, implementation and operations.",
      },
    },
    sponsors: {
      title: "Sponsors working with the currency",
    },
    crypto: {
      title: "Core features of crypto trading",
      desc: "Energy value supports both deposit and card-making features. Users can upload energy value to directly obtain WebX token earnings, converting spending value into digital assets; the card-making feature lets users turn energy value into gift cards that can circulate, be spent, or gifted within the ecosystem, enhancing flexibility and utility and enriching payment scenarios. Energy value has no expiry, can accumulate long-term, and as the ecosystem grows, application scenarios will continue to expand.",
      search: "Search cryptocurrencies",
    },
    download: {
      title: "Download our app from the stores",
      apple: "Apple App Store",
      android: "Android App",
    },
    docs: {
      title: "Project documents & summary",
      intro:
        "WebX follows the concept 'Connect the world, co-create the future', shaping the chain-commerce ecosystem. It proposes the 'Five-position financial coupling model' and the 'Triangle integration closed-loop', providing integrated solutions from assets, systems, and capital linkage.",
      items: {
        n1: "Project Summary",
        n2: "Background and industry pain points",
        n3: "WebX vision and mission",
        n4: "Five-position model & triangle closed loop",
        n5: "Core modules in the ecosystem",
        n6: "Common-stock linkage fund structure",
        n7: "Technical architecture and security",
        n8: "Global roadmap and landing",
        n9: "Core team and partners",
        n10: "Risk reminders and disclaimer",
        n11: "Contact methods",
      },
      content: {
        background: {
          p1: {
            title: "2.1 Blockchain evolution",
            body: "From exploration to industry landing, blockchain has gone through 1.0, 2.0 to 3.0, with value storage and transaction methods upgraded; applications enter the 'industry linking and empowerment' stage.",
          },
          p2: {
            title: "2.2 Structural pain points",
            body: "Traditional commerce faces high costs, low efficiency and interest barriers; tension among platforms, merchants and consumers leads to low value circulation and blocks digital upgrade.",
          },
        },
        mission: {
          v: {
            title: "3.1 Vision",
            body: "Build a global collaborative, sustainable chain-commerce closed loop; serve users and merchants worldwide; enable borderless allocation of global resources.",
          },
          m: {
            title: "3.2 Mission",
            body: "Unblock the full value path of assets, lower participation threshold, enable inclusive sharing and trusted transactions.",
          },
          core: {
            title: "3.3 Core principles",
            industry:
              "Industry integration: ecosystem-based for long-term health",
            global:
              "Global linkage: distributed layout and multilingual coverage",
            equity:
              "Common-stock linkage: balance short-term returns and long-term value",
            lowbarrier:
              "Low barrier: optimize circulation and participation for SMEs and users",
          },
        },
        model: {
          m: {
            title: "4.1 Unified digital model",
            body: "Integrate platform, ecosystem, settlement, asset trading and capital linkage to improve convenience and value release.",
          },
          loop: {
            title: "4.2 Triangle closed loop",
            eco: "Ecosystem: consumption + entertainment + innovation for steady cashflow and user value",
            system:
              "Digital system: Dapp main system and governance supporting cross-domain trading and value-add",
            capital:
              "Capital linkage: Exchanges/DEX with HK capital market to form 'create-enable-recreate' loop",
          },
        },
        modules: {
          s: {
            title: "5.1 Ecosystem support",
            core: "Core: e-commerce, entertainment and innovation covering scenarios",
            incubation:
              "Incubation: demo stores and zones replication; localized ops",
            ops: "Ops: supply chain integration, warehousing & logistics, store mgmt and service standards",
          },
        },
        energy: {
          title: "5.2.2 Energy value incentive",
          intro:
            "Connect consumption–accumulation–appreciation to form the value bond.",
          acquire: {
            title: "Acquisition",
            buy: "Buy/consume to earn energy value and rewards",
            ref: "Invite/promote to accumulate energy value",
            task: "Tasks and activities to gain energy value",
          },
          core: {
            title: "Core functions",
            wallet:
              "Wallet mapping & settlement; convert energy value to rights",
            redeem:
              "Multi-scene redemption: points, gift cards, spending offsets",
            fair: "Fair and transparent rules with risk control",
          },
        },
        dapp: {
          title: "5.3 WebX Chain Commerce Dapp",
          base: {
            title: "5.3.1 Basic info",
            ticker: "Token: WEBX (WX)",
            supply: "Supply: 2.1B, non-inflationary",
            issue: "Issued by Dubai entity; compliant, segregated operations",
            flow: "Trading: listed on PancakeSwap; supports BNB/USDT; 5% redemption to energy safeguard",
          },
        },
        commonStock: {
          title: "6. Common-stock linkage fund structure",
          core: "WX links digital assets and real equity for two-way value",
          layout: "HK compliance window; plan 10+1 exchanges",
          advantages1: "Low participation threshold: enjoy equity dividends",
          advantages2:
            "High liquidity: token/equity circulate in compliant channels",
          advantages3: "Transparent dividends with contract constraints",
          compliance: "Entity segregation and regional compliant operations",
          stages: "Phased landing: incubation, growth and maturity",
        },
        tech: {
          title: "7. Technology & security",
          infra: "BSC high-performance network and high-throughput processing",
          contracts: "Smart contracts ensure transparency and immutability",
          compat: "Cross-compatibility towards Ethereum/Polygon etc.",
        },
        strategy: {
          core: "8.1 Core strategy: HK-centered, radiate Asia, connect globally",
          coreBody:
            "Build three-tier pattern: compliance base – regional linkage – global expansion; short-term HK incubation, mid-term SEA/JP/KR/GBA, long-term Middle East/Europe/US.",
          path: {
            title: "8.2 Phased roadmap",
            p1: "Infrastructure (1–2y): HK licenses, RWA policy support, local incubation base",
            p2: "APAC expansion (2–3y): regional hubs; asset tokenization & trading; cross-region liquidity; community co-build",
            p3: "Global ecosystem (3–5y): complete full-chain; grants & accelerator; standards and interconnection",
          },
        },
        team: {
          title: "9.1 Core team",
          rnd: "R&D: avg 10+ years; Web3, AI algorithms, security architecture",
          ops: "Product & ops: global landing; cross-region needs and solutions",
          sec: "Security & compliance: GDPR, ISO27001, SOC2",
        },
        partners: {
          title: "9.2 Partners",
          tech: "Tech partners: cloud providers for elastic resources and compliance",
          industry:
            "Industry partners: finance, healthcare, manufacturing leaders",
          channel: "Channel partners: 5000+ certified; sales, delivery, O&M",
        },
        risks: {
          title: "10.1 Risk reminders",
          tech: "Technology: instability/compatibility may affect experience",
          compliance:
            "Compliance: data privacy/legal differences across regions",
          market: "Market: competition, substitution and demand shifts",
          ops: "Operations: misconfigurations or misuse may cause security risks",
        },
        disclaimer: {
          title: "10.2 Disclaimer",
          d1: "This whitepaper provides product info only; not an offer",
          d2: "We are not liable for losses from uncontrollable factors",
          d3: "Third-party info is for display and not endorsements",
          d4: "We reserve the right to modify; updates via official channels",
        },
        contact: {
          site: "Official website (token):",
          phone: "Phone: +852 95338999",
          telegram: "Telegram: +852 95338999",
          email: "Email: Max95338999@gmail.com",
        },
      },
    },
  },
  zh: {
    nav: {
      項目簡介: "項目簡介",
      項目優勢: "項目優勢",
      生態系統: "生態系統",
      團隊背景: "團隊背景",
      聯係我們: "聯係我們",
    },
    hero: {
      title: "全球鏈商的未來",
      title2: "從這裡啟程",
      sub: "我們以開放、透明與合規為原則，推出 WEBX 數位資產，助力全球鏈商生態的建設與發展。",
      join: "加入 WebX",
      ctaPrimary: "查看代幣資訊",
      ctaSecondary: "聯繫項目方",
      stats: {
        rating: "WEBX 代币",
        investors: "1200M+ 发行量",
        projects: "100+ 国际奖项",
      },
    },
    trust: {
      title: "全球信賴",
      sub: "了解為什麼來自 100 多個國家的數百萬投資者加入 WebX",
      cards: {
        social: {
          title: "社會的",
          desc: "目前全球互聯網用戶規模已突破50億，線上消費市場規模超過8萬億美元",
        },
        reliable: {
          title: "可靠",
          desc: "核心成員平均有10+年協作技術研發經，聚焦Web3、AI協作算法、安全架構設計等關鍵領域",
        },
        guarantee: {
          title: "擔保",
          desc: "由資安專家與合規顧問組成，涵蓋資料安全、隱私保護與行業合規，遵循GDPR、ISO27001、SOC2等標準",
        },
        global: {
          title: "全球",
          desc: "在全球範圍內擁有5000+認證渠道夥伴，構建覆蓋銷售、實施、運維的全鏈路服務網絡",
        },
      },
    },
    partners: {
      title: "你的資金存放在頂級機構",
      sub: "WebX 集團與全球知名的夥伴合作",
    },
    footer: {
      tag: "多樣世界，一起賺錢。",
      columns: {
        about: "了解我們",
        contact: "與我們聯絡",
        money: "一起賺錢",
        legal: "法律",
      },
      about: {
        about_us: "關於我們",
        careers: "職涯機會",
        press: "新聞稿",
      },
      contact: {
        facebook: "臉書",
        twitter: "推特",
        instagram: "IG",
        email: "郵件",
      },
      money: {
        affiliates: "成為 WebX 推廣者",
        vendors: "供應商與 WebX洽談",
        protect_brand: "保護正門進的品牌",
      },
      legal: {
        privacy: "隱私條款",
        terms: "使用條款",
      },
      Copyright: "© BingoX 投资有限公司。保留所有权利。",
    },
    Project: {
      title: "項目概況",

      Box1: {
        h1_1: "連結世界 WebX 大消費生態",
        h3_1: "鏈商",
        h3_1_s: "（香港、越南、印尼、馬來西亞、迪拜、北美…）、",
        h3_1_s_2: "鏈遊、文娛、跨境",
        h3_1_3: "（中國、越南、馬來西亞…）、",
        h3_1_s_3: "支付…",
        h3_2: "消費",
        h3_2_s: "獲得",
        h3_2_s_2: " WebX ",
        h3_2_s_3: "能量貢獻，協助",
        h3_2_s_4: " W2 ",
        h3_2_s_5: "傳統流量與資金進入",
        h3_2_s_6: " W3 ",
        h3_2_s_7: "領域",
        h3_3: "WebX",
        h3_3_1: "主幣作為生態主幣，助力供應鏈商家、全球消費用戶、",
        h3_4: "遊戲廠商、遊戲玩家等共創共享、共贏",
        h1_2: "代幣資訊",
        li1: "幣符：",
        li2: "中文全稱：",
        li3: "英文全稱：",
        li4: "代幣發行量：",
        symbol: "WebX",
        cnFull: "全球鏈商",
        enFull: "WebX Global Chain Commerce",
        supply: "12億 (1,200,000,000)",
      },

      Box2: {
        title_left: "交易所收錄",
        planned: "計劃對接",
        dex: "DEX",
        title_right: "錢包收錄",
        plannedWallet: "計劃支持",
        adapted: "已適配（測試）",
      },

      Box3: {
        title_left: "項目基本情況",
        tag1: "合規與透明",
        desc1: "嚴格遵循所在法域的合規要求",
        tag2: "技術基礎",
        desc2: "以安全、可擴展的鏈上架構為核心",
        tag3: "生態走向",
        desc3: "圍繞鏈商應用場景，逐步拓展合作",
        title_right: "白皮書下載",
        coming:
          "白皮書正在整理與審閱，暫提供白皮書連結，正式版本發布後可直接下載",
        btn: "即將推出",
      },

      Box4: {
        token: "代幣",
        supply: "發行量",
      },
    },
    News: {
      title: "新聞資訊",

      banner: {
        h2: "通往加密貨幣的門戶",
        txt: "通往加密貨幣的門戶",
        btn: "了解更多資訊",
      },

      item1: {
        h3: "年利率最高可達 10%",
        txt: "採用「等級升 + 鎖倉釋放」機制，所有推廣者均為節點。",
        btn: "加入 WebX",
      },

      item2: {
        h3: "加密貨幣交易的核心功能",
        txt: "能量值具備「儲值」與「制卡」兩大功能。儲值功能允許用戶上傳能量值直接獲取 WebX 代幣收益，實現消費價值向數位資產的轉化；制卡功能支援用戶將能量值製作成禮品卡，禮品卡可在生態內流通、消費或轉贈他人，能量值不設有效期，可長期累積，應用場景持續拓展。",
        btn: "搜尋加密貨幣",
      },

      item3: {
        h3: "多元化你的投資組合",
        txt: "涵蓋 Web3 量化、加密、股票、ETF 等產品，優選機構對接，提供低風險高回報的理財選擇。",
      },
    },
    Team: {
      David: { desc: "區塊鏈工程師" },
      William: { desc: "共識算法工程師" },
      Olivia: { desc: "智能合約審計師" },
      James: { desc: "智能合約工程師" },
      Daniel: { desc: "Web3 後端工程師" },
      Mia: { desc: "Web3 視覺設計師" },
      Emma: { desc: "Web3 前端工程師" },
      Michael: { desc: "Web3 產品經理" },
    },
    hello: {
      paragraph: "網絡請求",
    },
    assets: {
      title: "多元化你的投資組合",
      sub: "涵益 Web3 量化、加密、股票、ETF 等產品，優選機構對接，提供低風險高回報的理財選擇",
    },
    copyTrader: {
      title: "複製頂尖投資者",
      sub: "借助 WebX 的 CopyTrader™，自動複製其他投資者的操作。",
      cta: "開始複製",
      return12m: "12 個月回報",
    },
    promo: {
      title: "通往加密貨幣的門戶",
      desc: "獲取熱門加密資產，開啟投資未來之路。",
      more: "了解更多資訊",
      title2: "WebX合作夥伴",
      desc2: "你的資金存放在頂級機構",
    },
    global: {
      title: "全球信賴的",
      title2: "了解為什麼來自 100 多個國家的數百萬投資者加入 WebX",

      social: {
        h3: "社會的",
        p: "目前全球互聯網用戶規模已突破 50 億，線上消費市場規模超過 8 兆美元。",
      },

      reliable: {
        h3: "可靠的",
        p: "核心成員平均有 10+ 年協作技術研發經驗，聚焦 Web3、AI 協作算法、安全架構設計等關鍵領域。",
      },

      guarantee: {
        h3: "擔保的",
        p: "由資安專家與合規顧問組成，涵蓋資料安全、隱私保護與行業合規，遵循 GDPR、ISO27001、SOC2 等標準。",
      },

      worldwide: {
        h3: "全球的",
        p: "在全球範圍內擁有 5,000+ 認證渠道夥伴，構建覆蓋銷售、實施、運維的全鏈路服務網絡。",
      },
    },
    sponsors: {
      title: "與貨幣合作的贊助商",
    },
    crypto: {
      title: "加密貨幣交易的核心功能",
      desc: "能量值具備“”與“制卡”兩大功能。功能允許用戶上傳能量值進行，直接獲取WebX代收益，實現消費價值向數字資產的轉化；制卡功能支持用戶直接將能量值製作成禮品卡，禮品卡可在生熊內流通、消費或轉贈他人，提升能量值的靈活性與實用性，豐富商生熊的支付場景；能量值不設有效期，可長期累，且隨著生熊發展，能量值的應用場景將持續拓展。",
      search: "搜尋加密貨幣",
    },
    docs: {
      title: "項目文件與摘要",
      intro:
        "WebX 以『鏈接世界，共創未來』為核心理念，圍繞鏈商生態，提出『五位耦金融耦位大模型』與『三角融合閉環生態圈』，從資產、系統、資本聯動三方面提供整體解決方案。",
      items: {
        n1: "項目摘要",
        n2: "時代背景與行業痛點",
        n3: "WebX 核心願景與使命",
        n4: "五位耦金融模型與三角融合閉環",
        n5: "生態核心模塊詳解",
        n6: "常股聯動基金體系結構",
        n7: "技術架構與安全保障",
        n8: "全球發展規劃與落地路徑",
        n9: "核心團隊與合作夥伴",
        n10: "風險提示與免責聲明",
        n11: "聯繫方式",
      },
      content: {
        background: {
          p1: {
            title: "2.1 區塊鏈發展演進",
            body: "從技術探索到產業落地，區塊鏈經歷 1.0、2.0 到 3.0 階段，價值儲存與交易方式不斷升級，產業應用進入『產業鏈接與賦能』階段。",
          },
          p2: {
            title: "2.2 傳統商業與平台的結構性痛點",
            body: "傳統商業生態存在高成本、低效率與利益壁壘，平台與商家、消費者之間關係緊張，價值流通效率低，難以支撐產業數位化升級。",
          },
        },
        mission: {
          v: {
            title: "3.1 願景",
            body: "打造全球協同、可持續裂變的鏈商生態閉環，服務全球用戶與商家，實現『全球資源去疆界化配置』。",
          },
          m: {
            title: "3.2 使命",
            body: "打通資產完整價值路徑，降低參與門檻，促進產業與用戶的普惠共享與可信交易。",
          },
          core: {
            title: "3.3 核心理念",
            industry: "產業融合：以產業生態為根基，保障長期健康發展。",
            global: "全球聯動：分布式布局，跨域協同與多語種覆蓋。",
            equity: "常股聯動：兼顧短期收益與長期價值，提升安全性與活性。",
            lowbarrier:
              "低門檻參與：優化產品流通與參與機制，連通中小商家與用戶。",
          },
        },
        model: {
          m: {
            title: "4.1 五位壹體數位大模型",
            body: "圍繞『鏈商平台、寰讚生態、支付結算、資產交易、資本聯動』等維度構建一體化模型，提升交易便利與價值釋放。",
          },
          loop: {
            title: "4.2 三角融合閉環生態",
            eco: "寰讚生態：消費+娛樂+創新業態，形成穩健現金流與用戶價值。",
            system:
              "數位系統：Dapp 主系統與鏈商治理體系，支持跨域交易與增值功能。",
            capital:
              "資本聯動：交易所/DEX 與香港資本市場對接，形成『價值創造-資本賦能-價值再創造』循環。",
          },
        },
        modules: {
          s: {
            title: "5.1 寰讚生態支撐體系",
            core: "核心業態：快電電商、游娛娛樂、創新業態三大板塊覆蓋多元場景。",
            incubation: "孵化模式：示範店與示範商圈複製，授權賦能在地化營運。",
            ops: "營運要點：供需鏈路整合、倉儲物流能力、門店管理與服務標準。",
          },
        },
        energy: {
          title: "5.2.2 能量值激勵機制",
          intro: "打通『消費-累積-增值』的價值路徑，形成鏈商價值紐帶。",
          acquire: {
            title: "獲取途徑",
            buy: "購買/消費獲得能量值與獎勵。",
            ref: "邀請/推廣累計能量值。",
            task: "完成任務、參與活動獲取能量值。",
          },
          core: {
            title: "核心功能",
            wallet: "錢包映射與結算；支持用戶直接將能量值轉化權益。",
            redeem: "多場景兌換：積分、禮品卡、消費抵扣等。",
            fair: "公平透明規則與風控約束，保障長期激勵。",
          },
        },
        dapp: {
          title: "5.3 WebX 鏈商 Dapp 主系統",
          base: {
            title: "5.3.1 基礎信息",
            ticker: "代幣：WEBX（WX）",
            supply: "總量：12 億，恆定不增發",
            issue: "發行：迪拜主體獨立發行，合規隔離運營",
            flow: "交易：PancakeSwap 上線，支持 BNB/USDT；兌換收取 5% 用於生態能量護航",
          },
        },
        commonStock: {
          title: "6. 常股聯動金融結構",
          core: "以 WX 連結數位資產與實體股票權益，形成『雙向價值』支持與分紅。",
          layout: "香港合規開放窗口，推進 10+1 交易所布局。",
          advantages1: "參與門檻低：以持享受產業股權紅利。",
          advantages2: "資產流動性強：代幣與股權可在合規渠道流通。",
          advantages3: "分紅公開透明：合約規則約束，保護持有者長期權益。",
          compliance: "合規風控：主體隔離與在地動運營。",
          stages: "分段落地：孵化期、成長期、成熟期。",
        },
        tech: {
          title: "7. 技術架構與安全保障",
          infra: "底層基礎設施：基於 BSC 的高性能鏈上網路與高併發交易處理。",
          contracts: "智慧合約：核心業務透明上鏈，確保合規與不可篡改。",
          compat: "跨鏈兼容：面向以太坊、Polygon 等互通。",
        },
        strategy: {
          core: "8.1 核心戰略布局：立足香港、輻射亞洲、連接全球",
          coreBody:
            "以香港國際金融中心及數位資產合規高地為核心支點，構建『合規底座—區域聯動—全球擴張』三級格局，短期聚焦香港在地孵化，中期布局東南亞、日韓與粵港澳大灣區，長期覆蓋中東與歐美。",
          path: {
            title: "8.2 分段落地路徑",
            p1: "基建設期（1–2年）：取得香港監管與牌照，建置在地孵化基地與穩健營運基礎。",
            p2: "亞太擴張期（2–3年）：在新加坡、吉隆坡設立區域中心，拓展資產代幣化與交易。",
            p3: "全球生態期（3–5年）：完善全鏈路生態，推出 Grant 與加速器計畫，推動標準與互聯互通。",
          },
        },
        team: {
          title: "9.1 核心團隊",
          rnd: "技術研發團隊：平均 10+ 年研發經驗，聚焦 Web3、AI 演算法與安全架構。",
          ops: "產品運營團隊：具備全球化落地經驗，主導跨區域需求挖掘與方案設計。",
          sec: "安全與合規團隊：遵循 GDPR、ISO27001、SOC2 等標準。",
        },
        partners: {
          title: "9.2 合作夥伴生態",
          tech: "技術合作：與主流雲服務商深度合作。",
          industry: "行業合作：與金融、醫療、製造等頭部企業共創。",
          channel:
            "渠道合作：全球 5000+ 認證渠道，構建銷售、交付、運維全鏈路。",
        },
        risks: {
          title: "10.1 風險提示",
          tech: "技術風險：網路不穩定或相容性問題可能影響體驗。",
          compliance: "合規風險：各地資料安全與隱私法律差異。",
          market: "市場風險：競爭激烈、替代與需求變化。",
          ops: "操作風險：不當配置或誤操作可能帶來資料安全風險。",
        },
        disclaimer: {
          title: "10.2 免責聲明",
          d1: "白皮書僅為產品資訊介紹，不構成法律要約。",
          d2: "因不可控因素造成的損失不承擔直接或間接責任。",
          d3: "第三方資訊為展示用途，不代表背書。",
          d4: "保留對白皮書內容的修改權，更新將透過官方渠道發布。",
        },
        contact: {
          site: "官方網站（token）：",
          phone: "電話：+852 95338999",
          telegram: "Telegram：+852 95338999",
          email: "郵箱：Max95338999@gmail.com",
        },
      },
    },
  },
};

const stored =
  typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;
const locale = ref(stored || "zh");

function t(key) {
  const parts = key.split(".");
  let obj = messages[locale.value];
  for (const p of parts) obj = obj && obj[p];
  return obj ?? key;
}

function setLocale(l) {
  locale.value = l;
  if (typeof localStorage !== "undefined") localStorage.setItem("locale", l);
}

export function installI18n(app) {
  app.config.globalProperties.$t = t;
  app.provide("i18n", { locale, t, setLocale });
}

export function useI18n() {
  const i = inject("i18n", null);
  return i ?? { locale, t, setLocale };
}
