import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  Controls,
  Background,
  ReactFlowProvider,
} from 'react-flow-renderer';
import TextNode from './TextNode';
import './FlowBuilder.css';

const nodeTypes = {
  textNode: TextNode,
};

const initialNodes = [];
const initialEdges = [];

function FlowBuilder({ setSelectedNode, elements, setElements }) {
  const onNodesChange = useCallback(
    (changes) => setElements((els) => applyNodeChanges(changes, els)),
    [setElements]
  );

  const onEdgesChange = useCallback(
    (changes) => setElements((els) => applyEdgeChanges(changes, els)),
    [setElements]
  );

  const onConnect = useCallback(
    (params) => setElements((els) => addEdge(params, els)),
    [setElements]
  );

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();

    const reactFlowBounds = event.target.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    };

    const newNode = {
      id: `${type}-${elements.length}`,
      type,
      position,
      data: { label: `${type} node` },
    };

    setElements((els) => els.concat(newNode));
  };
  const onNodeClick = (event, node) => setSelectedNode(node);


    // const onElementClick = (event, element) => {
    //     console.log('element clicked:', element);
    //     setSelectedNode(element)
    // };

  return (
    <div className="flow-builder">
      <ReactFlowProvider>
        <ReactFlow
          nodes={elements}
          edges={elements}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          nodeTypes={nodeTypes}
          onDragOver={onDragOver}
          onDrop={onDrop}
          style={{ width: '100%', height: '90vh' }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default FlowBuilder;
