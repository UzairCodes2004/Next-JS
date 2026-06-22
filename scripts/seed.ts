/**
 * scripts/seed.ts
 *
 * Seeds the MongoDB database with exactly 3 users.
 *
 * Run once:
 *   npx tsx scripts/seed.ts
 *
 * The script uses dotenv to load .env so MONGO_URI is available
 * outside the Next.js runtime.
 */

import mongoose from 'mongoose';
import { config } from 'dotenv';
import path from 'path';

// Load .env from project root
config({ path: path.resolve(process.cwd(), '.env') });

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌  MONGO_URI is not defined in .env');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Inline schema (avoids hot-reload guard issues outside Next.js runtime)
// ---------------------------------------------------------------------------
const UserSchema = new mongoose.Schema(
  {
    name:  { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

const User =
  (mongoose.models.User as mongoose.Model<mongoose.Document>) ||
  mongoose.model('User', UserSchema);

// ---------------------------------------------------------------------------
// Seed data — exactly 3 users
// ---------------------------------------------------------------------------
const SEED_USERS = [
  { name: 'Uzair Khan',   email: 'uzair@example.com'  },
  { name: 'Sara Ahmed',   email: 'sara@example.com'   },
  { name: 'Babar Malik',  email: 'babar@example.com'  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function seed() {
  console.log('🔗  Connecting to MongoDB...');
  await mongoose.connect(MONGO_URI as string, { bufferCommands: false });
  console.log('✅  Connected.');

  // Wipe existing users so the seed is idempotent
  await User.deleteMany({});
  console.log('🗑   Cleared existing users.');

  const inserted = await User.insertMany(SEED_USERS);
  console.log(`🌱  Seeded ${inserted.length} users:`);
  inserted.forEach((u: any) =>
    console.log(`    • ${u.name} <${u.email}>`)
  );

  await mongoose.disconnect();
  console.log('🔌  Disconnected. Done!');
}

seed().catch((err) => {
  console.error('❌  Seed failed:', err);
  mongoose.disconnect();
  process.exit(1);
});
