using Microsoft.EntityFrameworkCore;

namespace _00013940_TaskTracker.Data
    
{
    public class TaskTrackerDbContext : DbContext
    {
        public TaskTrackerDbContext(DbContextOptions<TaskTrackerDbContext> options) : base(options) { }

        public DbSet<Task> Tasks { get; set; }
    }
}
