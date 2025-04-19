// import type { Express } from "express";
// import { createServer, type Server } from "http";
// import { storage } from "./storage";

// export async function registerRoutes(app: Express): Promise<Server> {
//   // Contact form submission endpoint
//   app.post('/api/contact', async (req, res) => {
//     try {
//       const { name, email, subject, message } = req.body;
      
//       // Validate required fields
//       if (!name || !email || !message) {
//         return res.status(400).json({ message: 'Name, email, and message are required fields' });
//       }
      
//       // Validate email format
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
//         return res.status(400).json({ message: 'Invalid email format' });
//       }
      
//       // In a real implementation, you would save this to a database or send an email
//       // For now, we'll just return a success response
//       return res.status(200).json({ message: 'Message received successfully!' });
//     } catch (error) {
//       console.error('Error sending message:', error);
//       return res.status(500).json({ message: 'Error sending message' });
//     }
//   });

//   const httpServer = createServer(app);

//   return httpServer;
// }
