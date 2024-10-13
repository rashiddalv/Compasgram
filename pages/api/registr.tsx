export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
      res.status(201).json({ message: 'Пользователь зарегистрирован!' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }