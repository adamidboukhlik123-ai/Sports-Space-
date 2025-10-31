"use client";

import { useState } from "react";

type TrainingPlan = {
  id: string;
  name: string;
  category: string;
  duration: string;
  level: string;
  description: string;
  goals: string[];
};

const trainingPlans: TrainingPlan[] = [
  {
    id: "1",
    name: "Beginner Strength Builder",
    category: "Strength",
    duration: "8 weeks",
    level: "Beginner",
    description: "Build foundational strength with compound movements and progressive overload.",
    goals: ["Build muscle", "Increase strength", "Learn proper form"]
  },
  {
    id: "2",
    name: "Advanced Powerlifting",
    category: "Strength",
    duration: "12 weeks",
    level: "Advanced",
    description: "Maximize your squat, bench press, and deadlift with periodized training.",
    goals: ["Increase max lifts", "Competition prep", "Peak strength"]
  },
  {
    id: "3",
    name: "Cardio Endurance",
    category: "Cardio",
    duration: "6 weeks",
    level: "Intermediate",
    description: "Improve cardiovascular fitness and stamina through varied cardio workouts.",
    goals: ["Improve endurance", "Heart health", "Fat loss"]
  },
  {
    id: "4",
    name: "Marathon Training",
    category: "Cardio",
    duration: "16 weeks",
    level: "Advanced",
    description: "Complete marathon preparation with progressive mileage and recovery protocols.",
    goals: ["Complete marathon", "Build endurance", "Prevent injury"]
  },
  {
    id: "5",
    name: "Flexibility & Mobility",
    category: "Flexibility",
    duration: "4 weeks",
    level: "Beginner",
    description: "Enhance range of motion and reduce injury risk with daily stretching routines.",
    goals: ["Increase flexibility", "Reduce pain", "Better movement"]
  },
  {
    id: "6",
    name: "HIIT Fat Burner",
    category: "HIIT",
    duration: "6 weeks",
    level: "Intermediate",
    description: "High-intensity interval training for maximum calorie burn and metabolic boost.",
    goals: ["Fat loss", "Improve fitness", "Time efficient"]
  },
  {
    id: "7",
    name: "Athletic Performance",
    category: "Sports-Specific",
    duration: "10 weeks",
    level: "Advanced",
    description: "Sport-specific training to enhance speed, agility, and explosive power.",
    goals: ["Improve performance", "Increase speed", "Build power"]
  },
  {
    id: "8",
    name: "Bodyweight Mastery",
    category: "Calisthenics",
    duration: "8 weeks",
    level: "Intermediate",
    description: "Master bodyweight exercises from push-ups to muscle-ups and handstands.",
    goals: ["Build strength", "Learn skills", "No equipment needed"]
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");
  const [selectedPlan, setSelectedPlan] = useState<TrainingPlan | null>(null);

  const categories = ["All", "Strength", "Cardio", "Flexibility", "HIIT", "Sports-Specific", "Calisthenics"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const filteredPlans = trainingPlans.filter(plan => {
    const categoryMatch = selectedCategory === "All" || plan.category === selectedCategory;
    const levelMatch = selectedLevel === "All" || plan.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sports Space
          </h1>
          <p className="mt-2 text-gray-600">Find your perfect training plan without effort</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Discover Your Perfect Training Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're a beginner or an advanced athlete, we have the perfect training plan tailored to your goals and fitness level.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Training Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Fitness Level
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedLevel === level
                        ? "bg-purple-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Training Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPlans.map(plan => (
            <div
              key={plan.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
              onClick={() => setSelectedPlan(plan)}
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {plan.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{plan.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="font-semibold">Duration:</span> {plan.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-semibold">Type:</span> {plan.category}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No training plans match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPlan.name}</h2>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {selectedPlan.level}
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      {selectedPlan.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Duration</h3>
                  <p className="text-gray-600">{selectedPlan.duration}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedPlan.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Training Goals</h3>
                  <ul className="space-y-2">
                    {selectedPlan.goals.map((goal, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg">
                  Start This Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            © 2025 Sports Space. Find your training plan without effort.
          </p>
        </div>
      </footer>
    </div>
  );
}
