/*
  Warnings:

  - Added the required column `liked` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tweet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "payload" TEXT NOT NULL,
    "liked" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Tweet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Tweet" ("createdAt", "id", "payload", "updatedAt", "userId") SELECT "createdAt", "id", "payload", "updatedAt", "userId" FROM "Tweet";
DROP TABLE "Tweet";
ALTER TABLE "new_Tweet" RENAME TO "Tweet";
CREATE UNIQUE INDEX "Tweet_payload_key" ON "Tweet"("payload");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
