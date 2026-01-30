import { Metadata } from "next";
import Link from "next/link";
import { Users, Shield, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "強み・選ばれる理由",
    description:
        "有限会社明王インテリアが選ばれる理由。顧客ファーストの徹底、確かな品質管理体制、スピーディーで柔軟な対応が私たちの強みです。",
};

const reasons = [
    {
        number: "01",
        title: "顧客ファーストの徹底",
        description:
            "39歳の若き社長が掲げる「顧客ファースト」。お客様一人ひとりのご要望を徹底的にヒアリングし、最適な提案をいたします。施工中の細かなご要望にも柔軟に対応し、完工まで責任を持ってサポートします。",
        points: [
            "丁寧なヒアリングによる要望の把握",
            "お客様目線での最適な提案",
            "施工中も柔軟な対応",
            "完工後のアフターフォロー",
        ],
        icon: Users,
    },
    {
        number: "02",
        title: "確かな品質管理体制",
        description:
            "経験豊富な監督が現場を管理。長年の信頼関係で築いた協力業者ネットワークとの連携により、高品質な仕上がりをお約束します。妥協のない仕事で、お客様の期待を超える空間を創り上げます。",
        points: [
            "熟練の現場監督による品質管理",
            "厳選された協力業者との連携",
            "細部までこだわる丁寧な施工",
            "完了検査による品質保証",
        ],
        icon: Shield,
    },
    {
        number: "03",
        title: "スピーディーで柔軟な対応",
        description:
            "小規模から大規模まで、規模に応じた最適なチーム編成で迅速に対応。急な変更やご要望にも柔軟にお応えします。限られた工期でも、品質を落とすことなく確実に仕上げます。",
        points: [
            "規模に応じた最適なチーム編成",
            "迅速な見積もり対応",
            "急な変更にも柔軟に対応",
            "タイトな工期にも確実に対応",
        ],
        icon: Zap,
    },
];

export default function AboutPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        ABOUT US
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        強み・選ばれる理由
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        明王インテリアの3つの強み
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
                        <span className="text-[#1A2A4A]">強み・選ばれる理由</span>
                    </nav>
                </div>
            </div>

            {/* 強み詳細 */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    <div className="space-y-16 max-w-4xl mx-auto">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;
                            return (
                                <div
                                    key={reason.number}
                                    className="bg-white rounded-2xl overflow-hidden shadow-sm"
                                >
                                    <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        {/* ビジュアル */}
                                        <div className="md:w-2/5 bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A] p-8 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                    <Icon className="text-[#C9A962]" size={48} />
                                                </div>
                                                <div className="text-6xl font-bold text-white/10">
                                                    {reason.number}
                                                </div>
                                            </div>
                                        </div>

                                        {/* コンテンツ */}
                                        <div className="md:w-3/5 p-8 md:p-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-[#C9A962] font-bold text-lg">
                                                    {reason.number}
                                                </span>
                                                <h2 className="text-2xl font-bold text-[#1A2A4A]">
                                                    {reason.title}
                                                </h2>
                                            </div>

                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {reason.description}
                                            </p>

                                            <ul className="space-y-3">
                                                {reason.points.map((point) => (
                                                    <li
                                                        key={point}
                                                        className="flex items-center gap-3 text-sm text-gray-700"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-[#C9A962] rounded-full shrink-0" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 代表メッセージ */}
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
                                        className="text-2xl font-bold text-[#1A2A4A] mb-6"
                                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                                    >
                                        「お客様の空間づくりに、
                                        <br />
                                        全力で向き合います」
                                    </h3>

                                    <div className="text-gray-600 leading-relaxed space-y-4">
                                        <p>
                                            私たちは「内装仕上げのプロ」として、お客様の理想の空間を実現するために日々精進しております。
                                        </p>
                                        <p>
                                            オフィス、店舗、公共施設など、あらゆる空間における内装工事を手がけてまいりました。その経験の中で常に大切にしてきたのは、「お客様の声に真摯に耳を傾けること」です。
                                        </p>
                                        <p>
                                            誠実な仕事、確かな品質、そしてスピード。これが私たちの約束です。
                                        </p>
                                    </div>

                                    <div className="text-right mt-8">
                                        <p className="text-sm text-gray-500 mb-1">
                                            有限会社明王インテリア 代表取締役
                                        </p>
                                        <p
                                            className="text-2xl font-bold text-[#1A2A4A]"
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

            {/* CTAセクション */}
            <section className="section bg-gradient-to-r from-[#C9A962] to-[#D9B972]">
                <div className="container mx-auto text-center">
                    <h2
                        className="text-2xl md:text-3xl font-bold text-[#1A2A4A] mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        まずはお気軽にご相談ください
                    </h2>
                    <p className="text-[#1A2A4A]/80 mb-8">
                        お見積もり・現地調査は無料です
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact?type=estimate"
                            className="btn bg-[#1A2A4A] text-white hover:bg-[#15223C] px-8 py-4"
                        >
                            無料見積もり依頼
                        </Link>
                        <Link
                            href="/works"
                            className="btn bg-white text-[#1A2A4A] hover:bg-gray-100 px-8 py-4"
                        >
                            施工実績を見る
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
