import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim === ''
    ) {
      res.status(422).json({ message: 'Invalid input :( ' });
      return;
    }

    // Store it in db

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    let client;

    const connectionStr = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.5pdti.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionStr);
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Could not connect to the database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection(process.env.mongodb_collection)
        .insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: err });
      return;
    }

    client.close();

    res.status(201).json({
      message: 'Successfully stored the message!',
      message: newMessage,
    });
  }
}

export default handler;
