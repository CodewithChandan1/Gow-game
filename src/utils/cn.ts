type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassDictionary = Record<string, any>;
type ClassArgument = ClassValue | ClassArray | ClassDictionary;

export function cn(...inputs: ClassArgument[]): string {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}