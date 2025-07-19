import { Check, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-viral-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-xl font-black">Viral Mattress</span>
                <div className="bg-viral-blue rounded-full p-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <Zap className="w-5 h-5" />
              </div>
              <span className="font-bold">Brand™</span>
            </div>
            <p className="text-gray-400 text-sm">
              The mattress that's breaking the internet, one sleep at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">The Mattress</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sizes & Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Materials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow the Viral</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">TikTok 📱</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Instagram 📸</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter 🐦</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube 🎥</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Viral Mattress Brand™. All rights reserved. Made with 💤 and lots of caffeine.</p>
          <p className="mt-2">
            *Individual results may vary. Viral status not guaranteed. Please sleep responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;