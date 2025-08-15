import React from 'react';
import { motion } from 'framer-motion';

interface PricingItem {
    title: string;
    description: string;
    price: string;
}

const pricingData: PricingItem[] = [
    {
        title: 'Signature Glam Package',
        description: 'Experience our exclusive glam package featuring personalized consultations and luxury product selections.',
        price: '$120'
    },
    {
        title: 'Bridal Elegance Package',
        description: 'A comprehensive beauty service designed for brides, including makeup trials and day-of services.',
        price: '$250'
    },
    {
        title: 'Fashionista Makeover',
        description: 'Transform your look with our fashion-forward makeup services tailored to your style needs.',
        price: '$150'
    }
];

const FAQData = [
    {
        question: 'What types of cosmetics do you offer?',
        answer: 'We offer a curated selection of high-end cosmetics, skincare, and luxury beauty tools tailored to your needs.'
    },
    {
        question: 'Do you have any special packages for events?',
        answer: 'Yes, we provide tailored packages for events including weddings, fashion shows, and private parties.'
    },
    {
        question: 'How can I book an appointment?',
        answer: 'You can easily book an appointment through our online booking system or by contacting our luxury concierge service.'
    }
];

const PricingPage: React.FC = () => {
    return (
        <div className="bg-white text-pink-500 min-h-screen flex flex-col items-center">
            <motion.div
                className="text-4xl font-bold my-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Pricing at luxury FashionTV cosmetics
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
                {pricingData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-pink-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-2xl font-semibold">{item.title}</h2>
                        <p className="my-2">{item.description}</p>
                        <span className="text-3xl font-bold">{item.price}</span>
                    </motion.div>
                ))}
            </div>

            <div className="w-full max-w-4xl p-10">
                <motion.div
                    className="text-3xl font-bold text-center my-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className="bg-pink-50 rounded-lg p-6">
                    {FAQData.map((item, index) => (
                        <div key={index} className="border-b border-pink-200 last:border-b-0 py-4">
                            <h3 className="font-semibold">{item.question}</h3>
                            <p className="text-gray-700">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PricingPage;