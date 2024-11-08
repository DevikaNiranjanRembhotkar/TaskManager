import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  fileUploader: f({ pdf: { maxFileSize: "4MB" } })
  .onUploadComplete(async ({ file }) => {
  console.log("file url", file.url);
  return { message:"Pdf Upload Complete" };
  })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
