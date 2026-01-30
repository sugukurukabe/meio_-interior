import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "プライバシーポリシー",
    description:
        "有限会社明王インテリアのプライバシーポリシー。個人情報の取り扱いについて説明しています。",
};

export default function PrivacyPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        PRIVACY POLICY
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        プライバシーポリシー
                    </h1>
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
                        <span className="text-[#1A2A4A]">プライバシーポリシー</span>
                    </nav>
                </div>
            </div>

            {/* コンテンツ */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <div className="bg-[#F5F5F3] rounded-2xl p-8 md:p-12">
                            <p className="text-gray-600 mb-8">
                                有限会社明王インテリア（以下「当社」といいます）は、お客様の個人情報保護の重要性を認識し、以下のプライバシーポリシーに基づき、個人情報の適切な取り扱いと保護に努めます。
                            </p>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                1. 個人情報の定義
                            </h2>
                            <p className="text-gray-600">
                                本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、住所、電話番号、メールアドレスその他の記述等により特定の個人を識別することができるものをいいます。
                            </p>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                2. 個人情報の収集
                            </h2>
                            <p className="text-gray-600">
                                当社は、お問い合わせフォーム、お見積もり依頼、協力業者募集への応募等を通じて、以下の個人情報を収集することがあります。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>氏名</li>
                                <li>会社名・団体名</li>
                                <li>住所</li>
                                <li>電話番号</li>
                                <li>メールアドレス</li>
                                <li>その他お問い合わせ内容に含まれる情報</li>
                            </ul>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                3. 個人情報の利用目的
                            </h2>
                            <p className="text-gray-600">
                                当社は、収集した個人情報を以下の目的で利用いたします。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>お問い合わせへの回答</li>
                                <li>お見積もりの作成・送付</li>
                                <li>工事に関するご連絡</li>
                                <li>協力業者募集に関するご連絡</li>
                                <li>当社サービスに関する情報のご案内</li>
                                <li>その他、お客様との取引に関する業務</li>
                            </ul>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                4. 個人情報の第三者提供
                            </h2>
                            <p className="text-gray-600">
                                当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                                <li>お客様の同意がある場合</li>
                                <li>法令に基づく場合</li>
                                <li>
                                    人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難である場合
                                </li>
                            </ul>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                5. 個人情報の管理
                            </h2>
                            <p className="text-gray-600">
                                当社は、お客様の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、必要かつ適切な安全管理措置を講じます。
                            </p>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                6. 個人情報の開示・訂正・削除
                            </h2>
                            <p className="text-gray-600">
                                お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人であることを確認のうえ、速やかに対応いたします。
                            </p>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                7. プライバシーポリシーの変更
                            </h2>
                            <p className="text-gray-600">
                                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトにて公表いたします。
                            </p>

                            <h2 className="text-xl font-bold text-[#1A2A4A] mb-4 mt-8">
                                8. お問い合わせ窓口
                            </h2>
                            <p className="text-gray-600">
                                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
                            </p>
                            <div className="bg-white rounded-xl p-6 mt-4">
                                <p className="font-bold text-[#1A2A4A] mb-2">
                                    有限会社明王インテリア
                                </p>
                                <p className="text-gray-600 text-sm">
                                    〒468-0048 愛知県名古屋市天白区中坪町78
                                    <br />
                                    TEL: 052-680-7707
                                    <br />
                                    FAX: 052-680-7706
                                    <br />
                                    Email: o.sasaki@meio.biz
                                </p>
                            </div>

                            <p className="text-sm text-gray-500 mt-8 text-right">
                                制定日: 2025年1月30日
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
