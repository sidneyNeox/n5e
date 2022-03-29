import {ClassFeatures} from "./classFeatures.js";

// Namespace Configuration Values
export const N5E = {};

// ASCII Artwork
N5E.ASCII = ``;


/**
 * The set of Ability Scores used within the system.
 * @enum {string}
 */
N5E.abilities = {
  str: "N5E.AbilityStr",
  dex: "N5E.AbilityDex",
  con: "N5E.AbilityCon",
  int: "N5E.AbilityInt",
  wis: "N5E.AbilityWis",
  cha: "N5E.AbilityCha"
};

/**
 * Localized abbreviations for Ability Scores.
 * @enum {string}
 */
N5E.abilityAbbreviations = {
  str: "N5E.AbilityStrAbbr",
  dex: "N5E.AbilityDexAbbr",
  con: "N5E.AbilityConAbbr",
  int: "N5E.AbilityIntAbbr",
  wis: "N5E.AbilityWisAbbr",
  cha: "N5E.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options.
 * @enum {string}
 */
N5E.alignments = {
  lg: "N5E.AlignmentLG",
  ng: "N5E.AlignmentNG",
  cg: "N5E.AlignmentCG",
  ln: "N5E.AlignmentLN",
  tn: "N5E.AlignmentTN",
  cn: "N5E.AlignmentCN",
  le: "N5E.AlignmentLE",
  ne: "N5E.AlignmentNE",
  ce: "N5E.AlignmentCE"
};

/* -------------------------------------------- */

/**
 * An enumeration of item attunement types.
 * @enum {number}
 */
N5E.attunementTypes = {
  NONE: 0,
  REQUIRED: 1,
  ATTUNED: 2
};

/**
 * An enumeration of item attunement states.
 * @type {{"0": string, "1": string, "2": string}}
 */
N5E.attunements = {
  0: "N5E.AttunementNone",
  1: "N5E.AttunementRequired",
  2: "N5E.AttunementAttuned"
};

/* -------------------------------------------- */

/**
 * General weapon categories.
 * @enum {string}
 */
N5E.weaponProficiencies = {
  sim: "N5E.WeaponSimpleProficiency",
  mar: "N5E.WeaponMartialProficiency",
  web: "N5E.WeaponWebProficiency",
  bon: "N5E.WeaponBoneProficiency"
};

/**
 * A mapping between `N5E.weaponTypes` and `N5E.weaponProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
N5E.weaponProficienciesMap = {
  natural: true,
  simpleM: "sim",
  simpleR: "sim",
  martialM: "mar",
  martialR: "mar"
};

/**
 * The basic weapon types in 5e. This enables specific weapon proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
N5E.weaponIds = {
  battleaxe: "I0WocDSuNpGJayPb",
  handaxe: "B2fnyDvscTClMBKg",
  chainedhandscythe: "nyfpdNE9N2xV7PB9",
  handscythe: "bN1UuQaKdzabRor2",
  kunai: "38bqeZmiAwHES9SN",
  quarterstaff: "TrIfjSQIJT2L21yR",
  spear: "f2qfSy35dtZLq2sj",
  tanto: "F2P1Njl7zpbb7eBy",
  weightedchain: "g7YDjD3EyhxY9Dpv",
  senbon: "6Sp8isFWuM8LC2BK",
  shortbow: "uzecXexo0zxNdmZd",
  shuriken: "rMyysE0e1g9cIufQ",
  sling: "WOIHAwACV44ddfNV",
  broadsword: "R9RpseHl247pKMM7",
  chainedspear: "KNWBDY4TUAcu5pVf",
  combatbracers: "S9hknVSttYqlzVJI",
  greataxe: "lhdOq2jq9hVV7uqv",
  hookedlance: "bEos4lWgW7foDkZw",
  ironclaw: "sT5ISov0x1roJI9m",
  jitte: "EDBnaucaN8l9x3Bl",
  katana: "lTXR81VbsHbJVQTi",
  naginata: "gfmqe01Mo71rfOMx",
  nunchaku: "lm16fqxWEbOFtU9t",
  odachi: "lQMfI9viF1z9LFUF",
  sasumata: "SxBTwuLolmqbTaOp",
  scythe: "6zyp9xz5izOiv1YA",
  tetsubo: "cpjzNVbAORiuIPVm",
  tonfa: "gWK2Q1sjAlSjMWfi",
  warclub: "kCYEcRWGwKulUp1L",
  whip: "sJC9pX6yKL62itW3",
  battlewire: "LSVj1fXJDtBw2Rns",
  knuckleblade: "yiIqmWPuUtNIFjer",
  chakram: "7P2zptcpvyQtHdQA",
  monsterchakram: "3E5uQ614VAaoVIpD",
  longbow: "0A3LQ3exBjqc06D5",
  crossbowhand: "eda31LKTEo1LnwTG",
  crossbowheavy: "h2HtThnfhNi29TiB",
  blowgun: "S36lMwTCWkW5FH70",
  net: "U7NepKJOAvmin4xl",
  fumashuriken: "01QCnFwi4xxyZBzT",
  monstershuriken: "KCVKi28xAnTvdSSw"
};

/* -------------------------------------------- */

/**
 * The categories into which Tool items can be grouped.
 *
 * @enum {string}
 */
N5E.toolTypes = {
  armor: "N5E.ToolArmorsmith",
  cooking: "N5E.ToolCookingh",
  demolitions: "N5E.ToolDemolitions",
  disguise: "N5E.ToolDisguise",
  forensics: "N5E.ToolForensics",
  forgery: "N5E.ToolForgery",
  hackers: "N5E.ToolHackers",
  medicine: "N5E.ToolMedicine",
  poison: "N5E.ToolPoison",
  security: "N5E.ToolSecurity",
  tracking: "N5E.ToolTracking",
  trappers: "N5E.ToolTrappers",
  weapon: "N5E.ToolWeapon"
};

/**
 * The categories of tool proficiencies that a character can gain.
 *
 * @enum {string}
 */
N5E.toolProficiencies = {
  ...N5E.toolTypes,
  vehicle: "N5E.ToolVehicle"
};

/**
 * The basic tool types in 5e. This enables specific tool proficiencies or
 * starting equipment provided by classes and backgrounds.
 * @enum {string}
 */
N5E.toolIds = {

};

/* -------------------------------------------- */

/**
 * The various lengths of time over which effects can occur.
 * @enum {string}
 */
N5E.timePeriods = {
  inst: "N5E.TimeInst",
  turn: "N5E.TimeTurn",
  round: "N5E.TimeRound",
  minute: "N5E.TimeMinute",
  hour: "N5E.TimeHour",
  day: "N5E.TimeDay",
  month: "N5E.TimeMonth",
  year: "N5E.TimeYear",
  perm: "N5E.TimePerm",
  spec: "N5E.Special"
};

/* -------------------------------------------- */

/**
 * Various ways in which an item or ability can be activated.
 * @enum {string}
 */
N5E.abilityActivationTypes = {
  none: "N5E.None",
  action: "N5E.Action",
  bonus: "N5E.BonusAction",
  reaction: "N5E.Reaction",
  minute: N5E.timePeriods.minute,
  hour: N5E.timePeriods.hour,
  day: N5E.timePeriods.day,
  special: N5E.timePeriods.spec,
  legendary: "N5E.LegendaryActionLabel",
  lair: "N5E.LairActionLabel",
  crew: "N5E.VehicleCrewAction"
};

/* -------------------------------------------- */

/**
 * Different things that an ability can consume upon use.
 * @enum {string}
 */
N5E.abilityConsumptionTypes = {
  ammo: "N5E.ConsumeAmmunition",
  attribute: "N5E.ConsumeAttribute",
  material: "N5E.ConsumeMaterial",
  charges: "N5E.ConsumeCharges"
};

/* -------------------------------------------- */

/**
 * Creature sizes.
 * @enum {string}
 */
N5E.actorSizes = {
  tiny: "N5E.SizeTiny",
  sm: "N5E.SizeSmall",
  med: "N5E.SizeMedium",
  lg: "N5E.SizeLarge",
  huge: "N5E.SizeHuge",
  grg: "N5E.SizeGargantuan"
};

/**
 * Default token image size for the values of `N5E.actorSizes`.
 * @enum {number}
 */
N5E.tokenSizes = {
  tiny: 0.5,
  sm: 1,
  med: 1,
  lg: 2,
  huge: 3,
  grg: 4
};

/**
 * Colors used to visualize temporary and temporary maximum HP in token health bars.
 * @enum {number}
 */
N5E.tokenHPColors = {
  damage: 0xFF0000,
  healing: 0x00FF00,
  temp: 0x66CCFF,
  tempmax: 0x440066,
  negmax: 0x550000
};

/* -------------------------------------------- */

/**
 * Default types of creatures.
 * @enum {string}
 */
N5E.creatureTypes = {
  aberration: "N5E.CreatureAberration",
  beast: "N5E.CreatureBeast",
  celestial: "N5E.CreatureCelestial",
  construct: "N5E.CreatureConstruct",
  dragon: "N5E.CreatureDragon",
  elemental: "N5E.CreatureElemental",
  fey: "N5E.CreatureFey",
  fiend: "N5E.CreatureFiend",
  giant: "N5E.CreatureGiant",
  humanoid: "N5E.CreatureHumanoid",
  monstrosity: "N5E.CreatureMonstrosity",
  ooze: "N5E.CreatureOoze",
  plant: "N5E.CreaturePlant",
  undead: "N5E.CreatureUndead"
};

/* -------------------------------------------- */

/**
 * Classification types for item action types.
 * @enum {string}
 */
N5E.itemActionTypes = {
  mwak: "N5E.ActionMWAK",
  rwak: "N5E.ActionRWAK",
  msak: "N5E.ActionMSAK",
  rsak: "N5E.ActionRSAK",
  save: "N5E.ActionSave",
  heal: "N5E.ActionHeal",
  abil: "N5E.ActionAbil",
  util: "N5E.ActionUtil",
  other: "N5E.ActionOther"
};

/* -------------------------------------------- */

/**
 * Different ways in which item capacity can be limited.
 * @enum {string}
 */
N5E.itemCapacityTypes = {
  items: "N5E.ItemContainerCapacityItems",
  weight: "N5E.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * List of various item rarities.
 * @enum {string}
 */
N5E.itemRarity = {
  common: "N5E.ItemRarityCommon",
  uncommon: "N5E.ItemRarityUncommon",
  rare: "N5E.ItemRarityRare",
  veryRare: "N5E.ItemRarityVeryRare",
  legendary: "N5E.ItemRarityLegendary",
  artifact: "N5E.ItemRarityArtifact"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability.
 * @enum {string}
 */
N5E.limitedUsePeriods = {
  sr: "N5E.ShortRest",
  lr: "N5E.LongRest",
  day: "N5E.Day",
  charges: "N5E.Charges"
};

/* -------------------------------------------- */

/**
 * Specific equipment types that modify base AC.
 * @enum {string}
 */
N5E.armorTypes = {
  light: "N5E.EquipmentLight",
  medium: "N5E.EquipmentMedium",
  heavy: "N5E.EquipmentHeavy",
  natural: "N5E.EquipmentNatural",
  shield: "N5E.EquipmentShield"
};

/* -------------------------------------------- */

/**
 * Equipment types that aren't armor.
 * @enum {string}
 */
N5E.miscEquipmentTypes = {
  clothing: "N5E.EquipmentClothing",
  trinket: "N5E.EquipmentTrinket",
  vehicle: "N5E.EquipmentVehicle"
};

/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can be worn by the character.
 * @enum {string}
 */
N5E.equipmentTypes = {
  ...N5E.miscEquipmentTypes,
  ...N5E.armorTypes
};

/* -------------------------------------------- */

/**
 * The various types of vehicles in which characters can be proficient.
 * @enum {string}
 */
N5E.vehicleTypes = {
};

/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have.
 * @type {object}
 */
N5E.armorProficiencies = {
  lgt: N5E.equipmentTypes.light,
  med: N5E.equipmentTypes.medium,
  hvy: N5E.equipmentTypes.heavy,
  shl: "N5E.EquipmentShieldProficiency"
};

/**
 * A mapping between `N5E.equipmentTypes` and `N5E.armorProficiencies` that
 * is used to determine if character has proficiency when adding an item.
 * @enum {(boolean|string)}
 */
N5E.armorProficienciesMap = {
  natural: true,
  clothing: true,
  light: "lgt",
  medium: "med",
  heavy: "hvy",
  shield: "shl"
};

/**
 * The basic armor types in 5e. This enables specific armor proficiencies,
 * automated AC calculation in NPCs, and starting equipment.
 * @enum {string}
 */
N5E.armorIds = {
  padded: "LtSEVI5wKQ1nnJH0",
  leather: "kG1sovEp1gelR7dQ",
  studded: "D8YsYwwaHhuv4Ojl",
  combat: "QaChXZaMifcu1B8K",
  armored: "D9a3L876DN7JhAqV",
  chunin: "cIgMSyvy7HQKw6Jx",
  reinforced: "u4MHMMwBI1tKvtPq",
  flak: "W5116gAvMIzrdu8f",
  armorflak: "XOen2kDuSgmC1ZaQ",
  battle: "q6W2GUwRprGiBVRo",
  shinobi: "ECbUSfYhXZDPXS5T",
  jonin: "WCerdxkFcRWFvEoU",
  armoredjonin: "GaYlFI5ZruPB6nq6",
  ronin: "muD7k3vgJ1qoK66P",
  samurai: "gua3haf3tmHM8o2x"
};

/**
 * The basic shield in 5e.
 * @enum {string}
 */
N5E.shieldIds = {
  shield: "sSs3hSzkKBMNBgTs"
};

/**
 * Common armor class calculations.
 * @enum {{ label: string, [formula]: string }}
 */
N5E.armorClasses = {
  default: {
    label: "N5E.ArmorClassSkin",
    formula: "10 + floor(@prof/2) + @abilities.dex.mod"
  },
  shark: {
    label: "N5E.ArmorClassSharkSkin",
    formula: "10 + floor(@prof/2) + @abilities.con.mod"
  },
  psycha: {
    label: "N5E.ArmorClassPsyCha",
    formula: "10 + floor(@prof/2) + @abilities.cha.mod"
  },
   psywis: {
    label: "N5E.ArmorClassPsyWis",
    formula: "10 + floor(@prof/2) + @abilities.wis.mod"
  },
   evasive: {
    label: "N5E.ArmorClassEvasive",
    formula: "10 + @prof + @abilities.dex.mod"
  },
   geo: {
    label: "N5E.ArmorClassGeo",
    formula: "13 + floor(@prof/2) + @abilities.con.mod"
  },
   sharingan: {
    label: "N5E.ArmorClassSharingan",
    formula: "10 + floor(@prof/2) + @abilities.dex.mod + @abilities.int.mod"
  },
   bone: {
    label: "N5E.ArmorClassBone",
    formula: "10 + floor(@prof/2) + @abilities.dex.mod + @abilities.con.mod"
  },
   unarmored: {
    label: "N5E.ArmorClassUnarmored",
    formula: "10 + floor(@prof/2) + @abilities.dex.mod + @abilities.wis.mod"
  },
  custom: {
    label: "N5E.ArmorClassCustom"
  }
};

/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system.
 * @enum {string}
 */
N5E.consumableTypes = {
  ammo: "N5E.ConsumableAmmunition",
  potion: "N5E.ConsumablePotion",
  poison: "N5E.ConsumablePoison",
  food: "N5E.ConsumableFood",
  scroll: "N5E.ConsumableScroll",
  wand: "N5E.ConsumableWand",
  rod: "N5E.ConsumableRod",
  trinket: "N5E.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations with localized labels, abbreviations, and conversions.
 * @enum {{
 *   label: string,
 *   abbreviation: string,
 *   [conversion]: {into: string, each: number}
 * }}
 */
N5E.currencies = {
  ryo: {
    label: "N5E.CurrencyRYO",
    abbreviation: "N5E.CurrencyAbbrRYO"
  },
  gp: {
    label: "N5E.CurrencyGP",
    abbreviation: "N5E.CurrencyAbbrGP",
    conversion: {into: "pp", each: 10}
  },
  ep: {
    label: "N5E.CurrencyEP",
    abbreviation: "N5E.CurrencyAbbrEP",
    conversion: {into: "gp", each: 2}
  },
  sp: {
    label: "N5E.CurrencySP",
    abbreviation: "N5E.CurrencyAbbrSP",
    conversion: {into: "ep", each: 5}
  },
  cp: {
    label: "N5E.CurrencyCP",
    abbreviation: "N5E.CurrencyAbbrCP",
    conversion: {into: "sp", each: 10}
  }
};

/* -------------------------------------------- */

/**
 * Types of damage the can be caused by abilities.
 * @enum {string}
 */
N5E.damageTypes = {
  acid: "N5E.DamageAcid",
  bludgeoning: "N5E.DamageBludgeoning",
  cold: "N5E.DamageCold",
  chakra: "N5E.DamageChakra",
  earth: "N5E.DamageEarth",
  fire: "N5E.DamageFire",
  force: "N5E.DamageForce",
  lightning: "N5E.DamageLightning",
  necrotic: "N5E.DamageNecrotic",
  piercing: "N5E.DamagePiercing",
  poison: "N5E.DamagePoison",
  psychic: "N5E.DamagePsychic",
  slashing: "N5E.DamageSlashing",
  wind: "N5E.DamageWind"
};

/**
 * Types of damage to which an actor can possess resistance, immunity, or vulnerability.
 * @enum {string}
 */
N5E.damageResistanceTypes = {
  ...N5E.damageTypes,
  physical: "N5E.DamagePhysical"
};

/* -------------------------------------------- */

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
N5E.movementTypes = {
  burrow: "N5E.MovementBurrow",
  climb: "N5E.MovementClimb",
  fly: "N5E.MovementFly",
  swim: "N5E.MovementSwim",
  walk: "N5E.MovementWalk"
};

/**
 * The valid units of measure for movement distances in the game system.
 * By default this uses the imperial units of feet and miles.
 * @enum {string}
 */
N5E.movementUnits = {
  ft: "N5E.DistFt",
  mi: "N5E.DistMi",
  m: "N5E.DistM",
  km: "N5E.DistKm"
};

/**
 * The valid units of measure for the range of an action or effect.
 * This object automatically includes the movement units from `N5E.movementUnits`.
 * @enum {string}
 */
N5E.distanceUnits = {
  none: "N5E.None",
  self: "N5E.DistSelf",
  touch: "N5E.DistTouch",
  spec: "N5E.Special",
  any: "N5E.DistAny",
  ...N5E.movementUnits
};

/* -------------------------------------------- */

/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules.
 * @enum {{ imperial: number, metric: number }}
 */
N5E.encumbrance = {
  currencyPerWeight: {
    imperial: 50,
    metric: 110
  },
  strMultiplier: {
    imperial: 15,
    metric: 6.8
  },
  vehicleWeightMultiplier: {
    imperial: 2000, // 2000 lbs in an imperial ton
    metric: 1000 // 1000 kg in a metric ton
  }
};

/* -------------------------------------------- */

/**
 * The types of single or area targets which can be applied to abilities.
 * @enum {string}
 */
N5E.targetTypes = {
  none: "N5E.None",
  self: "N5E.TargetSelf",
  creature: "N5E.TargetCreature",
  ally: "N5E.TargetAlly",
  enemy: "N5E.TargetEnemy",
  object: "N5E.TargetObject",
  space: "N5E.TargetSpace",
  radius: "N5E.TargetRadius",
  sphere: "N5E.TargetSphere",
  cylinder: "N5E.TargetCylinder",
  cone: "N5E.TargetCone",
  square: "N5E.TargetSquare",
  cube: "N5E.TargetCube",
  line: "N5E.TargetLine",
  wall: "N5E.TargetWall"
};

/* -------------------------------------------- */

/**
 * Mapping between `N5E.targetTypes` and `MeasuredTemplate` shape types to define
 * which templates are produced by which area of effect target type.
 * @enum {string}
 */
N5E.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};

/* -------------------------------------------- */

/**
 * Different types of healing that can be applied using abilities.
 * @enum {string}
 */
N5E.healingTypes = {
  healing: "N5E.Healing",
  temphp: "N5E.HealingTemp"
};

/* -------------------------------------------- */

/**
 * Denominations of hit dice which can apply to classes.
 * @type {string[]}
 */
N5E.hitDieTypes = ["d6", "d8", "d10", "d12"];
N5E.chakraDieTypes = ["d6", "d8", "d10", "d12"];

/* -------------------------------------------- */

/**
 * The set of possible sensory perception types which an Actor may have.
 * @enum {string}
 */
N5E.senses = {
  blindsight: "N5E.SenseBlindsight",
  darkvision: "N5E.SenseDarkvision",
  tremorsense: "N5E.SenseTremorsense",
  truesight: "N5E.SenseTruesight",
  chakrasight: "N5E.SenseChakrasight"
};

/* -------------------------------------------- */

/**
 * The set of skill which can be trained.
 * @enum {string}
 */
N5E.skills = {
  acr: "N5E.SkillAcr",
  ani: "N5E.SkillAni",
  ath: "N5E.SkillAth",
  cha: "N5E.SkillCha",
  cra: "N5E.SkillCra",
  dec: "N5E.SkillDec",
  ill: "N5E.SkillIll",
  his: "N5E.SkillHis",
  ins: "N5E.SkillIns",
  itm: "N5E.SkillItm",
  inv: "N5E.SkillInv",
  med: "N5E.SkillMed",
  nat: "N5E.SkillNat",
  nin: "N5E.SkillNin",
  prc: "N5E.SkillPrc",
  prf: "N5E.SkillPrf",
  per: "N5E.SkillPer",
  slt: "N5E.SkillSlt",
  ste: "N5E.SkillSte",
  sur: "N5E.SkillSur",
  mar: "N5E.SkillMar",
};

/* -------------------------------------------- */

/**
 * Various different ways a spell can be prepared.
 */
N5E.spellPreparationModes = {
  prepared: "N5E.SpellPrepPrepared",
  pact: "N5E.PactMagic",
  always: "N5E.SpellPrepAlways",
  atwill: "N5E.SpellPrepAtWill",
  innate: "N5E.SpellPrepInnate"
};

/**
 * Subset of `N5E.spellPreparationModes` that consume spell slots.
 * @type {boolean[]}
 */
N5E.spellUpcastModes = ["always", "pact", "prepared"];

/**
 * Ways in which a class can contribute to spellcasting levels.
 * @enum {string}
 */
N5E.spellProgression = {
  none: "N5E.SpellNone",
  full: "N5E.SpellProgFull",
  half: "N5E.SpellProgHalf",
  third: "N5E.SpellProgThird",
  pact: "N5E.SpellProgPact",
  artificer: "N5E.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed.
 * @enum {string}
 */
N5E.spellScalingModes = {
  none: "N5E.SpellNone",
  cantrip: "N5E.SpellCantrip",
  level: "N5E.SpellLevel"
};

/* -------------------------------------------- */

/**
 * The set of types which a weapon item can take.
 * @enum {string}
 */
N5E.weaponTypes = {
  simpleM: "N5E.WeaponSimpleM",
  simpleR: "N5E.WeaponSimpleR",
  martialM: "N5E.WeaponMartialM",
  martialR: "N5E.WeaponMartialR",
  natural: "N5E.WeaponNatural",
  improv: "N5E.WeaponImprov",
  siege: "N5E.WeaponSiege"
};

/* -------------------------------------------- */

/**
 * The set of weapon property flags which can exist on a weapon.
 * @enum {string}
 */
N5E.weaponProperties = {
  amm: "N5E.WeaponPropertiesAmm",
  blo: "N5E.WeaponPropertiesBlo",
  cri: "N5E.WeaponPropertiesCri",
  dis: "N5E.WeaponPropertiesDis",
  dea: "N5E.WeaponPropertiesDea",
  fin: "N5E.WeaponPropertiesFin",
  gra: "N5E.WeaponPropertiesGra",
  hvy: "N5E.WeaponPropertiesHvy",
  hid: "N5E.WeaponPropertiesHid",
  lgt: "N5E.WeaponPropertiesLgt",
  lod: "N5E.WeaponPropertiesLod",
  mul: "N5E.WeaponPropertiesMul",
  ran: "N5E.WeaponPropertiesRan",
  rch: "N5E.WeaponPropertiesRch",
  rel: "N5E.WeaponPropertiesRel",
  ret: "N5E.WeaponPropertiesRet",
  thr: "N5E.WeaponPropertiesThr",
  trp: "N5E.WeaponPropertiesTrp",
  two: "N5E.WeaponPropertiesTwo",
  una: "N5E.WeaponPropertiesUna",
  ver: "N5E.WeaponPropertiesVer"
};

/**
 * Types of components that can be required when casting a spell.
 * @enum {string}
 */
N5E.spellComponents = {
  V: "N5E.ComponentVerbal",
  S: "N5E.ComponentSomatic",
  MA: "N5E.ComponentMaterial",
  CS: "N5E.ComponentChakraseals",
  HS: "N5E.ComponentHandseals",
  M: "N5E.ComponentMobility",
  CM: "N5E.ComponentMolding",
  W: "N5E.ComponentWeapon",
  NT: "N5E.ComponentNinjatool",
  MED: "N5E.ComponentMedical",
  FUIN: "N5E.ComponentFuinjutsu",
  SENS: "N5E.ComponentSensory",
  CLASH: "N5E.ComponentClash"
};

/**
 * Schools to which a spell can belong.
 * @enum {string}
 */
N5E.spellSchools = {
  abj: "N5E.SchoolAbj",
  con: "N5E.SchoolCon",
  div: "N5E.SchoolDiv",
  enc: "N5E.SchoolEnc",
  evo: "N5E.SchoolEvo",
  ill: "N5E.SchoolIll"
};

/**
 * Valid spell levels.
 * @enum {string}
 */
N5E.spellLevels = {
  0: "N5E.SpellLevel0",
  1: "N5E.SpellLevel1",
  2: "N5E.SpellLevel2",
  3: "N5E.SpellLevel3",
  4: "N5E.SpellLevel4",
  5: "N5E.SpellLevel5",
  6: "N5E.SpellLevel6",
  7: "N5E.SpellLevel7",
  8: "N5E.SpellLevel8",
  9: "N5E.SpellLevel9",
  10: "N5E.SpellLevel10"
};

/**
 * Spell scroll item ID within the `N5E.sourcePacks` compendium for each level.
 * @enum {string}
 */
N5E.spellScrollIds = {
  0: "rQ6sO7HDWzqMhSI3",
  1: "9GSfMg0VOA2b4uFN",
  2: "XdDp6CKh9qEvPTuS",
  3: "hqVKZie7x9w3Kqds",
  4: "DM7hzgL836ZyUFB1",
  5: "wa1VF8TXHmkrrR35",
  6: "tI3rWx4bxefNCexS",
  7: "mtyw4NS1s7j2EJaD",
  8: "aOrinPg7yuDZEuWr",
  9: "O4YbkJkLlnsgUszZ"
};

/**
 * Compendium packs used for localized items.
 * @enum {string}
 */
N5E.sourcePacks = {
  ITEMS: "n5e.items"
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {number[][]}
 */
N5E.SPELL_SLOT_TABLE = [
  [1],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

/**
 * Settings to configure how actors are merged when polymorphing is applied.
 * @enum {string}
 */
N5E.polymorphSettings = {
  keepPhysical: "N5E.PolymorphKeepPhysical",
  keepMental: "N5E.PolymorphKeepMental",
  keepSaves: "N5E.PolymorphKeepSaves",
  keepSkills: "N5E.PolymorphKeepSkills",
  mergeSaves: "N5E.PolymorphMergeSaves",
  mergeSkills: "N5E.PolymorphMergeSkills",
  keepClass: "N5E.PolymorphKeepClass",
  keepFeats: "N5E.PolymorphKeepFeats",
  keepSpells: "N5E.PolymorphKeepSpells",
  keepItems: "N5E.PolymorphKeepItems",
  keepBio: "N5E.PolymorphKeepBio",
  keepVision: "N5E.PolymorphKeepVision"
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels.
 * The key for each level represents its proficiency multiplier.
 * @enum {string}
 */
N5E.proficiencyLevels = {
  0: "N5E.NotProficient",
  1: "N5E.Proficient",
  0.5: "N5E.HalfProficient",
  2: "N5E.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object. In cases where multiple pieces
 * of cover are in play, we take the highest value.
 * @enum {string}
 */
N5E.cover = {
  0: "N5E.None",
  .5: "N5E.CoverHalf",
  .75: "N5E.CoverThreeQuarters",
  1: "N5E.CoverTotal"
};

/* -------------------------------------------- */

/**
 * A selection of actor attributes that can be tracked on token resource bars.
 * @type {string[]}
 */
N5E.trackableAttributes = [
  "attributes.ac.value", "attributes.init.value", "attributes.movement", "attributes.senses", "attributes.spelldc",
  "attributes.spellLevel", "details.cr", "details.spellLevel", "details.xp.value", "skills.*.passive",
  "abilities.*.value"
];

/* -------------------------------------------- */

/**
 * A selection of actor and item attributes that are valid targets for item resource consumption.
 * @type {string[]}
 */
N5E.consumableResources = [
  "item.quantity", "item.weight", "item.duration.value", "currency", "details.xp.value", "abilities.*.value",
  "attributes.senses", "attributes.movement", "attributes.ac.flat", "item.armor.value", "item.target", "item.range",
  "item.save.dc"
];

/* -------------------------------------------- */

/**
 * Conditions that can effect an actor.
 * @enum {string}
 */
N5E.conditionTypes = {
  berserk: "N5E.ConBerserk",
  bleeding: "N5E.ConBleeding",
  blinded: "N5E.ConBlinded",
  burned: "N5E.ConBurned",
  charmed: "N5E.ConCharmed",
  chilled: "N5E.ConChilled",
  corroed: "N5E.ConCorroed",
  dazed: "N5E.ConDazed",
  deafened: "N5E.ConDeafened",
  envenomed: "N5E.ConEnvenomed",
  exhaustion: "N5E.ConExhaustion",
  frightened: "N5E.ConFrightened",
  grappled: "N5E.ConGrappled",
  incapacitated: "N5E.ConIncapacitated",
  invisible: "N5E.ConInvisible",
  paralyzed: "N5E.ConParalyzed",
  petrified: "N5E.ConPetrified",
  poisoned: "N5E.ConPoisoned",
  prone: "N5E.ConProne",
  restrained: "N5E.ConRestrained",
  shocked: "N5E.ConShocked",
  slowed: "N5E.ConSlowed",
  stunned: "N5E.ConStunned",
  unconscious: "N5E.ConUnconscious",
  weakened: "N5E.ConWeakened",
};

/**
 * Languages a character can learn.
 * @enum {string}
 */
N5E.languages = {
  common: "N5E.LanguagesCommon",
  firedialect: "N5E.LanguagesFiredialect",
  earthdialect: "N5E.LanguagesEarthdialect",
  waterdialect: "N5E.LanguagesWaterdialect",
  clouddialect: "N5E.LanguagesClouddialect",
  sanddialect: "N5E.LanguagesSanddialect",
  snakedialect: "N5E.LanguagesSnakedialect",
  insectdialect: "N5E.LanguagesInsectdialectc",
  dogdialect: "N5E.LanguagesDogdialectc"
};

/**
 * XP required to achieve each character level.
 * @type {number[]}
 */
N5E.CHARACTER_EXP_LEVELS = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
];

/**
 * XP granted for each challenge rating.
 * @type {number[]}
 */
N5E.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

/**
 * Character features automatically granted by classes & subclasses at certain levels.
 * @type {object}
 */
N5E.classFeatures = ClassFeatures;

/**
 * Special character flags.
 * @enum {{
 *   name: string,
 *   hint: string,
 *   [abilities]: string[],
 *   [skills]: string[],
 *   section: string,
 *   type: any,
 *   placeholder: any
 * }}
 */
N5E.characterFlags = {
  diamondSoul: {
    name: "N5E.FlagsDiamondSoul",
    hint: "N5E.FlagsDiamondSoulHint",
    section: "N5E.Feats",
    type: Boolean
  },
  elvenAccuracy: {
    name: "N5E.FlagsElvenAccuracy",
    hint: "N5E.FlagsElvenAccuracyHint",
    section: "N5E.RacialTraits",
    type: Boolean
  },
  halflingLucky: {
    name: "N5E.FlagsHalflingLucky",
    hint: "N5E.FlagsHalflingLuckyHint",
    section: "N5E.RacialTraits",
    type: Boolean
  },
  initiativeAdv: {
    name: "N5E.FlagsInitiativeAdv",
    hint: "N5E.FlagsInitiativeAdvHint",
    section: "N5E.Feats",
    type: Boolean
  },
  initiativeAlert: {
    name: "N5E.FlagsAlert",
    hint: "N5E.FlagsAlertHint",
    section: "N5E.Feats",
    type: Boolean
  },
  jackOfAllTrades: {
    name: "N5E.FlagsJOAT",
    hint: "N5E.FlagsJOATHint",
    section: "N5E.Feats",
    type: Boolean
  },
  observantFeat: {
    name: "N5E.FlagsObservant",
    hint: "N5E.FlagsObservantHint",
    skills: ["prc", "inv"],
    section: "N5E.Feats",
    type: Boolean
  },
  powerfulBuild: {
    name: "N5E.FlagsPowerfulBuild",
    hint: "N5E.FlagsPowerfulBuildHint",
    section: "N5E.RacialTraits",
    type: Boolean
  },
  reliableTalent: {
    name: "N5E.FlagsReliableTalent",
    hint: "N5E.FlagsReliableTalentHint",
    section: "N5E.Feats",
    type: Boolean
  },
  remarkableAthlete: {
    name: "N5E.FlagsRemarkableAthlete",
    hint: "N5E.FlagsRemarkableAthleteHint",
    abilities: ["str", "dex", "con"],
    section: "N5E.Feats",
    type: Boolean
  },
  weaponCriticalThreshold: {
    name: "N5E.FlagsWeaponCritThreshold",
    hint: "N5E.FlagsWeaponCritThresholdHint",
    section: "N5E.Feats",
    type: Number,
    placeholder: 20
  },
  spellCriticalThreshold: {
    name: "N5E.FlagsSpellCritThreshold",
    hint: "N5E.FlagsSpellCritThresholdHint",
    section: "N5E.Feats",
    type: Number,
    placeholder: 20
  },
  meleeCriticalDamageDice: {
    name: "N5E.FlagsMeleeCriticalDice",
    hint: "N5E.FlagsMeleeCriticalDiceHint",
    section: "N5E.Feats",
    type: Number,
    placeholder: 0
  }
};

/**
 * Flags allowed on actors. Any flags not in the list may be deleted during a migration.
 * @type {string[]}
 */
N5E.allowedActorFlags = ["isPolymorphed", "originalActor"].concat(Object.keys(N5E.characterFlags));
