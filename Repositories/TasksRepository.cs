using _00013940_TaskTracker.Data;
using _00013940_TaskTracker.Models;
using Microsoft.EntityFrameworkCore;

namespace _00013940_TaskTracker.Repositories
{
    public class TasksRepository : ITasksRepository
    {
        private readonly TaskTrackerDbContext _dbContext;

        public TasksRepository(TaskTrackerDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<Tasks>> GetAllTasks()
        {
            return await _dbContext.Tasks.ToListAsync();
            
        }

        public async Task<Tasks> GetTaskById(int id)
        {
            return await _dbContext.Tasks.FirstOrDefaultAsync(t => t.Id == id);
        }
        public async Task CreateTask(Tasks task)
        {
            await _dbContext.Tasks.AddAsync(task);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteTask(int id)
        {
           var task = await _dbContext.Tasks.FirstOrDefaultAsync(t =>t.Id == id);
            if (task != null)
            {
                _dbContext.Tasks.Remove(task);
                await _dbContext.SaveChangesAsync();
            }
        }


        public async Task UpdateTask(Tasks task)
        {
            _dbContext.Entry(task).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
