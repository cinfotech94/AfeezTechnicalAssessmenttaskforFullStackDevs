using AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.LoggingModel;

namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.LoggingFiles.LoggingService
{
    public interface ILoggingService
    {
        void LogError(LoggingModel loggingModel);
    }
}
