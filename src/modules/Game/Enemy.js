export class Enemy {
  /**
   * @param {number} maxHealth
   * @param {string} name
   * @param {string} sprite
   * @param {{
   *   gold: number,
   *   points: number,
   * }} drops
   */
  constructor(maxHealth, name, sprite, drops) {
    this.maxHealth = maxHealth;
    this.name = name;
    this.sprite = sprite;
    this.drops = drops;
  }

  getSpriteSrc() {
    return `/sprites/enemies/${this.sprite}.png`;
  }
}

export const enemies = Object.freeze({
  slime: new Enemy(100, "slime", "basic", {
    gold: 50,
    points: 1,
  }),
  zombie: new Enemy(200, "zombie", "normal", {
    gold: 100,
    points: 5,
  }),
  robot: new Enemy(1000, "robot", "boss", {
    gold: 1000,
    points: 10,
  }),
});
