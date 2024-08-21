/*
  Warnings:

  - You are about to drop the column `venue` on the `Event` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[venueId]` on the table `Event` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "venue",
ADD COLUMN     "venueId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Event_venueId_key" ON "Event"("venueId");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_venueId_fkey" FOREIGN KEY ("venueId") REFERENCES "Venue"("id") ON DELETE SET NULL ON UPDATE CASCADE;
