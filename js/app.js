new Vue({
  el: "#app",
  data: {
    //Initial values for player health, monster health and game conditions
    playerHealth: 100,
    monsterHealth: 100,
    gameStarted: false,
    gameLog: []
  },
  methods: {
    //Game methods
    startGame: function () {
      this.gameStarted = true;
    },
    finishGame: function () {
      this.gameStarted = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameLog = [];
    },
    validate: function () {
      if (this.playerHealth <= 0) {
        alert("You lost!");
        this.finishGame();
      } else if (this.monsterHealth <= 0) {
        alert("You won!");
        this.finishGame();
      }
    },
    //Player methods
    playerAttack: function () {
      playerAttackPower = Math.floor(Math.random() * 10) + 1;
      this.monsterHealth = Math.max(this.monsterHealth - playerAttackPower, 0);
      this.gameLog.unshift({name: 'PLAYER', text: 'PLAYER HITS MONSTER FOR ' + playerAttackPower});
      this.validate();
      this.monsterMovement();
    },
    playerSpecialAttack: function () {
      playerSpecialAttackPower = Math.floor(Math.random() * 20) + 1;
      this.monsterHealth = Math.max(this.monsterHealth - playerSpecialAttackPower, 0);
      this.gameLog.unshift({name: 'PLAYER', text: 'PLAYER HITS MONSTER FOR ' + playerSpecialAttackPower});
      this.validate();
      this.monsterMovement();
    },
    playerHeal: function () {
      playerHealPower = Math.floor(Math.random() * 10) + 1;
      this.playerHealth = Math.min(this.playerHealth + playerHealPower, 100);
      this.gameLog.unshift({name: 'PLAYER', text: 'PLAYER HEALS HIMSELF FOR ' + playerHealPower});
      this.validate();
      this.monsterMovement();
    },
    playerGiveUp: function () {
      this.gameStarted = false;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameLog = [];
    },
    //Monster methods
    monsterMovement: function () {
      movement = Math.floor(Math.random() * 3);
      if (this.gameStarted) {
        switch (movement) {
          case 0:
            this.monsterAttack();
            break;
          case 1:
            this.monsterSpecialAttack();
            break;
          case 2:
            this.monsterHeal();
        }
      }
    },
    monsterAttack: function () {
      monsterAttackPower = Math.floor(Math.random() * 10) + 1;
      this.playerHealth = Math.max(this.playerHealth - monsterAttackPower, 0);
      this.gameLog.unshift({name: 'MONSTER', text: 'MONSTER HITS PLAYER FOR ' + monsterAttackPower});
      this.validate();
    },
    monsterSpecialAttack: function () {
      monsterSpecialAttackPower = Math.floor(Math.random() * 20) + 1;
      this.playerHealth = Math.max(this.playerHealth - monsterSpecialAttackPower, 0);
      this.gameLog.unshift({name: 'MONSTER', text: 'MONSTER HITS PLAYER FOR ' + monsterSpecialAttackPower});
      this.validate();
    },
    monsterHeal: function () {
      monsterHealPower = Math.floor(Math.random() * 10) + 1;
      this.monsterHealth = Math.min(this.monsterHealth + monsterHealPower, 100);
      this.gameLog.unshift({name: 'MONSTER', text: 'MONSTER HEALS HIMSELF FOR ' + monsterHealPower});
      this.validate();
    },
  },
});
