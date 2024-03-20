using _00013940_TaskTracker.Data;
using Microsoft.EntityFrameworkCore;
using _00013940_TaskTracker.Controllers;
using _00013940_TaskTracker.Repositories;
using _00013940_TaskTracker;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<TaskTrackerDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("TaskTrackerConnectionString")));
builder.Services.AddScoped<ITasksRepository, TasksRepository>();
builder.Services.AddScoped<IStatusRepository, StatusRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:4200") // Add your Angular application URL
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


var app = builder.Build();
app.UseCors("AllowOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
   
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
