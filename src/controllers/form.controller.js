const { Form } = require('../Form/form.entity');

// Create Form
const createForm = async (req, res) => {
    try {
        const { name , surname , brandName, serviceType , phone , email } = req.body;
        const newForm = new Form({ name , surname , brandName, serviceType , phone , email });
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Form
const getAllForm = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createForm , getAllForm };
