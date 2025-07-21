const Board = require('../models/board');
const Medium = require('../models/medium');
const ClassCategory = require('../models/classCategory');
const Standard = require('../models/standard');
const Subject = require('../models/subject');

class AdminController {
    async addBoard(req, res) {
        try {
            const { name } = req.body;
            const board = new Board({ name });
            await board.save();
            res.status(201).json(board);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add board' });
        }
    }

    async updateBoard(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const board = await Board.findByIdAndUpdate(id, { name }, { new: true });
            res.json(board);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update board' });
        }
    }

    async getBoards(req, res) {
        try {
            const boards = await Board.find();
            res.json(boards);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get boards' });
        }
    }

    async addMedium(req, res) {
        try {
            const { name } = req.body;
            const medium = new Medium({ name });
            await medium.save();
            res.status(201).json(medium);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add medium' });
        }
    }

    async updateMedium(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const medium = await Medium.findByIdAndUpdate(id, { name }, { new: true });
            res.json(medium);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update medium' });
        }
    }

    async getMediums(req, res) {
        try {
            const mediums = await Medium.find();
            res.json(mediums);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get mediums' });
        }
    }

    async addClassCategory(req, res) {
        try {
            const { name } = req.body;
            const classCategory = new ClassCategory({ name });
            await classCategory.save();
            res.status(201).json(classCategory);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add class category' });
        }
    }

    async updateClassCategory(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;
            const classCategory = await ClassCategory.findByIdAndUpdate(id, { name }, { new: true });
            res.json(classCategory);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update class category' });
        }
    }

    async getClassCategories(req, res) {
        try {
            const categories = await ClassCategory.find();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get class categories' });
        }
    }

    async addStandard(req, res) {
        try {
            const { name, classCategory } = req.body;
            const standard = new Standard({ name, classCategory });
            await standard.save();
            res.status(201).json(standard);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add standard' });
        }
    }

    async updateStandard(req, res) {
        try {
            const { id } = req.params;
            const { name, classCategory } = req.body;
            const standard = await Standard.findByIdAndUpdate(id, { name, classCategory }, { new: true });
            res.json(standard);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update standard' });
        }
    }

    async getStandards(req, res) {
        try {
            const standards = await Standard.find();
            res.json(standards);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get standards' });
        }
    }

    async addSubject(req, res) {
        try {
            const { name, standard } = req.body;
            const subject = new Subject({ name, standard });
            await subject.save();
            res.status(201).json(subject);
        } catch (error) {
            res.status(500).json({ error: 'Failed to add subject' });
        }
    }

    async updateSubject(req, res) {
        try {
            const { id } = req.params;
            const { name, standard } = req.body;
            const subject = await Subject.findByIdAndUpdate(id, { name, standard }, { new: true });
            res.json(subject);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update subject' });
        }
    }

    async getSubjects(req, res) {
        try {
            const subjects = await Subject.find();
            res.json(subjects);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get subjects' });
        }
    }
}

module.exports = AdminController;