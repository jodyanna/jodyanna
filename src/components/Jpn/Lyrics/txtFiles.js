// Import all .txt files
import shynessBoyEnRaw from "./txt/shyness-boy-en.txt";
import shynessBoyJpRaw from "./txt/shyness-boy-jp.txt";
import paradisusParadoxumEnRaw from "./txt/paradisus-paradoxum-en.txt";
import paradisusParadoxumJpRaw from "./txt/paradisus-paradoxum-jp.txt";
import kataomoiwazuraiEnRaw from "./txt/kataomoiwazurai-en.txt";
import kataomoiwazuraiJpRaw from "./txt/kataomoiwazurai-jp.txt";

// Export as one object
export const lyrics = {
  "shyness-boy": {
    en: shynessBoyEnRaw,
    jp: shynessBoyJpRaw
  },
  "paradisus-paradoxum": {
    en: paradisusParadoxumEnRaw,
    jp: paradisusParadoxumJpRaw
  },
  "kataomoiwazurai": {
    en: kataomoiwazuraiEnRaw,
    jp: kataomoiwazuraiJpRaw
  }
}