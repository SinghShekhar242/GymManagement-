const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendance');
const Member = require('../models/member');

// GET all attendance records
router.get('/', async (req, res) => {
    try {
        const records = await Attendance.find().populate('gymId', 'name');
        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET attendance records for a specific member using gymId
router.get('/:gymId', async (req, res) => {
    try {

        const records = await Attendance.find({ gymId: req.params.gymId });
        res.json(records);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST Check-In (Mark attendance entry)
router.post('/checkin', async (req, res) => {
    const { gymId } = req.body;

    try {
        const member = await Member.findOne({ gymId });
        if (!member) {
            return res.status(404).json({ message: "Invalid Gym ID" });
        }

        const existingRecord = await Attendance.findOne({ gymId, checkOut: null });

        if (existingRecord) {
            return res.status(400).json({ message: "Already checked in. Please check out first." });
        }

        const newEntry = new Attendance({ gymId, checkIn: new Date() });
        await newEntry.save();

        const responsePayload = {
            ...newEntry.toObject(),
            memberName: member.name,
            membershipExpiry: member.expiryDate
        };

        res.status(201).json(responsePayload);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// POST Check-Out (Mark exit time)
router.post('/checkout', async (req, res) => {
    const { gymId } = req.body;

    try {
        const record = await Attendance.findOne({ gymId, checkOut: null }).sort({ checkIn: -1 });

        if (!record) {
            return res.status(400).json({ message: "No active check-in found. Please check in first." });
        }

        record.checkOut = new Date();
        await record.save();

        res.status(200).json(record);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
