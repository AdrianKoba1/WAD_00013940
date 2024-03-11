using _00013940_TaskTracker.Models;
namespace _00013940_TaskTracker.Repositories
{
    public interface ITasksRepository
    {
        IEnumerable<Tasks> GetAllTasks();
        Tasks GetTaskById(int id);
        Tasks CreateTask(Tasks task);
        Tasks UpdateTask(Tasks task);
        Tasks DeleteTask(int id);
    }
}
