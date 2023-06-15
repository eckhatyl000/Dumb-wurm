let objectEffects = {
    "Object1": {
        good: ["Good Effect 1-1", "Good Effect 1-2", "Good Effect 1-3"],
        bad: ["Bad Effect 1-1", "Bad Effect 1-2", "Bad Effect 1-3"]
    },
    "Object2": {
        good: ["Good Effect 2-1", "Good Effect 2-2", "Good Effect 2-3"],
        bad: ["Bad Effect 2-1", "Bad Effect 2-2", "Bad Effect 2-3"]
    },
    // and so on for each object type...
};


document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let objectType = document.getElementById('objectType').value;
    let objectNum = document.getElementById('objectNum').value;

    let results = calculateEffects(objectType, objectNum);

    document.getElementById('result').innerHTML = `Good Effects: ${results.goodEffectsResult.join(', ')}, Bad Effects: ${results.badEffectsResult.join(', ')}, Damage: ${results.damage}`;


function calculateEffects(objectType, objectNum) {
    
    let goodEffectsArray = objectEffects[objectType].good;
    let badEffectsArray = objectEffects[objectType].bad;

    let goodEffectsResult = [];
    let badEffectsResult = [];
    let damage = 0;

    let baseGoodBadEffectPercentage = 0.25;
    let baseDamagePercentage = 0.50;

    for (let i = 0; i < objectNum; i++) {
        let goodBadEffectChance = Math.min(baseGoodBadEffectPercentage + (i * 0.01), 1);
        let damageChance = Math.min(baseDamagePercentage + (i * 0.01), 1);

        let randGoodBad = Math.random();
        let randDamage = Math.random();

        if (randGoodBad < goodBadEffectChance) {
            let chosenGoodEffect = goodEffectsArray[Math.floor(Math.random() * goodEffectsArray.length)];
            if (!goodEffectsResult.includes(chosenGoodEffect)) {
                goodEffectsResult.push(chosenGoodEffect);
            }

            let chosenBadEffect = badEffectsArray[Math.floor(Math.random() * badEffectsArray.length)];
            if (!badEffectsResult.includes(chosenBadEffect)) {
                badEffectsResult.push(chosenBadEffect);
            }
        }

        if (randDamage < damageChance) {
            damage += 1;
        }
    }

    return { goodEffectsResult, badEffectsResult, damage };
}

