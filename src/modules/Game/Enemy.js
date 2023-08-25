export class Enemy {
  /**
   * @param {number} maxHealth
   * @param {string} name
   * @param {string} sprite
   */
  constructor(maxHealth, name, sprite) {
    this.maxHealth = maxHealth;
    this.name = name;
    this.sprite = sprite;
  }

  getSpriteSrc() {
    return `/sprites/enemies/${this.sprite}.png`;
  }
}

export const enemies = Object.freeze({
  basic: new Enemy(10, "basic enemy", "basic"),
  normal: new Enemy(50, "normal enemy", "normal"),
  boss: new Enemy(100, "boss enemy", "boss"),
});
