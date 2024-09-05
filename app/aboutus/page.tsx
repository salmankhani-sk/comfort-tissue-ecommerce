import Image from "next/image";
import Header from "../_components/Header";
import Footer from "../_components/footer";
import PrivacyPolicy from "../privacy-policy/page";
export default function AboutUs() {
  return (
    <div>
      <Header/>
    <div className="min-h-screen flex flex-col">
      
      <div className="bg-gray-50 py-16 flex-grow">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main Heading */}
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            About Us
          </h1>

          {/* Introduction Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Welcome to Comfort Tissue Paper, your number one source for all
              things eco-friendly and stylish. We&apos;re dedicated to providing you
              with the best products, with a focus on sustainability, quality,
              and affordability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2024, Comfort Tissue has come a long way from its
              beginnings. When we first started, our passion for eco-conscious
              living drove us to start our own business. We hope you enjoy our
              products as much as we enjoy offering them to you.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl shadow-lg p-10 mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Our mission is to promote a sustainable lifestyle by offering a
              wide range of high-quality, environmentally-friendly products that
              cater to every aspect of your life. We believe that small changes
              can make a big impact, and we are committed to helping our
              customers make those changes without compromising on style or
              comfort.
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/my-prof.png"
                  width={150}
                  height={150}
                  alt="Team Member 1"
                  className="mx-auto rounded-full mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Salman Khan
                </h3>
                <p className="text-sm text-gray-600">Founder & CEO</p>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Salman is the visionary behind our brand, committed to
                  sustainable living and ethical sourcing. He leads the company
                  with passion and purpose.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/prof2.jpg"
                  width={150}
                  height={150}
                  alt="Team Member 2"
                  className="mx-auto rounded-full mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Salman
                </h3>
                <p className="text-sm text-gray-600">Head of Product Design</p>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Salman brings creativity and innovation to our product line,
                  ensuring every item is both stylish and sustainable.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/prof3.png"
                  width={150}
                  height={150}
                  alt="Team Member 3"
                  className="mx-auto rounded-full mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Salman
                </h3>
                <p className="text-sm text-gray-600">Marketing Manager</p>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  Salman is the voice of our brand, crafting compelling messages
                  that connect with customers and promote our mission.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-xl shadow-lg p-10 mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-3 leading-relaxed">
              <li>Sustainability: We prioritize eco-friendly products and ethical sourcing.</li>
              <li>Quality: We ensure all our products meet the highest standards.</li>
              <li>Customer Satisfaction: We strive to provide an excellent shopping experience.</li>
              <li>Community: We support and give back to our local and global communities.</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you have any questions or comments, please don&apos;t hesitate to
              contact us. We&apos;re here to help you on your journey toward a
              sustainable lifestyle.
            </p>
            <p className="text-lg text-gray-700 mt-2">Email: salmank.developer@gmail.com</p>
          </div>
        </div>
      </div>
      

    </div>
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
    <div className="max-w-3xl mx-auto px-4 py-8">
        
      <h1 className="text-3xl font-bold mb-6">Terms and Services</h1>

      <p className="mb-4">
        Welcome to Comfort Tissue. These terms and services outline the rules and regulations for the use of our website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By accessing this website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Comofort Tissue Paper relationship with you in relation to this website.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Use of the Site</h2>
      <p className="mb-4">
        You may use our website only for lawful purposes and in accordance with these Terms. You agree not to use the website in any way that may harm or exploit any individual or violate any applicable laws or regulations.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
      <p className="mb-4">
        Unless otherwise stated,Comfort Tissue papers  and its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. User-Generated Content</h2>
      <p className="mb-4">
        You are responsible for any content you upload, post, or otherwise transmit to or through the website. By providing content to the website, you grant COMFORT Tissue paper a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, and display such content.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law, Comfort Tissue shall not be liable for any damages of any kind arising from the use of this site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Changes to These Terms</h2>
      <p className="mb-4">
        We may revise these terms of service from time to time. The most current version will always be posted on our website. By continuing to use or access the site after any changes come into effect, you agree to be bound by the revised terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
      <p className="mb-4">
        These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about these Terms and Services, please contact us at salmank.developer@gmail.com.
      </p>
    </div>


    
    <Footer/>
    </div>
  );
}
