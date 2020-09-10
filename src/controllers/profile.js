const profileModel = require('../models/profile');
const helper = require('../helpers/response');

const talent = {
  getPortofolio: async (req, res) => {
    const id = req.body.user_id;
    try {
      const result = await profileModel.talent.getPortofolio(id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  },
  getWorkExperience: async (req, res) => {
    const id = req.body.user_id;
    try {
      const result = await profileModel.talent.getWorkExperience(id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  },
  updateSocialMedia: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    try {
      const result = await profileModel.talent.updateSocialMedia(data, id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  },
  updateWorkExperience: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    data.image = req.file ? req.file.filename : 'company.jpg';
    try {
      const result = await profileModel.talent.updateWorkExperience(data, id);
      return helper.response(res, 'success', result, 201);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  },
  updatePortofolio: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    data.image = req.file ? req.file.filename : 'portofolio.jpg';
    try {
      const result = await profileModel.talent.updatePortofolio(data, id);
      return helper.response(res, 'success', result, 201);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  },
  updateGeneralInfo: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    data.image = req.file ? req.file.filename : 'talent.jpg';
    try {
      const result = await profileModel.talent.updateGeneralInfo(data, id);
      return helper.response(res, 'success', result, 201);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  },
}

const hiring_partner = {
  updateSocialMedia: async (req, res) => {
    const id = req.body.user_id;
    const data = req.body;
    try {
      const result = await profileModel.hiring_partner.updateSocialMedia(data, id);
      return helper.response(res, 'success', result, 200);
    } catch (err) {
      console.log(err);
      return helper.response(res, 'failed', 'Something error', 500);
    }
  }
}

module.exports = {
  talent,
  hiring_partner
}