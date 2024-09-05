
import React from 'react';
import Footer from '../_components/footer'
import Header from '../_components/Header';

const PrivacyPolicy = () => {
  return (
    <div>
        <Header/>
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At Comfort Tissue, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Usage data (pages visited, time spent on site, etc.)</li>
        <li>Cookies and tracking technologies</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
      <p className="mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide, maintain, and improve our services</li>
        <li>Communicate with you about your account or transactions</li>
        <li>Send you updates, newsletters, or marketing materials (you can opt out at any time)</li>
        <li>Understand how our website is used to improve user experience</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
      <p className="mb-4">
        We do not share your personal information with third parties, except:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>To comply with legal obligations</li>
        <li>To protect our rights and the safety of others</li>
        <li>To third-party service providers who assist us in operating our services</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to request access to the personal information we hold about you, request corrections, or request deletion. If you wish to exercise any of these rights, please contact us at salmank.developer@gmail.com.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We encourage you to review this page periodically for the latest information on our privacy practices.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at salmank.developer@gmail.com.
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
