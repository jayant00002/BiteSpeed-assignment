import React from 'react';
import './NodesPanel.css';

function NodesPanel() {
  const onDragStart = (event, nodeType) => {

    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
    //console.log(event);
  };

  return (
    <aside className="nodes-panel">
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, 'textNode')}
        draggable
      >
        Text Node
      </div>
    </aside>
  );
}

export default NodesPanel;
