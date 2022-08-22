import { MigrationTasksUnits, TasksUnits } from '@pages/Admin/Unit/types';

export const finishedTasks = (tasks: TasksUnits[] | Record<string, string>[]) => {
  let count = 0;
  tasks?.forEach((current) => {
    if (current.status === 'FINISHED') {
      return count++;
    }
  });
  return { finished: count, total: tasks?.length };
};

export const finishedTasksTag = (tasks: TasksUnits[] | Record<string, string>[]) => {
  const { finished, total } = finishedTasks(tasks);
  return `${finished}/${total}`;
};

export function groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

export function groupTaskByTopic<K, V>(
  list: Array<MigrationTasksUnits>,
  keyGetter: (input: MigrationTasksUnits) => K,
): Map<K, Array<V>> {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, {
        title: item.migrationTask.topic.title,
        executionOrder: item.migrationTask.topic.executionOrder,
        tasks: [
          {
            ...item.migrationTask,
            deadline: item.deadline,
            unitId: item.unit.id,
            status: item.status,
          },
        ],
      });
    } else {
      collection.tasks.push({
        ...item.migrationTask,
        deadline: item.deadline,
        unitId: item.unit.id,
        status: item.status,
      });
    }
  });
  return map;
}

export function referenceDatesParser(unitId:string, salesClosingDate: string, contractEffectiveDate: string, migrationDate: string) {
  const dates = {unitId: unitId, salesClosingDate: salesClosingDate, contractEffectiveDate: contractEffectiveDate, migrationDate: migrationDate}
  return [dates]
}
