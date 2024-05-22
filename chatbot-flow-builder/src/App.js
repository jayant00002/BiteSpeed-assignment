import React, { useState } from 'react';
import FlowBuilder from './components/FlowBuilder';
import NodesPanel from './components/NodesPanel';
import SettingsPanel from './components/SettingsPanel';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const saveFlow = () => {
    const emptyTargetNodes = nodes.filter(
      (node) => node.type === 'textNode' && edges.filter((edge) => edge.target === node.id).length === 0
    );

    if (emptyTargetNodes.length > 1) {
      toast.error('Cannot save Flow: More than one node has empty target handles');
    } else {
      // Logic to save the flow
      console.log('Flow saved:', { nodes, edges });
      toast.success('Flow saved successfully');
    }
  };

  const updateNodeData = (nodeId, data) => {
    setNodes((nds) =>
      nds.map((node) => (node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node))
    );
  };

  const deselectNode = () => {
    setSelectedNode(null);
  };

  return (
    <div className="App">
      <FlowBuilder
        setSelectedNode={setSelectedNode}
        nodes={nodes}
        setNodes={setNodes}
        edges={edges}
        setEdges={setEdges}
        selectedNode={selectedNode}
      />
      <div className="panel">
        <button className="save-button" onClick={saveFlow}>
          Save Changes
        </button>
        {!selectedNode && <NodesPanel />}
        {selectedNode && (
          <SettingsPanel
            selectedNode={selectedNode}
            updateNodeData={updateNodeData}
            deselectNode={deselectNode}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
