
import React from 'react';
import { Link } from 'react-router-dom';
import MetaHead from '../components/MetaHead';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms = () => {
  return (
    <>
      <MetaHead 
        title="Terms of Service" 
        description="Terms of Service for Marzipan Digital - Our rules and guidelines for using our services." 
      />
      <Header />
      
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-display font-semibold mb-8 animate-fade-in">Terms of Service</h1>
          
          <div className="prose max-w-none dark:prose-invert animate-fade-in">
            <p className="text-lg mb-6">Last Updated: {new Date().toLocaleDateString('en-AU')}</p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">1. Introduction</h2>
              <p>Welcome to Marzipan Digital. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.</p>
              <p>If you disagree with any part of the Terms, you may not access or use our services.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>"Service"</strong> refers to the website and services provided by Marzipan Digital.</li>
                <li><strong>"You"</strong> refers to the individual accessing or using the Service, or the company or organization on whose behalf that individual is accessing the Service.</li>
                <li><strong>"Content"</strong> refers to any information, data, text, software, graphics, photographs, videos, audio clips, or other materials that are displayed on or available through the Service.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">3. Use of Our Services</h2>
              <p>You may use our services only as permitted by these Terms and any applicable laws and regulations. You agree not to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Use our services in any way that violates any applicable laws or regulations</li>
                <li>Use our services for the purpose of exploiting, harming, or attempting to exploit or harm minors</li>
                <li>Attempt to gain unauthorized access to any portion of the services</li>
                <li>Interfere with or disrupt the services or servers or networks connected to the services</li>
                <li>Upload or transmit any viruses, malware, or other types of malicious software</li>
                <li>Collect or track personal information of other users</li>
                <li>Spam, phish, or engage in any other unwanted solicitation</li>
                <li>Impersonate or attempt to impersonate our company, employees, or other users</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">4. Accounts</h2>
              <p>When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
              <p>You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with this section.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">5. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Marzipan Digital and its licensors. The Service is protected by copyright, trademark, and other laws of Australia and foreign countries.</p>
              <p>Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">6. User Content</h2>
              <p>You retain ownership of any content you submit, post, or display on or through the Service. By submitting, posting, or displaying content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content.</p>
              <p>You represent and warrant that you own or have the necessary rights to the content you submit and that the content does not infringe any third party's intellectual property or other rights.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">7. Payment Terms</h2>
              <p>If you choose to purchase our services, you agree to pay all fees and charges associated with your account on a timely basis and in the currency stated. All payments are non-refundable unless otherwise stated.</p>
              <p>We use third-party payment processors to bill you through a payment account linked to your account. The processing of payments will be subject to the terms, conditions, and privacy policies of these payment processors.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">8. Disclaimers</h2>
              <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p>WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE, OR THAT DEFECTS WILL BE CORRECTED.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">9. Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE</li>
                <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE</li>
                <li>ANY CONTENT OBTAINED FROM THE SERVICE</li>
                <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">10. Indemnification</h2>
              <p>You agree to defend, indemnify, and hold harmless Marzipan Digital and its directors, officers, employees, agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Service.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">11. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions.</p>
              <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">12. Changes to Terms</h2>
              <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date.</p>
              <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-display font-medium mb-4">13. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
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

export default Terms;
