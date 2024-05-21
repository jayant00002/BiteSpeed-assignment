import React from 'react';
import './SettingsPanel.css';

function SettingsPanel({ selectedNode }) {
  const handleChange = (event) => {
    // Update node data here
  };

  return (
    <aside className="settings-panel">
      <label>Text:</label>
      <input
        type="text"
        value={selectedNode.data.label}
        onChange={handleChange}
      />
    </aside>
  );
}

export default SettingsPanel;
