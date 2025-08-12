import React from "react";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your image URL or local import
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    image:
      "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Carol Lee",
    role: "Product Manager",
    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Kim",
    role: "UX Designer",
    image:
      "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        Welcome to our website! We are passionate about delivering high-quality solutions that help our users succeed.
      </p>
      <p className="mb-4 text-lg leading-relaxed text-gray-700">
        Our team is composed of experienced professionals dedicated to innovation, excellence, and customer satisfaction.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-gray-700">
        Whether you're looking for great products, helpful resources, or outstanding support, we're here to assist you every step of the way.
      </p>

      <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
            />
            <h3 className="text-xl font-medium">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;