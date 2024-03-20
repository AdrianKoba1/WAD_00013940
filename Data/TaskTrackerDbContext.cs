using _00013940_TaskTracker.Models;
using Microsoft.EntityFrameworkCore;


namespace _00013940_TaskTracker.Data
    
{
    public class TaskTrackerDbContext : DbContext
    {
        public TaskTrackerDbContext(DbContextOptions<TaskTrackerDbContext> options) : base(options) { }

        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<Status> Statuses { get; set; }


    }
}
