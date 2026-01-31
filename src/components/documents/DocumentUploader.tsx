export default function DocumentUploader({
  onUpload,
}: {
  onUpload: (file: File) => void;
}) {
  return (
    <input
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={(e) => {
        if (e.target.files?.[0]) {
          onUpload(e.target.files[0]);
        }
      }}
      className="border p-2 rounded"
    />
  );
}
