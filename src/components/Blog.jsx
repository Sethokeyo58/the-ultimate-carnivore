import React, { useState } from "react";

const guidesData = [
  {
    id: 1,
    title: "Introduction to the Carnivore Diet",
    image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Learn the basics of the carnivore diet and how it works.",
    fullDesc:
      "The carnivore diet is one of the most radical approaches to nutrition, built around a simple principle: eat only animal-based foods while cutting out plants entirely. At its core, the diet emphasizes meat, fish, eggs, and some dairy products. Supporters argue that this way of eating aligns with the human evolutionary diet, reducing exposure to plant toxins and allergens while providing highly bioavailable nutrients. Beginners are often surprised at how satiating and straightforward the plan can be—there's no calorie counting, no carb tracking, and minimal food variety to overwhelm you. The benefits often reported include fat loss, stable energy, improved digestion, and clearer thinking. Still, it's not without controversy. Critics raise questions about long-term sustainability, potential nutrient gaps, and effects on cholesterol. This guide introduces the fundamentals, the scientific debates, and what you can realistically expect if you consider trying the carnivore diet for yourself. It's a foundation to help you weigh the pros and cons before committing fully."
  },
  {
    id: 2,
    title: "Health Benefits of Carnivore Diet",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Explore the potential health benefits reported by carnivore dieters.",
    fullDesc:
      "Many people turn to the carnivore diet in search of relief from chronic health issues, and countless testimonials highlight dramatic improvements. Reported benefits include reduced inflammation, fewer digestive problems, and significant fat loss without the hunger usually associated with dieting. Some individuals experience clearer skin, better sleep, and relief from autoimmune flare-ups. One possible explanation is the elimination of plant-based irritants, lectins, and fiber, which can aggravate sensitive digestive systems. Others suggest the diet's simplicity helps people adhere more consistently compared to complex meal plans. Mental clarity and mood improvements are also common, with some dieters reporting reduced anxiety and more stable energy. While more research is needed to confirm these claims, early anecdotal evidence is promising. This guide reviews potential mechanisms, shares personal stories, and addresses the scientific discussions surrounding the carnivore diet's benefits. Whether your goal is weight management, mental health, or overall wellness, this diet may hold surprising potential."
  },
  {
    id: 3,
    title: "Carnivore Diet Meal Planning",
    image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "How to plan your meals effectively on a carnivore diet.",
    fullDesc:
      "Meal planning is a crucial part of thriving on the carnivore diet. Without grains, fruits, or vegetables, variety comes from exploring different cuts of meat, organ meats, fish, and dairy if tolerated. Beginners often underestimate the importance of balancing fat and protein. Too much lean meat may leave you fatigued, while the right balance of fatty cuts like ribeye or pork belly provides steady energy. Many followers also incorporate eggs, liver, and bone broth to cover nutrient needs. Meal timing is flexible, with some choosing two hearty meals a day while others thrive on one large meal. Planning ahead ensures you have the right foods stocked and prevents lapses into carb-heavy convenience meals. Batch cooking—such as preparing roasts, smoked meats, or boiled eggs—can save time. This guide helps you structure your weekly meals, build shopping lists, and avoid common pitfalls like under-eating fat or neglecting nutrient-dense organ meats. Proper planning is the key to long-term success."
  },
  {
    id: 4,
    title: "Common Mistakes on Carnivore Diet",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Avoid these common pitfalls when starting the carnivore diet.",
    fullDesc:
      "The carnivore diet may sound simple—just eat animal foods—but beginners often fall into avoidable traps that slow progress. One of the biggest mistakes is not eating enough fat. Many start by focusing only on lean cuts like chicken breast or sirloin, which leads to fatigue and cravings. Another common error is neglecting electrolytes, as cutting out plant foods means lower potassium and magnesium intake. Drinking bone broth or supplementing can prevent headaches and fatigue. Some people also give up too quickly, expecting instant results. The body often needs weeks to adjust from carb-fueled metabolism to fat adaptation. Overeating dairy or processed meats can also stall progress. This guide highlights these pitfalls and provides practical tips to avoid them. Success on the carnivore diet isn't about perfection—it's about understanding your body, staying consistent, and making small adjustments. With the right knowledge, you can bypass frustration and maximize the benefits of this lifestyle."
  },
  {
    id: 5,
    title: "Carnivore Diet for Beginners",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Step-by-step guide for those new to the carnivore lifestyle.",
    fullDesc:
      "If you're brand new to the carnivore diet, starting can feel intimidating. The good news is that it's simpler than almost any other eating plan. Step one is to choose your protein staples—beef, chicken, pork, fish, and eggs. Step two is to embrace fat as your friend, because without carbs, fat becomes your main energy source. Ribeye steaks, salmon, and ground beef with higher fat ratios are ideal. Step three is to cut out all plant-based foods—no bread, no vegetables, no fruit, and no grains. It may sound drastic, but removing carbs helps stabilize blood sugar and cravings. Step four is to listen to your body and eat until satisfied—don't obsess over portion control at first. Beginners should also drink plenty of water, salt food generously, and consider electrolytes to ease the transition. This guide provides a roadmap for your first 30 days, including sample meals, shopping lists, and motivation tips. By keeping it simple, you'll build momentum and confidence."
  },
  {
    id: 6,
    title: "Carnivore Diet and Exercise",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "How to combine the carnivore diet with your fitness routine.",
    fullDesc:
      "Many athletes and fitness enthusiasts wonder how the carnivore diet pairs with exercise. Surprisingly, it can support both strength training and endurance activities when managed correctly. Protein from animal foods provides the building blocks for muscle repair and growth, while fat offers a steady energy source. Some people experience an initial drop in performance during the adaptation phase, but energy and stamina often improve after a few weeks. For strength training, fatty cuts like ribeye and eggs deliver both protein and energy. Endurance athletes may find benefits in stable energy without blood sugar crashes. Timing meals around workouts can be helpful—some prefer eating a hearty meal beforehand, while others train fasted. Electrolyte balance is crucial, especially for those sweating heavily. This guide explores practical strategies for fueling workouts, recovery meals, and adjustments for different training styles. Whether you lift weights, run, or just want general fitness, the carnivore diet can be adapted to support your goals."
  },
  {
    id: 7,
    title: "Carnivore Diet and Mental Health",
    image: "https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "The impact of carnivore diet on mood and cognitive function.",
    fullDesc:
      "One of the most fascinating aspects of the carnivore diet is its reported impact on mental health. Many people describe experiencing reduced anxiety, fewer mood swings, and improved concentration after eliminating plant-based foods. Some even report relief from conditions like depression or ADHD. While the scientific evidence is still limited, possible explanations include more stable blood sugar, reduced inflammation, and increased intake of amino acids that support neurotransmitters. For example, high-protein foods provide tryptophan and tyrosine, which influence serotonin and dopamine production. Additionally, eliminating foods that can irritate the gut may improve the gut-brain connection, further supporting mood stability. This guide explores stories from real people, early research findings, and practical tips for those curious about the mental health effects of carnivore eating. While it may not be a cure-all, the potential link between diet and mood is worth exploring, especially for those who haven't found relief through conventional approaches."
  },
  {
    id: 8,
    title: "Carnivore Diet FAQs",
    image: "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Answers to frequently asked questions about the carnivore diet.",
    fullDesc:
      "The carnivore diet sparks a lot of curiosity, and newcomers usually have plenty of questions. One of the most common is: how do you get fiber? Advocates argue that fiber isn't essential and that the gut can adapt well without it. Another question is whether it's safe long-term. While some thrive for years, research is still limited, so caution and regular health monitoring are recommended. People also ask if it's expensive. The answer depends—ribeye every day can be costly, but ground beef, eggs, and chicken are budget-friendly. Social challenges also come up: dining out, family meals, and holidays require flexibility and planning. Nutrient deficiencies are another concern, but organ meats, seafood, and eggs cover many needs. This guide tackles these FAQs with practical answers, debunking myths and providing balanced insights. If you're considering carnivore, these FAQs will help you feel prepared and confident as you start your journey."
  },
  {
    id: 9,
    title: "Carnivore Diet Recipes",
    image: "https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "Delicious and easy recipes for carnivore diet followers.",
    fullDesc:
      "The carnivore diet doesn't have to be boring. With a little creativity, you can enjoy a wide variety of meals while sticking to animal-based ingredients. Popular staples include ribeye steaks, roasted chicken thighs, pork belly, and salmon fillets. Beyond basics, you can explore recipes like slow-cooked beef brisket, homemade bone broth, and even carnivore-friendly burgers made with ground beef and cheese. Organ meats like liver and heart can be seasoned and seared to add variety and essential nutrients. Eggs can be prepared countless ways—scrambled, boiled, or even baked into crustless quiches with cheese. Some followers experiment with seasoning lightly, while others stick to just salt and pepper for purity. This guide includes ideas for breakfast, lunch, dinner, and snacks, making meal time enjoyable. By rotating different meats and cooking methods—grilling, roasting, pan-frying—you'll prevent monotony and stay satisfied. Carnivore cooking can be simple, satisfying, and surprisingly flavorful when approached with creativity."
  },
  {
    id: 10,
    title: "Transitioning Off the Carnivore Diet",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
    shortDesc: "How to safely reintroduce foods after a carnivore diet phase.",
    fullDesc:
      "Some people follow the carnivore diet as a reset phase and eventually decide to reintroduce other foods. Transitioning requires strategy to avoid digestive upset or undoing progress. The key is to reintroduce foods slowly and one at a time. Start with cooked, low-fiber vegetables like zucchini or squash to test tolerance. Fruits can follow, focusing on low-sugar options like berries. Whole grains and legumes may be more challenging, so they're best introduced later. Pay close attention to your body's responses—bloating, skin changes, or energy dips may signal an issue. Keeping a food journal during this phase can help track patterns. Some people find they only tolerate certain plant foods while thriving best on mostly animal products. Others successfully shift back to a balanced omnivorous diet. This guide helps you design a transition plan tailored to your goals, ensuring you preserve the benefits you gained from carnivore while expanding your food options safely."
  }
];

export default function CarnivoreDietGuides() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-10 text-center mt-6 text-gray-900">
        Carnivore Diet Guides & Blog
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {guidesData.map(({ id, title, image, shortDesc, fullDesc }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                {expandedId === id ? fullDesc : shortDesc}
              </p>
            </div>
            <button
              onClick={() => toggleReadMore(id)}
              className="self-start text-cyan-600 hover:text-cyan-800 font-semibold focus:outline-none mt-2"
              aria-expanded={expandedId === id}
              aria-controls={`guide-desc-${id}`}
            >
              {expandedId === id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}