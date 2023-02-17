import Dexie from "dexie";
import type { Table } from "dexie";

export interface Font {
  id?: number;
  name: string;
  size: number;
  fileName: string;
  type: string;
  file: File;
}

export class FontsStorageDexie extends Dexie {
  // 'fonts' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  fonts!: Table<Font>;

  constructor() {
    super("fontsStorage");
    this.version(1).stores({
      fonts: "++id, name, fileName, file",
    });
  }
}

export const database = new FontsStorageDexie();
