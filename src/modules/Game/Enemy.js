export class Enemy {
  /**
   * @param {number} maxHealth
   * @param {string} sprite
   */
  constructor(maxHealth, sprite) {
    this.maxHealth = maxHealth;
    this.sprite = sprite;
  }

  getSpriteSrc() {
    return `/sprites/enemies/${this.sprite}.png`
  }
}

export const enemies = Object.freeze({
  basic: new Enemy(10, "basic"),
  normal: new Enemy(50, "normal"),
  boss: new Enemy(100, "boss"),
});
