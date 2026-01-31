import { useState } from "react";
import DocumentUploader from "../../components/documents/DocumentUploader";
import DocumentPreview from "../../components/documents/DocumentPreview";
import SignaturePad from "../../components/documents/SignaturePad";
import { DocumentStatus } from "../../types/index";

export default function DocumentChamber() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<DocumentStatus>("Draft");

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold">Document Chamber</h1>

      <DocumentUploader onUpload={setFile} />
      <DocumentPreview file={file} />

      <div className="flex items-center gap-3">
        <span>Status:</span>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as DocumentStatus)}
          className="border p-1 rounded"
        >
          <option>Draft</option>
          <option>In Review</option>
          <option>Signed</option>
        </select>
      </div>

      {status === "Signed" && (
        <>
          <h2 className="font-medium">E-Signature</h2>
          <SignaturePad />
        </>
      )}
    </div>
  );
}
