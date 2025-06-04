import { updateTextBody } from "../db/dexieDB";
import type { StoreName } from "../db/dexieDB";

export async function handleTextChange( e: React.ChangeEvent<HTMLTextAreaElement>, index: number, storeName: StoreName, setterMap: Record<number, React.Dispatch<React.SetStateAction<string>>> ): Promise<void> {
  const bodyToUpdate = e.target.value;
  setterMap[index](bodyToUpdate);
  await updateTextBody(storeName, index, bodyToUpdate);
}

export async function handleDynamicTextChange(e: React.ChangeEvent<HTMLTextAreaElement>, index: number, storeName: StoreName, setArrayState: React.Dispatch<React.SetStateAction<string[]>> ): Promise<void> {
  const value = e.target.value;

  // Update local state array
  setArrayState(prev => {
    const updated = [...prev];
    updated[index] = value;
    return updated;
  });

  // Update IndexedDB
  await updateTextBody(storeName, index, value);
}

interface HasTextBodyAndId {
  id: number;
  textBody?: string;
}

export async function handleObjectTextChange<T extends HasTextBodyAndId>(e: React.ChangeEvent<HTMLTextAreaElement>, objectId: number, storeName: StoreName, setArrayState: React.Dispatch<React.SetStateAction<T[]>> ): Promise<void> {
  const value = e.target.value;

  // Update local state
  setArrayState(prev => {
    return prev.map(item =>
      item.id === objectId ? { ...item, textBody: value } : item
    );
  });

  // Update IndexedDB
  await updateTextBody(storeName, objectId, value);
}