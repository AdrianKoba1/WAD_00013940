using _00013940_TaskTracker.Models;
using Microsoft.EntityFrameworkCore;


namespace _00013940_TaskTracker.Data
    
{
    public class TaskTrackerDbContext : DbContext
    {   
        //00013940
        public TaskTrackerDbContext(DbContextOptions<TaskTrackerDbContext> options) : base(options) { }

        public DbSet<Tasks> Tasks { get; set; }
        public DbSet<Status> Statuses { get; set; }


    }
}
