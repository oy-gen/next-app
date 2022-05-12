import CharacterModel from '../../../models/Character';
import dbConnect from '../../../lib/dbConnect';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const newItem = await CharacterModel.create(
        req.body
      ); /* create a new model in the database */
      res.status(201).json({ success: true, data: newItem });
    } catch (error) {
      res.status(400).json({ success: false });
    }

    return;
  }
  res.status(403).json({ message: 'Error: request method not allowed.' });
}

// import { promises } from 'fs';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try
//     const data = await getDatabase();

//     const newItem = req.body;
//     data.collection.push(newItem);

//     promises.writeFile('database.json', JSON.stringify(data, null, 4));
//     res.status(201).json(newItem);
//     return;
//   }
//   res.status(403).json({ message: 'Error: request method not allowed.' });
// }
