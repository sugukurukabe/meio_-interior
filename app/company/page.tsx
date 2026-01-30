import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "会社概要",
    description:
        "有限会社明王インテリアの会社概要。愛知県名古屋市天白区を拠点に、東海エリアで内装仕上げ工事を行っています。建設業許可 愛知県知事許可 第102156号取得。",
};

const companyInfo = [
    { label: "会社名", value: "有限会社明王インテリア" },
    { label: "代表者", value: "代表取締役 笹木 博光" },
    { label: "所在地", value: "〒468-0048 愛知県名古屋市天白区中坪町78" },
    { label: "電話番号", value: "052-680-7707" },
    { label: "FAX番号", value: "052-680-7706" },
    { label: "メール", value: "o.sasaki@meio.biz" },
    { label: "営業時間", value: "平日 9:00〜18:00" },
    { label: "定休日", value: "土日祝（緊急対応可）" },
    { label: "事業内容", value: "内装仕上工事業" },
    { label: "対応エリア", value: "東海エリア（愛知県中心）" },
];

const licenses = [
    {
        label: "建設業許可",
        value: "愛知県知事許可 第102156号",
        sub: "一般建設業（内装仕上工事業）",
    },
    { label: "法人番号", value: "4180002026699" },
    { label: "インボイス登録", value: "適格請求書発行事業者登録済" },
];

const insurance = [
    "社会保険完備",
    "労災保険加入",
];

const affiliations = [
    "愛知県室内装飾事業協同組合 会員",
];

export default function CompanyPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        COMPANY
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        会社概要
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        有限会社明王インテリアについて
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
                        <span className="text-[#1A2A4A]">会社概要</span>
                    </nav>
                </div>
            </div>

            {/* 基本情報 */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">COMPANY INFO</span>
                        <h2 className="section-title-jp">基本情報</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-[#F5F5F3] rounded-2xl overflow-hidden">
                            <table className="w-full">
                                <tbody>
                                    {companyInfo.map((item, index) => (
                                        <tr
                                            key={item.label}
                                            className={index !== companyInfo.length - 1 ? "border-b border-white" : ""}
                                        >
                                            <th className="px-6 py-4 text-left text-sm font-medium text-[#1A2A4A] bg-[#1A2A4A]/5 w-1/3">
                                                {item.label}
                                            </th>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {item.label === "電話番号" ? (
                                                    <a
                                                        href={`tel:${item.value}`}
                                                        className="text-[#1A2A4A] hover:text-[#C9A962]"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : item.label === "メール" ? (
                                                    <a
                                                        href={`mailto:${item.value}`}
                                                        className="text-[#1A2A4A] hover:text-[#C9A962]"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    item.value
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 許認可・資格 */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">LICENSE</span>
                        <h2 className="section-title-jp">許認可・資格</h2>
                    </div>

                    <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
                        {licenses.map((license) => (
                            <div
                                key={license.label}
                                className="bg-white rounded-xl p-6 text-center shadow-sm"
                            >
                                <Building2 className="text-[#C9A962] mx-auto mb-4" size={32} />
                                <h3 className="text-sm font-medium text-gray-500 mb-2">
                                    {license.label}
                                </h3>
                                <p className="font-bold text-[#1A2A4A]">{license.value}</p>
                                {license.sub && (
                                    <p className="text-xs text-gray-500 mt-1">{license.sub}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 保険加入状況 & 加盟団体 */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* 保険加入状況 */}
                        <div className="bg-[#F5F5F3] rounded-xl p-8">
                            <h3 className="text-lg font-bold text-[#1A2A4A] mb-6">
                                保険加入状況
                            </h3>
                            <ul className="space-y-3">
                                {insurance.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#C9A962]" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 加盟団体 */}
                        <div className="bg-[#F5F5F3] rounded-xl p-8">
                            <h3 className="text-lg font-bold text-[#1A2A4A] mb-6">
                                加盟団体
                            </h3>
                            <ul className="space-y-3">
                                {affiliations.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="text-[#C9A962]" size={20} />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* アクセスマップ */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">ACCESS</span>
                        <h2 className="section-title-jp">アクセス</h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                            {/* Google Maps埋め込み */}
                            <div className="aspect-video">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.5!2d136.97!3d35.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA2JzQyLjAiTiAxMzbCsDU4JzEyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* 住所情報 */}
                            <div className="p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-[#C9A962] mt-1" size={20} />
                                        <div>
                                            <p className="font-medium text-[#1A2A4A]">
                                                〒468-0048 愛知県名古屋市天白区中坪町78
                                            </p>
                                            <p className="text-sm text-gray-500 mt-1">
                                                最寄駅: 地下鉄鶴舞線「野並駅」徒歩約10分
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href="tel:052-680-7707"
                                            className="flex items-center gap-2 text-[#1A2A4A] hover:text-[#C9A962] transition-colors"
                                        >
                                            <Phone size={18} />
                                            <span className="font-medium">052-680-7707</span>
                                        </a>
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
                        お気軽にお問い合わせください
                    </h2>
                    <p className="text-[#1A2A4A]/80 mb-8">
                        内装工事のご相談・お見積もりは無料です
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="btn bg-[#1A2A4A] text-white hover:bg-[#15223C] px-8 py-4"
                        >
                            お問い合わせ
                        </Link>
                        <a
                            href="tel:052-680-7707"
                            className="btn bg-white text-[#1A2A4A] hover:bg-gray-100 px-8 py-4"
                        >
                            <Phone size={18} />
                            052-680-7707
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
