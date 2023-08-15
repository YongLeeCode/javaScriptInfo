const monsterHealthBar = document.getElementById("monster-health");
const playerHealthBar = document.getElementById("player-health");
const bonusLifeEl = document.getElementById("bonus-life");

const stabBtn = document.getElementById("stab-btn");
const parryBtn = document.getElementById("parry-btn");
const slashBtn = document.getElementById("slash-btn");
const dodgeBtn = document.getElementById("dodge-btn");
const healBtn = document.getElementById("heal-btn");
const logBtn = document.getElementById("log-btn");

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

//random damage
function randomDamage(min, max) {
  // Math.random()은 0 이상 1 미만의 무작위 부동소수점 숫자를 반환합니다.
  // 따라서, (max - min) 범위 내의 무작위 정수를 생성하려면 다음과 같이 계산합니다:
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function dealMonsterDamage(min, max) {
  const dealtDamage = randomDamage(min, max);
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;

  return dealtDamage;
}

function dealPlayerDamage(min, max) {
  const dealtDamage = randomDamage(min, max);
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}
