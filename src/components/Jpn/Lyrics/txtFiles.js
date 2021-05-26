// Import all .txt files
import shynessBoyEnRaw from "./shyness-boy-en.txt";
import shynessBoyJpRaw from "./shyness-boy-jp.txt";
import paradisusParadoxumEnRaw from "./paradisus-paradoxum-en.txt";
import paradisusParadoxumJpRaw from "./paradisus-paradoxum-jp.txt";

// Export as one object
export const lyrics = {
  "shyness-boy": {
    en: shynessBoyEnRaw,
    jp: shynessBoyJpRaw
  },
  "paradisus-paradoxum": {
    en: paradisusParadoxumEnRaw,
    jp: paradisusParadoxumJpRaw
  }
}