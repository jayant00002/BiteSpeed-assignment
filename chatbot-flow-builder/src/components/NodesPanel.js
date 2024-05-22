import React from 'react';
import './NodesPanel.css';

function NodesPanel() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="nodes-panel">
      <h3>Message</h3>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'textNode')}
        draggable
      >
        <span>Message</span>
      </div>
    </aside>
  );
}

export default NodesPanel;
