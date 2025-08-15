import React, { useState } from "react";

const TeamMember = ({ img, name, role, description }) => {
  const [expanded, setExpanded] = useState(false);

  // Show only first ~50 words when not expanded
  const shortText = description.split(" ").slice(0, 50).join(" ") + "...";

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center w-full md:w-1/2 transition-transform transform hover:scale-105">
      <img
        src={img}
        alt={name}
        className="w-36 h-36 rounded-full object-cover mb-4 shadow-md"
      />
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600 mt-1">
        <em>{role}</em>
      </p>
      <p className="mt-3 text-gray-700">
        {expanded ? description : shortText}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-blue-600 hover:underline"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* About Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to The Ultimate Carnivore, your trusted resource for everything
          related to the carnivore diet. Our mission is to provide accurate,
          science-backed information and practical guidance to help you embrace
          a lifestyle centered around animal-based nutrition. Whether you’re
          new to the carnivore diet or a seasoned enthusiast, we’re here to
          support your journey toward better health, vitality, and well-being.
        </p>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          At The Ultimate Carnivore, we believe in the power of simplicity—focusing
          on nutrient-dense animal foods to optimize physical and mental
          performance. Our content is carefully curated to empower you with
          recipes, tips, research updates, and personal stories that inspire
          transformation.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-16 w-full">
        <h2 className="text-3xl text-center font-semibold mb-8 text-gray-900">
          Meet Our Team
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <TeamMember
            img="src/assets/Real Andrews..jpg"
            name="Real Andrews"
            role="Nutrition Specialist"
            description="Andrews is a certified nutritionist with over 10 years of experience helping clients achieve optimal health through targeted dietary approaches. He is a forward-thinking nutrition specialist passionate about unlocking the body’s full potential through personalized, science-driven dietary guidance. With a deep appreciation for the carnivore diet, Real crafts innovative nutrition plans that emphasize nutrient density and metabolic balance. His approach blends cutting-edge research with practical lifestyle adjustments tailored to each individual’s needs. Known for simplifying complex nutritional concepts, Real inspires clients to adopt sustainable habits that enhance energy, mental clarity, and vitality."
          />
          <TeamMember
            img="src/assets/Michelle.PNG"
            name="Michelle Viscuso"
            role="Fitness Expert and Nutritionist"
            description="Michelle Viscuso is a dedicated fitness expert and nutritionist at The Ultimate Carnivore, specializing in optimizing health through animal-based nutrition. With a deep passion for empowering individuals to achieve their fitness goals, Michelle combines scientific knowledge with practical experience to create effective, sustainable wellness plans. She advocates for the carnivore diet's potential benefits, emphasizing its role in enhancing physical performance, mental clarity, and overall vitality. Michelle’s holistic approach integrates personalized fitness routines with specialized nutrition guidance, ensuring her clients receive comprehensive support."
          />
        </div>
      </section>
    </div>
  );
};

export default About;
