// api/portfolio.js
import { get } from '@vercel/edge-config';

export default async function handler(req, res) {
    try {
        const portfolio = await get('portfolio');
        res.status(200).json(portfolio ?? {});
    } catch (error) {
        res.status(500).json({ error: 'Failed to load portfolio data' });
    }
}