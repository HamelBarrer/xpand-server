-- CreateTable
CREATE TABLE "NoteStates" (
    "noteStateId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NoteStates_pkey" PRIMARY KEY ("noteStateId")
);

-- CreateTable
CREATE TABLE "Notes" (
    "noteId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "noteStateId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notes_pkey" PRIMARY KEY ("noteId")
);

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_noteStateId_fkey" FOREIGN KEY ("noteStateId") REFERENCES "NoteStates"("noteStateId") ON DELETE RESTRICT ON UPDATE CASCADE;
