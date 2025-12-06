// Данные матчей
const matchesData = [
    {
        id: 1,
        homeTeam: 1, // ID команды
        awayTeam: 2,
        date: "2025-12-10T19:00:00",
        status: "finished",
        homeScore: 4,
        awayScore: 2,
        venue: "Pumpkin Arena"
    },
    {
        id: 2,
        homeTeam: 3,
        awayTeam: 4,
        date: "2025-12-11T20:30:00",
        status: "finished",
        homeScore: 3,
        awayScore: 5,
        venue: "Watermelon Stadium"
    },
    {
        id: 3,
        homeTeam: 5,
        awayTeam: 6,
        date: "2025-12-12T18:00:00",
        status: "scheduled",
        venue: "Neutral Ground"
    },
    {
        id: 4,
        homeTeam: 2,
        awayTeam: 3,
        date: "2025-12-13T19:15:00",
        status: "scheduled",
        venue: "Pumpkin Arena"
    },
    {
        id: 5,
        homeTeam: 4,
        awayTeam: 1,
        date: "2025-12-14T20:00:00",
        status: "scheduled",
        venue: "Watermelon Stadium"
    },
    {
        id: 6,
        homeTeam: 6,
        awayTeam: 5,
        date: "2025-12-15T17:30:00",
        status: "scheduled",
        venue: "Neutral Ground"
    }
];

// Данные команд
const teamsData = [
    {
        id: 1,
        name: "Pumpkin Pirates",
        logo: "/assets/logos/walled_robots.png",
        city: "location",
        coach: "name",
        founded: 2015,
        conference: "Тыквенная",
        games: 24,
        wins: 18,
        losses: 4,
        points: 38,
        goalsFor: 124,
        goalsAgainst: 67,
        players: [
            { number: 10, name: "The_P3rch3k", position: "Нападающий", games: 24, goals: 18, assists: 12, points: 30, penalties: 8, plusMinus: 15, avatar: "/assets/players/gthxbr.png" },
            { number: 7, name: "name", position: "Защитник", games: 24, goals: 3, assists: 8, points: 11, penalties: 12, plusMinus: 8 },
            { number: 29, name: "name", position: "Нападающий", games: 22, goals: 12, assists: 9, points: 21, penalties: 6, plusMinus: 10 },
            { number: 1, name: "name", position: "Вратарь", games: 24, goals: 0, assists: 0, points: 0, penalties: 2, plusMinus: 0 },
            { number: 5, name: "name", position: "Защитник", games: 24, goals: 2, assists: 6, points: 8, penalties: 10, plusMinus: 5 }
        ]
    },
    {
        id: 2,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048380.png",
        city: "location",
        coach: "name",
        founded: 2016,
        conference: "Арбузная",
        games: 24,
        wins: 16,
        losses: 6,
        points: 34,
        goalsFor: 98,
        goalsAgainst: 72,
        players: [
            { number: 9, name: "name", position: "Нападающий", games: 24, goals: 15, assists: 10, points: 25, penalties: 4, plusMinus: 12 },
            { number: 24, name: "name", position: "Защитник", games: 24, goals: 1, assists: 7, points: 8, penalties: 14, plusMinus: 6 },
            { number: 17, name: "name", position: "Нападающий", games: 23, goals: 11, assists: 8, points: 19, penalties: 8, plusMinus: 9 },
            { number: 30, name: "name", position: "Вратарь", games: 24, goals: 0, assists: 0, points: 0, penalties: 0, plusMinus: 0 },
            { number: 4, name: "name", position: "Защитник", games: 24, goals: 4, assists: 5, points: 9, penalties: 16, plusMinus: 7 }
        ]
    },
    {
        id: 3,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048368.png",
        city: "location",
        coach: "name",
        founded: 2014,
        conference: "Тыквенная",
        games: 24,
        wins: 14,
        losses: 8,
        points: 30,
        goalsFor: 89,
        goalsAgainst: 75,
        players: [
            { number: 13, name: "name", position: "Нападающий", games: 24, goals: 14, assists: 11, points: 25, penalties: 6, plusMinus: 11 },
            { number: 27, name: "name", position: "Защитник", games: 24, goals: 2, assists: 9, points: 11, penalties: 18, plusMinus: 8 },
            { number: 11, name: "name", position: "Нападающий", games: 21, goals: 9, assists: 7, points: 16, penalties: 10, plusMinus: 7 },
            { number: 35, name: "name", position: "Вратарь", games: 24, goals: 0, assists: 0, points: 0, penalties: 4, plusMinus: 0 },
            { number: 6, name: "name", position: "Защитник", games: 24, goals: 3, assists: 4, points: 7, penalties: 12, plusMinus: 4 }
        ]
    },
    {
        id: 4,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048375.png",
        city: "location",
        coach: "name",
        founded: 2017,
        conference: "Арбузная",
        games: 24,
        wins: 12,
        losses: 10,
        points: 26,
        goalsFor: 82,
        goalsAgainst: 79,
        players: [
            { number: 21, name: "name", position: "Нападающий", games: 24, goals: 13, assists: 9, points: 22, penalties: 8, plusMinus: 9 },
            { number: 2, name: "name", position: "Защитник", games: 24, goals: 1, assists: 6, points: 7, penalties: 20, plusMinus: 5 },
            { number: 19, name: "name", position: "Нападающий", games: 20, goals: 8, assists: 6, points: 14, penalties: 12, plusMinus: 6 },
            { number: 31, name: "name", position: "Вратарь", games: 24, goals: 0, assists: 0, points: 0, penalties: 2, plusMinus: 0 },
            { number: 8, name: "name", position: "Защитник", games: 24, goals: 2, assists: 5, points: 7, penalties: 14, plusMinus: 3 }
        ]
    },
    {
        id: 5,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048378.png",
        city: "location",
        coach: "name",
        founded: 2018,
        conference: "Тыквенная",
        games: 24,
        wins: 11,
        losses: 11,
        points: 24,
        goalsFor: 76,
        goalsAgainst: 81,
        players: [
            { number: 77, name: "name", position: "Нападающий", games: 24, goals: 12, assists: 8, points: 20, penalties: 10, plusMinus: 8 },
            { number: 3, name: "name", position: "Защитник", games: 24, goals: 1, assists: 5, points: 6, penalties: 16, plusMinus: 4 },
            { number: 14, name: "name", position: "Нападающий", games: 19, goals: 7, assists: 5, points: 12, penalties: 14, plusMinus: 5 },
            { number: 33, name: "name", position: "Вратарь", games: 24, goals: 0, assists: 0, points: 0, penalties: 6, plusMinus: 0 },
            { number: 22, name: "name", position: "Защитник", games: 24, goals: 3, assists: 4, points: 7, penalties: 18, plusMinus: 2 }
        ]
    },
    {
        id: 6,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048370.png",
        city: "location",
        coach: "name",
        founded: 2019,
        conference: "Арбузная",
        games: 24,
        wins: 9,
        losses: 13,
        points: 20,
        goalsFor: 68,
        goalsAgainst: 85,
        players: [
            { number: 18, name: "name", position: "Нападающий", games: 24, goals: 10, assists: 7, points: 17, penalties: 12, plusMinus: 6 },
            { number: 12, name: "name", position: "Защитник", games: 24, goals: 1, assists: 4, points: 5, penalties: 22, plusMinus: 3 },
            { number: 25, name: "name", position: "Нападающий", games: 18, goals: 6, assists: 4, points: 10, penalties: 16, plusMinus: 4 },
            { number: 40, name: "name", position: "Вратарь", games: 24, goals: 0, assists: 0, points: 0, penalties: 8, plusMinus: 0 },
            { number: 15, name: "name", position: "Защитник", games: 24, goals: 2, assists: 3, points: 5, penalties: 20, plusMinus: 1 }
        ]
    }
];

// Генерация карточек команд
function generateTeamCards() {
    // Разделяем команды по конференциям
    const pumpkinTeams = teamsData.filter(team => team.conference === "Тыквенная");
    const watermelonTeams = teamsData.filter(team => team.conference === "Арбузная");

    // Функция для создания карточек команд в контейнере
    function createTeamCards(teams, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        teams.forEach(team => {
            const card = document.createElement('div');
            card.className = 'team-card';
            card.dataset.id = team.id;

            card.innerHTML = `
                <div class="team-logo-container">
                    <img src="${team.logo}" alt="${team.name}" class="team-logo">
                </div>
                <div class="team-info">
                    <h3 class="team-name">${team.name}</h3>
                    <div class="team-meta">
                        <span><i class="fas fa-map-marker-alt"></i> ${team.city}</span>
                        <span><i class="fas fa-trophy"></i> ${team.conference}</span>
                    </div>
                    <div class="team-stats">
                        <div class="stat-item">
                            <span class="stat-label">Игры</span>
                            <span class="stat-value">${team.games}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Победы</span>
                            <span class="stat-value">${team.wins}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Очки</span>
                            <span class="stat-value">${team.points}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-label">Забито</span>
                            <span class="stat-value">${team.goalsFor}</span>
                        </div>
                    </div>
                    <button class="view-team-btn" data-id="${team.id}">Подробнее</button>
                </div>
            `;

            container.appendChild(card);
        });
    }

    // Создаем карточки для каждой конференции
    createTeamCards(pumpkinTeams, 'pumpkinTeamsContainer');
    createTeamCards(watermelonTeams, 'watermelonTeamsContainer');

    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.view-team-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const teamId = parseInt(this.dataset.id);
            openTeamModal(teamId);
        });
    });

    // Добавляем обработчики событий для карточек
    document.querySelectorAll('.team-card').forEach(card => {
        card.addEventListener('click', function() {
            const teamId = parseInt(this.dataset.id);
            openTeamModal(teamId);
        });
    });
}

// Открытие модального окна с информацией о команде
function openTeamModal(teamId) {
    const team = teamsData.find(t => t.id === teamId);
    if (!team) return;

    // Заполняем данные в модальном окне
    document.getElementById('modalLogo').src = team.logo;
    document.getElementById('modalTeamName').textContent = team.name;
    document.getElementById('statPoints').textContent = team.points;
    document.getElementById('statGames').textContent = team.games;
    document.getElementById('statWins').textContent = team.wins;
    document.getElementById('statLosses').textContent = team.losses;
    document.getElementById('statGoalsFor').textContent = team.goalsFor;
    document.getElementById('statGoalsAgainst').textContent = team.goalsAgainst;

    // Заполняем список игроков
    const playersList = document.getElementById('playersList');
    playersList.innerHTML = '';

    team.players.forEach(player => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
            <div class="player-number">${player.number}</div>
            <div>
                <div class="player-name">${player.name}</div>
                <div style="color: #aaa; font-size: 14px;">${player.position}</div>
            </div>
        `;
        playersList.appendChild(playerItem);
    });

    // Устанавливаем ссылку на полную страницу команды
    document.getElementById('fullTeamLink').href = `team.html?id=${team.id}`;

    // Показываем модальное окно
    document.getElementById('teamModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeTeamModal() {
    document.getElementById('teamModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Генерация карточек игроков для страницы команды
function generatePlayerCards(teamId) {
    const container = document.getElementById('playersContainer');
    if (!container) return;

    const team = teamsData.find(t => t.id === teamId);
    if (!team) return;

    container.innerHTML = '';

    team.players.forEach(player => {
        const card = document.createElement('div');
        card.className = 'player-card';
        card.dataset.playerId = player.number;
        card.dataset.teamId = teamId;

        card.innerHTML = `
            <div class="player-avatar">
                ${player.avatar ? `<img src="${player.avatar}" alt="${player.name}" class="player-image">` : ''}
            </div>
            <div class="player-info">
                <div class="player-name-header">
                    <h3 class="player-name">${player.name}</h3>
                    <div class="player-number">${player.number}</div>
                </div>
                <div class="player-position">${player.position}</div>
                <div class="player-stats-preview">
                    <div class="stat-preview">
                        <span class="stat-label">Игры</span>
                        <span class="stat-value">${player.games}</span>
                    </div>
                    <div class="stat-preview">
                        <span class="stat-label">Очки</span>
                        <span class="stat-value">${player.points}</span>
                    </div>
                </div>
                <button class="view-player-btn" data-player-id="${player.number}" data-team-id="${teamId}">Подробнее</button>
            </div>
        `;

        container.appendChild(card);
    });

    // Добавляем обработчики событий для кнопок
    document.querySelectorAll('.view-player-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const playerId = parseInt(this.dataset.playerId);
            const teamId = parseInt(this.dataset.teamId);
            openPlayerModal(teamId, playerId);
        });
    });

    // Добавляем обработчики событий для карточек
    document.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('click', function() {
            const playerId = parseInt(this.dataset.playerId);
            const teamId = parseInt(this.dataset.teamId);
            openPlayerModal(teamId, playerId);
        });
    });
}

// Загрузка информации о команде
function loadTeamInfo(teamId) {
    const team = teamsData.find(t => t.id === teamId);
    if (!team) return;

    // Основная информация о команде
    document.getElementById('teamLogo').src = team.logo;
    document.getElementById('teamName').textContent = team.name;
    document.getElementById('teamCity').textContent = `Город: ${team.city}`;
    document.getElementById('teamFounded').textContent = `Основана: ${team.founded}`;
    document.getElementById('teamCoach').textContent = `Тренер: ${team.coach}`;

    // Статистика команды
    document.getElementById('teamGames').textContent = team.games;
    document.getElementById('teamWins').textContent = team.wins;
    document.getElementById('teamLosses').textContent = team.losses;
    document.getElementById('teamPoints').textContent = team.points;
    document.getElementById('teamGoalsFor').textContent = team.goalsFor;
    document.getElementById('teamGoalsAgainst').textContent = team.goalsAgainst;

    // Расчетная статистика
    const goalDiff = team.goalsFor - team.goalsAgainst;
    const winPercentage = team.games > 0 ? ((team.wins / team.games) * 100).toFixed(1) : 0;

    const goalDiffElement = document.getElementById('teamGoalDiff');
    goalDiffElement.textContent = (goalDiff > 0 ? '+' : '') + goalDiff;

    // Удаляем предыдущие классы окрашивания
    goalDiffElement.classList.remove('positive', 'negative');

    // Добавляем класс в зависимости от значения
    if (goalDiff > 0) {
        goalDiffElement.classList.add('positive');
    } else if (goalDiff < 0) {
        goalDiffElement.classList.add('negative');
    }

    document.getElementById('teamWinPercentage').textContent = winPercentage + '%';
}

// Открытие модального окна с информацией об игроке
function openPlayerModal(teamId, playerNumber) {
    const team = teamsData.find(t => t.id === teamId);
    if (!team) return;

    const player = team.players.find(p => p.number === playerNumber);
    if (!player) return;

    // Заполняем данные в модальном окне
    document.getElementById('modalPlayerNumber').textContent = player.number;
    document.getElementById('modalPlayerName').textContent = player.name;
    document.getElementById('modalPlayerPosition').textContent = player.position;
    document.getElementById('statGames').textContent = player.games;
    document.getElementById('statGoals').textContent = player.goals;
    document.getElementById('statAssists').textContent = player.assists;
    document.getElementById('statPoints').textContent = player.points;
    document.getElementById('statPenalties').textContent = player.penalties;
    document.getElementById('statPlusMinus').textContent = (player.plusMinus > 0 ? '+' : '') + player.plusMinus;

    // Устанавливаем ссылку на полную страницу игрока
    document.getElementById('fullPlayerLink').href = `player.html?id=${player.number}&team=${teamId}`;

    // Показываем модальное окно
    document.getElementById('playerModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна игрока
function closePlayerModal() {
    document.getElementById('playerModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Генерация таблиц матчей
function generateMatches() {
    const upcomingBody = document.getElementById('upcomingMatchesBody');
    const finishedBody = document.getElementById('finishedMatchesBody');

    if (!upcomingBody || !finishedBody) return;

    upcomingBody.innerHTML = '';
    finishedBody.innerHTML = '';

    matchesData.forEach(match => {
        const homeTeam = teamsData.find(team => team.id === match.homeTeam);
        const awayTeam = teamsData.find(team => team.id === match.awayTeam);

        if (!homeTeam || !awayTeam) return;

        const matchDate = new Date(match.date);
        const now = new Date();

        const row = document.createElement('tr');
        row.className = 'match-row';
        row.dataset.id = match.id;
        row.style.cursor = 'pointer';

        if (match.status === 'finished') {
            // Завершенный матч
            row.innerHTML = `
                <td class="date">${matchDate.toLocaleDateString('ru-RU')}</td>
                <td class="home-team">
                    <div class="team-cell">
                        <img src="${homeTeam.logo}" alt="${homeTeam.name}" class="table-team-logo">
                        <span>${homeTeam.name}</span>
                    </div>
                </td>
                <td class="score finished">${match.homeScore} - ${match.awayScore}</td>
                <td class="away-team">
                    <div class="team-cell">
                        <img src="${awayTeam.logo}" alt="${awayTeam.name}" class="table-team-logo">
                        <span>${awayTeam.name}</span>
                    </div>
                </td>
                <td class="venue">${match.venue}</td>
            `;
            finishedBody.appendChild(row);
        } else {
            // Предстоящий матч
            const timeString = matchDate.toLocaleTimeString('ru-RU', {
                hour: '2-digit',
                minute: '2-digit'
            });

            row.innerHTML = `
                <td class="date">${matchDate.toLocaleDateString('ru-RU')}</td>
                <td class="time">${timeString}</td>
                <td class="home-team">
                    <div class="team-cell">
                        <span>${homeTeam.name}</span>
                        <img src="${homeTeam.logo}" alt="${homeTeam.name}" class="table-team-logo">
                    </div>
                </td>
                <td class="score">VS</td>
                <td class="away-team">
                    <div class="team-cell">
                        <img src="${awayTeam.logo}" alt="${awayTeam.name}" class="table-team-logo">
                        <span>${awayTeam.name}</span>
                    </div>
                </td>
                <td class="venue">${match.venue}</td>
            `;
            upcomingBody.appendChild(row);
        }
    });

    // Добавляем обработчики событий для строк матчей
    document.querySelectorAll('.match-row').forEach(row => {
        row.addEventListener('click', function() {
            const matchId = parseInt(this.dataset.id);
            openMatchModal(matchId);
        });
    });
}

// Открытие модального окна с деталями матча
function openMatchModal(matchId) {
    const match = matchesData.find(m => m.id === matchId);
    if (!match) return;

    const homeTeam = teamsData.find(team => team.id === match.homeTeam);
    const awayTeam = teamsData.find(team => team.id === match.awayTeam);

    if (!homeTeam || !awayTeam) return;

    // Заполняем данные в модальном окне
    document.getElementById('modalHomeLogo').src = homeTeam.logo;
    document.getElementById('modalAwayLogo').src = awayTeam.logo;

    const matchDate = new Date(match.date);
    let scoreDisplay = 'VS';
    let statusText = 'Запланирован';
    let scoreElement = document.getElementById('modalScore');

    // Сбрасываем классы
    scoreElement.classList.remove('finished', 'live');

    if (match.status === 'finished') {
        scoreDisplay = `${match.homeScore} - ${match.awayScore}`;
        scoreElement.classList.add('finished');
        statusText = 'Завершен';
    } else if (matchDate < new Date()) {
        scoreDisplay = 'LIVE';
        scoreElement.classList.add('live');
        statusText = 'Идет игра';
    } else {
        statusText = 'Запланирован';
    }

    scoreElement.textContent = scoreDisplay;
    document.getElementById('modalStatus').textContent = statusText;

    document.getElementById('modalMatchTitle').textContent = `${homeTeam.name} vs ${awayTeam.name}`;

    document.getElementById('modalDate').textContent = matchDate.toLocaleString('ru-RU', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    });

    document.getElementById('modalVenue').textContent = match.venue;

    // Заполняем названия команд
    document.getElementById('modalHomeName').textContent = homeTeam.name;
    document.getElementById('modalAwayName').textContent = awayTeam.name;

    // Показываем модальное окно
    document.getElementById('matchModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}


// Закрытие модального окна матча
function closeMatchModal() {
    document.getElementById('matchModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Получение параметров URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Генерация рейтинга команд по конференциям
function generateStandings() {
    const pumpkinConference = teamsData.filter(team => team.conference === "Тыквенная")
        .sort((a, b) => b.points - a.points || b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst));

    const watermelonConference = teamsData.filter(team => team.conference === "Арбузная")
        .sort((a, b) => b.points - a.points || b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst));

    // Тыквенная конференция
    const pumpkinContainer = document.getElementById('pumpkinStandings');
    if (pumpkinContainer) {
        pumpkinContainer.innerHTML = '';
        pumpkinConference.forEach((team, index) => {
            const row = document.createElement('tr');
            row.className = 'standing-row';
            row.innerHTML = `
                <td class="position">${index + 1}</td>
                <td class="logo"><img src="${team.logo}" alt="${team.name}" class="standing-logo"></td>
<td class="team-name">${team.name}</td>
                <td class="games">${team.games}</td>
                <td class="wins">${team.wins}</td>
                <td class="losses">${team.losses}</td>
                <td class="points">${team.points}</td>
                <td class="goal-diff ${team.goalsFor - team.goalsAgainst > 0 ? 'positive' : (team.goalsFor - team.goalsAgainst < 0 ? 'negative' : '')}">${team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}${team.goalsFor - team.goalsAgainst}</td>
            `;
            pumpkinContainer.appendChild(row);
        });
    }

    // Арбузная конференция
    const watermelonContainer = document.getElementById('watermelonStandings');
    if (watermelonContainer) {
        watermelonContainer.innerHTML = '';
        watermelonConference.forEach((team, index) => {
            const row = document.createElement('tr');
            row.className = 'standing-row';
            row.innerHTML = `
                <td class="position">${index + 1}</td>
                <td class="logo"><img src="${team.logo}" alt="${team.name}" class="standing-logo"></td>
<td class="team-name">${team.name}</td>
                <td class="games">${team.games}</td>
                <td class="wins">${team.wins}</td>
                <td class="losses">${team.losses}</td>
                <td class="points">${team.points}</td>
                <td class="goal-diff ${team.goalsFor - team.goalsAgainst > 0 ? 'positive' : (team.goalsFor - team.goalsAgainst < 0 ? 'negative' : '')}">${team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}${team.goalsFor - team.goalsAgainst}</td>
            `;
            watermelonContainer.appendChild(row);
        });
    }
}

// Функция для добавления классов hero-btn primary ко всем кнопкам с текстом
function applyHeroBtnToTextButtons() {
    // Находим все элементы button с текстом
    document.querySelectorAll('button').forEach(btn => {
        // Проверяем, что кнопка содержит текст (не только значки)
        const textContent = btn.textContent.trim();
        if (textContent.length > 0 && !btn.classList.contains('close-modal')) {
            btn.classList.add('hero-btn', 'primary');
        }
    });

    // Находим все элементы a, которые выступают как кнопки и содержат текст
    document.querySelectorAll('a.button, a.btn, a.hero-btn, a.btn-full-team, a.btn-full-player').forEach(linkBtn => {
        const textContent = linkBtn.textContent.trim();
        if (textContent.length > 0) {
            linkBtn.classList.add('hero-btn', 'primary');
        }
    });

    // Дополнительно ищем кнопки "Подробнее" которые генерируются динамически
    document.querySelectorAll('.view-team-btn, .view-player-btn').forEach(btn => {
        if (!btn.classList.contains('hero-btn')) {
            btn.classList.add('hero-btn', 'primary');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация функциональности матчей
    if (document.getElementById('upcomingMatchesTable') || document.getElementById('finishedMatchesTable')) {
        generateMatches();

        // Закрытие модального окна матча
        const closeMatchModalBtn = document.getElementById('closeMatchModal');
        const matchModal = document.getElementById('matchModal');

        if (closeMatchModalBtn) {
            closeMatchModalBtn.addEventListener('click', closeMatchModal);
        }

        // Закрытие модального окна при клике на overlay
        if (matchModal) {
            matchModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeMatchModal();
                }
            });
        }

        // Закрытие модального окна по клавише Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMatchModal();
            }
        });
    }

    // Инициализация функциональности команд (только если есть соответствующие элементы)
    if (document.getElementById('pumpkinTeamsContainer') || document.getElementById('watermelonTeamsContainer')) {
        // Закрытие модального окна
        const closeModalBtn = document.getElementById('closeModal');
        const closeModalBtn2 = document.getElementById('closeModalBtn');
        const teamModal = document.getElementById('teamModal');

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeTeamModal);
        }
        if (closeModalBtn2) {
            closeModalBtn2.addEventListener('click', closeTeamModal);
        }

        // Закрытие модального окна при клике на overlay
        if (teamModal) {
            teamModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeTeamModal();
                }
            });
        }

        // Генерируем карточки команд
        generateTeamCards();

        // Закрытие модального окна по клавише Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeTeamModal();
            }
        });
    }

    // Инициализация рейтинга
    if (document.getElementById('pumpkinStandings') || document.getElementById('watermelonStandings')) {
        generateStandings();
    }

    // Инициализация функциональности страницы команды
    if (document.getElementById('playersContainer')) {
        const teamId = parseInt(getUrlParameter('id'));
        if (teamId) {
            loadTeamInfo(teamId);
            generatePlayerCards(teamId);
        }

        // Закрытие модального окна игрока
        const closePlayerModalBtn = document.getElementById('closePlayerModal');
        const closePlayerModalBtn2 = document.getElementById('closePlayerModalBtn');
        const playerModal = document.getElementById('playerModal');

        if (closePlayerModalBtn) {
            closePlayerModalBtn.addEventListener('click', closePlayerModal);
        }
        if (closePlayerModalBtn2) {
            closePlayerModalBtn2.addEventListener('click', closePlayerModal);
        }

        // Закрытие модального окна при клике на overlay
        if (playerModal) {
            playerModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closePlayerModal();
                }
            });
        }

        // Закрытие модального окна по клавише Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePlayerModal();
            }
        });
    }

    // Применяем стили к кнопкам после загрузки DOM
    setTimeout(applyHeroBtnToTextButtons, 100);

    // Также применяем стили после генерации динамического контента
    setTimeout(applyHeroBtnToTextButtons, 500);
});

