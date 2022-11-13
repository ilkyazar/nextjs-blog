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
    try {
      client = await MongoClient.connect(
        'mongodb+srv://x:xxx@cluster0.5pdti.mongodb.net/nextjs-blog?retryWrites=true&w=majority'
      );
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Could not connect to the database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db
        .collection('messages')
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
