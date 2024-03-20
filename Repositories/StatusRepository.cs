using _00013940_TaskTracker.Data;
using _00013940_TaskTracker.Models;
using Microsoft.EntityFrameworkCore;

namespace _00013940_TaskTracker.Repositories
{
    public class StatusRepository : IStatusRepository
    {
        private readonly TaskTrackerDbContext _dbContext;

        public StatusRepository(TaskTrackerDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IEnumerable<Status>> GetAllStatuses()
        {
            return await _dbContext.Statuses.ToListAsync();
            
        }

        public async Task<Status> GetStatusById(int id)
        {
            return await _dbContext.Statuses.FirstOrDefaultAsync(t => t.Id == id);
        }
        public async Task CreateStatus(Status status)
        {
            await _dbContext.Statuses.AddAsync(status);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteStatus(int id)
        {
            var status = await _dbContext.Statuses.FirstOrDefaultAsync(t => t.Id == id);
            if (status != null)
            {
                _dbContext.Statuses.Remove(status);
                await _dbContext.SaveChangesAsync();
            }
        }


        public async Task UpdateStatus(Status status)
        {
            _dbContext.Entry(status).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }
    }
}
