import React from 'react';

const Portfolio: React.FC = () => {
    const portfolioImages = [
        '/Images/portfolio (1).jpg',
        '/Images/portfolio (2).jpg',
        '/Images/portfolio (3).jpg',
        '/Images/portfolio (4).jpg',
        '/Images/portfolio (1).PNG',
        '/Images/portfolio (1).avif',
    ];

    return (
        <div className="py-10 2xl:py-12 bg-white">
            <div className="container mx-auto text-center px-4 md:px-5">
                <h2 className="text-3xl lg:text-4xl 2xl:text-5xl font-extrabold 2xl:mb-4 text-[#ED1E3A] py-4">
                    Transforming Ideas into Digital Masterpieces
                    <br />
                    <span className="font-medium text-black">
                        Our Web Development Company Portfolio
                    </span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mx-auto">
                {portfolioImages.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden h-60 2xl:h-80">
                        <img
                            loading="lazy"
                            decoding="async"
                            className="transition-transform duration-300 transform group-hover:scale-110 object-cover"
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                left: 0,
                                top: 0,
                                right: 0,
                                bottom: 0,
                                color: 'transparent',
                            }}
                            src={image}
                            alt={`Portfolio ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4 lg:p-10"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;