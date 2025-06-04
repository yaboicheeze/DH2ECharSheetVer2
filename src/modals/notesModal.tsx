import { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import { updateNote } from '../db/dexieDB';

const NoteModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleSave = () => {
    console.log('Note saved:', { noteTitle, noteBody });
    
    updateNote("notes", undefined, noteTitle, noteBody);

    setIsModalOpen(false);
    setNoteTitle('');
    setNoteBody('');
  };

  return (
    <>
      <Button onClick={handleOpen}>Add Note</Button>

      <Modal title="New Note" open={isModalOpen} onOk={handleSave} onCancel={handleClose} okText="Save" cancelText="Cancel"
      >
        <Input placeholder="Note Title"
          value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} style={{ marginBottom: '10px' }}
        />
        <Input.TextArea
          rows={6} placeholder="Note Body" value={noteBody} onChange={(e) => setNoteBody(e.target.value)}
        />
      </Modal>
    </>
  );
};

export default NoteModal;