import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaMobileAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-white text-sm pt-10 pb-4 px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
      
    {/* Quick Info */}
        <div>
          <h3 className="text-white font-bold mb-3 border-b-2 border-yellow-400 w-fit">QUICK INFO</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• UGC Notices</li>
            <li>• Events</li>
            <li>• Approvals</li>
            <li>• Institutional Membership</li>
            <li>• UGC Gallery</li>
            <li>• Testimonials</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-bold mb-3 border-b-2 border-yellow-400 w-fit">USEFUL LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• National Fee Structure</li>
            <li>• Scholarship</li>
            <li>• Academic Council</li>
            <li>• Career</li>
            <li>• Student Council Handbook</li>
            <li>• ERP</li>
            <li>• IPR/ Patents</li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h3 className="text-white font-bold mb-3 border-b-2 border-yellow-400 w-fit">INFO LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Alumni</li>
            <li>• NSS</li>
            <li>• NEP</li>
            <li>• Committees</li>
            <li>• Ombuds Person</li>
            <li>• Statutory Declaration Under Section 4(1)(b) of the RTI Act 2005 (RTI)</li>
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h3 className="text-white font-bold mb-3 border-b-2 border-yellow-400 w-fit">CONTACT US</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" /> Trimbak Road Nashik, Maharashtra, India.
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />sandipuniversity81@gmail.com
            </li>
           
            <li className="flex items-center gap-2">
              <FaMobileAlt /> +91 7386055697
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 text-white text-xl">
            <a href=" https://www.facebook.com/profile.php?id=61576593147953"><FaFacebookF /></a>
            <a href=" https://in.linkedin.com/school/sandipuniversity/"><FaLinkedinIn /></a>
            <a href="https://www.instagram.com/sandip_university25?igsh=Mmx4NTlqYnFhNjMw"><FaInstagram /></a>
            <a href=" youtube.com/channel/UCDAaVM3kH_Jk7jgSaQj5xFw"><FaYoutube /></a>
            <a href="https://x.com/sandipuniv"><FaXTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-gray-400 text-xs">
        <p>© 2025-26 Sandip University - All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms and Conditions</a>
        </div>
      </div>
    </footer>
  );
}
