import Contact from "../models/contact.model.js";

// SAVE CONTACT
export const saveContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    await Contact.create({ name, email, phone, message });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// FETCH CONTACTS (ADMIN)
export const fetchContact = async (req, res) => {
  try {
    const contact = await Contact.find().sort({ _id: -1 });

    res.status(200).json({
      success: true,
      data: contact
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
