import React from "react";

interface Props {
  password: string;
}

const calculateStrength = (password: string) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
};

export const PasswordStrengthMeter: React.FC<Props> = ({ password }) => {
  const strength = calculateStrength(password);

  const labels = ["Very weak", "Weak", "Fair", "Strong"];
  const colors = [
    "bg-red-500",
    "bg-orange-400",
    "bg-yellow-400",
    "bg-green-500",
  ];

  if (!password) return null;

  return (
    <div className="mt-2">
      <div className="h-2 w-full bg-gray-200 rounded">
        <div
          className={`h-full rounded transition-all duration-300 ${colors[strength - 1]}`}
          style={{ width: `${(strength / 4) * 100}%` }}
        />
      </div>

      <p className="text-xs mt-1 text-gray-500">
        {labels[strength - 1]}
      </p>
    </div>
  );
};
