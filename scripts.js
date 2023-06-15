let objectEffects = {
    "Firefly-Powder": {
        good: ["Dexterity increase + 1", "advantage on dex saving throws + 1 turn", "Movement speed increase + 1"],
        bad: ["Cardiac arrest take 2 dmg per turn", "Blurry senses blindsight decreases by 0.5ft", "Shaky wurm + to hit decrease by 0.5"]
    },
    "Dreamroot": {
        good: ["Good Effect 2-1", "Good Effect 2-2", "Good Effect 2-3"],
        bad: ["Bad Effect 2-1", "Bad Effect 2-2", "Bad Effect 2-3"]
    },
    "Bloodstain": {
        good: ["Good Effect 2-1", "Good Effect 2-2", "Good Effect 2-3"],
        bad: ["Bad Effect 2-1", "Bad Effect 2-2", "Bad Effect 2-3"]
    },
    "Mindbender": {
        good: ["Good Effect 2-1", "Good Effect 2-2", "Good Effect 2-3"],
        bad: ["Bad Effect 2-1", "Bad Effect 2-2", "Bad Effect 2-3"]
    },
    "Shadowstep": {
        good: ["Good Effect 2-1", "Good Effect 2-2", "Good Effect 2-3"],
        bad: ["Bad Effect 2-1", "Bad Effect 2-2", "Bad Effect 2-3"]
    },
    "Bliss": {
        good: ["Good Effect 2-1", "Good Effect 2-2", "Good Effect 2-3"],
        bad: ["Bad Effect 2-1", "Bad Effect 2-2", "Bad Effect 2-3"]
    }
};

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let results = '';

    let objectTypes = ["Firefly-Powder", "Dreamroot", "Bloodstain", "Mindbender", "Shadowstep", "Bliss"];
    let objectNums = ["Firefly-Powder", "Dreamroot", "Bloodstain", "Mindbender", "Shadowstep", "Bliss"];

    let cumulativeObjectNum = 0;

    for (let i = 0; i < objectTypes.length; i++) {
        let objectType = objectTypes[i];
        let objectNum = parseInt(document.getElementById(objectNums[i]).value);

        cumulativeObjectNum += objectNum;

        let result = calculateEffects(objectType, objectNum, cumulativeObjectNum);

        results += `<div class="result-box">`;
        results += `<div class="object-title">Results for ${objectType}</div>`;
        results += `<div class="good-effects">Good Effects: ${result.goodEffectsResult.join(', ')}</div>`;
        results += `<div class="bad-effects">Bad Effects: ${result.badEffectsResult.join(', ')}</div>`;
        results += `<div class="damage">Damage: ${result.damage}</div>`;
        results += `<div class="effect-count">Good Effects Happen ${result.goodEffectsResult.length} time(s), Bad Effects Happen ${result.badEffectsResult.length} time(s)</div>`;
        results += `</div>`;
    }

    document.getElementById('result').innerHTML = results;
});

function calculateEffects(objectType, objectNum) {
    if (objectEffects[objectType]) {
        let goodEffectsArray = objectEffects[objectType].good;
        let badEffectsArray = objectEffects[objectType].bad;

        let goodEffectsResult = [];
        let badEffectsResult = [];
        let damage = 0;

        let baseGoodBadEffectPercentage = 0.25;
        let baseDamagePercentage = 0.50;

        for (let i = 0; i < objectNum; i++) {
            let goodBadEffectChance = Math.min(baseGoodBadEffectPercentage + i * 0.01, 1);
            let damageChance = Math.min(baseDamagePercentage + i * 0.01, 1);

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
    } else {
        console.log(`Object type '${objectType}' not found.`);
        return { goodEffectsResult: [], badEffectsResult: [], damage: 0 };
    }
}


