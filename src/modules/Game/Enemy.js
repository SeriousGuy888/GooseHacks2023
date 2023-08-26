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
  basic: new Enemy(10, "basic enemy", "basic", {
    gold: 10,
    points: 1,
  }),
  normal: new Enemy(50, "normal enemy", "normal", {
    gold: 25,
    points: 5,
  }),
  boss: new Enemy(100, "boss enemy", "boss", {
    gold: 100,
    points: 10,
  }),
});
