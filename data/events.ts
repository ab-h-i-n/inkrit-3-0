export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  entryFee: number;
  prizePool: number;
  eventCoordinators: Coordinator[];
  staffCoordinators: Coordinator[];
  registrationLink: string;
  rules: string[];
  poster : string;
}

interface Coordinator {
  name: string;
  phone: string;
}

export const events: Event[] = [
  {
    id: "hackathon",
    title: "Hackathon",
    poster : '/posters/hackathon.jpeg',
    description:
      "Join us for an electrifying 24-hour hackathon at Inkrit 3.0! This ultimate coding marathon invites tech enthusiasts, developers, and innovators to showcase their skills, creativity, and teamwork. Over the span of 24 hours, participants will ideate, design, and develop cutting-edge solutions to real-world challenges.",
    date: "06 February 2025",
    time: "12:00 PM",
    entryFee: 400,
    prizePool: 20000,
    eventCoordinators: [
      { name: "Muhammed Suhail A M", phone: "+91 9645740035" },
      { name: "Swetha Babu", phone: "+91 9744343011" },
      { name: "Fathimath Fasmina", phone: "+91 8281228380" },
    ],
    staffCoordinators: [
      { name: "Dr. Jasir M P", phone: "+91 9746321281" },
      { name: "Dr. Leena C Sekhar", phone: " +91 9895092855" },
    ],
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfv33M2Jznp40XutIiCCzUsz1voxEb0Y9_UuZ_-kbRwKnGQ0A/viewform?usp=header",
    rules: [
      "The team can consist of two to four members.",
      "Participants will be given a set of problem statements from which they are required to select one statement and build a hardware/software prototype.",
      "Hackaton will be conducted in two rounds where in the first round participants should submit an abstract on their product and for the second round the participants are required to submit their final product along with a presentation.",
      "Participants are required to submit the abstract within the first two hours and an evaluation will be conducted on every five hour gap.",
      "There will be no shortlisting since the participants are limited to twenty teams.",
      "Mentors will be assigned for participants.",
      "Participants should bring system and resources required for the hackathon.",
      "Wifi and accommodation facilities will be provided.",
    ],
  },
  {
    id: "css-battle",
    title: "CSS Battle",
    poster : '/posters/css-battle.jpeg',
    description:
      "Get ready to unleash your CSS skills in the thrilling CSS Battle at Inkrit 3.0! Participants will face the ultimate front-end design challenge where precision and creativity collide. Your mission? Replicate given layouts as accurately as possible using only HTML and CSS.",
    date: "06 February 2025",
    time: "01:00 PM",
    entryFee: 200,
    prizePool: 5000,
    eventCoordinators: [
      { name: "Aafthab K I", phone: "+91 8129232709" },
      { name: "Fathima P A", phone: "+91 6282663299" },
    ],
    staffCoordinators: [
      { name: "Dr. Shereena V B", phone: "+91 9447045654" },
      { name: "Capt. Ibrahim Salim M", phone: "+91 9847239388" },
    ],
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfDfI8NObnIy5dI04nNzKseJBnEm5BVKNyy6liag3wGytp0_g/viewform?usp=header",
    rules: [
      "Individuals or teams of two can participate.",
      "The CSS Battle will be conducted in 3 rounds.",
      "Participants will be given multiple layouts to replicate.",
      "Devices and resources for the competition will be provided.",
      "The alloted time will be 3 hours.",
      "Winner will be selected based on time of submission and accuracy.",
    ],
  },
  {
    id: "prompting",
    title: "Prompting",
    poster : '/posters/prompting.jpeg',
    description:
      "Step into the world of creativity with the Prompting Competition at Inkrit 3.0! In this unique challenge, participants will be tasked with crafting innovative and effective prompts that will drive powerful AI-generated results. Your objective is to write clear, concise, and creative prompts that yield the most accurate, relevant, and imaginative responses from an AI.",
    date: "07 February 2025",
    time: "01:00 PM",
    entryFee: 200,
    prizePool: 5000,
    eventCoordinators: [
      { name: "Abhin K S", phone: "+91 6282826684" },
      { name: "Muhammad Nahas P S", phone: "+91 7736038034" },
    ],
    staffCoordinators: [
      { name: "Dr. Julie M David", phone: "+91 8848572176" },
      { name: "Mrs Selin M", phone: "+91 9446791297" },
    ],
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSetLrbnGYhRL6jiJ9gNeV1JqPQ33GT8R9dA5pjTjtQVRMpNuA/viewform?usp=header",
    rules: [
      "Individuals or teams of two can participate.",
      "The Prompting competition will be conducted in 3 rounds.",
      "Participants will be given multiple themes to create prompts for.",
      "Devices and resources for the competition will be provided.",
      "The alloted time will be 3 hours.",
      "Winner will be selected based on time of submission and accuracy.",
    ],
  },
  {
    id: "debugging",
    title: "Debugging",
    poster : '/posters/debugging.jpeg',
    description:
      "Gear up for the ultimate test of your problem-solving and debugging skills with the Debugging Competition at Inkrit 3.0! In this high-stakes challenge, participants will be given code with intentional bugs, errors, or inefficiencies. Your task is to identify and fix these issues as quickly as possible to ensure the code runs smoothly.",
    date: "06 February 2025",
    time: "10:00 AM",
    entryFee: 200,
    prizePool: 5000,
    eventCoordinators: [
      { name: "Kadeeja Shameer", phone: "+91 8129030978" },
      { name: "Safa Mariyam E V", phone: "+91 9895344188" },
    ],
    staffCoordinators: [
      { name: "Mr. Joseph Deril K S", phone: "+91 8281656561" },
      { name: "Dr. Munavar Jasim K", phone: "+91 9745701880" },
    ],
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdqio6FUV4bZFso1a42UWGuGZ_dOORwGH-sw_i8SDChdr8T6A/viewform?usp=header",
      rules : [
        "Individuals or a team of two can participate.",
        "Competition will be conducted in 2 rounds:",
        "  Round 1: Participants will be given an algorithm with jumbled steps. [30mins]",
        "  Round 2: Participants will be given an advanced level program to debug. The data structure used in the program will be mentioned. [1hr]",
        "The evaluation will be based on the time of submission as well as the correctness of the code.",
        "Electronic gadgets including laptops are not allowed inside the competition venue."
      ],
  },
  {
    id: "escape-room",
    title: "Escape room",
    poster : '/posters/escape-room.jpeg',
    description:
      "Get ready for a mind-bending challenge with the Escape Room Coding Competition at Inkrit 3.0! In this unique twist on the classic escape room, participants must crack codes, solve coding challenges, and uncover hidden hints to unlock the next level. Each puzzle will test your coding skills, problem-solving ability, and creativity as you work against the clock to uncover clues and ultimately escape.",
    date: "07 February 2025",
    time: "10:00 AM",
    entryFee: 200,
    prizePool: 5000,
    eventCoordinators: [
      { name: "Afsal V N", phone: "+91 7034075452" },
      { name: "Raashid V Z", phone: "+91 7591931355" },
    ],
    staffCoordinators: [
      { name: "Dr. Jaseena K U", phone: "+91 9847080148" },
      { name: "Dr. Bismin V Sherif", phone: "+91 9947978666" },
    ],
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScszr0fJMslIhQOREp_IEoOUhckqjucW4Lcr_LbCplHOz_58w/viewform?usp=header",
    rules: [
      "Individuals or teams of up to four can participate.",
      "The Escape Room Coding Competition will be conducted in multiple rounds.",
      "Participants must crack codes and solve puzzles to uncover hidden hints.",
      "Devices and resources for the competition will be provided.",
      "The allotted time will be 3 hours.",
      "Evaluation will be based on the speed of completing tasks and the accuracy of solutions.",
      "The team that uncovers all hints and escapes first wins the competition.",
      "The second prize will be awarded to the team with the second-fastest escape time.",
    ],
  },
];
