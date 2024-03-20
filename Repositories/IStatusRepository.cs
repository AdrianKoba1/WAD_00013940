using _00013940_TaskTracker.Models;
namespace _00013940_TaskTracker.Repositories
{
    public interface IStatusRepository
    {
        Task<IEnumerable<Status>> GetAllStatuses();
        Task<Status> GetStatusById(int id);
        Task CreateStatus(Status status);
        Task UpdateStatus(Status status);
        Task DeleteStatus(int id);
    }
}
