import { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
    title: "サービス紹介 | 内装仕上げ工事",
    description:
        "オフィス・店舗・公共施設の内装仕上げ工事をワンストップで対応。天井工事、壁張り・クロス工事、床仕上工事、LGS・PB工事など、各種内装工事を承ります。",
};

const services = [
    {
        id: "ceiling",
        number: "01",
        title: "天井仕上工事",
        description:
            "オフィスや店舗の天井仕上げを美しく仕上げます。軽量鉄骨下地から仕上げまで一貫対応。",
        features: ["システム天井", "岩綿吸音板", "化粧石膏ボード", "クロス仕上げ"],
    },
    {
        id: "wall",
        number: "02",
        title: "壁張り工事・クロス工事",
        description:
            "空間の印象を左右する壁面を美しく仕上げます。用途や雰囲気に合わせた最適な素材をご提案。",
        features: ["ビニールクロス", "織物クロス", "塗装仕上げ", "タイル張り"],
    },
    {
        id: "floor",
        number: "03",
        title: "床仕上工事",
        description:
            "用途に合わせた最適な床材をご提案します。耐久性、メンテナンス性、デザイン性を考慮した施工。",
        features: ["タイルカーペット", "長尺シート", "OAフロア", "フローリング"],
    },
    {
        id: "lgs",
        number: "04",
        title: "軽量ボード工事（LGS・PB）",
        description:
            "軽量鉄骨下地と石膏ボードの施工を行います。間仕切りから天井下地まで幅広く対応。",
        features: ["LGS（軽量鉄骨）下地", "PB（石膏ボード）張り", "耐火間仕切り", "遮音間仕切り"],
    },
    {
        id: "partition",
        number: "05",
        title: "内装間仕切り工事",
        description:
            "オフィスレイアウト変更、店舗区画変更など、空間の有効活用をサポートします。",
        features: ["スチールパーティション", "アルミパーティション", "造作間仕切り", "ガラスパーティション"],
    },
    {
        id: "soundproof",
        number: "06",
        title: "防音工事",
        description:
            "会議室、スタジオ、音楽室など防音が必要な空間の内装を専門技術で施工します。",
        features: ["吸音材施工", "遮音シート", "防振構造", "二重壁構造"],
    },
    {
        id: "other",
        number: "07",
        title: "その他工事",
        description:
            "その他、内装に関するさまざまな工事に対応いたします。お気軽にご相談ください。",
        features: ["たたみ工事", "ふすま工事", "家具工事", "ユニットバス工事"],
    },
];

const flow = [
    { step: "01", title: "お問い合わせ", description: "まずはお電話またはフォームから" },
    { step: "02", title: "現地調査", description: "無料で現地を確認いたします" },
    { step: "03", title: "お見積もり", description: "詳細な見積書を作成" },
    { step: "04", title: "ご契約", description: "内容確認後、契約締結" },
    { step: "05", title: "施工", description: "経験豊富な職人が対応" },
    { step: "06", title: "完了検査", description: "品質を確認" },
    { step: "07", title: "お引き渡し", description: "完了後もサポート" },
];

export default function ServicesPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        SERVICE
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        内装仕上げ工事サービス
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        オフィス・店舗・公共施設・商業施設の
                        <br />
                        内装仕上げ工事をワンストップでお任せください
                    </p>
                </div>
            </section>

            {/* パンくず */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="container mx-auto px-6">
                    <nav className="text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#C9A962]">
                            TOP
                        </Link>
                        <span className="mx-2">＞</span>
                        <span className="text-[#1A2A4A]">サービス紹介</span>
                    </nav>
                </div>
            </div>

            {/* サービス一覧 */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">SERVICES</span>
                        <h2 className="section-title-jp">対応工事一覧</h2>
                    </div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm"
                            >
                                <div className="flex flex-col md:flex-row">
                                    {/* 画像プレースホルダー */}
                                    <div className="md:w-1/3 aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A] flex items-center justify-center">
                                        <span className="text-6xl font-bold text-white/10">
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* コンテンツ */}
                                    <div className="md:w-2/3 p-6 md:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-[#C9A962] font-bold text-lg">
                                                {service.number}
                                            </span>
                                            <h3 className="text-xl font-bold text-[#1A2A4A]">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <p className="text-gray-600 mb-6">{service.description}</p>

                                        <div className="grid grid-cols-2 gap-2">
                                            {service.features.map((feature) => (
                                                <div
                                                    key={feature}
                                                    className="flex items-center gap-2 text-sm text-gray-600"
                                                >
                                                    <CheckCircle2
                                                        className="text-[#C9A962] shrink-0"
                                                        size={16}
                                                    />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 施工の流れ */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">FLOW</span>
                        <h2 className="section-title-jp">施工の流れ</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* 接続線 */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C9A962]/30 hidden md:block" />

                            <div className="space-y-6">
                                {flow.map((item, index) => (
                                    <div
                                        key={item.step}
                                        className="flex items-center gap-6 relative"
                                    >
                                        {/* ステップ番号 */}
                                        <div className="w-16 h-16 bg-[#1A2A4A] rounded-full flex items-center justify-center shrink-0 z-10">
                                            <span className="text-[#C9A962] font-bold text-lg">
                                                {item.step}
                                            </span>
                                        </div>

                                        {/* コンテンツ */}
                                        <div className="flex-1 bg-[#F5F5F3] rounded-xl p-4 md:p-6">
                                            <h3 className="font-bold text-[#1A2A4A] mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>

                                        {/* 矢印 */}
                                        {index < flow.length - 1 && (
                                            <div className="absolute left-8 -bottom-3 transform -translate-x-1/2 hidden md:block">
                                                <ArrowRight
                                                    className="text-[#C9A962] rotate-90"
                                                    size={16}
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTAセクション */}
            <section className="section bg-gradient-to-r from-[#C9A962] to-[#D9B972]">
                <div className="container mx-auto text-center">
                    <h2
                        className="text-2xl md:text-3xl font-bold text-[#1A2A4A] mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        まずは無料でお見積もり
                    </h2>
                    <p className="text-[#1A2A4A]/80 mb-8">
                        現地調査も無料で承ります。お気軽にご相談ください。
                    </p>
                    <Link
                        href="/contact?type=estimate"
                        className="btn bg-[#1A2A4A] text-white hover:bg-[#15223C] px-8 py-4"
                    >
                        無料見積もり依頼
                    </Link>
                </div>
            </section>
        </>
    );
}
