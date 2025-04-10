import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const industries = [
    { name: "eCommerce", icon: "shopping-cart" },
    { name: "Fintech", icon: "credit-card" },
    { name: "Healthcare", icon: "heartbeat" },
    { name: "Education", icon: "graduation-cap" },
    { name: "Social Networking", icon: "users" },
    { name: "Hospitality", icon: "hotel" },
    { name: "Entertainment", icon: "film" },
    { name: "Government", icon: "university" },
    { name: "Real Estate", icon: "building" },
    { name: "Business", icon: "briefcase" },
    { name: "Logistics", icon: "truck" },
    { name: "Tech & IT", icon: "laptop" },
    { name: "Non-Profit", icon: "hands-helping" },
    { name: "Automotive", icon: "car" },
    { name: "Travel & Tourism", icon: "plane" },
    { name: "AI", icon: "robot" },
];

const IndustrySection: React.FC = () => {
    return (
        <section className="bg-gray-700">
            <div className="2xl:py-12 py-10 w-full mx-auto flex flex-col items-center">
                <div className="text-center">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
                        Delivering Versatile Web Solutions for <span className="text-red-600"> Diverse Industries</span>
                    </h3>
                    <p className="2xl:text-lg lg:text-base text-sm text-gray-400 leading-7 mb-8">
                    As a leading web development company, we provide innovative web solutions to clients across a wide range of industries worldwide.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 border rounded-lg bg-white hover:bg-red-600 text-[#e24156] transition-transform duration-300 hover:text-white hover:scale-105"
                        >
                            <div className="2xl:text-5xl text-4xl mb-4">
                                <i className={`fas fa-${industry.icon}`}></i>
                            </div>
                            <p className="2xl:text-lg lg:text-base text-sm font-medium">{industry.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;