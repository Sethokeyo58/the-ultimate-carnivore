import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* About Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to the Carnivore Project, your trusted resource for everything related to the carnivore diet. Our mission is to provide accurate, science-backed information and practical guidance to help you embrace a lifestyle centered around animal-based nutrition. Whether you’re new to the carnivore diet or a seasoned enthusiast, we’re here to support your journey toward better health, vitality, and well-being.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          At Carnivore Project, we believe in the power of simplicity—focusing on nutrient-dense animal foods to optimize physical and mental performance. Our content is carefully curated to empower you with recipes, tips, research updates, and personal stories that inspire transformation.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl text-center font-semibold mb-8 text-gray-900">
          Meet Our Team
        </h2>
        <div className="flex flex-col md:flex-row gap-10">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Jane Doe"
              className="w-36 h-36 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-medium text-gray-900">Real Andrews</h3>
            <p className="text-gray-600 mt-1">
              Nutrition Specialist
            </p>
            <p className="mt-2 text-gray-700 max-w-xs">
              Andrews is a certified nutritionist with over 10 years of experience helping clients achieve optimal health through targeted dietary approaches. Her expertise and research drive much of our content’s scientific foundation.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://via.placeholder.com/150"
              alt="John Smith"
              className="w-36 h-36 rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-medium text-gray-900">John Smith</h3>
            <p className="text-gray-600 mt-1">
              Content Creator & Community Manager
            </p>
            <p className="mt-2 text-gray-700 max-w-xs">
              John combines his passion for writing and community engagement to create accessible, engaging articles and manage our interactive platforms. He’s committed to fostering a supportive environment for all carnivore diet followers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;