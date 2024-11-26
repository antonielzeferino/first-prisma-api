/*
  Warnings:

  - You are about to drop the column `slug` on the `Post` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Post_slug_key";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "slug",
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "email" SET DATA TYPE TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PostTags" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostTags_AB_unique" ON "_PostTags"("A", "B");

-- CreateIndex
CREATE INDEX "_PostTags_B_index" ON "_PostTags"("B");

-- AddForeignKey
ALTER TABLE "_PostTags" ADD CONSTRAINT "_PostTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostTags" ADD CONSTRAINT "_PostTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
