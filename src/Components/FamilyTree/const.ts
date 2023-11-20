import averageTree from 'relatives-tree/samples/average-tree.json';
import couple from '../../data/couple.json';
import diffParents from 'relatives-tree/samples/diff-parents.json';
import backendSampleOutput from '../../data/backend-sample-output.json';
import divorcedParents from 'relatives-tree/samples/divorced-parents.json';
import empty from 'relatives-tree/samples/empty.json';
import severalSpouses from 'relatives-tree/samples/several-spouses.json';
import simpleFamily from 'relatives-tree/samples/simple-family.json';
import testTreeN1 from 'relatives-tree/samples/test-tree-n1.json';
import testTreeN2 from 'relatives-tree/samples/test-tree-n2.json';
import { RelType, type Gender, type Node } from 'relatives-tree/lib/types';

export const NODE_WIDTH = 80;
export const NODE_HEIGHT = 100;

interface Relationship {
  relationshipID: number;
  relatedPersonID: number;
  relationshipType: string;
}

interface inputDataBeforeTransformation {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  relationships: Relationship[];
  gender: string | null;
  info: string;
  createDate: string;
  lastModified: string | null;
  createdBy: number;
  lastModifiedBy: number | null;
}

function transformInputData(inputDataBeforeTransformation: inputDataBeforeTransformation[]): Node[] {
  return inputDataBeforeTransformation.map((person) => {
    const parents = person.relationships
      .filter((relationship) => relationship.relationshipType === 'parent')
      .map((parent) => ({ id: parent.relatedPersonID.toString(), type: RelType.blood }));

    const spouses = person.relationships
      .filter((relationship) => relationship.relationshipType === 'spouse')
      .map((spouse) => ({ id: spouse.relatedPersonID.toString(), type: RelType.married }));

    const children = person.relationships
      .filter((relationship) => relationship.relationshipType === 'children')
      .map((child) => ({ id: child.relatedPersonID.toString(), type: RelType.blood }));

    const personNode: Node = {
      id: person.id.toString(),
      name: `${person.firstName} ${person.lastName}`,
      gender: person.gender as Gender,
      parents,
      siblings: [], // You may need to populate this based on your data model
      children,
      spouses,
    };

    return personNode;
  });
}

export const SOURCES = {
  'couple-json': couple,
  'backendSampleOutput': backendSampleOutput
} as unknown as Readonly<{ [key: string]: readonly Readonly<Node>[] }>;

export const transformedData: Readonly<Node>[] = transformInputData(backendSampleOutput);

export const DEFAULT_SOURCE = transformedData;

export const URL_LABEL = 'URL (Gist, Paste.bin, ...)';
