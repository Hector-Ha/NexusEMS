require("dotenv").config({ path: "env.env" });
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const staffSchema = new mongoose.Schema(
  {
    FirstName: { type: String, required: true, trim: true },
    LastName: { type: String, required: true, trim: true },
    Age: { type: Number, required: true, min: [20, "Age must be at least 20"], max: [70, "Age must not exceed 70"] },
    DateOfJoining: { type: Date, required: true },
    Title: { type: String, required: true, enum: ["Employee", "Manager", "Director", "VP"] },
    Department: { type: String, required: true, enum: ["IT", "Marketing", "HR", "Engineering"] },
    EmployeeType: { type: String, required: true, enum: ["FullTime", "PartTime", "Contract", "Seasonal"] },
    CurrentStatus: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);

async function emsConnect() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });
    console.log("Connected to MongoDB server");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit if connection fails
  }
}

// Return a query object instead of executing it
function dbListStaff() {
  return Staff.find({});
}

async function dbAddStaff(staff) {
  const newStaff = new Staff({ ...staff, DateOfJoining: new Date(staff.DateOfJoining) });
  await newStaff.save();
  return newStaff;
}

async function dbGetStaffById(id) {
  return await Staff.findById(id).lean();
}

async function dbUpdateStaff(id, update) {
  return await Staff.findByIdAndUpdate(id, update, { new: true, lean: true });
}

async function dbDeleteStaff(id) {
  const staff = await Staff.findById(id);
  if (!staff) return false;
  if (staff.CurrentStatus) {
    throw new Error("CAN’T DELETE EMPLOYEE – STATUS ACTIVE");
  }
  const result = await Staff.findByIdAndDelete(id);
  return !!result;
}

module.exports = { emsConnect, dbListStaff, dbAddStaff, dbGetStaffById, dbUpdateStaff, dbDeleteStaff };