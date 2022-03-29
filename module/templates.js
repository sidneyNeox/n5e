/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @returns {Promise}
 */
export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Shared Partials
    "systems/n5e/templates/actors/parts/active-effects.html",

    // Actor Sheet Partials
    "systems/n5e/templates/actors/parts/actor-traits.html",
    "systems/n5e/templates/actors/parts/actor-inventory.html",
    "systems/n5e/templates/actors/parts/actor-features.html",
    "systems/n5e/templates/actors/parts/actor-spellbook.html",
    "systems/n5e/templates/actors/parts/actor-warnings.html",

    // Item Sheet Partials
    "systems/n5e/templates/items/parts/item-action.html",
    "systems/n5e/templates/items/parts/item-activation.html",
    "systems/n5e/templates/items/parts/item-description.html",
    "systems/n5e/templates/items/parts/item-mountable.html"
  ]);
};
