namespace AfeezTechnicalAssessmenttaskforFullStackDevs.pdf.Server.Models.LoggingModel
{
    public class LoggingModel
    {
        public string ErrorMessage { get; set; }
        public Guid LogId {get;set;}=Guid.NewGuid();
        public string ServiceName { get; set; }
        public DateTime LogTime { get; set; }

    }
}
