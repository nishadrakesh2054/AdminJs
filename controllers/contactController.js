// controllers/contactController.js
import Contact from "../models/contactModel.js";
import nodemailer from "nodemailer";

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newContact = new Contact({ name, email, phone, message });
    const savedContact = await newContact.save();
    // Set up Nodemailer transporter (using environment variables)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options for admin notification
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: "New Contact Message",
      text: `You have a new contact message:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}`,
    };

    // Mail options for client confirmation
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send to the client's email address
      subject: "Thank you for contacting us!",
      text: `Dear ${name},
        
        Thank you for getting in touch with us. We have received your message and will get back to you as soon as possible.
  
        Your Message:
        ${message}
  
        Best regards,
        The Team`,
    };
    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to the client
    await transporter.sendMail(clientMailOptions);

    res.status(201).json({
      message: "Contact created successfully",
      contact: savedContact,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating contact", error });
  }
};

// Get all contacts
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching contacts", error });
  }
};

// Delete a contact
export const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contact", error });
  }
};
