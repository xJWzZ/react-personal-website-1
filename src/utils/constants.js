
import averageTree from 'relatives-tree/samples/average-tree.json';
import diffParents from 'relatives-tree/samples/diff-parents.json';
import divorcedParents from 'relatives-tree/samples/divorced-parents.json';
import empty from 'relatives-tree/samples/empty.json';
import severalSpouses from 'relatives-tree/samples/several-spouses.json';
import simpleFamily from 'relatives-tree/samples/simple-family.json';
import testTreeN1 from 'relatives-tree/samples/test-tree-n1.json';
import testTreeN2 from 'relatives-tree/samples/test-tree-n2.json';
import { Node } from 'relatives-tree/lib/types';

export const NODE_WIDTH = 70;
export const NODE_HEIGHT = 80;

export const SOURCES = {
  'average-tree.json': averageTree,
  'diff-parents.json': diffParents,
  'divorced-parents.json': divorcedParents,
  'empty.json': empty,
  'several-spouses.json': severalSpouses,
  'simple-family.json': simpleFamily,
  'test-tree-n1.json': testTreeN1,
  'test-tree-n2.json': testTreeN2,
};

export const DEFAULT_SOURCE = Object.keys(SOURCES)[0];

export const URL_LABEL = 'URL (Gist, Paste.bin, ...)';

export const API_BASE_URL = 'http://localhost:8080/api/v1/';
export const MOCK_API = false;
