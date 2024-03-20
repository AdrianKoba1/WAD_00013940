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
    public class StatusController : ControllerBase
    {
        private readonly TaskTrackerDbContext _context;
        private readonly IStatusRepository _statusesRepository;

        public StatusController(IStatusRepository statusesRepository)
        {

            _statusesRepository = statusesRepository;
        }

        // GET: api/Statuses
        [HttpGet]
        public async Task<IEnumerable<Status>> GetStatuses()
        {

            return await _statusesRepository.GetAllStatuses();
        }

        // GET: api/Status/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Status>> GetStatus(int id)
        {
            var status = await _statusesRepository.GetStatusById(id);

            if (status == null)
            {
              return NotFound();
            }

            return Ok(status);
            

           
        }

        // PUT: api/Status/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutStatus(int id, Status status)
        {
            if (id != status.Id)
            {
                return BadRequest();
            }

            await _statusesRepository.UpdateStatus(status);
            return NoContent();
        }

        // POST: api/Status
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tasks>> PostStatus(Status status)
        {
          
            await _statusesRepository.CreateStatus(status);

            return CreatedAtAction("GetStatus", new { id = status.Id }, status);
        }

        // DELETE: api/Status/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeleteStatus(int id)
        {
            await _statusesRepository.DeleteStatus(id);
            return NoContent();
        }

        
    }
}
