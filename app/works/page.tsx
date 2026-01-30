"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Building2, Store, Landmark, Warehouse, GraduationCap, Stethoscope } from "lucide-react";

const categories = [
    { id: "all", name: "すべて" },
    { id: "office", name: "オフィス" },
    { id: "shop", name: "店舗" },
    { id: "public", name: "公共施設" },
    { id: "commercial", name: "商業施設" },
    { id: "medical", name: "医療施設" },
    { id: "education", name: "教育施設" },
];

const works = [
    {
        id: 1,
        category: "office",
        categoryName: "オフィス",
        title: "IT企業オフィス改装工事",
        location: "名古屋市中区",
        date: "2024年10月",
        description: "フリーアドレス対応のモダンなオフィス空間へ全面改装",
        icon: Building2,
    },
    {
        id: 2,
        category: "shop",
        categoryName: "店舗",
        title: "カフェ新装工事",
        location: "名古屋市中村区",
        date: "2024年8月",
        description: "温かみのある木目調の内装で居心地の良い空間を演出",
        icon: Store,
    },
    {
        id: 3,
        category: "public",
        categoryName: "公共施設",
        title: "コミュニティセンター改修",
        location: "名古屋市天白区",
        date: "2024年6月",
        description: "多目的ホールの天井・壁・床を全面リニューアル",
        icon: Landmark,
    },
    {
        id: 4,
        category: "commercial",
        categoryName: "商業施設",
        title: "物販店舗内装工事",
        location: "名古屋市緑区",
        date: "2024年5月",
        description: "ブランドイメージに合わせた高級感のある内装",
        icon: Warehouse,
    },
    {
        id: 5,
        category: "medical",
        categoryName: "医療施設",
        title: "歯科クリニック内装工事",
        location: "名古屋市昭和区",
        date: "2024年4月",
        description: "清潔感と安心感を重視した診療空間の設計・施工",
        icon: Stethoscope,
    },
    {
        id: 6,
        category: "education",
        categoryName: "教育施設",
        title: "学習塾改装工事",
        location: "名古屋市千種区",
        date: "2024年3月",
        description: "集中しやすい環境づくりと防音対策を施した教室",
        icon: GraduationCap,
    },
    {
        id: 7,
        category: "office",
        categoryName: "オフィス",
        title: "会計事務所移転工事",
        location: "名古屋市東区",
        date: "2024年2月",
        description: "落ち着いた雰囲気の応接室と機能的な執務スペース",
        icon: Building2,
    },
    {
        id: 8,
        category: "shop",
        categoryName: "店舗",
        title: "美容室新装工事",
        location: "名古屋市瑞穂区",
        date: "2024年1月",
        description: "スタイリッシュなデザインと使いやすさを両立",
        icon: Store,
    },
    {
        id: 9,
        category: "office",
        categoryName: "オフィス",
        title: "コワーキングスペース新設",
        location: "名古屋市中区",
        date: "2023年12月",
        description: "多様な働き方に対応した柔軟なレイアウト",
        icon: Building2,
    },
];

export default function WorksPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredWorks =
        activeCategory === "all"
            ? works
            : works.filter((work) => work.category === activeCategory);

    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        WORKS
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        施工実績
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        これまでに手がけた内装工事の一部をご紹介します
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
                        <span className="text-[#1A2A4A]">施工実績</span>
                    </nav>
                </div>
            </div>

            {/* 実績一覧 */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    {/* カテゴリフィルター */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                        ? "bg-[#1A2A4A] text-white"
                                        : "bg-white text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* 実績グリッド */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {filteredWorks.map((work) => {
                            const Icon = work.icon;
                            return (
                                <div
                                    key={work.id}
                                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                                >
                                    {/* 画像プレースホルダー */}
                                    <div className="aspect-[4/3] bg-gradient-to-br from-[#1A2A4A] to-[#2A3A5A] relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Icon className="text-white/30" size={64} />
                                        </div>
                                        <div className="absolute inset-0 bg-[#C9A962]/0 group-hover:bg-[#C9A962]/20 transition-colors" />
                                    </div>

                                    {/* コンテンツ */}
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="inline-block px-3 py-1 bg-[#1A2A4A]/10 text-[#1A2A4A] text-xs font-medium rounded-full">
                                                {work.categoryName}
                                            </span>
                                            <span className="text-xs text-gray-500">{work.date}</span>
                                        </div>

                                        <h3 className="font-bold text-[#1A2A4A] mb-2">
                                            {work.title}
                                        </h3>

                                        <p className="text-sm text-gray-600 mb-3">
                                            {work.description}
                                        </p>

                                        <p className="text-xs text-gray-500">{work.location}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        ※実績写真はお客様の許可を得て掲載しております
                    </p>
                </div>
            </section>

            {/* CTAセクション */}
            <section className="section bg-gradient-to-r from-[#C9A962] to-[#D9B972]">
                <div className="container mx-auto text-center">
                    <h2
                        className="text-2xl md:text-3xl font-bold text-[#1A2A4A] mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        お客様の理想の空間を実現します
                    </h2>
                    <p className="text-[#1A2A4A]/80 mb-8">
                        まずはお気軽にご相談ください
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
