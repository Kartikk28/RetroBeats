export default async function handler(req, res) {
    const { term } = req.query;
  
    if (!term) {
      return res.status(400).json({ error: 'Search term is required' });
    }
  
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&limit=12`);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error('iTunes API error:', error);
      res.status(500).json({ error: 'Failed to fetch from iTunes' });
    }
  }
  