import React from 'react';
import { Handle } from 'react-flow-renderer';
import './TextNode.css';

function TextNode({ data, selected }) {
  return (
    <div className={`text-node ${selected ? 'selected' : ''}`}>
      <div className="node-header">Send Message</div>
      <div className="node-content">{data.label}</div>
      <Handle type="target" position="left" />
      <Handle type="source" position="right" />
    </div>
  );
}

export default TextNode;
