// Dictionnaire misy teny Frantsay ho an'ny ambaratonga rehetra
const baseLetterPools = [
    { letters: ['B', 'I', 'E', 'N'], words: ['BIEN', 'BEN', 'NIE', 'INE', 'EN'] },
    { letters: ['A', 'M', 'I', 'S'], words: ['AMIS', 'AMI', 'MAIS', 'MAI', 'SIM', 'MIS'] },
    { letters: ['C', 'A', 'R', 'E', 'T'], words: ['RACE', 'CAR', 'ARE', 'ACRE', 'CARE','ECART'] },
    { letters: ['L', 'I', 'R', 'E'], words: ['LIRE', 'LIER', 'RIEL', 'IL'] },
    { letters: ['P', 'A', 'R', 'E'], words: ['RAPE', 'PARE', 'PAR', 'PRE'] },
    { letters: ['N', 'O', 'T', 'E'], words: ['NOTE', 'NET', 'TON', 'ONT'] },
    { letters: ['R', 'A', 'I', 'S'], words: ['RAIS', 'AIRS', 'SAI', 'IRA'] },
    { letters: ['V', 'E', 'N', 'T'], words: ['VENT', 'VERT', 'NET', 'VUE'] },
    { letters: ['M', 'A', 'R', 'I'], words: ['MARI', 'RAMI', 'AMI', 'AIR'] },
    { letters: ['P', 'A', 'I', 'N'], words: ['PAIN', 'PIN', 'PAN', 'ANI'] },
    { letters: ['A', 'R', 'B', 'R', 'E'], words: ['ARBRE', 'RARE', 'BAR', 'BARE'] },
    { letters: ['C', 'H', 'A', 'I', 'R'], words: ['CHAIR', 'CHAR', 'CHAI', 'AIR', 'RICHE'] },
    { letters: ['T', 'R', 'A', 'I', 'N'], words: ['TRAIN', 'RAIN', 'RAIT', 'AIR'] },
    { letters: ['P', 'O', 'R', 'T', 'E'], words: ['PORTE', 'PORT', 'POT', 'POUR', 'TROP'] },
    { letters: ['F', 'L', 'E', 'U', 'R'], words: ['FLEUR', 'FEU', 'FER', 'RUE', 'ELU'] },
    { letters: ['S', 'O', 'L', 'E', 'I', 'L'], words: ['SOLEIL', 'SOLE', 'OISE', 'LOIS', 'LIEU'] },
    { letters: ['C', 'O', 'M', 'P', 'A', 'S'], words: ['COMPAS', 'COMP', 'MAPS', 'CAMP', 'SAC'] },
    { letters: ['D', 'E', 'S', 'I', 'G', 'N'], words: ['DESIGN', 'DINE', 'SIGN', 'SIDE', 'SEND'] },
    { letters: ['T', 'E', 'L', 'E', 'P', 'H'], words: ['TELEPH', 'HELP', 'THEE', 'PEEL'] },
    { letters: ['A', 'R', 'C', 'H', 'I'], words: ['ARCHI', 'CHARIOT', 'RICHIE'] },
    { letters: ['M', 'A', 'G', 'I', 'E'], words: ['MAGIE', 'IMAGE', 'GAMIE'] },
    { letters: ['S', 'T', 'R', 'A', 'T', 'E'], words: ['STRATE', 'TASTE', 'STATE'] },
    { letters: ['C', 'O', 'N', 'F', 'I', 'G'], words: ['CONFIG', 'COIN', 'FING'] },
    { letters: ['P', 'R', 'O', 'G', 'R', 'A', 'M'], words: ['PROGRAM', 'GRAM', 'RAMP'] },
    { letters: ['D', 'E', 'V', 'E', 'L', 'O', 'P'], words: ['DEVELOP', 'LOVE', 'DOPE'] },
    { letters: ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E'], words: ['SOFTWARE', 'WARE', 'FATE'] },
    { letters: ['I', 'N', 'T', 'E', 'R', 'F', 'A', 'C', 'E'], words: ['INTERFACE', 'FIRE', 'CARE'] },
    { letters: ['A', 'L', 'G', 'O', 'R', 'I', 'T', 'H', 'M'], words: ['ALGORITHM', 'MATH', 'LOGIC'] },
    { letters: ['D', 'A', 'T', 'A', 'B', 'A', 'S', 'E'], words: ['DATABASE', 'BASE', 'DATA'] },
    { letters: ['C', 'O', 'M', 'P', 'U', 'T', 'E', 'R'], words: ['COMPUTER', 'CUTE', 'TERM'] },
    { letters: ['N', 'E', 'T', 'W', 'O', 'R', 'K'], words: ['NETWORK', 'WORK', 'TOKEN'] },
    { letters: ['S', 'E', 'C', 'U', 'R', 'I', 'T'], words: ['SECURITY', 'CURE', 'RITE'] },
    { letters: ['P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G'], words: ['PROGRAMMING', 'RAMPING', 'MORNING'] },
    { letters: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'M', 'E', 'N', 'T'], words: ['DEVELOPMENT', 'MENTORING'] },
    { letters: ['S', 'O', 'F', 'T', 'W', 'A', 'R', 'E', 'D', 'E', 'V'], words: ['SOFTWAREDEV', 'DEVELOPERS'] },
    { letters: ['I', 'N', 'T', 'E', 'R', 'N', 'E', 'T'], words: ['INTERNET', 'INTER'] },
    { letters: ['C', 'Y', 'B', 'E', 'R'], words: ['CYBER', 'CRY', 'BYE'] },
    { letters: ['A', 'R', 'T', 'I', 'F', 'I', 'C', 'I', 'A', 'L'], words: ['ARTIFICIAL', 'FICIAL'] },
    { letters: ['I', 'N', 'T', 'E', 'L', 'L', 'I', 'G', 'E', 'N', 'C', 'E'], words: ['INTELLIGENCE', 'GENIUS'] },
    { letters: ['M', 'A', 'C', 'H', 'I', 'N', 'E'], words: ['MACHINE', 'CHAIN'] },
    { letters: ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'], words: ['LEARNING', 'RING'] },
    { letters: ['A', 'U', 'T', 'O', 'M', 'A', 'T', 'I', 'O', 'N'], words: ['AUTOMATION', 'MOTION'] },
    { letters: ['R', 'O', 'B', 'O', 'T'], words: ['ROBOT', 'BOOT'] },
    { letters: ['D', 'A', 'T', 'A', 'S', 'C', 'I', 'E', 'N', 'C', 'E'], words: ['DATASCIENCE', 'SCIENCE'] },
    { letters: ['A', 'R', 'T', 'I', 'F', 'I', 'C', 'I', 'A', 'L'], words: ['ARTIFICIAL', 'FICIAL'] },
    { letters: ['I', 'N', 'T', 'E', 'L', 'L', 'I', 'G', 'E', 'N', 'C', 'E'], words: ['INTELLIGENCE', 'GENIUS'] },
    { letters: ['M', 'A', 'C', 'H', 'I', 'N', 'E'], words: ['MACHINE', 'CHAIN'] },
    { letters: ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'], words: ['LEARNING', 'RING'] },
    { letters: ['A', 'U', 'T', 'O', 'M', 'A', 'T', 'I', 'O', 'N'], words: ['AUTOMATION', 'MOTION'] },
    { letters: ['R', 'O', 'B', 'O', 'T'], words: ['ROBOT', 'BOOT'] },
    { letters: ['D', 'A', 'T', 'A', 'S', 'C', 'I', 'E', 'N', 'C', 'E'], words: ['DATASCIENCE', 'SCIENCE'] },
    { letters: ['A', 'R', 'T', 'I', 'F', 'I', 'C', 'I', 'A', 'L'], words: ['ARTIFICIAL', 'FICIAL'] },
    { letters: ['I', 'N', 'T', 'E', 'L', 'L', 'I', 'G', 'E', 'N', 'C', 'E'], words: ['INTELLIGENCE', 'GENIUS'] },
    { letters: ['M', 'A', 'C', 'H', 'I', 'N', 'E'], words: ['MACHINE', 'CHAIN'] },
    { letters: ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'], words: ['LEARNING', 'RING'] },
    { letters: ['A', 'U', 'T', 'O', 'M', 'A', 'T', 'I', 'O', 'N'], words: ['AUTOMATION', 'MOTION'] },
    { letters: ['R', 'O', 'B', 'O', 'T'], words: ['ROBOT', 'BOOT'] },
    { letters: ['D', 'A', 'T', 'A', 'S', 'C', 'I', 'E', 'N', 'C', 'E'], words: ['DATASCIENCE', 'SCIENCE'] },
    { letters: ['A', 'R', 'T', 'I', 'F', 'I', 'C', 'I', 'A', 'L'], words: ['ARTIFICIAL', 'FICIAL'] },
    { letters: ['I', 'N', 'T', 'E', 'L', 'L', 'I', 'G', 'E', 'N', 'C', 'E'], words: ['INTELLIGENCE', 'GENIUS'] },
    { letters: ['M', 'A', 'C', 'H', 'I', 'N', 'E'], words: ['MACHINE', 'CHAIN'] },
    { letters: ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'], words: ['LEARNING', 'RING'] },
    { letters: ['A', 'U', 'T', 'O', 'M', 'A', 'T', 'I', 'O', 'N'], words: ['AUTOMATION', 'MOTION'] },
    { letters: ['R', 'O', 'B', 'O', 'T'], words: ['ROBOT', 'BOOT'] },
    { letters: ['D', 'A', 'T', 'A', 'S', 'C', 'I', 'E', 'N', 'C', 'E'], words: ['DATASCIENCE', 'SCIENCE'] },
    { letters: ['A', 'R', 'T', 'I', 'F', 'I', 'C', 'I', 'A', 'L'], words: ['ARTIFICIAL', 'FICIAL'] },
    { letters: ['I', 'N', 'T', 'E', 'L', 'L', 'I', 'G', 'E', 'N', 'C', 'E'], words: ['INTELLIGENCE', 'GENIUS'] },
    { letters: ['M', 'A', 'C', 'H', 'I', 'N', 'E'], words: ['MACHINE', 'CHAIN'] },
    { letters: ['L', 'E', 'A', 'R', 'N', 'I', 'N', 'G'], words: ['LEARNING', 'RING'] },
    { letters: ['A', 'U', 'T', 'O', 'M', 'A', 'T', 'I', 'O', 'N'], words: ['AUTOMATION', 'MOTION'] },
    { letters: ['R', 'O', 'B', 'O', 'T'], words: ['ROBOT', 'BOOT'] },
    { letters: ['D', 'A', 'T', 'A', 'S', 'C', 'I', 'E', 'N', 'C', 'E'], words: ['DATASCIENCE', 'SCIENCE'] }
];

// Fitehirizana ny mombamomba ny mpilalao rehetra ao amin'ny LocalStorage
const PlayerStorage = {
    get: function(username) {
        let stored = localStorage.getItem(`mdm_user_${username}`);
        return stored ? JSON.parse(stored) : null;
    },
    save: function(username, password, level, score, coins) {
        const data = {
            password: password,
            level: level,
            score: score,
            coins: coins
        };
        localStorage.setItem(`mdm_user_${username}`, JSON.stringify(data));
    }
};

// Mpamorona ny fahasarotan'ny niveau tsirairay hatramin'ny 3000
function generateLevelConfig(levelNumber) {
    const baseIndex = (levelNumber - 1) % baseLetterPools.length;
    const base = baseLetterPools[baseIndex];
    
    // Kisendrasendra voakajy mialoha ho an'ny case kintana
    const starRow = (levelNumber * 3) % base.words.length;
    const starCol = (levelNumber * 2) % base.words[starRow].length;

    return {
        letters: base.letters,
        words: base.words,
        star: { row: starRow, col: starCol }
    };
}
