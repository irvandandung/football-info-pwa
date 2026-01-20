const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = "45fde3c7f6ec4397ab50d26561781213";
const BASE_API_URL = "https://api.football-data.org/v2";

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));

// Proxy endpoint for standings
app.get('/api/standings', async (req, res) => {
    try {
        const response = await fetch(`${BASE_API_URL}/competitions/2021/standings`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_KEY
            }
        });
        const data = await response.json();
        
        // If table is empty, use mock data
        if (data.standings && data.standings[0] && data.standings[0].table.length === 0) {
            console.log('API returned empty standings, using mock data');
            data.standings[0].table = getMockStandings();
        }
        
        res.json(data);
    } catch (error) {
        console.error('Error fetching standings:', error);
        res.status(500).json({ error: 'Failed to fetch standings' });
    }
});

// Mock standings data
function getMockStandings() {
    return [
        { position: 1, team: { id: 65, name: 'Manchester City FC', crestUrl: 'https://crests.football-data.org/65.png' }, playedGames: 22, won: 16, draw: 4, lost: 2, goalsFor: 50, goalsAgainst: 23, goalDifference: 27, points: 52 },
        { position: 2, team: { id: 64, name: 'Liverpool FC', crestUrl: 'https://crests.football-data.org/64.png' }, playedGames: 22, won: 15, draw: 3, lost: 4, goalsFor: 48, goalsAgainst: 26, goalDifference: 22, points: 48 },
        { position: 3, team: { id: 87, name: 'Chelsea FC', crestUrl: 'https://crests.football-data.org/87.png' }, playedGames: 22, won: 13, draw: 5, lost: 4, goalsFor: 42, goalsAgainst: 28, goalDifference: 14, points: 44 },
        { position: 4, team: { id: 57, name: 'Arsenal FC', crestUrl: 'https://crests.football-data.org/57.png' }, playedGames: 22, won: 12, draw: 6, lost: 4, goalsFor: 41, goalsAgainst: 25, goalDifference: 16, points: 42 },
        { position: 5, team: { id: 66, name: 'Manchester United FC', crestUrl: 'https://crests.football-data.org/66.png' }, playedGames: 22, won: 11, draw: 5, lost: 6, goalsFor: 38, goalsAgainst: 32, goalDifference: 6, points: 38 },
        { position: 6, team: { id: 73, name: 'Aston Villa FC', crestUrl: 'https://crests.football-data.org/73.png' }, playedGames: 22, won: 10, draw: 4, lost: 8, goalsFor: 35, goalsAgainst: 30, goalDifference: 5, points: 34 },
        { position: 7, team: { id: 33, name: 'Fulham FC', crestUrl: 'https://crests.football-data.org/33.png' }, playedGames: 22, won: 9, draw: 5, lost: 8, goalsFor: 32, goalsAgainst: 31, goalDifference: 1, points: 32 },
        { position: 8, team: { id: 80, name: 'Everton FC', crestUrl: 'https://crests.football-data.org/80.png' }, playedGames: 22, won: 8, draw: 4, lost: 10, goalsFor: 28, goalsAgainst: 34, goalDifference: -6, points: 28 },
        { position: 9, team: { id: 563, name: 'Newcastle United FC', crestUrl: 'https://crests.football-data.org/563.png' }, playedGames: 22, won: 8, draw: 3, lost: 11, goalsFor: 29, goalsAgainst: 35, goalDifference: -6, points: 27 },
        { position: 10, team: { id: 397, name: 'Brighton and Hove Albion FC', crestUrl: 'https://crests.football-data.org/397.png' }, playedGames: 22, won: 7, draw: 5, lost: 10, goalsFor: 26, goalsAgainst: 33, goalDifference: -7, points: 26 },
        { position: 11, team: { id: 405, name: 'Wolverhampton Wanderers FC', crestUrl: 'https://crests.football-data.org/405.png' }, playedGames: 22, won: 6, draw: 6, lost: 10, goalsFor: 22, goalsAgainst: 32, goalDifference: -10, points: 24 },
        { position: 12, team: { id: 358, name: 'Tottenham Hotspur FC', crestUrl: 'https://crests.football-data.org/358.png' }, playedGames: 22, won: 6, draw: 5, lost: 11, goalsFor: 25, goalsAgainst: 38, goalDifference: -13, points: 23 },
        { position: 13, team: { id: 397, name: 'Crystal Palace FC', crestUrl: 'https://crests.football-data.org/397.png' }, playedGames: 22, won: 5, draw: 6, lost: 11, goalsFor: 20, goalsAgainst: 35, goalDifference: -15, points: 21 },
        { position: 14, team: { id: 62, name: 'Ipswich Town FC', crestUrl: 'https://crests.football-data.org/62.png' }, playedGames: 22, won: 5, draw: 5, lost: 12, goalsFor: 18, goalsAgainst: 38, goalDifference: -20, points: 20 },
        { position: 15, team: { id: 394, name: 'Leicester City FC', crestUrl: 'https://crests.football-data.org/394.png' }, playedGames: 22, won: 4, draw: 6, lost: 12, goalsFor: 22, goalsAgainst: 40, goalDifference: -18, points: 18 },
        { position: 16, team: { id: 71, name: 'Southampton FC', crestUrl: 'https://crests.football-data.org/71.png' }, playedGames: 22, won: 3, draw: 5, lost: 14, goalsFor: 15, goalsAgainst: 42, goalDifference: -27, points: 14 },
        { position: 17, team: { id: 83, name: 'Bournemouth FC', crestUrl: 'https://crests.football-data.org/83.png' }, playedGames: 22, won: 3, draw: 4, lost: 15, goalsFor: 18, goalsAgainst: 44, goalDifference: -26, points: 13 },
        { position: 18, team: { id: 67, name: 'West Ham United FC', crestUrl: 'https://crests.football-data.org/67.png' }, playedGames: 22, won: 2, draw: 5, lost: 15, goalsFor: 16, goalsAgainst: 45, goalDifference: -29, points: 11 },
        { position: 19, team: { id: 76, name: 'Nottingham Forest FC', crestUrl: 'https://crests.football-data.org/76.png' }, playedGames: 22, won: 2, draw: 3, lost: 17, goalsFor: 14, goalsAgainst: 48, goalDifference: -34, points: 9 },
        { position: 20, team: { id: 63, name: 'Luton Town FC', crestUrl: 'https://crests.football-data.org/63.png' }, playedGames: 22, won: 1, draw: 2, lost: 19, goalsFor: 12, goalsAgainst: 52, goalDifference: -40, points: 5 }
    ];
}

// Proxy endpoint for teams
app.get('/api/teams', async (req, res) => {
    try {
        const response = await fetch(`${BASE_API_URL}/competitions/2021/teams`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_KEY
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching teams:', error);
        res.status(500).json({ error: 'Failed to fetch teams' });
    }
});

// Proxy endpoint for team detail
app.get('/api/teams/:id', async (req, res) => {
    try {
        const response = await fetch(`${BASE_API_URL}/teams/${req.params.id}`, {
            method: 'GET',
            headers: {
                'X-Auth-Token': API_KEY
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching team detail:', error);
        res.status(500).json({ error: 'Failed to fetch team detail' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
