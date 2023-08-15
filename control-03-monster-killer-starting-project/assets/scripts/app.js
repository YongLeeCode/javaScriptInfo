// 글로벌 값이면 대문자와 _를 사용하여 쓴다.
const PLAYER_ATTACK_VALUE = [6, 12];
const MONSTER_ATTACK_VALUE = [8, 10];
const HEAL_VALUE = 10;

let Log ={} ;
let battleLog = [];
// const health = prompt('Choose health', '100');
let health = 100;
const chosenMaxLife = parseInt(health);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0){
    chosenMaxLife = 100;
}
adjustHealthBars(chosenMaxLife)
let monsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function choiceResult(mode){
    let monster = monsterChoice();
        
        // console.log(monster);
    if (mode === 'stab') {
        // if () {

        // }
        attack(monster)
    } else if (mode === 'block') {
        attack(monster)
    } else if (mode === 'slash') {
        attack(monster)
    } else if (mode === 'dodge') {
        attack(monster)
    } else if (mode === 'heal') {
        heal(monster);
    }
}

function monsterChoice(){
    let monster;
    let num = Math.floor(Math.random() * 5);
    if (num === 0){
        monster = 'stab'
    } else if (num === 1){
        monster = 'block'
    } else if (num === 2){
        monster = 'slash'
    } else if (num === 3){
        monster = 'dodge'
    } else if (num === 4){
        monster = 'heal'
    } 
    return monster;
}

function attack (monster) {
    const monster_damage = dealMonsterDamage(PLAYER_ATTACK_VALUE[0], PLAYER_ATTACK_VALUE[1]);
    const player_damage = dealPlayerDamage(MONSTER_ATTACK_VALUE[0], MONSTER_ATTACK_VALUE[1]);
    monsterHealth -= monster_damage; 
    currentPlayerHealth -= player_damage;

    const enteredValue = null;

    const userName = enteredValue && 'Anna'
    console.log(userName);
    

    console.log(monsterHealth);
    console.log(monster);
    endRound();
}

function heal (monster) {
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You cannot heal over max. Your health is full now.");
        currentPlayerHealth = chosenMaxLife;
    } else {
        currentPlayerHealth += HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    endRound();
}

function reset() {
    currentPlayerHealth = chosenMaxLife;
    monsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function endRound () {
    if (currentPlayerHealth <= 0 && hasBonusLife ) {
        removeBonusLife();
        hasBonusLife = false;
        alert("You saved your life because you had bonus life.")
        currentPlayerHealth = 1;
    }

    if (monsterHealth <= 0 && currentPlayerHealth > 0){
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && monsterHealth > 0){
        alert('You Lost :(');
    } else if (currentPlayerHealth <= 0 && monsterHealth <= 0){
        alert('Draw!');
    }

    if (
        monsterHealth <= 0 && currentPlayerHealth > 0 ||
        currentPlayerHealth <= 0 && monsterHealth > 0 ||
        currentPlayerHealth <= 0 && monsterHealth <= 0
    ){
        reset();
    }
}
// 공격하는 상황, 
// 아무일도 일어나지 않는 상황, 
// 피가 올라가는 상황, 
// 공격받는 상황, 
// 서로 공격 받는 상황 

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  if (ev === LOG_EVENT_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logEntry = {
      event: ev,
      value: val,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    logEntry = {
      event: ev,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === LOG_EVENT_PLAYER_HEAL) {
    logEntry = {
      event: ev,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  } else if (ev === LOG_EVENT_GAME_OVER) {
    logEntry = {
      event: ev,
      value: val,
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth
    };
  }
  battleLog.push(logEntry);
}

function stabHandler(){
    choiceResult('stab');
}
function parryHandler(){
    choiceResult('parry');
}
function slashHandler(){
    choiceResult('slash');
}
function dodgeHandler(){
    choiceResult('dodge');
}
function healHandler(){
    choiceResult('heal');
}

stabBtn.addEventListener('click', stabHandler);
parryBtn.addEventListener('click', parryHandler);
slashBtn.addEventListener('click', slashHandler);
dodgeBtn.addEventListener('click', dodgeHandler);
healBtn.addEventListener('click', healHandler);




