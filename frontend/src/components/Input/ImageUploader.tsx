import React, { useState } from "react";

interface ImageUploaderProps {
  label?: string;
  onChange: (file: File | null) => void;
  className?: string;
  error?: string;
  name?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  onChange,
  className,
  name,
}) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
    onChange(file);
  };

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="mb-2 block text-black dark:text-white">{label}</label>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        name={name}
        className="mb-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-opacity-90"
      />
      {preview && (
        <div className="mt-2">
          <img
            src={preview}
            alt="Preview"
            className="w-full object-cover rounded"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
