export const familyMembers = [
  {
    id: "m1",
    name: "Robert Johnson",
    role: "Dad",
    age: 42,
    bloodType: "O+",
    allergies: ["Penicillin"],
    conditions: ["Hypertension", "Type 2 Diabetes"],
    status: "warning", // healthy | warning | critical
    avatar: "https://i.pravatar.cc/150?u=robert",
  },
  {
    id: "m2",
    name: "Sarah Johnson",
    role: "Mom",
    age: 39,
    bloodType: "A+",
    allergies: ["None"],
    conditions: [],
    status: "healthy",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: "m3",
    name: "Emma Johnson",
    role: "Daughter",
    age: 12,
    bloodType: "A+",
    allergies: ["Peanuts"],
    conditions: ["Asthma (mild)"],
    status: "healthy",
    avatar: "https://i.pravatar.cc/150?u=emma",
  },
  {
    id: "m4",
    name: "George Johnson",
    role: "Grandpa",
    age: 68,
    bloodType: "B+",
    allergies: ["Sulfa drugs"],
    conditions: ["Arthritis", "Heart Disease"],
    status: "critical",
    avatar: "https://i.pravatar.cc/150?u=george",
  },
];

export const vitalsData = {
  // Generate 30 days of mock data
  history: Array.from({ length: 30 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toISOString().split("T")[0],
      m1_health: 70 + Math.random() * 15,
      m2_health: 85 + Math.random() * 10,
      m3_health: 90 + Math.random() * 8,
      m4_health: 50 + Math.random() * 20,
      m1_bp: 130 + Math.random() * 15,
      m4_bp: 145 + Math.random() * 20,
    };
  }),
};

export const medications = [
  {
    id: "med1",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Daily",
    time: "Morning",
    memberId: "m1",
    startDate: "2023-01-15",
    endDate: "Ongoing",
    refillDays: 12,
    doctor: "Dr. Smith",
    status: "taken", // taken | pending | missed
  },
  {
    id: "med2",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    time: "Morning, Evening",
    memberId: "m1",
    startDate: "2023-03-20",
    endDate: "Ongoing",
    refillDays: 25,
    doctor: "Dr. Smith",
    status: "pending",
  },
  {
    id: "med3",
    name: "Salbutamol Inhaler",
    dosage: "100mcg",
    frequency: "As needed",
    time: "Any",
    memberId: "m3",
    startDate: "2022-05-10",
    endDate: "Ongoing",
    refillDays: null,
    doctor: "Dr. Adams",
    status: "pending",
  },
  {
    id: "med4",
    name: "Aspirin",
    dosage: "75mg",
    frequency: "Daily",
    time: "Morning",
    memberId: "m4",
    startDate: "2020-11-05",
    endDate: "Ongoing",
    refillDays: 5,
    doctor: "Dr. Lee",
    status: "taken",
  },
  {
    id: "med5",
    name: "Atorvastatin",
    dosage: "20mg",
    frequency: "Nightly",
    time: "Bedtime",
    memberId: "m4",
    startDate: "2021-02-15",
    endDate: "Ongoing",
    refillDays: 18,
    doctor: "Dr. Lee",
    status: "pending",
  },
];

export const appointments = [
  {
    id: "apt1",
    memberId: "m4",
    doctor: "Dr. Lee",
    specialty: "Cardiology",
    date: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
    type: "In-person",
    location: "Heart Care Clinic, Building B",
    status: "confirmed",
  },
  {
    id: "apt2",
    memberId: "m3",
    doctor: "Dr. Adams",
    specialty: "Pediatrics",
    date: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString(),
    type: "In-person",
    location: "Children's Health Center",
    status: "confirmed",
  },
  {
    id: "apt3",
    memberId: "m1",
    doctor: "Dr. Smith",
    specialty: "Endocrinology",
    date: new Date(new Date().setDate(new Date().getDate() + 3)).toISOString(),
    type: "Telemedicine",
    location: "Online Video Call",
    status: "pending",
  },
];

export const recentActivity = [
  {
    id: "act1",
    type: "medication",
    description: "Grandpa took Aspirin 75mg",
    time: "2 hours ago",
    icon: "Pill",
    color: "green",
  },
  {
    id: "act2",
    type: "vitals",
    description: "Dad logged Blood Pressure: 135/85",
    time: "4 hours ago",
    icon: "Activity",
    color: "yellow",
  },
  {
    id: "act3",
    type: "appointment",
    description: "Scheduled checkup for Emma",
    time: "Yesterday",
    icon: "Calendar",
    color: "blue",
  },
];

export const documents = [
  {
    id: "doc1",
    name: "Cardiology_Report_George.pdf",
    type: "Lab Report",
    date: "2023-09-15",
    doctor: "Dr. Lee",
    memberId: "m4",
    size: "2.4 MB"
  },
  {
    id: "doc2",
    name: "Asthma_Action_Plan_Emma.pdf",
    type: "Prescription",
    date: "2023-05-10",
    doctor: "Dr. Adams",
    memberId: "m3",
    size: "1.1 MB"
  },
  {
    id: "doc3",
    name: "Blood_Work_Results_Robert.pdf",
    type: "Lab Report",
    date: "2023-10-02",
    doctor: "Dr. Smith",
    memberId: "m1",
    size: "3.5 MB"
  }
];
