using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Cache.Repository.Implementation;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Cache.Repository.Interface;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.LoggingFiles.LoggingService;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Implementations;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Services.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System.IO;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "AFeez Jean Edwards Consulting Task ", Version = "v1" });
});

// Register services
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<ILoggingService, LoggingService>();
builder.Services.AddScoped<IAssesssmentService, AssesssmentService>();
builder.Services.AddScoped<IomdbapiService, omdbapiService>();
builder.Services.AddScoped<ICacheService, CacheService>();
builder.Services.AddControllersWithViews()
                .AddJsonOptions(options =>
                {
                    options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
                });

// Load configuration from appsettings.json
builder.Configuration.SetBasePath(Directory.GetCurrentDirectory());
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost5173",
        builder =>
        {
            builder.WithOrigins("http://localhost:5173")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});
var app = builder.Build();

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "AFeez Jean Edwards Consulting Task ");
    });
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseCors("AllowLocalhost5173");
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
