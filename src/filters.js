function normalDate(value){
    if(!value) return '<1сек.';
    const minutes = Math.round(value / 60)
    if(minutes >= 1){
        return `${minutes}мин.`
    }
    else return `${value}сек.`
}
function translateTitle(value){
    switch(value){
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
        default:
            return value
    }
}
function toLocaleDate(value){
    return new Date(value * 1000).toLocaleString();
}


export {toLocaleDate, translateTitle, normalDate}