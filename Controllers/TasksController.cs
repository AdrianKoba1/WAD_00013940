using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using _00013940_TaskTracker.Data;
using _00013940_TaskTracker.Models;
using _00013940_TaskTracker.Repositories;

namespace _00013940_TaskTracker.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        private readonly TaskTrackerDbContext _context;
        private readonly ITasksRepository _tasksRepository;

        public TasksController(ITasksRepository tasksRepository)
        {
            
            _tasksRepository = tasksRepository;
        }

        // GET: api/Tasks
        [HttpGet]
        
        public async Task<IEnumerable<Tasks>> GetTasks()
        {
          
            return await _tasksRepository.GetAllTasks();
        }

        // GET: api/Tasks/5
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Tasks), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Tasks>> GetTasks(int id)
        {
            var tasks = await _tasksRepository.GetTaskById(id);

            if (tasks == null)
            {
              return NotFound();
            }

            return Ok(tasks);
            

           
        }

        // PUT: api/Tasks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public async Task<IActionResult> PutTasks(int id, Tasks tasks)
        {
            if (id != tasks.Id)
            {
                return BadRequest();
            }

            await _tasksRepository.UpdateTask(tasks);
            return NoContent();
        }

        // POST: api/Tasks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        
        public async Task<ActionResult<Tasks>> PostTasks(Tasks tasks)
        {
          
            await _tasksRepository.CreateTask(tasks);

            return CreatedAtAction("GetTasks", new { id = tasks.Id }, tasks);
        }

        // DELETE: api/Tasks/5
        [HttpDelete("{id}")]
        
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteTasks(int id)
        {
            await _tasksRepository.DeleteTask(id);
            return NoContent();
        }

        
    }
}
