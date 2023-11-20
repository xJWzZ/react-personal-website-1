import React, { useMemo, useState, useCallback } from 'react';
import type { Node, ExtNode } from 'relatives-tree/lib/types';
import treePackage from 'relatives-tree/package.json';
import ReactFamilyTree from 'react-family-tree';
import { PinchZoomPan } from '../PinchZoomPan/PinchZoomPan';
import { FamilyNode } from '../FamilyNode/FamilyNode';
import { NodeDetails } from '../NodeDetails/NodeDetails';
import { NODE_WIDTH, NODE_HEIGHT, SOURCES, DEFAULT_SOURCE } from '../const';
import { getNodeStyle } from './utils';

import './FamilyTree.module.css';
import { SourceSelect } from '../SourceSelect/SourceSelect';

export default React.memo(
  function FamilyTree() {
    const [nodes, setNodes] = useState(DEFAULT_SOURCE);

    const firstNodeId = useMemo(() => nodes[0].id, [nodes]);
    const [rootId, setRootId] = useState(firstNodeId);

    const [selectId, setSelectId] = useState<string>();
    const [hoverId, setHoverId] = useState<string>();

    console.log(selectId);

    const resetRootHandler = useCallback(() => setRootId(firstNodeId), [firstNodeId]);


    const selected = useMemo(() => (
      nodes.find(item => item.id === selectId)
    ), [nodes, selectId]);

    return (
      <div>
        {nodes.length > 0 && (
          <PinchZoomPan min={1} max={3} captureWheel>
            <ReactFamilyTree
              nodes={nodes}
              rootId={rootId}
              width={NODE_WIDTH}
              height={NODE_HEIGHT}
              renderNode={(node: Readonly<ExtNode>) => (
                <FamilyNode
                  key={node.id}
                  node={node}
                  isRoot={node.id === rootId}
                  isHover={node.id === hoverId}
                  onClick={setSelectId}
                  onSubClick={setRootId}
                  style={getNodeStyle(node)}
                />
              )}
            />
          </PinchZoomPan>
        )}
        
        {selected && (
          <NodeDetails
            node={selected}
            onSelect={setSelectId}
            onHover={setHoverId}
            onClear={() => setHoverId(undefined)}
          />
        )}
        {rootId !== firstNodeId && (
          <button className="familyTreeButton" onClick={resetRootHandler}>
            Reset
          </button>
        )}
      </div>
    );
  },
);
