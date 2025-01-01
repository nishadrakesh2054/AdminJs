// controllers/contactController.js
import Contact from "../models/contactModel.js";
// import nodemailer from "nodemailer";

// Create a new contact
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
     // Input validation (basic example)
     if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email, and message are required" });
      }
    const newContact = new Contact({ name, email, phone, message });
    const savedContact = await newContact.save();
    // Set up Nodemailer transporter (using environment variables)
    // const transporter = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // Mail options for admin notification
    // const adminMailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: process.env.ADMIN_EMAILS,
    //   subject: "New Contact Message",
    //   text: `You have a new contact message:
        
    //     Name: ${name}
    //     Email: ${email}
    //     Phone: ${phone}
    //     Message: ${message}`,
    // };

    // Mail options for client confirmation
    // const clientMailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: email, // Send to the client's email address
    //   subject: "Thank you for contacting us!",
    //   text: `Dear ${name},
        
    //     Thank you for getting in touch with us. We have received your message and will get back to you as soon as possible.
  
    //     Your Message:
    //     ${message}
  
    //     Best regards,
    //     The Team`,
    // };
   // Send emails in parallel
//    await Promise.all([
//     transporter.sendMail(adminMailOptions),
//     transporter.sendMail(clientMailOptions),
//   ]);

    res.status(201).json({
      message: "Contact created  sent successfully",
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
