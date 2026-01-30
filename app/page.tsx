import Link from "next/link";
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
  { category: "オフィス", title: "オフィスビル改装工事", location: "名古屋市中区" },
  { category: "店舗", title: "カフェ新装工事", location: "名古屋市中村区" },
  { category: "公共施設", title: "コミュニティセンター", location: "名古屋市天白区" },
  { category: "商業施設", title: "物販店舗内装", location: "名古屋市緑区" },
  { category: "医療施設", title: "クリニック内装", location: "名古屋市昭和区" },
  { category: "教育施設", title: "学習塾改装", location: "名古屋市千種区" },
];

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
          {/* パターンオーバーレイ */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A962' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* コンテンツ */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* メインコピー */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-shippori-mincho)" }}
            >
              空間に、誠意を。
            </h1>

            {/* サブコピー */}
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              名古屋の内装仕上げ専門会社
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              オフィス・店舗・公共施設の
              <br className="sm:hidden" />
              トータルインテリアソリューション
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=estimate"
                className="btn btn-primary text-base px-8 py-4"
              >
                無料見積もり依頼
              </Link>
              <Link
                href="/services"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-[#1A2A4A] text-base px-8 py-4"
              >
                サービス詳細
              </Link>
            </div>
          </div>

          {/* スクロールインジケーター */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-white/50" size={32} />
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
                <h3 className="text-sm font-medium text-[#1A2A4A]">
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
              サービス詳細を見る
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 選ばれる理由セクション */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="section-title">
            <span className="section-title-en">WHY CHOOSE US</span>
            <h2 className="section-title-jp">選ばれる3つの理由</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.number}
                  className="relative bg-[#F5F5F3] rounded-2xl p-8 overflow-hidden"
                >
                  {/* 番号 */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-[#C9A962]/10">
                    {reason.number}
                  </div>

                  <div className="relative">
                    <div className="w-14 h-14 bg-[#1A2A4A] rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-[#C9A962]" size={28} />
                    </div>

                    <h3 className="text-xl font-bold text-[#1A2A4A] mb-4">
                      {reason.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {works.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                {/* プレースホルダー画像 */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {work.category === "オフィス" && (
                      <Building2 className="text-white/30" size={64} />
                    )}
                    {work.category === "店舗" && (
                      <Store className="text-white/30" size={64} />
                    )}
                    {work.category === "公共施設" && (
                      <Landmark className="text-white/30" size={64} />
                    )}
                    {work.category === "商業施設" && (
                      <Warehouse className="text-white/30" size={64} />
                    )}
                    {work.category === "医療施設" && (
                      <Building2 className="text-white/30" size={64} />
                    )}
                    {work.category === "教育施設" && (
                      <Building2 className="text-white/30" size={64} />
                    )}
                  </div>
                  {/* オーバーレイ */}
                  <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/20 transition-colors" />
                </div>

                <div className="p-5">
                  <span className="inline-block px-3 py-1 bg-[#1A2A4A]/10 text-[#1A2A4A] text-xs font-medium rounded-full mb-2">
                    {work.category}
                  </span>
                  <h3 className="font-bold text-[#1A2A4A] mb-1">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-500">{work.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[#1A2A4A] font-medium hover:text-[#C9A962] transition-colors"
            >
              すべての実績を見る
              <ArrowRight size={18} />
            </Link>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            ※実績写真はお客様の許可を得て掲載しております
          </p>
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
                {/* 代表写真プレースホルダー */}
                <div className="w-48 h-48 bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A] rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="text-white/30" size={64} />
                </div>

                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold text-[#1A2A4A] mb-4"
                    style={{ fontFamily: "var(--font-shippori-mincho)" }}
                  >
                    「お客様の空間づくりに、
                    <br />
                    全力で向き合います」
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    私たちは「内装仕上げのプロ」として、お客様の理想の空間を実現するために日々精進しております。
                    <br />
                    <br />
                    誠実な仕事、確かな品質、そしてスピード。これが私たちの約束です。
                  </p>

                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">代表取締役</p>
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
      <section className="section bg-[#1A2A4A] text-white">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
              PARTNER
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-shippori-mincho)" }}
            >
              一緒に最高の仕事をしませんか？
            </h2>

            <p className="text-gray-300 mb-4">
              クロス職人・床職人・LGS職人など、
              <br className="sm:hidden" />
              内装仕上げに関わる職人さんを募集しています。
            </p>

            <p className="text-gray-400 text-sm mb-8">
              安定した案件と、良好なパートナーシップをお約束します。
            </p>

            <Link
              href="/partner"
              className="btn bg-[#C9A962] text-[#1A2A4A] hover:bg-[#D9B972] px-8 py-4"
            >
              募集詳細・応募はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="section bg-gradient-to-r from-[#C9A962] to-[#D9B972]">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1A2A4A] mb-4"
              style={{ fontFamily: "var(--font-shippori-mincho)" }}
            >
              まずは、お気軽にご相談ください
            </h2>

            <p className="text-[#1A2A4A]/80 mb-2">
              お見積もり無料・現地調査無料
            </p>
            <p className="text-[#1A2A4A]/70 text-sm mb-8">
              内装工事のことなら何でもご相談ください
            </p>

            <a
              href="tel:052-680-7707"
              className="inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-[#1A2A4A] mb-2"
            >
              <Phone size={32} />
              052-680-7707
            </a>

            <p className="text-[#1A2A4A]/60 text-sm mb-8">
              営業時間: 平日 9:00〜18:00
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact?type=estimate"
                className="btn bg-[#1A2A4A] text-white hover:bg-[#15223C] px-8 py-4"
              >
                無料見積もり依頼
              </Link>
              <Link
                href="/contact"
                className="btn bg-white text-[#1A2A4A] hover:bg-gray-100 px-8 py-4"
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
