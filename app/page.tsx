import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Building2,
  Store,
  Landmark,
  Warehouse,
  Users,
  Shield,
  Zap,
  ChevronDown,
} from "lucide-react";

// サービスアイコンデータ
const services = [
  { name: "天井仕上工事", icon: "天井" },
  { name: "壁張り工事", icon: "壁" },
  { name: "床仕上工事", icon: "床" },
  { name: "LGS・PB工事", icon: "LGS" },
  { name: "クロス工事", icon: "クロス" },
  { name: "内装間仕切り", icon: "間仕切" },
  { name: "防音工事", icon: "防音" },
  { name: "その他工事", icon: "他" },
];

// 選ばれる理由
const reasons = [
  {
    number: "01",
    title: "顧客ファーストの徹底",
    description:
      "39歳の若き社長が掲げる「顧客ファースト」。お客様の要望を徹底的にヒアリングし、最適な提案から完工まで責任を持って対応します。",
    icon: Users,
  },
  {
    number: "02",
    title: "確かな品質管理体制",
    description:
      "経験豊富な監督が現場を管理。厳選した協力業者との連携で、高品質な仕上がりをお約束します。",
    icon: Shield,
  },
  {
    number: "03",
    title: "スピーディーで柔軟な対応",
    description:
      "小規模から大規模まで、規模に応じた最適なチーム編成で迅速に対応。急な変更にも柔軟にお応えします。",
    icon: Zap,
  },
];

// 施工実績サンプル
const works = [
  { category: "オフィス", title: "オフィスビル改装工事", location: "名古屋市中区", image: "/images/office.png" },
  { category: "店舗", title: "カフェ新装工事", location: "名古屋市中村区", image: "/images/shop.png" },
  { category: "公共施設", title: "コミュニティセンター", location: "名古屋市天白区", image: "/images/public.png" },
  { category: "商業施設", title: "物販店舗内装", location: "名古屋市緑区", image: "/images/commercial.png" },
  { category: "医療施設", title: "クリニック内装", location: "名古屋市昭和区", image: "/images/medical.png" },
  { category: "オフィス", title: "IT企業オフィス", location: "名古屋市千種区", image: "/images/office.png" },
];

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="内装仕上げ工事"
            fill
            className="object-cover"
            priority
          />
          {/* オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20">
          <div className="max-w-4xl mx-auto">
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-[#C9A962] rounded-full animate-pulse" />
              <span>名古屋の内装仕上げ専門会社</span>
            </div>

            {/* メインコピー */}
            <h1
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
              style={{ fontFamily: "var(--font-shippori-mincho)" }}
            >
              空間に、誠意を。
            </h1>

            {/* サブコピー */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow">
              オフィス・店舗・公共施設の
              <br className="sm:hidden" />
              トータルインテリアソリューション
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact?type=estimate"
                className="bg-[#C9A962] hover:bg-[#B89852] text-white font-bold text-base px-6 sm:px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                無料見積もり依頼
              </Link>
              <Link
                href="/services"
                className="bg-white/95 hover:bg-white text-[#1A2A4A] font-bold text-base px-6 sm:px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                サービス詳細
              </Link>
            </div>

            {/* 実績数 */}
            <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-12">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9A962]">20+</p>
                <p className="text-xs sm:text-sm text-white/80">年の実績</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9A962]">500+</p>
                <p className="text-xs sm:text-sm text-white/80">施工件数</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C9A962]">100%</p>
                <p className="text-xs sm:text-sm text-white/80">お客様満足</p>
              </div>
            </div>
          </div>

          {/* スクロールインジケーター */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white/70" size={28} />
          </div>
        </div>
      </section>

      {/* 信頼バッジセクション */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-center">
              <CheckCircle2 className="text-[#C9A962]" size={24} />
              <div>
                <div className="text-xs text-gray-500">建設業許可</div>
                <div className="text-sm font-semibold text-[#1A2A4A]">
                  愛知県知事許可 第102156号
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-center">
              <CheckCircle2 className="text-[#C9A962]" size={24} />
              <div>
                <div className="text-xs text-gray-500">インボイス対応</div>
                <div className="text-sm font-semibold text-[#1A2A4A]">
                  適格請求書発行事業者登録済
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-center">
              <CheckCircle2 className="text-[#C9A962]" size={24} />
              <div>
                <div className="text-xs text-gray-500">保険加入</div>
                <div className="text-sm font-semibold text-[#1A2A4A]">
                  社会保険・労災完備
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要セクション */}
      <section className="section bg-[#F5F5F3]">
        <div className="container mx-auto">
          <div className="section-title">
            <span className="section-title-en">SERVICES</span>
            <h2 className="section-title-jp">対応工事</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#1A2A4A]">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#1A2A4A] font-medium hover:text-[#C9A962] transition-colors"
            >
              すべてのサービスを見る
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="section-title">
            <span className="section-title-en">WHY CHOOSE US</span>
            <h2 className="section-title-jp">選ばれる理由</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.number} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#C9A962] to-[#D9B972] rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className="text-[#C9A962] text-sm font-bold mb-2">
                    {reason.number}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A2A4A] mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1A2A4A] font-medium hover:text-[#C9A962] transition-colors"
            >
              詳しく見る
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 施工実績セクション */}
      <section className="section bg-[#F5F5F3]">
        <div className="container mx-auto">
          <div className="section-title">
            <span className="section-title-en">WORKS</span>
            <h2 className="section-title-jp">施工実績</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-[#1A2A4A]/10 text-[#1A2A4A] text-xs font-medium rounded-full mb-3">
                    {work.category}
                  </span>
                  <h3 className="font-semibold text-[#1A2A4A] mb-1">
                    {work.title}
                  </h3>
                  <p className="text-xs text-gray-500">{work.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[#1A2A4A] font-medium hover:text-[#C9A962] transition-colors"
            >
              すべての施工実績を見る
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 代表メッセージセクション */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="section-title">
            <span className="section-title-en">MESSAGE</span>
            <h2 className="section-title-jp">代表挨拶</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F5F5F3] rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-48 relative rounded-2xl overflow-hidden shrink-0 shadow-lg">
                  <Image
                    src="/images/hero.png"
                    alt="代表取締役 笹木 博光"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-xl md:text-2xl font-bold text-[#1A2A4A] mb-6"
                    style={{ fontFamily: "var(--font-shippori-mincho)" }}
                  >
                    「お客様の空間づくりに、
                    <br />
                    全力で向き合います」
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    私たちは「内装仕上げのプロ」として、お客様の理想の空間を実現するために日々精進しております。オフィス、店舗、公共施設など、あらゆる空間の内装工事を手がけてまいりました。誠実な仕事、確かな品質、そしてスピード。これが私たちの約束です。
                  </p>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">
                      有限会社明王インテリア 代表取締役
                    </p>
                    <p
                      className="text-xl font-bold text-[#1A2A4A]"
                      style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                      笹木 博光
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 協力業者募集セクション */}
      <section className="section bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A]">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
              PARTNER
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-shippori-mincho)" }}
            >
              一緒に最高の仕事をしませんか？
            </h2>
            <p className="text-gray-300 mb-8">
              内装仕上げ職人さんを募集しています。
              <br />
              クロス、床、LGS、ボードなど、経験者の方大歓迎です。
            </p>
            <Link
              href="/partner"
              className="inline-flex items-center gap-2 bg-[#C9A962] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#B89852] transition-colors shadow-lg"
            >
              協力業者募集の詳細
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* お問い合わせCTAセクション */}
      <section className="section bg-gradient-to-r from-[#C9A962] to-[#D9B972]">
        <div className="container mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1A2A4A] mb-4"
            style={{ fontFamily: "var(--font-shippori-mincho)" }}
          >
            まずはお気軽にご相談ください
          </h2>
          <p className="text-[#1A2A4A]/80 mb-6">
            お見積もり・現地調査は無料です
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href="tel:052-680-7707"
              className="flex items-center gap-3 text-[#1A2A4A]"
            >
              <Phone size={28} />
              <span className="text-3xl md:text-4xl font-bold">
                052-680-7707
              </span>
            </a>
            <p className="text-sm text-[#1A2A4A]/70">
              営業時間: 平日 9:00〜18:00
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact?type=estimate"
                className="bg-[#1A2A4A] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#15223C] transition-colors shadow-lg"
              >
                無料見積もり依頼
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#1A2A4A] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                お問い合わせ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
