import React, { useState } from 'react';
import FlowBuilder from './components/FlowBuilder';
import NodesPanel from './components/NodesPanel';
import SettingsPanel from './components/SettingsPanel';
import './App.css';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [elements, setElements] = useState([]);

  const saveFlow = () => {
    const emptyTargetNodes = elements.filter(
      (el) => el.type === 'textNode' && el.targetPosition === undefined
    );

    if (emptyTargetNodes.length > 1) {
      alert('Error: More than one node has empty target handles');
    } else {
      // Logic to save the flow
      console.log('Flow saved:', elements);
    }
  };

  return (
    <div className="App">
      <NodesPanel />
      <FlowBuilder setSelectedNode={setSelectedNode} elements={elements} setElements={setElements} />
      {selectedNode && <SettingsPanel selectedNode={selectedNode} />}
      <button className="save-button" onClick={saveFlow}>
        Save
      </button>
    </div>
  );
}

export default App;
