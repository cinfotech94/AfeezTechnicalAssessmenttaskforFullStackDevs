using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.LoggingModel;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request;
using Microsoft.Extensions.Options;
using System;
using System.IO;
namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.LoggingFiles.LoggingService
{
    public class LoggingService : ILoggingService
    {
        private readonly IConfiguration _configuration;
        private readonly string _logFilePath;

        public LoggingService(IConfiguration configuration)
        {
            _logFilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Logging", "logFiles", "error.log");
        }

        public void LogError(LoggingModel loggingModel)
        {
            try
            {
                using (StreamWriter writer = new StreamWriter(_logFilePath, true))
                {
                    writer.WriteLine($"Id:{loggingModel.LogId} -ServiceName:{loggingModel.ServiceName}-DateTimeNow: {loggingModel.LogTime} - Error: {loggingModel.ErrorMessage}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error logging to file: {ex.Message}");
            }
        }
    }
}
