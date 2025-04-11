const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: 'https://todo-frontend-blush-three.vercel.app'
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://ashilyannmathew2026:Ashily18@cluster0.pmb4x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Database connection error:", err));

// Routes
app.use('/api/tasks', taskRoutes);

// Test root route
app.get('/', (req, res) => {
  res.send('Todo backend is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
