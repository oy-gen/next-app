import { promises } from 'fs';

async function getDatabase() {
  const content = await promises.readFile('database.json', 'utf-8');
  const data = JSON.parse(content);
  // console.log(data);
  return data;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await getDatabase();

    const newItem = req.body;
    data.collection.push(newItem);

    promises.writeFile('database.json', JSON.stringify(data, null, 4));
    res.status(201).json(newItem);
    return;
  }
  res.status(403).json({ message: 'Error: request method not allowed.' });
}
