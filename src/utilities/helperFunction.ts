import { updateTextBody } from "../db/dexieDB";
import type { StoreName } from "../db/dexieDB";

export async function handleTextChange( e: React.ChangeEvent<HTMLTextAreaElement>, index: number, storeName: StoreName, setterMap: Record<number, React.Dispatch<React.SetStateAction<string>>> ): Promise<void> {
  const bodyToUpdate = e.target.value;
  setterMap[index](bodyToUpdate);
  await updateTextBody(storeName, index, bodyToUpdate);
}