"use client";

// components/PrivacyPolicyPage.tsx or pages/privacy-policy.tsx
import React from 'react';
import { motion, Variants } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => {
    // Animation variants for sections
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 0.8
            }
        },
    };

    // Animation variants for the main container
    const containerVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 1,
                delay: 0.2
            }
        },
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 p-4 sm:p-6 lg:p-10 min-h-screen flex justify-center">
            <motion.div
                className="max-w-5xl w-full mx-auto bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 my-4 border border-blue-200 transform hover:scale-[1.005] transition-transform duration-300 ease-in-out"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Header Section */}
                <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mb-4 text-center tracking-tight leading-tight">
                    Privacy Policy
                </h1>
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-6 text-center">
                    for Algotradexmind
                </h2>
                <p className="text-base sm:text-lg text-gray-500 mb-10 text-center font-medium">
                    Last updated: May 29, 2025
                </p>
                <p className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
                    This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed text-center max-w-3xl mx-auto">
                    We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.privacypolicyonline.com/privacy-policy-generator/" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Free Privacy Policy Generator</a>.
                </p>

                {/* Interpretation and Definitions Section */}
                <motion.section
                    className="mb-12 border-t border-b border-blue-100 py-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Interpretation and Definitions</h3>
                    <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Interpretation</h4>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                    <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Definitions</h4>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        For the purposes of this Privacy Policy:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-3 mb-8 ml-4">
                        <li><strong className="font-bold text-gray-800">Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                        <li><strong className="font-bold text-gray-800">Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                        <li><strong className="font-bold text-gray-800">Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Algotradexmind.</li>
                        <li><strong className="font-bold text-gray-800">Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                        <li><strong className="font-bold text-gray-800">Country</strong> refers to: Uttar Pradesh, India</li>
                        <li><strong className="font-bold text-gray-800">Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                        <li><strong className="font-bold text-gray-800">Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                        <li><strong className="font-bold text-gray-800">Service</strong> refers to the Website.</li>
                        <li><strong className="font-bold text-gray-800">Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                        <li><strong className="font-bold text-gray-800">Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                        <li><strong className="font-bold text-gray-800">Website</strong> refers to Algotradexmind, accessible from <a href="https://algotradexmind.com/" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">https://algotradexmind.com/</a></li>
                        <li><strong className="font-bold text-gray-800">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                    </ul>
                </motion.section>

                {/* Collecting and Using Your Personal Data Section */}
                <motion.section
                    className="mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Collecting and Using Your Personal Data</h3>
                    <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Types of Data Collected</h4>
                    <h5 className="text-xl font-medium text-gray-800 mb-3">Personal Data</h5>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-2 mb-8 ml-4">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                    </ul>

                    <h5 className="text-xl font-medium text-gray-800 mb-3">Usage Data</h5>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Usage Data is collected automatically when using the Service.
                    </p>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                    </p>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                    </p>

                    <h5 className="text-xl font-medium text-gray-800 mb-3">Tracking Technologies and Cookies</h5>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-3 mb-8 ml-4">
                        <li><strong className="font-bold text-gray-800">Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>
                        <li><strong className="font-bold text-gray-800">Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>
                    </ul>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the <a href="https://www.privacypolicyonline.com/what-are-cookies/" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Free Privacy Policy website</a> article.
                    </p>
                    <p className="text-base text-gray-700 mb-6 leading-relaxed">
                        We use both Session and Persistent Cookies for the purposes set out below:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-3 mb-8 ml-4">
                        <li><strong className="font-bold text-gray-800">Necessary / Essential Cookies</strong>
                            <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>Type: Session Cookies</li>
                                <li>Administered by: Us</li>
                                <li>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</li>
                            </ul>
                        </li>
                        <li><strong className="font-bold text-gray-800">Cookies Policy / Notice Acceptance Cookies</strong>
                            <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>Type: Persistent Cookies</li>
                                <li>Administered by: Us</li>
                                <li>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</li>
                            </ul>
                        </li>
                        <li><strong className="font-bold text-gray-800">Functionality Cookies</strong>
                            <ul className="list-circle list-inside ml-4 mt-1 space-y-1">
                                <li>Type: Persistent Cookies</li>
                                <li>Administered by: Us</li>
                                <li>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                    </p>
                </motion.section>

                {/* Use of Your Personal Data Section */}
                <motion.section
                    className="mb-12 border-t border-blue-100 pt-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Use of Your Personal Data</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        The Company may use Personal Data for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-3 mb-8 ml-4">
                        <li><strong className="font-bold text-gray-800">To provide and maintain our Service,</strong> including to monitor the usage of our Service.</li>
                        <li><strong className="font-bold text-gray-800">To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                        <li><strong className="font-bold text-gray-800">For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                        <li><strong className="font-bold text-gray-800">To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                        <li><strong className="font-bold text-gray-800">To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                        <li><strong className="font-bold text-gray-800">To manage Your requests:</strong> To attend and manage Your requests to Us.</li>
                        <li><strong className="font-bold text-gray-800">For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                        <li><strong className="font-bold text-gray-800">For other purposes:</strong> We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                    </ul>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        We may share Your personal information in the following situations:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-3 mb-8 ml-4">
                        <li><strong className="font-bold text-gray-800">With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                        <li><strong className="font-bold text-gray-800">For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                        <li><strong className="font-bold text-gray-800">With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                        <li><strong className="font-bold text-gray-800">With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                        <li><strong className="font-bold text-gray-800">With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                        <li><strong className="font-bold text-gray-800">With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
                    </ul>
                </motion.section>

                {/* Retention of Your Personal Data Section */}
                <motion.section
                    className="mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Retention of Your Personal Data</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                    </p>
                </motion.section>

                {/* Transfer of Your Personal Data Section */}
                <motion.section
                    className="mb-12 border-t border-blue-100 pt-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Transfer of Your Personal Data</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                    </p>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                    </p>
                </motion.section>

                {/* Delete Your Personal Data Section */}
                <motion.section
                    className="mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Delete Your Personal Data</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                    </p>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Our Service may give You the ability to delete certain information about You from within the Service.
                    </p>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                    </p>
                </motion.section>

                {/* Disclosure of Your Personal Data Section */}
                <motion.section
                    className="mb-12 border-t border-blue-100 pt-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Disclosure of Your Personal Data</h3>
                    <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Business Transactions</h4>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>

                    <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Law enforcement</h4>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>

                    <h4 className="text-2xl font-semibold text-indigo-600 mb-4">Other legal requirements</h4>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-2 mb-8 ml-4">
                        <li>Comply with a legal obligation</li>
                        <li>Protect and defend the rights or property of the Company</li>
                        <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                        <li>Protect the personal safety of Users of the Service or the public</li>
                        <li>Protect against legal liability</li>
                    </ul>
                </motion.section>

                {/* Security of Your Personal Data Section */}
                <motion.section
                    className="mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Security of Your Personal Data</h3>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                </motion.section>

                {/* Children's Privacy Section */}
                <motion.section
                    className="mb-12 border-t border-blue-100 pt-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Children's Privacy</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                    </p>
                </motion.section>

                {/* Links to Other Websites Section */}
                <motion.section
                    className="mb-12"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Links to Other Websites</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                    </p>
                </motion.section>

                {/* Changes to this Privacy Policy Section */}
                <motion.section
                    className="mb-12 border-t border-blue-100 pt-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Changes to this Privacy Policy</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                    </p>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                    </p>
                    <p className="text-base text-gray-700 mb-8 leading-relaxed">
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </motion.section>

                {/* Contact Us Section */}
                <motion.section
                    className="border-t border-blue-100 pt-8"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h3 className="text-3xl font-bold text-blue-700 mb-6">Contact Us</h3>
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">
                        If you have any questions about this Privacy Policy, You can contact us:
                    </p>
                    <ul className="list-disc list-inside text-base text-gray-700 space-y-2 mb-8 ml-4">
                        <li>By phone number: <a href="tel:+919836676300" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">+91 98366 76300</a></li>
                    </ul>
                    <p className="text-sm text-gray-500 text-center mt-8">
                        Generated using <a href="https://www.privacypolicyonline.com/privacy-policy-generator/" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200" target="_blank" rel="noopener noreferrer">Free Privacy Policy Generator</a>
                    </p>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicyPage;