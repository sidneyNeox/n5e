/**
 * A simple form to set actor chakra dice amounts
 * @implements {DocumentSheet}
 */
export default class ActorHitDiceConfig extends DocumentSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["n5e", "cd-config", "dialog"],
      template: "systems/n5e/templates/apps/chakra-dice-config.html",
      width: 360,
      height: "auto"
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get title() {
    return `${game.i18n.localize("N5E.ChakraDiceConfig")}: ${this.object.name}`;
  }

  /* -------------------------------------------- */

  /** @override */
  getData(options) {
    return {
      classes: this.object.items.reduce((classes, item) => {
        if (item.data.type === "class") {
          // Add the appropriate data only if this item is a "class"
          classes.push({
            classItemId: item.data._id,
            name: item.data.name,
            diceDenom: item.data.data.chakraDice,
            currentChakraDice: item.data.data.levels - item.data.data.chakraDiceUsed,
            maxChakraDice: item.data.data.levels,
            canRoll: (item.data.data.levels - item.data.data.chakraDiceUsed) > 0
          });
        }
        return classes;
      }, []).sort((a, b) => parseInt(b.diceDenom.slice(1)) - parseInt(a.diceDenom.slice(1)))
    };
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Hook up -/+ buttons to adjust the current value in the form
    html.find("button.increment,button.decrement").click(event => {
      const button = event.currentTarget;
      const current = button.parentElement.querySelector(".current");
      const max = button.parentElement.querySelector(".max");
      const direction = button.classList.contains("increment") ? 1 : -1;
      current.value = Math.clamped(parseInt(current.value) + direction, 0, parseInt(max.value));
    });

    html.find("button.roll-cd").click(this._onRollChakraDie.bind(this));
  }

  /* -------------------------------------------- */

  /** @override */
  async _updateObject(event, formData) {
    const actorItems = this.object.items;
    const classUpdates = Object.entries(formData).map(([id, cd]) => ({
      _id: id,
      "data.chakraDiceUsed": actorItems.get(id).data.data.levels - cd
    }));
    return this.object.updateEmbeddedDocuments("Item", classUpdates);
  }

  /* -------------------------------------------- */

  /**
   * Rolls the chakra die corresponding with the class row containing the event's target button.
   * @param {MouseEvent} event
   * @private
   */
  async _onRollChakraDie(event) {
    event.preventDefault();
    const button = event.currentTarget;
    await this.object.rollChakraDie(button.dataset.cdDenom);

    // Re-render dialog to reflect changed chakra dice quantities
    this.render();
  }
}
