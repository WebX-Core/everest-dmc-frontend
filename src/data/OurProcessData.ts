export interface ProcessStep {
  title: string;
  description: string;
}

const process: ProcessStep[] = [
  {
    title: "Initial Consultation",
    description:
      "We begin by understanding your clients' preferences, interests, and travel goals to tailor the perfect itinerary.",
  },
  {
    title: "Custom Itinerary Design",
    description:
      "Our experts craft personalized programs—whether for leisure, adventure, cultural exploration, or MICE—based on your requirements.",
  },
  {
    title: "Logistics Planning & Coordination",
    description:
      "We handle all ground logistics including transportation, accommodation, permits, and local guides with precision and care.",
  },
  {
    title: "On-Ground Operations",
    description:
      "Our experienced local team ensures seamless execution, offering real-time support and flexibility throughout the journey.",
  },
  {
    title: "24/7 Client Support",
    description:
      "We stay connected around the clock to manage any changes, emergencies, or special requests with efficiency and empathy.",
  },
  {
    title: "Post-Trip Feedback & Follow-Up",
    description:
      "We value every experience. After the trip, we collect feedback to improve future services and maintain long-term partnerships.",
  },
];

export default process;
