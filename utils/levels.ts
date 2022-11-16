import topic from '../assets/data/topic';
export const groupByLevel = (topics: any[]) => {
  const levels: { [key: number]: any[] } = {};
  topics.forEach(node => {
    if (!levels[node.level]) {
      levels[node.level] = [];
    }
    levels[node.level].push(node);
  });
  const levelsArr = Object.values(levels);
  return levelsArr;
};
