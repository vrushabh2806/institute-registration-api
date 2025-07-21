const express = require('express');
const AdminController = require('../controllers/adminController');

const setAdminRoutes = (app) => {
    const adminController = new AdminController();

    app.post('/admin/boards', adminController.addBoard.bind(adminController));
    app.put('/admin/boards/:id', adminController.updateBoard.bind(adminController));
    app.get('/admin/boards', adminController.getBoards.bind(adminController));

    app.post('/admin/mediums', adminController.addMedium.bind(adminController));
    app.get('/admin/mediums', adminController.getMediums.bind(adminController));

    app.post('/admin/class-categories', adminController.addClassCategory.bind(adminController));
    app.get('/admin/class-categories', adminController.getClassCategories.bind(adminController));

    app.post('/admin/standards', adminController.addStandard.bind(adminController));
    app.get('/admin/standards', adminController.getStandards.bind(adminController));

    app.post('/admin/subjects', adminController.addSubject.bind(adminController));
    app.get('/admin/subjects', adminController.getSubjects.bind(adminController));
};

module.exports = setAdminRoutes;