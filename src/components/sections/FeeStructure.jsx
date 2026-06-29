import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { getWhatsAppLink } from '../../utils/whatsapp';

const FeeStructure = () => {
  const feeData = [
    {
      group: "Pre-Primary",
      classes: "Nursery - UKG",
      monthlyFee: "₹800",
      admissionFee: "₹1000",
      activityFee: "₹1000",
      color: "border-pink-200 hover:border-pink-500",
      bg: "bg-pink-50 text-pink-700",
      features: ["Nursery", "LKG", "UKG"]
    },
    {
      group: "Primary",
      classes: "Class I - IV",
      monthlyFee: "₹1100 - ₹1250",
      admissionFee: "₹1200",
      activityFee: "Included",
      color: "border-blue-200 hover:border-[#0D47A1]",
      bg: "bg-blue-50 text-[#0D47A1]",
      features: ["Class I: ₹1100/mo", "Class II: ₹1150/mo", "Class III: ₹1200/mo", "Class IV: ₹1250/mo"]
    },
    {
      group: "Middle & High",
      classes: "Class V - X",
      monthlyFee: "₹1300 - ₹1800",
      admissionFee: "₹1400 - ₹4000",
      activityFee: "Included",
      color: "border-amber-200 hover:border-[#F4B400]",
      bg: "bg-amber-50 text-amber-700",
      features: [
        "Class V: ₹1300/mo", 
        "Class VI: ₹1350/mo", 
        "Class VII: ₹1400/mo (Adm: ₹1400)", 
        "Class VIII: ₹1450/mo (Adm: ₹4000)",
        "Class IX: ₹1700/mo (Adm: ₹4000)",
        "Class X: ₹1800/mo (Adm: ₹4000)"
      ]
    }
  ];

  return (
    <section id="fees" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Transparent Pricing"
          title="Fee Structure"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {feeData.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl border-2 transition-all duration-300 shadow-sm hover:shadow-xl p-8 flex flex-col ${tier.color}`}
            >
              <div className="mb-6">
                <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${tier.bg}`}>
                  {tier.classes}
                </span>
                <h3 className="text-2xl font-outfit font-bold text-[#1E293B]">{tier.group}</h3>
                <div className="mt-4 flex items-baseline text-[#0D47A1]">
                  <span className="text-4xl font-extrabold tracking-tight">{tier.monthlyFee}</span>
                  <span className="text-gray-500 ml-1 font-medium">/mo</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Admission Fee</span>
                  <span className="font-semibold text-[#1E293B]">{tier.admissionFee}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Activity Fee</span>
                  <span className="font-semibold text-[#1E293B]">{tier.activityFee}</span>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Class wise breakdown</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button as="a" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant={index === 1 ? 'primary' : 'secondary'} className="w-full">
                Apply Now
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button as="a" href="#" variant="glass" className="!bg-gray-100 !text-gray-700 !border-gray-200 hover:!bg-gray-200">
            <Download className="w-4 h-4 mr-2" /> Download Complete Fee PDF
          </Button>
          <p className="text-sm text-gray-500 mt-4">* Fee structure is subject to change as per school management decisions.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeeStructure;
