import React from 'react';

const FAQ = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 py-16 px-4">
      {/* Gradient background with the image */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://st2.depositphotos.com/1000423/10227/i/450/depositphotos_102278354-stock-photo-abstract-technology-background.jpg')] opacity-30 bg-cover bg-center z-0"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-200 mt-4">Find answers to some of the most common questions from our users</p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto">
          {/* Question 1 */}
          <div className="bg-white shadow-lg rounded-lg mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-teal-700">1. What is Tech News?</h2>
              <p className="text-gray-700 mt-2">
                Tech News is a blog website where you can read articles, explore different topics, and stay updated on various trends. Our mission is to provide valuable content to help you stay informed and inspired.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="bg-white shadow-lg rounded-lg mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-teal-700">2. Can I share blog posts on social media?</h2>
              <p className="text-gray-700 mt-2">
                Absolutely! We encourage our users to share blog posts with their friends and followers. You can easily share any post using the social media icons provided on each post.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="bg-white shadow-lg rounded-lg mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-teal-700">3. How can I contact customer support?</h2>
              <p className="text-gray-700 mt-2">
                If you have any questions or need assistance, you can reach out to our support team via the <strong>Contact</strong> page. We’ll get back to you as soon as possible.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="bg-white shadow-lg rounded-lg mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-teal-700">4. Do you have a mobile app?</h2>
              <p className="text-gray-700 mt-2">
                Currently, we don’t have a dedicated mobile app, but our website is fully responsive and optimized for mobile browsing. You can enjoy the full experience on your mobile device.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="bg-white shadow-lg rounded-lg mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-teal-700">5. How do I find the most popular blogs?</h2>
              <p className="text-gray-700 mt-2">
                You can find the most popular and trending blogs on our homepage. We also have a dedicated section for featured and trending posts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
