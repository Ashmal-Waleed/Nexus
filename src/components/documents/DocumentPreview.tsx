export default function DocumentPreview({ file }: { file: File | null }) {
  if (!file) return null;

  return (
    <iframe
      src={URL.createObjectURL(file)}
      className="w-full h-[400px] border rounded"
    />
  );
}
