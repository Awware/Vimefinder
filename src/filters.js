function normalDate(value) {
    if (!value) return '<1сек.'
    const minutes = Math.round(value / 60)
    if (minutes >= 1) {
        return `${minutes}мин.`
    } else return `${value}сек.`
}
function translateTitle(value) {
    switch (value) {
        case 'BWH':
            return 'Bed Wars | Hardcore'
        case 'BW':
            return 'Bed Wars | Standard'
        case 'LUCKYWARS':
            return 'Lucky Wars'
        case 'HGL':
            return 'Hunger Games Lucky'
        case 'HG':
            return 'Hunger Games'
        case 'DUELS':
            return 'Duels'
        case 'SW':
            return 'Sky Wars'
        case 'MURDER':
            return 'Murder Mystery'
        case 'TNTRUN':
            return 'TNT | Run'
        case 'TNTTAG':
            return 'TNT | Tag'
        case 'MW':
            return 'Mob Wars'
        case 'BRIDGE':
            return 'The bridge'
        case 'BP':
            return 'Blockparty'
        case 'ANN':
            return 'Annihilation'
        case 'BB':
            return 'Build Battle'
        case 'GG':
            return 'Gun Game'
        case 'KPVP':
            return 'Kit PVP'
        case 'PRISON':
            return 'Prison'
        case 'CP':
            return 'Clashpoint'
        case 'ARC':
            return 'Arcades'
        case 'DR':
            return 'Dead Run'
        case 'JUMPLEAGUE':
            return 'Jump League'
        case 'SHEEP':
            return 'Sheep Wars'
        case 'TURFWARS':
            return 'Turf Wars'
        case 'PAINTBALL':
            return 'Paintball'
        default:
            return value
    }
}
function translateKeyTitle(value) {
    switch (value) {
        case 'kills':
            return 'Убийств'
        case 'deaths':
            return 'Смертей'
        case 'games':
            return 'Игр'
        case 'wins':
            return 'Побед'
        case 'bowkills':
            return 'Убийств с лука'
        case 'wood':
            return 'Добыто дерева'
        case 'ores':
            return 'Добыто руды'
        case 'nexus':
            return 'Разбито нексусов'
        case 'digged':
            return 'Вскопано блоков'
        case 'levels':
            return 'Уровней'
        case 'bedBreaked':
            return 'Кроватей сломано'
        case 'resourcePointsBreaked':
            return 'РПБ'
        case 'solo_wins':
            return 'Соло побед'
        case 'solo_games':
            return 'Соло игр'
        case 'team_wins':
            return 'Побед в команде'
        case 'team_games':
            return 'Игр в команде'
        case 'ranked_games':
            return 'Рейтинг. игр'
        case 'ranked_wins':
            return 'Рейтинг. побед'
        case 'total_wins':
            return 'Всего побед'
        case 'total_games':
            return 'Всего игр'
        case 'wins_classic':
            return "Побед в 'Classic'"
        case 'wins_bow':
            return "Побед в 'Bow'"
        case 'wins_op':
            return "Побед в 'OP'"
        case 'wins_potion':
            return "Побед в 'Potion'"
        case 'wins_uhc':
            return "Побед в 'UHC'"
        case 'wins_bwh':
            return "Побед в 'BWH'"
        case 'maxstrike':
            return 'Максимальный стрик'
        case 'points':
            return 'Поинты'
        case 'mobsKilled':
            return 'Мобов убито'
        case 'mobsSended':
            return 'Мобов отправлено'
        case 'maxIncome':
            return 'Макс. доход'
        case 'total_blocks':
            return 'Всего блоков'
        case 'earned_money':
            return 'Заработано денег'
        case 'mobs':
            return 'Убито мобов'
        case 'blocks':
            return 'Всего блоков'
        case 'arrowsFired':
            return 'Стрел выпущено'
        case 'blocksBroken':
            return 'Блоков сломано'
        case 'blocksPlaced':
            return 'Поставлено блоков'
        case 'currentWinStreak':
            return 'Текущий стрик'
        case 'winStreak':
            return 'Максимальный стрик'
        case 'checkpoints':
            return 'Чекпоинты'
        case 'wins_as_innocent':
            return 'Побед за невинного'
        case 'wins_as_maniac':
            return 'Побед за маньяка'
        case 'wins_as_detective':
            return 'Побед за детектива'
        case 'broken_blocks':
            return 'Блоков сломано'
        default:
            return value
    }
}
function toLocaleDate(value) {
    return new Date(value * 1000).toLocaleString()
}

export { toLocaleDate, translateTitle, normalDate, translateKeyTitle }
