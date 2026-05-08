/* --- 變數設定：質感深色系 --- */
:root {
    --header-bg: #0f0f0f;      /* 頂部：曜石黑 */
    --main-bg: #1a1a1a;        /* 中間：炭灰黑 */
    --footer-bg: #121212;      /* 底部：深礦石色 */
    --text-main: #d1d1d1;      /* 主文字：柔和灰 */
    --text-muted: #888888;     /* 次要文字：深灰 */
    --accent: #b8926a;         /* 點綴色：古銅金 */
    --card-border: #ffffff;    /* 畫框 */
    --shadow: 0 10px 40px rgba(0,0,0,0.5);
}

body, html {
    margin: 0; padding: 0;
    background-color: var(--main-bg);
    color: var(--text-main);
    font-family: "PingFang TC", "Heiti TC", "Microsoft JhengHei", sans-serif;
    height: 100%;
    display: flex;
    flex-direction: column;
}

/* --- 導覽列 --- */
header {
    background-color: var(--header-bg);
    padding: 25px 0;
    text-align: center;
    border-bottom: 1px solid #222;
}

nav a {
    margin: 0 25px;
    text-decoration: none;
    color: var(--text-main);
    font-size: 1.1rem;
    letter-spacing: 2px;
    transition: 0.3s;
    font-weight: 300;
    cursor: pointer;
}

nav a:hover { color: var(--accent); }

/* --- 作品滑動區 --- */
main {
    flex: 1;
    display: flex;
    align-items: center;    /* 垂直置中 */
    justify-content: center; /* 水平置中 */
    background-color: var(--main-bg);
    width: 100%;
    overflow: hidden;       /* 防止滑動時出現橫向捲軸 */
}

.swiper {
    width: 100%;
    padding: 50px 0;
    /* 確保滑動組件本身也是置中的 */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible !important;
}

.swiper-slide {
    /* 使用 vw (視窗寬度單位)，設定為寬度的 70% */
    width: 70vw; 
    /* 如果在電腦大螢幕，限制最大寬度以免太巨大 */
    max-width: 800px; 
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* 保持之前的縮放與透明度邏輯 */
    transform: scale(0.7); 
    opacity: 0.4;
    filter: blur(2px);
    transition: transform 0.6s ease, opacity 0.6s ease, filter 0.6s ease;
}

/* 當這張投影片滑到正中間時 (.active) */
.swiper-slide-active {
    transform: scale(1);
    opacity: 1;
    filter: blur(0px);
    z-index: 10;
}

.artwork-img {
    width: 100%; /* 填滿 slide 的 70vw */
    height: auto;
    border: 12px solid var(--card-border); /* 加粗畫框更有質感 */
    box-shadow: var(--shadow);
}


.artwork-container {
    /* 這裡維持原本的寬度設定 */
    width: 100%; /* 讓容器填滿 slide 的寬度 */
    /* ... */
    display: block;
    margin: 0 auto;          /* 確保左右外邊距自動平衡 */
}

@media (min-width: 768px) {
    .artwork-container { width: 420px; },
    .swiper-slide {
        width: 350px; /* 電腦版稍微寬一點 */
    }
}



/* 當外層是 .active 時，內層圖片的陰影變深 */
.swiper-slide-active .artwork-img {
    box-shadow: 0 20px 60px rgba(0,0,0,0.8); /* 放大時陰影更深、更廣，增加立體感 */
}

/* --- 詳情面板 (Modal) --- */
.modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(10, 10, 10, 0.98); 
    display: none; 
    z-index: 1000;
    justify-content: center;
    align-items: flex-start; /* 改成從頂部開始排，方便滾動 */
    padding: 40px 20px;     /* 給予上下留白 */
    overflow-y: auto;       /* 【關鍵】如果內容太長，允許上下捲動 */
    -webkit-overflow-scrolling: touch; /* 讓手機捲動感更順滑 */
}

.modal-content {
    display: flex;
    flex-direction: column; /* 手機預設：直向排列 */
    max-width: 1000px;
    width: 100%;
    gap: 30px;
    margin: auto; /* 置中 */
}

@media (min-width: 768px) {
    .modal-content {
        flex-direction: row; /* 恢復左右兩欄 */
        align-items: center;
        min-height: 80vh;   /* 確保內容有足夠高度，不擠在一起 */
    }

    .modal-left {
        flex: 1.2;
        padding-right: 20px;
    }

.modal-right {
    padding: 40px;
    text-align: left;
    /* 確保長文字會自動換行 */
    word-wrap: break-word; 
    overflow-wrap: break-word;
}

/* --- 針對手機版的特殊限制 --- */
@media (max-width: 767px) {
    .modal-left img {
        /* 【關鍵】讓圖片寬度固定在手機螢幕的 70% */
        max-width: 70vw; 
        
        /* 同時限制高度，避免長方形圖片太長，導致文字被推太下面 */
        max-height: 50vh; 
        
        /* 增加下方的間距，與文字區分開來 */
        margin-bottom: 20px;
    }
   .modal-content {
        display: flex;
        flex-direction: column;
        align-items: center; /* 讓圖片與文字在手機上都居中對齊 */
        gap: 10px;
    }

    .modal-right {
        width: 90%; /* 讓文字稍微縮進，不要貼到螢幕邊緣 */
        text-align: center; /* 手機上文字居中通常更美觀 */
    }
}

.modal-left img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: auto;
    
    /* 預設(電腦/平板) 圖片最大不超過螢幕高度的 75% */
    max-width: 100%;
    max-height: 75vh;
    
    border: 5px solid #fff;
    box-shadow: var(--shadow);
}

.modal-right h2 { color: #fff; font-size: 2.2rem; margin-top: 0; }
.info-row { margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 8px; }
.info-label { font-size: 0.85rem; color: var(--accent); font-weight: bold; display: block; margin-bottom: 5px;}
#modal-concept { line-height: 1.8; font-size: 1rem; }

.close-btn {
    position: absolute;
    /* 調整位置，讓它離右邊與上方有一點距離 */
    top: 20px; 
    right: 8vw; 
    
    /* 放大按鈕，讓長輩好點擊 */
    font-size: 3rem; 
    width: 60px;
    height: 60px;
    

    color: #fff;
    cursor: pointer;
    z-index: 1001; /* 確保在最上層 */
    transition: background 0.3s;
}

.close-btn:hover {
    background: rgba(255, 255, 255, 0.2);
}

/* --- 自我介紹專屬樣式 --- */

.about-content {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    width: 100%;
    gap: 40px;
    margin: auto;
    padding: 20px;
}

/* 畫家照片樣式 */
.profile-img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%; /* 圓形照片更有親和力 */
    border: 3px solid var(--accent);
    box-shadow: var(--shadow);
    display: block;
    margin: 0 auto;
}

.about-name {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 20px;
}

.about-name span {
    color: var(--accent);
    font-weight: 300;
}

.about-journey {
    line-height: 2;
    font-size: 1.1rem;
    color: var(--text-main);
    margin-bottom: 30px;
    text-align: justify;
}

/* 手稿區域 */
.sketch-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-top: 15px;
}

.sketch-grid img {
    width: 100%;
    /* 1. 將高度改為 auto，讓它根據圖片比例自動計算 */
    height: auto; 
    
    /* 2. 設定一個最大高度，避免直向的手稿變得太巨大 */
    max-height: 200px; 
    
    /* 3. 【關鍵修正】改成 contain，確保圖片完整顯示，不被裁切 */
    object-fit: contain; 
    
    /* 4. 將預設背景設為透明或極深色，讓 contain 產生的空隙看起來自然 */
    background-color: rgba(0,0,0,0.2); 
    
    border-radius: 4px;
    opacity: 0.7;
    transition: opacity 0.3s, transform 0.3s; /* 順便加上微微放大的動態效果 */
}

.sketch-grid img:hover {
    opacity: 1;
    transform: scale(1.05); /* 稍微放大，增加互動感 */
}

/* --- 平板與電腦版優化 --- */
@media (min-width: 768px) {
    .about-content {
        flex-direction: row;     /* 左右分欄 */
        align-items: center;     /* 垂直置中 */
        justify-content: center;
        max-width: 1100px;       /* 網頁版適當放寬 */
        gap: 80px;               /* 左右間距加大，增加大氣感 */
        padding: 40px;

/* 2. 左側：畫家照片強化 */
    .about-left {
        flex: 0.45;              /* 照片佔比約 45% */
        display: flex;
        justify-content: flex-end;
    }


/* 3. 右側：文字介紹與手稿 */
    .about-right {
        flex: 0.55;
        padding-right: 60px;     /* 避免太貼螢幕右側 */
        text-align: left;
    }

    .about-name {
        font-size: 3.2rem;       /* 網頁版標題更有氣勢 */
        margin-bottom: 25px;
        letter-spacing: 4px;
    }

    .about-journey {
        font-size: 1.15rem;      /* 字體稍大，更適合閱讀 */
        line-height: 2.2;        /* 極高的行間距，減輕閱讀壓力 */
        color: #b0b0b0;          /* 稍微降低文字亮度，保護眼睛 */
        max-width: 500px;        /* 限制每行長度，閱讀更輕鬆 */
    }

/* 針對超大螢幕 (1440px+) 的微調 */
@media (min-width: 1440px) {
    .about-content {
        max-width: 1280px;
    }
}

/* 自定義淡入動畫 */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-overlay[style*="display: flex"] .about-content {
    animation: fadeIn 0.6s ease-out forwards;
}

    /* 4. 手稿網格強化 */
    .sketch-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 網頁版改為三欄，展示更多細節 */
        gap: 20px;
        margin-top: 30px;
    }

    .sketch-grid img {
        height: 120px;           /* 統一手稿高度 */
        background-color: rgba(255, 255, 255, 0.03); /* 極淡的底色 */
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 5px;            /* 像裝裱一樣的小邊框 */
    }

    .profile-img {
        width: 380px;            /* 網頁版照片放大 */
        height: 520px;           /* 保持優雅的長方形比例 */
        border-radius: 8px;      /* 微微圓角，較具現代工藝感 */
        border: 1px solid rgba(184, 146, 106, 0.4); /* 古銅金細邊框 */
        object-fit: cover;
        box-shadow: 20px 20px 60px rgba(0,0,0,0.7); /* 加強投影深度 */
    }
}

/* --- 手機版優化 --- */
@media (max-width: 767px) {
    .about-name {
        text-align: center;
        font-size: 2rem;
    }
    
    .profile-img {
        width: 180px;
        height: 180px;
    }
}

/* --- 分頁器樣式 --- */

/* 1. 調整分頁器底部間距 */
.swiper-pagination {
    bottom: 0px !important; /* 把它放在 main 區域的最底端 */
}

/* 2. 未選中的圓點樣式 */
.swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.3) !important; /* 半透明白色 */
    width: 10px;
    height: 10px;
    opacity: 1;
    margin: 0 6px !important;
    transition: all 0.3s ease;
}

/* 3. 選中時的樣式 (古銅金細長條) */
.swiper-pagination-bullet-active {
    background: var(--accent) !important; /* 使用我們的古銅金 */
    width: 30px; /* 寬度變長，像進度條一樣 */
    border-radius: 5px;
}

/* 4. 手機版優化：避免分頁器跟 Footer 靠太近 */
@media (max-width: 767px) {
    .swiper-pagination {
        bottom: 5px !important;
    }
}



/* --- 頁尾 --- */
footer {
    background-color: var(--footer-bg);
    padding: 30px;
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-muted);
    border-top: 1px solid #222;
}
