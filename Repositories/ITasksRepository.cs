using _00013940_TaskTracker.Models;
namespace _00013940_TaskTracker.Repositories
{
    public interface ITasksRepository
    {
        Task<IEnumerable<Tasks>> GetAllTasks();
        Task<Tasks> GetTaskById(int id);
        Task CreateTask(Tasks task);
        Task UpdateTask(Tasks task);
        Task DeleteTask(int id);
    }
}
