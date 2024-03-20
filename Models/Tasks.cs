using _00013940_TaskTracker.Data;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace _00013940_TaskTracker.Models
{
    public class Tasks
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required!")]
        public string Title { get; set; }

        public string? Description { get; set; }
        [Required(ErrorMessage = "Status is required!")]
        public int? StatusId { get; set; }
        
        [ForeignKey("StatusId")]
        public Status? Status { get; set; }
    }


}

