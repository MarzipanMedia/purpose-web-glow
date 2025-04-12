
import React from 'react';
import { Link } from 'react-router-dom';
import MetaHead from '../components/MetaHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <MetaHead 
        title="Privacy Policy" 
        description="Privacy Policy for Marzipan Digital - Learn how we collect, use and protect your personal information." 
      />
      <Header />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-8 animate-fade-in">Privacy Policy</h1>
          
          <div className="prose max-w-none dark:prose-invert animate-fade-in">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-AU')}</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">1. Introduction</h2>
              <p>At Marzipan Digital ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              <p>We comply with the Australian Privacy Principles contained in the Privacy Act 1988 (Cth) and other applicable privacy laws in Australia.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">2. Information We Collect</h2>
              <p>We may collect personal information that you provide directly to us, such as:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, job title)</li>
                <li>Account credentials (if you create an account)</li>
                <li>Payment information (if you purchase our services)</li>
                <li>Communications you send to us</li>
              </ul>
              
              <p>We may also automatically collect certain information when you visit our website, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Log data (IP address, browser type, pages visited)</li>
                <li>Device information (hardware model, operating system)</li>
                <li>Cookie data and similar technologies</li>
                <li>Usage information (how you interact with our website)</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Process transactions and send related information</li>
                <li>Send administrative information, such as updates or changes to our terms</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send promotional communications about our services, features, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">4. Disclosure of Your Information</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors, such as lawyers, accountants, and insurers</li>
                <li>Third parties in connection with a business transaction</li>
                <li>Government bodies when required by law</li>
                <li>Other third parties with your consent</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">6. Your Rights</h2>
              <p>Under Australian privacy law, you have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate personal information</li>
                <li>Request deletion of your personal information in certain circumstances</li>
                <li>Object to our processing of your personal information</li>
                <li>Lodge a complaint with the Office of the Australian Information Commissioner</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to read the privacy policies of each website you visit.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">8. Children's Privacy</h2>
              <p>Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">9. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <p className="mt-2">
                Email: <a href="mailto:ben@marzipan.com.au" className="text-primary hover:underline">ben@marzipan.com.au</a><br />
                Address: Bronte, NSW, Australia
              </p>
            </section>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/" className="btn-primary inline-block">Return to Home</Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
