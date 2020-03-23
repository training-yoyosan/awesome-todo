export default function () {
  return {
    tasks: {
      ID1: {
        name: 'Go to shop',
        completed: false,
        dueDate: '2020/03/16',
        dueTime: '09:30'
      },
      ID2: {
        name: 'Get bananas',
        completed: false,
        dueDate: '2020/03/15',
        dueTime: '10:30'
      },
      ID3: {
        name: 'Get apples',
        completed: false,
        dueDate: '2020/03/14',
        dueTime: '15:00'
      }
    },
    showAddTaskModal: false,
    showEditTaskModal: false
  }
}
