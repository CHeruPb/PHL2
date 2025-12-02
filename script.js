// Данные команд
const teamsData = [
    {
        id: 1,
        name: "Busurman Kittens",
        logo: "/assets/logos/walled_robots.png",
        city: "location",
        coach: "name",
        founded: 2015,
        games: 24,
        wins: 18,
        losses: 4,
        draws: 2,
        points: 38,
        goalsFor: 124,
        goalsAgainst: 67,
        players: [
            { number: 10, name: "The_P3rch3k", position: "Нападающий" },
            { number: 7, name: "name", position: "Защитник" },
            { number: 29, name: "name", position: "Нападающий" },
            { number: 1, name: "name", position: "Вратарь" },
            { number: 5, name: "name", position: "Защитник" }
        ]
    },
    {
        id: 2,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048380.png",
        city: "location",
        coach: "name",
        founded: 2016,
        games: 24,
        wins: 16,
        losses: 6,
        draws: 2,
        points: 34,
        goalsFor: 98,
        goalsAgainst: 72,
        players: [
            { number: 9, name: "name", position: "Нападающий" },
            { number: 24, name: "name", position: "Защитник" },
            { number: 17, name: "name", position: "Нападающий" },
            { number: 30, name: "name", position: "Вратарь" },
            { number: 4, name: "name", position: "Защитник" }
        ]
    },
    {
        id: 3,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048368.png",
        city: "location",
        coach: "name",
        founded: 2014,
        games: 24,
        wins: 14,
        losses: 8,
        draws: 2,
        points: 30,
        goalsFor: 89,
        goalsAgainst: 75,
        players: [
            { number: 13, name: "name", position: "Нападающий" },
            { number: 27, name: "name", position: "Защитник" },
            { number: 11, name: "name", position: "Нападающий" },
            { number: 35, name: "name", position: "Вратарь" },
            { number: 6, name: "name", position: "Защитник" }
        ]
    },
    {
        id: 4,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048375.png",
        city: "location",
        coach: "name",
        founded: 2017,
        games: 24,
        wins: 12,
        losses: 10,
        draws: 2,
        points: 26,
        goalsFor: 82,
        goalsAgainst: 79,
        players: [
            { number: 21, name: "name", position: "Нападающий" },
            { number: 2, name: "name", position: "Защитник" },
            { number: 19, name: "name", position: "Нападающий" },
            { number: 31, name: "name", position: "Вратарь" },
            { number: 8, name: "name", position: "Защитник" }
        ]
    },
    {
        id: 5,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048378.png",
        city: "location",
        coach: "name",
        founded: 2018,
        games: 24,
        wins: 11,
        losses: 11,
        draws: 2,
        points: 24,
        goalsFor: 76,
        goalsAgainst: 81,
        players: [
            { number: 77, name: "name", position: "Нападающий" },
            { number: 3, name: "name", position: "Защитник" },
            { number: 14, name: "name", position: "Нападающий" },
            { number: 33, name: "name", position: "Вратарь" },
            { number: 22, name: "name", position: "Защитник" }
        ]
    },
    {
        id: 6,
        name: "team",
        logo: "https://cdn-icons-png.flaticon.com/512/3048/3048370.png",
        city: "location",
        coach: "name",
        founded: 2019,
        games: 24,
        wins: 9,
        losses: 13,
        draws: 2,
        points: 20,
        goalsFor: 68,
        goalsAgainst: 85,
        players: [
            { number: 18, name: "name", position: "Нападающий" },
            { number: 12, name: "name", position: "Защитник" },
            { number: 25, name: "name", position: "Нападающий" },
            { number: 40, name: "name", position: "Вратарь" },
            { number: 15, name: "name", position: "Защитник" }
        ]
    }
];

// Генерация карточек команд
function generateTeamCards() {
    const container = document.getElementById('teamsContainer');
    if (!container) return; // Проверяем, существует ли контейнер

    container.innerHTML = '';

    teamsData.forEach(team => {
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
                    <span>Осн. ${team.founded}</span>
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

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация функциональности команд (только если есть соответствующие элементы)
    if (document.getElementById('teamsContainer')) {
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
});

