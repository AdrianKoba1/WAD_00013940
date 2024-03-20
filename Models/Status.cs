using System.ComponentModel.DataAnnotations;

namespace _00013940_TaskTracker.Models
{
    public class Status
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Current status of the task is required!")]
        public string? TaskStatus { get; set; }
        public string? Color { get; set; }
    }
}
