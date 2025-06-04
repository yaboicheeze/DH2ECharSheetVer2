import { Button, Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { getAllText } from '../db/dexieDB';
import { handleObjectTextChange } from '../utilities/helperFunction';
import NoteModal from '../modals/notesModal';

import '../styles/TalentsTraits.css';

const Notes = () => {

  interface Note {
    id: number;
    textTitle?: string;
    textBody?: string;
  }

  const [notes, setNText] = useState<Note[]>([]);

  const onNChange = (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;

    setNText(prevNotes => {
      const updatedNotes = [...prevNotes];
      const noteToUpdate = updatedNotes[index];
      if (noteToUpdate) {
        updatedNotes[index] = {
          ...noteToUpdate,
          textBody: newText,
        };
        // Update database
        handleObjectTextChange(e, noteToUpdate.id, "notes", setNText);
      }
      return updatedNotes;
    });
  };

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await getAllText("notes"); // This returns Note[]
      setNText(allNotes);
    };

    fetchNotes();
  }, []);


  return (
    <div className='sub-widget-content'>
      {notes.map((note, index) => {
        const key = note.id;
        const textareaId = `noteTextarea-${key}`;
        
        return (
          <Collapse
            key={key}
            collapsible="header"
            items={[
              {
                key,
                label: note.textTitle || `Note ${key}`,
                children: (
                  <textarea id={textareaId} name={note.textTitle} className="talents-traits-textarea" value={note.textBody} onChange={onNChange(index)} />
                ),
              },
            ]}
          />
        );
      })}

      <NoteModal />
    </div>
  )
};

export default Notes;