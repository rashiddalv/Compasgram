export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;

      if (email === 'test@example.com' && password === 'password') {
        res.status(200).json({ message: 'Успешный вход!' });
      } else {
        res.status(401).json({ message: 'Неверные учетные данные' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  