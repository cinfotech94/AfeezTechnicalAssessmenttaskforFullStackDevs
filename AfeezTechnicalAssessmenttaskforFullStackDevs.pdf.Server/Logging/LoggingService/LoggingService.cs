using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.LoggingModel;
using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.Request;
using Microsoft.Extensions.Options;
using System;
using System.IO;
namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.LoggingFiles.LoggingService
{
    public class LoggingService : ILoggingService
    {
        private readonly IWebHostEnvironment _env;
        private readonly string _logFilePath;

        public LoggingService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public void LogError(LoggingModel loggingModel)
        {
            try
            {
                string webRootPath = _env?.ContentRootPath; // Null-conditional operator added
                if (webRootPath != null)
                {
                    string logFile = Path.Combine(webRootPath, "Logging", "LogFiles", "Error.log");

                    // Ensure that the directory exists before writing to the file
                    Directory.CreateDirectory(Path.GetDirectoryName(logFile));

                    // Use using statement to ensure that the StreamWriter is properly disposed
                    using (StreamWriter writer = new StreamWriter(logFile, true))
                    {
                        writer.WriteLine($"Id:{loggingModel.LogId} - ServiceName:{loggingModel.ServiceName} - DateTimeNow: {loggingModel.LogTime} - Error: {loggingModel.ErrorMessage}");
                    }
                }
                else
                {
                    Console.WriteLine("Web root path is null.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }
        }
    }
}

