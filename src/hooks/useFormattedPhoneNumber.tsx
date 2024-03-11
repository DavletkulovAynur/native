import { useState, useMemo } from "react";

//ERROR: изучить тему

const useFormattedPhoneNumber = (): ((phoneNumber: string) => string) => {
  const [formattedNumber, setFormattedNumber] = useState<string>("");

  const formatPhoneNumber = (phoneNumber: string): string => {
    const numericOnly = phoneNumber.replace(/\D/g, "");

    if (!numericOnly.match(/^\d+$/)) {
      throw new Error("Некорректный формат номера телефона");
    }

    return `+7 (${numericOnly.slice(1, 4)}) ${numericOnly.slice(
      4,
      7
    )}-${numericOnly.slice(7, 9)}-${numericOnly.slice(9)}`;
  };

  const getFormattedNumber = useMemo(
    () =>
      (phoneNumber: string): string => {
        try {
          const newFormattedNumber = formatPhoneNumber(phoneNumber);
          setFormattedNumber(newFormattedNumber);
          return newFormattedNumber;
        } catch (error: any) {
          console.error(error.message);
          return ""; // Alternatively, you can return an error or another default value
        }
      },
    [formatPhoneNumber]
  );

  return getFormattedNumber;
};

export default useFormattedPhoneNumber;
