import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Building2 } from "lucide-react";

const services = [
    { name: "天井仕上工事", href: "/services#ceiling" },
    { name: "壁張り・クロス工事", href: "/services#wall" },
    { name: "床仕上工事", href: "/services#floor" },
    { name: "LGS・PB工事", href: "/services#lgs" },
    { name: "内装間仕切り工事", href: "/services#partition" },
];

const company = [
    { name: "会社概要", href: "/company" },
    { name: "代表挨拶", href: "/about" },
    { name: "施工実績", href: "/works" },
    { name: "プライバシーポリシー", href: "/privacy" },
];

const contact = [
    { name: "お見積もり依頼", href: "/contact?type=estimate" },
    { name: "お問い合わせ", href: "/contact" },
    { name: "協力業者募集", href: "/partner" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1A2A4A] text-white">
            {/* Main footer content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <div
                                className="text-2xl font-bold tracking-wider mb-1"
                                style={{ fontFamily: "var(--font-shippori-mincho)" }}
                            >
                                明王インテリア
                            </div>
                            <div className="text-xs tracking-widest text-[#C9A962]">
                                MYOO INTERIOR Co., Ltd.
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="mt-1 text-[#C9A962] shrink-0" />
                                <span>
                                    〒468-0048
                                    <br />
                                    愛知県名古屋市天白区中坪町78
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-[#C9A962]" />
                                <a href="tel:052-680-7707" className="hover:text-[#C9A962]">
                                    052-680-7707
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#C9A962] text-xs font-bold w-4 text-center">FAX</span>
                                <span>052-680-7706</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-[#C9A962]" />
                                <a href="mailto:o.sasaki@meio.biz" className="hover:text-[#C9A962]">
                                    o.sasaki@meio.biz
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock size={16} className="text-[#C9A962]" />
                                <span>平日 9:00〜18:00</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C9A962]">
                            サービス
                        </h3>
                        <ul className="space-y-3">
                            {services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-[#C9A962] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C9A962]">
                            会社情報
                        </h3>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-[#C9A962] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider mb-6 text-[#C9A962]">
                            お問い合わせ
                        </h3>
                        <ul className="space-y-3">
                            {contact.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-gray-300 hover:text-[#C9A962] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8573D] text-white text-sm font-medium rounded-lg hover:bg-[#D44A32] transition-colors"
                            >
                                無料見積もり依頼
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* License and certification bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
                        <div className="flex items-center gap-2">
                            <Building2 size={14} className="text-[#C9A962]" />
                            <span>建設業許可: 愛知県知事許可 第102156号（一般：内装仕上工事業）</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>法人番号: 4180002026699</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>適格請求書発行事業者登録済</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-4">
                    <p className="text-center text-xs text-gray-500">
                        © 2025 MYOO INTERIOR Co., Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
