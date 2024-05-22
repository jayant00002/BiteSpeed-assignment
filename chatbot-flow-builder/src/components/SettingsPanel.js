import React, { useState, useEffect } from 'react';
import './SettingsPanel.css';

function SettingsPanel({ selectedNode, updateNodeData, deselectNode }) {
  const [textValue, setTextValue] = useState(selectedNode.data.label);

  useEffect(() => {
    setTextValue(selectedNode.data.label);
  }, [selectedNode]);

  const handleChange = (event) => {
    const newText = event.target.value;
    setTextValue(newText);
    updateNodeData(selectedNode.id, { label: newText });
  };

  return (
    <aside className="settings-panel">
      <button className="back-button" onClick={deselectNode}>←</button>
      <h3>Message</h3>
      <label>Text</label>
      <textarea
        value={textValue}
        onChange={handleChange}
      />
    </aside>
  );
}

export default SettingsPanel;
