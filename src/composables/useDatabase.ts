import Dexie from "dexie";
import type { Table } from "dexie";

export interface Font {
  id?: number;
  name: string;
  type: string;
  file: File;
}

export class FontsStorageDexie extends Dexie {
  // 'fonts' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  fonts!: Table<Font>;

  constructor() {
    super("typetesterStorage");
    this.version(1).stores({
      fonts: "++id, name, type, file",
    });
  }
}

export const database = new FontsStorageDexie();
