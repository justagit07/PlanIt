import User from '../model/userschema.js'
import bcrypt from 'bcrypt';            // Import bcrypt for password hashing

// Function to store a new user in the database
export const storeUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with success, omitting the password
    res.status(201).json({
      message: 'User created successfully!',
      user: {
        username: newUser.username,
        email: newUser.email,
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};