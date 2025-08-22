// /app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">關於我們 About Us</h1>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          <strong>Family Fun HK</strong> 是一個多語言家庭活動平台，
          專為香港家庭、SEN（特殊教育需要）家庭、基層家庭，以及訪港旅客而設。
        </p>

        <p>
          我們的願景是：<br />
          <em>「讓每一個家庭都能輕鬆找到合適的活動，促進親子互動，支持社區共融。」</em>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">我們的特色 Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>支援繁體中文、簡體中文及英文</li>
          <li>一站式家庭活動日曆，按地區、年齡、價格、時間快速篩選</li>
          <li>特設 SEN & 基層活動專區，提供資助及免費名額資訊</li>
          <li>即時社區互動功能：分享、評論、舉報、聊天</li>
          <li>商戶合作：一鍵發佈活動、即時報名與訂票</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">團隊 Our Team</h2>
        <p>
          Family Fun HK 由 <strong>Fiona Fung</strong>（創辦人）及{" "}
          <strong>Nelson Chan</strong>（CFO）聯合創立，並有專業程式開發團隊支持。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">聯絡我們 Contact</h2>
        <p>
          🌐 官方網站: <a href="https://www.hkfamilyfun.com" className="text-blue-600 underline">www.hkfamilyfun.com</a><br />
          📧 電郵: <a href="mailto:familyfun.hongkong@gmail.com" className="text-blue-600 underline">familyfun.hongkong@gmail.com</a><br />
          📱 WhatsApp: +852 9730 6026
        </p>
      </section>
    </main>
  );
}
