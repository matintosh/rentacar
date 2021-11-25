export async function uploadFiles(files: any, uploadMethod: (file: any) => Promise<any>) {
  return await Promise.all(files.map(uploadMethod));
}