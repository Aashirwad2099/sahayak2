require('dotenv').config({ path: './backend_new/.env' });
const mongoose = require('mongoose');
const Skill = require('../Model/Skill');
const connectDB = require('../config/db');

const skills = [
  { name: 'driving', category: ['2w', '3w', '4w'], color: '#3b82f6' },
  { name: 'cooking', category: ['baker', 'chef'], color: '#f59e42' },
  { name: 'mechanic', category: ['2w', '3w', '4w'], color: '#6366f1' },
  { name: 'waiter', color: '#10b981' },
  { name: 'vehicle_cleaning', color: '#f472b6' },
  { name: 'cleaning', color: '#a3e635' },
  { name: 'bartending', color: '#fbbf24' },
  { name: 'dishwashing', color: '#818cf8' },
  { name: 'laundry', color: '#f87171' },
  { name: 'gardening', color: '#22d3ee' },
  { name: 'plumbing', color: '#0ea5e9' },
  { name: 'carpentering', color: '#facc15' },
  { name: 'painting', color: '#a21caf' },
  { name: 'electric_work', color: '#f43f5e' },
  { name: 'electronic_repair', category: ['laptop', 'computer', 'mobile', 'speaker', 'mic'], color: '#14b8a6' },
  { name: 'security_guards', color: '#64748b' },
  { name: 'warehouse_works', color: '#f59e42' },
  { name: 'constructor_labour', color: '#b91c1c' },
];

const seedSkills = async () => {
  await connectDB(); // Use the shared connection function

  try {
    console.log('Clearing existing skills...');
    await Skill.deleteMany({});
    console.log('Existing skills cleared.');

    console.log('Seeding skills...');
    await Skill.insertMany(skills);
    console.log('Skills seeded successfully!');
  } catch (error) {
    console.error('Error seeding skills:', error);
  } finally {
    mongoose.connection.close();
  }
};

seedSkills();