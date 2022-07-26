const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      attackCount: 0,
      winner: "",
      gameOver: false,
      battleLogs: [],
    };
  },

  methods: {
    attackDamage(callback = null, min = false, max = false) {
      const ATTACK_MIN = min || 5;
      const ATTACK_MAX = max || 13;
      // this makes sure that attack is between 5 && 13
      //if there is a callback run it

      if (callback !== null) {
        callback();
        return Math.floor(
          Math.random() * (ATTACK_MAX - ATTACK_MIN + 1) + ATTACK_MIN
        );
      }
      return Math.floor(
        Math.random() * (ATTACK_MAX - ATTACK_MIN + 1) + ATTACK_MIN
      );
    },
    attack() {
      //this makes sure that whenever the the monster is attacked, it attacks back
      const playerAttackDamage = this.attackDamage();
      const monsterAttackDamage = this.attackDamage(null, 8, 15);

      this.monsterHealth -= playerAttackDamage;
      this.logBattle("player", "attack", playerAttackDamage);

      this.playerHealth -= monsterAttackDamage;
      this.logBattle("monster", "attack", monsterAttackDamage);

      if (this.monsterHealth <= 0) {
        this.monsterHealth = 0;
      }
      if (this.playerHealth <= 0) {
        this.playerHealth = 0;
      }

      this.attackCount++;
    },

    specialAttack() {
      const playerAttackDamage = this.attackDamage(null, 12, 18);
      const monsterAttackDamage = this.attackDamage(null, 8, 15);

      this.monsterHealth -= playerAttackDamage;
      this.logBattle("player", "attack", playerAttackDamage);

      this.playerHealth -= monsterAttackDamage;
      this.logBattle("monster", "attack", monsterAttackDamage);

      this.attackCount++;
    },
    healPlayer() {
      const randNum = Math.floor(Math.random() * (18 - 10 + 1) + 10);

      if (randNum + this.playerHealth >= 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += randNum;
      }
      this.attack();
      this.logBattle("player", "heal", randNum);
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameOver = false;
      this.attackCount = 0;
    },
    surrender() {
      this.gameOver = true;
      this.winner = "monster";
    },

    logBattle(who, what, value) {
      this.battleLogs.unshift({
        who,
        what,
        value,
      });
    },
  },
  computed: {
    monsterHealthStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerHealthStyle() {
      return { width: this.playerHealth + "%" };
    },
    isSpecialAttack() {
      console.log(this.attackCount);

      return this.attackCount % 3 !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 || this.monsterHealth <= 0) {
        this.gameOver = true;
      }

      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0 && this.monsterHealth > 0) {
        this.winner = "monster";
      } else {
        this.winner = "player";
      }
    },
  },
});

app.mount("#game");
