import Dexie from 'dexie';
import type { Table } from 'dexie';

// Define your data shape
export interface Characteristic {
  id: string;
  charName?: string;
  charScore?: number;
  charModBonus?: number;
  charMod?: number;
}

export interface Aptitudes {
  id: number;
  textBody: string;
}

export interface Armor {
  id: string;
  armorTotal?: number;
  armorBonus?: number;
}

export interface Skills {
  id: string;
  skillLevel?: number;
}

export interface MiscStats {
  id: string;
  value?: number;
}

export interface Inventory {
  id: number;
  invName?: string;
  invWeight?: number;
  invQuantity?: number;
  invDescription?: string;
}

export interface Weapons {
  id: number;
  weapName?: string;
  weapDMG?: string;
  weapPEN?: string;
  weapROF?: string;
  weapRange?: string;
  weapClip?: string;
  weapReload?: string;
  weapClass?: string;
  weapWeight?: string;
  weapAvailability?: string;
  weapNotes?: string;
}

export interface PsykerPowers {
  id: number;
  psyAction?: string;
  psyFocusPower?: string;
  psyRange?: string;
  psySustained?: string;
  psySubtype?: string;
  psyEffect?: string;
}

export interface TalentTraitBonus {
  id: number;
  textBody?: string;
}

export interface ThreeMs {
  id: number;
  textBody?: string;
}

export interface CharacterInfo {
  id: number;
  textBody?: string;
}

export interface Notes {
  id: number;
  textTitle?: string;
  textBody?: string;
}

// Create Dexie DB instance
export class MyDB extends Dexie {
  characteristics!: Table<Characteristic, string>;
  armor!: Table<Armor, string>;
  aptitudes!: Table<Aptitudes, number>;
  skills!: Table<Skills, string>;
  miscStats!: Table<MiscStats, string>;
  inventory!: Table<Inventory, number>;
  weapons!: Table<Weapons, number>;
  psykerPowers!: Table<PsykerPowers, number>;
  notes!: Table<Notes, number>;
  talentTraitBonus!: Table<TalentTraitBonus, number>;
  threeMs!: Table<ThreeMs, number>;

  constructor() {
    super("MyDB");

    this.version(1).stores({
      characteristics: "id",
      armor: "id",
      aptitudes: "id",
      skills: "id",
      miscStats: "id",
      inventory: "id",
      weapons: "id",
      psykerPowers: "id",
      notes: "id",
      talentTraitBonus: "id",
      threeMs: "id",
    });

    // 💡 This only runs when the DB is first created (first time user loads app)
    this.on('populate', async () => {
      await this.characteristics.bulkPut([
        { id: "weaponScore", charName: 'Weapon Skill', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "ballisticScore", charName: 'Ballistic Skill', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "strengthScore", charName: 'Strength', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "toughScore", charName: 'Toughness', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "agilityScore", charName: 'Agility', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "intellScore", charName: 'Intelligence', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "percepScore", charName: 'Perception', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "willScore", charName: 'Willpower', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "fellowScore", charName: 'Fellowship', charScore: 10, charModBonus: 0, charMod: 1 },
        { id: "influenceScore", charName: 'Influence', charScore: 10, charModBonus: 0, charMod: 1 },
      ]);

      await this.aptitudes.bulkPut([
        { id: 1, textBody: '1: \n2: \n3: \n4: \n5: \n6: ' },
      ]);

      await this.talentTraitBonus.bulkPut([
        { id: 1, textBody: '' },
        { id: 2, textBody: '' },
        { id: 3, textBody: '' },
      ]);

      await this.threeMs.bulkPut([
        { id: 1, textBody: '' },
        { id: 2, textBody: '' },
        { id: 3, textBody: '' },
      ]);


      await this.miscStats.bulkPut([
        { id: "carryTotal", value: 4.5 },
        { id: "carryList", value: 0 },
        { id: "carryPush", value: 0 },
        { id: "carryCurrent", value: 0 },
        { id: "criticalHealth", value: 10 },
        { id: "woundsTotal", value: 10 },
        { id: "woundsCurrent", value: 10 },
        { id: "expCurrent", value: 0 },
        { id: "expSpent", value: 0 },
        { id: "fateTotal", value: 0 },
        { id: "fateCurrent", value: 0 },
        { id: "fatigueTotal", value: 0 },
        { id: "fatigueCurrent", value: 0 },
        { id: "corruptionScore", value: 0 },
        { id: "corruptionMod", value: 0 },
        { id: "insanityScore", value: 0 },
        { id: "insanityMod", value: 0 },
        { id: "psyRating", value: 0 },
      ]);

      await this.skills.bulkPut([
        { id: "acrobatics", skillLevel: 0 },
        { id: "athletics", skillLevel: 0 },
        { id: "awareness", skillLevel: 0 },
        { id: "charm", skillLevel: 0 },
        { id: "command", skillLevel: 0 },
        { id: "commerce", skillLevel: 0 },
        { id: "commonLore", skillLevel: 0 },
        { id: "decieve", skillLevel: 0 },
        { id: "dodge", skillLevel: 0 },
        { id: "forbiddenLore", skillLevel: 0 },
        { id: "inquiry", skillLevel: 0 },
        { id: "interrogation", skillLevel: 0 },
        { id: "intimidate", skillLevel: 0 },
        { id: "linguistics", skillLevel: 0 },
        { id: "logic", skillLevel: 0 },
        { id: "medicae", skillLevel: 0 },
        { id: "navSurface", skillLevel: 0 },
        { id: "navStellar", skillLevel: 0 },
        { id: "navWarp", skillLevel: 0 },
        { id: "operAero", skillLevel: 0 },
        { id: "operSurface", skillLevel: 0 },
        { id: "operVoidship", skillLevel: 0 },
        { id: "parry", skillLevel: 0 },
        { id: "psyniscience ", skillLevel: 0 },
        { id: "scholasticLore", skillLevel: 0 },
        { id: "scrutiny", skillLevel: 0 },
        { id: "security", skillLevel: 0 },
        { id: "sleightOfHand", skillLevel: 0 },
        { id: "stealth", skillLevel: 0 },
        { id: "survival", skillLevel: 0 },
        { id: "techUse", skillLevel: 0 },
        { id: "trade", skillLevel: 0 },
      ]);
    });
  }
}

export const db = new MyDB();
db.open();

export async function addItem() {
  await db.characteristics.update("weaponScore", { charScore: 20, charMod: 999 });
  await db.miscStats.put({ id: "carryTotal", value: 999 });
  console.log("added the items");
}

export async function updateCharacteristic(charId: string, value: number, add: number) {
  await db.characteristics.update(charId, { charScore: value, charModBonus: add });
  const updatedMod = Math.floor((value / 10) % 10 + add);
  await db.characteristics.update(charId, { charMod: updatedMod });
}

const storeMap = {
  aptitudes: db.aptitudes,
  menMalMut: db.threeMs,
  talTraBon: db.talentTraitBonus,
  skills: db.skills,
  notes: db.notes,
};

export type StoreName = keyof typeof storeMap;

export async function updateTextBody(storeName: StoreName, elementId: number, body: string) {
  const store = storeMap[storeName] as Dexie.Table<any, any>;
  const exists = await store.get(elementId);

  if (exists) {
    await store.update(elementId, { textBody: body });
  }
  else {
    await store.put({ id: elementId, textBody: body });
  }
}

export async function returnTextBody(storeName: StoreName, loopAmount:number) {
  const store = storeMap[storeName] as Dexie.Table<any, any>;
  const textToReturn = await store.get(loopAmount);
  return textToReturn?.textBody;
}

export async function loadFromMemory() {

}

export async function loadFromFile() {

}

export async function saveToFile() {

}